import type { PropostaData } from '../types/proposta'
import { SOBRE_PADRAO, encerramentoPadrao } from '../lib/copy-padrao'

// Só edição, sobre material que a Valens já grava. A cobertura completa, com diária
// de captação, é outro serviço, com proposta própria: valens-producao-conteudo.
export const valensEdicaoVideo: PropostaData = {
  slug: 'valens-edicao-video',
  estilo: 'dossie',
  ogImagem: '/og/valens-edicao.jpg',
  dossie: {
    retrato: { src: '/img/portfolio/natalia-merheb.jpg', alt: 'Empresária em Reels educativo, com legenda e destaque no texto', largura: 720, altura: 1280, foco: '50% 24%', mira: ['50%', '31%'] },
    galeria: [
      { src: '/img/portfolio/camila-oliveira.jpg', alt: 'Reels editado, com legenda embutida', largura: 405, altura: 720, foco: '50% 26%' },
      { src: '/img/portfolio/patricia-gurgel.jpg', alt: 'Reels editado, com destaque no texto', largura: 405, altura: 720, foco: '50% 30%' },
    ],
    titulo: { fino: 'Edição de vídeo para a Valens:', grosso: 'o material que vocês já gravam, pronto pra postar em até 7 dias úteis.' },
    lede: 'Dois pacotes mensais de até 10 vídeos, com corte, ritmo, legenda e trilha licenciada. Vocês gravam, eu edito, e cada lote volta organizado por link. A cobertura completa, com diária de captação, é um serviço à parte.',
    documento: 'Proposta comercial',
    duracao: 'a cada ciclo',
    base: { provas: [], produtos: [] },
    linha: {
      titulo: 'Do material bruto ao vídeo no ar, em até 7 dias úteis',
      nota: 'O prazo corre a partir do recebimento do material bruto, por lote de até 10 vídeos. Os primeiros vídeos chegam na primeira semana, enquanto o restante do lote segue em edição.',
      inicio: 'Envio do material',
      fim: 'Lote entregue',
    },
    marcos: [
      { dia: 'Dia 1', nome: 'Material enviado' },
      { dia: 'Primeira semana', nome: 'Primeiros vídeos' },
      { dia: 'Até 7 dias úteis', nome: 'Lote entregue' },
      { dia: 'Após a entrega', nome: 'Rodadas de ajuste' },
    ],
    teste: [
      { etapa: 'Envio', nome: 'Material bruto por Drive ou WeTransfer' },
      { etapa: 'Briefing', nome: 'Música, tom e referência de corte' },
      { etapa: 'Edição', nome: 'Corte, ritmo, legenda e cor' },
      { etapa: 'Entrega', nome: 'MP4 por link, por lote' },
      { etapa: 'Ajuste', nome: 'Rodadas de corte de fala e legenda' },
    ],
    videos: [
      { youtubeId: 'JNHSNxgJT1s', titulo: 'Exemplo de edição avançada: Camila Oliveira', poster: '/img/portfolio/camila-oliveira.jpg' },
    ],
    paineis: [
      { tipo: 'teste', titulo: 'Como cada lote roda', legenda: 'Do material bruto ao vídeo pronto pra postar.' },
      { tipo: 'videos', titulo: 'Padrão de edição', legenda: 'Exemplo de vídeo editado no formato Reels.' },
      null,
    ],
    secoesExtras: ['sobre', 'referencias'],
    fecho: 'O que a Valens já grava, editado e no ar em até 7 dias úteis.',
  },
  cliente: 'Valens Academy',
  segmento: 'Aceleradora de negócios femininos, Joinville/SC',
  servico: 'Edição de Vídeo',
  responsavel: 'Tamyres Petry',
  validade: '2026-10-20',
  envio: '2026-10-13',
  intro_capa: 'Esta proposta apresenta os dois pacotes de edição de vídeo pro Instagram da Valens Academy, sobre material que a Valens já grava, com escopo, processo, prazos, condições e investimento. A cobertura completa, com diária de captação, é um serviço à parte, com proposta própria.',
  valor: {
    principal: 247,
    moeda: 'BRL',
  },
  mostrarPortfolio: true,
  ctaWhatsapp: 'Confirmar a edição de vídeo',

  foto_profissional: '/img/thiago-vertical.jpg',
  foto_secundaria: '/img/thiago-horizontal.jpg',

  sobre: SOBRE_PADRAO,

  portfolio: {
    intro: [
      'Nos últimos anos participei de coberturas de evento, vídeos institucionais e produções audiovisuais em diferentes formatos.',
      'Cada um deles somou um repertório: corte pensado pra quem assiste rápido, ritmo de Reels e entrega dentro do prazo combinado.',
      'É esse padrão que entra em cada vídeo editado pro Instagram da Valens.',
    ],
    link: { label: 'Ver portfólio completo', url: 'https://thiagowessley.com.br/' },
    itens: [
      { titulo: 'Dimas Neto', categoria: 'Depoimento em vídeo', imagem: '/img/portfolio/p9.jpg' },
      { titulo: 'Type Family', categoria: 'Entrevista', imagem: '/img/portfolio/type-family.jpg' },
      { titulo: 'Rolf Colin Corporate', categoria: 'Aftermovie institucional', imagem: '/img/portfolio/p7.webp' },
      { titulo: 'App Serasa', categoria: 'Divulgação de App', imagem: '/img/portfolio/app-serasa.jpg' },
      { titulo: 'Jantar Corporativo', categoria: 'Cobertura de evento', imagem: '/img/portfolio/p4.webp' },
      { titulo: 'Making Of', categoria: 'Bastidores de captação', imagem: '/img/portfolio/p1.webp' },
    ],
  },

  secoes: {
    cenario: {
      problema: 'A Valens Academy já grava material em eventos, imersões e bastidores do Método Pulsar e do Clube VAL$, e esse bruto fica parado esperando edição enquanto o Instagram pede vídeo em volume constante.',
      publico: 'Mulheres empresárias e empreendedoras em busca de estrutura antes de escalar o próprio negócio, que acompanham a Valens pelo Instagram antes de entrar numa imersão, mentoria ou no Clube VAL$.',
      desafio: 'Transformar o que já é gravado em vídeo pronto pra postar, com prazo fechado por lote, sem que a edição vire mais uma tarefa do time.',
      entregas: [
        'Material já gravado vira vídeo pronto pra postar, em até 7 dias úteis por lote',
        'Padrão de edição consistente em todos os vídeos',
        'Escopo fechado por lote, sem surpresa de prazo ou retrabalho',
        'Primeiros vídeos do lote entregues já na primeira semana',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'Envio do Material',
        periodo: 'INÍCIO DO CICLO',
        resumo: 'Ao fim da fase, o lote está confirmado e a edição pode começar.',
        itens: [
          { titulo: 'Material bruto enviado por vocês', descricao: 'Via Drive ou WeTransfer, com as imagens e vídeos já gravados em evento, imersão ou bastidor.' },
          { titulo: 'Briefing por vídeo', descricao: 'Direção de música, tom e referência de corte, quando tiver, junto com o material.' },
          { titulo: 'Confirmação do lote', descricao: 'Volume do mês confirmado antes de eu começar a editar.' },
        ],
      },
      {
        numero: '02',
        titulo: 'Edição',
        periodo: 'FLUXO DO CICLO',
        resumo: 'Ao fim da fase, cada vídeo está montado no ritmo de Reels.',
        itens: [
          { titulo: 'Corte e ritmo', descricao: 'Cada vídeo montado no ritmo de Reels, pensado pra quem assiste rápido no feed.' },
          { titulo: 'Legenda e trilha', descricao: 'Legenda embutida e trilha sonora licenciada, sem risco de direito autoral.' },
          { titulo: 'Correção de cor e transição', descricao: 'Ajuste de cor e transição entre os cortes, incluso em qualquer um dos dois pacotes.' },
        ],
      },
      {
        numero: '03',
        titulo: 'Entrega',
        periodo: 'AO LONGO DO CICLO',
        resumo: 'Ao fim da fase, o lote está entregue, pronto pra postar.',
        itens: [
          { titulo: 'Entrega em MP4', descricao: 'Pronto pra postar, por link.' },
          { titulo: 'Entrega escalonada', descricao: 'Os primeiros vídeos chegam enquanto o resto do lote ainda está em edição.', limite: 'primeiros vídeos na 1ª semana' },
          { titulo: 'Prazo fechado por lote', descricao: 'Até 7 dias úteis por lote de até 10 vídeos, contado a partir do recebimento do material.', limite: 'até 7 dias úteis' },
        ],
      },
    ],
    planos: [
      {
        nome: 'Edição Básica',
        resumo: 'Edição sobre material já gravado',
        itens: [
          'Corte, ritmo, legenda, correção de cor e transição',
          'Pacote de até 10 vídeos por mês',
          'Entrega em MP4, pronta pra postar',
          '2 rodadas de ajuste por vídeo (corte de fala e legenda)',
          'Sem diária de captação: o material bruto é enviado por vocês',
        ],
        valor: 247,
        periodo: '/mês (pacote de 10 vídeos)',
        rodape: 'Vídeo avulso fora do pacote: R$ 47 cada',
        video: { youtubeId: 'V5lMb2SksPs', label: 'Exemplo de edição básica: Maria Eduarda' },
      },
      {
        nome: 'Edição Avançada',
        destaque: true,
        resumo: 'Edição sobre material já gravado',
        itens: [
          'Tudo da edição básica, mais efeitos sonoros, animação e b-roll (imagem própria ou de banco, quando não houver material de apoio)',
          'Pacote de até 10 vídeos por mês',
          'Entrega em MP4, pronta pra postar',
          '2 rodadas de ajuste por vídeo (corte de fala e legenda)',
          'Sem diária de captação: o material bruto é enviado por vocês',
        ],
        valor: 697,
        periodo: '/mês (pacote de 10 vídeos)',
        rodape: 'Vídeo avulso fora do pacote: R$ 97 cada',
        video: { youtubeId: 'JNHSNxgJT1s', label: 'Exemplo de edição avançada: Camila Oliveira' },
      },
    ],
    prazos: [
      { texto: 'O prazo de entrega é de até 7 dias úteis por lote de até 10 vídeos, contado a partir do recebimento do material bruto.', bold: 'até 7 dias úteis' },
      { texto: 'Os primeiros vídeos do lote são entregues já na primeira semana; o restante segue em edição e chega ao longo do ciclo.', bold: 'já na primeira semana' },
      { texto: 'Vídeo avulso fora do pacote mensal segue o mesmo prazo de até 7 dias úteis, contado a partir do envio individual.', bold: 'até 7 dias úteis' },
    ],
    contrato: [
      {
        titulo: 'Contrato e Entrega',
        itens: [
          'O pagamento é cobrado no início de cada ciclo, para reserva da vaga de edição.',
          'A entrega dos vídeos é feita por link, organizada por lote.',
          'Não há permanência contratada nem multa de cancelamento.',
          'Volume acima do pacote contratado no mesmo mês é cobrado como vídeo avulso.',
        ],
      },
      {
        titulo: 'Condições Gerais',
        itens: [
          'A qualidade de áudio e imagem do material bruto enviado é de responsabilidade da Valens.',
          'A trilha sonora usada nas edições é licenciada, sem risco de direito autoral. Uma vez aprovada, não pode ser trocada sem orçamento novo.',
          'Cada vídeo tem direito a 2 rodadas de ajuste, limitadas a corte de fala já gravada e ajuste de legenda. Nova captação, nova cena ou troca de trilha são orçadas à parte.',
          'Capa e thumbnail de vídeo não estão inclusos no escopo de edição, são orçados à parte.',
        ],
      },
    ],
    pagamento: {
      blocos: [
        { titulo: 'Pacote de Edição', descricao: 'Cobrado no início de cada ciclo, conforme o pacote escolhido (básica ou avançada).' },
        { titulo: 'Vídeo Avulso', descricao: 'Fora do pacote: R$ 47 (básica) ou R$ 97 (avançada), cobrado por vídeo entregue.' },
      ],
      meios: [
        { nome: 'Pix', detalhe: 'Transferência instantânea' },
        { nome: 'Transferência', detalhe: 'Depósito em conta corrente' },
      ],
    },
    referencias: [
      {
        nome: 'Camila Farani (Brasil)',
        url: 'https://www.instagram.com/camilafarani/',
        tecnica: '1,1 milhão de seguidores construídos em cima de uma escola de negócios própria (Farani Escola de Negócios) e presença constante como investidora do Shark Tank Brasil, com funil de diagnóstico de crescimento levando direto ao produto. Aplicação: o mesmo formato, conteúdo educativo em vídeo sustentando a autoridade de uma escola de negócios, é o padrão que entra no conteúdo do Método Pulsar e do Clube VAL$.',
      },
      {
        nome: 'Nathalia Arcuri (Brasil)',
        url: 'https://www.instagram.com/nathaliaarcuri/',
        tecnica: '3,5 milhões de seguidores construídos em educação financeira pra mulheres, com volume constante de vídeo em torno do mesmo tema técnico. Aplicação: mesmo em nicho técnico como estrutura e maturidade empresarial, volume consistente de vídeo educativo é o que constrói audiência e autoridade ao longo do tempo.',
      },
    ],
    faq: [
      {
        pergunta: 'Qual a diferença entre a edição básica e a avançada?',
        resposta: 'A básica cobre corte, ritmo, legenda, correção de cor e transição. A avançada tem tudo isso mais efeito sonoro, animação e uso de imagens de apoio (b-roll), pra quem quer o vídeo com mais camada de produção.',
      },
      {
        pergunta: 'Isso inclui gravar os vídeos?',
        resposta: 'Não. Este serviço é só de edição, sobre material que a Valens já gravou. A cobertura completa, com diária de captação, é um serviço à parte, com proposta própria, e os dois podem ser contratados separadamente.',
      },
      {
        pergunta: 'Como funciona o envio do material?',
        resposta: 'Vocês me mandam o material bruto já gravado, por Drive ou WeTransfer, com a direção de música e referência de corte quando tiver. Eu edito e devolvo pronto pra postar.',
      },
      {
        pergunta: 'Qual o prazo de entrega?',
        resposta: 'Até 7 dias úteis por lote de até 10 vídeos, contado a partir do recebimento do material. Os primeiros vídeos chegam já na primeira semana, o resto do lote segue ao longo do ciclo.',
      },
      {
        pergunta: 'E se o volume passar de 10 vídeos no mês?',
        resposta: 'O que passar do pacote contratado é cobrado como vídeo avulso, no valor do plano escolhido (R$ 47 na básica, R$ 97 na avançada).',
      },
      {
        pergunta: 'Existe fidelidade no contrato?',
        resposta: 'Não. Os dois pacotes são sem permanência contratada nem multa de cancelamento.',
      },
    ],
    primeiros_30_dias: [
      'Semana 1: envio do material e confirmação do lote do mês',
      'Semana 2: edição em andamento, primeiros vídeos entregues',
      'Semana 3: restante do lote entregue',
      'Semana 4: ciclo fechado, pronto pro próximo lote',
    ],
    confidencialidade: 'Esta proposta é confidencial e destinada exclusivamente à Valens Academy. Validade de 7 dias corridos a partir da data de envio. Preços sujeitos a atualização após o vencimento.',
    encerramento: encerramentoPadrao('o escopo, o processo e o investimento'),
  },
  utm_copy: {
    whatsapp: 'Segue a proposta de edição de vídeo pra Valens Academy.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
