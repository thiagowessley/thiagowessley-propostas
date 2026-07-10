import type { PropostaData } from '../types/proposta'

export const instituto: PropostaData = {
  slug: 'instituto-site',
  cliente: 'Instituto de Tecnologia, Inovação e Desenvolvimento',
  segmento: 'Instituto sem fins lucrativos',
  servico: 'Site Institucional',
  responsavel: 'Miguel',
  validade: '2026-07-24',
  envio: '2026-07-09',
  intro_capa: 'Esta proposta apresenta o escopo do site institucional, o processo de produção, prazos, condições e investimento. Foi montada para deixar claro o que entra em cada fase e o que cada parte assume, sem espaço para ruído depois.',
  valor: {
    principal: 1997,
    manutencao: 497,
    alternativa: 5800,
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
      problema: 'O Instituto ainda não tem presença digital. Sem site, sem branding consolidado, fica invisível para parceiros, financiadores e para o público que quer apoiar tecnologia e inovação.',
      publico: 'Pesquisadores, empresas parceiras, órgãos de fomento e comunidade técnica de Joinville e região.',
      desafio: 'Lançar o site antes do branding final estar pronto, usando linguagem institucional forte e design que comunique seriedade sem depender de identidade visual própria.',
      entregas: [
        'Autoridade institucional e reputação tecnológica',
        'Posicionamento como referência em inovação e desenvolvimento',
        'Atração de parceiros estratégicos, investidores e empresas',
        'Relacionamento ampliado com o ecossistema de inovação',
        'Captação de oportunidades e projetos facilitada',
        'Percepção de credibilidade, impacto e futuro',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'O site, página a página',
        periodo: 'SEMANA 1-2',
        itens: [
          { titulo: 'Home', descricao: 'Hero de impacto com suporte a vídeo institucional, dashboard de indicadores, resumo de atuação e chamadas para as áreas centrais.' },
          { titulo: 'Sobre o Instituto', descricao: 'História, propósito, missão e o que posiciona o instituto como referência.' },
          { titulo: 'Áreas de Atuação', descricao: 'Frentes de trabalho e competências técnicas, organizadas para leitura rápida.' },
          { titulo: 'Projetos e Cases', descricao: 'Vitrine de resultados e provas de impacto, pronta para crescer com novos cases.' },
          { titulo: 'Ecossistema e Parcerias', descricao: 'Rede de parceiros, associados e conexões estratégicas do instituto.' },
          { titulo: 'Conteúdo e Insights', descricao: 'Espaço editorial para artigos e publicações, reforçando autoridade técnica.' },
          { titulo: 'Contato Institucional', descricao: 'Formulário, canais oficiais e localização, com foco em captação de oportunidades. Duas rodadas de revisão de layout inclusas.' },
        ],
      },
      {
        numero: '02',
        titulo: 'Design e desenvolvimento',
        periodo: 'SEMANA 2-3',
        itens: [
          { titulo: 'Design dark premium', descricao: 'Identidade visual própria do site, coerente com o segmento de tecnologia, sobre o branding do instituto.' },
          { titulo: 'Indicadores animados', descricao: 'Dashboard de impacto com contadores que animam no scroll.', limite: 'até 6 KPIs' },
          { titulo: 'Animações leves', descricao: 'Transições fluidas entre seções, sem pesar o carregamento.' },
          { titulo: 'Responsividade total', descricao: 'Layout adaptado para desktop, tablet e celular.' },
        ],
      },
      {
        numero: '03',
        titulo: 'Refino e publicação',
        periodo: 'SEMANA 4',
        itens: [
          { titulo: 'SEO básico', descricao: 'Meta tags, headings e URLs amigáveis em todas as páginas.' },
          { titulo: 'SEO avançado', descricao: 'Sitemap XML, schema markup e configuração do Google Search Console.' },
          { titulo: 'Redação institucional', descricao: 'Textos das sete páginas escritos a partir do material fornecido pelo instituto.' },
          { titulo: 'Revisão e ajustes', descricao: 'Rodada de ajustes finos de conteúdo e layout.' },
          { titulo: 'Deploy estático', descricao: 'Publicação na hospedagem do instituto, sem custo mensal de servidor.' },
        ],
      },
    ],
    planos: [
      {
        nome: 'Essencial',
        resumo: 'Site institucional 7 páginas',
        itens: [
          'Design dark premium próprio',
          'Indicadores animados (até 6 KPIs)',
          'SEO on-page em todas as páginas',
          'Deploy na hospedagem do cliente',
          'Entrega única, sem mensalidade',
        ],
        valor: 1997,
        periodo: 'entrega única',
        rodape: '50% na aprovação, 50% na entrega',
      },
      {
        nome: 'Site + Gestão',
        destaque: true,
        resumo: 'O mais escolhido',
        itens: [
          'Tudo do plano Essencial',
          'Manutenção técnica mensal',
          'Atualização de conteúdo sob demanda',
          'Monitoramento e pequenos ajustes',
          'Prioridade no atendimento',
        ],
        valor: 497,
        periodo: '/mês',
        rodape: 'Após a entrega do site (opcional)',
      },
      {
        nome: 'Sob demanda',
        resumo: 'Peças extras avulsas',
        itens: [
          'Landing pages adicionais',
          'Páginas novas além das 7',
          'Cobertura de eventos',
          'Produção de vídeo',
          'Orçado por escopo',
        ],
        valor: 0,
        periodo: '',
        rodape: 'Consultar conforme a peça',
      },
    ],
    prazos: [
      { texto: 'O prazo para produção do site é de 7 a 14 dias úteis, e para alterações é de 2 dias úteis.', bold: '7 a 14 dias úteis' },
      { texto: 'O serviço só começa a ser produzido a partir do envio do briefing, da assinatura do contrato e do pagamento.', bold: 'briefing, da assinatura do contrato e do pagamento' },
      { texto: 'Após a entrega para aprovação, o cliente tem direito a até 02 alterações inclusas. Além disso, cada alteração extra é orçada à parte.', bold: 'até 02 alterações inclusas' },
      { texto: 'A entrega para aprovação é feita por link e, após o ok, o site vai ao ar na hospedagem do cliente.', bold: 'vai ao ar na hospedagem do cliente' },
      { texto: 'Solicitações enviadas em sábados, domingos e feriados são respondidas no próximo dia útil.', bold: 'no próximo dia útil' },
    ],
    contrato: [
      {
        titulo: 'Contrato e Entrega',
        itens: [
          'O pagamento segue o modelo 50% na aprovação e 50% na entrega, com datas fixas definidas em contrato.',
          'O material final só é publicado após a confirmação do valor total.',
          'Caso o cliente queira a manutenção mensal, informa por e-mail ou WhatsApp para início do ciclo.',
        ],
      },
      {
        titulo: 'Condições Gerais',
        itens: [
          'O cliente tem liberdade de enviar textos, fotos e dados, desde que em boa qualidade.',
          'O envio do conteúdo deve ocorrer durante a fase de produção, para entrar no site junto das demais páginas.',
          'Logotipos e arquivos da marca devem ser enviados em PDF, SVG, PSD ou AI.',
          'Acessos à hospedagem e domínio são necessários para o deploy final.',
        ],
      },
    ],
    pagamento: {
      blocos: [
        { titulo: 'Valor total à vista', descricao: 'Através de Pix, boleto ou transferência bancária.' },
        { titulo: 'Sinal de pagamento (50% / 50%)', descricao: 'Primeira parte na aprovação da proposta, segunda na entrega do site.' },
        { titulo: 'Parcelamento', descricao: 'Por link de pagamento. Número de parcelas conforme o escopo contratado.' },
      ],
      meios: [
        { nome: 'Pix', detalhe: 'Transferência instantânea' },
        { nome: 'Boleto', detalhe: 'Compensação em até 2 dias úteis' },
        { nome: 'Transferência', detalhe: 'Depósito em conta corrente' },
        { nome: 'Cartão', detalhe: 'Parcelado via link de pagamento' },
      ],
    },
    servico_adicional: {
      titulo: 'Cobertura de eventos',
      paragrafos: [
        'A cobertura de eventos é contratada à parte, com formulário e proposta próprios. Entra quando o Instituto tiver ações presenciais para registrar.',
        'A entrega padrão inclui até 10 fotos editadas, um aftermovie de até 1:30 min, cortes para redes e arquivo no Flickr institucional.',
      ],
      imagem: '/img/thiago-horizontal.jpg',
    },
    referencias: [
      {
        nome: 'Fundação CERTI (Brasil)',
        url: 'https://certi.org.br',
        tecnica: 'Abre com "12 mil clientes no mundo" antes de qualquer serviço. Dez competências em grid modular, de Indústria 4.0 a Bioeconomia, com cases práticos como prova de cada uma. Aplicação: impacto numérico na home antes das áreas de atuação.',
      },
      {
        nome: 'INDT (Brasil)',
        url: 'https://indt.org.br',
        tecnica: 'R$ 1,5 bilhão investidos em P&D, +200 clientes, +400 projetos. Seis soluções aplicadas organizam o conteúdo, de Manufatura Avançada a Cibersegurança. Aplicação: navegação por solução com indicadores de investimento como ancoragem.',
      },
      {
        nome: 'LSI-TEC (Brasil)',
        url: 'https://lsitec.org.br',
        tecnica: '82 clientes, 436 projetos concluídos, 288 colaboradores. Funil que vai do propósito às soluções aplicadas sem rodeio. Aplicação: indicadores quantificados como prova institucional na home.',
      },
      {
        nome: 'Technology Innovation Institute (Emirados Árabes)',
        url: 'https://www.tii.ae',
        tecnica: '9 centros de pesquisa, 100+ colaborações internacionais e 70 patentes em desenvolvimento. Aplicação: credibilidade técnica ancorada em produção científica e parcerias.',
      },
      {
        nome: 'Forge Institute (EUA)',
        url: 'https://forgeforward.org',
        tecnica: 'Conecta tecnologia a impacto econômico mensurável, com estudo de retorno publicado. Aplicação: conexão entre projetos do instituto e impacto econômico regional.',
      },
      {
        nome: 'IPT, Instituto de Pesquisas Tecnológicas (Brasil)',
        url: 'https://www.ipt.br',
        tecnica: '"Ciência viva. Impacto real." Mais de 8 milhões de pessoas alcançadas em 2024, competências organizadas por 19 categorias de solução. Sugestão: organizar Áreas de Atuação pela solução entregue, não pelo departamento.',
      },
    ],
    faq: [
      {
        pergunta: 'O site precisa do branding finalizado para começar?',
        resposta: 'Não. Trabalhamos com a identidade que o Instituto tiver disponível. Se ainda não houver, usamos um sistema visual próprio desenvolvido especificamente para o site, que o branding futuro vai complementar.',
      },
      {
        pergunta: 'Como funciona a manutenção mensal?',
        resposta: 'Cobertura de atualizações de conteúdo, ajustes técnicos e monitoramento. O cliente não precisa saber programar. Qualquer mudança é solicitada por mensagem.',
      },
      {
        pergunta: 'E se precisarmos de mais páginas no futuro?',
        resposta: 'O escopo atual é de 7 páginas. Páginas adicionais são orçadas separadamente. O sistema foi construído para facilitar expansão.',
      },
    ],
    primeiros_30_dias: [
      'Semana 1: briefing de conteúdo + wireframes das 7 páginas',
      'Semana 2: desenvolvimento das páginas principais (Home, Sobre, Missão)',
      'Semana 3: páginas secundárias + integração de indicadores animados',
      'Semana 4: revisão, ajustes finos e deploy na hospedagem do cliente',
    ],
    confidencialidade: 'Esta proposta é confidencial e destinada exclusivamente ao Instituto de Tecnologia, Inovação e Desenvolvimento. Validade de 15 dias corridos a partir da data de envio. Preços sujeitos a atualização após o vencimento.',
    encerramento: 'Você chegou até aqui, então já sabe o que entra, quanto custa e como funciona. Me chama no WhatsApp com o ok ou com as dúvidas que ficaram e a gente alinha os próximos passos.',
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
