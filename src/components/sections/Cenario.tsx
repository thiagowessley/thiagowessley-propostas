import { AnimatedSection } from '../ui/AnimatedSection'
import type { PropostaData } from '../../types/proposta'

interface Props {
  cenario: PropostaData['secoes']['cenario']
}

export function Cenario({ cenario }: Props) {
  return (
    <AnimatedSection id="cenario">
      <p className="eyebrow"><span className="accent">O</span> cenario</p>
      <h2 className="sec-title" style={{ marginBottom: '44px' }}>
        <span className="thin">O que esta</span>
        <span className="bold">em jogo</span>
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
