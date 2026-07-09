import puppeteer from 'puppeteer-core'

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
const URL = 'http://localhost:5173/p/instituto-site'
const SCRATCH = 'C:\\Users\\thwsg\\AppData\\Local\\Temp\\claude\\C--Users-thwsg\\d050de5a-b616-4871-9c7f-00d87c26dc92\\scratchpad'

const target = process.argv[2] || 'encerramento'

const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: 'new',
  args: ['--no-sandbox', '--disable-gpu', '--hide-scrollbars'],
})
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 })
await page.goto(URL, { waitUntil: 'networkidle2', timeout: 25000 }).catch((e) => console.log('goto warn:', e.message))
await page.evaluate((id) => document.getElementById(id)?.scrollIntoView({ block: 'start' }), target)
await new Promise((r) => setTimeout(r, 1800))
const el = await page.$('#' + target)
if (el) {
  await el.screenshot({ path: `${SCRATCH}\\${target}.png` })
  console.log('shot OK:', target)
} else {
  console.log('elemento nao encontrado:', target)
}
await browser.close()
