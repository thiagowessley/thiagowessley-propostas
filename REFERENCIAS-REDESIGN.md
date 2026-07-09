# Redesign: thiagowessley-propostas

Data: 28/06/2026
Status: IMPLEMENTADO (preview rodando em /p/instituto-site). Pendente: trocar fotos placeholder pelas reais.

## Implementacao (28/06/2026)
Todas as 10 referencias viraram componentes. Ordem na pagina:
Capa > Sobre > Cenario > Escopo(carrossel) > Portfolio > Financeiro(cards) > Prazos > Contrato > Pagamento > ServicoAdicional > Referencias > Encerramento.

Decisoes de design aplicadas:
- Canvas alargado para 1160px (era 820px) para acomodar os splits e o grid.
- Padrao de titulo trocado de "01 - Secao" para duas linhas (palavra fina muted + palavra grossa branca), via componente SectionTitle e classe .sec-title. Fiel as referencias.
- Carrossel de fases (REF-01) e o elemento-assinatura: card central com glow dourado pulsante, laterais escurecidos, dots de navegacao. Cor ciano da ref virou --gold.
- Foto da secao Sobre fica a ESQUERDA (decisao do Thiago).
- QR do encerramento e LOCAL (/img/qr-whatsapp.png), nao external. Evita travar a pagina.

Placeholders gerados (System.Drawing) em public/img/:
- thiago-vertical.jpg (usado na secao Sobre)
- thiago-horizontal.jpg (usado em ServicoAdicional)
- portfolio/p1.jpg ate p9.jpg (grid de portfolio)
TROCAR pelos arquivos reais mantendo o MESMO nome e caminho (zero mudanca de codigo).

Componentes novos: Sobre, Portfolio, PrazosAlteracoes, ContratoEntrega, Pagamento, ServicoAdicional, Encerramento, SectionTitle, DecoLines.
Componentes redesenhados: Capa, Escopo (carrossel), Financeiro (cards).
Contato.tsx ficou sem uso (substituido por Encerramento), nao deletado.

Tipos novos em src/types/proposta.ts: SobreProfissional, Portfolio, PortfolioItem, PlanoPreco, ItemPrazo, TermoColuna, OpcaoPagamento, ServicoAdicional + campos opcionais em PropostaData.

---

## Referencias visuais recebidas (briefing original)

