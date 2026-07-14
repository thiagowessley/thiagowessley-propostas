import type { PropostaData } from '../types/proposta'
import { SOBRE_PADRAO, encerramentoPadrao } from '../lib/copy-padrao'

export const crisAftermovie: PropostaData = {
  slug: 'cris-aftermovie',
  cliente: 'Cris',
  segmento: 'Evento',
  servico: 'Aftermovie de Evento',
  validade: '2026-07-29',
  envio: '2026-07-14',
  intro_capa: 'Esta proposta apresenta o escopo, o prazo e o investimento para a produção do aftermovie do seu evento.',
  valor: {
    principal: 497,
    moeda: 'BRL',
  },
  mostrarPortfolio: true,
  ctaWhatsapp: 'Reservar minha data',

  foto_profissional: '/img/thiago-vertical.jpg',
  foto_secundaria: '/img/thiago-horizontal.jpg',

  sobre: SOBRE_PADRAO,

  portfolio: {
    intro: [
      'Nos últimos anos participei de coberturas de evento, vídeos institucionais e produções audiovisuais em diferentes formatos.',
      'Cada um deles somou um repertório: shows ao vivo, eventos corporativos, depoimentos em vídeo e aftermovies.',
      'No link abaixo você confere mais peças e parte do arquivo de eventos que cobri.',
    ],
    link: { label: 'Ver portfólio completo', url: 'https://thiagowessley.com.br/' },
    itens: [
      { titulo: 'Dart 316', categoria: 'Show ao vivo', imagem: '/img/portfolio/p2.webp' },
      { titulo: 'Rooftop Garden', categoria: 'Evento social', imagem: '/img/portfolio/p3.webp' },
      { titulo: 'Casa Calantti', categoria: 'Cobertura de evento', imagem: '/img/portfolio/p5.webp' },
      { titulo: 'Rolf Colin Corporate', categoria: 'Aftermovie institucional', imagem: '/img/portfolio/p7.webp' },
      { titulo: 'Making Of', categoria: 'Bastidores de captação', imagem: '/img/portfolio/p1.webp' },
      { titulo: 'Jantar Corporativo', categoria: 'Cobertura de evento', imagem: '/img/portfolio/p4.webp' },
      { titulo: 'Reunião Estratégica', categoria: 'Cobertura corporativa', imagem: '/img/portfolio/p8.webp' },
      { titulo: 'Dimas Neto', categoria: 'Depoimento em vídeo', imagem: '/img/portfolio/p9.jpg' },
    ],
  },

  secoes: {
    cenario: {
      problema: 'Um evento bem produzido perde força quando o vídeo não tem direção, ritmo e acabamento à altura do que aconteceu. A energia do dia não chega inteira a quem assiste.',
      publico: 'Convidados do evento e quem assistir ao vídeo depois, nas redes, sem ter estado lá.',
      desafio: 'Transformar os melhores momentos do evento em um vídeo de até 1 minuto com cara de peça comercial: ritmo, cor e trilha que passam a sensação de produção profissional.',
      entregas: [
        'Vídeo com acabamento de peça comercial',
        'Aftermovie editado com ritmo, cor e trilha em nível profissional',
        'Material que representa a marca por trás do evento com o mesmo padrão dele',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'Captação e Edição',
        periodo: 'DIA DO EVENTO',
        itens: [
          { titulo: 'Captação em vídeo', descricao: 'Registro dos melhores momentos do evento, do início ao encerramento.', limite: 'até 1 diária' },
          { titulo: 'Edição do aftermovie', descricao: 'Corte, ritmo, correção de cor e trilha sonora licenciada.' },
          { titulo: 'Entrega em MP4 ou MOV', descricao: 'Vídeo final em alta qualidade, pronto para redes sociais.', limite: 'até 1:00 min' },
        ],
      },
    ],
    planos: [
      {
        nome: 'Aftermovie',
        resumo: 'Captação + edição',
        itens: [
          'Captação em vídeo, até 1 diária',
          'Edição completa com corte e ritmo',
          'Correção de cor',
          'Trilha sonora licenciada',
          'Entrega em MP4 ou MOV, até 1:00 min',
        ],
        valor: 497,
        periodo: 'entrega única',
        rodape: 'Entrega logo após o evento, com até 7 dias úteis de garantia',
      },
      {
        nome: 'Aftermovie + Cortes',
        destaque: true,
        resumo: 'Com material para redes',
        itens: [
          'Captação em vídeo, até 1 diária',
          'Edição completa com corte e ritmo',
          'Correção de cor',
          'Trilha sonora licenciada',
          'Entrega em MP4 ou MOV, até 1:00 min',
          'Cortes adicionais para Reels e Stories',
          'Versionamento em 9:16 e 1:1',
        ],
        valor: 797,
        periodo: 'entrega única',
        rodape: 'Entrega logo após o evento, com até 7 dias úteis de garantia',
      },
    ],
    prazos: [
      { texto: 'A captação ocorre no dia do evento, mediante confirmação prévia de data, horário e local.', bold: 'confirmação prévia de data, horário e local' },
      { texto: 'A entrega do aftermovie final costuma sair logo após o evento. O prazo de até 7 dias úteis é uma garantia, não o padrão.', bold: 'até 7 dias úteis é uma garantia, não o padrão' },
      { texto: 'Alterações no roteiro do aftermovie após a edição finalizada são orçadas à parte.', bold: 'orçadas à parte' },
    ],
    contrato: [
      {
        titulo: 'Contrato e Entrega',
        itens: [
          'O pagamento é feito 100% na aprovação, para reserva da data.',
          'A entrega do vídeo final é feita por link, em MP4 ou MOV.',
          'Revisões além do escopo combinado são orçadas à parte.',
        ],
      },
      {
        titulo: 'Condições Gerais',
        itens: [
          'A trilha sonora usada é licenciada, sem risco de direito autoral.',
        ],
      },
    ],
    pagamento: {
      blocos: [
        { titulo: 'Reserva da data', descricao: '100% do valor na aprovação da proposta, garante a data do evento na agenda.' },
      ],
      meios: [
        { nome: 'Pix', detalhe: 'Transferência instantânea' },
        { nome: 'Transferência', detalhe: 'Depósito em conta corrente' },
      ],
    },
    confidencialidade: 'Validade de 15 dias corridos a partir da data de envio. Preços sujeitos a atualização após o vencimento.',
    encerramento: encerramentoPadrao('o escopo, o prazo e o investimento'),
  },
  utm_copy: {
    whatsapp: 'Cris, segue o orçamento do aftermovie do seu evento.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
