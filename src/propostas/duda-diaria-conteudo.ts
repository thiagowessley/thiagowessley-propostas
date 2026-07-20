import type { PropostaData } from '../types/proposta'
import { SOBRE_PADRAO, encerramentoPadrao } from '../lib/copy-padrao'

export const dudaDiariaConteudo: PropostaData = {
  slug: 'duda-diaria-conteudo',
  cliente: 'Duda',
  segmento: 'Nutricionista, emagrecimento e saúde da mulher',
  servico: 'Diária de Conteúdo em Vídeo',
  validade: '2026-07-27',
  envio: '2026-07-20',
  intro_capa: 'Esta proposta apresenta o modelo de diária de conteúdo em vídeo para o seu Instagram: escopo, processo, prazos, condições e investimento.',
  valor: {
    principal: 800,
    moeda: 'BRL',
  },
  mostrarPortfolio: true,
  ctaWhatsapp: 'Reservar minha diária',

  foto_profissional: '/img/thiago-vertical.jpg',
  foto_secundaria: '/img/thiago-horizontal.jpg',

  sobre: SOBRE_PADRAO,

  portfolio: {
    intro: [
      'Nos últimos anos participei de coberturas de evento, vídeos institucionais e produções audiovisuais em diferentes formatos.',
      'Cada um deles somou um repertório: fala direta pra câmera, ritmo de corte e edição pensada pra quem assiste rápido, no feed.',
      'É esse padrão que entra em cada vídeo captado na sua diária mensal.',
    ],
    link: { label: 'Ver portfólio completo', url: 'https://thiagowessley.com.br/' },
    itens: [
      { titulo: 'Dart 316', categoria: 'Show ao vivo', imagem: '/img/portfolio/p2.webp' },
      { titulo: 'Rooftop Garden', categoria: 'Evento social', imagem: '/img/portfolio/p3.webp' },
      { titulo: 'Casa Calantti', categoria: 'Cobertura de evento', imagem: '/img/portfolio/p5.webp' },
      { titulo: 'Dimas Neto', categoria: 'Depoimento em vídeo', imagem: '/img/portfolio/p9.jpg' },
      { titulo: 'Making Of', categoria: 'Bastidores de captação', imagem: '/img/portfolio/p1.webp' },
      { titulo: 'Rolf Colin Corporate', categoria: 'Aftermovie institucional', imagem: '/img/portfolio/p7.webp' },
    ],
  },

  secoes: {
    cenario: {
      problema: 'Manter presença em vídeo o mês inteiro consome duas coisas que não sobram na sua rotina: tempo de gravação e tempo de edição, ambos tirados da agenda de atendimento presencial e online.',
      publico: 'Mulheres em busca de emagrecimento saudável e cuidado com a própria saúde, que te acompanham pelo Instagram antes de fechar a consulta, presencial ou online.',
      desafio: 'Produzir volume de vídeo o mês inteiro sem você precisar segurar câmera, editar ou sacrificar horário de atendimento pra isso.',
      entregas: [
        'Vídeos em volume, sem você precisar gravar ou editar sozinha',
        'Conteúdo do mês inteiro resolvido numa única diária',
        'Edição completa, pronta pra postar',
        'Tempo de atendimento preservado, sem virar produtora de conteúdo em paralelo',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'Planejamento e Pauta',
        periodo: 'ANTES DA DIÁRIA',
        itens: [
          { titulo: 'Repasse de pauta', descricao: 'Você define os temas do mês: dúvidas de paciente, mitos de dieta, bastidor de consulta, o que fizer sentido.' },
          { titulo: 'Direção de formato', descricao: 'O conteúdo técnico é seu, como especialista. Eu entro com a estrutura: por exemplo, qual gancho funciona nos primeiros 3 segundos de cada vídeo.' },
          { titulo: 'Agendamento da diária', descricao: 'Data combinada com antecedência, dentro da agenda mensal fixa.' },
        ],
      },
      {
        numero: '02',
        titulo: 'Diária de Captação',
        periodo: 'DIA COMBINADO',
        itens: [
          { titulo: 'Captação em vídeo', descricao: 'Registro em volume, no seu espaço de atendimento ou onde for combinado.', limite: 'até 8h (ou até 4h na meia diária)' },
          { titulo: 'Fala direta pra câmera', descricao: 'Condução natural pra cada vídeo, sem enrolação nem múltiplas retomadas.' },
          { titulo: 'Quantidade de vídeos', descricao: 'Limitada só pelo tempo da diária, não por um número fixo de peças.' },
        ],
      },
      {
        numero: '03',
        titulo: 'Edição e Entrega',
        periodo: 'APÓS A DIÁRIA',
        itens: [
          { titulo: 'Edição completa', descricao: 'Corte, ritmo e legenda em cada vídeo, pronto pra postar.' },
          { titulo: 'Organização por semana', descricao: 'Vídeos entregues já separados pra cobrir o mês inteiro, sem você precisar planejar a ordem.' },
          { titulo: 'Entrega', descricao: 'Por link, em MP4, pronta pra publicar direto no Instagram.', limite: 'até 5 dias úteis' },
        ],
      },
    ],
    planos: [
      {
        nome: 'Diária Mensal',
        destaque: true,
        resumo: 'O mês inteiro resolvido',
        itens: [
          'Captação em vídeo, até 8h no dia combinado',
          'Quantidade de vídeos livre dentro do tempo da diária',
          'Edição completa de cada vídeo (corte, ritmo, legenda)',
          'Entrega organizada por semana, pronta pra postar o mês inteiro',
          'Pauta e roteiro leve alinhados antes da diária',
          'Agenda mensal fixa, sem precisar recontratar todo mês',
        ],
        valor: 800,
        periodo: '/mês',
        rodape: 'Cobrança mensal, cancelamento a qualquer momento sem multa',
      },
      {
        nome: 'Meia Diária Mensal',
        resumo: 'Menos volume, mesmo padrão',
        itens: [
          'Captação em vídeo, até 4h no dia combinado',
          'Quantidade de vídeos livre dentro do tempo da diária',
          'Edição completa de cada vídeo (corte, ritmo, legenda)',
          'Entrega organizada, pronta pra postar',
          'Indicada pra quem já resolve parte do conteúdo sozinha',
        ],
        valor: 450,
        periodo: '/mês',
        rodape: 'Menos horas, mesmo deslocamento e setup: por isso não é metade do valor da diária cheia',
      },
      {
        nome: 'Diária Extra',
        resumo: 'Reforço pontual',
        itens: [
          'Mesmo bloco de até 8h de captação e edição completa',
          'Soma à diária mensal já contratada',
          'Ideal pra lançamento, campanha ou data especial no mês',
        ],
        valor: 800,
        periodo: 'diária extra',
        rodape: 'Agendada conforme disponibilidade, sem prioridade sobre a diária fixa do mês',
      },
    ],
    prazos: [
      { texto: 'A diária mensal é agendada com antecedência mínima de 5 dias úteis, conforme disponibilidade.', bold: 'antecedência mínima de 5 dias úteis' },
      { texto: 'A edição completa dos vídeos é entregue em até 5 dias úteis após a diária.', bold: 'até 5 dias úteis' },
      { texto: 'Diárias extras dentro do mesmo mês entram na agenda conforme disponibilidade, sem prioridade sobre a diária fixa mensal.', bold: 'sem prioridade sobre a diária fixa mensal' },
    ],
    contrato: [
      {
        titulo: 'Contrato e Entrega',
        itens: [
          'O pagamento da diária mensal é cobrado no início de cada ciclo, para reserva da agenda.',
          'A entrega dos vídeos editados é feita por link, organizada por semana.',
          'Cancelamento a qualquer momento, sem multa, com aviso antes do início do próximo ciclo.',
        ],
      },
      {
        titulo: 'Condições Gerais',
        itens: [
          'Diária fora de Joinville e região: R$ 1.200/mês, mesma estrutura, com deslocamento por conta da Duda.',
          'A trilha sonora usada nas edições é licenciada, sem risco de direito autoral.',
          'O conteúdo técnico dos vídeos é de responsabilidade da Duda, como especialista. A direção de formato (gancho, ritmo, estrutura) fica por conta do Thiago.',
        ],
      },
    ],
    pagamento: {
      blocos: [
        { titulo: 'Diária Mensal', descricao: 'R$ 800 cobrados no início de cada ciclo, via Pix ou transferência.' },
        { titulo: 'Diária Extra', descricao: 'R$ 800 por diária adicional dentro do mesmo mês, cobrada na data da captação.' },
      ],
      meios: [
        { nome: 'Pix', detalhe: 'Transferência instantânea' },
        { nome: 'Transferência', detalhe: 'Depósito em conta corrente' },
      ],
    },
    faq: [
      {
        pergunta: 'Quantos vídeos eu recebo por diária?',
        resposta: 'Não tem número fechado. A diária é um bloco de até 8h de captação (ou 4h na meia diária): quantos vídeos couberem nesse tempo, todos editados e prontos pra postar.',
      },
      {
        pergunta: 'Posso contratar mais de uma diária no mesmo mês?',
        resposta: 'Sim, como diária extra, pra meses com lançamento, campanha ou data que peça mais volume.',
      },
      {
        pergunta: 'Preciso roteirizar tudo antes?',
        resposta: 'Não. A pauta é combinada antes da diária, mas a condução na hora da fala é feita junto, sem depender de texto decorado.',
      },
      {
        pergunta: 'Quem escreve o roteiro dos vídeos?',
        resposta: 'O conteúdo técnico, o que falar sobre nutrição, é seu: você é a especialista. Eu entro na estrutura de cada vídeo, como o gancho ideal pros primeiros 3 segundos, pra transformar seu conhecimento em vídeo que prende.',
      },
    ],
    primeiros_30_dias: [
      'Semana 1: pauta do mês e agendamento da primeira diária',
      'Semana 2: diária de captação e início da edição',
      'Semana 3: primeiros vídeos entregues e publicados',
      'Semana 4: restante do conteúdo entregue, mês coberto',
    ],
    confidencialidade: 'Esta proposta é confidencial e destinada exclusivamente à Duda. Validade de 7 dias corridos a partir da data de envio. Preços sujeitos a atualização após o vencimento.',
    encerramento: encerramentoPadrao('o escopo, o processo e o investimento'),
  },
  utm_copy: {
    whatsapp: 'Duda, segue a proposta da diária de conteúdo em vídeo pro seu Instagram.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
