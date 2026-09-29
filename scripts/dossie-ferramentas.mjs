// Ferramentas do molde dossiê (28/09/2026). Sem instalar nada: Edge solto com porta de depuração
// e puppeteer-core (puppeteer.launch quebra com o Edge 153, ver gerar-pdf-plastico.mjs).
//
// Uso (dev server rodando; porta em BASE, padrão http://localhost:5176):
//   node scripts/dossie-ferramentas.mjs fotos <pasta> <rota> [<rota>...]    captura página inteira a 1280
//   node scripts/dossie-ferramentas.mjs comparar <pastaA> <pastaB>           diferença pixel a pixel
//   node scripts/dossie-ferramentas.mjs webp <largura> <qualidade> <saida> <img> [<img>...]
//   node scripts/dossie-ferramentas.mjs tela <largura> <altura> <saida.webp> <rota>   captura do topo
import puppeteer from 'puppeteer-core'
import { spawn } from 'node:child_process'
import { mkdirSync, readdirSync, readFileSync, existsSync } from 'node:fs'
import { basename, extname, join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
const PORT = 9334
const PROFILE = 'C:/Users/thwsg/AppData/Local/Temp/edge-dossie-ferramentas'
const BASE = process.env.BASE || 'http://localhost:5176'
const [, , modo, ...args] = process.argv

const edge = spawn(EDGE, [
  '--headless=new', '--disable-gpu', '--no-first-run', '--hide-scrollbars',
  `--remote-debugging-port=${PORT}`, `--user-data-dir=${PROFILE}`, 'about:blank',
], { stdio: 'ignore' })
await new Promise(r => setTimeout(r, 5000))
const browser = await puppeteer.connect({ browserURL: `http://127.0.0.1:${PORT}`, defaultViewport: null })

// Variáveis opcionais: ESQUEMA=light|dark, ALVO=seletor para rolar até ele, CHEIA=1 página inteira
async function paginaEstavel(page, url) {
  await page.emulateMediaFeatures([
    { name: 'prefers-reduced-motion', value: 'reduce' },
    { name: 'prefers-color-scheme', value: process.env.ESQUEMA || 'dark' },
  ])
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 45000 })
  // rola até o fim e volta, para disparar tudo que aparece ao entrar na tela
  await page.evaluate(async () => {
    const passo = Math.max(300, Math.floor(window.innerHeight * 0.8))
    for (let y = 0; y < document.body.scrollHeight; y += passo) {
      window.scrollTo(0, y)
      await new Promise(r => setTimeout(r, 120))
    }
    window.scrollTo(0, 0)
  })
  await new Promise(r => setTimeout(r, 2500))
}

try {
  if (modo === 'fotos') {
    const [pasta, ...rotas] = args
    mkdirSync(pasta, { recursive: true })
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    for (const rota of rotas) {
      await paginaEstavel(page, BASE + rota)
      const nome = rota.replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '') + '.png'
      await page.screenshot({ path: join(pasta, nome), fullPage: true })
      console.log('foto:', join(pasta, nome))
    }
  } else if (modo === 'comparar') {
    const [a, b] = args
    const page = await browser.newPage()
    let falhas = 0
    for (const nome of readdirSync(a).filter(n => n.endsWith('.png'))) {
      if (!existsSync(join(b, nome))) { console.log('FALTA em B:', nome); falhas++; continue }
      const ua = 'data:image/png;base64,' + readFileSync(join(a, nome)).toString('base64')
      const ub = 'data:image/png;base64,' + readFileSync(join(b, nome)).toString('base64')
      const r = await page.evaluate(async (ua, ub) => {
        const load = src => new Promise((ok, err) => { const i = new Image(); i.onload = () => ok(i); i.onerror = err; i.src = src })
        const [ia, ib] = await Promise.all([load(ua), load(ub)])
        if (ia.width !== ib.width || ia.height !== ib.height) return { tamanho: `${ia.width}x${ia.height} vs ${ib.width}x${ib.height}` }
        const px = img => { const c = document.createElement('canvas'); c.width = img.width; c.height = img.height; const x = c.getContext('2d'); x.drawImage(img, 0, 0); return x.getImageData(0, 0, c.width, c.height).data }
        const da = px(ia), db = px(ib)
        let dif = 0
        for (let k = 0; k < da.length; k += 4) if (da[k] !== db[k] || da[k + 1] !== db[k + 1] || da[k + 2] !== db[k + 2]) dif++
        return { dif, total: da.length / 4 }
      }, ua, ub)
      if (r.tamanho) { console.log('DIFERENTE (tamanho):', nome, r.tamanho); falhas++ }
      else if (r.dif > 0) { console.log(`DIFERENTE: ${nome} ${r.dif} de ${r.total} pixels`); falhas++ }
      else console.log('IGUAL:', nome)
    }
    process.exitCode = falhas ? 1 : 0
  } else if (modo === 'webp') {
    const [largura, qualidade, saida, ...imgs] = args
    mkdirSync(saida, { recursive: true })
    const page = await browser.newPage()
    for (const img of imgs) {
      // abre o próprio arquivo (página em branco não pode carregar arquivo local)
      await page.setViewport({ width: 400, height: 400 })
      await page.goto(pathToFileURL(resolve(img)).href, { waitUntil: 'load' })
      const dim = await page.evaluate(() => { const i = document.images[0]; return [i.naturalWidth, i.naturalHeight] })
      const w = Math.min(Number(largura), dim[0])
      const h = Math.round(w * dim[1] / dim[0])
      await page.setViewport({ width: w, height: h })
      await page.evaluate((w, h) => {
        document.body.style.cssText = 'margin:0;background:#fff'
        const i = document.images[0]
        i.style.cssText = `display:block;width:${w}px;height:${h}px;object-fit:cover;margin:0;position:absolute;left:0;top:0`
      }, w, h)
      const out = join(saida, basename(img, extname(img)) + '.webp')
      await page.screenshot({ path: out, type: 'webp', quality: Number(qualidade), clip: { x: 0, y: 0, width: w, height: h } })
      console.log(`webp: ${out} (${w}x${h})`)
    }
  } else if (modo === 'tela') {
    const [largura, altura, saida, rota] = args
    const page = await browser.newPage()
    await page.setViewport({ width: Number(largura), height: Number(altura) })
    await paginaEstavel(page, BASE + rota)
    if (process.env.ALVO) {
      await page.evaluate(sel => { const el = document.querySelector(sel); if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 90) }, process.env.ALVO)
      await new Promise(r => setTimeout(r, 1200))
    }
    const tipo = saida.endsWith('.jpg') ? 'jpeg' : saida.endsWith('.png') ? 'png' : 'webp'
    await page.screenshot({ path: saida, type: tipo, ...(tipo === 'png' ? {} : { quality: 82 }), fullPage: process.env.CHEIA === '1' })
    console.log('tela:', saida)
  } else {
    console.log('modo desconhecido:', modo)
    process.exitCode = 2
  }
} finally {
  await browser.disconnect()
  edge.kill()
}
