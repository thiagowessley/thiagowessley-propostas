import { AnimatedSection } from '../ui/AnimatedSection'
import type { ServicoAdicional as ServicoAdicionalData } from '../../types/proposta'

interface Props {
  servico: ServicoAdicionalData
}

export function ServicoAdicional({ servico }: Props) {
  return (
    <AnimatedSection id="servico-adicional" className="">
      <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-soft)', zIndex: -1 }} />

      <div className="split inverter-mobile" style={{ gridTemplateColumns: '1fr 1fr' }}>
        {/* Texto a esquerda */}
        <div className="reading" style={{ maxWidth: '520px' }}>
          <h2 className="sec-title" style={{ marginBottom: '28px' }}>
            <span className="bold">{servico.titulo}</span>
          </h2>
          {servico.paragrafos.map((p, i) => (
            <p key={i} style={{ color: 'var(--ice)', lineHeight: 1.75, marginBottom: '18px', fontSize: '0.96rem' }}>
              {p}
            </p>
          ))}
        </div>

        {/* Foto a direita */}
        <div className="media horizontal" style={{ borderRadius: '4px 4px 4px 64px' }}>
          {servico.imagem && <img src={servico.imagem} alt={servico.titulo} loading="lazy" />}
        </div>
      </div>
    </AnimatedSection>
  )
}
