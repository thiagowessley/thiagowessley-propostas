import type { PropostaData } from '../types/proposta'

export const instituto: PropostaData = {
  slug: 'instituto-tec-inovacao-2c8f1a',
  cliente: 'Instituto de Tecnologia, Inovacao e Desenvolvimento',
  segmento: 'Instituto sem fins lucrativos',
  servico: 'Site Institucional',
  validade: '2026-07-13',
  valor: {
    principal: 1997,
    manutencao: 497,
    alternativa: 5800,
    moeda: 'BRL',
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
        itens: [
          { titulo: 'Arquitetura do site', descricao: 'Sitemap de 7 paginas conforme benchmark entregue pelo cliente.' },
          { titulo: 'Design dark premium', descricao: 'Identidade visual propria do site, coerente com o segmento de tecnologia.' },
          { titulo: 'Indicadores animados', descricao: 'Contadores de impacto que animam no scroll.', limite: 'ate 6 KPIs' },
          { titulo: 'SEO on-page', descricao: 'Meta tags, Open Graph e estrutura semantica em todas as paginas.' },
          { titulo: 'Deploy estatico', descricao: 'Hospedagem na estrutura do cliente, sem custo mensal adicional de servidor.' },
        ],
      },
    ],
    referencias: [
      {
        nome: 'ITA — Instituto Tecnologico de Aeronautica',
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
  },
  utm_copy: {
    whatsapp: 'Miguel, segue a proposta que conversamos.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
  },
}
