import puppeteer from 'puppeteer-core'
const EDGE='C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
const SC='C:\Users\thwsg\AppData\Local\Temp\claude\C--Users-thwsg\d050de5a-b616-4871-9c7f-00d87c26dc92\scratchpad'
const b=await puppeteer.launch({executablePath:EDGE,headless:'new',args:['--no-sandbox','--allow-file-access-from-files']})
const p=await b.newPage()
await p.setViewport({width:1100,height:800})
await p.goto('file:///'+SC.replace(/\/g,'/')+'/imgs.html',{waitUntil:'networkidle2',timeout:15000}).catch(e=>console.log('warn',e.message))
await new Promise(r=>setTimeout(r,800))
await p.screenshot({path:SC+'\imgs.png',fullPage:true})
console.log('done')
await b.close()
