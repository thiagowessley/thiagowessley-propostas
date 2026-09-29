import type { RefObject } from 'react'
import { mmss, useLinhaDoTempo, type Capitulo } from './hooks'

interface Props {
  capitulos: Capitulo[]          // o primeiro é a abertura
  raiz: RefObject<HTMLElement | null>
  acao: { rotulo: string; href: string }
}

/** Barra fixa: marca, capítulos e a linha do tempo da leitura. */
export function DossieNav({ capitulos, raiz, acao }: Props) {
  const { atual, progresso, pesos, total } = useLinhaDoTempo(capitulos, raiz)
  const links = capitulos.slice(1)

  return (
    <header className="dz-nav">
      <div className="dz-nav-bar">
        <a className="dz-nav-logo" href={`#${capitulos[0].id}`}><b>Thiago Wessley</b></a>
        <nav className="dz-nav-links" aria-label="Capítulos da proposta">
          {links.map((c, i) => (
            <a key={c.id} href={`#${c.id}`} aria-current={atual === i + 1 ? 'location' : undefined}>
              {c.rotulo.replace(/^\d+\s/, '')}
            </a>
          ))}
        </nav>
        <div className="dz-nav-actions">
          <a className="dz-btn-pill" href={acao.href}>{acao.rotulo}</a>
        </div>
      </div>
      <div className="dz-reel">
        <div className="dz-reel-track">
          <ol className="dz-reel-chapters">
            {capitulos.map((c, i) => (
              <li key={c.id} style={{ ['--w' as string]: String(Math.round(pesos[i] ?? 1)) }}>
                <a href={`#${c.id}`} data-t={c.rotulo} aria-label={`Ir para ${c.rotulo}`} aria-current={atual === i ? 'location' : undefined} />
              </li>
            ))}
          </ol>
          <div className="dz-reel-fill" aria-hidden="true" style={{ transform: `scaleX(${progresso})` }} />
          <div className="dz-reel-head" aria-hidden="true" style={{ left: `${progresso * 100}%` }} />
        </div>
        <div className="dz-reel-time" aria-hidden="true" title="Tempo de leitura estimado">
          <span className="dz-tc-ch">{capitulos[atual]?.rotulo}</span>
          <span><b className="dz-tc-now">{mmss(progresso * total)}</b><span className="dz-tc-total"> / {mmss(total)}</span></span>
        </div>
      </div>
    </header>
  )
}
