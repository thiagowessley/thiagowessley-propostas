import type { PropostaData } from '../types/proposta'
import { SOBRE_PADRAO, encerramentoPadrao } from '../lib/copy-padrao'

export const valensProducaoConteudo: PropostaData = {
  slug: 'valens-producao-conteudo',
  cliente: 'Valens Academy',
  segmento: 'Aceleradora de negócios femininos, Joinville/SC',
  servico: 'Produção de Conteúdo em Vídeo',
  responsavel: 'Tamyres Petry',
  validade: '2026-08-24',
  envio: '2026-08-17',
  intro_capa: 'Esta proposta apresenta os dois modelos de produção de conteúdo em vídeo pro Instagram da Valens Academy: diária completa (captação e edição) e pacote só de edição, com escopo, processo, prazos, condições e investimento de cada um.',
  valor: {
    principal: 797,
    moeda: 'BRL',
  },
  mostrarPortfolio: true,
  ctaWhatsapp: 'Fechar a produção de conteúdo',

  foto_profissional: '/img/thiago-vertical.jpg',
  foto_secundaria: '/img/thiago-horizontal.jpg',

  sobre: SOBRE_PADRAO,

  portfolio: {
    intro: [
      'Nos últimos anos participei de coberturas de evento, vídeos institucionais e produções audiovisuais em diferentes formatos.',
      'Cada um deles somou um repertório: fala direta pra câmera, cobertura de evento corporativo e edição pensada pra quem assiste rápido, no feed.',
      'É esse padrão que entra em cada vídeo captado ou editado pro Instagram da Valens.',
    ],
    link: { label: 'Ver portfólio completo', url: 'https://thiagowessley.com.br/' },
    itens: [
      { titulo: 'Dimas Neto', categoria: 'Depoimento em vídeo', imagem: '/img/portfolio/p9.jpg' },
      { titulo: 'Type Family', categoria: 'Entrevista', imagem: '/img/portfolio/type-family.jpg' },
      { titulo: 'Rolf Colin Corporate', categoria: 'Aftermovie institucional', imagem: '/img/portfolio/p7.webp' },
      { titulo: 'App Serasa', categoria: 'Divulgação de App', imagem: '/img/portfolio/app-serasa.jpg' },
      { titulo: 'Jantar Corporativo', categoria: 'Cobertura de evento', imagem: '/img/portfolio/p4.webp' },
      { titulo: 'Making Of', categoria: 'Bastidores de captação', imagem: '/img/portfolio/p1.webp' },
    ],
  },

  secoes: {
    cenario: {
      problema: 'A Valens Academy sustenta o Método Pulsar, o Clube VAL$ e uma agenda de eventos e imersões em Joinville, tudo isso disputando o mesmo tempo que deveria manter o Instagram ativo com vídeo educativo em volume constante.',
      publico: 'Mulheres empresárias e empreendedoras em busca de estrutura antes de escalar o próprio negócio, que acompanham a Valens pelo Instagram antes de entrar numa imersão, mentoria ou no Clube VAL$.',
      desafio: 'Sustentar presença em vídeo educativo o mês inteiro sem tirar o time da operação de eventos, mentoria e coworking pra virar produtora de conteúdo em paralelo.',
      entregas: [
        'Vídeos em volume, com o Método Pulsar e os bastidores da Valens sempre no ar',
        'Captação e edição terceirizadas, sem contratar equipe própria de conteúdo',
        'Modelo flexível: diária completa quando precisar gravar, ou só edição quando o material já existe',
        'Primeiros vídeos no ar já na 1ª semana, sem fila parada esperando agenda',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'Planejamento e Pauta',
        periodo: 'ANTES DA DIÁRIA',
        itens: [
          { titulo: 'Repasse de pauta e roteiro', descricao: 'A Valens chega com os temas e o roteiro prontos: o Método Pulsar e o conteúdo técnico são todos de vocês.' },
          { titulo: 'Apoio pontual de estrutura', descricao: 'Oriento o que ajuda o vídeo a performar: gancho, tom de voz, gestos e expressão. O conteúdo continua todo de vocês.' },
          { titulo: 'Agendamento da diária', descricao: 'Data marcada com antecedência, dentro da agenda mensal.' },
        ],
      },
      {
        numero: '02',
        titulo: 'Diária de Captação',
        periodo: 'DIA COMBINADO',
        itens: [
          { titulo: 'Captação em vídeo', descricao: 'Uma visita só, no espaço que combinarmos, com a câmera rodando o dia inteiro.', limite: 'visita única e contínua' },
          { titulo: 'Fala direta pra câmera', descricao: 'Conduzo cada gravação pra sair natural e direto ao ponto, sem repetir tomada atrás de tomada.' },
          { titulo: 'Quantos vídeos couberem', descricao: 'O limite é o tempo da diária, não um número fechado de peças. Encerra quando vocês sentirem que já é suficiente.' },
        ],
      },
      {
        numero: '03',
        titulo: 'Edição e Entrega',
        periodo: 'APÓS A DIÁRIA',
        itens: [
          { titulo: 'Edição completa', descricao: 'Corte, ritmo e legenda: cada vídeo pronto pra ir direto pro ar.' },
          { titulo: 'Organização por semana', descricao: 'Tudo entregue já separado pro mês, sem vocês gastarem tempo planejando a ordem.' },
          { titulo: 'Entrega escalonada', descricao: 'Por link, em MP4. Os primeiros vídeos chegam enquanto o resto ainda está em edição.', limite: 'primeiros vídeos na 1ª semana' },
        ],
      },
    ],
    planos: [
      {
        nome: 'Diária Mês a Mês',
        resumo: 'Captação + edição, sem prazo fixo',
        itens: [
          '1 diária de captação por mês, visita única',
          'Quantidade de vídeos livre dentro do tempo da diária',
          'Edição completa de cada vídeo (corte, ritmo, legenda)',
          'Primeiros vídeos já na 1ª semana, restante ao longo do mês',
          'Sem contrato de permanência',
        ],
        valor: 997,
        periodo: '/mês',
        rodape: 'Sem prazo contratado, renovação mês a mês',
      },
      {
        nome: 'Diária Anual',
        destaque: true,
        resumo: 'Captação + edição, plano anual',
        itens: [
          '1 diária de captação por mês, visita única',
          'Quantidade de vídeos livre dentro do tempo da diária',
          'Edição completa de cada vídeo (corte, ritmo, legenda)',
          'Primeiros vídeos já na 1ª semana, restante ao longo do mês',
          'Contrato de permanência de 12 meses',
        ],
        valor: 797,
        periodo: '/mês',
        rodape: 'Valor fixo durante os 12 meses de contrato',
      },
      {
        nome: 'Diária Extra',
        resumo: 'Entrega acelerada',
        itens: [
          'Mesma diária completa de captação e edição',
          'Soma ao plano contratado, quantas vezes precisar no mês',
          'Inclui atendimento em plantão de fim de semana',
          'Entrega acelerada: todos os vídeos prontos em até 7 dias úteis',
          'Ideal pra evento, imersão ou lançamento do Clube VAL$',
        ],
        valor: 1497,
        periodo: 'diária extra',
        rodape: 'Prioridade na agenda por já ser cliente do plano mensal ou anual',
      },
      {
        nome: 'Edição Simples',
        resumo: 'Vocês gravam, eu edito',
        itens: [
          'Corte, ritmo, legenda, correção de cor e transição',
          'Pacote de até 10 vídeos por mês',
          'Entrega em MP4, pronta pra postar',
          '1 rodada de ajuste por vídeo (corte de fala e legenda)',
          'Sem diária de captação: o material bruto é enviado por vocês',
        ],
        valor: 247,
        periodo: '/mês (pacote de 10 vídeos)',
        rodape: 'Vídeo avulso fora do pacote: R$ 30 cada',
      },
      {
        nome: 'Edição Avançada',
        resumo: 'Vocês gravam, eu edito',
        itens: [
          'Tudo da edição simples, mais efeitos sonoros, animação e b-roll',
          'Pacote de até 10 vídeos por mês',
          'Entrega em MP4, pronta pra postar',
          '1 rodada de ajuste por vídeo (corte de fala e legenda)',
          'Sem diária de captação: o material bruto é enviado por vocês',
        ],
        valor: 697,
        periodo: '/mês (pacote de 10 vídeos)',
        rodape: 'Vídeo avulso fora do pacote: R$ 79 cada',
      },
    ],
    prazos: [
      { texto: 'No contrato anual, a permanência é de 12 meses, contada a partir da primeira diária.', bold: 'permanência é de 12 meses' },
      { texto: 'A diária mensal é agendada com antecedência mínima de 5 dias úteis, conforme disponibilidade.', bold: 'antecedência mínima de 5 dias úteis' },
      { texto: 'Os primeiros vídeos são entregues já na primeira semana após a diária; o restante segue em edição e chega ao longo do mês.', bold: 'já na primeira semana' },
      { texto: 'Na diária extra, a entrega é acelerada: todos os vídeos prontos em até 7 dias úteis, sem esperar o restante do mês.', bold: 'entrega é acelerada' },
      { texto: 'No pacote de edição, o prazo é de até 7 dias úteis por lote de até 10 vídeos, contado a partir do recebimento do material bruto.', bold: 'até 7 dias úteis' },
    ],
    contrato: [
      {
        titulo: 'Contrato e Entrega',
        itens: [
          'O pagamento é cobrado no início de cada ciclo, para reserva da agenda ou da vaga de edição.',
          'A entrega dos vídeos é feita por link, organizada por semana ou por lote.',
          'No contrato anual, a permanência é de 12 meses.',
          'Cancelamento antecipado no contrato anual gera multa de 50% sobre as mensalidades restantes até completar o contrato.',
          'No plano mês a mês e no pacote de edição, não há permanência contratada nem multa de cancelamento.',
        ],
      },
      {
        titulo: 'Condições Gerais',
        itens: [
          'A diária é uma visita única e contínua, sem fracionamento em mais de um encontro no mesmo dia. Encerrar antes do tempo não gera crédito nem horas a compensar em outra data.',
          'Diária fora de Joinville e região: valor ajustado conforme deslocamento, combinado à parte.',
          'A trilha sonora usada nas edições é licenciada, sem risco de direito autoral. Uma vez aprovada, não pode ser trocada sem orçamento novo.',
          'O roteiro e o conteúdo técnico de cada vídeo (Método Pulsar, metodologia, pautas) são de responsabilidade da Valens.',
          'No pacote de edição, a qualidade de áudio e imagem do material bruto enviado é de responsabilidade da Valens.',
          'Cada vídeo tem direito a 1 rodada de ajuste, limitada a corte de fala já gravada e ajuste de legenda. Nova captação, nova cena ou troca de trilha são orçadas à parte.',
        ],
      },
    ],
    pagamento: {
      blocos: [
        { titulo: 'Mensalidade Diária', descricao: 'Cobrada no início de cada ciclo, via Pix ou transferência. Inclui 1 diária por mês.' },
        { titulo: 'Diária Extra', descricao: 'R$ 1.497 por diária avulsa além da já incluída no mês, cobrada na data da captação.' },
        { titulo: 'Pacote de Edição', descricao: 'Cobrado no início de cada ciclo, conforme o pacote escolhido (simples ou avançada). Sem diária de captação inclusa.' },
        { titulo: 'Vídeo Avulso', descricao: 'Fora do pacote de edição: R$ 30 (simples) ou R$ 79 (avançada), cobrado por vídeo entregue.' },
      ],
      meios: [
        { nome: 'Pix', detalhe: 'Transferência instantânea' },
        { nome: 'Transferência', detalhe: 'Depósito em conta corrente' },
      ],
    },
    referencias: [
      {
        nome: 'Camila Farani (Brasil)',
        url: 'https://www.instagram.com/camilafarani/',
        tecnica: '1,1 milhão de seguidores construídos em cima de uma escola de negócios própria (Farani Escola de Negócios) e presença constante como investidora do Shark Tank Brasil, com funil de diagnóstico de crescimento levando direto ao produto. Aplicação: o mesmo formato, conteúdo educativo em vídeo sustentando a autoridade de uma escola de negócios, é o padrão que entra no conteúdo do Método Pulsar e do Clube VAL$.',
      },
      {
        nome: 'Nathalia Arcuri (Brasil)',
        url: 'https://www.instagram.com/nathaliaarcuri/',
        tecnica: '3,5 milhões de seguidores construídos em educação financeira pra mulheres, com volume constante de vídeo em torno do mesmo tema técnico. Aplicação: mesmo em nicho técnico como estrutura e maturidade empresarial, volume consistente de vídeo educativo é o que constrói audiência e autoridade ao longo do tempo.',
      },
    ],
    faq: [
      {
        pergunta: 'Qual a diferença entre a diária completa e o pacote só edição?',
        resposta: 'Na diária completa eu capto e edito no mesmo dia: o valor mensal já inclui 1 diária, visita única. No pacote só edição, vocês já gravam o material (evento, imersão, bastidor) e me enviam bruto: eu só edito, cobrado por pacote mensal de até 10 vídeos ou por vídeo avulso.',
      },
      {
        pergunta: 'Quantos vídeos vocês recebem por diária?',
        resposta: 'Não tem número fechado. A diária é uma visita única de captação: quantos vídeos couberem no dia, todos editados e prontos pra postar.',
      },
      {
        pergunta: 'A diária pode ser dividida, tipo manhã e tarde em datas ou horários diferentes?',
        resposta: 'Não. A diária é uma visita única e contínua. Isso mantém o formato de prestação de serviço combinado, e não uma disponibilidade fracionada ao longo do dia.',
      },
      {
        pergunta: 'E se a diária acabar mais cedo?',
        resposta: 'Sem problema. A diária encerra quando vocês sentirem que já é suficiente. Como é um bloco fechado, encerrar antes do tempo não gera crédito nem horas a compensar em outra data.',
      },
      {
        pergunta: 'Dá pra ter mais de uma diária no mesmo mês?',
        resposta: 'Sim. O plano já inclui 1 diária por mês. Cada diária extra que precisarem custa R$ 1.497, com prioridade na agenda por já serem clientes, entrega acelerada em até 7 dias úteis e cobertura de plantão de fim de semana, pra evento, imersão ou lançamento.',
      },
      {
        pergunta: 'Quem escreve o roteiro dos vídeos?',
        resposta: 'O roteiro e o conteúdo técnico são responsabilidade da Valens, como especialista no Método Pulsar. Se precisarem de uma orientação pontual sobre estrutura, gancho, tom de voz, gestos ou expressão pro vídeo performar melhor, eu ajudo, mas isso não é escopo contratado.',
      },
      {
        pergunta: 'Existe fidelidade no contrato?',
        resposta: 'Depende do plano. No mês a mês e no pacote de edição não há permanência contratada. No contrato anual da diária existe permanência de 12 meses, com multa de 50% sobre as mensalidades restantes em caso de cancelamento antecipado.',
      },
    ],
    primeiros_30_dias: [
      'Semana 1: pauta do mês e agendamento da diária',
      'Semana 2: diária de captação e início da edição',
      'Semana 3: primeiros vídeos entregues e publicados',
      'Semana 4: restante do conteúdo entregue, mês coberto',
    ],
    confidencialidade: 'Esta proposta é confidencial e destinada exclusivamente à Valens Academy. Validade de 7 dias corridos a partir da data de envio. Preços sujeitos a atualização após o vencimento.',
    encerramento: encerramentoPadrao('o escopo, o processo e o investimento'),
  },
  utm_copy: {
    whatsapp: 'Segue a proposta de produção de conteúdo em vídeo pra Valens Academy.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
