# Handoff: Sistema de Propostas (estado em 09/07/2026)

## Onde paramos
Redesign do app `thiagowessley-propostas` IMPLEMENTADO, VERIFICADO e PUBLICADO
(12 secoes renderizando, build de producao limpo, commit e deploy em
09/07/2026). Detalhe completo do redesign em `REFERENCIAS-REDESIGN.md`.

Decisao em aberto desde 29/06/2026 (migrar o design para o Lovable) foi
RESOLVIDA em 09/07/2026: seguir com a Arquitetura A (um app so, cada proposta
e um link, data-driven). A versao redesenhada de 12 secoes deste repo ja
cobre o objetivo visual do brief do Lovable; migrar deixou de ser necessario.

## O que esta pronto neste repo (funciona hoje)
- App React 18 + Vite 5 + TS + Framer Motion + react-router-dom.
- Arquitetura data-driven: 1 app, 1 repo, 1 deploy. Cada proposta = 1 arquivo
  `src/propostas/[slug].ts` registrado em `src/propostas/index.ts`, acessivel em
  `/p/[slug]`. Nova proposta = 1 arquivo de dados = 1 link. NAO precisa de projeto novo.
- Proposta exemplo completa: `src/propostas/instituto.ts` (slug `instituto-site`).
- 12 secoes (componentes em `src/components/sections/`): Capa, Sobre, Cenario,
  Escopo (carrossel com glow dourado), Portfolio, Financeiro (cards de pacote),
  PrazosAlteracoes, ContratoEntrega, Pagamento, ServicoAdicional, Referencias, Encerramento.
- Identidade: dark premium, dourado #C9A050, Archivo + Inter. Tudo em `src/styles/globals.css`.
- Analytics: `api/visita.ts` dispara webhook do Make em cada abertura.
- QR local do WhatsApp em `public/img/qr-whatsapp.png` (gerado via `scripts/gen-qr.mjs`).
- Dominio em producao: `propostas.thiagowessley.com.br` (Vercel: thiagowessley-propostas).

## Pendente neste app
- Trocar fotos placeholder pelas reais (mesmo nome/caminho, zero codigo):
  `public/img/thiago-vertical.jpg`, `public/img/thiago-horizontal.jpg` (hoje sao
  um gradiente limpo sem texto, publicavel, mas nao e a foto real),
  `public/img/portfolio/p1.jpg`..`p9.jpg`.
- Conteudo dos 3 cards de pacote no instituto.ts e demonstrativo, ajustar por proposta real.

## Situacao do modelo Figma (o que o Thiago quer copiar)
- Arquivo: `C:\Users\thwsg\Downloads\Proposta--Comercial\Proposta Comercial - Manual.fig`
- E um ZIP (formato .fig offline). Dentro: `canvas.fig` (binario kiwi, NAO legivel
  como texto), `thumbnail.png` (400x105, baixa demais pra detalhe), `images/`
  (so placeholders "SUA MARCA" + prints do painel de camadas do Figma).
- LICAO TECNICA (candidata a CLAUDE.md secao 13): nao da pra ler o design real de
  um .fig pelo Claude. O conteudo visual so o Figma renderiza. Para o Claude ler,
  o usuario precisa EXPORTAR os frames como PNG (2x) ou PDF dentro do Figma.
- O que deu pra inferir do thumbnail: proposta dark com acento VERMELHO (Thiago usa
  dourado), ~10-12 slides, 2 paginas, placeholder de logo "SUA MARCA", estrutura de
  "Tabela" (cabecalho + topicos + linhas 1-5 + rodape) e secoes numeradas.

## Decisao em aberto (perguntada ao Thiago, aguardando)
Arquitetura no Lovable:
- (A) Um app so, cada proposta e um link (data-driven, igual ao atual). Lovable
  desenha o template uma vez; novas propostas sao so conteudo. 1 projeto pra sempre.
- (B) Duplicar o template no Lovable a cada proposta (Remix). Tudo visual, sem codigo,
  mas vira N projetos/URLs e correcao de design nao volta pros antigos.
Recomendacao do Claude: (A) e objetivamente menos trabalho continuo; (B) so se o
Thiago priorizar edicao 100% visual sobre gerenciamento central, e o volume for baixo.

## Proximos passos
1. Thiago decide A ou B.
2. Claude entrega o "brief de build pro Lovable" (prompt + sistema visual + secao a
   secao + conteudo), pro Lovable construir fiel de primeira.
3. Definir repo (novo do Lovable vs. reaproveitar este) e repontar o dominio
   `propostas.thiagowessley.com.br` pro projeto certo na Vercel quando publicar.
4. Idealmente: pegar o PNG export do Figma antes do brief, pra copiar o layout fiel.
