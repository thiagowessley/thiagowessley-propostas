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
      <span className="assinatura" style={{ position: 'absolute', top: '40px', right: 0 }}>Thiago Wessley</span>
      <DecoLines style={{ top: '20px', right: '-40px', opacity: 0.25 }} width={400} height={480} />

      {proposta.secoes.faq && proposta.secoes.faq.length > 0 && (
        <div style={{ marginBottom: '72px', maxWidth: '760px' }}>
          <p className="eyebrow"><span className="accent">Antes</span> de decidir</p>
          <FAQInline itens={proposta.secoes.faq} />
        </div>
      )}

      <h2 className="sec-title" style={{ marginBottom: '24px' }}>
        <span className="thin">Próximo</span>
        <span className="bold">passo</span>
      </h2>

      <p style={{ color: 'var(--ice)', lineHeight: 1.75, fontSize: '1.02rem', maxWidth: '540px', marginBottom: '28px' }}>
        {texto}
      </p>

      <div style={{ marginBottom: '40px' }}>
        <ValidadeCountdown validade={proposta.validade} />
      </div>

      <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '64px' }}>
        <img
          src={qrUrl}
          alt="QR Code para WhatsApp"
          width={150}
          height={150}
          style={{ borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-card)' }}
          loading="lazy"
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <a href={linkWhats} target="_blank" rel="noopener noreferrer" className="cta-btn cta-gold">
            Falar no WhatsApp
          </a>
          <button onClick={baixarPDF} className="cta-btn cta-ghost" style={{ textTransform: 'none' }}>
            Baixar em PDF
          </button>
        </div>
      </div>

      <div style={{ paddingTop: '28px', borderTop: '1px solid var(--border)', color: 'var(--muted)', fontSize: '0.85rem', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
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
