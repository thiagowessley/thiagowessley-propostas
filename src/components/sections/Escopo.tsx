import { motion } from 'framer-motion'
import { AnimatedSection } from '../ui/AnimatedSection'
import { CheckIcon } from '../ui/CheckIcon'
import type { FaseEscopo } from '../../types/proposta'

interface Props {
  fases: FaseEscopo[]
}

function FaseStepper({ fases }: { fases: FaseEscopo[] }) {
  return (
    <div className="fase-stepper">
      {fases.map((fase, i) => (
        <div className="fase-stepper-item" key={fase.numero}>
          <motion.div
            className="fase-node"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.35, delay: i * 0.18, ease: 'easeOut' }}
          >
            {fase.numero}
          </motion.div>
          {i < fases.length - 1 && (
            <motion.div
              className="fase-connector"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.45, delay: i * 0.18 + 0.2, ease: 'easeOut' }}
            />
          )}
        </div>
      ))}
    </div>
  )
}

function FaseCard({ fase, indiceFase }: { fase: FaseEscopo; indiceFase: number }) {
  return (
    <div className="plano-card fase-card">
      <p style={{ fontFamily: 'Archivo', fontWeight: 900, fontSize: '0.72rem', color: 'var(--gold)', letterSpacing: '0.2em', marginBottom: '6px' }}>
        FASE {fase.numero}
      </p>
      <h3 style={{ fontSize: '1.4rem', marginBottom: '20px' }}>{fase.titulo}</h3>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', flex: 1, marginBottom: '20px' }}>
        {fase.itens.map((item, i) => (
          <motion.li
            key={i}
            style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: indiceFase * 0.18 + i * 0.09, ease: 'easeOut' }}
          >
            <CheckIcon />
            <div>
              <span style={{ color: 'var(--white)', fontSize: '0.9rem' }}>{item.titulo}</span>
              {item.limite && (
                <span style={{ marginLeft: '8px', fontSize: '0.68rem', color: 'var(--muted)', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '3px', padding: '2px 6px' }}>
                  {item.limite}
                </span>
              )}
              {item.descricao && (
                <p style={{ color: 'var(--muted)', fontSize: '0.84rem', marginTop: '4px' }}>{item.descricao}</p>
              )}
            </div>
          </motion.li>
        ))}
      </ul>
      {fase.periodo && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <span className="capsule" style={{ background: 'var(--bg)', border: '1px solid var(--gold)', color: 'var(--gold)', fontSize: '0.75rem', padding: '8px 18px' }}>
            {fase.periodo}
          </span>
        </div>
      )}
    </div>
  )
}

export function Escopo({ fases }: Props) {
  return (
    <AnimatedSection id="escopo">
      <p className="eyebrow"><span className="accent">Fases</span> do projeto</p>
      <h2 className="sec-title" style={{ marginBottom: '40px' }}>
        <span className="thin">O que esta</span>
        <span className="bold">incluido</span>
      </h2>

      <FaseStepper fases={fases} />

      <div className="planos-grid" style={{ alignItems: 'stretch' }}>
        {fases.map((fase, i) => <FaseCard key={fase.numero} fase={fase} indiceFase={i} />)}
      </div>
    </AnimatedSection>
  )
}
