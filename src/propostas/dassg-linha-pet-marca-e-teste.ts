import type { DossieImagem, PropostaData } from '../types/proposta'

// Produtos em imagem de simulação, na pasta do molde dossiê (900 px de largura)
const img = (arquivo: string, alt: string): DossieImagem => ({ src: `/img/dossie/dassg/${arquivo}.webp`, alt, largura: 900, altura: 672 })
const inox = {
  caixa: img('i01-caixa-areia-aberta', 'Caixa de areia aberta'),
  kit: img('i04-kit-parede', 'Kit de parede'),
  arranhador: img('i05-arranhador', 'Arranhador'),
}
const plastico = {
  casinha: img('q05-casinha-modular', 'Casinha modular'),
  fonte: img('q01-fonte-agua-eletrica', 'Fonte de água elétrica'),
  cama: img('q14-cama-elevada', 'Cama elevada tipo rede'),
}
const pagina = (arquivo: string, alt: string): DossieImagem => ({ src: `/img/dossie/dassg/${arquivo}.webp`, alt, largura: 1280, altura: 800 })

export const dassgLinhaPetMarcaETeste: PropostaData = {
  slug: 'dassg-linha-pet-marca-e-teste',
  estilo: 'dossie',
  ogImagem: '/og/dassg-linha-pet.jpg',
  dossie: {
    retrato: { src: '/img/dossie/dassg/abertura-caixa-areia-inox.webp', alt: 'Gato ao lado da caixa de areia aberta em inox da linha Patas de Aço, em imagem de simulação', largura: 1600, altura: 1195, foco: '40% 50%', mira: ['60%', '62%'] },
    titulo: { fino: 'Linha Pet Dassg:', grosso: 'a resposta do mercado antes de investir em molde e estoque.' },
    lede: 'Patas de Aço, em inox, e a linha em plástico ganham marca, catálogo, site, Instagram e fotos das amostras reais, e passam por um teste com tutores e parceiros comerciais. No dia 90, cada produto sai com uma decisão: seguir, ajustar ou parar.',
    documento: 'Proposta comercial',
    base: {
      provas: [
        { titulo: 'Catálogo do inox', legenda: 'Publicado', imagem: pagina('catalogo-inox', 'Página do catálogo da linha Patas de Aço, em inox'), url: '/c/patas-de-aco' },
        { titulo: 'Plano do inox', legenda: 'Publicado', imagem: pagina('plano-inox', 'Página do plano de negócios da linha Patas de Aço, em inox'), url: '/n/patas-de-aco' },
        { titulo: 'Catálogo do plástico', legenda: 'Publicado', imagem: pagina('catalogo-plastico', 'Página do catálogo da linha pet em plástico'), url: '/c/linha-plastico' },
        { titulo: 'Plano do plástico', legenda: 'Publicado', imagem: pagina('plano-plastico', 'Página do plano de negócios da linha pet em plástico'), url: '/n/linha-plastico' },
      ],
      produtos: [inox.caixa, plastico.casinha, inox.arranhador, plastico.fonte],
    },
    linha: {
      titulo: 'Seis marcos, do dia 1 ao dia 90',
      nota: 'Dias corridos contados a partir da entrada paga. O relógio para enquanto uma decisão ou as amostras não chegam, com no máximo 60 dias de pausa no total.',
      inicio: 'Entrada paga',
      fim: 'Decisão da Dassg',
    },
    marcos: [
      { dia: 'Dia 1', nome: 'Entrada paga' },
      { dia: 'Até o dia 10', nome: 'Reunião de início' },
      { dia: 'Até o dia 35', nome: 'Marca entregue' },
      { dia: 'Até o dia 50', nome: 'Material no ar' },
      { dia: 'Até o dia 80', nome: 'Teste concluído' },
      { dia: 'Até o dia 90', nome: 'Relatório e decisão' },
    ],
    presenca: {
      site: {
        endereco: 'marca.com.br',
        marca: 'Marca',
        chamada: 'Linha pet em inox e em plástico',
        menu: ['Produtos', 'Revenda', 'Contato'],
        produtos: [inox.caixa, inox.arranhador, plastico.casinha, plastico.fonte],
        formulario: { titulo: 'Tenho interesse', opcoes: ['Sou tutor', 'Sou parceiro'], campos: ['Nome', 'WhatsApp', 'Produto de interesse'], botao: 'Enviar', aviso: 'Aviso de privacidade' },
      },
      instagram: {
        perfil: '@marca',
        nome: 'Marca · Linha pet',
        destaques: ['Produtos', 'Revenda', 'Dúvidas'],
        posts: [inox.caixa, plastico.cama, inox.kit, plastico.fonte, inox.arranhador, plastico.casinha],
        reels: [1, 4],
      },
    },
    teste: [
      { etapa: 'Dois públicos', nome: 'Tutores e parceiros comerciais' },
      { etapa: 'Contato', nome: 'Feito pela equipe da Dassg' },
      { etapa: 'Registro', nome: 'Formulário e planilha do projeto' },
      { etapa: 'Leitura', nome: 'Resultado por produto' },
      { etapa: 'Decisão', nome: 'Seguir, ajustar ou parar' },
    ],
    paineis: [
      { tipo: 'base', titulo: 'O que já está no ar', legenda: 'Catálogo e plano das duas linhas, publicados. Os produtos estão dentro de cada página.' },
      { tipo: 'produtos', titulo: 'A linha que recebe a marca', legenda: 'Produtos do inox e do plástico, em imagem de simulação.' },
      { tipo: 'presenca', titulo: 'Como a marca aparece', legenda: 'Desenho do site com o formulário de interesse e do perfil no Instagram. Nome e identidade saem da Fase 02.' },
      { tipo: 'teste', titulo: 'Como o teste mede', legenda: 'Cada contato vira uma linha na planilha, e a planilha vira decisão.' },
    ],
    fecho: 'Da imagem de simulação à resposta do mercado, em 90 dias.',
    depois: 'Com a demanda confirmada, o passo seguinte é a fase de lançamento: fotos finais de catálogo, embalagem técnica, loja virtual e gestão mensal da marca, orçada com os números do teste.',
    assinatura: { src: '/img/dossie/portfolio/thiago-camera.webp', alt: 'Thiago Wessley', largura: 720, altura: 900 },
  },
  cliente: 'Dassg Têmpera',
  segmento: 'Indústria de tratamento térmico, Araquari/SC',
  servico: 'Linha Pet Dassg: Marca e Validação de Mercado',
  validade: '2026-10-06',
  envio: '2026-09-29',
  intro_capa: 'Esta proposta apresenta o escopo, o prazo e o investimento do projeto que leva as duas linhas pet da Dassg Têmpera, Patas de Aço em inox e a linha em plástico, até o primeiro contato com tutores e parceiros comerciais: marca, catálogo, site, Instagram, foto e vídeo das amostras e um teste de mercado medido produto por produto.',
  valor: {
    principal: 10000,
    moeda: 'BRL',
  },
  ctaWhatsapp: 'Aprovar o projeto da linha pet',

  secoes: {
    cenario: {
      problema: 'A Dassg Têmpera tem duas linhas pet estudadas: Patas de Aço, em inox, e a linha em plástico, com o nome Patas Leves ainda em validação. As duas já têm pesquisa, catálogo, plano de negócios e modelo financeiro publicados. Falta a confirmação de quem compra. Só o molde de injeção de uma peça pequena custa a partir de R$ 25 mil, segundo fabricante do setor, e cada peça em plástico pede o seu: antes desse investimento, a Dassg precisa saber quais produtos os tutores e os parceiros comerciais querem, por qual começar e em que condição de compra ou revenda.',
      publico: 'Na decisão, os sócios da Dassg Têmpera. No teste, dois públicos: tutores de cães e gatos, que compram para usar, e parceiros comerciais, como pet shops, distribuidores, revendas e lojas online, que compram para revender.',
      desafio: 'Chegar ao dia 90 com a marca pronta para vender e uma resposta medida do mercado para cada produto, antes de comprometer dinheiro com produção.',
      entregas: [
        'Nomes pesquisados no INPI e identidade visual das duas linhas, antes de qualquer gasto com registro ou embalagem',
        'Material de venda para os dois públicos: um catálogo para o tutor e outro para o parceiro comercial',
        'Site e Instagram da marca no ar, com formulário que registra cada interessado',
        'Fotos e vídeo das amostras reais no lugar das imagens de simulação',
        'Teste de mercado com meta combinada antes de começar e resultado medido produto por produto',
        'Relatório final com a decisão de cada produto e o modelo financeiro refeito com os números da própria Dassg',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'Ponto de Partida: as Duas Linhas',
        periodo: 'JÁ ENTREGUE',
        resumo: 'O projeto parte do estudo já publicado das duas linhas.',
        itens: [
          { titulo: 'Patas de Aço, em inox', descricao: 'Pesquisa de mercado e de fabricação, 11 produtos com imagem de simulação, modelo financeiro, catálogo e plano de negócios publicados. Na reunião de 23/09, a diretoria definiu o recorte gato e cão e os 4 produtos-ícone da linha.', resultado: 'O inox entra no projeto com a direção já aprovada, e o teste começa pelos 4 produtos-ícone.' },
          { titulo: 'Linha em plástico', descricao: 'Pesquisa em cinco frentes (concorrência, fabricação, canais de venda, exigências legais e produtos extras), 15 produtos com imagem de simulação, modelo financeiro com três cenários e dois canais de venda, catálogo e plano de negócios publicados.', resultado: 'Os produtos em plástico que entram no teste saem desse estudo, escolhidos na reunião de início.' },
        ],
      },
      {
        numero: '02',
        titulo: 'Abertura e Marca',
        periodo: 'ATÉ O DIA 35',
        resumo: 'Ao fim da fase, a linha pet tem nomes checados, marca aprovada e as regras do teste combinadas.',
        itens: [
          { titulo: 'Reunião de início', descricao: 'Primeira reunião com os sócios. Define quem responde pela Dassg, quem assina, quais produtos entram no teste, a meta de interesse de cada público e o orçamento para amostras e custos de terceiros.', limite: 'até o dia 10', resultado: 'Uma ficha única com as decisões de partida, aprovada pela pessoa responsável.' },
          { titulo: 'Arquitetura de marca', descricao: 'Define como as duas linhas aparecem para o mercado: uma marca-mãe com duas linhas ou duas marcas independentes. Cada caminho é comparado pelo custo de registro, pela clareza para o tutor e pelo espaço para novos produtos.', limite: '1 recomendação', resultado: 'Uma recomendação por escrito, aprovada pelos sócios antes de qualquer desenho de logotipo.' },
          { titulo: 'Busca no INPI', descricao: 'Consulta à base do INPI por marcas iguais ou parecidas já registradas ou em pedido, nas classes de produto em que a linha precisa de proteção.', limite: 'até 3 nomes', resultado: 'O risco de cada nome fica conhecido antes de a Dassg pagar o pedido de registro ou imprimir qualquer material.' },
          { titulo: 'Sistema de marca', descricao: 'Logotipo, cores, tipografia e guia de uso resumido, para as duas linhas ou para a marca-mãe com as duas assinaturas.', limite: 'até 2 logotipos', resultado: 'Uma identidade pronta para o catálogo, o site, o Instagram e, mais adiante, a embalagem.' },
        ],
      },
      {
        numero: '03',
        titulo: 'Material e Presença',
        periodo: 'ATÉ O DIA 50',
        resumo: 'Ao fim da fase, a marca tem material de venda, site, perfil e imagem real das amostras, prontos para o teste.',
        itens: [
          { titulo: 'Catálogo em duas versões', descricao: 'A versão para o tutor mostra o problema que cada produto resolve, como se usa e o benefício. A versão para o parceiro comercial mostra a linha, os diferenciais e as condições preliminares de revenda, sem preço final nem prazo de entrega prometidos. Em página web, com PDF para enviar por WhatsApp e e-mail.', limite: 'até 8 produtos', resultado: 'A equipe da Dassg chega a cada contato com o material certo para quem está do outro lado.' },
          { titulo: 'Site da marca', descricao: 'Página no domínio da marca com os produtos do teste e um formulário de interesse que separa tutor e parceiro comercial, com aviso de privacidade.', limite: '1 página, até 8 produtos', resultado: 'Cada interessado fica registrado com nome, contato e produto de interesse, e entra na conta do teste.' },
          { titulo: 'Instagram', descricao: 'Perfil da marca configurado, com nome, bio, foto e destaques, espelhado no Facebook, e os posts que apresentam os produtos durante o teste.', limite: 'até 8 posts, sendo até 3 Reels', resultado: 'Quem recebe o catálogo encontra a marca e confere os produtos antes de responder.' },
          { titulo: 'Foto e vídeo', descricao: 'Meia diária com as amostras físicas, em visita única e contínua: até 3 fotos por produto e o vídeo captado para os Reels. Animal, locação e objetos de cena, se desejados, ficam por conta da Dassg.', limite: '4 h, até 24 fotos tratadas', resultado: 'As imagens de simulação saem do catálogo, do site e do Instagram, e o material passa a mostrar o produto real.' },
        ],
      },
      {
        numero: '04',
        titulo: 'Teste e Decisão',
        periodo: 'ATÉ O DIA 90',
        resumo: 'Ao fim da fase, cada produto tem uma resposta do mercado e uma decisão: seguir, ajustar ou parar.',
        itens: [
          { titulo: 'Roteiro do teste', descricao: 'Guia de abordagem para cada público, com as perguntas que a equipe da Dassg faz em cada contato, mais o formulário e a planilha que registram respostas, objeções, produtos preferidos e pedidos de orçamento.', resultado: 'Todo contato segue as mesmas perguntas, e as respostas podem ser comparadas entre si.' },
          { titulo: 'Teste de mercado', descricao: 'Conduzido pela equipe da Dassg, que registra cada contato na planilha do projeto e responde as mensagens e os comentários do perfil. Acompanhamento semanal, dentro das reuniões previstas.', limite: 'até 30 dias', resultado: 'Interesse medido nos dois públicos, comparado com a meta combinada na reunião de início.' },
          { titulo: 'Relatório de validação', descricao: 'Resultado por produto: interesse de cada público, motivos de rejeição, condições de compra e de revenda pedidas e a recomendação para cada um: seguir, ajustar ou parar.', resultado: 'Os sócios decidem onde investir primeiro com a resposta do mercado em mãos.' },
          { titulo: 'Modelo atualizado', descricao: 'Modelo financeiro refeito com os números da Dassg: custo de produção, capacidade livre do forno, cotações e preço da resina. O que não for enviado aparece como pendente, nunca como suposição.', limite: 'até 8 produtos', resultado: 'Custo, preço e margem de cada produto do teste calculados com dado da própria fábrica.' },
        ],
      },
    ],
    planos: [
      {
        nome: 'Linha Pet: Marca e Validação de Mercado',
        resumo: 'Das duas linhas estudadas à resposta do mercado, em 90 dias, por menos que o molde de uma única peça',
        itens: [
          'Base do plástico já entregue: pesquisa, 15 produtos com imagem de simulação, modelo financeiro, catálogo e plano',
          'Arquitetura de marca das duas linhas e sistema de marca, até 2 logotipos (2 rodadas de ajuste)',
          'Busca no INPI de nomes iguais ou parecidos, até 3 nomes',
          'Catálogo em duas versões, tutor e parceiro comercial, até 8 produtos',
          'Site da marca em página única, com os produtos do teste e formulário de interesse',
          'Instagram configurado e espelhado no Facebook, até 8 posts, sendo até 3 Reels',
          'Meia diária de foto e vídeo das amostras, 4 h, até 24 fotos tratadas',
          'Roteiro, formulário e planilha do teste, com até 30 dias de teste e meta nos dois públicos',
          'Relatório de validação por produto e modelo financeiro atualizado',
          'Até 5 reuniões de acompanhamento, até 1h30 cada',
        ],
        valor: 10000,
        periodo: 'entrada de R$ 2.000 e 8 x R$ 1.000',
        rodape: 'Projeto fechado, 90 dias',
        colunasItens: 2,
      },
    ],
    prazos: [
      { texto: '90 dias corridos, contados a partir do pagamento da entrada. O sócio que assina e a pessoa responsável pela resposta são indicados até a reunião de início.', bold: '90 dias corridos' },
      { texto: 'O prazo para enquanto a Dassg não consolida uma decisão ou não entrega as amostras. Dado do modelo financeiro que não chegar até o dia 80 entra como pendente no relatório, sem parar o prazo.', bold: 'O prazo para' },
      { texto: 'As pausas somam no máximo 60 dias. Passado esse limite, a entrega que faltar sai do escopo e, se a Dassg quiser retomar, é orçada como fase nova. As parcelas seguem o calendário original.', bold: 'no máximo 60 dias' },
      { texto: 'A meia diária de foto e vídeo acontece com as amostras prontas. Produto sem amostra física entra no teste com a imagem de simulação, identificada como tal.', bold: 'amostras prontas' },
      { texto: 'Cada entrega principal (sistema de marca, catálogo, site, conjunto de posts e relatório) tem 2 rodadas de ajuste. Vale como retorno a mensagem única da pessoa responsável indicada pela Dassg, em até 5 dias úteis.', bold: '2 rodadas de ajuste' },
      { texto: 'Mudança de direção depois da aprovação é etapa nova, orçada antes. Erro de conteúdo apontado em até 7 dias da entrega é corrigido sem custo.', bold: '7 dias' },
    ],
    contrato: [
      {
        titulo: 'Escopo e Limite',
        itens: [
          'Esta proposta substitui as propostas anteriores da linha pet. O valor cobre as entregas descritas, dentro dos tetos indicados, e o escopo termina no dia 90, somadas as pausas previstas nos prazos.',
          'Novo produto, nome, canal, material ou recorte fora dos tetos é fase nova, com escopo e valor próprios, orçada antes de começar.',
          'Desenho de embalagem, preço definitivo, loja virtual, anúncio pago, contato com parceiros comerciais, fabricação, pedido de registro no INPI e certificação não estão inclusos.',
          'A busca no INPI aponta o risco de conflito com marcas existentes, sem garantir o registro, que depende da análise do próprio INPI. O pedido e o acompanhamento ficam com a Dassg ou com o despachante dela.',
          'A recomendação do relatório se baseia nos contatos registrados no teste. A decisão de investir é da Dassg.',
        ],
      },
      {
        titulo: 'Parte da Dassg',
        itens: [
          'Indicar o sócio que assina e uma pessoa responsável por consolidar a resposta de todos os sócios.',
          'Enviar os dados do modelo: custo de forno e capacidade livre, cotação dos produtos em inox, respostas do fabricante do plástico e preço da resina.',
          'Fechar na reunião de início o orçamento de validação, que cobre amostras (em plástico, protótipo sem molde), domínio, hospedagem, taxas do INPI e impressão.',
          'Fabricar e custear as amostras e conduzir o contato com tutores e parceiros comerciais no teste. O relatório reflete os contatos que a Dassg fizer.',
          'Custos de terceiros: domínio, hospedagem, taxas e despachante do INPI, impressão, anúncio e certificação, além do deslocamento da meia diária. A Dassg é a responsável pelos dados coletados no formulário.',
        ],
      },
      {
        titulo: 'Uso e Quitação',
        itens: [
          'As 8 parcelas são o parcelamento do valor fechado do projeto e seguem devidas até a quitação, qualquer que seja a recomendação do relatório ou um encerramento antecipado pela Dassg.',
          'Até a quitação, a Dassg tem licença de uso de todo o material, inclusive depois do dia 90. Os arquivos editáveis de marca e catálogo são entregues com a quitação integral.',
        ],
      },
    ],
    pagamento: {
      blocos: [
        { titulo: 'Entrada', descricao: 'R$ 2.000 na assinatura. Ela abre o projeto e agenda a reunião de início.' },
        { titulo: '8 parcelas mensais', descricao: 'R$ 1.000 cada, a primeira 30 dias depois da entrada. Atraso tem multa de 2% e juros de 1% ao mês. Nota fiscal em nome da DASSG TÊMPERA LTDA a cada pagamento.' },
      ],
      meios: [
        { nome: 'Pix', detalhe: 'Chave CNPJ 67.205.920/0001-17' },
        { nome: 'Transferência', detalhe: 'Depósito em conta corrente' },
      ],
    },
    confidencialidade: 'Validade de 7 dias corridos a partir da data de envio. Preços sujeitos a atualização após o vencimento.',
    encerramento: 'Escopo, prazo e investimento estão definidos. Com a assinatura e a entrada até 06/10, a reunião de início acontece até 15/10, e a decisão sobre a linha pet sai com a resposta do mercado, antes de qualquer compra de molde.',
  },
  utm_copy: {
    whatsapp: 'Segue a proposta do projeto da linha pet.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
