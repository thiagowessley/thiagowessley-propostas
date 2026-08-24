import type { PropostaData } from '../types/proposta'
import { SOBRE_PADRAO, encerramentoPadrao, TITULO_PAGINA_INICIAL } from '../lib/copy-padrao'

export const dgAtivosSite: PropostaData = {
  slug: 'dg-ativos-site',
  cliente: 'DG Ativos Imobiliários',
  segmento: 'Inteligência e gestão de ativos imobiliários, Joinville/SC',
  servico: 'Site institucional com autonomia de edição',
  responsavel: 'The Lovers Company',
  validade: '2026-08-27',
  envio: '2026-08-20',
  intro_capa:
    'O site está construído e o painel de edição vai junto com ele, sem custo adicional. Este documento fecha o escopo do que está sendo entregue, deixa claro o que fica sob responsabilidade de quem depois da publicação, e apresenta o plano opcional de gestão mensal para quem preferir delegar a operação.',
  valor: {
    principal: 997,
    moeda: 'BRL',
  },
  ctaWhatsapp: 'Aprovar o escopo e a entrega',

  foto_profissional: '/img/thiago-vertical.jpg',
  foto_secundaria: '/img/thiago-horizontal.jpg',

  sobre: SOBRE_PADRAO,

  secoes: {
    cenario: {
      problema:
        'A DG Ativos Imobiliários nasce como marca separada do corretor, com identidade, manifesto e textos já prontos. Falta o site existir, e ele precisa estar no ar até o fim de agosto para acompanhar o restante do lançamento.',
      publico:
        'Famílias de alta renda, investidores sofisticados e empresários que não buscam imóvel, buscam decisão. Gente que compra por confiança, valoriza acesso e informação privilegiada, e quer um conselheiro em vez de um corretor.',
      desafio:
        'O site é a parte previsível. O que decide o custo dos próximos dois anos é outra coisa: quando o Daniel quiser publicar um imóvel novo, subir um relatório ou trocar uma foto, ele faz sozinho. O painel de edição vai junto com a entrega justamente para que a operação do site não vire uma linha de custo mensal.',
      entregas: [
        'Uma marca institucional que não se parece com imobiliária tradicional',
        'Cada ativo apresentado como decisão patrimonial, não como anúncio de imóvel',
        'Um endereço fixo para os reports do DG Intelligence e para a captação de contatos',
        'Estrutura pronta para receber o catálogo de imóveis quando o conteúdo chegar',
        'O mesmo site em português e em inglês, para o investidor que chega pela operação na Flórida',
        'Domínio, hospedagem e ferramentas registrados no nome do próprio cliente',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'Fundação e estrutura',
        periodo: 'ATÉ 23/08',
        itens: [
          {
            titulo: `${TITULO_PAGINA_INICIAL} e institucional`,
            descricao:
              'Banner rotativo com o slogan da marca, navegação em bloco dividido e a página que separa Daniel Gomes de DG Ativos, com a biografia e o manifesto já aprovados.',
            limite: 'primeira versão visual em link de preview',
          },
          {
            titulo: 'Sistema visual aplicado',
            descricao:
              'Paleta oficial, tipografia da marca, tratamento escuro de foto e o monograma como elemento gráfico, tudo direto do manual da identidade.',
          },
          {
            titulo: 'Conteúdo separado do código',
            descricao:
              'Texto e imagem ficam em arquivos próprios desde o primeiro dia. É isso que permite ligar o painel de edição depois sem reescrever o site.',
          },
        ],
      },
      {
        numero: '02',
        titulo: 'Páginas, formulário e publicação',
        periodo: 'ATÉ 28/08',
        itens: [
          {
            titulo: 'Negócios e Ativos',
            descricao:
              'Os cinco serviços da DG, do diagnóstico patrimonial à internacionalização, com o bloco de acesso a oportunidades off-market no fim da página.',
            limite: '5 serviços',
          },
          {
            titulo: 'Insights e Curadoria de Imóveis',
            descricao:
              'Insights publicado com conteúdo editorial próprio. Curadoria entregue com a estrutura pronta e o catálogo entra quando o conteúdo chegar.',
          },
          {
            titulo: 'DG Intelligence com captação',
            descricao:
              'Página do report com o estado de lançamento em breve e campo de e-mail funcionando, gravando os contatos em ferramenta na conta do próprio cliente.',
          },
          {
            titulo: 'Publicação e setup de infraestrutura',
            descricao:
              'Site no ar em dgativos.com.br, com certificado de segurança, e-mail profissional no domínio, envio dos formulários ligado e medição de acesso configurada. Todas as contas são abertas em nome do cliente e os acessos são transferidos para ele. Esta configuração acontece uma única vez, na entrega.',
            limite: 'setup único, na entrega',
          },
        ],
      },
      {
        numero: '03',
        titulo: 'Autonomia do cliente',
        periodo: 'INCLUSO NA ENTREGA',
        itens: [
          {
            titulo: 'Painel de edição no próprio site',
            descricao:
              'Endereço /admin com login do cliente. Sem servidor, sem banco de dados e sem mensalidade de plataforma.',
          },
          {
            titulo: 'Coleções prontas',
            descricao:
              'Imóveis, reports do DG Intelligence e publicações de Insights, cada um com seus campos, para o cliente incluir item novo sem depender de ninguém.',
          },
          {
            titulo: 'Biblioteca de blocos',
            descricao:
              'Texto, texto com imagem, citação, galeria, números e chamada de contato, todos com a cara da marca. O cliente monta a página com peças prontas.',
            limite: '6 tipos de bloco',
          },
          {
            titulo: 'Manual e transferência',
            descricao:
              'Manual escrito mostrando como trocar foto, editar texto e publicar imóvel, e a passagem de todos os acessos para o nome do cliente.',
          },
        ],
      },
    ],
    planos: [
      {
        nome: 'Site Institucional',
        destaque: true,
        resumo: 'Entrega completa, com o painel de edição incluso',
        itens: [
          'Nove destinos: inicial, DG Ativos, Negócios e Ativos, Insights, Curadoria de Imóveis, DG Intelligence, Contato, Política de Privacidade e a página de cada frente de trabalho',
          'Ficha própria para cada imóvel e página própria para cada análise, com carrossel de fotos e imagem no meio do texto',
          'Site inteiro em português e em inglês, com troca de idioma na mesma página',
          'Identidade da marca aplicada, com as fontes e a paleta oficiais, responsivo em celular, tablet e computador',
          'Formulários de contato e do DG Intelligence entregando e-mail de verdade',
          'Painel de edição no próprio site: imóvel novo, análise nova, troca de foto e de texto, sem depender de ninguém',
          'Setup de infraestrutura na entrega: domínio, hospedagem, e-mail no domínio e medição de acesso, tudo em conta do próprio cliente',
          'Manual escrito de uso do painel e transferência de todos os acessos',
          '2 rodadas de revisão inclusas',
        ],
        valor: 997,
        periodo: 'entrega única',
        rodape: 'Investimento acertado em 20/08. O painel de edição entra sem custo adicional.',
      },
      {
        nome: 'Gestão Mensal',
        resumo: 'Opcional, para quem prefere delegar a operação',
        itens: [
          'Até 4 publicações ou alterações de conteúdo por mês, feitas por mim',
          'Monitoramento do site, com aviso antes de o cliente perceber qualquer queda',
          'Cópia de segurança e atualizações técnicas por minha conta',
          'Relatório trimestral de acesso e desempenho',
          'Prioridade de agenda, com resposta em até 2 dias úteis',
          'Sem permanência: encerra a qualquer momento, com aviso de 30 dias',
        ],
        valor: 597,
        periodo: '/mês',
        rodape: 'Sem o plano, cada demanda é orçada antes de começar, a R$ 150 a hora técnica.',
      },
    ],
    prazos: [
      {
        texto: 'A primeira versão visual da página inicial e do institucional fica pronta até domingo, 23 de agosto, em link de preview.',
        bold: 'até domingo, 23 de agosto',
      },
      {
        texto: 'A entrega completa das seis páginas no domínio novo acontece até 28 de agosto, condicionada ao domínio registrado e às contas criadas.',
        bold: 'até 28 de agosto',
      },
      {
        texto: 'O prazo fica suspenso enquanto faltar material de responsabilidade do cliente, sem penalidade para nenhum dos lados.',
        bold: 'fica suspenso enquanto faltar material',
      },
      {
        texto: 'Estão inclusas 2 rodadas de revisão, solicitadas por escrito em até 7 dias úteis após a apresentação. Item fora do escopo original custa R$ 200 cada.',
        bold: '2 rodadas de revisão',
      },
      {
        texto: 'O painel de edição já está construído e testado, e é liberado junto com a publicação do site, sem prazo nem custo separados.',
        bold: 'já está construído e testado',
      },
      {
        texto: 'O catálogo de imóveis e o report em PDF entram quando o conteúdo chegar, sem data presa à entrega de agosto.',
        bold: 'quando o conteúdo chegar',
      },
    ],
    contrato: [
      {
        titulo: 'Entrega e Escopo',
        itens: [
          'O pagamento é 50% na assinatura, para reserva de agenda, e 50% na entrega do site.',
          'A entrega para aprovação é feita por link. Aprovado, o site vai ao ar no domínio do cliente.',
          'Estão inclusas 2 rodadas de revisão, limitadas a ajuste de conteúdo e alteração visual pontual, sem reestruturar página nem criar componente novo.',
          'Textos, fotos, logotipo e catálogo de imóveis são fornecidos pelo cliente. Criação de conteúdo não faz parte do escopo.',
          'Página nova, tipo de bloco novo e funcionalidade não prevista são orçados à parte.',
          'O painel de edição, o treinamento e o manual de uso fazem parte da entrega, sem custo adicional.',
        ],
      },
      {
        titulo: 'Contas e Pós-entrega',
        itens: [
          'Domínio, hospedagem, ferramenta de e-mail e demais serviços são registrados em nome do cliente, que é o titular de tudo desde o primeiro dia. Eu entro como colaborador técnico, nunca como dono.',
          'O envio dos formulários roda no plano gratuito do serviço contratado em nome do cliente, hoje suficiente para 3.000 mensagens por mês. Volume acima disso passa a ter custo, que é do cliente.',
          'Custos de terceiros (registro de domínio, licença de fonte, planos pagos) não estão inclusos no valor do site.',
          'O cliente declara ter os direitos de uso dos textos, imagens, logotipo e fontes que fornecer.',
          'A garantia técnica é de 30 dias e cobre defeito de funcionamento, não mudança de conteúdo nem de opinião.',
          'Alteração feita pelo cliente no painel é de responsabilidade dele. Corrigir o que ele alterar é trabalho avulso, orçado antes de começar.',
          'A configuração de domínio, hospedagem, e-mail e integrações faz parte da entrega e acontece uma única vez, na publicação do site. Depois da transferência dos acessos, a renovação do domínio, o pagamento de qualquer serviço, a disponibilidade e a manutenção dessas contas passam a ser responsabilidade do cliente.',
          'Administração contínua dessas contas, mudança de provedor, migração futura e suporte recorrente não estão inclusos no valor do site e só existem mediante o plano de Gestão Mensal ou orçamento avulso.',
        ],
      },
    ],
    pagamento: {
      blocos: [
        {
          titulo: 'Site Institucional',
          descricao: 'R$ 997 em duas parcelas: R$ 498,50 na assinatura do contrato e R$ 498,50 na entrega do site no ar.',
        },
        {
          titulo: 'Gestão Mensal, se for contratada',
          descricao: 'R$ 597 por mês, cobrados no início de cada ciclo, a partir do mês seguinte à publicação. Opcional, sem permanência e com aviso de 30 dias para encerrar.',
        },
        {
          titulo: 'Fora do escopo e trabalho avulso',
          descricao: 'Item novo fora do combinado: R$ 200 cada. Alteração ou publicação avulsa para quem ficar sem plano de gestão: R$ 150 a hora técnica, mínimo de 1 hora, orçada antes de começar.',
        },
      ],
      meios: [
        { nome: 'Pix', detalhe: 'Transferência instantânea' },
        { nome: 'Transferência', detalhe: 'Depósito em conta corrente' },
      ],
    },
    faq: [
      {
        pergunta: 'O painel de edição está incluso mesmo, ou é um adicional?',
        resposta:
          'Está incluso no investimento do site, sem custo separado. Ele já está construído e testado, e é liberado junto com a publicação. A ideia é simples: a operação do site não deve virar uma linha de custo mensal para a DG.',
      },
      {
        pergunta: 'O que exatamente o cliente consegue fazer sozinho?',
        resposta:
          'Trocar qualquer foto, editar qualquer texto, publicar imóvel novo com carrossel de fotos e ficha completa, subir relatório novo do DG Intelligence e escrever uma análise, inclusive com imagem no meio do texto. Cada alteração fica gravada com histórico, então dá para voltar atrás em qualquer mudança.',
      },
      {
        pergunta: 'E o que ele não vai conseguir fazer?',
        resposta:
          'Criar um layout novo do zero ou um tipo de bloco que ainda não existe. Isso vale para qualquer ferramenta do mercado, inclusive as que prometem o contrário: o que existe é sempre uma biblioteca de peças prontas. Desenho novo continua sendo serviço, orçado à parte.',
      },
      {
        pergunta: 'O cliente precisa saber alguma coisa de tecnologia?',
        resposta:
          'Não. Ele entra num endereço, faz login e vê uma tela de edição parecida com um formulário. O manual escrito mostra o passo a passo, com print de cada tela, de como trocar uma foto e publicar um imóvel do início ao fim. Nenhuma ferramenta de programação aparece para ele em momento nenhum.',
      },
      {
        pergunta: 'Quem cuida do domínio, da hospedagem e do e-mail depois da entrega?',
        resposta:
          'O cliente. Toda a configuração inicial faz parte da entrega: registro do domínio, hospedagem publicada, e-mail no domínio e medição de acesso ficam prontos e testados, tudo em conta no nome dele. A partir da transferência dos acessos, a renovação do domínio, o pagamento de qualquer serviço e a manutenção dessas contas passam a ser responsabilidade do cliente. Quem quiser que isso continue comigo contrata a Gestão Mensal.',
      },
      {
        pergunta: 'Quanto custa manter o site no ar todo mês?',
        resposta:
          'Só o domínio, cerca de R$ 40 por ano. Hospedagem, e-mail no domínio, painel de edição e envio dos formulários rodam em plano gratuito, sem limite de visitas e com uso comercial permitido. Não existe mensalidade obrigatória de plataforma.',
      },
      {
        pergunta: 'Por que as contas ficam no nome do cliente?',
        resposta:
          'Porque o site é dele. Domínio, hospedagem e ferramentas registrados no nome do titular significam que ele nunca fica refém de fornecedor nenhum, inclusive de mim. Vale registrar que o domínio do site atual, danielgomesbrokersc.com.br, está hoje no nome de um terceiro, e é exatamente esse tipo de situação que a estrutura nova evita.',
      },
      {
        pergunta: 'O formulário do site manda e-mail para onde?',
        resposta:
          'Para a caixa que o cliente indicar. O site conversa com um serviço de envio registrado na conta dele, no plano gratuito, que cobre 3.000 mensagens por mês. A chave desse serviço fica guardada na hospedagem, nunca dentro do site, e quem responde o contato responde direto do e-mail da marca, no domínio novo.',
      },
      {
        pergunta: 'Por que o site tem versão em inglês?',
        resposta:
          'Porque o trabalho inclui operação na Flórida e a credencial CIPS, e quem chega de fora precisa entender a operação sem tradutor. O site inteiro existe nos dois idiomas e troca na mesma página, sem levar a pessoa para outro lugar. O texto em inglês foi escrito por mim e entra na mesma lista de aprovação do texto em português.',
      },
      {
        pergunta: 'A página de Insights vai puxar o Instagram?',
        resposta:
          'O perfil @dgativos ainda não existe, e o Instagram deixou de permitir incorporar feed de perfil pela via gratuita: hoje exige conta comercial ligada a página do Facebook, ou ferramenta paga. Por isso a página nasce com conteúdo editorial próprio, que também rende mais em busca, e o feed entra depois se a marca quiser.',
      },
      {
        pergunta: 'E se aparecer uma demanda pontual depois da entrega?',
        resposta:
          'É orçada antes de começar, a R$ 150 a hora técnica, com mínimo de uma hora. Quem prefere previsibilidade contrata a Gestão Mensal e passa a ter até quatro publicações por mês, monitoramento e prioridade de agenda inclusos.',
      },
    ],
    primeiros_30_dias: [
      'Semana 1: página inicial e institucional prontas em preview, revisão com a agência',
      'Semana 2: site completo nos dois idiomas, formulários entregando e-mail e site no ar no domínio novo',
      'Semana 3: painel de edição liberado e manual escrito entregue',
      'Semana 4: catálogo de imóveis populado conforme o conteúdo chegar',
    ],
    confidencialidade:
      'Este documento é confidencial e destinado exclusivamente à DG Ativos Imobiliários e à The Lovers Company. Validade de 7 dias corridos a partir da data de envio. Valores sujeitos a atualização após o vencimento.',
    encerramento: encerramentoPadrao('o que está sendo entregue, o que fica com quem depois da publicação e quanto custa manter o site no ar'),
  },
  utm_copy: {
    whatsapp: 'Segue a proposta do site da DG Ativos, com o escopo fechado e o painel de edição incluso.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
