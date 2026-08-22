import type { PropostaData } from '../types/proposta'
import { SOBRE_PADRAO, encerramentoPadrao } from '../lib/copy-padrao'

export const thaisDiariaEsportiva: PropostaData = {
  slug: 'thais-diaria-esportiva',
  cliente: 'Thais Joris',
  segmento: 'Produção de conteúdo em vídeo para o segmento esportivo, Joinville/SC',
  servico: 'Diária de Conteúdo em Vídeo',
  responsavel: 'Thais Joris',
  validade: '2026-08-29',
  envio: '2026-08-22',
  intro_capa: 'Esta proposta apresenta os dois modelos de diária de conteúdo em vídeo (captação e edição) pra manter torneios e patrocinadores sempre no ar, com escopo, processo, prazos, condições e investimento de cada um.',
  valor: {
    principal: 797,
    moeda: 'BRL',
  },
  mostrarPortfolio: true,
  ctaWhatsapp: 'Fechar a diária de conteúdo',

  foto_profissional: '/img/thiago-vertical.jpg',
  foto_secundaria: '/img/thiago-horizontal.jpg',

  sobre: SOBRE_PADRAO,

  portfolio: {
    intro: [
      'Nos últimos anos participei de coberturas de evento, vídeos institucionais e produções audiovisuais em diferentes formatos.',
      'Cada um deles somou um repertório: fala direta pra câmera, cobertura de evento e edição pensada pra quem assiste rápido, no feed.',
      'É esse padrão que entra em cada vídeo de patrocinador e anúncio de torneio.',
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
      problema: 'Sua operação atende o segmento esportivo com uma agenda de torneios e patrocinadores que muda todo mês, e cada patrocinador espera aparecer em vídeo de qualidade sem que isso vire um projeto de produção à parte.',
      publico: 'Público que acompanha os torneios pelo Instagram do clube, e patrocinadores que medem o retorno da parceria pela presença de marca em cada vídeo publicado.',
      desafio: 'Sustentar conteúdo de vídeo mensal pra patrocinador e torneio, em volume constante, sem montar equipe própria de captação e edição.',
      entregas: [
        'Vídeo de patrocinador e anúncio de torneio sempre no ar, sem fila parada',
        'Captação e edição terceirizadas, sem contratar equipe própria de conteúdo',
        'Uma diária por mês resolve o volume padrão, reforço extra só quando o calendário de torneios pedir',
        'Primeiros vídeos no ar já na 1ª semana após a diária',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'Planejamento e Pauta',
        periodo: 'ANTES DA DIÁRIA',
        itens: [
          { titulo: 'Repasse do calendário', descricao: 'Você chega com as datas de torneio e a lista de patrocinadores do mês: a pauta de conteúdo é sua.' },
          { titulo: 'Apoio pontual de estrutura', descricao: 'Oriento o que ajuda o vídeo a performar: enquadramento, tom de voz e ritmo de fala do patrocinador. A mensagem em si continua sua.' },
          { titulo: 'Agendamento da diária', descricao: 'Data marcada com antecedência, dentro da agenda mensal, sempre em Joinville.' },
        ],
      },
      {
        numero: '02',
        titulo: 'Diária de Captação',
        periodo: 'DIA COMBINADO',
        itens: [
          { titulo: 'Captação em vídeo', descricao: 'Uma visita só, com a câmera rodando o dia inteiro, pra cobrir patrocinadores e anúncios de torneio.', limite: 'visita única e contínua' },
          { titulo: 'Fala direta pra câmera', descricao: 'Conduzo cada gravação pra sair natural e direto ao ponto, sem repetir tomada atrás de tomada.' },
          { titulo: 'Em torno de 10 vídeos', descricao: 'O limite é o tempo da diária, não um número fechado de peças.' },
        ],
      },
      {
        numero: '03',
        titulo: 'Edição e Entrega',
        periodo: 'APÓS A DIÁRIA',
        itens: [
          { titulo: 'Edição completa', descricao: 'Corte, ritmo e legenda: cada vídeo pronto pra ir direto pro ar.' },
          { titulo: 'Organização por patrocinador e torneio', descricao: 'Vídeos entregues já identificados, sem você perder tempo separando qual é de qual.' },
          { titulo: 'Entrega em lote', descricao: 'Por link, em MP4. Os primeiros vídeos chegam enquanto o resto ainda está em edição.', limite: 'primeiros vídeos na 1ª semana' },
        ],
      },
    ],
    planos: [
      {
        nome: 'Diária Mês a Mês',
        resumo: 'Captação + edição, sem prazo fixo',
        itens: [
          '1 diária de captação por mês, visita única, sempre em Joinville',
          'Em torno de 10 vídeos por diária, dentro do tempo do dia',
          'Edição completa de cada vídeo (corte, ritmo, legenda)',
          'Primeiros vídeos já na 1ª semana, restante ao longo do mês',
          'Sem contrato de permanência',
        ],
        valor: 997,
        periodo: '/mês',
        rodape: 'Sem prazo contratado, renovação mês a mês',
      },
      {
        nome: 'Diária Anual',
        destaque: true,
        resumo: 'Captação + edição, plano anual',
        itens: [
          '1 diária de captação por mês, visita única, sempre em Joinville',
          'Em torno de 10 vídeos por diária, dentro do tempo do dia',
          'Edição completa de cada vídeo (corte, ritmo, legenda)',
          'Primeiros vídeos já na 1ª semana, restante ao longo do mês',
          'Contrato de permanência de 12 meses',
        ],
        valor: 797,
        periodo: '/mês',
        rodape: 'Valor fixo durante os 12 meses de contrato',
      },
      {
        nome: 'Diária Extra',
        resumo: 'Reforço dentro do mesmo mês',
        itens: [
          'Mesma diária completa de captação e edição',
          'Soma ao plano contratado quando o calendário de torneios pedir mais de uma visita no mês',
          'Ideal pra gravar com patrocinador direto na loja, fora do dia principal',
          'Sem urgência de fim de semana: entra no fluxo normal de edição',
        ],
        valor: 500,
        periodo: 'diária extra',
        rodape: 'Cobrada como fração da diária mensal, não como serviço de urgência',
      },
    ],
    prazos: [
      { texto: 'No contrato anual, a permanência é de 12 meses, contada a partir da primeira diária.', bold: 'permanência é de 12 meses' },
      { texto: 'A diária mensal é agendada com antecedência mínima de 5 dias úteis, conforme disponibilidade.', bold: 'antecedência mínima de 5 dias úteis' },
      { texto: 'Os primeiros vídeos são entregues já na primeira semana após a diária; o restante segue em edição e chega ao longo do mês.', bold: 'já na primeira semana' },
      { texto: 'A diária extra segue o fluxo normal de edição, somando ao restante do lote do mês, sem prazo acelerado.', bold: 'fluxo normal de edição' },
    ],
    contrato: [
      {
        titulo: 'Contrato e Entrega',
        itens: [
          'O pagamento é cobrado no início de cada ciclo, para reserva da agenda.',
          'A entrega dos vídeos é feita por link, organizada por lote.',
          'No contrato anual, a permanência é de 12 meses.',
          'Cancelamento antecipado no contrato anual gera multa de 50% sobre as mensalidades restantes até completar o contrato.',
          'No plano mês a mês, não há permanência contratada nem multa de cancelamento.',
        ],
      },
      {
        titulo: 'Condições Gerais',
        itens: [
          'A diária é uma visita única e contínua, sem fracionamento em mais de um encontro no mesmo dia. Encerrar antes do tempo não gera crédito nem horas a compensar em outra data.',
          'Diária fora de Joinville e região: valor ajustado conforme deslocamento, combinado à parte.',
          'A trilha sonora usada nas edições é licenciada, sem risco de direito autoral. Uma vez aprovada, não pode ser trocada sem orçamento novo.',
          'O roteiro e a mensagem de cada patrocinador são de responsabilidade de quem contrata.',
          'Cada vídeo tem direito a 1 rodada de ajuste, limitada a corte de fala já gravada e ajuste de legenda. Nova captação, nova cena ou troca de trilha são orçadas à parte.',
        ],
      },
    ],
    pagamento: {
      blocos: [
        { titulo: 'Mensalidade Diária', descricao: 'Cobrada no início de cada ciclo, via Pix ou transferência. Inclui 1 diária por mês.' },
        { titulo: 'Diária Extra', descricao: 'R$ 500 por diária adicional no mesmo mês, cobrada na data da captação.' },
      ],
      meios: [
        { nome: 'Pix', detalhe: 'Transferência instantânea' },
        { nome: 'Transferência', detalhe: 'Depósito em conta corrente' },
      ],
    },
    faq: [
      {
        pergunta: 'Qual a diferença entre a diária mensal e a diária extra?',
        resposta: 'A diária mensal já está inclusa no plano, 1 visita por mês. A diária extra é um reforço dentro do mesmo mês, pra quando o calendário de torneios pedir mais de um encontro, por exemplo gravar com um patrocinador direto na loja dele.',
      },
      {
        pergunta: 'Quantos vídeos saem de cada diária?',
        resposta: 'Em torno de 10, mas não é um número fechado. A diária é uma visita única de captação: quantos vídeos couberem no dia, todos editados e prontos pra postar.',
      },
      {
        pergunta: 'A diária pode ser dividida em mais de um encontro no mesmo dia?',
        resposta: 'Não. A diária é uma visita única e contínua. Isso mantém o formato de prestação de serviço combinado, e não uma disponibilidade fracionada ao longo do dia.',
      },
      {
        pergunta: 'Existe fidelidade no contrato?',
        resposta: 'Depende do plano. No mês a mês não há permanência contratada. No contrato anual existe permanência de 12 meses, com multa de 50% sobre as mensalidades restantes em caso de cancelamento antecipado.',
      },
      {
        pergunta: 'Quem aprova os vídeos antes de publicar?',
        resposta: 'A entrega é organizada por patrocinador e torneio pra facilitar sua revisão antes do ar. Você define com quem mais precisa alinhar dentro do seu projeto.',
      },
    ],
    primeiros_30_dias: [
      'Semana 1: alinhamento do calendário de torneios e patrocinadores, agendamento da diária',
      'Semana 2: diária de captação e início da edição',
      'Semana 3: primeiros vídeos entregues',
      'Semana 4: restante do lote entregue, mês coberto',
    ],
    confidencialidade: 'Esta proposta é confidencial e destinada exclusivamente a Thais Joris. Validade de 7 dias corridos a partir da data de envio. Preços sujeitos a atualização após o vencimento.',
    encerramento: encerramentoPadrao('o escopo, o processo e o investimento'),
  },
  utm_copy: {
    whatsapp: 'Segue a proposta da diária de conteúdo em vídeo pro segmento esportivo.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
