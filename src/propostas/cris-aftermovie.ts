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
    principal: 500,
    moeda: 'BRL',
  },

  foto_profissional: '/img/thiago-vertical.jpg',
  foto_secundaria: '/img/thiago-horizontal.jpg',

  sobre: SOBRE_PADRAO,

  secoes: {
    cenario: {
      problema: 'Um evento bem produzido perde força quando o vídeo não tem direção, ritmo e acabamento à altura do que aconteceu. A energia do dia não chega inteira a quem assiste.',
      publico: 'Convidados, redes sociais e quem for assistir ao vídeo sem ter estado no evento.',
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
        valor: 500,
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
        valor: 800,
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
          'O pagamento é dividido em 50% na aprovação e 50% na entrega.',
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
        { titulo: 'Aprovação', descricao: '50% do valor na aprovação da proposta, para reserva da data.' },
        { titulo: 'Entrega', descricao: '50% restante na entrega do vídeo final.' },
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
