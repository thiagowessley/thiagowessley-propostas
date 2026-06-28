import { AnimatedSection } from '../ui/AnimatedSection'
import type { FaseEscopo } from '../../types/proposta'

interface Props {
  fases: FaseEscopo[]
}

/** Reordena itens com Serial Position Effect:
 *  mais importante no indice 0 (primacy), segundo mais importante no ultimo (recency). */
function aplicarSerialPosition<T>(itens: T[]): T[] {
  if (itens.length < 3) return itens
  const [primeiro, segundo, ...resto] = itens
  return [primeiro, ...resto, segundo]
}

export function Escopo({ fases }: Props) {
  return (
    <AnimatedSection id="escopo">
      <p className="section-number">02 — Escopo</p>
      <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '40px' }}>
        O que esta incluido
      </h2>
      {fases.map((fase) => {
        const itensOrdenados = aplicarSerialPosition(fase.itens)
        return (
          <div key={fase.numero} style={{ marginBottom: '48px' }}>
            <p style={{ fontSize: '0.72rem', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '8px' }}>
              Fase {fase.numero}
            </p>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '24px' }}>{fase.titulo}</h3>
            <ul className="gold-list" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {itensOrdenados.map((item, ii) => (
                <li key={ii} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: '8px' }} />
                  <div>
                    <span style={{ color: 'var(--white)' }}>{item.titulo}</span>
                    {item.limite && (
                      <span style={{ marginLeft: '8px', fontSize: '0.72rem', color: 'var(--muted)', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '3px', padding: '2px 6px' }}>
                        {item.limite}
                      </span>
                    )}
                    {item.descricao && (
                      <p style={{ color: 'var(--muted)', fontSize: '0.88rem', marginTop: '4px' }}>{item.descricao}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </AnimatedSection>
  )
}
