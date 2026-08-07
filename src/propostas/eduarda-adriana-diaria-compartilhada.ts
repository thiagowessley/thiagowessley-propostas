import type { PropostaData } from '../types/proposta'
import { SOBRE_PADRAO, encerramentoPadrao } from '../lib/copy-padrao'

export const eduardaAdrianaDiariaCompartilhada: PropostaData = {
  slug: 'eduarda-adriana-diaria-compartilhada',
  cliente: 'Maria Eduarda Longatto e Adriana Schatz',
  segmento: 'Nutrição e Organização Pessoal',
  servico: 'Diária de Conteúdo em Vídeo Compartilhada',
  validade: '2026-08-14',
  envio: '2026-08-07',
  intro_capa: 'Esta proposta apresenta o modelo de diária de conteúdo em vídeo compartilhada entre vocês duas: escopo, processo, prazos, condições e investimento individual de cada uma.',
  valor: {
    principal: 498.5,
    moeda: 'BRL',
  },
  mostrarPortfolio: true,
  ctaWhatsapp: 'Reservar nossa diária',

  foto_profissional: '/img/thiago-vertical.jpg',
  foto_secundaria: '/img/thiago-horizontal.jpg',

  sobre: SOBRE_PADRAO,

  portfolio: {
    intro: [
      'Nos últimos anos participei de coberturas de evento, vídeos institucionais e produções audiovisuais em diferentes formatos.',
      'Cada um deles somou um repertório: fala direta pra câmera, ritmo de corte e edição pensada pra quem assiste rápido, no feed.',
      'É esse padrão que entra em cada vídeo captado na diária compartilhada de vocês duas.',
    ],
    link: { label: 'Ver portfólio completo', url: 'https://thiagowessley.com.br/' },
    itens: [
      { titulo: 'Camila Oliveira', categoria: 'Nutricionista', imagem: '/img/portfolio/camila-oliveira.jpg' },
      { titulo: 'Natalia Merheb', categoria: 'Dermatologista', imagem: '/img/portfolio/natalia-merheb.jpg' },
      { titulo: 'Patricia Gurgel', categoria: 'Cirurgiã Ginecológica', imagem: '/img/portfolio/patricia-gurgel.jpg' },
      { titulo: 'App Serasa', categoria: 'Divulgação de App', imagem: '/img/portfolio/app-serasa.jpg' },
      { titulo: 'Type Family', categoria: 'Entrevista', imagem: '/img/portfolio/type-family.jpg' },
      { titulo: 'Dart 316', categoria: 'Show ao vivo', imagem: '/img/portfolio/p2.webp' },
      { titulo: 'Rooftop Garden', categoria: 'Evento social', imagem: '/img/portfolio/p3.webp' },
      { titulo: 'Casa Calantti', categoria: 'Cobertura de evento', imagem: '/img/portfolio/p5.webp' },
      { titulo: 'Dimas Neto', categoria: 'Depoimento em vídeo', imagem: '/img/portfolio/p9.jpg' },
      { titulo: 'Making Of', categoria: 'Bastidores de captação', imagem: '/img/portfolio/p1.webp' },
      { titulo: 'Rolf Colin Corporate', categoria: 'Aftermovie institucional', imagem: '/img/portfolio/p7.webp' },
    ],
  },

  secoes: {
    cenario: {
      problema: 'Manter presença em vídeo o mês inteiro consome tempo de gravação e tempo de edição.',
      publico: 'Pacientes e clientes que acompanham cada uma de vocês pelo Instagram antes de fechar consulta ou mentoria, seja em nutrição ou em organização pessoal.',
      desafio: 'Dividir uma única diária entre as duas, sem abrir mão da edição completa e sem pagar o valor de duas diárias inteiras.',
      entregas: [
        'Uma diária só, em um único período, com vídeos pra vocês duas',
        'Vídeos em volume para os dois perfis, sem gravar ou editar sozinhas',
        'Primeiros vídeos no ar na 1ª semana após as gravações, para os dois Instagram',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'Planejamento e Pauta',
        periodo: 'ANTES DA DIÁRIA',
        itens: [
          { titulo: 'Repasse de pauta e roteiro', descricao: 'Cada uma chega com os temas e o roteiro prontos: o conhecimento técnico de cada área continua todo seu.' },
          { titulo: 'Apoio pontual de estrutura', descricao: 'Oriento o que ajuda o vídeo a performar: gancho, tom de voz, gestos e expressão. O conteúdo continua todo seu.' },
          { titulo: 'Agendamento da diária', descricao: 'Data marcada com antecedência, dentro da agenda mensal das duas.' },
        ],
      },
      {
        numero: '02',
        titulo: 'Diária de Captação',
        periodo: 'DIA COMBINADO',
        itens: [
          { titulo: 'Captação em vídeo', descricao: 'Uma única visita, no consultório/escritório de vocês, com a câmera rodando', limite: 'até 8h corridas, em horário único' },
          { titulo: 'Quantos vídeos couberem no tempo', descricao: 'O limite é o tempo da diária, não um número fechado de peças, dividido entre vocês duas.', limite: 'tipicamente até 10 vídeos por pessoa' },
        ],
      },
      {
        numero: '03',
        titulo: 'Edição e Entrega',
        periodo: 'APÓS A DIÁRIA',
        itens: [
          { titulo: 'Edição completa', descricao: 'Corte, ritmo e legenda: cada vídeo pronto pra ir direto pro ar, no perfil de cada uma.' },
          { titulo: 'Organização por semana', descricao: 'Tudo entregue já separado pro mês, sem vocês gastarem tempo planejando a ordem.' },
          { titulo: 'Entrega escalonada', descricao: 'Por link, em MP4, separado por perfil. Os primeiros vídeos chegam enquanto o resto ainda está em edição.', limite: 'primeiros vídeos na 1ª semana' },
        ],
      },
    ],
    planos: [
      {
        nome: 'Diária Compartilhada',
        resumo: 'Compromisso de 1 ano, dividido entre as duas',
        itens: [
          '1 diária de captação por mês, até 8h, em horário único',
          'Vídeos livres dentro do tempo da diária (tipicamente até 10 por pessoa)',
          'Edição completa de cada vídeo (corte, ritmo, legenda)',
          'Primeiros vídeos já na 1ª semana, restante ao longo do mês',
          'Contrato de permanência de 12 meses',
        ],
        valor: 498.5,
        periodo: '/mês cada',
        rodape: 'R$ 997/mês combinado. Cobrança individual: cada uma paga sua parte separadamente',
      },
      {
        nome: 'Diária Extra Compartilhada',
        resumo: 'Quando precisarem de mais um dia de captação',
        itens: [
          'Mesmo bloco de até 8h de captação e edição completa',
          'Para quando precisarem de mais de uma diária de captação no mês',
          'Disponível em fim de semana, feriado ou plantão, quando for o caso',
          'Entrega acelerada: todos os vídeos prontos em até 7 dias úteis',
          'Ideal pra lançamento, campanha ou data especial de qualquer uma das duas',
        ],
        valor: 1497,
        periodo: 'diária extra combinada',
        rodape: 'Prioridade na agenda por já serem clientes do plano compartilhado',
      },
    ],
    prazos: [
      { texto: 'A permanência é de 12 meses, contada a partir da primeira diária. Não há opção mês a mês nesse formato compartilhado.', bold: 'permanência é de 12 meses' },
      { texto: 'A diária mensal é agendada com antecedência mínima de 5 dias úteis, conforme disponibilidade das duas.', bold: 'antecedência mínima de 5 dias úteis' },
      { texto: 'Os primeiros vídeos são entregues já na primeira semana após a diária; o restante segue em edição e chega ao longo do mês.', bold: 'já na primeira semana' },
      { texto: 'Se uma de vocês cancelar o contrato durante a permanência, a outra deixa de ter o valor compartilhado e passa a pagar o valor da diária solo (mês a mês ou anual), ou negocia um novo formato.', bold: 'a outra deixa de ter o valor compartilhado' },
      { texto: 'Na diária extra, a entrega é acelerada: todos os vídeos prontos em até 7 dias úteis, sem esperar o restante do mês.', bold: 'entrega é acelerada' },
    ],
    contrato: [
      {
        titulo: 'Contrato e Entrega',
        itens: [
          'O pagamento é cobrado no início de cada ciclo, para reserva da agenda, separadamente para cada uma.',
          'A entrega dos vídeos editados é feita por link, organizada por semana e por perfil.',
          'A permanência é de 12 meses, única condição disponível nesse formato compartilhado.',
          'Cancelamento antecipado gera multa de 50% sobre as mensalidades restantes até completar o contrato, para quem cancelar.',
          'Se uma de vocês sair do contrato, a outra passa automaticamente a pagar o valor da diária solo (R$ 797/mês ou R$ 597/mês no anual), ou negocia um novo formato.',
        ],
      },
      {
        titulo: 'Condições Gerais',
        itens: [
          'A diária é uma visita única e contínua de até 8h corridas, em horário único, sem fracionamento.',
          'Cada uma paga separadamente, com nota fiscal e responsabilidade contratual próprias, mesmo sendo uma diária só.',
          'Diária fora de Joinville e região: valor ajustado conforme deslocamento, combinado à parte.',
          'A trilha sonora usada nas edições é licenciada, sem risco de direito autoral.',
          'O roteiro e o conteúdo técnico de cada vídeo são de responsabilidade de cada uma, como especialistas em suas áreas. Orientação pontual sobre estrutura, gancho, tom de voz, gestos e expressão pode ser oferecida quando necessário, mas não é escopo contratado.',
        ],
      },
    ],
    pagamento: {
      blocos: [
        { titulo: 'Mensalidade', descricao: 'Cobrada no início de cada ciclo, via Pix ou transferência, separadamente para cada uma: R$ 498,50/mês por pessoa (R$ 997/mês combinado).' },
        { titulo: 'Diária Extra Compartilhada', descricao: 'R$ 1.497 combinado por diária avulsa além da já incluída no mês, pra quando precisarem de mais um dia de captação, inclusive fim de semana, feriado ou plantão. Cobrada na data da captação.' },
        { titulo: 'Pagamento em Cripto', descricao: 'Aceito em USDT (Tether), dólar digital, pela cotação do dia do pagamento. Taxa de rede da transação é por conta de quem envia.' },
      ],
      meios: [
        { nome: 'Pix', detalhe: 'Transferência instantânea' },
        { nome: 'Transferência', detalhe: 'Depósito em conta corrente' },
        { nome: 'USDT (Tether)', detalhe: 'Dólar digital, cotação do dia' },
      ],
    },
    faq: [
      {
        pergunta: 'Como funciona a divisão da diária entre nós duas?',
        resposta: 'A diária é um bloco único de até 8h, no mesmo dia, com as duas presentes durante a captação.',
      },
      {
        pergunta: 'Quantos vídeos cada uma recebe?',
        resposta: 'Não tem número fechado. O limite é o tempo da diária: tipicamente até 10 vídeos por pessoa, todos editados e prontos pra postar no seu perfil.',
      },
      {
        pergunta: 'Existe opção mês a mês, como na diária solo?',
        resposta: 'Não nesse formato. A diária compartilhada só existe com permanência de 12 meses, porque o dia fica reservado pras duas simultaneamente. Quem quiser flexibilidade sem permanência contrata a diária solo.',
      },
      {
        pergunta: 'E se uma de nós quiser parar antes do contrato acabar?',
        resposta: 'Quem cancela paga a multa de 50% sobre as mensalidades restantes. E a outra deixa de ter o valor compartilhado, porque deixa de dividir a diária com outra pessoa: o valor dela vira o da diária solo, mês a mês ou anual, ou vocês combinam um novo formato.',
      },
      {
        pergunta: 'Posso ter mais de uma diária no mesmo mês?',
        resposta: 'Sim. O plano já inclui 1 diária por mês. Cada diária extra compartilhada custa R$ 1.497 combinado, com prioridade na agenda por já serem clientes, entrega acelerada em até 7 dias úteis e disponibilidade em fim de semana, feriado ou plantão, quando for o caso.',
      },
      {
        pergunta: 'Quem escreve o roteiro dos vídeos?',
        resposta: 'O roteiro e o conteúdo técnico são responsabilidade de cada uma, como especialista na sua área. Se precisarem de uma orientação pontual sobre estrutura, gancho, tom de voz, gestos ou expressão, eu ajudo, mas isso não é escopo contratado.',
      },
    ],
    primeiros_30_dias: [
      'Semana 1: diária de captação compartilhada (14/08) e início da edição',
      'Semana 2: primeiros vídeos entregues e publicados, nos dois perfis',
      'Semana 3: restante da edição em andamento',
      'Semana 4: mês coberto para as duas',
    ],
    confidencialidade: 'Esta proposta é confidencial e destinada exclusivamente a vocês duas. Validade de 7 dias corridos a partir da data de envio. Preços sujeitos a atualização após o vencimento.',
    encerramento: encerramentoPadrao('o escopo, o processo e o investimento'),
  },
  utm_copy: {
    whatsapp: 'Eduarda e Adriana, segue a proposta da diária de conteúdo em vídeo compartilhada entre vocês duas.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
