import { Fragment, useMemo, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import type { DossieImagem, DossiePresenca, DossieVideo, ExtrasDossie, PropostaData } from '../../types/proposta'
import { calcularDiasRestantes, formatarData, formatarReais } from '../../lib/tempo'
import { DossieNav } from './DossieNav'
import { useBodyDossie, useDesenhar, useFaseAtual, useFraseAcende, useMedia, useRevelar, useTimecode, type Capitulo } from './hooks'

const CAPITULOS: Capitulo[] = [
  { id: 'topo', rotulo: 'Abertura' },
  { id: 'cenario', rotulo: '01 Cenário' },
  { id: 'projeto', rotulo: '02 Projeto' },
  { id: 'investimento', rotulo: '03 Investimento' },
  { id: 'regras', rotulo: '04 Regras' },
  { id: 'pagamento', rotulo: '05 Pagamento' },
]

function Icones() {
  return (
    <svg className="dz-sprite" width="0" height="0" aria-hidden="true">
      <symbol id="dz-i-go" viewBox="0 0 16 16"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></symbol>
      <symbol id="dz-i-play" viewBox="0 0 24 24"><path d="M7 4.5v15l12-7.5z" fill="currentColor" /></symbol>
      <symbol id="dz-i-wa" viewBox="0 0 24 24"><path d="M12 3.2a8.7 8.7 0 0 0-7.5 13.2L3.3 20.8l4.5-1.2A8.7 8.7 0 1 0 12 3.2Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /><path d="M9 8.3c.2-.5.6-.5.9-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c.4.8 1.3 1.7 2.1 2.1l.6-.5c.2-.2.4-.2.6-.1l1.7.7c.3.1.4.3.4.5v.5c0 .3 0 .7-.5.9-.6.3-1.7.4-3.3-.5a9.3 9.3 0 0 1-3.2-3.2c-.9-1.6-.8-2.7-.5-3.3Z" fill="currentColor" /></symbol>
    </svg>
  )
}

/** Título em duas linhas, com cada palavra subindo por dentro de uma máscara. */
function PalavrasQueSobem({ texto, inicio }: { texto: string; inicio: number }) {
  return (
    <>
      {texto.split(' ').map((p, i) => (
        <Fragment key={i}>
          <span className="dz-wm"><span className="dz-wi" style={{ ['--k' as string]: String(inicio + i) }}>{p}</span></span>{' '}
        </Fragment>
      ))}
    </>
  )
}

function Timecode() {
  const tc = useTimecode()
  return <span className="dz-tcode">{tc}</span>
}

function Img({ img, className, prioridade, style }: { img: DossieImagem; className?: string; prioridade?: boolean; style?: CSSProperties }) {
  return (
    <img className={className} src={img.src} alt={img.alt} width={img.largura} height={img.altura} style={style}
      loading={prioridade ? 'eager' : 'lazy'} decoding="async" {...(prioridade ? { fetchPriority: 'high' as const } : {})} />
  )
}

function Secao({ id, num, fino, grosso, larga, extra, children }: { id: string; num: string; fino: string; grosso: string; larga?: boolean; extra?: string; children: ReactNode }) {
  return (
    <section className={`dz-sec${larga ? ' dz-sec--wide' : ''}${extra ? ' ' + extra : ''}`} id={id} aria-labelledby={`t-${id}`}>
      <div className="dz-wrap"><div className="dz-sec-grid">
        <div className="dz-sec-head">
          <span className="dz-sec-num" aria-hidden="true">{num}</span>
          <h2 className="dz-sec-title dz-rv" id={`t-${id}`}><span className="dz-thin">{fino}</span> <span className="dz-bold">{grosso}</span></h2>
        </div>
        <div className="dz-sec-body">{children}</div>
      </div></div>
    </section>
  )
}

/** Destaca em negrito o trecho indicado dentro da frase. */
function ComNegrito({ texto, bold }: { texto: string; bold?: string }) {
  if (!bold || !texto.includes(bold)) return <>{texto}</>
  const [antes, ...resto] = texto.split(bold)
  return <>{antes}<b>{bold}</b>{resto.join(bold)}</>
}

function Player({ videos }: { videos: DossieVideo[] }) {
  const [atual, setAtual] = useState(0)
  const [tocando, setTocando] = useState(false)
  const v = videos[atual]
  if (!v) return null
  return (
    <div className="dz-player">
      <div className="dz-player-main">
        {tocando ? (
          <iframe src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}?autoplay=1&rel=0&playsinline=1`} title={v.titulo}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
        ) : (
          <button type="button" className="dz-yt" onClick={() => setTocando(true)} aria-label={`Tocar ${v.titulo}`}>
            <img src={v.poster} alt="" width={360} height={640} loading="lazy" decoding="async" />
            <span className="dz-play"><svg aria-hidden="true"><use href="#dz-i-play" /></svg></span>
          </button>
        )}
      </div>
      <ul className="dz-player-rail">
        {videos.map((x, i) => (
          <li key={x.youtubeId + i}>
            <button type="button" className="dz-rail-btn" aria-current={i === atual ? 'true' : undefined} aria-label={x.titulo}
              onClick={() => { setAtual(i); setTocando(true) }}>
              <img src={x.poster} alt="" width={180} height={320} loading="lazy" decoding="async" />
            </button>
          </li>
        ))}
      </ul>
      <p className="dz-player-cap"><b>{v.titulo}</b></p>
    </div>
  )
}

/** Desenho do site da marca (navegador) e do perfil no Instagram (celular), com os produtos da linha. */
function Presenca({ p }: { p: DossiePresenca }) {
  const { site, instagram: ig } = p
  return (
    <div className="dz-pres" role="img" aria-label={`Desenho do site ${site.endereco} com a vitrine e o formulário de interesse, e do perfil ${ig.perfil} no Instagram`}>
      <div className="dz-mk-browser">
        <div className="dz-mk-bar"><span className="dz-mk-chrome"><i /><i /><i /></span><span className="dz-mk-url">{site.endereco}</span></div>
        <div className="dz-mk-site">
          <div className="dz-mk-site-nav"><b>{site.marca}</b>{site.menu.map(t => <span key={t}>{t}</span>)}</div>
          <p className="dz-mk-site-h">{site.chamada}</p>
          <div className="dz-mk-site-corpo">
            <ul className="dz-mk-vitrine">{site.produtos.map(img => <li key={img.src}><Img img={img} /><span>{img.alt}</span></li>)}</ul>
            <div className="dz-mk-form">
              <b>{site.formulario.titulo}</b>
              <span className="dz-mk-seg">{site.formulario.opcoes.map((t, i) => <i key={t} className={i === 0 ? 'dz-on' : undefined}>{t}</i>)}</span>
              {site.formulario.campos.map(t => <span key={t} className="dz-mk-campo">{t}</span>)}
              <span className="dz-mk-btn">{site.formulario.botao}</span>
              <small>{site.formulario.aviso}</small>
            </div>
          </div>
        </div>
      </div>
      <div className="dz-mk-phone">
        <div className="dz-mk-ig">
          <p className="dz-mk-ig-top">{ig.perfil}</p>
          <div className="dz-mk-ig-head">
            <span className="dz-mk-ig-av">{ig.posts[0] && <Img img={ig.posts[0]} />}</span>
            <span className="dz-mk-ig-bio"><b>{ig.nome}</b><i /><i /></span>
          </div>
          <ul className="dz-mk-ig-hl">{ig.destaques.map(t => <li key={t}><i />{t}</li>)}</ul>
          <ul className="dz-mk-ig-grid">
            {ig.posts.slice(0, 6).map((img, i) => (
              <li key={img.src + i}><Img img={img} />{ig.reels.includes(i) && <svg aria-hidden="true"><use href="#dz-i-play" /></svg>}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function ValorComMoeda({ valor }: { valor: number }) {
  const [moeda, ...numero] = formatarReais(valor).split(/\s/)
  return <><span className="dz-moeda">{moeda}</span>{numero.join(' ')}</>
}

/** Meio de pagamento; quando traz uma chave (números), vira botão que copia a chave. */
function MeioPagamento({ nome, detalhe }: { nome: string; detalhe: string }) {
  const [aviso, setAviso] = useState<'copiado' | 'falhou' | null>(null)
  const chave = detalhe.match(/\d[\d./-]{5,}\d/)?.[0]
  if (!chave) return <span className="dz-chip dz-chip--fixo">{nome}: {detalhe}</span>
  const copiar = async () => {
    try {
      if (!navigator.clipboard) throw new Error('sem área de transferência')
      await navigator.clipboard.writeText(chave)
      setAviso('copiado')
    } catch {
      setAviso('falhou')
    }
    window.setTimeout(() => setAviso(null), 2600)
  }
  const rotulo = { copiado: 'Chave copiada', falhou: 'Selecione e copie', vazio: 'Copiar' }[aviso ?? 'vazio']
  return (
    <button type="button" className="dz-chip" onClick={copiar}>
      {nome}: {detalhe}
      <span className="dz-copiar" aria-live="polite">{rotulo}</span>
    </button>
  )
}

/** Frase do fecho que acende palavra por palavra com a rolagem. */
function FraseQueAcende({ texto }: { texto: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const palavras = texto.split(' ')
  const acesas = useFraseAcende(ref, palavras.length)
  const dividida = acesas >= 0
  return (
    <p className={`dz-statement${dividida ? ' dz-is-split' : ''}`} ref={ref}>
      {dividida
        ? palavras.map((w, k) => <Fragment key={k}><span className={`dz-w${k < acesas ? ' dz-lit' : ''}`}>{w}</span>{k < palavras.length - 1 ? ' ' : ''}</Fragment>)
        : texto}
    </p>
  )
}

function Painel({ tipo, d, titulo, legenda, fig }: { tipo: string; d: ExtrasDossie; titulo: string; legenda: string; fig: string }) {
  const cabeca = <><p className="dz-fig">{fig}</p><p className="dz-panel-title">{titulo}<span>{legenda}</span></p></>
  if (tipo === 'base') {
    return (
      <>
        {cabeca}
        <ul className="dz-docs">
          {d.base.provas.map(p => (
            <li key={p.titulo}>
              {p.url ? (
                <a className="dz-doc-link" href={p.url} target="_blank" rel="noopener">
                  <figure><Img img={p.imagem} /><figcaption>{p.titulo} <svg className="dz-i" aria-hidden="true"><use href="#dz-i-go" /></svg></figcaption></figure>
                </a>
              ) : (
                <figure><Img img={p.imagem} /><figcaption>{p.titulo}</figcaption></figure>
              )}
            </li>
          ))}
        </ul>
      </>
    )
  }
  if (tipo === 'produtos') {
    return (
      <>
        {cabeca}
        <ul className="dz-prods dz-prods--2">
          {d.base.produtos.slice(0, 4).map(img => <li key={img.src}><figure><Img img={img} /><figcaption>{img.alt}</figcaption></figure></li>)}
        </ul>
      </>
    )
  }
  if (tipo === 'videos') return <>{cabeca}<Player videos={d.videos ?? []} /></>
  if (tipo === 'presenca') return d.presenca ? <>{cabeca}<Presenca p={d.presenca} /></> : null
  if (tipo === 'teste') {
    return (
      <>
        {cabeca}
        <ol className="dz-flow">
          {d.teste.map(t => <li key={t.nome}><em>{t.etapa}</em><b>{t.nome}</b></li>)}
        </ol>
      </>
    )
  }
  return null
}

export function PropostaDossie({ proposta }: { proposta: PropostaData }) {
  useBodyDossie()
  const raiz = useRef<HTMLDivElement>(null)
  const linhas = useRef<HTMLDivElement>(null)
  const linha90 = useRef<HTMLDivElement>(null)
  const palco = useMedia('(min-width: 1000px)')
  const faseAtual = useFaseAtual(linhas, palco)
  useRevelar(raiz)
  useDesenhar(linha90)

  const d = proposta.dossie as ExtrasDossie
  const s = proposta.secoes
  const plano = s.planos?.[0]
  const dias = calcularDiasRestantes(proposta.validade)
  const linkWhats = `https://wa.me/${proposta.contato.whatsapp}?text=${encodeURIComponent('Olá, vi a proposta e quero avançar.')}`
  const zap = proposta.contato.whatsapp.replace(/^55(\d{2})(\d)(\d{4})(\d{4})$/, '($1) $2 $3-$4')
  const paineis = useMemo(() => s.fases.map((f, i) => ({ key: `f${f.numero}`, p: d.paineis[i] ?? null })), [s.fases, d.paineis])

  return (
    <div className="dz dz-js" ref={raiz}>
      <Icones />
      <a className="dz-skip" href="#dz-conteudo">Ir para o conteúdo</a>
      <DossieNav capitulos={CAPITULOS} raiz={raiz} acao={{ rotulo: 'Aprovar', href: '#fecho' }} />

      <main className="dz-main" id="dz-conteudo">
        {/* Abertura: visor de câmera */}
        <section className="dz-hero" id="topo" aria-labelledby="dz-titulo">
          <div className="dz-hero-body">
            <figure className="dz-hero-media">
              <Img img={d.retrato} prioridade style={d.retrato.foco ? { objectPosition: d.retrato.foco } : undefined} />
              <div className="dz-hud" aria-hidden="true" style={d.retrato.mira ? { ['--fx' as string]: d.retrato.mira[0], ['--fy' as string]: d.retrato.mira[1] } : undefined}>
                <span className="dz-thirds" />
                <i className="dz-tl" /><i className="dz-tr" /><i className="dz-bl" /><i className="dz-br" />
                <span className="dz-focus" />
                <span className="dz-rec">REC</span>
                <span className="dz-fmt">24p</span>
                <Timecode />
              </div>
            </figure>
            <div className="dz-wrap">
              <div className="dz-hero-copy">
                <h1 id="dz-titulo">
                  <span className="dz-thin"><PalavrasQueSobem texto={d.titulo.fino} inicio={0} /></span>{' '}
                  <span className="dz-bold"><PalavrasQueSobem texto={d.titulo.grosso} inicio={d.titulo.fino.split(' ').length} /></span>
                </h1>
                <p className="dz-lede">{d.lede}</p>
              </div>
            </div>
          </div>
          <div className="dz-wrap">
            <dl className="dz-meta dz-meta--4">
              <div><dt>Documento</dt><dd>{d.documento}</dd></div>
              <div><dt>Preparado para</dt><dd>{proposta.responsavel ?? proposta.cliente}</dd></div>
              <div><dt>Envio</dt><dd>{proposta.envio ? formatarData(proposta.envio) : ''}</dd></div>
              <div><dt>Validade</dt><dd>{formatarData(proposta.validade)}</dd></div>
            </dl>
            <ul className="dz-glance">
              <li><a href="#projeto"><strong>O projeto <svg className="dz-i" aria-hidden="true"><use href="#dz-i-go" /></svg></strong><span>{s.cenario.desafio}</span></a></li>
              <li><a href="#regras"><strong>Prazos e regras <svg className="dz-i" aria-hidden="true"><use href="#dz-i-go" /></svg></strong><span>O que está incluso, o que cabe a cada lado e quando cada etapa acontece.</span></a></li>
            </ul>
          </div>
        </section>

        <Secao id="cenario" num="01" fino="O cenário" grosso="e o que está em jogo">
          <dl className="dz-facts dz-rv">
            <div><dt>Posicionamento</dt><dd>{s.cenario.problema}</dd></div>
            <div><dt>Público</dt><dd>{s.cenario.publico}</dd></div>
            <div><dt>Desafio</dt><dd>{s.cenario.desafio}</dd></div>
            {s.cenario.entregas && (
              <div><dt>O que o projeto entrega</dt><dd><ul className="dz-dots">{s.cenario.entregas.map(e => <li key={e}>{e}</li>)}</ul></dd></div>
            )}
          </dl>
        </Secao>

        <Secao id="projeto" num="02" fino="O projeto" grosso={d.duracao} larga>
          <div className="dz-spectrum dz-rv" ref={linha90}>
            <p className="dz-spec-title">{d.linha.titulo}</p>
            <p className="dz-spec-note">{d.linha.nota}</p>
            {d.linha.inicio !== d.marcos[0]?.nome && <div className="dz-spec-axis"><span>{d.linha.inicio}</span><span>{d.linha.fim}</span></div>}
            <ol className="dz-spec-track" style={{ ['--n' as string]: String(d.marcos.length) }}>
              {d.marcos.map((m, i) => <li key={m.dia + m.nome} style={{ ['--i' as string]: String(i) }}><strong>{m.nome}</strong><em>{m.dia}</em></li>)}
            </ol>
          </div>

          <div className={`dz-stage-wrap${palco ? ' dz-is-staged' : ''}`}>
            <div ref={linhas}>
              {s.fases.map((f, i) => {
                const { key, p } = paineis[i]
                return (
                  <article key={key} className={`dz-row${palco && faseAtual === key ? ' dz-is-current' : ''}`} data-key={key}>
                    <h3>{f.titulo}</h3>
                    <span className="dz-flag">Fase {f.numero}{f.periodo ? ` · ${f.periodo}` : ''}</span>
                    {f.resumo && <p className="dz-fase-resumo">{f.resumo}</p>}
                    <ul className="dz-itens">
                      {f.itens.map(it => (
                        <li key={it.titulo}>
                          <b>{it.titulo}{it.limite && <span className="dz-lim">{it.limite}</span>}</b>
                          <p>{it.descricao}</p>
                          {it.resultado && <p className="dz-resultado"><em>Resultado</em>{it.resultado}</p>}
                        </li>
                      ))}
                    </ul>
                    {p && <div className="dz-panel dz-panel-inline"><Painel tipo={p.tipo} d={d} titulo={p.titulo} legenda={p.legenda} fig={`Fig. 02.${i + 1}`} /></div>}
                  </article>
                )
              })}
            </div>
            {palco && (
              <div className="dz-stage">
                {paineis.map(({ key, p }, i) => p && (
                  <div key={key} className={`dz-panel${faseAtual === key ? ' dz-is-active' : ''}`} data-for={key}>
                    <Painel tipo={p.tipo} d={d} titulo={p.titulo} legenda={p.legenda} fig={`Fig. 02.${i + 1}`} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </Secao>

        {plano && (
          <Secao id="investimento" num="03" fino="O investimento" grosso="e o que ele cobre">
            <div className="dz-invest dz-rv">
              <div>
                <p className="dz-valor"><ValorComMoeda valor={plano.valor} /></p>
                {plano.periodo && <p className="dz-valor-sub">{plano.periodo.charAt(0).toUpperCase() + plano.periodo.slice(1)}</p>}
                {plano.rodape && <p className="dz-valor-note">{plano.rodape}. {s.confidencialidade}</p>}
              </div>
              <div>
                <p className="dz-plano-nome">{plano.nome}</p>
                <p className="dz-plano-resumo">{plano.resumo}</p>
                <ul className="dz-dots">{plano.itens.map(it => <li key={it}>{it}</li>)}</ul>
              </div>
            </div>
          </Secao>
        )}

        <Secao id="regras" num="04" fino="Prazos" grosso="e regras do projeto">
          {s.prazos && (
            <ol className="dz-clausulas dz-rv">
              {s.prazos.map(p => <li key={p.texto}><span><ComNegrito texto={p.texto} bold={p.bold} /></span></li>)}
            </ol>
          )}
          {s.contrato && (
            <dl className="dz-facts dz-facts--depois dz-rv">
              {s.contrato.map(c => (
                <div key={c.titulo}><dt>{c.titulo}</dt><dd><ul className="dz-dots">{c.itens.map(it => <li key={it}>{it}</li>)}</ul></dd></div>
              ))}
            </dl>
          )}
        </Secao>

        {s.pagamento && (
          <Secao id="pagamento" num="05" fino="Pagamento" grosso="e próximo passo">
            <div className="dz-pair dz-rv">
              {s.pagamento.blocos.map(b => (
                <div key={b.titulo}><h3>{b.titulo}</h3><p>{b.descricao}</p></div>
              ))}
            </div>
            <ul className="dz-chips dz-chips--meios">
              {s.pagamento.meios.map(m => <li key={m.nome}><MeioPagamento nome={m.nome} detalhe={m.detalhe} /></li>)}
            </ul>
          </Secao>
        )}
      </main>

      <footer className="dz-foot dz-foot--fecho" id="fecho">
        <div className="dz-wrap">
          <div className="dz-foot-grid">
            <div>
              <FraseQueAcende texto={d.fecho} />
              {s.encerramento && <p className="dz-lead-in">{s.encerramento}</p>}
              <a className="dz-cta" href={linkWhats} target="_blank" rel="noopener">
                <svg aria-hidden="true"><use href="#dz-i-wa" /></svg>{proposta.ctaWhatsapp ?? 'Falar no WhatsApp'}
              </a>
              <p className="dz-validade">Válida até <b>{formatarData(proposta.validade)}</b>{dias > 0 ? `, ${dias} ${dias === 1 ? 'dia' : 'dias'} restantes` : ''}.</p>
              {d.depois && <p className="dz-depois">{d.depois}</p>}
              <p className="dz-foot-line">
                <a href={linkWhats} target="_blank" rel="noopener">{zap}</a>
                <a href={`mailto:${proposta.contato.email}`}>{proposta.contato.email}</a>
                {proposta.contato.instagram && <a href={`https://instagram.com/${proposta.contato.instagram.replace('@', '')}`} target="_blank" rel="noopener">{proposta.contato.instagram}</a>}
              </p>
            </div>
            <figure className="dz-sig"><Img img={d.assinatura} /></figure>
          </div>
        </div>
      </footer>
    </div>
  )
}
