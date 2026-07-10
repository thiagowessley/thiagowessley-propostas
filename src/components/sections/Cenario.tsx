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

      {cenario.entregas && cenario.entregas.length > 0 && (
        <div style={{ marginTop: '44px' }}>
          <p style={{ fontSize: '0.72rem', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px' }}>
            O que este projeto precisa entregar
          </p>
          <ul className="gold-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px 24px' }}>
            {cenario.entregas.map((item, i) => (
              <li key={i} style={{ color: 'var(--ice)', fontSize: '0.92rem' }}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </AnimatedSection>
  )
}
