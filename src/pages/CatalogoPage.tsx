import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getLinhaPetBySlug } from '../linha-pet/patas-de-aco'
import { getModeloBySlug } from '../linha-pet/modelo-por-slug'
import type { RecorteId } from '../linha-pet/modelo-financeiro'
import { brl, capitalizar, porExtenso } from '../linha-pet/formato'
import { BarraTopo, Figura, Rodape, Seletor, usePaginaLinhaPet } from '../components/linha-pet/Comum'

export function CatalogoPage() {
  const { slug } = useParams<{ slug: string }>()
  const linha = slug ? getLinhaPetBySlug(slug) : undefined
  const modelo = getModeloBySlug(slug ?? '')
  const [recorte, setRecorte] = useState<RecorteId>('A')
  usePaginaLinhaPet(linha ? `${linha.marca}: Catálogo` : 'Material não encontrado')

  if (!linha) {
    return (
      <div className="lp lp-vazio">
        <h2>Material não encontrado.</h2>
      </div>
    )
  }

  const c = linha.catalogo
  const recorteAtual = linha.recortes.find(r => r.id === recorte) ?? linha.recortes[0]
  const produtos = recorteAtual.produtos
    .map(id => linha.produtos.find(p => p.id === id))
    .filter(p => p !== undefined)
  const precoDe = (id: string) => modelo.PREMISSAS.produtos.find(p => p.id === id)?.precoVarejo
  const icone = linha.produtos[0]
  const mesmaQuantidade = new Set(linha.recortes.map(r => r.produtos.length)).size === 1
  const tituloLinha = mesmaQuantidade
    ? capitalizar(porExtenso(linha.recortes.length)) + ' recortes, ' + porExtenso(recorteAtual.produtos.length) + ' produtos cada'
    : capitalizar(porExtenso(linha.recortes.length)) + ' recortes da linha'

  return (
    <div className="lp">
      <BarraTopo marca={linha.marca} slug={linha.slug} atual="catalogo" />

      <header className="lp-capa lp-wrap">
        <div className="lp-capa-texto">
          <div className="lp-rotulo">{c.eyebrow}</div>
          <h1>{linha.marca}</h1>
          <p className="lp-lede">{c.subtitulo}</p>
          <div className="lp-endosso">{linha.endosso}</div>
        </div>
        <Figura imagem={icone.imagem} numero="01" nome={icone.nome} />
      </header>

      <section className="lp-sec lp-wrap">
        <div className="lp-rotulo">A tese</div>
        <h2>{c.teseTitulo ?? 'Três motivos para trocar o plástico'}</h2>
        <div className="lp-pilares">
          {c.pilares.map((p, i) => (
            <div key={p.titulo} className="lp-pilar">
              <span className="lp-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.titulo}</h3>
              <p>{p.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lp-sec lp-wrap" id="linha">
        <div className="lp-sec-cabeca">
          <div>
            <div className="lp-rotulo">A linha</div>
            <h2>{tituloLinha}</h2>
            <p className="lp-lede lp-lede-curta">{recorteAtual.descricao}</p>
          </div>
          <Seletor
            rotulo="Recorte"
            valor={recorte}
            onChange={setRecorte}
            opcoes={linha.recortes.map(r => ({ valor: r.id, rotulo: r.titulo }))}
          />
        </div>

        <div className="lp-produtos">
          {produtos.map((p, i) => {
            const numero = String(i + 1).padStart(2, '0')
            const preco = precoDe(p.id)
            return (
              <article key={p.id} className="lp-produto">
                <Figura imagem={p.imagem} numero={numero} nome={p.nome} />
                <div className="lp-produto-texto">
                  <div className="lp-produto-meta">
                    <span className="lp-produto-num">{numero}</span>
                    <span>
                      {p.categoria} · {p.animal}
                    </span>
                    <span className="lp-selo">{p.papel}</span>
                  </div>
                  <h3>{p.nome}</h3>
                  <p className="lp-produto-resumo">{p.resumo}</p>
                  <div className="lp-blocos">
                    <div>
                      <h4>O problema</h4>
                      <p>{p.problema}</p>
                    </div>
                    <div>
                      <h4>{c.porQueTitulo ?? 'Por que em inox'}</h4>
                      <p>{p.porQueInox}</p>
                    </div>
                  </div>
                  <dl className="lp-specs">
                    {p.especificacoes.map(e => (
                      <div key={e.rotulo}>
                        <dt>{e.rotulo}</dt>
                        <dd>{e.valor}</dd>
                      </div>
                    ))}
                  </dl>
                  {preco !== undefined && (
                    <div className="lp-preco">
                      <span>Preço sugerido</span>
                      <strong>{brl(preco)}</strong>
                    </div>
                  )}
                  {p.referenciaMercado && <p className="lp-ref">{p.referenciaMercado}</p>}
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="lp-sec lp-wrap">
        <div className="lp-rotulo">Comparativo</div>
        <h2>{c.comparativoTitulo ?? 'Plástico e inox, lado a lado'}</h2>
        <div className="lp-tabela-wrap">
          <table className="lp-tabela">
            <thead>
              <tr>
                <th scope="col">Critério</th>
                <th scope="col">{c.comparativoColEsquerda ?? 'Plástico'}</th>
                <th scope="col">{c.comparativoColDireita ?? `Inox 304 ${linha.marca}`}</th>
              </tr>
            </thead>
            <tbody>
              {c.comparativo.map(l => (
                <tr key={l.criterio}>
                  <th scope="row">{l.criterio}</th>
                  <td>{l.plastico}</td>
                  <td className="lp-tabela-destaque">{l.inox}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="lp-sec lp-wrap">
        <div className="lp-rotulo">Fabricação</div>
        <h2>Como cada peça é feita</h2>
        <ol className="lp-passos">
          {c.fabricacao.map((f, i) => (
            <li key={f.titulo} className="lp-passo">
              <span className="lp-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{f.titulo}</h3>
              <p>{f.texto}</p>
            </li>
          ))}
        </ol>
        <p className="lp-nota">{c.notaFabricacao}</p>
      </section>

      <Rodape texto={`${linha.marca} · ${linha.endosso} · Material para validação interna`} />
    </div>
  )
}
