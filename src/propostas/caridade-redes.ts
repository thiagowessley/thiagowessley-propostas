import type { PropostaData } from '../types/proposta'

export const caridadeRedes: PropostaData = {
  slug: 'caridade-redes',
  cliente: 'Instituto Humanitario Caridade',
  segmento: 'Instituto humanitario, ex-Hospital de Caridade',
  servico: 'Gestao de Redes Sociais',
  responsavel: 'Wagner',
  validade: '2026-07-25',
  envio: '2026-07-10',
  intro_capa: 'Esta proposta apresenta o escopo da gestao de redes sociais do Instituto por 3 meses, o processo de producao de conteudo, prazos, condicoes e investimento.',
  valor: {
    principal: 1800,
    alternativa: 4200,
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
      problema: 'O Instituto ja tem presenca no Instagram (145 publicacoes, 1.638 seguidores) mas a comunicacao roda sem planejamento, sem linha editorial fixa e sem presenca nas outras redes onde doadores e patrocinadores tambem estao.',
      publico: 'Doadores, patrocinadores, apoiadores e voluntarios do Instituto, alem da comunidade de Sao Francisco do Sul.',
      desafio: 'Levar a comunicacao do Instituto para Instagram, Facebook, LinkedIn e YouTube de forma consistente, com foco direto em captacao de doacao, patrocinio e voluntariado, sem depender de posts esporadicos.',
      entregas: [
        'Linha editorial fixa, com foco em captacao de doacao e voluntariado',
        'Presenca profissional nas 4 plataformas onde o publico do Instituto esta',
        'Relacionamento continuo com doadores, patrocinadores e apoiadores',
        'Posicionamento de marca alinhado ao rebranding para Instituto Humanitario Caridade',
        'Cadencia previsivel de publicacao, sem depender de improviso',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'Planejamento e direcao',
        periodo: 'SEMANA 1',
        itens: [
          { titulo: 'Diagnostico das redes atuais', descricao: 'Leitura do Instagram existente (145 posts, 1.638 seguidores) como ponto de partida.' },
          { titulo: 'Linha editorial', descricao: 'Definicao do tom e dos pilares de conteudo focados em doacao, voluntariado e institucional.' },
          { titulo: 'Calendario editorial', descricao: 'Planejamento mensal do que vai ser publicado em cada plataforma.' },
        ],
      },
      {
        numero: '02',
        titulo: 'Producao',
        periodo: 'CONTINUO',
        itens: [
          { titulo: 'Criacao de artes', descricao: 'Materiais visuais adaptados para cada plataforma.' },
          { titulo: 'Redacao de legendas', descricao: 'Textos escritos com foco em captacao de doacao e voluntariado.' },
          { titulo: 'Producao de video', descricao: 'Edicao de video para YouTube a partir de material captado ou fornecido pelo Instituto.' },
        ],
      },
      {
        numero: '03',
        titulo: 'Publicacao e acompanhamento',
        periodo: 'MENSAL',
        itens: [
          { titulo: 'Publicacao nas 4 plataformas', descricao: 'Instagram, Facebook, LinkedIn e YouTube.', limite: 'ate 4 publicacoes/mes' },
          { titulo: 'Relatorio mensal', descricao: 'Leitura de desempenho e ajustes na linha editorial.' },
        ],
      },
    ],
    planos: [
      {
        nome: 'Pacote 3 meses',
        destaque: true,
        resumo: 'O mais escolhido',
        itens: [
          'Planejamento de conteudo mensal',
          'Criacao de artes e materiais visuais',
          'Redacao de legendas',
          'Publicacao em Instagram, Facebook, LinkedIn e YouTube',
          'Relatorio mensal de desempenho',
        ],
        valor: 1800,
        periodo: '/mes',
        rodape: 'Compromisso fechado de 3 meses',
      },
      {
        nome: 'Mes a mes',
        resumo: 'Sem fidelidade',
        itens: [
          'Tudo do Pacote 3 meses',
          'Sem compromisso de permanencia',
          'Cancelamento a qualquer momento',
        ],
        valor: 2200,
        periodo: '/mes',
        rodape: 'Valor maior pela flexibilidade',
      },
      {
        nome: 'Sob demanda',
        resumo: 'Producao extra',
        itens: [
          'Publicacoes adicionais alem das 4/mes',
          'Cobertura de eventos para gerar conteudo',
          'Campanhas especificas de captacao',
          'Orcado por escopo',
        ],
        valor: 0,
        periodo: '',
        rodape: 'Consultar conforme a demanda',
      },
    ],
    prazos: [
      { texto: 'O inicio da producao ocorre em ate 5 dias uteis apos a aprovacao e o envio dos acessos as redes sociais.', bold: 'ate 5 dias uteis' },
      { texto: 'O conteudo e enviado para aprovacao com antecedencia minima de 3 dias uteis antes da publicacao.', bold: 'antecedencia minima de 3 dias uteis' },
      { texto: 'O pacote e fechado para 3 meses. Apos esse periodo, renova mes a mes no mesmo valor, salvo aviso de cancelamento.', bold: 'renova mes a mes no mesmo valor' },
      { texto: 'Solicitacoes enviadas em sabados, domingos e feriados sao respondidas no proximo dia util.', bold: 'no proximo dia util' },
    ],
    contrato: [
      {
        titulo: 'Contrato e Entrega',
        itens: [
          'O pagamento e mensal, cobrado no inicio de cada ciclo.',
          'O pacote de 3 meses e cobrado integralmente, mesmo com cancelamento antecipado.',
          'Apos os 3 meses, a continuidade e opcional e sem multa.',
        ],
      },
      {
        titulo: 'Condicoes Gerais',
        itens: [
          'O Instituto fornece acesso as contas de Instagram, Facebook, LinkedIn e YouTube.',
          'Aprovacao de conteudo e feita pelo Wagner ou por quem o Instituto indicar.',
          'Fotos e videos brutos de eventos, quando existirem, devem ser enviados em boa qualidade.',
          'Captacao de video nova (nao apenas edicao) e orcada a parte, como cobertura de eventos.',
        ],
      },
    ],
    pagamento: {
      blocos: [
        { titulo: 'Mensalidade', descricao: 'Cobrada no inicio de cada mes, via Pix ou transferencia bancaria.' },
        { titulo: 'Pacote fechado (3 meses)', descricao: 'Pode ser pago mes a mes ou antecipado, conforme preferencia do Instituto.' },
        { titulo: 'Parcelamento', descricao: 'Por link de pagamento, quando pago antecipado.' },
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
        'A cobertura de eventos e contratada a parte, com formulario e proposta proprios. Entra quando o Instituto tiver acoes presenciais para registrar, e alimenta diretamente o conteudo das redes.',
        'A entrega padrao inclui ate 10 fotos editadas, um aftermovie de ate 1:30 min, cortes para redes e arquivo no Flickr institucional.',
        'Despesas de deslocamento, hospedagem e alimentacao sao por conta do Instituto, independente da localidade.',
      ],
      imagem: '/img/thiago-horizontal.jpg',
    },
    referencias: [
      {
        nome: 'GRAACC (Brasil)',
        url: 'https://graacc.org.br',
        tecnica: 'Comunicacao organizada por causa (Voluntariado, Pesquisa, Doacao) e integrada a campanhas sazonais como o McDia Feliz, usando historias reais de pacientes como prova social. Aplicacao: linha editorial construida em torno de historias reais e causas, nao so avisos institucionais.',
      },
      {
        nome: 'charity: water (EUA)',
        url: 'https://www.charitywater.org',
        tecnica: 'Comunicacao centrada em transparencia (mostra exatamente onde cada doacao vai) e em multiplos caminhos de engajamento: doacao mensal, apadrinhamento de projeto, campanha em nome de alguem. Aplicacao: variar o CTA por publicacao (doar, ser voluntario, apoiar), nao repetir sempre o mesmo pedido.',
      },
    ],
    faq: [
      {
        pergunta: 'Por que 4 publicacoes por mes e nao mais?',
        resposta: 'E o volume que sustenta qualidade e consistencia sem virar ruido, alinhado ao que foi pedido no briefing. Da para aumentar a cadencia sob orcamento a parte.',
      },
      {
        pergunta: 'Voces produzem os videos para o YouTube do zero?',
        resposta: 'O escopo cobre roteiro e edicao de videos ja captados ou fornecidos pelo Instituto. Captacao de video nova entra como cobertura de eventos, orcada a parte.',
      },
      {
        pergunta: 'Depois dos 3 meses, como funciona?',
        resposta: 'O pacote renova mes a mes no mesmo valor, ou encerra sem multa, conforme decisao do Instituto.',
      },
    ],
    primeiros_30_dias: [
      'Semana 1: diagnostico das redes atuais e definicao da linha editorial',
      'Semana 2: calendario editorial do primeiro mes e producao das primeiras artes',
      'Semana 3: publicacao das primeiras pecas nas 4 plataformas',
      'Semana 4: leitura de desempenho e ajustes para o segundo mes',
    ],
    confidencialidade: 'Esta proposta e confidencial e destinada exclusivamente ao Instituto Humanitario Caridade. Validade de 15 dias corridos a partir da data de envio. Precos sujeitos a atualizacao apos o vencimento.',
    encerramento: 'Voce chegou ate aqui, entao ja sabe o escopo, o valor e como o pacote funciona. Me chama no WhatsApp com o ok ou com as duvidas que ficaram e a gente alinha os proximos passos.',
  },
  utm_copy: {
    whatsapp: 'Wagner, segue a proposta de redes sociais do Instituto Humanitario Caridade.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
