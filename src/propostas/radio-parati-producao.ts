import type { PropostaData } from '../types/proposta'
import { SOBRE_PADRAO, encerramentoPadrao } from '../lib/copy-padrao'

export const radioParatiProducao: PropostaData = {
  slug: 'radio-parati-producao',
  cliente: 'Rádio Parati FM',
  segmento: 'Rádio local, Araquari e região',
  servico: 'Produção de Vídeos Publicitários',
  validade: '2026-07-24',
  envio: '2026-07-17',
  intro_capa: 'Esta proposta apresenta o modelo de produção de vídeo publicitário para os contratos fechados pela Rádio Parati FM: escopo, processo, prazos, condições e investimento.',
  valor: {
    principal: 797,
    moeda: 'BRL',
  },
  mostrarPortfolio: true,
  ctaWhatsapp: 'Fechar a parceria',

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
      'É esse padrão que entra em cada vídeo publicitário produzido para os anunciantes da rádio.',
    ],
    link: { label: 'Ver portfólio completo', url: 'https://thiagowessley.com.br/' },
    itens: [
      { titulo: 'Dart 316', categoria: 'Show ao vivo', imagem: '/img/portfolio/p2.webp' },
      { titulo: 'Rooftop Garden', categoria: 'Evento social', imagem: '/img/portfolio/p3.webp' },
      { titulo: 'Casa Calantti', categoria: 'Cobertura de evento', imagem: '/img/portfolio/p5.webp' },
      { titulo: 'Rolf Colin Corporate', categoria: 'Aftermovie institucional', imagem: '/img/portfolio/p7.webp' },
      { titulo: 'Jantar Corporativo', categoria: 'Cobertura de evento', imagem: '/img/portfolio/p4.webp' },
      { titulo: 'Dimas Neto', categoria: 'Depoimento em vídeo', imagem: '/img/portfolio/p9.jpg' },
    ],
  },

  secoes: {
    cenario: {
      problema: 'A Rádio Parati FM é a única emissora de Araquari, cidade que é hoje a 5ª que mais cresce em Santa Catarina e a 6ª do Brasil: população saltou de 24 mil para mais de 50 mil habitantes em pouco mais de uma década, com mais de 5.500 empresas já instaladas. Vídeo publicitário é a forma direta de captar essa base crescente de anunciantes, mas sustentar esse formato em volume exige captação e edição com padrão profissional em cada contrato fechado.',
      publico: 'Ouvintes e moradores de Araquari e região que acompanham a Rádio Parati FM pela notícia, a música e a agenda de eventos locais. É esse alcance que dá valor ao vídeo de cada anunciante.',
      desafio: 'Transformar cada contrato fechado pela rádio em um vídeo publicitário pronto para veicular, com captação e edição profissional, sem depender de montar uma estrutura própria.',
      entregas: [
        'Vídeo publicitário pronto para veicular a cada contrato fechado',
        'Captação e edição profissionais, sem custo de equipe própria',
        'Fala direta do anunciante pra câmera, com texto de destaque em série e identidade visual consistente entre vídeos',
        'Correção de cor e trilha sonora licenciada em toda entrega',
        'Agenda dedicada de até 2 diárias por semana, sem depender de disponibilidade externa',
        'Deslocamento e produção por conta do Thiago, a rádio só aprova o resultado',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'Fechamento e Agendamento',
        periodo: 'SEMANAL',
        itens: [
          { titulo: 'Repasse do briefing', descricao: 'A cada contrato fechado, a rádio repassa o que precisa aparecer no vídeo do anunciante.' },
          { titulo: 'Definição da oferta', descricao: 'Alinhamento do texto de destaque que vai virar overlay no vídeo: promoção, produto ou chamada do anunciante.' },
          { titulo: 'Agendamento da captação', descricao: 'Encaixe dentro da janela de até 2 diárias por semana. Reunir vários anunciantes no mesmo dia rende mais vídeos pela mesma diária.' },
        ],
      },
      {
        numero: '02',
        titulo: 'Captação',
        periodo: 'DIA COMBINADO',
        itens: [
          { titulo: 'Captação em vídeo', descricao: 'Registro no local do anunciante, com direção de cena e enquadramento em padrão publicitário.', limite: 'até 2 diárias/semana' },
          { titulo: 'Fala direta pra câmera', descricao: 'Condução do anunciante pra um depoimento natural, sem depender de roteiro decorado.' },
          { titulo: 'Registro da oferta', descricao: 'Captação do que vai virar o texto de destaque na edição, já pensado no formato de série.' },
        ],
      },
      {
        numero: '03',
        titulo: 'Edição e Entrega',
        periodo: 'APÓS A CAPTAÇÃO',
        itens: [
          { titulo: 'Edição', descricao: 'Corte, ritmo, correção de cor e trilha sonora licenciada.' },
          { titulo: 'Texto de destaque', descricao: 'Aplicação do template fixo de fonte e cor, mudando só a oferta de cada anunciante.' },
          { titulo: 'Entrega', descricao: 'Vídeo final em MP4, pronto para veicular nas redes da rádio e repasse ao anunciante.', limite: 'até 5 dias úteis' },
        ],
      },
    ],
    planos: [
      {
        nome: 'Produção Completa',
        resumo: 'Diária de captação',
        itens: [
          'Captação em vídeo no local do anunciante',
          'Fala direta pra câmera com texto de destaque em série',
          'Edição completa com corte, ritmo e correção de cor',
          'Trilha sonora licenciada',
          'Entrega em MP4, pronta para veicular',
          'Agenda dedicada de até 2 diárias por semana',
          'Deslocamento até o local por conta da Rádio Parati FM',
        ],
        valor: 797,
        periodo: '/diária de captação',
        rodape: 'A diária cobre todos os anunciantes captados no mesmo dia, não é um valor por vídeo',
      },
    ],
    prazos: [
      { texto: 'A captação ocorre em até 2 diárias por semana, agendadas conforme os contratos fechados pela rádio.', bold: 'até 2 diárias por semana' },
      { texto: 'A edição e a entrega do vídeo final ocorrem em até 5 dias úteis após a captação.', bold: 'até 5 dias úteis' },
      { texto: 'Captações que ultrapassem o teto semanal são reagendadas para a semana seguinte ou orçadas como diária extra.', bold: 'reagendadas para a semana seguinte' },
    ],
    contrato: [
      {
        titulo: 'Contrato e Entrega',
        itens: [
          'A diária de captação é cobrada por dia de trabalho, independente do número de vídeos produzidos naquele dia.',
          'A entrega do vídeo final é feita por link, em MP4.',
        ],
      },
      {
        titulo: 'Condições Gerais',
        itens: [
          'Despesas de deslocamento são por conta da Rádio Parati FM, independente da localidade dentro da região.',
          'A trilha sonora usada é licenciada, sem risco de direito autoral.',
          'O teto de até 2 diárias por semana pode ser revisto conforme volume, mediante acordo entre as partes.',
        ],
      },
    ],
    pagamento: {
      blocos: [
        { titulo: 'Diária de captação', descricao: 'R$ 797 por dia de trabalho, cobrada na data da captação, via Pix ou transferência.' },
      ],
      meios: [
        { nome: 'Pix', detalhe: 'Transferência instantânea' },
        { nome: 'Transferência', detalhe: 'Depósito em conta corrente' },
      ],
    },
    referencias: [
      {
        nome: 'Araquari News',
        url: 'https://www.instagram.com/araquari_news/',
        tecnica: 'Portal de notícias de Araquari com 70,9 mil seguidores que vende vídeo publicitário para negócio local, organizado por destaques fixos de anunciante (consórcios, salão, imóveis, veterinária). Aplicação: mesmo formato de vídeo por anunciante, com destaque fixo no perfil como vitrine permanente do contrato fechado.',
      },
      {
        nome: 'Topázio Neto',
        url: 'https://www.instagram.com/topaziofloripa/',
        tecnica: 'Conteúdo pessoal com 561 mil seguidores construído em cima de fala direta pra câmera e texto de destaque em série, sempre na mesma fonte e cor por tema. Aplicação: cada anunciante fala direto pra câmera, com um template fixo de texto de destaque que muda só a oferta, virando um molde rápido de repetir a cada captação.',
      },
    ],
    faq: [
      {
        pergunta: 'E se a rádio fechar mais contratos do que cabe nas 2 diárias da semana?',
        resposta: 'O excedente é reagendado para a semana seguinte ou orçado como diária extra, combinado antes da captação.',
      },
      {
        pergunta: 'A diária cobre quantos vídeos?',
        resposta: 'A diária é por dia de trabalho, não por vídeo. Se a agenda permitir captar mais de um anunciante no mesmo dia, o custo da diária não muda.',
      },
    ],
    confidencialidade: 'Esta proposta é confidencial e destinada exclusivamente à Rádio Parati FM. Validade de 7 dias corridos a partir da data de envio. Preços sujeitos a atualização após o vencimento. Se preferirem formar a própria estrutura interna, veja a proposta de mentoria individual.',
    encerramento: encerramentoPadrao('o escopo, o processo e o investimento'),
  },
  utm_copy: {
    whatsapp: 'Fernanda, segue a proposta de produção de vídeo publicitário para a Rádio Parati FM.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
