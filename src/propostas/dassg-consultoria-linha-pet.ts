import type { PropostaData } from '../types/proposta'
import { encerramentoPadrao } from '../lib/copy-padrao'

export const dassgConsultoriaLinhaPet: PropostaData = {
  slug: 'dassg-consultoria-linha-pet',
  cliente: 'Dassg Têmpera',
  segmento: 'Indústria de tratamento térmico, Araquari/SC',
  servico: 'Consultoria Estratégica: Nova Linha de Produtos Pet',
  validade: '2026-09-22',
  envio: '2026-09-15',
  intro_capa: 'Esta proposta apresenta o escopo, o prazo e o investimento da consultoria estratégica para a validação da nova linha de produtos pet da Dassg Têmpera.',
  valor: {
    principal: 3500,
    moeda: 'BRL',
  },
  ctaWhatsapp: 'Aprovar a consultoria',

  secoes: {
    cenario: {
      problema: 'A Dassg Têmpera queria avaliar se a competência de tratamento térmico industrial sustenta uma linha nova de produtos pet em metal, sem nome, produtos definidos, pesquisa de mercado ou modelo financeiro ainda formados.',
      publico: 'Sócios da Dassg Têmpera e o Wagner, na validação interna do projeto.',
      desafio: 'Transformar a ideia em material completo o bastante para uma decisão real: seguir, ajustar ou não seguir com a linha pet.',
      entregas: [
        'Naming e direção visual da marca Patas de Aço, com verificação de domínio',
        'Definição dos 11 produtos da linha, em dois recortes (só gato / gato e cão)',
        'Due diligence de mercado em várias rodadas, com concorrência, viabilidade técnica, regulatória e financeira, e verificação de números na fonte',
        'Modelo financeiro com premissas declaradas, em 3 cenários, com verificador automático',
        'Catálogo de produtos e plano de negócios publicados como páginas web',
        '11 mockups fotográficos dos produtos',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'Estratégia e Identidade',
        periodo: '10 A 11/09',
        itens: [
          { titulo: 'Naming', descricao: 'Cinco alternativas de nome com domínio verificado, decisão final Patas de Aço.' },
          { titulo: 'Direção visual', descricao: 'Paleta, tipografia e identidade da marca, separada da identidade industrial da Dassg.' },
          { titulo: 'Linha de produtos', descricao: 'Definição de 11 produtos em dois recortes, com justificativa técnica de material para cada um.' },
        ],
      },
      {
        numero: '02',
        titulo: 'Pesquisa e Validação',
        periodo: '11 A 15/09',
        itens: [
          { titulo: 'Concorrência real', descricao: 'Mercado brasileiro e internacional, com preço, material e posicionamento verificados na fonte.' },
          { titulo: 'Viabilidade técnica', descricao: 'O que a têmpera resolve de fato, e o que não resolve, produto a produto.' },
          { titulo: 'Due diligence financeira', descricao: 'Auditoria cética do modelo, custo de fabricação, canal de venda e regulação, com as perguntas que um investidor faria.' },
        ],
      },
      {
        numero: '03',
        titulo: 'Material e Publicação',
        periodo: '13 A 15/09',
        itens: [
          { titulo: 'Modelo financeiro', descricao: '3 cenários, premissas declaradas, verificador que refaz a conta de forma independente.' },
          { titulo: 'Catálogo e plano', descricao: 'Duas páginas publicadas, com número real de mercado, nunca digitado à mão.' },
          { titulo: 'Mockups', descricao: '11 fotos de produto em estilo consistente, prontas para a validação interna.' },
        ],
      },
    ],
    planos: [
      {
        nome: 'Consultoria Estratégica',
        resumo: 'Naming, pesquisa de mercado, modelo financeiro e catálogo publicado',
        itens: [
          'Naming e direção visual da marca, com domínio verificado',
          'Definição de 11 produtos, em dois recortes de linha',
          'Due diligence de mercado, técnica, financeira e regulatória, com número conferido na fonte',
          'Modelo financeiro em 3 cenários, com verificador automático',
          'Catálogo de produtos e plano de negócios publicados como páginas web',
          '11 mockups fotográficos dos produtos',
        ],
        valor: 3500,
        periodo: 'entrega única',
        rodape: 'Trabalho já entregue por completo',
      },
    ],
    prazos: [
      { texto: 'O escopo desta consultoria já foi entregue por completo: identidade, pesquisa, modelo financeiro, catálogo e mockups.', bold: 'já foi entregue por completo' },
      { texto: 'O pagamento é devido em até 5 dias úteis da aprovação desta proposta.', bold: 'em até 5 dias úteis' },
    ],
    contrato: [
      {
        titulo: 'Escopo e Limite',
        itens: [
          'Este valor cobre o trabalho estratégico até a validação interna: naming, pesquisa, modelo financeiro, catálogo e mockups.',
          'Cotação real de fabricação, protótipo físico, registro de marca no INPI e negociação de quiosque não estão inclusos, e são orçados à parte quando o projeto avançar.',
        ],
      },
      {
        titulo: 'Condições Gerais',
        itens: [
          'Os números e as fontes usados na pesquisa de mercado seguem documentados e disponíveis para consulta.',
        ],
      },
    ],
    pagamento: {
      blocos: [
        { titulo: 'Pagamento único', descricao: '100% do valor em até 5 dias úteis da aprovação, referente ao trabalho já entregue.' },
      ],
      meios: [
        { nome: 'Pix', detalhe: 'Chave CNPJ 67.205.920/0001-17' },
        { nome: 'Transferência', detalhe: 'Depósito em conta corrente' },
      ],
    },
    confidencialidade: 'Validade de 7 dias corridos a partir da data de envio. Preços sujeitos a atualização após o vencimento.',
    encerramento: encerramentoPadrao('o escopo, o prazo e o investimento desta consultoria'),
  },
  utm_copy: {
    whatsapp: 'Wagner, segue a proposta da consultoria estratégica da linha pet Patas de Aço.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
