# Brief para o Lovable: Template de Proposta Comercial (Thiago Wessley)

Arquitetura escolhida (29/06/2026, confirmada 10/07/2026): UM app, cada proposta
e um link `/p/[slug]`. O Lovable entra para deixar o VISUAL bonito. Depois o
Claude transplanta o design pro app que ja roda (`thiagowessley-propostas`),
preservando analytics, QR e webhook.

**Atualizacao 10/07/2026: o sistema ja esta em producao com 3 propostas reais**
(`propostas.thiagowessley.com.br/p/instituto-site`, `/p/caridade-site`,
`/p/caridade-redes`). O Lovable entra agora pra um REFRESH visual, nao pra um
build do zero. Referencias visuais ja aprovadas nesta rodada: `dynamisfamily.com.br`
(nav fixa no topo, hero com badge) e `ideaproof.io` (cabecalho de secao com
numero circulado + eyebrow, titulo com trecho em italico colorido, selo de
confianca). Ver secao "PARTE 1.1" abaixo.

> O que ainda ajudaria: exportar os frames do modelo Figma original como PNG
> (2x), se ainda fizer sentido. Nao e bloqueante: o brief abaixo ja cobre as
> referencias aprovadas.

---

## PARTE 1: prompt pra colar no Lovable (primeira mensagem do projeto novo)

```
Crie uma landing page de PROPOSTA COMERCIAL premium, tema dark, para um
profissional de comunicacao, design e audiovisual (Thiago Wessley).

Stack: React + Vite + TypeScript + Tailwind. Pagina unica, scroll vertical,
com indice lateral de pontos (dot navigation) fixo na direita que acompanha
o scroll. Animacoes suaves de entrada por secao (fade + subir). Responsiva
e impecavel no mobile.

SISTEMA VISUAL (use exatamente estas cores e fontes, sao a identidade da marca):
- Fundo: #0D0D0D
- Cards e superficies: #141414
- Bordas sutis: #1E1E1E
- Dourado (destaque principal): #C9A050
- Dourado escuro (secundario): #8A6C32
- Off-white (texto destaque): #E8E8E0
- Branco suave (titulos): #F5F5EE
- Cinza (texto secundario): #8A8A82
- Tipografia titulos/numeros: Archivo (pesos 300, 800, 900)
- Tipografia corpo: Inter (pesos 300, 400, 500)
- NAO use vermelho. O acento e SEMPRE o dourado #C9A050.
- Marca d'agua "THIAGO WESSLEY" por extenso, girada, opacidade 0.04, dourada,
  centralizada em cada secao (nunca sigla, nunca "TW").
- Assinatura "THIAGO WESSLEY" pequena no canto superior direito das secoes.

PADRAO DE TITULO (use em todas as secoes): titulo em duas linhas, a primeira
palavra fina e cinza (Archivo 300, cor #8A8A82), a segunda grossa e branca
(Archivo 900, cor #F5F5EE). Exemplo: "Condicoes de" (fina) + "Pagamento" (grossa).

Estilo geral: minimalista, muito respiro, premium, sem ornamento desnecessario.
Listas usam um ponto dourado (circulo 5px #C9A050), nunca travessao.

Construa as 12 secoes na ordem e com os layouts da PARTE 2 abaixo. Use o
conteudo de exemplo da PARTE 3.
```

---

## PARTE 1.1: referencias visuais adicionais (10/07/2026)

Duas referencias aprovadas nesta rodada de refresh, sempre mantendo o sistema
visual da PARTE 1 (dourado/dark premium), nunca as cores originais das referencias:

**dynamisfamily.com.br**
- Nav fixa no topo (nao lateral): logo a esquerda, links de secao no centro,
  botao dourado de CTA sempre visivel a direita, barra fina de progresso de
  leitura embaixo da nav.
