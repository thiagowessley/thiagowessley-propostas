import type { PropostaData } from '../types/proposta'

export const caridadeSite: PropostaData = {
  slug: 'caridade-site',
  cliente: 'Instituto Humanitário Caridade',
  segmento: 'Instituto humanitário, ex-Hospital de Caridade',
  servico: 'Site Institucional e Sistema de Gestão',
  validade: '2026-07-25',
  envio: '2026-07-10',
  intro_capa: 'Esta proposta apresenta o escopo do site institucional com sistema próprio de gestão (voluntários, associados e conteúdo), o processo de produção, prazos, condições e investimento.',
  valor: {
    principal: 1993,
    manutencao: 567,
    alternativa: 12900,
    moeda: 'BRL',
  },

  foto_profissional: '/img/thiago-vertical.jpg',
  foto_secundaria: '/img/thiago-horizontal.jpg',

  sobre: {
    saudacao: 'Olá!',
    paragrafos: [
      'Sou o Thiago Wessley, de Joinville. Trabalho na fronteira entre comunicação, design e audiovisual, ajudando marcas a aparecerem do jeito certo: site que converte, conteúdo que sustenta presença e vídeo que carrega a mensagem.',
      'Nos últimos anos entreguei sites institucionais, identidade visual, cobertura de eventos e gestão de conteúdo para empresas e projetos que precisavam parecer sérios antes mesmo de crescer.',
      'O que me move é tirar a marca da invisibilidade: estrutura clara, estética premium e conteúdo que alimenta tanto o Google quanto as IAs que as pessoas já usam para buscar.',
    ],
    atuacao: [
      { nome: 'Comunicação', nivel: 95 },
      { nome: 'Design', nivel: 90 },
      { nome: 'Audiovisual', nivel: 88 },
      { nome: 'Desenvolvimento Web', nivel: 82 },
      { nome: 'SEO e GEO', nivel: 80 },
      { nome: 'Tráfego Pago', nivel: 72 },
    ],
  },

  portfolio: {
    intro: [
      'Nos últimos anos participei de projetos em diferentes áreas do design, da web e do audiovisual.',
      'Cada um deles somou um repertório: cobertura de evento, identidade, site institucional, conteúdo para redes e produção de vídeo.',
      'No link abaixo você confere algumas peças desenvolvidas e parte do arquivo de eventos que cobri.',
    ],
    link: { label: 'Ver portfólio completo', url: 'https://thiagowessley.com.br/' },
    itens: [
      { titulo: 'Dart 316', categoria: 'Show ao vivo', imagem: '/img/portfolio/p2.webp' },
      { titulo: 'Rooftop Garden', categoria: 'Evento social', imagem: '/img/portfolio/p3.webp' },
      { titulo: 'Festa Infantil', categoria: 'Cobertura completa', imagem: '/img/portfolio/p6.webp' },
      { titulo: 'Rooftop Colin', categoria: 'Aftermovie', imagem: '/img/portfolio/p7.webp' },
      { titulo: 'Beier Group', categoria: 'Site institucional', imagem: '/img/portfolio/w1.png' },
      { titulo: 'Beier Group', categoria: 'Painel mobile', imagem: '/img/portfolio/w2.png' },
      { titulo: 'Landing de autoridade', categoria: 'Web design', imagem: '/img/portfolio/w3.png' },
      { titulo: 'Beier Group', categoria: 'Depoimentos em vídeo', imagem: '/img/portfolio/w4.png' },
      { titulo: 'Landing de conversão', categoria: 'Web design', imagem: '/img/portfolio/w5.png' },
    ],
  },

  secoes: {
    cenario: {
      problema: 'O Instituto carrega mais de 160 anos de história (fundado em 1859, o maior berçário de São Francisco do Sul) mas não tem uma plataforma digital à altura: hoje a captação de doação, o cadastro de voluntários e a gestão dos associados dependem de processos manuais e do Instagram.',
      publico: 'Doadores, patrocinadores, voluntários, as 3 associações vinculadas e a comunidade de São Francisco do Sul.',
      desafio: 'Unir vitrine institucional, captação de doação e gestão de voluntários e associados numa única plataforma que o próprio Instituto consiga manter sozinho, sem depender de programador.',
      entregas: [
        'Sustentar a captação de doação de forma contínua, não só em campanhas pontuais',
        'Profissionalizar o cadastro e a gestão de voluntários',
        'Dar visibilidade aos projetos e às 3 associações vinculadas',
        'Transmitir a credibilidade de uma instituição com mais de 160 anos de história',
        'Autonomia total de conteúdo para a equipe do Instituto, sem depender de programador',
        'Base técnica pronta para crescer junto com o Instituto',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'O site, página a página',
        periodo: 'SEMANA 1-2',
        itens: [
          { titulo: 'Home', descricao: 'Hero com chamada para doação, indicadores de impacto e resumo institucional.' },
          { titulo: 'Sobre o Instituto', descricao: 'História desde 1859, missão e o que o posiciona como referência em São Francisco do Sul.' },
          { titulo: 'Serviços', descricao: 'Portfólio dos serviços prestados pelo Instituto.' },
          { titulo: 'Projetos', descricao: 'Vitrine de projetos desenvolvidos, pronta para crescer com novos cases.' },
          { titulo: 'Associados', descricao: 'Apresentação das 3 associações vinculadas ao Instituto.' },
          { titulo: 'Seja Voluntário', descricao: 'Formulário público de cadastro, conectado ao painel administrativo.' },
          { titulo: 'Doe Agora', descricao: 'Formas de doação disponíveis, com chamada clara em toda a navegação.' },
          { titulo: 'Contato', descricao: 'Canais oficiais e localização.' },
        ],
      },
      {
        numero: '02',
        titulo: 'Sistema e desenvolvimento',
        periodo: 'SEMANA 2',
        itens: [
          { titulo: 'Painel administrativo', descricao: 'Login seguro para a equipe do Instituto gerenciar conteúdo, projetos e imagens sem programador.' },
          { titulo: 'Cadastro de voluntários', descricao: 'Banco de dados próprio: formulário público + lista e aprovação no painel.' },
          { titulo: 'Cadastro de associados', descricao: 'Gestão das 3 associações vinculadas direto pelo painel.' },
          { titulo: 'Design dark premium', descricao: 'Identidade visual própria do site, sóbria e institucional.' },
        ],
      },
      {
        numero: '03',
        titulo: 'Refino e publicação',
        periodo: 'SEMANA 3',
        itens: [
          { titulo: 'SEO básico e avançado', descricao: 'Meta tags, headings, URLs amigáveis, sitemap XML e schema markup.' },
          { titulo: 'Testes e revisão', descricao: 'Rodada de ajustes finos de conteúdo, layout e fluxo do painel.' },
          { titulo: 'Treinamento do painel', descricao: 'Sessão prática para a equipe do Instituto usar o sistema com autonomia.' },
          { titulo: 'Deploy', descricao: 'Publicação na hospedagem definida para o projeto.' },
        ],
      },
    ],
    planos: [
      {
        nome: 'Site + Sistema',
        resumo: 'Site institucional com painel próprio',
        itens: [
          '8 páginas institucionais',
          'Painel administrativo com login',
          'Cadastro de voluntários e associados',
          'Design dark premium próprio',
          'SEO completo e treinamento incluso',
        ],
        valor: 1993,
        periodo: 'entrega única',
        rodape: '50% na aprovação, 50% na entrega',
      },
      {
        nome: 'Gestão Mensal do Site',
        destaque: true,
        resumo: 'O mais escolhido',
        itens: [
          'Suporte técnico do sistema e do painel',
          'Atualização de conteúdo sob demanda',
          'Backups e atualizações de segurança',
          'Pequenos ajustes de layout',
          'Prioridade no atendimento',
        ],
        valor: 567,
        periodo: '/mês',
        rodape: 'Após a entrega do site (opcional)',
      },
      {
        nome: 'Sob demanda',
        resumo: 'Funcionalidades extras',
        itens: [
          'Gateway de pagamento com cobrança automática',
          'Páginas novas além das 8',
          'Aplicativo ou área logada para associados',
          'Integrações adicionais',
          'Orçado por escopo',
        ],
        valor: 0,
        periodo: '',
        rodape: 'Consultar conforme a necessidade',
      },
    ],
    prazos: [
      { texto: 'O prazo de produção é de 3 semanas, dado o escopo de sistema completo (não apenas site institucional).', bold: '3 semanas' },
      { texto: 'O serviço só começa a ser produzido a partir do envio do briefing completo, da assinatura do contrato e do pagamento.', bold: 'briefing completo, da assinatura do contrato e do pagamento' },
      { texto: 'A entrega inclui até 02 rodadas de revisão e uma sessão de treinamento do painel administrativo.', bold: 'até 02 rodadas de revisão e uma sessão de treinamento' },
      { texto: 'A entrega para aprovação é feita por link e, após o ok, o site vai ao ar.', bold: 'vai ao ar' },
      { texto: 'Solicitações enviadas em sábados, domingos e feriados são respondidas no próximo dia útil.', bold: 'no próximo dia útil' },
    ],
    contrato: [
      {
        titulo: 'Contrato e Entrega',
        itens: [
          'O pagamento segue o modelo 50% na aprovação e 50% na entrega, com datas fixas definidas em contrato.',
          'O material final só é publicado após a confirmação do valor total.',
          'Caso o Instituto queira a gestão mensal, informa por e-mail ou WhatsApp para início do ciclo.',
        ],
      },
      {
        titulo: 'Condições Gerais',
        itens: [
          'O Instituto tem liberdade de enviar textos, fotos e dados, desde que em boa qualidade.',
          'O envio do conteúdo deve ocorrer durante a fase de produção, para entrar no site junto das demais páginas.',
          'Logotipos e arquivos da marca devem ser enviados em PDF, SVG, PSD ou AI.',
          'Cobrança online (cartão, boleto recorrente) não está inclusa: escopo cobre doação via Pix e dados bancários exibidos no site.',
          'O banco de dados e a hospedagem são criados em contas próprias do Instituto (Supabase e Vercel), com o Thiago como responsável técnico. Os dados de voluntários e associados ficam sob titularidade do Instituto, nunca do desenvolvedor.',
        ],
      },
    ],
    pagamento: {
      blocos: [
        { titulo: 'Valor total à vista', descricao: 'Através de Pix, boleto ou transferência bancária.' },
        { titulo: 'Sinal de pagamento (50% / 50%)', descricao: 'Primeira parte na aprovação da proposta, segunda na entrega do site.' },
        { titulo: 'Parcelamento', descricao: 'Em boleto, número de parcelas conforme o escopo contratado.' },
      ],
      meios: [
        { nome: 'Pix', detalhe: 'Transferência instantânea' },
        { nome: 'Boleto', detalhe: 'Compensação em até 2 dias úteis' },
        { nome: 'Transferência', detalhe: 'Depósito em conta corrente' },
      ],
    },
    referencias: [
      {
        nome: 'GRAACC (Brasil)',
        url: 'https://graacc.org.br',
        tecnica: 'Chamada "Quero Doar" fixa no topo de toda página, navegação organizada por causa (Voluntariado, Pesquisa, Doação) em vez de por departamento, e histórias reais de pacientes como prova social. Aplicação: CTA de doação sempre visível e navegação pensada pelo que o visitante busca, não pela estrutura interna do Instituto.',
      },
      {
        nome: 'charity: water (EUA)',
        url: 'https://www.charitywater.org',
        tecnica: 'Indicadores de impacto em tempo real (pessoas atendidas, projetos concluídos, países), valores de doação recorrente pré-definidos para reduzir fricção, e transparência total sobre o destino de cada doação. Aplicação: contadores de impacto na home e caminho de doação objetivo, sem passos desnecessários.',
      },
    ],
    faq: [
      {
        pergunta: 'O sistema de voluntários e associados fica pronto desde o início?',
        resposta: 'Sim. Cadastro de voluntários e gestão de associados fazem parte do escopo desta proposta, com painel administrativo próprio.',
      },
      {
        pergunta: 'Como funciona a doação? Tem cobrança automática no site?',
        resposta: 'O escopo cobre a página de doação com Pix e dados bancários exibidos. Cobrança automática via gateway de pagamento (cartão, boleto recorrente) é uma funcionalidade adicional, orçada à parte.',
      },
      {
        pergunta: 'Quem faz a gestão do painel depois de pronto?',
        resposta: 'A própria equipe do Instituto, com treinamento incluso na entrega. A gestão mensal opcional cobre suporte técnico, backups e ajustes.',
      },
    ],
    primeiros_30_dias: [
      'Semana 1-2: briefing completo, arquitetura das 8 páginas e wireframes',
      'Semana 3: desenvolvimento das páginas públicas do site',
      'Semana 4: desenvolvimento do sistema (voluntários, associados, painel administrativo)',
      'Semana 5: SEO, testes, treinamento do painel e publicação',
    ],
    confidencialidade: 'Esta proposta é confidencial e destinada exclusivamente ao Instituto Humanitário Caridade. Validade de 15 dias corridos a partir da data de envio. Preços sujeitos a atualização após o vencimento.',
    encerramento: 'Você chegou até aqui, então já sabe o escopo, o valor e como o sistema funciona. Me chama no WhatsApp com o ok ou com as dúvidas que ficaram e a gente alinha os próximos passos.',
  },
  utm_copy: {
    whatsapp: 'Wagner, segue a proposta do site do Instituto Humanitário Caridade.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
