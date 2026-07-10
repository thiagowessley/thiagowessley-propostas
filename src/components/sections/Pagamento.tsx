import { AnimatedSection } from '../ui/AnimatedSection'
import { DecoLines } from '../ui/DecoLines'
import type { OpcaoPagamento } from '../../types/proposta'

interface Props {
  pagamento: OpcaoPagamento
}

export function Pagamento({ pagamento }: Props) {
  return (
    <AnimatedSection id="pagamento">
      <span className="assinatura" style={{ position: 'absolute', top: '40px', right: 0 }}>Thiago Wessley</span>
      <DecoLines style={{ top: '40px', right: '-40px', opacity: 0.25 }} width={360} height={420} />

      <h2 className="sec-title" style={{ marginBottom: '44px' }}>
        <span className="thin">Condições de</span>
        <span className="bold">Pagamento</span>
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', maxWidth: '640px', position: 'relative', zIndex: 1 }}>
        {pagamento.blocos.map((b, i) => (
          <div key={i}>
            <p style={{ fontWeight: 600, color: 'var(--white)', marginBottom: '4px', fontSize: '1rem' }}>{b.titulo}</p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.6, fontSize: '0.92rem' }}>{b.descricao}</p>
          </div>
        ))}
      </div>

      {pagamento.meios.length > 0 && (
        <div className="pay-strip">
          {pagamento.meios.map((m, i) => (
            <div key={i} className="pay-item">
              <p style={{ fontFamily: 'Archivo', fontWeight: 800, color: 'var(--gold)', fontSize: '0.95rem', marginBottom: '4px' }}>{m.nome}</p>
              <p style={{ color: 'var(--muted)', fontSize: '0.78rem', lineHeight: 1.4 }}>{m.detalhe}</p>
            </div>
          ))}
        </div>
      )}
    </AnimatedSection>
  )
}
