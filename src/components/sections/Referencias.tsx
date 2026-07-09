import { AnimatedSection } from '../ui/AnimatedSection'
import { BadgeCredibilidade } from '../ui/BadgeCredibilidade'
import type { Referencia } from '../../types/proposta'

interface Props {
  referencias: Referencia[]
}

export function Referencias({ referencias }: Props) {
  if (!referencias || referencias.length === 0) return null

  return (
    <AnimatedSection id="referencias">
      <p className="eyebrow"><span className="accent">Referencias</span></p>
      <h2 className="sec-title" style={{ marginBottom: '12px' }}>
        <span className="thin">O que nos</span>
        <span className="bold">inspirou</span>
      </h2>
      <p style={{ color: 'var(--muted)', marginBottom: '40px', fontSize: '0.9rem' }}>
        Sites reais estudados para este projeto, com a tecnica que vamos aplicar.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
        {referencias.map((ref, i) => (
          <a
            key={i}
            href={ref.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', display: 'block', padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', transition: 'border-color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
          >
            <p style={{ fontSize: '0.72rem', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>Referencia {String(i + 1).padStart(2, '0')}</p>
            <p style={{ color: 'var(--white)', fontWeight: 500, marginBottom: '12px' }}>{ref.nome}</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.6 }}>
              <span style={{ color: 'var(--ice)' }}>O que aplicamos: </span>{ref.tecnica}
            </p>
          </a>
        ))}
      </div>
      <BadgeCredibilidade />
    </AnimatedSection>
  )
}
