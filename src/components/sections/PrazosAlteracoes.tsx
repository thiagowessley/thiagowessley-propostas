import { AnimatedSection } from '../ui/AnimatedSection'
import type { ItemPrazo } from '../../types/proposta'

interface Props {
  prazos: ItemPrazo[]
}

/** Renderiza o texto destacando em negrito o trecho informado em `bold`. */
function TextoComBold({ item }: { item: ItemPrazo }) {
  if (!item.bold || !item.texto.includes(item.bold)) {
    return <>{item.texto}</>
  }
  const [antes, depois] = item.texto.split(item.bold)
  return (
    <>
      {antes}
      <strong style={{ color: 'var(--white)', fontWeight: 600 }}>{item.bold}</strong>
      {depois}
    </>
  )
}

export function PrazosAlteracoes({ prazos }: Props) {
  return (
    <AnimatedSection id="prazos">
      <h2 className="sec-title" style={{ marginBottom: '44px' }}>
        <span className="thin">Prazos e</span>
        <span className="bold">Alterações</span>
      </h2>
      <ul className="gold-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '820px' }}>
        {prazos.map((item, i) => (
          <li key={i}>
            <span style={{ color: 'var(--ice)', lineHeight: 1.7, fontSize: '0.96rem' }}>
              <TextoComBold item={item} />
            </span>
          </li>
        ))}
      </ul>
    </AnimatedSection>
  )
}