- Badge/eyebrow acima do titulo da capa com o tipo de servico (ex: "SITE
  INSTITUCIONAL").

**ideaproof.io** (usar SO estes 3 elementos, o resto do site e mockup de
produto SaaS que nao se aplica a uma proposta de servico):
1. Cabecalho de secao com circulo numerado (ex: "01") + linha horizontal +
   eyebrow em caixa alta, antes do titulo de cada secao.
2. Titulo de duas linhas onde um TRECHO fica em italico e na cor dourada
   (nao a linha inteira), ex: "O que voce recebe de volta, *em ~2 minutos*."
3. Selo de confianca pequeno abaixo do CTA principal (ex: "Sem compromisso ·
   Resposta em minutos"), estilo texto pequeno com icones.

NAO trazer do ideaproof.io: os paineis estilo "app" com dados/graficos, o
roadmap em zigue-zague com nos conectados por linha curva, os cards de
integracao com fontes de dados. Sao ilustracoes de produto de software e nao
tem equivalente numa proposta de comunicacao/design/audiovisual.

---

## PARTE 2: as 12 secoes (cole como mensagens seguintes no Lovable, uma ou duas por vez)

1. CAPA (tela cheia, fundo preto): assinatura no topo direito. Titulo grande em
   duas linhas "Proposta" (fina) + "Comercial" (grossa). Abaixo, linha
   "[Servico] · [Cliente]". Dois blocos lado a lado: "Cliente" e "Responsavel".
   Linha com icone (i) + "Envio da proposta DD/MM/AAAA | Validade de 15 dias" +
   risquinho horizontal ate a borda. Paragrafo de introducao pequeno no rodape.

2. SOBRE (split 2 colunas): FOTO a ESQUERDA (vertical, canto inferior direito
   arredondado, preto e branco). Texto a direita: titulo "Ola!", 3 paragrafos de
   apresentacao, e um grid 2 colunas de competencias com barra de progresso fina
   dourada embaixo de cada uma.

3. CENARIO: eyebrow "O cenario", titulo "O que esta / em jogo". 3 colunas com
   barra dourada vertical a esquerda: Posicionamento, Publico, Desafio.

4. ESCOPO (ELEMENTO ASSINATURA, carrossel): eyebrow "Fases do projeto", titulo
   "O que esta / incluido". 3 cards lado a lado: o do meio em destaque, maior,
   com BORDA DOURADA e brilho (glow) pulsante suave. Os laterais menores,
   escurecidos, so com o titulo. Clicar num lateral traz ele pro centro. Dots de
   navegacao embaixo. O card ativo mostra: "FASE 0X", titulo, lista de itens com
   ponto dourado, e um badge capsule no rodape (ex: "SEMANA 1-2").

5. PORTFOLIO (split): coluna esquerda estreita com titulo "Portfolio", 3
   paragrafos curtos e um link dourado. Coluna direita: grade 3x3 de imagens com
   cantos arredondados, hover com leve zoom.

6. INVESTIMENTO (cards de pacote): eyebrow "Investimento", titulo "Escolha seu /
   pacote". 3 cards de plano lado a lado. O do MEIO em destaque: fundo off-white
   (#E8E8E0), texto escuro, elevado pra frente. Cada card: nome do plano grande,
   linha de resumo, lista de itens com ponto, e um botao capsule no rodape com o
   valor (R$). Opcional: linha "referencia de mercado" riscada acima (ancoragem).

7. PRAZOS: titulo "Prazos e / Alteracoes". Lista de itens com ponto dourado,
   trechos criticos em negrito branco (prazos, valores, regras).

8. CONTRATO (2 colunas com linha divisoria no meio): esquerda "Contrato e /
   Entrega", direita "Condicoes / Gerais". Cada uma com lista de pontos.

9. PAGAMENTO: titulo "Condicoes de / Pagamento". 3 blocos (titulo em negrito +
   descricao): a vista, sinal 50/50, parcelamento. No rodape, uma faixa (pill)
   arredondada com os meios de pagamento lado a lado (Pix, Boleto, Transferencia,
   Cartao). Linhas decorativas finas no canto direito.

10. SERVICO ADICIONAL (split, fundo levemente mais claro #1a1a1a): texto a
    esquerda (titulo de uma palavra grande + 2 paragrafos), FOTO horizontal a
    direita (canto inferior esquerdo arredondado, preto e branco). Ex: "Cobertura
    de eventos" contratada a parte.

11. REFERENCIAS: eyebrow "Referencias", titulo "O que nos / inspirou". Cards de
    sites reais estudados, cada um com "O que aplicamos: [tecnica]". Hover muda a
    borda pra dourado.

12. ENCERRAMENTO: FAQ inline (perguntas que expandem) no topo. Depois titulo
    "Proximo / passo", texto curto e direto (sem "muito obrigado", sem fluff).
    Contagem regressiva de validade. QR Code do WhatsApp + botao dourado "Falar no
    WhatsApp" + botao fantasma "Baixar em PDF". Rodape com email | @instagram.

---

## PARTE 3: conteudo de exemplo (proposta Instituto, ja pronto)

Esta tudo escrito em `src/propostas/instituto.ts` deste repo. Use como conteudo
de preenchimento no Lovable (cliente, cenario, fases, planos, prazos, contrato,
pagamento, FAQ, encerramento). Assim o Lovable mostra texto real, nao "lorem ipsum".

---

## PARTE 4: depois que o Lovable terminar o visual

**Nao precisa mexer em dominio nem criar projeto novo na Vercel.** O visual do
Lovable vai ser TRANSPLANTADO pro repo que ja esta no ar
(`propostas.thiagowessley.com.br`), nao vira um site paralelo. Passos:

1. Lovable empurra o codigo pro GitHub sozinho (projeto novo e separado, so
   pra guardar o visual, ex: `thiagowessley-propostas-lovable-draft`).
2. Thiago manda pro Claude o link do projeto Lovable (ou do repo GitHub que
   ele criou).
3. Claude le os componentes que o Lovable gerou e substitui, um a um, os
   componentes equivalentes em `src/components/sections/*.tsx` e
   `src/components/layout/*.tsx` do repo `thiagowessley-propostas` (o que ja
   esta em producao), preservando: o roteamento por slug (`PropostaPage.tsx`),
   os arquivos de dados (`src/propostas/*.ts`), analytics de abertura, webhook
   do Make, QR local e PDF on-demand.
4. Commit + push no repo existente. O deploy automatico na Vercel atualiza o
   MESMO dominio (`propostas.thiagowessley.com.br`) sozinho, sem repontar nada.
5. Se algum dia fizer sentido o Lovable virar dono do proprio deploy (deixou
   de ser so design e virou o app de verdade): aí sim entra a etapa de
   importar o repo dele na Vercel (atencao: auto-detect pode mostrar
   "TanStack Start", trocar manualmente pra **Vite**) e repontar o dominio.
   Mas isso NAO e o plano atual.

## O que o Claude faz por voce em cada proposta nova (modelo escolhido)
- Voce passa: nome do cliente, responsavel, servico, valores, e os textos (ou so
  os pontos principais, eu escrevo a copy).
- Claude cria o arquivo da proposta e te devolve o link `propostas.thiagowessley.com.br/p/cliente`.
- Futuro opcional: um formulario simples pra voce mesmo preencher e gerar o link,
  sem tocar em codigo.