## Identidade mantida
- Paleta: dark premium (--bg #0D0D0D, --gold #C9A050, --ice #E8E8E0, --muted #8A8A82)
- Tipografia: Archivo 800/900 (titulos) + Inter 300/500 (corpo)
- Tom: profissional, premium, direto

## O que NAO agradou no layout atual
- (preencher apos briefing do Thiago)

## Referencias visuais recebidas

### REF-10: Pagina de encerramento / "Muito Obrigado"
- Titulo em duas linhas: "Muito" em light, "Obrigado!" em bold. Mesmo padrao tipografico da capa
- Texto curto: agradecimento + frase de fechamento com bold no trecho de impacto
- QR Code para WhatsApp (gerado via Bitly ou link direto wa.me)
- Linha de contato no rodape: email | @instagram, tipografia pequena e discreta
- Elemento decorativo: linhas geometricas curvadas sobrepostas no lado direito (mesmo padrao da pagina de pagamento)
- Assinatura no canto superior direito
- Fundo: preto puro
- NOTA: nosso texto de fechamento nao usa "Muito Obrigado" (fluff). Substituir por fechamento direto e confiante. Ex: "Proximo passo: me fala o que achou."

### REF-09: Secao de servico adicional com foto (split escuro)
- Layout: 2 colunas. Coluna esquerda (~50%): titulo grande + 2 paragrafos de texto. Coluna direita (~50%): foto P&B com canto arredondado inferior esquerdo (mesmo padrao da REF-03)
- Titulo: palavra unica grande em bold (ex: "Fotografia", "Audiovisual", "Eventos")
- Texto: descricao do servico adicional/complementar + condicoes de contratacao
- Fundo: dark (#1a1a1a ou similar), nao preto puro
- Assinatura no canto inferior direito (invertida em relacao a capa)
- Uso: secao de servico complementar que nao esta no escopo principal mas pode ser contratado a parte
- Adaptacao: usar para cobertura de eventos ou producao de video como servico adicional

### REF-08: Condicoes de Pagamento
- Titulo em duas linhas: "Condicoes de" em light, "Pagamento" em bold/black
- Corpo: 3 blocos com titulo em bold seguido de descricao: "Valor total a vista", "Sinal de Pagamento (50%-50%)", "Parcelamento"
- Elemento decorativo: numero grande transparente (ou forma geometrica) no fundo lado direito
- Rodape: barra arredondada (pill) com logos dos meios de pagamento lado a lado (Inter, Nubank, Mercado Pago, Pix) + label abaixo de cada um
- Fundo: claro (off-white/cinza claro) na referencia. Na nossa versao: dark premium (--bg #0D0D0D) com pill em --bg-card
- Adaptacao: meios de pagamento do Thiago (Pix, transferencia bancaria). Parcelamento se aplicavel.

### REF-07: Contrato e Entrega / Condicoes Gerais (split em 2 colunas)
- Layout: 2 colunas separadas por linha vertical fina no centro
- Coluna esquerda: titulo "Contrato e" light + "Entrega" bold + lista de itens com ponto (·)
- Coluna direita: titulo "Condicoes" light + "Gerais" bold + lista de itens com ponto (·)
- Cada coluna tem seu proprio par de titulos (mesmo padrao tipografico light/bold)
- Linha divisoria: 1px, cor cinza suave, height ~80% da area de conteudo
- Fundo: preto puro
- Assinatura no canto superior direito
- Adaptacao: termos reais do Thiago (prazo de inicio, entregas, responsabilidades do cliente, confidencialidade)

### REF-06: Secao "Prazos e Alteracoes"
- Titulo em duas linhas: "Prazos e" em light, "Alteracoes" em bold/black. Mesmo padrao da capa (REF-02)
- Corpo: lista com ponto (·) no inicio de cada item, sem bullet padrao
- Bold nas informacoes criticas (prazos, valores, regras)
- Fundo: preto puro. Texto: branco. Bold em branco mais intenso
- Assinatura no canto superior direito (mesmo padrao da capa)
- Visual extremamente limpo, so tipografia

### REF-05: Secao de Pacotes/Investimento (pricing cards)
- Titulo da secao: "Investimento / Escolha seu pacote" em canto superior esquerdo, tipografia pequena
- Layout: 3 cards lado a lado. Card central em destaque (maior, cor clara/off-white, avanca para frente). Laterais menores, fundo escuro
- Cada card: titulo do plano grande (Basico, Master, Pro), quantidade/detalhe em negrito + texto pequeno, lista de itens com ponto, botao capsule no rodape com o valor (R$)
- Card destaque: fundo claro (off-white), texto escuro, icone de destaque no topo (badge)
- Cards laterais: fundo escuro, texto claro, borda sutil
- Navegacao por dots (paginacao) abaixo dos cards
- Adaptacao: usar os planos reais do Thiago (PJ Opcao A, PJ Opcao B, Setup). Cores dark premium, card destaque em --gold ou --ice

### REF-04: Secao de Portfolio
- Layout: split em 2 colunas. Coluna esquerda (~35%): titulo grande + texto + link. Coluna direita (~65%): grid de imagens 3x3 com cantos arredondados
- Titulo: "Portfolio" em peso black, bem grande
- Texto: 3 paragrafos curtos descrevendo experiencia + link clicavel para portfolio externo (Behance, etc.)
- Grid de imagens: 3 colunas, 3 linhas, cards com cantos arredondados, imagens reais de projetos entregues
- Fundo coluna esquerda: dark (#1a1a1a ou similar). Grid: sem fundo, so as imagens
- Adaptacao: usar projetos reais do Thiago (comunicacao, site, video, eventos). Link para portfolio do Thiago. Pedir as imagens quando for implementar.

### REF-03: Secao "Sobre o profissional" (split layout)
- Layout: 2 colunas. Coluna esquerda (~55%): texto. Coluna direita (~45%): foto em preto e branco com canto arredondado inferior esquerdo
- Titulo grande: "Ola!" (ou equivalente de abertura pessoal)
- Texto: apresentacao em 2-3 paragrafos com bold nas especialidades-chave
- Abaixo do texto: grid de habilidades em 2 colunas com barra de progresso fina embaixo de cada item
- Fundo: branco/claro na referencia. Na nossa versao: dark premium (--bg #0D0D0D)
- Elemento decorativo na foto: linhas geometricas/diagonais sobrepostas (canto inferior direito)
- DECISAO DO THIAGO: foto vai no lado ESQUERDO (inverter o layout da referencia). Pedir a foto quando for implementar.
- Adaptacao: trocar habilidades por areas de atuacao do Thiago (comunicacao, design, audiovisual, web)

### REF-02: Capa da proposta
- Fundo: preto puro (#000 ou muito proximo)
- Titulo em duas linhas: linha 1 "Proposta" em peso fino/light, linha 2 "Comercial" em bold/black. Contraste de peso na mesma fonte
- Assinatura manuscrita no canto superior direito (logo ou assinatura do profissional)
- Bloco de metadados abaixo: "Cliente: [nome]" e "Responsavel: [nome]" lado a lado, tipografia pequena
- Linha de info: icone (i) + "Envio da proposta DD/MM/AAAA | Validade de 15 dias" + linha horizontal ate a borda direita
- Paragrafo de introducao no rodape, corpo pequeno, cor cinza suave
- Visual: extremamente limpo, sem ornamentos, so tipografia e espacamento
- Adaptacao: manter estrutura 100%, trocar assinatura pelo logo/marca do Thiago, ajustar validade para 15 dias

### REF-01: Cards de fases com carrossel
- Layout: 3 cards horizontais, card central em destaque (maior, iluminado), laterais menores e mais escuros
- Efeito: borda neon animada no card ativo (tipo glow pulsante)
- Titulo da secao: `/FASES DO PROJETO` com barra antes, duas palavras em cores diferentes
- Card ativo: titulo em destaque, texto descritivo, badge de data (ex: MAR/2026) capsule no rodape
- Cards laterais: so o titulo visivel, escurecidos, sugerem continuidade
- Cor de acento na referencia: ciano. Na nossa versao: --gold (#C9A050)
- Uso no projeto: secao de fases/escopo da proposta
- Animacao desejada: ao clicar/navegar, cards giram/alternam com efeito de neon

## Elementos e componentes a manter ou criar
- (preencher apos analise dos prints)

## Decisoes de implementacao
- (preencher antes de codar)
