import { useState } from 'react'
import { formatarReais, calcularPorDia } from '../../lib/tempo'

interface Props {
  valor: number
  label?: string
}

export function ValorHover({ valor, label = 'Investimento' }: Props) {
  const [hover, setHover] = useState(false)

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-block', cursor: 'default' }}
    >
      <p style={{ fontSize: '0.72rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '4px' }}>{label}</p>
      <p style={{ fontFamily: 'Archivo', fontWeight: 900, fontSize: '2.5rem', color: 'var(--gold)', lineHeight: 1 }}>
        {formatarReais(valor)}
      </p>
      <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '6px', opacity: hover ? 1 : 0, transition: 'opacity 0.2s', minHeight: '1.2em' }}>
        {hover ? `Equivale a ${calcularPorDia(valor)}` : ''}
      </p>
    </div>
  )
}
