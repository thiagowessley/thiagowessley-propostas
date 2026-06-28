import { useEffect, useState } from 'react'
import type { PropostaData } from '../../types/proposta'
import { ValidadeCountdown } from '../ui/ValidadeCountdown'

interface Props {
  proposta: PropostaData
  tempoLeitura: number
}

export function Capa({ proposta, tempoLeitura }: Props) {
  const [copyAbertura, setCopyAbertura] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const ref = params.get('ref') ?? 'default'
    const copy = proposta.utm_copy?.[ref as keyof typeof proposta.utm_copy]
      ?? proposta.utm_copy?.default
      ?? ''
    setCopyAbertura(copy)
  }, [proposta.utm_copy])

  return (
    <section id="capa" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>

      {proposta.video_capa && (
        <video
          autoPlay muted loop playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15, zIndex: 0 }}
        >
          <source src={proposta.video_capa} type="video/mp4" />
        </video>
      )}

      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '32px' }}>
          Leitura: ~{tempoLeitura} min
        </p>

        {copyAbertura && (
          <p style={{ fontSize: '0.9rem', color: 'var(--gold)', marginBottom: '16px', fontStyle: 'italic' }}>
            {copyAbertura}
          </p>
        )}

        <p style={{ fontFamily: 'Archivo', fontWeight: 900, fontSize: '0.8rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '24px' }}>
          Thiago Wessley
        </p>

        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '16px' }}>
          {proposta.servico}
        </h1>

        <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '48px' }}>
          Proposta para {proposta.cliente}
        </p>

        <ValidadeCountdown validade={proposta.validade} />
      </div>
    </section>
  )
}
