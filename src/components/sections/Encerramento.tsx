import { AnimatedSection } from '../ui/AnimatedSection'
import { DecoLines } from '../ui/DecoLines'
import { FAQInline } from '../ui/FAQInline'
import { ValidadeCountdown } from '../ui/ValidadeCountdown'
import { baixarPDF } from '../../lib/pdf'
import type { PropostaData } from '../../types/proposta'

interface Props {
  proposta: PropostaData
}

export function Encerramento({ proposta }: Props) {
  const linkWhats = `https://wa.me/${proposta.contato.whatsapp}?text=${encodeURIComponent('Olá, vi a proposta e quero avançar.')}`
  const qrUrl = proposta.contato.qr ?? '/img/qr-whatsapp.png'
  const texto = proposta.secoes.encerramento ?? 'Quando terminar de ler, me chama no WhatsApp e a gente fecha os próximos passos.'

  return (
    <AnimatedSection id="encerramento">
      <DecoLines style={{ top: '20px', right: '-40px', opacity: 0.25 }} width={400} height={480} />

      {proposta.secoes.faq && proposta.secoes.faq.length > 0 && (
        <div style={{ marginBottom: '72px', maxWidth: '760px' }}>
          <p className="eyebrow"><span className="accent">Antes</span> de decidir</p>
          <FAQInline itens={proposta.secoes.faq} />
        </div>
      )}

      <div style={{
        textAlign: 'center',
        maxWidth: '680px',
        margin: '0 auto',
        padding: '56px 40px',
        background: 'var(--bg-card)',
        border: '1px solid var(--gold-dim)',
        borderRadius: '24px',
      }}>
        <h2 className="sec-title" style={{ marginBottom: '24px' }}>
          <span className="thin">Próximo</span>
          <span className="bold">passo</span>
        </h2>

        <p style={{ color: 'var(--ice)', lineHeight: 1.75, fontSize: '1.02rem', maxWidth: '480px', margin: '0 auto 28px' }}>
          {texto}
        </p>

        <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'center' }}>
          <ValidadeCountdown validade={proposta.validade} />
        </div>

        <div style={{ display: 'flex', gap: '32px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          <img
            src={qrUrl}
            alt="QR Code para WhatsApp"
            width={130}
            height={130}
            style={{ borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg)' }}
            loading="lazy"
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <a href={linkWhats} target="_blank" rel="noopener noreferrer" className="cta-btn cta-gold">
              Falar no WhatsApp
            </a>
            {proposta.mostrarBotaoPdf && (
              <button onClick={baixarPDF} className="cta-btn cta-ghost" style={{ textTransform: 'none' }}>
                Baixar em PDF
              </button>
            )}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '48px', paddingTop: '28px', borderTop: '1px solid var(--border)', color: 'var(--muted)', fontSize: '0.85rem', display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <span>{proposta.contato.email}</span>
        {proposta.contato.instagram && (
          <>
            <span style={{ color: 'var(--border)' }}>|</span>
            <span>{proposta.contato.instagram}</span>
          </>
        )}
      </div>
    </AnimatedSection>
  )
}
