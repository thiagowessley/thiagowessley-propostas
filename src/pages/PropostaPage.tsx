import { useParams } from 'react-router-dom'
import { getPropostaBySlug } from '../propostas/index'

export function PropostaPage() {
  const { slug } = useParams<{ slug: string }>()
  const proposta = slug ? getPropostaBySlug(slug) : undefined

  if (!proposta) {
    return (
      <div style={{ padding: '60px', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--muted)' }}>Proposta nao encontrada.</h2>
        <p style={{ color: 'var(--muted)', marginTop: '8px' }}>
          Verifique o link ou entre em contato.
        </p>
      </div>
    )
  }

  // componentes das secoes serao adicionados aqui nas proximas tasks
  return (
    <div className="proposta-page">
      <div style={{ padding: '60px', color: 'var(--ice)' }}>
        <p style={{ color: 'var(--gold)' }}>Proposta carregada:</p>
        <h1>{proposta.cliente}</h1>
        <p>{proposta.servico}</p>
      </div>
    </div>
  )
}
