# thiagowessley-propostas

Stack: React 18 + Vite 5 + TypeScript + react-router-dom v6 + Framer Motion

## Regras
- Nunca usar travessao em texto ou codigo
- Dark premium e o padrao: variaveis CSS em globals.css, nunca hardcode de cor
- Proposta nova = criar arquivo em src/propostas/[slug].ts e registrar em src/propostas/index.ts
- Nunca alterar o template (componentes) para acomodar dados de uma proposta especifica
- Botao "Baixar em PDF" no Encerramento: NAO aparece por padrao (campo mostrarBotaoPdf, default
  false, decisao de 15/07/2026 pra proposta nao vazar em PDF). Proposta nova NAO precisa setar
  nada. As 3 propostas anteriores a essa data (instituto, caridade-site, caridade-redes) setam
  mostrarBotaoPdf: true pra manter o comportamento que ja tinham.
- Secao "Portfolio" (grid de peças + link pro thiagowessley.com.br): oculta por padrao (campo
  mostrarPortfolio, default false). So aparece se a proposta setar mostrarPortfolio: true e
  tiver o campo portfolio preenchido. Componente e tipo continuam existindo, so nao renderiza
  sem pedido explicito.
- CTA principal do Encerramento tem texto customizavel (campo ctaWhatsapp, default "Falar no
  WhatsApp"). Usar quando fizer sentido reforcar urgencia especifica do servico (ex: "Reservar
  minha data" pra servico preso a uma data de evento).
- Card de plano (PlanoPreco, secao Investimento) aceita campo opcional video ({youtubeId, label}),
  renderizado como embed do YouTube vertical 9:16 logo abaixo do preco/rodape (02/09/2026,
  Financeiro.tsx). Usar quando fizer sentido mostrar exemplo real do resultado daquele plano
  especifico (ex: video de cliente real mostrando o padrao de edicao daquele tier).
- Commits frequentes apos cada task

## Materiais de aprovacao (rota /a/:slug, 27/07/2026)

Alem de propostas, o repo tambem hospeda material de aprovacao de conteudo ja produzido (ex: posts
de redes sociais aguardando aprovacao do cliente). Sistema paralelo ao de propostas, nao reutiliza
os componentes de PropostaPage (que sao especificos de venda/orcamento).

- Aprovacao nova = criar arquivo em src/aprovacoes/[slug].ts (tipo AprovacaoData, src/types/aprovacao.ts)
  e registrar em src/aprovacoes/index.ts, mesmo padrao dos arquivos de proposta.
- Pagina: src/pages/AprovacaoPage.tsx, componentes em src/components/aprovacao/, estilos em
  src/styles/aprovacao.css (prefixo de classe aprovacao- pra nao colidir com o CSS de proposta).
  Reutiliza TopNav e os tokens de cor do globals.css.
- Imagem de cada post fica em public/img/aprovacoes/[slug]/semana-N.jpg. Se o arquivo nao existir
  ainda, o card mostra um placeholder de texto em vez de quebrar (nao usar imagem local que nao
  existe sem esse fallback).
- Motivo de existir: o Claude Design (ferramenta que gera a arte dos posts) nao permite extrair a
  imagem real por automacao de navegador (3 bloqueios tecnicos confirmados, ver CLAUDE.md global
  secao 13) e a responsividade mobile dos artifacts publicados la e ruim. A imagem real precisa ser
  exportada manualmente pelo Thiago (Claude Design > Share > Project HTML, ou print) e colocada
  na pasta public/img/aprovacoes correta antes do deploy.
- URL final: propostas.thiagowessley.com.br/a/[slug]

## Deploy
- git push para Vercel build automatico
- Dominio em producao: propostas.thiagowessley.com.br (subdominio proprio, ja configurado na Vercel)
- NUNCA usar thiagowessley.com.br (sem "propostas.") em link de proposta: esse dominio e do
  projeto do portfolio (thiagowessley-portfolio), outro app na Vercel. Link errado = 404 ou
  site errado pro cliente.
- Toda URL de proposta segue o padrao: propostas.thiagowessley.com.br/p/[slug]
- Email git: th.ws.gm@gmail.com (obrigatorio para deploy automatico funcionar)

## Linha de produto de cliente: catálogo e plano de negócios (rotas /c/:slug e /n/:slug, 13/09/2026)

Terceiro sistema do repo, criado para a linha pet da Dassg Têmpera. Não reutiliza componentes de
proposta nem de aprovação, e NÃO usa o dark premium: é a identidade visual da marca do cliente
(direção Matéria Clara: osso, grafite, terracota, Fraunces e Inter). **Desde 22/09/2026 suporta
mais de uma linha de material (inox e plástico) num mesmo sistema de páginas**, ver estrutura
abaixo.

- Conteúdo por linha: src/linha-pet/patas-de-aco.ts (inox) e src/linha-pet/plastico.ts (plástico),
  cada um exportando um objeto `LinhaPetConteudo` (textos, produtos, recortes, fontes). `getLinhaPetBySlug`
  em patas-de-aco.ts resolve as duas (consulta o próprio objeto e, se não achar, delega a
  `getLinhaPlasticoBySlug` de plastico.ts). Linha nova: criar `src/linha-pet/[nome].ts` com o mesmo
  formato e adicionar a checagem em `getLinhaPetBySlug`.
- Números por linha: cada linha pode ter o PRÓPRIO módulo de modelo financeiro (o inox usa
  `modelo-financeiro.ts`, custo por área de chapa metálica; o plástico usa
  `modelo-financeiro-plastico.ts`, custo por peso de resina mais amortização de molde, e tem um
  segundo eixo, canal de venda, que o inox não tem). `src/linha-pet/modelo-por-slug.ts` resolve
  qual módulo usar a partir do slug da URL; as páginas chamam sempre `getModeloBySlug(slug)`, nunca
  importam um modelo fixo direto. Toda premissa mora no módulo do modelo, as páginas só chamam
  `calcular()`. Nunca digitar valor à mão na página.
- Verificação obrigatória antes de todo commit que mexer em premissa ou fórmula de qualquer linha:
  `node scripts/verificar-modelo-pet.mjs` (inox) e/ou `node scripts/verificar-modelo-pet-plastico.mjs`
  (plástico). Cada um refaz a conta de forma independente e planta um erro de propósito para provar
  que detecta divergência. Ao criar modelo financeiro pra uma terceira linha, criar o verificador
  dela também, mesmo padrão.
- Páginas: src/pages/CatalogoPage.tsx e src/pages/PlanoPage.tsx são genéricas por slug (usam
  `getLinhaPetBySlug` e `getModeloBySlug`), não pertencem a uma linha específica. Textos que só
  fazem sentido pra uma linha (ex: "Por que em inox", "Plástico e inox, lado a lado", "Do quilo de
  inox ao preço na prateleira") são campos OPCIONAIS no tipo `LinhaPetConteudo` (`porQueTitulo`,
  `comparativoTitulo`, `custoTitulo`, `custoRotuloPeso`, `lacunaTitulo`, `ondeFornoEntraTitulo`
  etc), com o texto do inox como valor padrão quando a linha não define o campo. Linha nova que
  precisar de uma seção com framing diferente: adicionar mais um campo opcional no tipo em vez de
  reescrever a página. Seletor de canal (`PlanoPage.tsx`) só aparece quando `modelo.canais` existe.
- Componentes em src/components/linha-pet/; estilos em src/styles/linha-pet.css, tudo escopado na
  classe .lp. **CSS de impressão:** todo controle interativo novo (seletor, botão, toggle) precisa
  de regra própria escondendo ele em `@media print`, não basta confiar nos wrappers `.lp-topo` e
  `.lp-controles` (achado real: o seletor de Recorte do catálogo ficava fora dos dois e aparecia
  visível e clicável no PDF, corrigido com `.lp-sec-cabeca .lp-seletor { display: none }`).
- Mockups dos produtos: public/img/linha-pet/[id]-[nome].jpg (inox) e pasta equivalente por linha,
  apontados no campo imagem de cada produto. Sem imagem, a página mostra um placeholder numerado em
  vez de quebrar.
- PDF: `scripts/gerar-pdf-plastico.mjs` gera catálogo e plano a partir do dev server rodando,
  usando Edge com porta de depuração (puppeteer.launch direto está quebrado desde o Edge 153, ver
  skill licoes-tecnicas). Mesmo padrão serve pra gerar PDF de qualquer linha, trocando as URLs.
- URLs: propostas.thiagowessley.com.br/c/patas-de-aco, /n/patas-de-aco (inox) e /c/linha-plastico,
  /n/linha-plastico (plástico).
- O check-copy acusa "aço" no nome da marca "Patas de Aço": esperado, é decisão do Thiago
  (11/09/2026). Fora do nome, usar "inox" (nunca "aço" nem "metal" soltos referindo o material).
