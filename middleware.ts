// Cartão de compartilhamento das propostas (28/09/2026). O site é de uma página só: o robô que monta
// a prévia do link no WhatsApp não roda o código e sempre lia o título genérico do index.html.
// Só para esses robôs, em /p/:slug, devolve um HTML curto com as metas og da proposta. Quem abre o
// link de verdade segue direto para a página, sem passar por aqui.
import { next } from '@vercel/functions'
import { getPropostaBySlug } from './src/propostas/index'

export const config = { matcher: '/p/:slug*' }

const ROBOS = /whatsapp|facebookexternalhit|facebot|twitterbot|linkedinbot|slackbot|telegrambot|discordbot|skypeuripreview|pinterest|vkshare|embedly|redditbot/i

const esc = (s: string) => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c] as string)

export default function middleware(request: Request) {
  if (!ROBOS.test(request.headers.get('user-agent') || '')) return next()
  const url = new URL(request.url)
  const proposta = getPropostaBySlug(url.pathname.split('/')[2] || '')
  if (!proposta) return next()

  const titulo = esc(`${proposta.servico} | ${proposta.cliente}`)
  const descricao = esc(`Proposta comercial para ${proposta.cliente}: escopo, prazo e investimento.`)
  const imagem = proposta.ogImagem ? esc(new URL(proposta.ogImagem, url.origin).href) : ''
  const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">
<title>${titulo}</title>
<meta name="description" content="${descricao}">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="Thiago Wessley">
<meta property="og:title" content="${titulo}">
<meta property="og:description" content="${descricao}">
<meta property="og:url" content="${esc(url.origin + url.pathname)}">
${imagem ? `<meta property="og:image" content="${imagem}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">` : '<meta name="twitter:card" content="summary">'}
<meta name="robots" content="noindex">
</head><body><a href="${esc(url.pathname)}">${titulo}</a></body></html>`

  return new Response(html, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'public, max-age=300' } })
}
