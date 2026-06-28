import { useState } from 'react'

const PASSOS = [
  'Li o escopo completo',
  'Entendi os valores e a validade',
]

interface Props {
  onCompleto: () => void
}

export function CommitmentLadder({ onCompleto }: Props) {
  const [marcados, setMarcados] = useState<boolean[]>(PASSOS.map(() => false))

  const toggle = (i: number) => {
    const novo = [...marcados]
    novo[i] = !novo[i]
    setMarcados(novo)
    if (novo.every(Boolean)) onCompleto()
  }

  return (
    <div style={{ marginBottom: '24px' }}>
      {PASSOS.map((passo, i) => (
        <label key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', cursor: 'pointer', userSelect: 'none' }}>
          <input
            type="checkbox"
            checked={marcados[i]}
            onChange={() => toggle(i)}
            style={{ width: '16px', height: '16px', accentColor: 'var(--gold)', cursor: 'pointer' }}
          />
          <span style={{ color: marcados[i] ? 'var(--muted)' : 'var(--ice)', fontSize: '0.9rem', textDecoration: marcados[i] ? 'line-through' : 'none' }}>
            {passo}
          </span>
        </label>
      ))}
    </div>
  )
}
