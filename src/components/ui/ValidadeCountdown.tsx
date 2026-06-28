import { calcularDiasRestantes, formatarData } from '../../lib/tempo'

interface Props {
  validade: string
}

export function ValidadeCountdown({ validade }: Props) {
  const dias = calcularDiasRestantes(validade)
  const vencida = dias < 0
  const urgente = dias <= 3 && !vencida

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '6px 14px',
      border: `1px solid ${vencida ? '#e07070' : urgente ? 'var(--gold)' : 'var(--border)'}`,
      borderRadius: '4px',
      fontSize: '0.8rem',
      color: vencida ? '#e07070' : urgente ? 'var(--gold)' : 'var(--muted)',
    }}>
      {vencida
        ? 'Proposta vencida'
        : dias === 0
          ? 'Vence hoje'
          : `Valida por mais ${dias} dia${dias === 1 ? '' : 's'} — ate ${formatarData(validade)}`
      }
    </div>
  )
}
