/** Dispara notificacao de abertura para a Edge Function */
export async function registrarVisita(slug: string): Promise<void> {
  try {
    await fetch('/api/visita', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, referrer: document.referrer }),
    })
  } catch {
    // silencioso: nao quebrar a proposta se o analytics falhar
  }
}
