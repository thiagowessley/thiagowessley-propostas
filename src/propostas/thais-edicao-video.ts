import type { PropostaData } from '../types/proposta'
import { SOBRE_PADRAO, encerramentoPadrao } from '../lib/copy-padrao'

export const thaisEdicaoVideo: PropostaData = {
  slug: 'thais-edicao-video',
  cliente: 'Thais Joris',
  segmento: 'Agência de marketing, edição de vídeo para clientes finais, Joinville/SC',
  servico: 'Edição de Vídeo',
  responsavel: 'Thais Joris',
  validade: '2026-09-09',
  envio: '2026-09-02',
  intro_capa: 'Esta proposta apresenta os dois pacotes de edição de vídeo pros Reels dos clientes da sua agência, com escopo, processo, prazos, condições e investimento de cada um.',
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
      'É esse padrão que entra em cada vídeo editado pros clientes da sua agência.',
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
      problema: 'Sua agência atende clientes de segmentos diferentes e precisa manter um volume constante de Reels no ar, com previsibilidade de prazo em cada entrega.',
      publico: 'Clientes finais da sua agência, cada um com o próprio público no Instagram, que dependem de Reels publicados no ritmo combinado pra manter o anúncio e o conteúdo orgânico rodando.',
      desafio: 'Ter um fluxo de edição com prazo fechado todo mês, sem precisar acompanhar de perto cada entrega pra garantir que sai no tempo certo.',
      entregas: [
        'Vídeos editados sempre dentro do prazo combinado, sem fila atrasada',
        'Um único ponto de edição, com padrão de qualidade consistente em todos os clientes',
        'Escopo fechado por lote, sem surpresa de prazo ou retrabalho',
        'Primeiros vídeos do lote entregues já na primeira semana',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'Envio do Material',
        periodo: 'INÍCIO DO CICLO',
        itens: [
          { titulo: 'Material bruto enviado por você', descricao: 'Via Drive ou WeTransfer, com as imagens e vídeos já captados pelos seus clientes.' },
          { titulo: 'Briefing por vídeo', descricao: 'Direção de música, tom e referência de corte, quando tiver, junto com o material.' },
          { titulo: 'Confirmação do lote', descricao: 'Volume do mês confirmado antes de eu começar a editar.' },
        ],
      },
      {
        numero: '02',
        titulo: 'Edição',
        periodo: 'FLUXO DO CICLO',
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
          'Sem diária de captação: o material bruto é enviado por você',
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
          'Tudo da edição básica, mais efeitos sonoros, animação e b-roll',
          'Pacote de até 10 vídeos por mês',
          'Entrega em MP4, pronta pra postar',
          '2 rodadas de ajuste por vídeo (corte de fala e legenda)',
          'Sem diária de captação: o material bruto é enviado por você',
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
          'A qualidade de áudio e imagem do material bruto enviado é de responsabilidade de quem contrata.',
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
    faq: [
      {
        pergunta: 'Qual a diferença entre a edição básica e a avançada?',
        resposta: 'A básica cobre corte, ritmo, legenda, correção de cor e transição. A avançada tem tudo isso mais efeito sonoro, animação e uso de imagens de apoio (b-roll), pra quem quer o vídeo com mais camada de produção.',
      },
      {
        pergunta: 'Como funciona o envio do material?',
        resposta: 'Você me manda o material bruto já gravado, por Drive ou WeTransfer, com a direção de música e referência de corte quando tiver. Eu edito e devolvo pronto pra postar.',
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
      {
        pergunta: 'Dá pra pedir alteração depois de pronto?',
        resposta: 'Cada vídeo tem direito a 2 rodadas de ajuste, limitadas a corte de fala já gravada e ajuste de legenda. Nova cena, nova captação ou troca de trilha são orçadas à parte.',
      },
    ],
    primeiros_30_dias: [
      'Semana 1: envio do material e confirmação do lote do mês',
      'Semana 2: edição em andamento, primeiros vídeos entregues',
      'Semana 3: restante do lote entregue',
      'Semana 4: ciclo fechado, pronto pro próximo lote',
    ],
    confidencialidade: 'Esta proposta é confidencial e destinada exclusivamente a Thais Joris. Validade de 7 dias corridos a partir da data de envio. Preços sujeitos a atualização após o vencimento.',
    encerramento: encerramentoPadrao('o escopo, o processo e o investimento'),
  },
  utm_copy: {
    whatsapp: 'Segue a proposta de edição de vídeo pros Reels dos seus clientes.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
