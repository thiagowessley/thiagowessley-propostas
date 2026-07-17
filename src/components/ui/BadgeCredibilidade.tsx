export function BadgeCredibilidade() {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 16px',
      border: '1px solid var(--border)',
      borderRadius: '4px',
      fontSize: '0.75rem',
      color: 'var(--muted)',
      marginTop: '40px',
    }}>
      <span style={{ color: 'var(--gold)' }}>&#10022;</span>
      Esta proposta foi construída com o mesmo cuidado que o seu projeto vai receber.
    </div>
  )
}
