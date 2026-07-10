import { AnimatedSection } from '../ui/AnimatedSection'
import type { TermoColuna } from '../../types/proposta'

interface Props {
  colunas: TermoColuna[]
}

/** Divide o titulo em parte fina (tudo menos a ultima palavra) + parte grossa (ultima palavra). */
function TituloColuna({ titulo }: { titulo: string }) {
  const palavras = titulo.trim().split(' ')
  const bold = palavras.pop() ?? ''
  const thin = palavras.join(' ')
  return (
    <h3 className="sec-title" style={{ marginBottom: '28px' }}>
      {thin && <span className="thin" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)' }}>{thin}</span>}
      <span className="bold" style={{ fontSize: 'clamp(1.7rem, 3.6vw, 2.6rem)' }}>{bold}</span>
    </h3>
  )
}

function Coluna({ col }: { col: TermoColuna }) {
  return (
    <div>
      <TituloColuna titulo={col.titulo} />
      <ul className="gold-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {col.itens.map((it, i) => (
          <li key={i}>
            <span style={{ color: 'var(--ice)', lineHeight: 1.65, fontSize: '0.92rem' }}>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ContratoEntrega({ colunas }: Props) {
  return (
    <AnimatedSection id="contrato">
      {colunas.length >= 2 ? (
        <div className="termos-grid">
          <Coluna col={colunas[0]} />
          <div className="termos-divisor" />
          <Coluna col={colunas[1]} />
        </div>
      ) : (
        colunas.map((c, i) => <Coluna key={i} col={c} />)
      )}
    </AnimatedSection>
  )
}
