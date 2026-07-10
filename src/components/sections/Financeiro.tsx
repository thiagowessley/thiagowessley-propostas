import { AnimatedSection } from '../ui/AnimatedSection'
import { ValorHover } from '../ui/ValorHover'
import { CheckIcon } from '../ui/CheckIcon'
import type { PropostaData } from '../../types/proposta'
import { formatarReais } from '../../lib/tempo'

interface Props {
  valor: PropostaData['valor']
  planos?: PropostaData['secoes']['planos']
  primeiros30?: string[]
  confidencialidade?: string
}

function PlanoCard({ plano }: { plano: NonNullable<Props['planos']>[number] }) {
  const valorTexto = plano.valor > 0 ? formatarReais(plano.valor) : 'Sob consulta'
  return (
    <div className={`plano-card${plano.destaque ? ' destaque' : ''}`}>
      {plano.destaque && <span className="plano-badge">Mais escolhido</span>}
      <h3 style={{ fontSize: '1.6rem', marginBottom: '6px' }}>{plano.nome}</h3>
      <p className="plano-resumo" style={{ fontWeight: 500, color: 'var(--gold)', marginBottom: '20px', fontSize: '0.95rem', fontStyle: 'italic' }}>
        {plano.resumo}
      </p>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, marginBottom: '24px' }}>
        {plano.itens.map((it, i) => (
          <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.88rem', color: 'var(--ice)' }}>
            <CheckIcon />
            <span>{it}</span>
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <span className="capsule" style={{
          background: plano.destaque ? 'var(--gold)' : 'var(--bg)',
          color: plano.destaque ? '#0D0D0D' : 'var(--white)',
          border: plano.destaque ? 'none' : '1px solid var(--border)',
          fontSize: '1.15rem',
          width: '100%',
        }}>
          {valorTexto}{plano.periodo && plano.valor > 0 ? <span style={{ fontSize: '0.7rem', fontWeight: 400, marginLeft: '4px' }}>{plano.periodo}</span> : null}
        </span>
      </div>
      {plano.rodape && (
        <p style={{ marginTop: '12px', fontSize: '0.72rem', color: 'var(--muted)', textAlign: 'center' }}>
          {plano.rodape}
        </p>
      )}
    </div>
  )
}

export function Financeiro({ valor, planos, primeiros30, confidencialidade }: Props) {
  const temPlanos = planos && planos.length > 0

  return (
    <AnimatedSection id="financeiro">
      <p className="eyebrow"><span className="accent">Investimento</span></p>
      <h2 className="sec-title" style={{ marginBottom: '48px' }}>
        <span className="thin">{temPlanos ? 'Escolha seu' : 'Proposta'}</span>
        <span className="bold">{temPlanos ? 'pacote' : 'financeira'}</span>
      </h2>

      {valor.alternativa && (
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <p style={{ fontSize: '0.72rem', color: 'var(--muted)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Referência de mercado (agência)</p>
          <p style={{ fontFamily: 'Archivo', fontWeight: 900, fontSize: '1.6rem', color: 'var(--muted)', textDecoration: 'line-through' }}>
            {formatarReais(valor.alternativa)}
          </p>
        </div>
      )}

      {temPlanos ? (
        <div className="planos-grid">
          {planos!.map((p, i) => <PlanoCard key={i} plano={p} />)}
        </div>
      ) : (
        <div style={{ maxWidth: '480px', margin: '0 auto', padding: '32px', background: 'var(--bg-card)', border: '1px solid var(--gold)', borderRadius: '18px' }}>
          <ValorHover valor={valor.principal} label="Sua proposta" />
          {valor.manutencao && (
            <p style={{ marginTop: '16px', color: 'var(--muted)', fontSize: '0.9rem' }}>
              + {formatarReais(valor.manutencao)}/mês manutenção (opcional)
            </p>
          )}
        </div>
      )}

      {primeiros30 && primeiros30.length > 0 && (
        <div style={{ marginTop: '64px', maxWidth: '680px' }}>
          <h3 style={{ fontSize: '1.1rem', color: 'var(--white)', marginBottom: '18px' }}>Os primeiros 30 dias</h3>
          <ul className="gold-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {primeiros30.map((item, i) => (
              <li key={i}>
                <span style={{ color: 'var(--ice)', fontSize: '0.92rem' }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {confidencialidade && (
        <p style={{ marginTop: '40px', color: 'var(--muted)', fontSize: '0.8rem', borderTop: '1px solid var(--border)', paddingTop: '20px', maxWidth: '780px' }}>
          {confidencialidade}
        </p>
      )}
    </AnimatedSection>
  )
}
