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

## Deploy
- git push para Vercel build automatico
- Dominio em producao: propostas.thiagowessley.com.br (subdominio proprio, ja configurado na Vercel)
- NUNCA usar thiagowessley.com.br (sem "propostas.") em link de proposta: esse dominio e do
  projeto do portfolio (thiagowessley-portfolio), outro app na Vercel. Link errado = 404 ou
  site errado pro cliente.
- Toda URL de proposta segue o padrao: propostas.thiagowessley.com.br/p/[slug]
- Email git: th.ws.gm@gmail.com (obrigatorio para deploy automatico funcionar)
