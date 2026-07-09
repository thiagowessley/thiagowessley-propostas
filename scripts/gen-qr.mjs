import QRCode from 'qrcode'

const link = 'https://wa.me/5547992358161'
const out = 'public/img/qr-whatsapp.png'

await QRCode.toFile(out, link, {
  type: 'png',
  width: 320,
  margin: 1,
  color: { dark: '#C9A050', light: '#0D0D0D' },
})
console.log('QR gerado em', out)
