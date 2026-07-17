import type { PropostaData } from '../types/proposta'
import { SOBRE_PADRAO, encerramentoPadrao } from '../lib/copy-padrao'

export const radioParatiMentoria: PropostaData = {
  slug: 'radio-parati-mentoria',
  cliente: 'Rádio Parati FM',
  segmento: 'Rádio local, Araquari e região',
  servico: 'Mentoria de Produção Audiovisual para Estagiário',
  responsavel: 'Fernanda',
  validade: '2026-08-01',
  envio: '2026-07-17',
  intro_capa: 'Esta proposta apresenta o escopo, o prazo e o investimento da mentoria individual para o estagiário que vai assumir a produção de vídeo publicitário da rádio.',
  valor: {
    principal: 1497,
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
      'É esse padrão técnico que a mentoria transfere para o estagiário da rádio.',
    ],
    link: { label: 'Ver portfólio completo', url: 'https://thiagowessley.com.br/' },
    itens: [
      { titulo: 'Dart 316', categoria: 'Show ao vivo', imagem: '/img/portfolio/p2.webp' },
      { titulo: 'Rooftop Garden', categoria: 'Evento social', imagem: '/img/portfolio/p3.webp' },
      { titulo: 'Casa Calantti', categoria: 'Cobertura de evento', imagem: '/img/portfolio/p5.webp' },
      { titulo: 'Rolf Colin Corporate', categoria: 'Aftermovie institucional', imagem: '/img/portfolio/p7.webp' },
      { titulo: 'Making Of', categoria: 'Bastidores de captação', imagem: '/img/portfolio/p1.webp' },
      { titulo: 'Dimas Neto', categoria: 'Depoimento em vídeo', imagem: '/img/portfolio/p9.jpg' },
    ],
  },

  secoes: {
    cenario: {
      problema: 'A rádio decidiu vender vídeo publicitário para os anunciantes, mas nunca produziu isso internamente. A ideia de contratar um estagiário para o audiovisual resolve o operacional, mas ele entra sem processo, sem referência técnica e sem fluxo definido para orientar o trabalho.',
      publico: 'Anunciantes que fecham contrato de vídeo com a Rádio Parati FM e esperam material com padrão profissional.',
      desafio: 'Preparar o futuro estagiário para captar, editar e publicar vídeo publicitário com padrão profissional, sem depender de tentativa e erro nos primeiros contratos.',
      entregas: [
        'Estagiário capacitado a produzir vídeo publicitário do zero',
        'Guia de referência com specs técnicas e checklist de entrega',
        'Padrão técnico definido, sem tentativa e erro nos primeiros contratos',
        'Acompanhamento nas primeiras semanas de produção real',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'Imersão Presencial',
        periodo: '1 DIA',
        itens: [
          { titulo: 'Captação', descricao: 'Como segurar a câmera, enquadramento, áudio e o que captar em uma visita comercial.' },
          { titulo: 'Edição', descricao: 'Fluxo de corte, ritmo, cor e entrega no editor usado pela rádio.' },
          { titulo: 'Publicação', descricao: 'Formatos e specs de entrega por rede: Reels, Stories e feed.' },
        ],
      },
      {
        numero: '02',
        titulo: 'Acompanhamento Online',
        periodo: '3 ENCONTROS',
        itens: [
          { titulo: 'Revisão de material', descricao: 'Análise do que o estagiário produziu nas primeiras semanas de trabalho.', limite: 'até 3 encontros' },
          { titulo: 'Ajuste de fluxo', descricao: 'Correção de erros recorrentes e reforço do padrão técnico combinado.' },
          { titulo: 'Dúvidas em tempo real', descricao: 'Espaço aberto para perguntas específicas de cada contrato em produção.' },
        ],
      },
    ],
    planos: [
      {
        nome: 'Mentoria Individual',
        destaque: true,
        resumo: '1 dia presencial + 3 encontros online',
        itens: [
          'Imersão presencial de 1 dia: captação, edição e publicação',
          'Guia de referência com specs técnicas e checklist de entrega',
          '3 encontros online de acompanhamento',
          'Revisão de material produzido nas primeiras semanas',
        ],
        valor: 1497,
        periodo: 'entrega única',
        rodape: 'Pagamento 100% na aprovação, para reserva da data da imersão',
      },
    ],
    prazos: [
      { texto: 'A imersão presencial ocorre em data e local combinados após a aprovação, mediante disponibilidade de agenda.', bold: 'mediante disponibilidade de agenda' },
      { texto: 'Os 3 encontros online são agendados dentro de 60 dias corridos a partir da imersão presencial.', bold: 'dentro de 60 dias corridos' },
      { texto: 'Encontros não utilizados dentro do prazo não são acumulativos nem reembolsáveis.', bold: 'não são acumulativos nem reembolsáveis' },
    ],
    contrato: [
      {
        titulo: 'Contrato e Entrega',
        itens: [
          'O pagamento é feito 100% na aprovação, para reserva da data.',
          'A entrega do guia de referência é feita por link, em PDF.',
          'Encontros online adicionais além dos 3 previstos são orçados à parte.',
        ],
      },
      {
        titulo: 'Condições Gerais',
        itens: [
          'Despesas de deslocamento até o local da imersão são por conta da Rádio Parati FM.',
          'O conteúdo ensinado é de uso interno da Rádio Parati FM, sem redistribuição.',
        ],
      },
    ],
    pagamento: {
      blocos: [
        { titulo: 'Reserva da data', descricao: '100% do valor na aprovação da proposta, garante a data da imersão presencial na agenda.' },
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
    whatsapp: 'Fernanda, segue a proposta de mentoria audiovisual para o estagiário da Rádio Parati FM.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
