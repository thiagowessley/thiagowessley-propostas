import type { PropostaData } from '../types/proposta'
import { encerramentoPadrao } from '../lib/copy-padrao'

export const dassgConsultoriaLinhaPlastico: PropostaData = {
  slug: 'dassg-consultoria-linha-plastico',
  cliente: 'Dassg Têmpera',
  segmento: 'Indústria de tratamento térmico, Araquari/SC',
  servico: 'Estudo de Viabilidade e Plano de Negócios: Linha Pet em Plástico',
  validade: '2026-09-28',
  envio: '2026-09-21',
  intro_capa: 'Esta proposta apresenta o escopo, o prazo e o investimento do projeto que leva a linha de produtos pet da Dassg Têmpera para o plástico, com referências reavaliadas, nome, fabricação, canais de venda e modelo financeiro.',
  valor: {
    principal: 5500,
    moeda: 'BRL',
  },
  ctaWhatsapp: 'Aprovar o projeto do plástico',

  secoes: {
    cenario: {
      problema: 'Os sócios da Dassg Têmpera validaram em 15/09/2026 a linha de produtos pet em metal e pediram a mesma linha em plástico, o material das referências que a Débora trouxe: caixas de areia, fonte de água, comedouro, casinha, arranhador e uma mala de transporte transparente. Falta transformar essa direção em decisão, com número real e sem gastar em molde antes da hora.',
      publico: 'Sócios da Dassg Têmpera e o Wagner, na validação interna do projeto.',
      desafio: 'Decidir com cotação, e não com estimativa, se a Dassg entra no plástico, com que nome, fabricada por quem e vendida onde.',
      entregas: [
        'Nove referências da Débora reavaliadas uma a uma, com link, preço na origem e veredito por canal de venda',
        'Família de nomes em torno de "D + animal", com domínio conferido e estrutura de marca',
        'Roteiro de 21 perguntas para o engenheiro cotar molde e peça',
        'Pesquisa em 5 frentes: concorrência de plástico, molde e resinas, canais de venda, regulatório e segurança, produtos extras',
        'Modelo financeiro em 3 cenários, com o quiosque e até 3 canais, e verificador que refaz a conta de forma independente',
        'Catálogo e plano de negócios do plástico publicados como páginas web, ao lado do metal, com mockups e 2 PDFs',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'Referências, Nome e Roteiro',
        periodo: '20 A 21/09',
        itens: [
          { titulo: 'Referências', descricao: 'As 9 referências da Débora reavaliadas uma a uma, com preço na origem e veredito por canal de venda.' },
          { titulo: 'Nome', descricao: 'Família de nomes em torno de "D + animal", com domínio conferido e estrutura de marca.' },
          { titulo: 'Roteiro do engenheiro', descricao: '21 perguntas que transformam suposição de custo em cotação de molde e de peça.' },
        ],
      },
      {
        numero: '02',
        titulo: 'Pesquisa e Fabricação',
        periodo: 'DIAS 1 A 7',
        itens: [
          { titulo: 'Concorrência', descricao: 'Plástico no Brasil, com preço de varejo por categoria conferido na página de origem.' },
          { titulo: 'Fabricação', descricao: 'Molde de injeção, resinas e o caminho de fabricação recomendado, a partir das respostas do engenheiro.' },
          { titulo: 'Canais', descricao: 'Quiosque, pet shops e loja online, com o custo de cada canal.' },
          { titulo: 'Regulatório e segurança', descricao: 'Mala em cabine de avião, calor em cúpula fechada e fonte elétrica de 12 V.' },
        ],
      },
      {
        numero: '03',
        titulo: 'Modelo e Publicação',
        periodo: 'DIAS 8 A 15',
        itens: [
          { titulo: 'Modelo financeiro', descricao: '3 cenários, o quiosque e até 3 canais, com verificador que refaz a conta de forma independente.' },
          { titulo: 'Produtos e mockups', descricao: 'Até 6 produtos extras além das 9 referências, com mockup de 9 a 15 produtos no total.' },
          { titulo: 'Catálogo e plano', descricao: 'Duas páginas publicadas ao lado do metal, mais 2 PDFs.' },
        ],
      },
    ],
    planos: [
      {
        nome: 'Projeto do Plástico',
        resumo: 'Referências, nome, pesquisa de fabricação, modelo financeiro e catálogo do plástico',
        itens: [
          '9 referências da Débora reavaliadas, com veredito por canal de venda',
          'Família de nomes com domínio conferido e estrutura de marca (1 rodada de ajuste)',
          'Roteiro de 21 perguntas para o engenheiro cotar molde e peça',
          'Pesquisa em 5 frentes, com todo número conferido na fonte',
          'Até 6 produtos extras além das 9 referências',
          'Modelo financeiro em 3 cenários, quiosque mais até 3 canais',
          'Catálogo e plano de negócios do plástico publicados, mais 2 PDFs',
          'Mockups de 9 a 15 produtos (1 rodada de ajuste)',
        ],
        valor: 5500,
        periodo: 'projeto fechado, 2 parcelas',
        rodape: 'Preparação pronta',
      },
    ],
    prazos: [
      { texto: 'A preparação (referências, nomes e roteiro do engenheiro) está pronta e será apresentada na reunião de 23/09. Pesquisa, modelo e publicação levam até 15 dias corridos depois da aprovação e do pagamento da primeira parcela.', bold: 'até 15 dias corridos' },
      { texto: 'A cotação real depende da resposta do engenheiro. Sem resposta, o modelo segue com premissas marcadas "a cotar" e é atualizado quando a cotação chegar.', bold: 'depende da resposta do engenheiro' },
      { texto: 'A primeira parcela é devida na aprovação desta proposta, e a parte pesada começa depois dela.', bold: 'primeira parcela' },
    ],
    contrato: [
      {
        titulo: 'Escopo e Limite',
        itens: [
          'Este valor cobre o projeto descrito nas entregas, dentro dos tetos indicados: referências, nome, pesquisa, modelo financeiro, catálogo e plano do plástico.',
          'O projeto em metal, entregue e validado pelos sócios em 15/09/2026, está fora desta proposta.',
          'Novo material, novos produtos além dos tetos, novos canais, novos recortes e novos nomes são fases novas, com escopo e valor próprios, orçadas antes de começar.',
          'Cotação real de fabricação (feita pelo engenheiro), protótipo físico, molde, registro de marca no INPI, contrato com o engenheiro e negociação com shopping, pet shops ou marketplaces não estão inclusos, e são orçados à parte quando o projeto avançar.',
        ],
      },
      {
        titulo: 'Condições Gerais',
        itens: [
          'Os números e as fontes usados na pesquisa de mercado seguem documentados e disponíveis para consulta.',
          'Ajuste de texto ou de número dentro do que foi entregue: até 2 rodadas por entrega. Correção de erro em texto ou número entregue: sem custo por 7 dias corridos a partir da aprovação.',
          'A Dassg fornece o contato do engenheiro, informa os aços de ferramenta e os processos de tratamento térmico que faz hoje e decide o nome da marca. Sem essas informações, o item correspondente segue com premissa marcada como pendente.',
        ],
      },
    ],
    pagamento: {
      blocos: [
        { titulo: 'Primeira parcela, 50%', descricao: 'R$ 2.750 na aprovação desta proposta. É ela que libera a parte pesada: pesquisa de fabricação, modelo financeiro e site.' },
        { titulo: 'Segunda parcela, 50%', descricao: 'R$ 2.750 na entrega do catálogo e do plano do plástico publicados.' },
      ],
      meios: [
        { nome: 'Pix', detalhe: 'Chave CNPJ 67.205.920/0001-17' },
        { nome: 'Transferência', detalhe: 'Depósito em conta corrente' },
      ],
    },
    confidencialidade: 'Validade de 7 dias corridos a partir da data de envio. Preços sujeitos a atualização após o vencimento.',
    encerramento: encerramentoPadrao('o escopo, o prazo e o investimento deste projeto'),
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
