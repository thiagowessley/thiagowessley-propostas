// Gera os 2 PDFs da linha em plástico (catálogo e plano) a partir das páginas ao vivo no dev
// server. Edge 153 quebra com puppeteer.launch direto (ver skill licoes-tecnicas, 19/09/2026):
// sobe o Edge solto com porta de depuração e conecta nele em vez de deixar o puppeteer abrir.
import puppeteer from 'puppeteer-core'
import { spawn } from 'node:child_process'
import { mkdirSync } from 'node:fs'

const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
const PORT = 9333
const PROFILE = 'C:/Users/thwsg/AppData/Local/Temp/edge-pdf-plastico'
const OUT_DIR = process.argv[2] || 'C:/Users/thwsg/AppData/Local/Temp/pdf-plastico'
mkdirSync(OUT_DIR, { recursive: true })

const PAGINAS = [
  { url: 'http://localhost:5176/c/linha-plastico', arquivo: `${OUT_DIR}/catalogo-linha-plastico.pdf` },
  { url: 'http://localhost:5176/n/linha-plastico', arquivo: `${OUT_DIR}/plano-linha-plastico.pdf` },
]

const edge = spawn(EDGE, [
  '--headless=new', '--disable-gpu', '--no-first-run',
  `--remote-debugging-port=${PORT}`, `--user-data-dir=${PROFILE}`, 'about:blank',
], { stdio: 'ignore' })

await new Promise(r => setTimeout(r, 6000))

const browser = await puppeteer.connect({ browserURL: `http://127.0.0.1:${PORT}`, defaultViewport: null })

for (const { url, arquivo } of PAGINAS) {
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })
  await page.emulateMediaType('print')
  await page.pdf({ path: arquivo, printBackground: true, displayHeaderFooter: false, preferCSSPageSize: true })
  console.log('gerado:', arquivo)
  await page.close()
}

await browser.disconnect()
edge.kill()
console.log('feito')
