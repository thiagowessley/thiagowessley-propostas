import { useState } from 'react'
import type { ItemFAQ } from '../../types/proposta'

interface Props {
  itens: ItemFAQ[]
}

export function FAQInline({ itens }: Props) {
  const [aberto, setAberto] = useState<number | null>(null)

  return (
    <div style={{ marginTop: '48px' }}>
      <h3 style={{ fontSize: '1rem', color: 'var(--ice)', marginBottom: '20px' }}>Perguntas frequentes</h3>
      {itens.map((item, i) => (
        <div
          key={i}
          style={{ borderTop: '1px solid var(--border)', padding: '16px 0', cursor: 'pointer' }}
          onClick={() => setAberto(aberto === i ? null : i)}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ color: 'var(--ice)', fontSize: '0.9rem' }}>{item.pergunta}</p>
            <span style={{ color: 'var(--gold)', fontSize: '1.2rem', flexShrink: 0, marginLeft: '16px' }}>
              {aberto === i ? '-' : '+'}
            </span>
          </div>
          {aberto === i && (
            <p style={{ color: 'var(--muted)', fontSize: '0.88rem', marginTop: '12px', lineHeight: 1.7 }}>
              {item.resposta}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
