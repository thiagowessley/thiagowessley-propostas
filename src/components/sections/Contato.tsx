import { useState } from 'react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { FAQInline } from '../ui/FAQInline'
import { CommitmentLadder } from '../ui/CommitmentLadder'
import type { PropostaData } from '../../types/proposta'
import { baixarPDF } from '../../lib/pdf'

interface Props {
  proposta: PropostaData
}

export function Contato({ proposta }: Props) {
  const [ctaAtivo, setCtaAtivo] = useState(false)
  const numeroSecao = proposta.secoes.referencias?.length ? '05' : '04'

  return (
    <AnimatedSection id="contato">
      <p className="section-number">{numeroSecao}: Proximo Passo</p>
      <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '16px' }}>
        Pronto para avancar?
      </h2>

      {proposta.secoes.faq && <FAQInline itens={proposta.secoes.faq} />}

      <div style={{ marginTop: '48px' }}>
        <CommitmentLadder onCompleto={() => setCtaAtivo(true)} />

        <a
          href={`https://wa.me/${proposta.contato.whatsapp}?text=Ola, vi a proposta e quero avancar.`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '16px 32px',
            background: ctaAtivo ? 'var(--gold)' : 'var(--border)',
            color: ctaAtivo ? '#0D0D0D' : 'var(--muted)',
            fontFamily: 'Archivo',
            fontWeight: 900,
            fontSize: '0.9rem',
            textDecoration: 'none',
            borderRadius: '4px',
            transition: 'background 0.3s, color 0.3s',
            cursor: ctaAtivo ? 'pointer' : 'not-allowed',
            pointerEvents: ctaAtivo ? 'auto' : 'none',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          Quero avancar
        </a>

        <button
          onClick={baixarPDF}
          style={{ marginLeft: '16px', background: 'none', border: '1px solid var(--border)', color: 'var(--muted)', padding: '16px 24px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}
        >
          Baixar PDF
        </button>
      </div>

      <div style={{ marginTop: '80px', paddingTop: '32px', borderTop: '1px solid var(--border)', color: 'var(--muted)', fontSize: '0.8rem' }}>
        <p>Thiago Wessley · {proposta.contato.email}</p>
      </div>
    </AnimatedSection>
  )
}
