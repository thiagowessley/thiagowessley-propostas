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
