import { AnimatedSection } from '../ui/AnimatedSection'
import { ValorHover } from '../ui/ValorHover'
import type { PropostaData } from '../../types/proposta'
import { formatarReais } from '../../lib/tempo'

interface Props {
  valor: PropostaData['valor']
  primeiros30?: string[]
  confidencialidade?: string
}

export function Financeiro({ valor, primeiros30, confidencialidade }: Props) {
  return (
    <AnimatedSection id="financeiro">
      <p className="section-number">03 — Investimento</p>
      <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '40px' }}>
        Proposta financeira
      </h2>

      {valor.alternativa && (
        <div style={{ marginBottom: '32px', padding: '24px', border: '1px solid var(--border)', borderRadius: '8px', opacity: 0.6 }}>
          <p style={{ fontSize: '0.72rem', color: 'var(--muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Referencia de mercado (agencia)</p>
          <p style={{ fontFamily: 'Archivo', fontWeight: 900, fontSize: '1.8rem', color: 'var(--muted)', textDecoration: 'line-through' }}>
            {formatarReais(valor.alternativa)}
          </p>
        </div>
      )}

      <div style={{ padding: '32px', background: 'var(--bg-card)', border: '1px solid var(--gold)', borderRadius: '8px', marginBottom: '24px' }}>
        <ValorHover valor={valor.principal} label="Sua proposta" />
        {valor.manutencao && (
          <p style={{ marginTop: '16px', color: 'var(--muted)', fontSize: '0.9rem' }}>
            + {formatarReais(valor.manutencao)}/mes manutencao (opcional)
          </p>
        )}
      </div>

      {primeiros30 && primeiros30.length > 0 && (
        <div style={{ marginTop: '40px' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--ice)', marginBottom: '16px' }}>Os primeiros 30 dias</h3>
          <ul className="gold-list" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {primeiros30.map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: '8px' }} />
                <span style={{ color: 'var(--ice)', fontSize: '0.9rem' }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {confidencialidade && (
        <p style={{ marginTop: '32px', color: 'var(--muted)', fontSize: '0.8rem', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
          {confidencialidade}
        </p>
      )}
    </AnimatedSection>
  )
}
