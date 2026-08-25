import type { PropostaData } from '../types/proposta'
import { SOBRE_PADRAO, encerramentoPadrao } from '../lib/copy-padrao'

export const tassianaBniAftermovie: PropostaData = {
  slug: 'tassiana-bni-aftermovie',
  cliente: 'Tassiana',
  segmento: 'BNI Decision',
  servico: 'Cobertura em Vídeo de Apresentação',
  validade: '2026-09-01',
  envio: '2026-08-25',
  intro_capa: 'Esta proposta apresenta o escopo, o prazo e o investimento para a cobertura em vídeo da sua apresentação no BNI.',
  valor: {
    principal: 197,
    moeda: 'BRL',
  },
  mostrarPortfolio: true,
  ctaWhatsapp: 'Reservar minha apresentação',

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
      problema: 'Uma boa apresentação perde alcance quando fica só na lembrança de quem estava na sala. Sem registro em vídeo, não sobra material pra mostrar o que foi dito depois.',
      publico: 'Sua rede de contatos no BNI, clientes e prospects que não estavam na sala, e quem acompanha você nas redes.',
      desafio: 'Registrar a apresentação inteira e entregar um aftermovie de até 1 minuto e 30 segundos com ritmo e edição de nível profissional, pronto pra publicar.',
      entregas: [
        'Vídeo com acabamento de peça comercial',
        'Aftermovie editado com ritmo, cor e trilha em nível profissional',
        'Material pronto para reforçar sua presença nas redes depois do evento',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'Captação e Edição',
        periodo: 'DIA DA APRESENTAÇÃO',
        itens: [
          { titulo: 'Captação em vídeo', descricao: 'Registro da sua apresentação no BNI, do início ao fim.', limite: 'tempo da apresentação' },
          { titulo: 'Edição do aftermovie', descricao: 'Corte, ritmo, correção de cor e trilha sonora licenciada.' },
          { titulo: 'Entrega em MP4', descricao: 'Vídeo final em alta qualidade, pronto para publicar nas redes.', limite: 'até 1:30 min' },
        ],
      },
    ],
    planos: [
      {
        nome: 'Aftermovie da Apresentação',
        destaque: true,
        resumo: 'Captação + edição',
        itens: [
          'Captação em vídeo da apresentação',
          'Edição completa com corte e ritmo',
          'Correção de cor',
          'Trilha sonora licenciada',
          'Entrega em MP4, até 1:30 min',
        ],
        valor: 197,
        periodo: 'entrega única',
        rodape: 'Entrega em até 7 dias úteis após a apresentação',
      },
    ],
    prazos: [
      { texto: 'A captação ocorre no dia da apresentação, mediante confirmação prévia de horário e local.', bold: 'confirmação prévia de horário e local' },
      { texto: 'A entrega do aftermovie final costuma sair logo após o evento. O prazo de até 7 dias úteis é uma garantia, não o padrão.', bold: 'até 7 dias úteis é uma garantia, não o padrão' },
      { texto: 'Alterações no roteiro do aftermovie após a edição finalizada são orçadas à parte.', bold: 'orçadas à parte' },
    ],
    contrato: [
      {
        titulo: 'Contrato e Entrega',
        itens: [
          'O pagamento é feito 100% na aprovação, para reserva da data.',
          'A entrega do vídeo final é feita por link, em MP4.',
          'Revisões além do escopo combinado são orçadas à parte.',
        ],
      },
      {
        titulo: 'Condições Gerais',
        itens: [
          'A trilha sonora usada é licenciada, sem risco de direito autoral.',
          'Trilha sonora aprovada não pode ser trocada sem orçamento novo, já que o corte é montado no ritmo dela.',
        ],
      },
    ],
    pagamento: {
      blocos: [
        { titulo: 'Reserva da data', descricao: '100% do valor na aprovação da proposta, garante sua data na agenda.' },
      ],
      meios: [
        { nome: 'Pix', detalhe: 'Transferência instantânea' },
        { nome: 'Transferência', detalhe: 'Depósito em conta corrente' },
      ],
    },
    confidencialidade: 'Validade de 7 dias corridos a partir da data de envio. Preços sujeitos a atualização após o vencimento.',
    encerramento: encerramentoPadrao('o escopo, o prazo e o investimento'),
  },
  utm_copy: {
    whatsapp: 'Tassiana, segue o orçamento da cobertura da sua apresentação no BNI.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
