import { useEffect, useState } from 'react'

interface Props {
  whatsapp: string
}

export function PopupSaida({ whatsapp }: Props) {
  const [visivel, setVisivel] = useState(false)
  const [dispensado, setDispensado] = useState(false)

  useEffect(() => {
    if (dispensado) return
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) setVisivel(true)
    }
    document.addEventListener('mouseleave', onMouseLeave)
    return () => document.removeEventListener('mouseleave', onMouseLeave)
  }, [dispensado])

  if (!visivel || dispensado) return null

  return (
    <div className="popup-saida" style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
    }}>
      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--gold)', borderRadius: '12px', padding: '40px', maxWidth: '440px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>Ficou com alguma duvida?</h3>
        <p style={{ color: 'var(--muted)', marginBottom: '28px', fontSize: '0.9rem', lineHeight: 1.6 }}>
          Me manda uma mensagem agora. Respondo em minutos.
        </p>
        <a
          href={`https://wa.me/${whatsapp}?text=Ola, vi a proposta e tenho uma duvida.`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block', padding: '14px 28px', background: 'var(--gold)', color: '#0D0D0D', fontFamily: 'Archivo', fontWeight: 900, textDecoration: 'none', borderRadius: '4px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}
          onClick={() => setDispensado(true)}
        >
          Falar no WhatsApp
        </a>
        <button
          onClick={() => { setVisivel(false); setDispensado(true) }}
          style={{ display: 'block', margin: '16px auto 0', background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', fontSize: '0.8rem' }}
        >
          Continuar lendo
        </button>
      </div>
    </div>
  )
}
