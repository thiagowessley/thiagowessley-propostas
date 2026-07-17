import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import type { PropostaData } from '../../types/proposta'
import { formatarData, calcularDiasRestantes } from '../../lib/tempo'

interface Props {
  proposta: PropostaData
  tempoLeitura: number
}

const lineUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.2, 0.7, 0.2, 1] as const },
  }),
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

  const envioISO = proposta.envio ?? new Date().toISOString().slice(0, 10)
  const diasValidade = Math.max(0, calcularDiasRestantes(proposta.validade) >= 0
    ? Math.round((new Date(proposta.validade).getTime() - new Date(envioISO).getTime()) / 86400000)
    : 0)

  return (
    <section
      id="capa"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '80px 0' }}
    >
      {proposta.video_capa && (
        <video
          autoPlay muted loop playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.12, zIndex: 0 }}
        >
          <source src={proposta.video_capa} type="video/mp4" />
        </video>
      )}

      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <motion.p
          custom={0} variants={lineUp} initial="hidden" animate="show"
          className="eyebrow"
          style={{ display: 'inline-flex' }}
        >
          <span className="accent">{proposta.servico}</span>
        </motion.p>

        {copyAbertura && (
          <motion.p
            custom={0} variants={lineUp} initial="hidden" animate="show"
            style={{ fontSize: '0.95rem', color: 'var(--gold)', marginBottom: '20px', fontStyle: 'italic', maxWidth: '620px' }}
          >
            {copyAbertura}
          </motion.p>
        )}

        <motion.h1 custom={1} variants={lineUp} initial="hidden" animate="show" className="sec-title" style={{ marginBottom: '12px' }}>
          <span className="thin">Proposta</span>
          <span className="bold">Comercial</span>
        </motion.h1>

        <motion.p
          custom={2} variants={lineUp} initial="hidden" animate="show"
          style={{ fontSize: '1.05rem', color: 'var(--ice)', marginBottom: '56px' }}
        >
          {proposta.servico} <span style={{ color: 'var(--muted)' }}>·</span> {proposta.cliente}
        </motion.p>

        {/* Cliente / Responsavel: so mostra quando ha responsavel distinto do cliente, senao repete o nome que ja aparece no subtitulo */}
        {proposta.responsavel && (
          <motion.div
            custom={3} variants={lineUp} initial="hidden" animate="show"
            style={{ display: 'flex', gap: '64px', flexWrap: 'wrap', marginBottom: '40px' }}
          >
            <div>
              <p style={{ fontWeight: 500, color: 'var(--white)', fontSize: '0.95rem' }}>Preparado para</p>
              <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>{proposta.cliente}</p>
            </div>
            <div>
              <p style={{ fontWeight: 500, color: 'var(--white)', fontSize: '0.95rem' }}>Responsável</p>
              <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>{proposta.responsavel}</p>
            </div>
          </motion.div>
        )}

        {/* linha de info: envio | validade ------ */}
        <motion.div
          custom={4} variants={lineUp} initial="hidden" animate="show"
          style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '64px', flexWrap: 'wrap' }}
        >
          <span style={{ width: '20px', height: '20px', borderRadius: '50%', border: '1px solid var(--muted)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: 'var(--muted)', flexShrink: 0, fontStyle: 'italic' }}>i</span>
          <p style={{ fontSize: '0.92rem', color: 'var(--ice)' }}>
            Envio da proposta {formatarData(envioISO)}
            <span style={{ color: 'var(--border)', margin: '0 14px' }}>|</span>
            Validade de {diasValidade} dias
          </p>
          <span style={{ flex: 1, minWidth: '24px', height: '1px', background: 'var(--border)' }} />
        </motion.div>

        {proposta.intro_capa && (
          <motion.p
            custom={5} variants={lineUp} initial="hidden" animate="show"
            style={{ fontSize: '0.9rem', color: 'var(--muted)', maxWidth: '780px', lineHeight: 1.8 }}
          >
            {proposta.intro_capa}
          </motion.p>
        )}

        <motion.p
          custom={6} variants={lineUp} initial="hidden" animate="show"
          style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '28px' }}
        >
          Leitura: ~{tempoLeitura} min
        </motion.p>
      </div>
    </section>
  )
}
