import type { PropostaData } from '../types/proposta'

export const instituto: PropostaData = {
  slug: 'instituto-site',
  cliente: 'Instituto de Tecnologia, Inovacao e Desenvolvimento',
  segmento: 'Instituto sem fins lucrativos',
  servico: 'Site Institucional',
  responsavel: 'Miguel',
  validade: '2026-07-24',
  envio: '2026-07-09',
  intro_capa: 'Esta proposta apresenta o escopo do site institucional, o processo de producao, prazos, condicoes e investimento. Foi montada para deixar claro o que entra em cada fase e o que cada parte assume, sem espaco para ruido depois.',
  valor: {
    principal: 1997,
    manutencao: 497,
    alternativa: 5800,
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
      problema: 'O Instituto ainda nao tem presenca digital. Sem site, sem branding consolidado, fica invisivel para parceiros, financiadores e para o publico que quer apoiar tecnologia e inovacao.',
      publico: 'Pesquisadores, empresas parceiras, orgaos de fomento e comunidade tecnica de Joinville e regiao.',
      desafio: 'Lancar o site antes do branding final estar pronto, usando linguagem institucional forte e design que comunique seriedade sem depender de identidade visual propria.',
    },
    fases: [
      {
        numero: '01',
        titulo: 'Estrutura e conteudo',
        periodo: 'SEMANA 1-2',
        itens: [
          { titulo: 'Arquitetura do site', descricao: 'Sitemap de 7 paginas conforme benchmark entregue pelo cliente.' },
          { titulo: 'Briefing de conteudo', descricao: 'Levantamento de textos, dados e imagens de cada pagina.' },
          { titulo: 'Wireframes', descricao: 'Esqueleto das paginas antes do visual, para alinhar estrutura.' },
        ],
      },
      {
        numero: '02',
        titulo: 'Design e desenvolvimento',
        periodo: 'SEMANA 2-3',
        itens: [
          { titulo: 'Design dark premium', descricao: 'Identidade visual propria do site, coerente com o segmento de tecnologia.' },
          { titulo: 'Indicadores animados', descricao: 'Contadores de impacto que animam no scroll.', limite: 'ate 6 KPIs' },
          { titulo: 'Paginas principais', descricao: 'Home, Sobre e Missao construidas e responsivas.' },
        ],
      },
      {
        numero: '03',
        titulo: 'Refino e publicacao',
        periodo: 'SEMANA 4',
        itens: [
          { titulo: 'SEO on-page', descricao: 'Meta tags, Open Graph e estrutura semantica em todas as paginas.' },
          { titulo: 'Revisao e ajustes', descricao: 'Rodada de ajustes finos de conteudo e layout.' },
          { titulo: 'Deploy estatico', descricao: 'Publicacao na hospedagem do cliente, sem custo mensal de servidor.' },
        ],
      },
    ],
    planos: [
      {
        nome: 'Essencial',
        resumo: 'Site institucional 7 paginas',
        itens: [
          'Design dark premium proprio',
          'Indicadores animados (ate 6 KPIs)',
          'SEO on-page em todas as paginas',
          'Deploy na hospedagem do cliente',
          'Entrega unica, sem mensalidade',
        ],
        valor: 1997,
        periodo: 'entrega unica',
        rodape: '50% na aprovacao, 50% na entrega',
      },
      {
        nome: 'Site + Gestao',
        destaque: true,
        resumo: 'O mais escolhido',
        itens: [
          'Tudo do plano Essencial',
          'Manutencao tecnica mensal',
          'Atualizacao de conteudo sob demanda',
          'Monitoramento e pequenos ajustes',
          'Prioridade no atendimento',
        ],
        valor: 497,
        periodo: '/mes',
        rodape: 'Apos a entrega do site (opcional)',
      },
      {
        nome: 'Sob demanda',
        resumo: 'Pecas extras avulsas',
        itens: [
          'Landing pages adicionais',
          'Paginas novas alem das 7',
          'Cobertura de eventos',
          'Producao de video',
          'Orcado por escopo',
        ],
        valor: 0,
        periodo: '',
        rodape: 'Consultar conforme a peca',
      },
    ],
    prazos: [
      { texto: 'O prazo para producao do site e de 7 a 14 dias uteis, e para alteracoes e de 2 dias uteis.', bold: '7 a 14 dias uteis' },
      { texto: 'O servico so comeca a ser produzido a partir do envio do briefing, da assinatura do contrato e do pagamento.', bold: 'briefing, da assinatura do contrato e do pagamento' },
      { texto: 'Apos a entrega para aprovacao, o cliente tem direito a ate 02 alteracoes inclusas. Alem disso, cada alteracao extra e orcada a parte.', bold: 'ate 02 alteracoes inclusas' },
      { texto: 'A entrega para aprovacao e feita por link e, apos o ok, o site vai ao ar na hospedagem do cliente.', bold: 'vai ao ar na hospedagem do cliente' },
      { texto: 'Solicitacoes enviadas em sabados, domingos e feriados sao respondidas no proximo dia util.', bold: 'no proximo dia util' },
    ],
    contrato: [
      {
        titulo: 'Contrato e Entrega',
        itens: [
          'O pagamento segue o modelo 50% na aprovacao e 50% na entrega, com datas fixas definidas em contrato.',
          'O material final so e publicado apos a confirmacao do valor total.',
          'Caso o cliente queira a manutencao mensal, informa por e-mail ou WhatsApp para inicio do ciclo.',
        ],
      },
      {
        titulo: 'Condicoes Gerais',
        itens: [
          'O cliente tem liberdade de enviar textos, fotos e dados, desde que em boa qualidade.',
          'O envio do conteudo deve ocorrer durante a fase de producao, para entrar no site junto das demais paginas.',
          'Logotipos e arquivos da marca devem ser enviados em PDF, SVG, PSD ou AI.',
          'Acessos a hospedagem e dominio sao necessarios para o deploy final.',
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
      titulo: 'Cobertura de eventos',
      paragrafos: [
        'A cobertura de eventos e contratada a parte, com formulario e proposta proprios. Entra quando o Instituto tiver acoes presenciais para registrar.',
        'A entrega padrao inclui ate 10 fotos editadas, um aftermovie de ate 1:30 min, cortes para redes e arquivo no Flickr institucional.',
        'Despesas de deslocamento, hospedagem e alimentacao sao por conta do cliente, independente da localidade.',
      ],
      imagem: '/img/thiago-horizontal.jpg',
    },
    referencias: [
      {
        nome: 'ITA, Instituto Tecnologico de Aeronautica',
        url: 'https://www.ita.br',
        tecnica: 'Hierarquia tipografica institucional: numeros grandes, titulos em caixa alta, muito espaco em branco.',
      },
      {
        nome: 'FAPESP',
        url: 'https://fapesp.br',
        tecnica: 'Grid de indicadores de impacto com numeros em destaque, credibilidade via dados.',
      },
    ],
    faq: [
      {
        pergunta: 'O site precisa do branding finalizado para comecar?',
        resposta: 'Nao. Trabalhamos com a identidade que o Instituto tiver disponivel. Se ainda nao houver, usamos um sistema visual proprio desenvolvido especificamente para o site, que o branding futuro vai complementar.',
      },
      {
        pergunta: 'Como funciona a manutencao mensal?',
        resposta: 'Cobertura de atualizacoes de conteudo, ajustes tecnicos e monitoramento. O cliente nao precisa saber programar. Qualquer mudanca e solicitada por mensagem.',
      },
      {
        pergunta: 'E se precisarmos de mais paginas no futuro?',
        resposta: 'O escopo atual e de 7 paginas. Paginas adicionais sao orcadas separadamente. O sistema foi construido para facilitar expansao.',
      },
    ],
    primeiros_30_dias: [
      'Semana 1: briefing de conteudo + wireframes das 7 paginas',
      'Semana 2: desenvolvimento das paginas principais (Home, Sobre, Missao)',
      'Semana 3: paginas secundarias + integracao de indicadores animados',
      'Semana 4: revisao, ajustes finos e deploy na hospedagem do cliente',
    ],
    confidencialidade: 'Esta proposta e confidencial e destinada exclusivamente ao Instituto de Tecnologia, Inovacao e Desenvolvimento. Validade de 15 dias corridos a partir da data de envio. Precos sujeitos a atualizacao apos o vencimento.',
    encerramento: 'Voce chegou ate aqui, entao ja sabe o que entra, quanto custa e como funciona. Me chama no WhatsApp com o ok ou com as duvidas que ficaram e a gente alinha os proximos passos.',
  },
  utm_copy: {
    whatsapp: 'Miguel, segue a proposta que conversamos.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
