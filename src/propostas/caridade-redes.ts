import type { PropostaData } from '../types/proposta'
import { SOBRE_PADRAO, encerramentoPadrao, ENTREGA_COBERTURA_PADRAO } from '../lib/copy-padrao'

export const caridadeRedes: PropostaData = {
  slug: 'instituto-humanitario-redes',
  cliente: 'Instituto Humanitário Caridade',
  segmento: 'Instituto humanitário, ex-Hospital de Caridade',
  servico: 'Gestão de Redes Sociais',
  validade: '2026-07-25',
  envio: '2026-07-10',
  intro_capa: 'Esta proposta apresenta o escopo da gestão de redes sociais do Instituto por 3 meses, o processo de produção de conteúdo, prazos, condições e investimento.',
  valor: {
    principal: 1500,
    alternativa: 4200,
    moeda: 'BRL',
  },

  foto_profissional: '/img/thiago-vertical.jpg',
  foto_secundaria: '/img/thiago-horizontal.jpg',

  sobre: SOBRE_PADRAO,

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
      problema: 'O Instituto já tem presença no Instagram (145 publicações, 1.638 seguidores) mas a comunicação roda sem planejamento, sem linha editorial fixa e sem presença nas outras redes onde doadores e patrocinadores também estão.',
      publico: 'Doadores, patrocinadores, apoiadores e voluntários do Instituto, além da comunidade de São Francisco do Sul.',
      desafio: 'Levar a comunicação do Instituto para Instagram, Facebook, LinkedIn e YouTube de forma consistente, com foco direto em captação de doação, patrocínio e voluntariado, sem depender de posts esporádicos.',
      entregas: [
        'Linha editorial fixa, com foco em captação de doação e voluntariado',
        'Presença profissional nas 4 plataformas onde o público do Instituto está',
        'Relacionamento contínuo com doadores, patrocinadores e apoiadores',
        'Posicionamento de marca alinhado ao rebranding para Instituto Humanitário Caridade',
        'Cadência previsível de publicação, sem depender de improviso',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'Planejamento e direção',
        periodo: 'SEMANA 1',
        itens: [
          { titulo: 'Diagnóstico das redes atuais', descricao: 'Leitura do Instagram existente (145 posts, 1.638 seguidores) como ponto de partida.' },
          { titulo: 'Linha editorial', descricao: 'Definição do tom e dos pilares de conteúdo focados em doação, voluntariado e institucional.' },
          { titulo: 'Calendário editorial', descricao: 'Planejamento mensal do que vai ser publicado em cada plataforma.' },
        ],
      },
      {
        numero: '02',
        titulo: 'Produção',
        periodo: 'CONTÍNUO',
        itens: [
          { titulo: 'Criação de artes', descricao: 'Materiais visuais adaptados para cada plataforma.' },
          { titulo: 'Redação de legendas', descricao: 'Textos escritos com foco em captação de doação e voluntariado.' },
          { titulo: 'Produção de vídeo', descricao: 'Edição de vídeo para YouTube a partir de material captado ou fornecido pelo Instituto.' },
        ],
      },
      {
        numero: '03',
        titulo: 'Publicação e acompanhamento',
        periodo: 'MENSAL',
        itens: [
          { titulo: 'Publicação nas 4 plataformas', descricao: 'Instagram, Facebook, LinkedIn e YouTube.', limite: 'até 4 publicações/mês' },
          { titulo: 'Relatório mensal', descricao: 'Leitura de desempenho e ajustes na linha editorial.' },
        ],
      },
    ],
    planos: [
      {
        nome: 'Mês a mês',
        resumo: 'Sem fidelidade',
        itens: [
          'Planejamento de conteúdo mensal',
          'Criação de artes e materiais visuais',
          'Redação de legendas',
          'Publicação em Instagram, Facebook, LinkedIn e YouTube',
          'Relatório mensal de desempenho',
          'Cancelamento a qualquer momento',
        ],
        valor: 597,
        periodo: '/mês',
        rodape: 'Sem compromisso de permanência',
      },
      {
        nome: 'Pacote 3 meses',
        destaque: true,
        resumo: 'O mais escolhido',
        itens: [
          'Planejamento de conteúdo mensal',
          'Criação de artes e materiais visuais',
          'Redação de legendas',
          'Publicação em Instagram, Facebook, LinkedIn e YouTube',
          'Relatório mensal de desempenho',
        ],
        valor: 1497,
        periodo: 'total (3 meses)',
        rodape: 'Pago antecipado, equivale a R$ 499/mês',
      },
      {
        nome: 'Pacote 1 ano',
        resumo: 'Maior economia',
        itens: [
          'Planejamento de conteúdo mensal',
          'Criação de artes e materiais visuais',
          'Redação de legendas',
          'Publicação em Instagram, Facebook, LinkedIn e YouTube',
          'Relatório mensal de desempenho',
          'Prioridade no atendimento',
        ],
        valor: 427,
        periodo: '/mês',
        rodape: 'Cobrança mensal, contrato de 12 meses',
      },
      {
        nome: 'Sob demanda',
        resumo: 'Produção extra',
        itens: [
          'Publicações adicionais além das 4/mês',
          'Cobertura de eventos para gerar conteúdo',
          'Campanhas específicas de captação',
          'Orçado por escopo',
        ],
        valor: 0,
        periodo: '',
        rodape: 'Consultar conforme a demanda',
      },
    ],
    prazos: [
      { texto: 'O início da produção ocorre em até 5 dias úteis após a aprovação e o envio dos acessos às redes sociais.', bold: 'até 5 dias úteis' },
      { texto: 'O conteúdo é enviado para aprovação com antecedência mínima de 3 dias úteis antes da publicação.', bold: 'antecedência mínima de 3 dias úteis' },
      { texto: 'O pacote é fechado para 3 meses. Após esse período, a continuidade passa para o plano mês a mês, salvo aviso de cancelamento.', bold: 'passa para o plano mês a mês' },
      { texto: 'Solicitações enviadas em sábados, domingos e feriados são respondidas no próximo dia útil.', bold: 'no próximo dia útil' },
    ],
    contrato: [
      {
        titulo: 'Contrato e Entrega',
        itens: [
          'O pagamento é mensal, cobrado no início de cada ciclo.',
          'O pacote de 3 meses é cobrado integralmente, mesmo com cancelamento antecipado.',
          'Após os 3 meses, a continuidade é opcional e sem multa.',
        ],
      },
      {
        titulo: 'Condições Gerais',
        itens: [
          'O Instituto fornece acesso às contas de Instagram, Facebook, LinkedIn e YouTube.',
          'Aprovação de conteúdo é feita por quem o Instituto indicar.',
          'Fotos e vídeos brutos de eventos, quando existirem, devem ser enviados em boa qualidade.',
          'Captação de vídeo nova (não apenas edição) é orçada à parte, como cobertura de eventos.',
        ],
      },
    ],
    pagamento: {
      blocos: [
        { titulo: 'Mensalidade', descricao: 'Cobrada no início de cada mês, via Pix ou transferência bancária.' },
        { titulo: 'Pacote fechado (3 meses)', descricao: 'Pode ser pago mês a mês ou antecipado, conforme preferência do Instituto. O valor total dos 3 meses é devido integralmente, mesmo em caso de cancelamento antecipado.' },
      ],
      meios: [
        { nome: 'Pix', detalhe: 'Transferência instantânea' },
        { nome: 'Boleto', detalhe: 'Compensação em até 2 dias úteis' },
        { nome: 'Transferência', detalhe: 'Depósito em conta corrente' },
      ],
    },
    servico_adicional: {
      titulo: 'Cobertura de eventos',
      paragrafos: [
        'A cobertura de eventos é contratada à parte, com formulário e proposta próprios. Entra quando o Instituto tiver ações presenciais para registrar, e alimenta diretamente o conteúdo das redes.',
        ENTREGA_COBERTURA_PADRAO,
        'Despesas de deslocamento, hospedagem e alimentação são por conta do Instituto, independente da localidade.',
      ],
      imagem: '/img/thiago-horizontal.jpg',
    },
    referencias: [
      {
        nome: 'GRAACC (Brasil)',
        url: 'https://graacc.org.br',
        tecnica: 'Comunicação organizada por causa (Voluntariado, Pesquisa, Doação) e integrada a campanhas sazonais como o McDia Feliz, usando histórias reais de pacientes como prova social. Aplicação: linha editorial construída em torno de histórias reais e causas, não só avisos institucionais.',
      },
      {
        nome: 'charity: water (EUA)',
        url: 'https://www.charitywater.org',
        tecnica: 'Comunicação centrada em transparência (mostra exatamente onde cada doação vai) e em múltiplos caminhos de engajamento: doação mensal, apadrinhamento de projeto, campanha em nome de alguém. Aplicação: variar o CTA por publicação (doar, ser voluntário, apoiar), não repetir sempre o mesmo pedido.',
      },
    ],
    faq: [
      {
        pergunta: 'Por que 4 publicações por mês e não mais?',
        resposta: 'É o volume que sustenta qualidade e consistência sem virar ruído, alinhado ao que foi pedido no briefing. Dá para aumentar a cadência sob orçamento à parte.',
      },
      {
        pergunta: 'Vocês produzem os vídeos para o YouTube do zero?',
        resposta: 'O escopo cobre roteiro e edição de vídeos já captados ou fornecidos pelo Instituto. Captação de vídeo nova entra como cobertura de eventos, orçada à parte.',
      },
      {
        pergunta: 'Depois dos 3 meses, como funciona?',
        resposta: 'A continuidade passa para o plano mês a mês (sem o desconto do pacote fechado), ou encerra sem multa, conforme decisão do Instituto.',
      },
    ],
    primeiros_30_dias: [
      'Semana 1: diagnóstico das redes atuais e definição da linha editorial',
      'Semana 2: calendário editorial do primeiro mês e produção das primeiras artes',
      'Semana 3: publicação das primeiras peças nas 4 plataformas',
      'Semana 4: leitura de desempenho e ajustes para o segundo mês',
    ],
    confidencialidade: 'Esta proposta é confidencial e destinada exclusivamente ao Instituto Humanitário Caridade. Validade de 15 dias corridos a partir da data de envio. Preços sujeitos a atualização após o vencimento.',
    encerramento: encerramentoPadrao('o escopo, o valor e como o pacote funciona'),
  },
  utm_copy: {
    whatsapp: 'Wagner, segue a proposta de redes sociais do Instituto Humanitário Caridade.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
