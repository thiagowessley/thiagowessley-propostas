import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AnimatedSection } from '../ui/AnimatedSection'
import type { FaseEscopo } from '../../types/proposta'

interface Props {
  fases: FaseEscopo[]
}

function CardAtivo({ fase }: { fase: FaseEscopo }) {
  return (
    <motion.div
      key={fase.numero}
      className="fase-card ativo"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
    >
      <p style={{ fontFamily: 'Archivo', fontWeight: 900, fontSize: '0.72rem', color: 'var(--gold)', letterSpacing: '0.2em', marginBottom: '6px' }}>
        FASE {fase.numero}
      </p>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>{fase.titulo}</h3>
      <ul className="gold-list" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {fase.itens.map((item, i) => (
          <li key={i}>
            <div>
              <span style={{ color: 'var(--white)' }}>{item.titulo}</span>
              {item.limite && (
                <span style={{ marginLeft: '8px', fontSize: '0.7rem', color: 'var(--muted)', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '3px', padding: '2px 6px' }}>
                  {item.limite}
                </span>
              )}
              {item.descricao && (
                <p style={{ color: 'var(--muted)', fontSize: '0.86rem', marginTop: '4px' }}>{item.descricao}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
      {fase.periodo && (
        <div style={{ marginTop: '24px' }}>
          <span className="capsule" style={{ background: 'var(--bg)', border: '1px solid var(--gold)', color: 'var(--gold)', fontSize: '0.78rem', padding: '8px 18px' }}>
            {fase.periodo}
          </span>
        </div>
      )}
    </motion.div>
  )
}

function CardInativo({ fase, onClick }: { fase: FaseEscopo; onClick: () => void }) {
  return (
    <div className="fase-card inativo" onClick={onClick} role="button" tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick() }}
    >
      <p style={{ fontFamily: 'Archivo', fontWeight: 900, fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.2em', marginBottom: '6px' }}>
        FASE {fase.numero}
      </p>
      <h3 style={{ fontSize: '1.05rem', color: 'var(--ice)' }}>{fase.titulo}</h3>
    </div>
  )
}

export function Escopo({ fases }: Props) {
  const [i, setI] = useState(0)
  const L = fases.length
  const prev = (i - 1 + L) % L
  const next = (i + 1) % L

  return (
    <AnimatedSection id="escopo">
      <p className="eyebrow"><span className="accent">Fases</span> do projeto</p>
      <h2 className="sec-title" style={{ marginBottom: '48px' }}>
        <span className="thin">O que esta</span>
        <span className="bold">incluido</span>
      </h2>

      {L === 1 ? (
        <div className="fases-stage">
          <CardAtivo fase={fases[0]} />
        </div>
      ) : (
        <>
          <div className="fases-stage">
            {L >= 3 && <CardInativo fase={fases[prev]} onClick={() => setI(prev)} />}
            <AnimatePresence mode="wait">
              <CardAtivo fase={fases[i]} />
            </AnimatePresence>
            {L >= 2 && <CardInativo fase={fases[next]} onClick={() => setI(next)} />}
          </div>

          {/* dots de navegacao */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '36px' }}>
            {fases.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Ver fase ${idx + 1}`}
                style={{
                  width: idx === i ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '999px',
                  border: 'none',
                  background: idx === i ? 'var(--gold)' : 'var(--border)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </>
      )}
    </AnimatedSection>
  )
}
