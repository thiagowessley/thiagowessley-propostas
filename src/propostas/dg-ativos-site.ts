import type { PropostaData } from '../types/proposta'
import { SOBRE_PADRAO, encerramentoPadrao, TITULO_PAGINA_INICIAL } from '../lib/copy-padrao'

export const dgAtivosSite: PropostaData = {
  slug: 'dg-ativos-site',
  cliente: 'DG Ativos Imobiliários',
  segmento: 'Inteligência e gestão de ativos imobiliários, Joinville/SC',
  servico: 'Site institucional e modelo de pós-entrega',
  responsavel: 'The Lovers Company',
  validade: '2026-08-27',
  envio: '2026-08-20',
  intro_capa:
    'O site já está acertado e em produção. Este documento existe para resolver a decisão que vem depois dele: quem mexe no site quando ele estiver no ar. São dois modelos possíveis, com escopo, limite e investimento de cada um.',
  valor: {
    principal: 1000,
    moeda: 'BRL',
  },
  ctaWhatsapp: 'Definir o modelo de pós-entrega',

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
        'O site é a parte previsível. O que decide o custo dos próximos dois anos é outra coisa: quando o Daniel quiser publicar um imóvel novo, subir um report ou trocar uma foto, ele faz sozinho ou depende de alguém. Essa decisão precisa ser tomada agora, não depois da entrega.',
      entregas: [
        'Uma marca institucional que não se parece com imobiliária tradicional',
        'Cada ativo apresentado como decisão patrimonial, não como anúncio de imóvel',
        'Um endereço fixo para os reports do DG Intelligence e para a captação de contatos',
        'Estrutura pronta para receber o catálogo de imóveis quando o conteúdo chegar',
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
            titulo: 'Publicação no domínio novo',
            descricao:
              'Site no ar em dgativos.com.br, com certificado de segurança, e-mail profissional no domínio e medição de acesso configurada.',
            limite: '2 rodadas de revisão inclusas',
          },
        ],
      },
      {
        numero: '03',
        titulo: 'Autonomia do cliente',
        periodo: 'EXCLUSIVO DO MODELO B',
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
            titulo: 'Treinamento e transferência',
            descricao:
              'Vídeo curto mostrando como trocar foto, editar texto e publicar imóvel, mais a passagem de todos os acessos para o nome do cliente.',
          },
        ],
      },
    ],
    planos: [
      {
        nome: 'Site Institucional',
        resumo: 'Já acertado e em produção',
        itens: [
          'Seis páginas: inicial, DG Ativos, Negócios e Ativos, Insights, Curadoria de Imóveis e DG Intelligence',
          'Identidade da marca aplicada, com as fontes e a paleta oficiais',
          'Responsivo em celular, tablet e computador',
          'Formulário de captação do DG Intelligence funcionando',
          'Publicação no domínio novo, com e-mail profissional e medição de acesso',
          '2 rodadas de revisão inclusas',
        ],
        valor: 1000,
        periodo: 'entrega única',
        rodape: 'Valor já combinado. Os modelos ao lado são a decisão que falta',
      },
      {
        nome: 'Modelo A: Gestão contínua',
        resumo: 'Quem mexe no site sou eu',
        itens: [
          'Até 4 alterações de conteúdo por mês (texto, foto, imóvel novo, report novo)',
          'Monitoramento do site, com aviso antes do cliente perceber qualquer queda',
          'Cópia de segurança e atualizações técnicas por conta minha',
          'Relatório trimestral de acesso e desempenho',
          'Prioridade de agenda, resposta em até 2 dias úteis',
          'Sem permanência: cancela quando quiser',
        ],
        valor: 297,
        periodo: '/mês',
        rodape: 'Sem plano, alteração avulsa custa R$ 150 por hora técnica',
      },
      {
        nome: 'Modelo B: Autonomia total',
        destaque: true,
        resumo: 'Quem mexe no site é o cliente',
        itens: [
          'Painel de edição dentro do próprio site, com login do cliente',
          'Coleções de imóveis, reports e insights prontas para receber item novo',
          'Troca de foto e edição de texto em qualquer página',
          'Seis tipos de bloco para adicionar, remover e reordenar',
          'Foto pesada da câmera é otimizada sozinha na publicação',
          'Vídeo de treinamento e transferência de todos os acessos',
        ],
        valor: 997,
        periodo: 'entrega única',
        rodape: 'Sem mensalidade. Suporte pontual, se precisar, a R$ 150 por hora técnica',
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
        texto: 'O painel de autonomia do Modelo B é entregue na semana seguinte à publicação do site, para não disputar prazo com a entrega de agosto.',
        bold: 'na semana seguinte à publicação',
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
        ],
      },
      {
        titulo: 'Contas e Pós-entrega',
        itens: [
          'Domínio, hospedagem, ferramenta de e-mail e demais serviços são registrados em nome do cliente, que é o titular de tudo desde o primeiro dia.',
          'Custos de terceiros (registro de domínio, licença de fonte, planos pagos) não estão inclusos no valor do site.',
          'O cliente declara ter os direitos de uso dos textos, imagens, logotipo e fontes que fornecer.',
          'A garantia técnica é de 30 dias e cobre defeito de funcionamento, não mudança de conteúdo nem de opinião.',
          'No Modelo B, alteração feita pelo cliente no painel é de responsabilidade dele. Correção do que ele alterar é suporte avulso.',
          'Depois da transferência dos acessos, a disponibilidade e a renovação dos serviços passam a ser do cliente.',
        ],
      },
    ],
    pagamento: {
      blocos: [
        {
          titulo: 'Site Institucional',
          descricao: 'R$ 1.000 em duas parcelas de R$ 500: a primeira na assinatura do contrato, a segunda na entrega do site no ar.',
        },
        {
          titulo: 'Modelo A: Gestão contínua',
          descricao: 'R$ 297 por mês, cobrados no início de cada ciclo, a partir do mês seguinte à publicação. Sem permanência.',
        },
        {
          titulo: 'Modelo B: Autonomia total',
          descricao: 'R$ 997 em parcela única, cobrados na entrega do painel e do treinamento. Sem mensalidade depois disso.',
        },
        {
          titulo: 'Fora do escopo',
          descricao: 'Item novo fora do combinado: R$ 200 cada. Suporte pontual sem plano de gestão: R$ 150 por hora técnica.',
        },
      ],
      meios: [
        { nome: 'Pix', detalhe: 'Transferência instantânea' },
        { nome: 'Transferência', detalhe: 'Depósito em conta corrente' },
      ],
    },
    faq: [
      {
        pergunta: 'Na prática, o que muda entre o Modelo A e o Modelo B?',
        resposta:
          'Muda quem tem a chave. No Modelo A o site é entregue pronto e toda alteração passa por mim, o que garante que nada quebra e que o padrão visual se mantém, com custo mensal previsível. No Modelo B o cliente recebe um painel dentro do próprio site e passa a publicar imóvel, report e texto sozinho, sem mensalidade e sem depender da minha agenda.',
      },
      {
        pergunta: 'No Modelo B, o que exatamente o cliente consegue fazer sozinho?',
        resposta:
          'Trocar qualquer foto, editar qualquer texto, publicar imóvel novo com fotos e descrição, subir report novo do DG Intelligence, escrever um insight e montar página adicionando, removendo e reordenando blocos de uma biblioteca com a cara da marca. Cada alteração fica gravada com histórico, então dá para voltar atrás em qualquer mudança.',
      },
      {
        pergunta: 'E o que ele não vai conseguir fazer?',
        resposta:
          'Criar um layout novo do zero ou um tipo de bloco que ainda não existe. Isso vale para qualquer ferramenta do mercado, inclusive as que prometem o contrário: o que existe é sempre uma biblioteca de peças prontas. Desenho novo continua sendo serviço, orçado à parte.',
      },
      {
        pergunta: 'O cliente precisa saber alguma coisa de tecnologia?',
        resposta:
          'Não. Ele entra num endereço, digita o login e vê uma tela de edição parecida com um formulário. O vídeo de treinamento mostra como trocar uma foto e publicar um imóvel do início ao fim. Nenhuma ferramenta de programação aparece para ele em momento nenhum.',
      },
      {
        pergunta: 'Quanto custa manter o site no ar todo mês?',
        resposta:
          'Só o domínio, cerca de R$ 40 por ano. Hospedagem, e-mail no domínio, painel de edição e captação de contatos rodam em plano gratuito, sem limite de visitas e com uso comercial permitido. Não há mensalidade de plataforma em nenhum dos dois modelos.',
      },
      {
        pergunta: 'Por que as contas ficam no nome do cliente?',
        resposta:
          'Porque o site é dele. Domínio, hospedagem e ferramentas registrados no nome do titular significam que ele nunca fica refém de fornecedor nenhum, inclusive de mim. Vale registrar que o domínio do site atual, danielgomesbrokersc.com.br, está hoje no nome de um terceiro, e é exatamente esse tipo de situação que a estrutura nova evita.',
      },
      {
        pergunta: 'Dá para começar no Modelo A e migrar para o B depois?',
        resposta:
          'Dá, e sem retrabalho. O site já nasce com o conteúdo separado do código justamente por isso: ligar o painel depois é configuração, não reconstrução. O investimento do Modelo B continua o mesmo se for feito depois.',
      },
      {
        pergunta: 'O que acontece se o cliente quebrar alguma coisa no painel?',
        resposta:
          'Cada alteração salva vira uma versão gravada, então dá para voltar ao estado anterior. Se for preciso a minha mão para resolver, é suporte avulso a R$ 150 por hora técnica, ou já está incluso para quem tiver o plano de gestão.',
      },
      {
        pergunta: 'A página de Insights vai puxar o Instagram?',
        resposta:
          'O perfil @dgativos ainda não existe, e o Instagram deixou de permitir incorporar feed de perfil pela via gratuita: hoje exige conta comercial ligada a página do Facebook, ou ferramenta paga. Por isso a página nasce com conteúdo editorial próprio, que também rende mais em busca, e o feed entra depois se a marca quiser.',
      },
    ],
    primeiros_30_dias: [
      'Semana 1: página inicial e institucional prontas em preview, revisão com a agência',
      'Semana 2: seis páginas completas, formulário funcionando e site no ar no domínio novo',
      'Semana 3: painel de edição, coleções e treinamento em vídeo, no Modelo B',
      'Semana 4: catálogo de imóveis populado conforme o conteúdo chegar',
    ],
    confidencialidade:
      'Este documento é confidencial e destinado exclusivamente à DG Ativos Imobiliários e à The Lovers Company. Validade de 7 dias corridos a partir da data de envio. Valores sujeitos a atualização após o vencimento.',
    encerramento: encerramentoPadrao('o que entra em cada modelo, o que muda entre eles e quanto custa cada um'),
  },
  utm_copy: {
    whatsapp: 'Segue o comparativo dos dois modelos de pós-entrega do site da DG Ativos.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
