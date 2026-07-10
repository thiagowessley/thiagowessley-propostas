import { AnimatedSection } from '../ui/AnimatedSection'
import type { Portfolio as PortfolioData } from '../../types/proposta'

interface Props {
  portfolio: PortfolioData
}

export function Portfolio({ portfolio }: Props) {
  return (
    <AnimatedSection id="portfolio">
      <div className="split" style={{ gridTemplateColumns: '0.8fr 1.6fr', alignItems: 'start', gap: '48px' }}>
        {/* Coluna esquerda: titulo + texto + link */}
        <div className="reading" style={{ maxWidth: '420px' }}>
          <h2 className="sec-title" style={{ marginBottom: '28px' }}>
            <span className="bold">Portfólio</span>
          </h2>
          {portfolio.intro.map((p, i) => (
            <p key={i} style={{ color: 'var(--ice)', lineHeight: 1.75, marginBottom: '16px', fontSize: '0.95rem' }}>
              {p}
            </p>
          ))}
          {portfolio.link && (
            <a
              href={portfolio.link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', marginTop: '12px', color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: '4px', fontSize: '0.95rem' }}
            >
              {portfolio.link.label}
            </a>
          )}
        </div>

        {/* Coluna direita: grid de imagens */}
        <div className="portfolio-grid">
          {portfolio.itens.map((item, i) => (
            <figure key={i} className="portfolio-tile" title={`${item.titulo} · ${item.categoria}`}>
              <img src={item.imagem} alt={`${item.titulo} (${item.categoria})`} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
