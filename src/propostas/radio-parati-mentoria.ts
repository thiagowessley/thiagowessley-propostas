import type { PropostaData } from '../types/proposta'
import { SOBRE_PADRAO, encerramentoPadrao } from '../lib/copy-padrao'

export const radioParatiMentoria: PropostaData = {
  slug: 'radio-parati-mentoria',
  cliente: 'Rádio Parati FM',
  segmento: 'Rádio local, Araquari e região',
  servico: 'Mentoria de Produção Audiovisual',
  validade: '2026-07-24',
  envio: '2026-07-17',
  intro_capa: 'Esta proposta apresenta o escopo, o prazo e o investimento da mentoria individual para quem vai assumir a produção de vídeo publicitário da rádio.',
  valor: {
    principal: 997,
    moeda: 'BRL',
  },
  mostrarPortfolio: true,
  ctaWhatsapp: 'Reservar minha data',

  foto_profissional: '/img/thiago-vertical.jpg',
  foto_secundaria: '/img/thiago-horizontal.jpg',

  sobre: {
    ...SOBRE_PADRAO,
    atuacao: [
      { nome: 'Audiovisual', nivel: 95 },
      { nome: 'Comunicação', nivel: 90 },
      { nome: 'Design', nivel: 88 },
      { nome: 'Desenvolvimento Web', nivel: 80 },
    ],
  },

  portfolio: {
    intro: [
      'Nos últimos anos participei de coberturas de evento, vídeos institucionais e produções audiovisuais em diferentes formatos.',
      'Cada um deles somou um repertório: shows ao vivo, eventos corporativos, depoimentos em vídeo e aftermovies.',
      'É esse padrão técnico que a mentoria transfere para quem vai produzir os vídeos da rádio.',
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
      problema: 'A Rádio Parati FM é a única emissora de Araquari, cidade que é hoje a 5ª que mais cresce em Santa Catarina e a 6ª do Brasil: população saltou de 24 mil para mais de 50 mil habitantes em pouco mais de uma década, com mais de 5.500 empresas já instaladas. Trazer alguém para o audiovisual resolve o operacional dessa demanda crescente, mas essa pessoa entra sem processo, sem referência técnica e sem fluxo definido para orientar o trabalho.',
      publico: 'Anunciantes que fecham contrato de vídeo com a Rádio Parati FM e esperam material com padrão profissional.',
      desafio: 'Preparar quem for assumir o audiovisual para captar, editar e publicar vídeo publicitário com padrão profissional, sem depender de tentativa e erro nos primeiros contratos.',
      entregas: [
        'Profissional capaz de captar, editar e publicar vídeo publicitário sozinho, do briefing à entrega',
        'Checklist técnico de captação (câmera, áudio, luz, enquadramento) pra repetir em qualquer visita comercial',
        'Modelo de fala direta pra câmera e texto de destaque em série, prontos pra aplicar em cada anunciante',
        'Fluxo de edição e publicação já definido por formato de rede',
        'Padrão técnico fechado, sem tentativa e erro nos primeiros contratos',
        'Acompanhamento real nas primeiras semanas de produção',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'Imersão Presencial',
        periodo: '1 DIA',
        itens: [
          { titulo: 'Equipamento e captação', descricao: 'Câmera ou celular, estabilização e o kit mínimo necessário pra gravar com qualidade profissional.' },
          { titulo: 'Áudio e luz', descricao: 'Microfone de lapela, como aproveitar luz natural e o que evitar pra não perder a captação.' },
          { titulo: 'Enquadramento e direção de cena', descricao: 'Como conduzir o anunciante na frente da câmera e os ângulos que valorizam o negócio dele.' },
          { titulo: 'Roteiro rápido', descricao: 'Como planejar em poucos minutos o que captar antes de chegar no local do anunciante.' },
          { titulo: 'Edição', descricao: 'Corte, ritmo, cor, trilha licenciada e texto de destaque em série no editor usado pela rádio.' },
          { titulo: 'Publicação', descricao: 'Formatos e specs de entrega por rede: Reels, Stories e feed.' },
        ],
      },
      {
        numero: '02',
        titulo: 'Acompanhamento Online',
        periodo: '3 ENCONTROS',
        itens: [
          { titulo: 'Revisão de material', descricao: 'Análise do que foi produzido nas primeiras semanas de trabalho.', limite: 'até 3 encontros' },
          { titulo: 'Ajuste de fluxo', descricao: 'Correção de erros recorrentes e reforço do padrão técnico combinado.' },
          { titulo: 'Dúvidas em tempo real', descricao: 'Espaço aberto para perguntas específicas de cada contrato em produção.' },
          { titulo: 'Fluxo consolidado', descricao: 'Processo que passa a funcionar sozinho, sem depender mais dos encontros de acompanhamento.' },
        ],
      },
    ],
    planos: [
      {
        nome: 'Mentoria Individual',
        resumo: '1 dia presencial + 3 encontros online',
        itens: [
          'Imersão presencial de 1 dia: equipamento, captação, edição e publicação',
          'Checklist técnico pronto pra repetir em qualquer visita comercial, sem depender de memória',
          'Modelo de texto de destaque e fala direta pra câmera, prontos pra aplicar desde o primeiro vídeo',
          'Direção de cena e roteiro rápido, pra conduzir o anunciante sem travar a captação',
          '3 encontros online de acompanhamento nas primeiras semanas reais de produção',
          'Ajuste de fluxo e correção de erros recorrentes, direto nos primeiros contratos',
          'Guia de referência em PDF, pra consultar quando bater dúvida depois da mentoria',
        ],
        valor: 997,
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
    confidencialidade: 'Validade de 7 dias corridos a partir da data de envio. Preços sujeitos a atualização após o vencimento. Se preferirem já sair com material pronto, sem montar estrutura própria, veja a proposta de produção completa.',
    encerramento: encerramentoPadrao('o escopo, o prazo e o investimento'),
  },
  utm_copy: {
    whatsapp: 'Fernanda, segue a proposta de mentoria audiovisual para a Rádio Parati FM.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
