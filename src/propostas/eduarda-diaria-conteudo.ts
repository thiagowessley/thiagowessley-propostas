import type { PropostaData } from '../types/proposta'
import { SOBRE_PADRAO, encerramentoPadrao } from '../lib/copy-padrao'

export const eduardaDiariaConteudo: PropostaData = {
  slug: 'eduarda-diaria-conteudo',
  cliente: 'Eduarda',
  segmento: 'Nutricionista, emagrecimento e saúde da mulher',
  servico: 'Diária de Conteúdo em Vídeo',
  validade: '2026-07-28',
  envio: '2026-07-21',
  intro_capa: 'Esta proposta apresenta o modelo de diária de conteúdo em vídeo para o seu Instagram: escopo, processo, prazos, condições e investimento.',
  valor: {
    principal: 597,
    moeda: 'BRL',
  },
  mostrarPortfolio: true,
  ctaWhatsapp: 'Reservar minha diária',

  foto_profissional: '/img/thiago-vertical.jpg',
  foto_secundaria: '/img/thiago-horizontal.jpg',

  sobre: SOBRE_PADRAO,

  portfolio: {
    intro: [
      'Nos últimos anos participei de coberturas de evento, vídeos institucionais e produções audiovisuais em diferentes formatos.',
      'Cada um deles somou um repertório: fala direta pra câmera, ritmo de corte e edição pensada pra quem assiste rápido, no feed.',
      'É esse padrão que entra em cada vídeo captado na sua diária mensal.',
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
      problema: 'Manter presença em vídeo o mês inteiro consome duas coisas que não sobram na sua rotina: tempo de gravação e tempo de edição, ambos tirados da agenda de atendimento presencial e online.',
      publico: 'Mulheres em busca de emagrecimento saudável e cuidado com a própria saúde, que te acompanham pelo Instagram antes de fechar a consulta, presencial ou online.',
      desafio: 'Terceirizar a captação e a edição pra um profissional que entrega rápido, sem você precisar aprender a editar, comprar equipamento ou contratar alguém só pra isso.',
      entregas: [
        'Vídeos em volume, sem você precisar gravar ou editar sozinha',
        'Captação e edição terceirizadas, sem contratar funcionário nem virar editora de vídeo',
        'Primeiros vídeos no ar já na 1ª semana, sem fila parada esperando sua agenda',
        'Tempo de atendimento preservado, sem virar produtora de conteúdo em paralelo',
      ],
    },
    fases: [
      {
        numero: '01',
        titulo: 'Planejamento e Pauta',
        periodo: 'ANTES DA DIÁRIA',
        itens: [
          { titulo: 'Repasse de pauta e roteiro', descricao: 'Você chega com os temas e o roteiro prontos: o conhecimento técnico é todo seu.' },
          { titulo: 'Apoio pontual de estrutura', descricao: 'Oriento o que ajuda o vídeo a performar: gancho, tom de voz, gestos e expressão. O conteúdo continua todo seu.' },
          { titulo: 'Agendamento da diária', descricao: 'Data marcada com antecedência, dentro da sua agenda mensal.' },
        ],
      },
      {
        numero: '02',
        titulo: 'Diária de Captação',
        periodo: 'DIA COMBINADO',
        itens: [
          { titulo: 'Captação em vídeo', descricao: 'Uma visita só, no seu espaço ou onde combinarmos, com a câmera rodando o dia inteiro.', limite: 'até 8h corridas, visita única' },
          { titulo: 'Fala direta pra câmera', descricao: 'Conduzo cada gravação pra sair natural e direto ao ponto, sem repetir tomada atrás de tomada.' },
          { titulo: 'Quantos vídeos couberem', descricao: 'O limite é o tempo da diária, não um número fechado de peças. E encerra quando você sentir que já é suficiente, mesmo antes das 8h.' },
        ],
      },
      {
        numero: '03',
        titulo: 'Edição e Entrega',
        periodo: 'APÓS A DIÁRIA',
        itens: [
          { titulo: 'Edição completa', descricao: 'Corte, ritmo e legenda: cada vídeo pronto pra ir direto pro ar.' },
          { titulo: 'Organização por semana', descricao: 'Tudo entregue já separado pro mês, sem você gastar tempo planejando a ordem.' },
          { titulo: 'Entrega escalonada', descricao: 'Por link, em MP4. Os primeiros vídeos chegam enquanto o resto ainda está em edição.', limite: 'primeiros vídeos na 1ª semana' },
        ],
      },
    ],
    planos: [
      {
        nome: 'Mês a Mês',
        resumo: 'Sem prazo fixo',
        itens: [
          '1 diária de captação por mês, até 8h',
          'Quantidade de vídeos livre dentro do tempo da diária',
          'Edição completa de cada vídeo (corte, ritmo, legenda)',
          'Primeiros vídeos já na 1ª semana, restante ao longo do mês',
          'Sem contrato de permanência',
        ],
        valor: 797,
        periodo: '/mês',
        rodape: 'Sem prazo contratado, renovação mês a mês',
      },
      {
        nome: 'Contrato Anual',
        destaque: true,
        resumo: 'Compromisso de 1 ano',
        itens: [
          '1 diária de captação por mês, até 8h',
          'Quantidade de vídeos livre dentro do tempo da diária',
          'Edição completa de cada vídeo (corte, ritmo, legenda)',
          'Primeiros vídeos já na 1ª semana, restante ao longo do mês',
          'Contrato de permanência de 12 meses',
        ],
        valor: 597,
        periodo: '/mês',
        rodape: 'Valor fixo durante os 12 meses de contrato',
      },
      {
        nome: 'Diária Extra',
        resumo: 'Entrega acelerada',
        itens: [
          'Mesmo bloco de até 8h de captação e edição completa',
          'Soma ao plano contratado, quantas vezes precisar no mês',
          'Inclui atendimento em plantão de fim de semana',
          'Entrega acelerada: todos os vídeos prontos em até 7 dias úteis',
          'Ideal pra lançamento, campanha ou data especial',
        ],
        valor: 1497,
        periodo: 'diária extra',
        rodape: 'Prioridade na agenda por já ser cliente do plano mensal ou anual',
      },
    ],
    prazos: [
      { texto: 'No contrato anual, a permanência é de 12 meses, contada a partir da primeira diária.', bold: 'permanência é de 12 meses' },
      { texto: 'A diária mensal é agendada com antecedência mínima de 5 dias úteis, conforme disponibilidade.', bold: 'antecedência mínima de 5 dias úteis' },
      { texto: 'Os primeiros vídeos são entregues já na primeira semana após a diária; o restante segue em edição e chega ao longo do mês.', bold: 'já na primeira semana' },
      { texto: 'Na diária extra, a entrega é acelerada: todos os vídeos prontos em até 7 dias úteis, sem esperar o restante do mês.', bold: 'entrega é acelerada' },
      { texto: 'Diárias extras entram na agenda com prioridade, por você já ser cliente do plano mensal ou anual.', bold: 'com prioridade' },
    ],
    contrato: [
      {
        titulo: 'Contrato e Entrega',
        itens: [
          'O pagamento é cobrado no início de cada ciclo, para reserva da agenda.',
          'A entrega dos vídeos editados é feita por link, organizada por semana.',
          'No contrato anual, a permanência é de 12 meses.',
          'Cancelamento antecipado no contrato anual gera multa de 50% sobre as mensalidades restantes até completar o contrato.',
          'No plano mês a mês, não há permanência contratada nem multa de cancelamento.',
        ],
      },
      {
        titulo: 'Condições Gerais',
        itens: [
          'A diária é uma visita única e contínua de até 8h corridas, sem fracionamento em mais de um encontro no mesmo dia. Encerrar antes do tempo não gera crédito nem horas a compensar em outra data.',
          'Diária fora de Joinville e região: valor ajustado conforme deslocamento, combinado à parte.',
          'A trilha sonora usada nas edições é licenciada, sem risco de direito autoral.',
          'O roteiro e o conteúdo técnico de cada vídeo são de sua responsabilidade. Orientação pontual sobre estrutura, gancho, tom de voz, gestos e expressão pode ser oferecida quando necessário, mas não é escopo contratado.',
        ],
      },
    ],
    pagamento: {
      blocos: [
        { titulo: 'Mensalidade', descricao: 'Cobrada no início de cada ciclo, via Pix ou transferência. Inclui 1 diária por mês.' },
        { titulo: 'Diária Extra', descricao: 'R$ 1.497 por diária avulsa além da já incluída no mês, cobrada na data da captação. Inclui plantão de fim de semana e entrega acelerada, em até 7 dias úteis.' },
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
        pergunta: 'Quantos vídeos eu recebo por diária?',
        resposta: 'Não tem número fechado. A diária é um bloco de até 8h de captação: quantos vídeos couberem nesse tempo, todos editados e prontos pra postar.',
      },
      {
        pergunta: 'A diária pode ser dividida, tipo manhã e tarde em datas ou horários diferentes?',
        resposta: 'Não. A diária é uma visita única e contínua, de até 8h corridas. Isso mantém o formato de prestação de serviço combinado, e não uma disponibilidade fracionada ao longo do dia.',
      },
      {
        pergunta: 'E se a diária acabar antes das 8h?',
        resposta: 'Sem problema. A diária encerra quando você sentir que já é suficiente. Como é um bloco fechado, encerrar antes do tempo não gera crédito nem horas a compensar em outra data.',
      },
      {
        pergunta: 'Posso ter mais de uma diária no mesmo mês?',
        resposta: 'Sim. O plano já inclui 1 diária por mês. Cada diária extra que você precisar custa R$ 1.497, com prioridade na agenda por você já ser cliente, entrega acelerada em até 7 dias úteis e cobertura de plantão de fim de semana, pra lançamento, campanha ou data especial.',
      },
      {
        pergunta: 'Quem escreve o roteiro dos vídeos?',
        resposta: 'O roteiro e o conteúdo técnico são responsabilidade sua, como especialista. Se precisar de uma orientação pontual sobre estrutura, gancho, tom de voz, gestos ou expressão pra o vídeo performar melhor, eu ajudo, mas isso não é escopo contratado.',
      },
      {
        pergunta: 'Existe fidelidade no contrato?',
        resposta: 'Depende do plano. No mês a mês não há permanência contratada. No contrato anual existe permanência de 12 meses, com multa de 50% sobre as mensalidades restantes em caso de cancelamento antecipado.',
      },
    ],
    primeiros_30_dias: [
      'Semana 1: pauta do mês e agendamento da diária',
      'Semana 2: diária de captação e início da edição',
      'Semana 3: primeiros vídeos entregues e publicados',
      'Semana 4: restante do conteúdo entregue, mês coberto',
    ],
    confidencialidade: 'Esta proposta é confidencial e destinada exclusivamente a você. Validade de 7 dias corridos a partir da data de envio. Preços sujeitos a atualização após o vencimento.',
    encerramento: encerramentoPadrao('o escopo, o processo e o investimento'),
  },
  utm_copy: {
    whatsapp: 'Eduarda, segue a proposta da diária de conteúdo em vídeo pro seu Instagram.',
    default: '',
  },
  contato: {
    whatsapp: '5547992358161',
    email: 'contato@thiagowessley.com.br',
    instagram: '@thiagowessley',
  },
}
