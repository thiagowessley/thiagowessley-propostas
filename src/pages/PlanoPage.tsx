import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getLinhaPetBySlug } from '../linha-pet/patas-de-aco'
import { getModeloBySlug } from '../linha-pet/modelo-por-slug'
import type { CenarioId, RecorteId } from '../linha-pet/modelo-financeiro'
import { brl, brlOu, capitalizar, meses, num, pct, porExtenso, vezes } from '../linha-pet/formato'
import { BarraTopo, Rodape, Seletor, usePaginaLinhaPet } from '../components/linha-pet/Comum'

const CENARIOS: CenarioId[] = ['conservador', 'base', 'otimista']
const MARKUP_MINIMO = 2

export function PlanoPage() {
  const { slug } = useParams<{ slug: string }>()
  const linha = slug ? getLinhaPetBySlug(slug) : undefined
  const modelo = getModeloBySlug(slug ?? '')
  const [recorte, setRecorte] = useState<RecorteId>('A')
  const [cenario, setCenario] = useState<CenarioId>('base')
  const canaisDisponiveis = modelo.canais ? Object.entries(modelo.canais).map(([id, c]) => ({ valor: id, rotulo: c.rotulo })) : []
  const [canal, setCanal] = useState<string>(canaisDisponiveis[0]?.valor ?? '')
  usePaginaLinhaPet(linha ? `${linha.marca}: Plano de negócios` : 'Material não encontrado')

  if (!linha) {
    return (
      <div className="lp lp-vazio">
        <h2>Material não encontrado.</h2>
      </div>
    )
  }

  const p = linha.plano
  const r = modelo.calcular(recorte, cenario, canal)
  const todos = CENARIOS.map(c => modelo.calcular(recorte, c, canal))
  // As duas linhas têm premissas com campos diferentes (resina x chapa de inox, canal x quiosque).
  // O `any` aqui fica só na montagem da tabela de premissas para exibição (abaixo), a conta
  // financeira em si continua inteiramente tipada e conferida pelo verificador independente.
  const g = modelo.PREMISSAS.globais as any
  const cs = modelo.PREMISSAS.cenarios as any
  const nomeProduto = (id: string) => linha.produtos.find(x => x.id === id)?.nome ?? id
  const conservador = todos[0]
  const recorteAtual = linha.recortes.find(x => x.id === recorte) ?? linha.recortes[0]
  const faixa = (fn: (c: (typeof cs)['base']) => number) => `${brl(fn(cs.otimista))} a ${brl(fn(cs.conservador))}`

  const ehPlastico = linha.slug === 'linha-plastico'

  function leituraDoConservador(): string {
    const positivo = conservador.quiosque.lucroMensal > 0
    const nome = ehPlastico ? 'canal' : 'quiosque'
    if (positivo) {
      return `Mesmo no cenário conservador o ${nome} fecha o mês positivo, com ${brl(conservador.quiosque.lucroMensal)} de lucro.`
    }
    const continuacao = ehPlastico
      ? 'valida a venda com lote piloto antes de qualquer escala maior'
      : 'valida a venda antes de qualquer contrato com shopping'
    return `No cenário conservador o ${nome} opera no prejuízo, com ${brl(conservador.quiosque.lucroMensal)} por mês. A operação se sustenta a partir do volume do cenário base, e é por isso que o roteiro ${continuacao}.`
  }
  const leituraQuiosque = leituraDoConservador()

  const apertados = r.produtos.filter(x => x.markupQuiosque < MARKUP_MINIMO).map(x => nomeProduto(x.id))

  const canalAtual: any = ehPlastico && modelo.canais ? (modelo.canais as any)[canal] : undefined

  const premissas = ehPlastico
    ? [
        { item: 'Preço da resina de polipropileno', valor: `${brl(cs.base.precoResinaKg)} por kg (conservador: ${brl(cs.conservador.precoResinaKg)}, otimista: ${brl(cs.otimista.precoResinaKg)})`, status: 'Verificado, faixa larga', origem: 'MF Rural (lote industrial) e loja de varejo (lote pequeno), 22/09/2026' },
        { item: 'Perda de resina no processo', valor: pct(g.perdaResina), status: 'Premissa', origem: 'Estimativa de purga e rebarba' },
        { item: 'Fator de processo sobre o material', valor: `${num(g.fatorProcesso.baixa, 1)} / ${num(g.fatorProcesso.media, 1)} / ${num(g.fatorProcesso.alta, 1)} (complexidade baixa, média, alta)`, status: 'Premissa, a cotar', origem: 'Sem preço público de hora de injeção ou rotomoldagem' },
        { item: 'Custo de molde por produto', valor: 'R$15.000 a R$70.000, amortizado em 20.000 a 100.000 unidades', status: 'Premissa, a cotar', origem: 'Faixa nacional de blogs de metalúrgica, sem cotação por peça específica' },
        { item: 'Margem da Dassg sobre o atacado', valor: pct(g.margemFabricante), status: 'Premissa', origem: 'Antes de tributos, só no canal distribuidor' },
        { item: 'Tributos da Dassg sobre a venda', valor: pct(g.tributosFabricante), status: 'Premissa, a validar', origem: 'Confirmar com a contabilidade' },
        { item: 'Comissão ou margem do canal', valor: canalAtual ? pct(canalAtual.margemDistribuidorOuComissao) : '', status: 'Premissa, a validar', origem: 'Mercado Livre 10 a 19%, Shopee cerca de 14% mais R$7 fixo; sem taxa específica da categoria pet' },
        { item: 'Volume de vendas', valor: `cenário base por produto; conservador ${pct(cs.conservador.multiplicadorVolume)}, otimista ${pct(cs.otimista.multiplicadorVolume)}`, status: 'Premissa', origem: 'A medir na validação de venda' },
        { item: 'Custos fixos do canal por mês', valor: canalAtual ? brl(canalAtual.custosFixosMes.operacao + canalAtual.custosFixosMes.marketing + canalAtual.custosFixosMes.outros) : '', status: 'Premissa', origem: 'Estimativa de operação e marketing do canal' },
        { item: 'Registro de marca e identidade', valor: `${brl(g.registroMarca)} e ${brl(g.identidadeFotosEmbalagem)}`, status: 'Premissa', origem: 'Registro no INPI; identidade, fotos e embalagem' },
      ]
    : [
        { item: 'Preço da chapa de inox 304L', valor: `${brl(cs.base.precoInoxKg)} por kg (conservador: ${num(cs.conservador.precoInoxKg, 2)})`, status: 'Verificado', origem: 'ZF Comercial de Aços, 13/09/2026' },
        { item: 'Perda de chapa no corte', valor: pct(g.perdaChapa), status: 'Premissa', origem: 'Estimativa de aproveitamento' },
        { item: 'Fator de processo sobre o material', valor: `${num(g.fatorProcesso.baixa, 1)} / ${num(g.fatorProcesso.media, 1)} / ${num(g.fatorProcesso.alta, 1)} (complexidade baixa, média, alta)`, status: 'Premissa, a cotar', origem: 'Sem preço público de corte, dobra e solda' },
        { item: 'Margem da Dassg sobre o atacado', valor: pct(g.margemFabricante), status: 'Premissa', origem: 'Antes de tributos' },
        { item: 'Tributos da Dassg sobre a venda', valor: pct(g.tributosFabricante), status: 'Premissa, a validar', origem: 'Confirmar com a contabilidade' },
        { item: 'Taxas do varejo (cartão e Simples)', valor: pct(g.taxasVarejo), status: 'Premissa, a validar', origem: 'Confirmar com a contabilidade' },
        { item: 'Volume de vendas', valor: `cenário base por produto; conservador ${pct(cs.conservador.multiplicadorVolume)}, otimista ${pct(cs.otimista.multiplicadorVolume)}`, status: 'Premissa', origem: 'A medir na validação de venda' },
        { item: 'Aluguel do quiosque', valor: faixa(c => c.custosFixosQuiosque.aluguel), status: 'Faixa publicada', origem: 'AlugueOn 2024 e Expo Marca Display 2025' },
        { item: 'Equipe (dois vendedores)', valor: faixa(c => c.custosFixosQuiosque.equipe), status: 'Faixa publicada', origem: 'Expo Marca Display 2025' },
        { item: 'Montagem do quiosque', valor: faixa(c => c.investimentoQuiosque.montagem), status: 'Faixa publicada', origem: 'AlugueOn 2024' },
        { item: 'Estoque inicial e capital de giro', valor: `${num(cs.base.investimentoQuiosque.mesesEstoqueInicial, 1)} mês de compras e ${cs.base.investimentoQuiosque.mesesCapitalGiro} meses de custo fixo`, status: 'Premissa', origem: 'Prática de varejo' },
        { item: 'Desenvolvimento por produto', valor: faixa(c => c.desenvolvimentoPorProduto), status: 'Premissa', origem: 'Projeto e protótipo' },
        { item: 'Registro de marca e identidade', valor: `${brl(g.registroMarca)} e ${brl(g.identidadeFotosEmbalagem)}`, status: 'Premissa', origem: 'Registro no INPI; identidade, fotos e embalagem' },
      ]

  return (
    <div className="lp">
      <BarraTopo marca={linha.marca} slug={linha.slug} atual="plano" />

      <header className="lp-capa lp-capa-plano lp-wrap">
        <div className="lp-capa-texto">
          <div className="lp-rotulo">{p.eyebrow}</div>
          <h1>{linha.marca}</h1>
          <p className="lp-lede">{p.subtitulo}</p>
          <div className="lp-endosso">{linha.endosso}</div>
        </div>
      </header>

      <div className="lp-controles">
        <div className="lp-wrap lp-controles-barra">
          <Seletor rotulo="Recorte" valor={recorte} onChange={setRecorte} opcoes={linha.recortes.map(x => ({ valor: x.id, rotulo: x.titulo }))} />
          <Seletor rotulo="Cenário" valor={cenario} onChange={setCenario} opcoes={CENARIOS.map(c => ({ valor: c, rotulo: cs[c].rotulo }))} />
          {canaisDisponiveis.length > 0 && (
            <Seletor rotulo="Canal" valor={canal} onChange={setCanal} opcoes={canaisDisponiveis} />
          )}
        </div>
      </div>

      <section className="lp-sec lp-wrap">
        <div className="lp-rotulo">00 · Sumário</div>
        <h2>
          Recorte {recorteAtual.titulo.toLowerCase()}, cenário {cs[cenario].rotulo.toLowerCase()}
        </h2>
        <div className="lp-kpis">
          <div className="lp-kpi"><span className="lp-kpi-valor">{brl(r.quiosque.receita)}</span><span className="lp-kpi-rotulo">faturamento mensal {ehPlastico ? 'do canal' : 'do quiosque'}</span></div>
          <div className="lp-kpi"><span className="lp-kpi-valor">{brl(r.quiosque.lucroMensal)}</span><span className="lp-kpi-rotulo">lucro mensal do operador</span></div>
          <div className="lp-kpi"><span className="lp-kpi-valor">{brlOu(r.quiosque.pontoEquilibrioReceita, 'Não atinge')}</span><span className="lp-kpi-rotulo">faturamento de equilíbrio</span></div>
          <div className="lp-kpi"><span className="lp-kpi-valor">{brl(r.investidor.total)}</span><span className="lp-kpi-rotulo">investimento do operador</span></div>
          <div className="lp-kpi"><span className="lp-kpi-valor">{meses(r.investidor.paybackMeses)}</span><span className="lp-kpi-rotulo">retorno do operador</span></div>
          <div className="lp-kpi"><span className="lp-kpi-valor">{brl(r.fabricante.investimento)}</span><span className="lp-kpi-rotulo">investimento da Dassg em desenvolvimento</span></div>
        </div>
        <p className="lp-nota">Todos os números desta página são calculados a partir das premissas da seção 10. Nenhum valor é digitado à mão.</p>
      </section>

      <section className="lp-sec lp-wrap">
        <div className="lp-rotulo">01 · Oportunidade</div>
        <h2>O gato é o pet que mais cresce no Brasil</h2>
        <div className="lp-kpis lp-kpis-mercado">
          {p.mercado.map(m => (
            <div key={m.valor} className="lp-kpi">
              <span className="lp-kpi-valor">{m.valor}</span>
              <span className="lp-kpi-rotulo">{m.rotulo}</span>
              <span className="lp-kpi-fonte">{m.fonte}</span>
            </div>
          ))}
        </div>
        <div className="lp-texto">{p.mercadoTexto.map(t => <p key={t}>{t}</p>)}</div>
      </section>

      <section className="lp-sec lp-wrap">
        <div className="lp-rotulo">02 · Lacuna</div>
        <h2>{p.lacunaTitulo ?? 'O inox já chegou ao Brasil, a marca de peso ainda não'}</h2>
        <div className="lp-texto">{p.lacuna.map(t => <p key={t}>{t}</p>)}</div>
      </section>

      <section className="lp-sec lp-wrap">
        <div className="lp-rotulo">03 · Precisão técnica</div>
        <h2>O que a Dassg traz para esta linha</h2>
        <div className="lp-texto">{p.precisaoTecnica.map(t => <p key={t}>{t}</p>)}</div>
        <div className="lp-duas-colunas">
          <div>
            <h3>{p.ondeFornoEntraTitulo ?? 'Onde o forno da Dassg entra'}</h3>
            {p.ondeFornoEntra.map(f => (
              <div key={f.titulo} className="lp-item">
                <h4>{f.titulo}</h4>
                <p>{f.texto}</p>
              </div>
            ))}
          </div>
          <div>
            <h3>Cuidados que entram no projeto</h3>
            <ul className="lp-lista">{p.cuidadosTecnicos.map(t => <li key={t}>{t}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="lp-sec lp-wrap">
        <div className="lp-rotulo">04 · Portfólio</div>
        <h2>{recorteAtual.titulo}: {porExtenso(recorteAtual.produtos.length)} produtos</h2>
        <p className="lp-lede lp-lede-curta">
          {recorteAtual.descricao} Fichas completas no <Link to={`/c/${linha.slug}`}>catálogo</Link>.
        </p>
        <div className="lp-tabela-wrap">
          <table className="lp-tabela">
            <thead>
              <tr><th scope="col">Produto</th><th scope="col">Animal</th><th scope="col">Papel</th><th scope="col" className="lp-n">Preço sugerido</th></tr>
            </thead>
            <tbody>
              {recorteAtual.produtos.map(id => {
                const prod = linha.produtos.find(x => x.id === id)
                const res = r.produtos.find(x => x.id === id)
                if (!prod || !res) return null
                return (
                  <tr key={id}><th scope="row">{prod.nome}</th><td>{prod.animal}</td><td>{prod.papel}</td><td className="lp-n">{brl(res.precoVarejo)}</td></tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="lp-duas-colunas lp-fora">
          {p.foraDaLinha.map(f => (
            <div key={f.titulo} className="lp-item">
              <h4>Fora da linha: {f.titulo.toLowerCase()}</h4>
              <p>{f.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lp-sec lp-wrap">
        <div className="lp-rotulo">05 · Operação</div>
        <h2>Três papéis, cada um no que faz melhor</h2>
        <ol className="lp-passos">
          {p.operacao.map((o, i) => (
            <li key={o.titulo} className="lp-passo">
              <span className="lp-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{o.titulo}</h3>
              <p>{o.texto}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="lp-sec lp-wrap">
        <div className="lp-rotulo">06 · Custo por produto</div>
        <h2>{p.custoTitulo ?? 'Do quilo de inox ao preço na prateleira'}</h2>
        <p className="lp-lede lp-lede-curta">{p.custoIntro}</p>
        <div className="lp-tabela-wrap">
          <table className="lp-tabela lp-tabela-numeros">
            <thead>
              <tr>
                <th scope="col">Produto</th><th scope="col" className="lp-n">{p.custoRotuloPeso ?? 'Inox (kg)'}</th><th scope="col" className="lp-n">Material</th><th scope="col" className="lp-n">Processo</th>
                <th scope="col" className="lp-n">Custo total</th><th scope="col" className="lp-n">Atacado</th><th scope="col" className="lp-n">Varejo</th><th scope="col" className="lp-n">Markup {ehPlastico ? 'canal' : 'quiosque'}</th><th scope="col" className="lp-n">Vendas/mês</th>
              </tr>
            </thead>
            <tbody>
              {r.produtos.map(x => (
                <tr key={x.id}>
                  <th scope="row">{nomeProduto(x.id)}</th>
                  <td className="lp-n">{num(x.massaKg, 1)}</td>
                  <td className="lp-n">{brl(x.custoMaterial)}</td>
                  <td className="lp-n">{brl(x.custoProcesso)}</td>
                  <td className="lp-n">{brl(x.custoUnitario)}</td>
                  <td className="lp-n">{brl(x.precoAtacado)}</td>
                  <td className="lp-n">{brl(x.precoVarejo)}</td>
                  <td className={`lp-n ${x.markupQuiosque < MARKUP_MINIMO ? 'lp-alerta' : ''}`}>{vezes(x.markupQuiosque)}</td>
                  <td className="lp-n">{x.volume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="lp-nota">
          {apertados.length > 0
            ? `Markup abaixo de ${vezes(MARKUP_MINIMO)} indica margem apertada para o operador: ${apertados.join(', ')}. Custo total inclui componentes e embalagem.`
            : `Todos os produtos ficam com markup de ${vezes(MARKUP_MINIMO)} ou mais para o operador. Custo total inclui componentes e embalagem.`}
        </p>
      </section>

      <section className="lp-sec lp-wrap">
        <div className="lp-rotulo">{ehPlastico ? '07 · Canal' : '07 · Quiosque'}</div>
        <h2>A conta do operador, nos três cenários</h2>
        <p className="lp-lede lp-lede-curta">{p.quiosqueIntro}</p>
        <div className="lp-tabela-wrap">
          <table className="lp-tabela lp-tabela-numeros">
            <thead>
              <tr><th scope="col">Por mês</th>{todos.map(t => <th key={t.cenario} scope="col" className={`lp-n ${t.cenario === cenario ? 'lp-col-ativa' : ''}`}>{cs[t.cenario].rotulo}</th>)}</tr>
            </thead>
            <tbody>
              {[
                { rotulo: 'Faturamento', fn: (t: typeof r) => brl(t.quiosque.receita) },
                { rotulo: 'Produtos vendidos', fn: (t: typeof r) => num(t.quiosque.unidades) },
                { rotulo: 'Ticket médio', fn: (t: typeof r) => brl(t.quiosque.ticketMedio) },
                { rotulo: 'Compra de produtos da Dassg', fn: (t: typeof r) => brl(-t.quiosque.cmv) },
                { rotulo: 'Cartão e impostos', fn: (t: typeof r) => brl(-t.quiosque.taxas) },
                { rotulo: ehPlastico ? 'Custos fixos do canal' : 'Custos fixos do ponto', fn: (t: typeof r) => brl(-t.quiosque.custosFixos) },
                { rotulo: 'Lucro do operador', fn: (t: typeof r) => brl(t.quiosque.lucroMensal), destaque: true },
                { rotulo: 'Faturamento de equilíbrio', fn: (t: typeof r) => brlOu(t.quiosque.pontoEquilibrioReceita, 'Não atinge') },
                { rotulo: 'Investimento inicial', fn: (t: typeof r) => brl(t.investidor.total) },
                { rotulo: 'Retorno do investimento', fn: (t: typeof r) => meses(t.investidor.paybackMeses), destaque: true },
              ].map(l => (
                <tr key={l.rotulo} className={l.destaque ? 'lp-linha-destaque' : ''}>
                  <th scope="row">{l.rotulo}</th>
                  {todos.map(t => <td key={t.cenario} className={`lp-n ${t.cenario === cenario ? 'lp-col-ativa' : ''}`}>{l.fn(t)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="lp-nota">{leituraQuiosque}</p>
      </section>

      <section className="lp-sec lp-wrap">
        <div className="lp-rotulo">08 · Dassg</div>
        <h2>O resultado para o fabricante</h2>
        <p className="lp-lede lp-lede-curta">{p.fabricanteIntro}</p>
        <div className="lp-tabela-wrap">
          <table className="lp-tabela lp-tabela-numeros">
            <thead>
              <tr><th scope="col">{ehPlastico ? 'Por canal, por mês' : 'Por quiosque, por mês'}</th>{todos.map(t => <th key={t.cenario} scope="col" className={`lp-n ${t.cenario === cenario ? 'lp-col-ativa' : ''}`}>{cs[t.cenario].rotulo}</th>)}</tr>
            </thead>
            <tbody>
              {[
                { rotulo: 'Venda ao operador', fn: (t: typeof r) => brl(t.fabricante.receita) },
                { rotulo: 'Custo de produção', fn: (t: typeof r) => brl(-t.fabricante.custoProducao) },
                { rotulo: 'Tributos sobre a venda', fn: (t: typeof r) => brl(-t.fabricante.tributos) },
                { rotulo: 'Margem da Dassg', fn: (t: typeof r) => brl(t.fabricante.margemContribuicao), destaque: true },
                { rotulo: 'Investimento em desenvolvimento', fn: (t: typeof r) => brl(t.fabricante.investimento) },
                { rotulo: ehPlastico ? 'Retorno com um canal' : 'Retorno com um quiosque', fn: (t: typeof r) => meses(t.fabricante.paybackMeses), destaque: true },
              ].map(l => (
                <tr key={l.rotulo} className={l.destaque ? 'lp-linha-destaque' : ''}>
                  <th scope="row">{l.rotulo}</th>
                  {todos.map(t => <td key={t.cenario} className={`lp-n ${t.cenario === cenario ? 'lp-col-ativa' : ''}`}>{l.fn(t)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="lp-nota">O retorno da Dassg acelera a cada {ehPlastico ? 'canal' : 'quiosque'} adicional, porque o investimento em desenvolvimento é feito uma vez só.</p>
      </section>

      <section className="lp-sec lp-wrap">
        <div className="lp-rotulo">09 · Riscos e roteiro</div>
        <h2>O que pode dar errado, e a ordem para evitar</h2>
        <div className="lp-riscos">
          {p.riscos.map(x => (
            <div key={x.risco} className="lp-risco">
              <h4>{x.risco}</h4>
              <p>{x.mitigacao}</p>
            </div>
          ))}
        </div>
        <ol className="lp-roadmap">
          {p.roadmap.map(x => (
            <li key={x.periodo}>
              <span className="lp-roadmap-periodo">{x.periodo}</span>
              <h3>{x.titulo}</h3>
              <p>{x.texto}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="lp-sec lp-wrap lp-decisoes">
        <div className="lp-rotulo">Para esta reunião</div>
        <h2>{capitalizar(porExtenso(p.decisoes.length, 'f'))} decisões</h2>
        <ol className="lp-lista-numerada">{p.decisoes.map(d => <li key={d}>{d}</li>)}</ol>
      </section>

      <section className="lp-sec lp-wrap">
        <div className="lp-rotulo">10 · Premissas e fontes</div>
        <h2>De onde vem cada número</h2>
        <div className="lp-tabela-wrap">
          <table className="lp-tabela">
            <thead>
              <tr><th scope="col">Premissa</th><th scope="col">Valor</th><th scope="col">Status</th><th scope="col">Origem</th></tr>
            </thead>
            <tbody>
              {premissas.map(x => (
                <tr key={x.item}>
                  <th scope="row">{x.item}</th>
                  <td>{x.valor}</td>
                  <td><span className={`lp-status ${x.status === 'Verificado' ? 'lp-status-ok' : ''}`}>{x.status}</span></td>
                  <td>{x.origem}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="lp-fontes">
          {linha.fontes.map(f => (
            <li key={f.url}>
              <a href={f.url} target="_blank" rel="noreferrer">{f.titulo}</a> <span>{f.data}</span>
            </li>
          ))}
        </ul>
      </section>

      <Rodape texto={`${linha.marca} · ${linha.endosso} · Documento para validação interna`} />
    </div>
  )
}
