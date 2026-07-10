import type { PropostaData } from '../types/proposta'

export const caridadeSite: PropostaData = {
  slug: 'caridade-site',
  cliente: 'Instituto Humanitario Caridade',
  segmento: 'Instituto humanitario, ex-Hospital de Caridade',
  servico: 'Site Institucional e Sistema de Gestao',
  responsavel: 'Wagner',
  validade: '2026-07-25',
  envio: '2026-07-10',
  intro_capa: 'Esta proposta apresenta o escopo do site institucional com sistema proprio de gestao (voluntarios, associados e conteudo), o processo de producao, prazos, condicoes e investimento.',
  valor: {
    principal: 7900,
    manutencao: 697,
    alternativa: 16500,
    moeda: 'BRL',
  },

  foto_profissional: '/img/thiago-vertical.jpg',
  foto_secundaria: '/img/thiago-horizontal.jpg',

  sobre: {
    saudacao: 'Ola!',
    paragrafos: [
      'Sou o Thiago Wessley, de Joinville. Trabalho na fronteira entre comunicacao, design e audiovisual, ajudando marcas a aparecerem do jeito certo: site que converte, conteudo que sustenta presenca e video que carrega a mensagem.',
      'Nos ultimos anos entreguei sites institucionais, identidade visual, cobertura de eventos e gestao de conteudo para empresas e projetos que precisavam parecer serios antes mesmo de crescer.',
      'O que me move e tirar a marca da invisibilidade: estrutura clara, estetica premium e conteudo que alimenta tanto o Google quanto as IAs que as pessoas ja usam para buscar.',
    ],
    atuacao: [
      { nome: 'Comunicacao', nivel: 95 },
      { nome: 'Design', nivel: 90 },
      { nome: 'Audiovisual', nivel: 88 },
      { nome: 'Desenvolvimento Web', nivel: 82 },
      { nome: 'SEO e GEO', nivel: 80 },
      { nome: 'Trafego Pago', nivel: 72 },
    ],
  },

  portfolio: {
    intro: [
      'Nos ultimos anos participei de projetos em diferentes areas do design, da web e do audiovisual.',
      'Cada um deles somou um repertorio: cobertura de evento, identidade, site institucional, conteudo para redes e producao de video.',
      'No link abaixo voce confere algumas pecas desenvolvidas e parte do arquivo de eventos que cobri.',
    ],
    link: { label: 'Ver portfolio completo', url: 'https://instagram.com/thiagowessley' },
    itens: [
      { titulo: 'Aftermovie', categoria: 'Evento', imagem: '/img/portfolio/p1.jpg' },
      { titulo: 'Identidade', categoria: 'Branding', imagem: '/img/portfolio/p2.jpg' },
      { titulo: 'Site Institucional', categoria: 'Web', imagem: '/img/portfolio/p3.jpg' },
      { titulo: 'Cobertura', categoria: 'Evento', imagem: '/img/portfolio/p4.jpg' },
      { titulo: 'Social Media', categoria: 'Conteudo', imagem: '/img/portfolio/p5.jpg' },
      { titulo: 'Landing Page', categoria: 'Web', imagem: '/img/portfolio/p6.jpg' },
      { titulo: 'Video Branding', categoria: 'Audiovisual', imagem: '/img/portfolio/p7.jpg' },
      { titulo: 'Naming', categoria: 'Branding', imagem: '/img/portfolio/p8.jpg' },
      { titulo: 'Campanha', categoria: 'Trafego', imagem: '/img/portfolio/p9.jpg' },
    ],
  },

  secoes: {
    cenario: {
      problema: 'O Instituto carrega mais de 160 anos de historia (fundado em 1859, o maior bercario de Sao Francisco do Sul) mas nao tem uma plataforma digital a altura: hoje a captacao de doacao, o cadastro de voluntarios e a gestao dos associados dependem de processos manuais e do Instagram.',
      publico: 'Doadores, patrocinadores, voluntarios, as 3 associacoes vinculadas e a comunidade de Sao Francisco do Sul.',
      desafio: 'Unir vitrine institucional, captacao de doacao e gestao de voluntarios e associados numa unica plataforma que o proprio Instituto consiga manter sozinho, sem depender de programador.',
      entregas: [
        'Sustentar a captacao de doacao de forma continua, nao so em campanhas pontuais',
        'Profissionalizar o cadastro e a gestao de voluntarios',
        'Dar visibilidade aos projetos e as 3 associacoes vinculadas',
        'Transmitir a credibilidade de uma instituicao com mais de 160 anos de historia',
        'Autonomia total de conteudo para a equipe do Instituto, sem depender de programador',
        'Base tecnica pronta para crescer junto com o Instituto',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'O site, pagina a pagina',
        periodo: 'SEMANA 1-2',
        itens: [
          { titulo: 'Home', descricao: 'Hero com chamada para doacao, indicadores de impacto e resumo institucional.' },
          { titulo: 'Sobre o Instituto', descricao: 'Historia desde 1859, missao e o que o posiciona como referencia em Sao Francisco do Sul.' },
          { titulo: 'Servicos', descricao: 'Portfolio dos servicos prestados pelo Instituto.' },
          { titulo: 'Projetos', descricao: 'Vitrine de projetos desenvolvidos, pronta para crescer com novos cases.' },
          { titulo: 'Associados', descricao: 'Apresentacao das 3 associacoes vinculadas ao Instituto.' },
          { titulo: 'Seja Voluntario', descricao: 'Formulario publico de cadastro, conectado ao painel administrativo.' },
          { titulo: 'Doe Agora', descricao: 'Formas de doacao disponiveis, com chamada clara em toda a navegacao.' },
          { titulo: 'Contato', descricao: 'Canais oficiais e localizacao.' },
        ],
      },
      {
        numero: '02',
        titulo: 'Sistema e desenvolvimento',
        periodo: 'SEMANA 3-4',
        itens: [
          { titulo: 'Painel administrativo', descricao: 'Login seguro para a equipe do Instituto gerenciar conteudo, projetos e imagens sem programador.' },
          { titulo: 'Cadastro de voluntarios', descricao: 'Banco de dados proprio: formulario publico + lista e aprovacao no painel.' },
          { titulo: 'Cadastro de associados', descricao: 'Gestao das 3 associacoes vinculadas direto pelo painel.' },
          { titulo: 'Design dark premium', descricao: 'Identidade visual propria do site, sobria e institucional.' },
        ],
      },
      {
        numero: '03',
        titulo: 'Refino e publicacao',
        periodo: 'SEMANA 5',
        itens: [
          { titulo: 'SEO basico e avancado', descricao: 'Meta tags, headings, URLs amigaveis, sitemap XML e schema markup.' },
          { titulo: 'Testes e revisao', descricao: 'Rodada de ajustes finos de conteudo, layout e fluxo do painel.' },
          { titulo: 'Treinamento do painel', descricao: 'Sessao pratica para a equipe do Instituto usar o sistema com autonomia.' },
          { titulo: 'Deploy', descricao: 'Publicacao na hospedagem definida para o projeto.' },
        ],
      },
    ],
    planos: [
      {
        nome: 'Site + Sistema',
        resumo: 'Site institucional com painel proprio',
        itens: [
          '8 paginas institucionais',
          'Painel administrativo com login',
          'Cadastro de voluntarios e associados',
          'Design dark premium proprio',
          'SEO completo e treinamento incluso',
        ],
        valor: 7900,
        periodo: 'entrega unica',
        rodape: '50% na aprovacao, 50% na entrega',
      },
      {
        nome: 'Gestao Mensal',
        destaque: true,
        resumo: 'O mais escolhido',
        itens: [
          'Suporte tecnico do sistema e do painel',
          'Atualizacao de conteudo sob demanda',
          'Backups e atualizacoes de seguranca',
          'Pequenos ajustes de layout',
          'Prioridade no atendimento',
        ],
        valor: 697,
        periodo: '/mes',
        rodape: 'Apos a entrega do site (opcional)',
      },
      {
        nome: 'Sob demanda',
        resumo: 'Funcionalidades extras',
        itens: [
          'Gateway de pagamento com cobranca automatica',
          'Paginas novas alem das 8',
          'Aplicativo ou area logada para associados',
          'Integracoes adicionais',
          'Orcado por escopo',
        ],
        valor: 0,
        periodo: '',
        rodape: 'Consultar conforme a necessidade',
      },
    ],
    prazos: [
      { texto: 'O prazo de producao e de 25 a 35 dias uteis, dado o escopo de sistema completo (nao apenas site institucional).', bold: '25 a 35 dias uteis' },
      { texto: 'O servico so comeca a ser produzido a partir do envio do briefing completo, da assinatura do contrato e do pagamento.', bold: 'briefing completo, da assinatura do contrato e do pagamento' },
      { texto: 'A entrega inclui ate 02 rodadas de revisao e uma sessao de treinamento do painel administrativo.', bold: 'ate 02 rodadas de revisao e uma sessao de treinamento' },
      { texto: 'A entrega para aprovacao e feita por link e, apos o ok, o site vai ao ar.', bold: 'vai ao ar' },
      { texto: 'Solicitacoes enviadas em sabados, domingos e feriados sao respondidas no proximo dia util.', bold: 'no proximo dia util' },
    ],
    contrato: [
      {
        titulo: 'Contrato e Entrega',
        itens: [
          'O pagamento segue o modelo 50% na aprovacao e 50% na entrega, com datas fixas definidas em contrato.',
          'O material final so e publicado apos a confirmacao do valor total.',
          'Caso o Instituto queira a gestao mensal, informa por e-mail ou WhatsApp para inicio do ciclo.',
        ],
      },
      {
        titulo: 'Condicoes Gerais',
        itens: [
          'O Instituto tem liberdade de enviar textos, fotos e dados, desde que em boa qualidade.',
          'O envio do conteudo deve ocorrer durante a fase de producao, para entrar no site junto das demais paginas.',
          'Logotipos e arquivos da marca devem ser enviados em PDF, SVG, PSD ou AI.',
          'Cobranca online (cartao, boleto recorrente) nao esta inclusa: escopo cobre doacao via Pix e dados bancarios exibidos no site.',
        ],
      },
    ],
    pagamento: {
      blocos: [
        { titulo: 'Valor total a vista', descricao: 'Atraves de Pix, boleto ou transferencia bancaria.' },
        { titulo: 'Sinal de pagamento (50% / 50%)', descricao: 'Primeira parte na aprovacao da proposta, segunda na entrega do site.' },
        { titulo: 'Parcelamento', descricao: 'Por link de pagamento. Numero de parcelas conforme o escopo contratado.' },
      ],
      meios: [
        { nome: 'Pix', detalhe: 'Transferencia instantanea' },
        { nome: 'Boleto', detalhe: 'Compensacao em ate 2 dias uteis' },
        { nome: 'Transferencia', detalhe: 'Deposito em conta corrente' },
        { nome: 'Cartao', detalhe: 'Parcelado via link de pagamento' },
      ],
    },
    servico_adicional: {
      titulo: 'Doacao online com cobranca automatica',
      paragrafos: [
        'A versao inicial do site direciona o doador para Pix e dados bancarios exibidos na pagina "Doe Agora". E o caminho mais rapido para colocar a captacao no ar.',
        'Se o Instituto quiser cobranca automatica (cartao recorrente, boleto gerado pelo proprio site), integramos um gateway de pagamento a parte.',
        'As taxas de processamento sao cobradas pelo proprio gateway (Mercado Pago, Stripe ou similar) e ficam fora do valor desta proposta.',
      ],
      imagem: '/img/thiago-horizontal.jpg',
    },
    referencias: [
      {
        nome: 'GRAACC (Brasil)',
        url: 'https://graacc.org.br',
        tecnica: 'Chamada "Quero Doar" fixa no topo de toda pagina, navegacao organizada por causa (Voluntariado, Pesquisa, Doacao) em vez de por departamento, e historias reais de pacientes como prova social. Aplicacao: CTA de doacao sempre visivel e navegacao pensada pelo que o visitante busca, nao pela estrutura interna do Instituto.',
      },
      {
        nome: 'charity: water (EUA)',
        url: 'https://www.charitywater.org',
        tecnica: 'Indicadores de impacto em tempo real (pessoas atendidas, projetos concluidos, paises), valores de doacao recorrente pre-definidos para reduzir friccao, e transparencia total sobre o destino de cada doacao. Aplicacao: contadores de impacto na home e caminho de doacao objetivo, sem passos desnecessarios.',
      },
    ],
    faq: [
      {
        pergunta: 'O sistema de voluntarios e associados fica pronto desde o inicio?',
        resposta: 'Sim. Cadastro de voluntarios e gestao de associados fazem parte do escopo desta proposta, com painel administrativo proprio.',
      },
      {
        pergunta: 'Como funciona a doacao? Tem cobranca automatica no site?',
        resposta: 'O escopo cobre a pagina de doacao com Pix e dados bancarios exibidos. Cobranca automatica via gateway de pagamento (cartao, boleto recorrente) e uma funcionalidade adicional, orcada a parte.',
      },
      {
        pergunta: 'Quem faz a gestao do painel depois de pronto?',
        resposta: 'A propria equipe do Instituto, com treinamento incluso na entrega. A gestao mensal opcional cobre suporte tecnico, backups e ajustes.',
      },
    ],
    primeiros_30_dias: [
      'Semana 1-2: briefing completo, arquitetura das 8 paginas e wireframes',
      'Semana 3: desenvolvimento das paginas publicas do site',
      'Semana 4: desenvolvimento do sistema (voluntarios, associados, painel administrativo)',
      'Semana 5: SEO, testes, treinamento do painel e publicacao',
    ],
    confidencialidade: 'Esta proposta e confidencial e destinada exclusivamente ao Instituto Humanitario Caridade. Validade de 15 dias corridos a partir da data de envio. Precos sujeitos a atualizacao apos o vencimento.',
    encerramento: 'Voce chegou ate aqui, entao ja sabe o escopo, o valor e como o sistema funciona. Me chama no WhatsApp com o ok ou com as duvidas que ficaram e a gente alinha os proximos passos.',
  },
  utm_copy: {
    whatsapp: 'Wagner, segue a proposta do site do Instituto Humanitario Caridade.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
