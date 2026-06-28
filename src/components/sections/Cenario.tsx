import { AnimatedSection } from '../ui/AnimatedSection'
import type { PropostaData } from '../../types/proposta'

interface Props {
  cenario: PropostaData['secoes']['cenario']
}

export function Cenario({ cenario }: Props) {
  return (
    <AnimatedSection id="cenario">
      <p className="section-number">01 — O Cenario</p>
      <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '40px' }}>
        O que esta em jogo
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
        {[
          { label: 'Posicionamento', texto: cenario.problema },
          { label: 'Publico', texto: cenario.publico },
          { label: 'Desafio', texto: cenario.desafio },
        ].map(({ label, texto }) => (
          <div key={label} style={{ display: 'flex', gap: '12px' }}>
            <div className="gold-bar" />
            <div>
              <p style={{ fontSize: '0.72rem', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>{label}</p>
              <p style={{ color: 'var(--ice)', lineHeight: 1.7 }}>{texto}</p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
