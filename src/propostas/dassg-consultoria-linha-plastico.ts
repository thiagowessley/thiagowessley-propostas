import type { PropostaData } from '../types/proposta'

export const dassgConsultoriaLinhaPlastico: PropostaData = {
  slug: 'dassg-consultoria-linha-plastico',
  cliente: 'Dassg Têmpera',
  segmento: 'Indústria de tratamento térmico, Araquari/SC',
  servico: 'Estudo de Viabilidade e Plano de Negócios: Linha Pet em Plástico',
  validade: '2026-09-28',
  envio: '2026-09-21',
  intro_capa: 'Esta proposta apresenta o escopo, o prazo e o investimento do projeto que leva a linha de produtos pet da Dassg Têmpera para o plástico, com referências reavaliadas, nome, fabricação, canais de venda e modelo financeiro.',
  valor: {
    principal: 3497,
    moeda: 'BRL',
  },
  ctaWhatsapp: 'Aprovar o estudo de viabilidade',

  secoes: {
    cenario: {
      problema: 'Os sócios da Dassg Têmpera validaram em 15/09/2026 a linha de produtos pet em inox e pediram a mesma linha em plástico, o material das referências de produto que eles trouxeram: caixas de areia, fonte de água, comedouro, casinha, arranhador e uma mala de transporte transparente. Falta transformar essa direção em decisão, com número real e sem gastar em molde antes da hora.',
      publico: 'Sócios da Dassg Têmpera e o Wagner, na validação interna do projeto.',
      desafio: 'Decidir com cotação, e não com estimativa, se a Dassg entra no plástico, com que nome, fabricada por quem e vendida onde.',
      entregas: [
        'Nove referências de produto reavaliadas uma a uma, com link, preço na origem e veredito por canal de venda',
        'Levantamento de nomes para a linha, a partir da ideia "D + animal" e de outras direções, com domínio conferido e estrutura de marca',
        'Briefing técnico de fabricação, com a especificação de cada peça para cotar molde e fabricação',
        'Pesquisa em 5 frentes: concorrência de plástico, molde e resinas, canais de venda, regulatório e segurança, produtos extras',
        'Modelo financeiro em 3 cenários, com o quiosque e até 3 canais, e verificador que refaz a conta de forma independente',
        'Catálogo e plano de negócios do plástico publicados como páginas web, ao lado do inox, com mockups e 2 PDFs',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'Referências, Nome e Roteiro',
        periodo: '15 A 21/09',
        itens: [
          { titulo: 'Referências', descricao: 'As 9 referências de produto reavaliadas uma a uma, com preço na origem e veredito por canal de venda.' },
          { titulo: 'Nome', descricao: 'Levantamento de nomes a partir da ideia "D + animal" e de outras direções, com domínio conferido e estrutura de marca.' },
          { titulo: 'Briefing técnico', descricao: 'Especificação de cada peça, pronta para transformar suposição de custo em cotação de molde e de fabricação.' },
        ],
      },
      {
        numero: '02',
        titulo: 'Pesquisa e Fabricação',
        periodo: '22 A 26/09',
        itens: [
          { titulo: 'Concorrência', descricao: 'Plástico no Brasil, com preço de varejo por categoria conferido na página de origem.' },
          { titulo: 'Fabricação', descricao: 'Molde de injeção, resinas e o caminho de fabricação recomendado, a partir de pesquisa de mercado e de cotações de fabricantes.' },
          { titulo: 'Canais', descricao: 'Quiosque, pet shops e loja online, com o custo de cada canal.' },
          { titulo: 'Regulatório e segurança', descricao: 'Regras e riscos de cada produto da linha, como transporte aéreo, calor em produto fechado e parte elétrica, e o que mais a pesquisa encontrar.' },
        ],
      },
      {
        numero: '03',
        titulo: 'Modelo e Publicação',
        periodo: '27 A 30/09',
        itens: [
          { titulo: 'Modelo financeiro', descricao: '3 cenários, o quiosque e até 3 canais, com verificador que refaz a conta de forma independente.' },
          { titulo: 'Produtos e mockups', descricao: 'Até 6 produtos extras além das 9 referências, com mockup de 9 a 15 produtos no total.' },
          { titulo: 'Catálogo e plano', descricao: 'Duas páginas publicadas ao lado do inox, mais 2 PDFs.' },
        ],
      },
    ],
    planos: [
      {
        nome: 'Estudo de Viabilidade e Plano de Negócios',
        resumo: 'Referências, nomes, pesquisa de fabricação, modelo financeiro, catálogo e plano de negócios',
        itens: [
          '9 referências de produto reavaliadas, com veredito por canal de venda',
          'Levantamento de nomes com domínio conferido e estrutura de marca (1 rodada de ajuste)',
          'Briefing técnico de fabricação, com a especificação de cada peça para cotar molde e fabricação',
          'Pesquisa em 5 frentes, com todo número conferido na fonte',
          'Até 6 produtos extras além das 9 referências',
          'Modelo financeiro em 3 cenários, quiosque mais até 3 canais',
          'Catálogo e plano de negócios do plástico publicados, mais 2 PDFs',
          'Mockups de 9 a 15 produtos (1 rodada de ajuste)',
        ],
        valor: 3497,
        periodo: 'projeto fechado, 2 parcelas',
        rodape: 'Preparação pronta',
        colunasItens: 2,
      },
    ],
    prazos: [
      { texto: 'A preparação (referências, nomes e briefing técnico de fabricação) está pronta e será apresentada na reunião de 23/09, junto com uma prévia da pesquisa. Pesquisa, modelo e publicação ficam prontos até 30/09.', bold: 'até 30/09' },
      { texto: 'A cotação real de fabricação depende de fabricantes. Sem ela, o modelo segue com premissas de mercado marcadas "a cotar" e é atualizado quando a cotação chegar.', bold: 'depende de fabricantes' },
      { texto: 'A primeira parcela é devida na aprovação desta proposta. A publicação do catálogo, do plano e dos PDFs acontece com ela.', bold: 'primeira parcela' },
    ],
    contrato: [
      {
        titulo: 'Escopo e Limite',
        itens: [
          'Este valor cobre o projeto descrito nas entregas, dentro dos tetos indicados: referências, nome, pesquisa, modelo financeiro, catálogo e plano do plástico.',
          'O projeto em inox, entregue e validado pelos sócios em 15/09/2026, está fora desta proposta.',
          'Novo material, novos produtos além dos tetos, novos canais, novos recortes e novos nomes são fases novas, com escopo e valor próprios, orçadas antes de começar.',
          'Cotação real de fabricação, protótipo físico, molde, registro de marca no INPI, contrato com o fabricante e negociação com shopping, pet shops ou marketplaces não estão inclusos, e são orçados à parte quando o projeto avançar.',
        ],
      },
      {
        titulo: 'Condições Gerais',
        itens: [
          'Os números e as fontes usados na pesquisa de mercado seguem documentados e disponíveis para consulta.',
          'A Dassg informa os aços de ferramenta e os processos de tratamento térmico que faz hoje e decide o nome da marca. Sem essas informações, o item correspondente segue com premissa marcada como pendente.',
        ],
      },
    ],
    pagamento: {
      blocos: [
        { titulo: 'Primeira parcela, 50%', descricao: 'R$ 1.749 na aprovação desta proposta. É ela que libera a publicação do catálogo e do plano, com os 2 PDFs.' },
        { titulo: 'Segunda parcela, 50%', descricao: 'R$ 1.748 na entrega do catálogo e do plano do plástico publicados.' },
      ],
      meios: [
        { nome: 'Pix', detalhe: 'Chave CNPJ 67.205.920/0001-17' },
        { nome: 'Transferência', detalhe: 'Depósito em conta corrente' },
      ],
    },
    confidencialidade: 'Validade de 7 dias corridos a partir da data de envio. Preços sujeitos a atualização após o vencimento.',
    encerramento: 'Escopo, prazo e investimento estão definidos. Com a aprovação, o projeto segue no cronograma descrito nesta proposta.',
  },
  utm_copy: {
    whatsapp: 'Wagner, segue a proposta do projeto da linha pet em plástico.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
