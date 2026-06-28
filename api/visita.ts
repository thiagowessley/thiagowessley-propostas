import type { VercelRequest, VercelResponse } from '@vercel/node'

const MAKE_WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL ?? ''

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { slug, referrer } = req.body as { slug: string; referrer?: string }
  const ip = (req.headers['x-forwarded-for'] as string) ?? req.socket.remoteAddress ?? 'desconhecido'
  const device = req.headers['user-agent'] ?? 'desconhecido'
  const agora = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })

  if (MAKE_WEBHOOK_URL) {
    await fetch(MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, ip, device, referrer, agora }),
    }).catch(() => null)
  }

  return res.status(200).json({ ok: true })
}
