import type { RecorteId } from './modelo-financeiro'

export interface Especificacao {
  rotulo: string
  valor: string
}

export interface ProdutoConteudo {
  id: string
  nome: string
  categoria: string
  animal: string
  papel: string
  imagem?: string
  resumo: string
  problema: string
  porQueInox: string
  especificacoes: Especificacao[]
  referenciaMercado?: string
}

export interface RecorteConteudo {
  id: RecorteId
  titulo: string
  descricao: string
  produtos: string[]
}

export interface Fonte {
  titulo: string
  url: string
  data: string
}

export interface ItemTexto {
  titulo: string
  texto: string
}

export interface LinhaPetConteudo {
  slug: string
  marca: string
  endosso: string
  catalogo: {
    eyebrow: string
    subtitulo: string
    pilares: ItemTexto[]
    comparativo: { criterio: string; plastico: string; inox: string }[]
    fabricacao: ItemTexto[]
    notaFabricacao: string
  }
  recortes: RecorteConteudo[]
  produtos: ProdutoConteudo[]
  plano: {
    eyebrow: string
    subtitulo: string
    mercado: { valor: string; rotulo: string; fonte: string }[]
    mercadoTexto: string[]
    lacuna: string[]
    precisaoTecnica: string[]
    ondeFornoEntra: ItemTexto[]
    cuidadosTecnicos: string[]
    foraDaLinha: ItemTexto[]
    operacao: ItemTexto[]
    custoIntro: string
    quiosqueIntro: string
    fabricanteIntro: string
    riscos: { risco: string; mitigacao: string }[]
    roadmap: { periodo: string; titulo: string; texto: string }[]
    decisoes: string[]
  }
  fontes: Fonte[]
}

export const patasDeAco: LinhaPetConteudo = {
  slug: 'patas-de-aco',
  marca: 'Patas de Aço',
  endosso: 'Uma marca Dassg Têmpera',

  catalogo: {
    eyebrow: 'Catálogo de produtos · Setembro de 2026',
    subtitulo:
      'Móveis para gato e cão em inox 304. Não riscam com o uso, não guardam cheiro e acompanham a vida inteira do animal.',
    pilares: [
      {
        titulo: 'Higiene',
        texto:
          'O plástico risca com a pá e com a unha, e cada risco guarda resíduo e cheiro. O inox 304 com acabamento controlado não é poroso: a lavagem tira o que o plástico retém.',
      },
      {
        titulo: 'Durabilidade',
        texto:
          'Uma peça feita para durar a vida do animal. O custo se dilui ao longo dos anos, em vez de voltar a cada troca, e só os refis são substituídos.',
      },
      {
        titulo: 'Design',
        texto:
          'Linhas limpas, solda invisível e o metal escovado dos eletrodomésticos de alto padrão. Feito para ficar na sala, à vista.',
      },
    ],
    comparativo: [
      { criterio: 'Superfície com o uso', plastico: 'Risca com a pá e com a unha', inox: 'Mantém o acabamento' },
      { criterio: 'Odor', plastico: 'Entra nos riscos e permanece', inox: 'Superfície não porosa, sai na lavagem' },
      { criterio: 'Estrutura', plastico: 'Cede e empena com peso e calor', inox: 'Não deforma sob carga' },
      { criterio: 'Vida útil', plastico: 'Troca periódica', inox: 'Acompanha a vida do animal' },
      { criterio: 'Descarte', plastico: 'A peça inteira vai para o lixo', inox: 'Só os refis são substituídos' },
    ],
    fabricacao: [
      { titulo: 'Corte a laser', texto: 'Chapa de inox 304 cortada com precisão, sem rebarba na borda.' },
      { titulo: 'Dobra', texto: 'Cantos arredondados e dobras sem fresta, onde areia e umidade não ficam presas.' },
      { titulo: 'Solda', texto: 'Solda contínua nos pontos de encontro, sem emenda aberta.' },
      { titulo: 'Acabamento', texto: 'Escovado controlado e passivação, a camada que protege o inox contra corrosão.' },
      { titulo: 'Controle', texto: 'Inspeção com rastreabilidade por lote, no padrão ISO 9001 da Dassg Têmpera.' },
    ],
    notaFabricacao:
      'A higiene prometida depende do acabamento, não só do material. Por isso cada peça passa pelo mesmo controle de processo que a Dassg Têmpera aplica às indústrias automotiva, agrícola e metalmecânica.',
  },

  recortes: [
    {
      id: 'A',
      titulo: 'Só gato',
      descricao:
        'Oito produtos para a casa de quem tem gato. Máxima coerência visual no quiosque e mensagem mais simples de explicar.',
      produtos: ['p01', 'p02', 'p03', 'p04', 'p05', 'p06', 'p07', 'p08'],
    },
    {
      id: 'B',
      titulo: 'Gato e cão',
      descricao:
        'Oito produtos que dividem o quiosque entre os dois públicos. Mais pessoas param em frente ao ponto, ao custo de dobrar o desenvolvimento de produto.',
      produtos: ['p01', 'p03', 'p05', 'p07', 'p09', 'p10', 'p11', 'p08'],
    },
  ],

  produtos: [
    {
      id: 'p01',
      nome: 'Caixa de areia aberta',
      categoria: 'Higiene',
      animal: 'Gato',
      papel: 'Produto-ícone',
      imagem: '/img/linha-pet/01-caixa-areia-aberta.png',
      resumo: 'Borda traseira alta, entrada baixa e alças laterais. A caixa de areia que não precisa ser trocada.',
      problema:
        'A caixa de plástico risca com a pá em poucos meses. O cheiro entra nos riscos e a lavagem deixa de resolver, até a caixa ir para o lixo.',
      porQueInox:
        'Inox 304, a liga preferida em gaiola de biotério por resistir à amônia da urina animal. Não absorve odor, e as dobras de canto arredondado impedem que areia úmida fique presa.',
      especificacoes: [
        { rotulo: 'Material', valor: 'Inox 304 escovado, 0,6 mm' },
        { rotulo: 'Medidas', valor: '55 x 40 x 30 cm' },
        { rotulo: 'Entrada', valor: '13 cm de altura' },
        { rotulo: 'Detalhe', valor: 'Alças vazadas e pés de silicone' },
      ],
      referenciaMercado:
        'Caixa de plástico: R$ 52 a R$ 79. Caixa de inox concorrente: Meau, da Petlove, R$ 229,90 (petlove.com.br, 13/09/2026).',
    },
    {
      id: 'p02',
      nome: 'Caixa de areia com cobertura',
      categoria: 'Higiene',
      animal: 'Gato',
      papel: 'Ticket alto',
      resumo: 'A mesma base da caixa aberta, com cobertura removível para o gato que prefere privacidade.',
      problema:
        'A caixa fechada de plástico concentra o cheiro dentro da cúpula, e muitos tutores acabam tirando a cobertura.',
      porQueInox:
        'Cobertura em inox com ventilação discreta no topo e borda da abertura dobrada para dentro, sem aresta. Sai inteira para lavar.',
      especificacoes: [
        { rotulo: 'Material', valor: 'Inox 304 escovado, 0,6 mm' },
        { rotulo: 'Medidas', valor: '55 x 40 x 45 cm' },
        { rotulo: 'Abertura', valor: 'Frontal, em arco' },
        { rotulo: 'Detalhe', valor: 'Cobertura encaixada e removível' },
      ],
      referenciaMercado:
        'Nos Estados Unidos, caixas fechadas de inox da Furrbby custam de US$ 119,99 a US$ 129,99 (furrbby.com, 13/09/2026).',
    },
    {
      id: 'p03',
      nome: 'Prateleira de parede',
      categoria: 'Estrutura de parede',
      animal: 'Gato',
      papel: 'Produto-ícone',
      imagem: '/img/linha-pet/03-prateleira-parede.png',
      resumo: 'Chapa dobrada com fixação oculta e manta de feltro. O gato ganha altura e a sala não perde espaço.',
      problema:
        'Prateleira de MDF ou madeira cede com o salto repetido de um gato adulto e afrouxa na parede com o tempo.',
      porQueInox:
        'A peça trabalha em balanço e recebe o impacto do salto. A chapa de 1,2 mm dobrada suporta essa carga, e o esforço passa para a fixação, dimensionada à parte.',
      especificacoes: [
        { rotulo: 'Material', valor: 'Inox 304 escovado, 1,2 mm' },
        { rotulo: 'Medidas', valor: '45 x 30 cm' },
        { rotulo: 'Superfície', valor: 'Feltro antiderrapante substituível' },
        { rotulo: 'Fixação', valor: 'Oculta' },
      ],
      referenciaMercado: 'Kit com 3 prateleiras de madeira: R$ 88 a R$ 98 (Buscapé, 13/09/2026).',
    },
    {
      id: 'p04',
      nome: 'Kit de parede: degraus e ponte',
      categoria: 'Estrutura de parede',
      animal: 'Gato',
      papel: 'Ticket alto',
      resumo: 'Um percurso completo de parede: três degraus em diagonal levando a uma ponte suspensa.',
      problema:
        'Em apartamento, o gato precisa de território vertical. Montado com peças avulsas de marcas diferentes, o percurso vira uma parede sem unidade visual.',
      porQueInox:
        'Degraus e apoios em inox, com a mesma fixação da prateleira. A ponte usa ripas de madeira clara presas por cabo de inox, para uma pisada confortável.',
      especificacoes: [
        { rotulo: 'Material', valor: 'Inox 304 escovado e madeira' },
        { rotulo: 'Composição', valor: '3 degraus de 30 cm e ponte de 1 m' },
        { rotulo: 'Superfície', valor: 'Feltro em cada degrau' },
        { rotulo: 'Venda', valor: 'Sistema completo' },
      ],
    },
    {
      id: 'p05',
      nome: 'Arranhador com base pesada',
      categoria: 'Enriquecimento',
      animal: 'Gato',
      papel: 'Entrada e recorrência',
      imagem: '/img/linha-pet/05-arranhador-base-pesada.png',
      resumo: 'Base de chapa pesada que não tomba e poste de sisal que se troca sem trocar a peça.',
      problema:
        'Arranhador leve balança quando o gato estica o corpo inteiro. Com o poste instável, o gato abandona o arranhador e volta para o sofá.',
      porQueInox:
        'A orientação veterinária pede poste firme, sem balanço, com pelo menos 90 cm. A base de 1,5 mm resolve o tombamento, e o sisal continua sendo a superfície, porque é ele que cumpre a função da arranhadura.',
      especificacoes: [
        { rotulo: 'Base', valor: 'Inox 304, 1,5 mm' },
        { rotulo: 'Altura', valor: '90 cm' },
        { rotulo: 'Poste', valor: 'Sisal encaixável e substituível' },
        { rotulo: 'Detalhe', valor: 'Feltro sob a base' },
      ],
      referenciaMercado:
        'Arranhadores com poste de sisal: R$ 39 a R$ 200, o mais caro com base de MDF (Buscapé, 13/09/2026).',
    },
    {
      id: 'p06',
      nome: 'Torre de piso modular',
      categoria: 'Estrutura',
      animal: 'Gato',
      papel: 'Ticket alto',
      resumo: 'Três níveis desencontrados em tubo de inox, com almofadas de bouclê e nicho fechado.',
      problema:
        'A torre de papelão e carpete sai do prumo em poucos meses e vira o móvel que o tutor esconde quando recebe visita.',
      porQueInox:
        'Estrutura tubular que não bambeia com gato grande e aceita troca de almofada e de sisal sem descartar a torre.',
      especificacoes: [
        { rotulo: 'Material', valor: 'Tubo e chapa de inox 304' },
        { rotulo: 'Altura', valor: '150 cm' },
        { rotulo: 'Estofado', valor: 'Almofadas de bouclê removíveis' },
        { rotulo: 'Base', valor: 'Larga, com feltro' },
      ],
    },
    {
      id: 'p07',
      nome: 'Fonte de água em inox',
      categoria: 'Hidratação',
      animal: 'Gato e cão',
      papel: 'Ticket médio',
      imagem: '/img/linha-pet/07-fonte-agua-inox.png',
      resumo: 'Fio de água contínuo em corpo de inox, com bomba de 12 V e transformador fora da água.',
      problema:
        'O reservatório de plástico risca na limpeza, e a película de sujeira volta cada vez mais rápido. Fonte suja é fonte que o animal evita.',
      porQueInox:
        'Corpo e tampa em inox, sem risco onde a sujeira se prende. A parte elétrica fica isolada: bomba submersa de 12 V e transformador na tomada, fora da estrutura metálica.',
      especificacoes: [
        { rotulo: 'Material', valor: 'Inox 304 escovado, 0,8 mm' },
        { rotulo: 'Diâmetro', valor: '20 cm' },
        { rotulo: 'Bomba', valor: '12 V, com filtro substituível' },
        { rotulo: 'Energia', valor: 'Transformador externo' },
      ],
      referenciaMercado: 'Fontes de inox 304 genéricas importadas: R$ 162 a R$ 193 (Buscapé, 13/09/2026).',
    },
    {
      id: 'p08',
      nome: 'Refis de reposição',
      categoria: 'Reposição',
      animal: 'Gato e cão',
      papel: 'Recorrência',
      resumo: 'Poste de sisal, filtro da fonte, pá em inox e tela da cama. O motivo para o cliente voltar ao quiosque.',
      problema: 'Quando a parte que desgasta não tem reposição, o tutor descarta o produto inteiro.',
      porQueInox:
        'A estrutura de inox dura. O que desgasta foi pensado para troca, e é isso que transforma uma compra única em relacionamento com a marca.',
      especificacoes: [
        { rotulo: 'Sisal', valor: 'Poste com anéis de inox' },
        { rotulo: 'Fonte', valor: 'Filtros de reposição' },
        { rotulo: 'Higiene', valor: 'Pá de areia em inox' },
        { rotulo: 'Cama', valor: 'Tela de reposição' },
      ],
      referenciaMercado: 'Pá de areia em inox avulsa: R$ 28 (Buscapé, 13/09/2026).',
    },
    {
      id: 'p09',
      nome: 'Cama suspensa',
      categoria: 'Descanso',
      animal: 'Cão',
      papel: 'Ticket alto',
      resumo: 'Quadro em tubo de inox a 20 cm do chão, com tela técnica respirável que sai para lavar.',
      problema:
        'A cama de espuma absorve umidade, pelo e cheiro, e em pouco tempo nenhuma lavagem resolve.',
      porQueInox:
        'O quadro não deforma com o peso e não enferruja na varanda. O ar circula por baixo, e a tela é a única parte que vai para a máquina de lavar.',
      especificacoes: [
        { rotulo: 'Quadro', valor: 'Tubo de inox 304' },
        { rotulo: 'Medidas', valor: '100 x 70 cm' },
        { rotulo: 'Tela', valor: 'Técnica, removível' },
        { rotulo: 'Pés', valor: 'Ponteiras de silicone' },
      ],
      referenciaMercado: 'Camas suspensas para cão: R$ 146 a R$ 245 (Buscapé, 13/09/2026).',
    },
    {
      id: 'p10',
      nome: 'Rampa dobrável',
      categoria: 'Mobilidade',
      animal: 'Cão',
      papel: 'Ticket alto',
      resumo: 'Rampa leve com piso emborrachado para o cão idoso subir no sofá ou na cama sem saltar.',
      problema:
        'Para o cão idoso, cada salto do sofá é mais um impacto nas articulações. A escada estreita não resolve para quem já tem dificuldade de movimento.',
      porQueInox:
        'Estrutura lateral fina que sustenta o peso com pouca massa, dobradiça em inox e piso antiderrapante substituível.',
      especificacoes: [
        { rotulo: 'Estrutura', valor: 'Inox 304' },
        { rotulo: 'Medidas', valor: '150 x 40 cm' },
        { rotulo: 'Uso', valor: 'Dobrável ao meio' },
        { rotulo: 'Piso', valor: 'Emborrachado antiderrapante' },
      ],
      referenciaMercado: 'Escada para cães: R$ 199,90 (Buscapé, 13/09/2026).',
    },
    {
      id: 'p11',
      nome: 'Suporte de parede para guia',
      categoria: 'Organização',
      animal: 'Cão',
      papel: 'Entrada',
      resumo: 'Barra com quatro ganchos e prateleira rasa para guia, coleira e chave na porta de casa.',
      problema: 'Sem lugar fixo, guia e coleira se espalham pela entrada e somem na hora do passeio.',
      porQueInox:
        'Ganchos arredondados que não desgastam o couro e fixação oculta. É o produto de menor preço da linha e o que traz o cliente até o quiosque.',
      especificacoes: [
        { rotulo: 'Material', valor: 'Inox 304 escovado, 1,5 mm' },
        { rotulo: 'Largura', valor: '40 cm' },
        { rotulo: 'Composição', valor: '4 ganchos e prateleira' },
        { rotulo: 'Fixação', valor: 'Oculta' },
      ],
    },
  ],

  plano: {
    eyebrow: 'Plano de negócios · Documento para validação interna · Setembro de 2026',
    subtitulo:
      'Linha de móveis pet em inox, fabricada sob o controle de processo da Dassg Têmpera e vendida em quiosque de shopping por um operador parceiro.',
    mercado: [
      {
        valor: '32,2 milhões',
        rotulo: 'de gatos no Brasil em 2024, com alta de 4,5%, o maior crescimento entre as espécies',
        fonte: 'Abinpet, via Luvet',
      },
      {
        valor: '2,01',
        rotulo: 'gatos por domicílio que tem gato, contra 1,72 cães por domicílio que tem cão',
        fonte: 'Radar Pet 2020, Sindan',
      },
      {
        valor: 'R$ 258,40',
        rotulo: 'de gasto mensal médio com um gato',
        fonte: 'Instituto Pet Brasil e Abinpet, out. 2024',
      },
      {
        valor: '65%',
        rotulo: 'dos tutores dizem estar dispostos a investir o que for preciso no animal',
        fonte: 'Serasa e Opinion Box, out. 2025',
      },
    ],
    mercadoTexto: [
      'O setor pet deve faturar R$ 77,2 bilhões em 2025, com alta de 2,42%, abaixo dos 3,5% projetados no início do ano. É um setor que desacelerou, e o plano não conta com euforia.',
      'Dentro dele, pet care (acessórios, higiene e beleza) cresceu 8,3% em 2024, contra 5,6% da ração. A linha entra no segmento que cresce mais rápido.',
      'Santa Catarina tem gato em 19,5% dos domicílios, praticamente a média nacional de 19,3%. A região não é um bolsão felino, e as projeções abaixo não dependem disso.',
    ],
    lacuna: [
      'No Brasil, o plástico domina a categoria. Caixas de areia de plástico custam de R$ 52 a R$ 79 no varejo.',
      'Já existe inox no mercado brasileiro: a Petlove vende uma caixa de areia própria, a Meau, por R$ 229,90, e marketplaces como Mercado Livre e Magazine Luiza têm dezenas de modelos importados entre R$ 95 e R$ 1.400.',
      'Nos Estados Unidos, a categoria já existe com marca: a Furrbby vende oito modelos de caixa de areia de inox de US$ 89,99 a US$ 129,99, e a iPrimio vende a sua na Amazon e no Walmart.',
      'A objeção real de um investidor não é mais "existe inox no Brasil". É "por que pagar mais numa marca nova, se já existe inox mais barato". A resposta não pode ser só o material, precisa ser o que nenhum concorrente de inox de hoje entrega: design de móvel, linha completa e reposição.',
    ],
    precisaoTecnica: [
      'O inox 304 não endurece por têmpera. Ele ganha resistência só por deformação a frio, e o 430 também não é endurecível por tratamento térmico. Nenhuma peça de chapa fina desta linha passa por têmpera.',
      'O ativo da Dassg neste negócio é outro, e vale mais para o cliente final: controle de processo com rastreabilidade auditada. A higiene prometida não vem de ser metal, vem do acabamento. O critério de projeto higiênico usado pela indústria de alimentos é rugosidade de no máximo 0,8 micrômetro, porque uma ranhura maior que a bactéria abriga bactéria depois da lavagem. Garantir isso peça a peça é trabalho de quem já opera com ISO 9001.',
    ],
    ondeFornoEntra: [
      {
        titulo: 'Recozimento entre passes de estampagem',
        texto:
          'Na fase 2, cuba da caixa de areia e reservatório da fonte passam a ser estampados em peça única. A cada passe o inox endurece e fica frágil. Sem recozimento entre os passes, a peça trinca. É serviço de forno.',
      },
      {
        titulo: 'Tratamento pós-solda do inox 430',
        texto:
          'Se alguma peça estrutural usar inox 430 soldado, o tratamento térmico entre 730 °C e 815 °C é obrigatório para devolver a ductilidade ao material.',
      },
    ],
    cuidadosTecnicos: [
      'Inox 304 em tudo que tem contato com urina, água ou alimento. O 430 sofre corrosão localizada com o cloreto da urina.',
      'Solda contínua e cantos arredondados, sem fresta onde areia úmida fique presa.',
      'Se houver jateamento, só com granalha de inox ou óxido de alumínio, seguido de passivação. Granalha comum, de metal carbono, deixa ferro na superfície, e esse ferro enferruja.',
    ],
    foraDaLinha: [
      {
        titulo: 'Comedouro',
        texto: 'A tigela de inox já é padrão de mercado há décadas. Entraria como commodity, disputando preço.',
      },
      {
        titulo: 'Casinha externa',
        texto:
          'O inox conduz calor muitas vezes mais que o plástico. Ao sol, a superfície passa da temperatura que queima a pata do animal.',
      },
    ],
    operacao: [
      {
        titulo: 'Fornecedor de corte e dobra',
        texto: 'Corte a laser, dobra e solda da peça bruta. Sete fornecedores mapeados em Joinville para cotação.',
      },
      {
        titulo: 'Dassg Têmpera',
        texto: 'Engenharia do produto, controle de qualidade, acabamento, marca, embalagem e venda ao operador.',
      },
      {
        titulo: 'Operador do quiosque',
        texto: 'Ponto no shopping, estoque, equipe e venda ao cliente final. Compra da Dassg a preço de atacado.',
      },
      {
        titulo: 'Cliente final',
        texto: 'Leva o produto na hora e volta ao quiosque para os refis.',
      },
    ],
    custoIntro:
      'Custo montado de baixo para cima, a partir do preço real da chapa de inox 304 e da área de chapa de cada peça. O serviço de corte, dobra, solda e acabamento ainda não tem cotação: entra como fator sobre o custo do material, conforme a complexidade da peça, e é a primeira premissa a ser trocada por número real.',
    quiosqueIntro:
      'O operador compra da Dassg a preço de atacado e revende pelo preço sugerido. Os custos do shopping partem de faixas publicadas; os valores exatos dos shoppings de Joinville dependem de consulta direta às administrações.',
    fabricanteIntro:
      'Resultado da Dassg por quiosque em operação, depois de pagar o fornecedor de corte e dobra, os componentes, a embalagem e os tributos sobre a venda.',
    riscos: [
      {
        risco: 'Quiosque de shopping não aparece como canal nos estudos do setor.',
        mitigacao: 'Validar a venda antes de assinar contrato com shopping, com loja online e ação temporária de 30 dias.',
      },
      {
        risco: 'A caixa de areia tem a margem mais apertada da linha.',
        mitigacao: 'Ela é a peça que conta a história da marca. O custo cai na fase 2, com estampagem em peça única.',
      },
      {
        risco: 'O custo de corte, dobra e solda ainda é premissa.',
        mitigacao: 'Cotar os quatro produtos-ícone com fornecedores de Joinville antes de fechar preço.',
      },
      {
        risco: 'Já existe concorrente de inox no Brasil: a Meau, da Petlove, por R$ 229,90.',
        mitigacao: 'Vencer pelo que a Meau não entrega: design de móvel, linha completa e refis. O preço só se sustenta se a diferença for visível, não só o material.',
      },
      {
        risco: 'O metal pesa e encarece o frete da venda online.',
        mitigacao: 'No quiosque o cliente leva na hora. Online, frete embutido apenas nos produtos leves.',
      },
      {
        risco: 'Parte dos gatos estranha superfície nova e o som da areia no metal.',
        mitigacao: 'Teste com tutores reais durante a prototipagem, antes do lote piloto.',
      },
    ],
    roadmap: [
      {
        periodo: '0 a 3 meses',
        titulo: 'Validação técnica',
        texto: 'Cotação dos quatro produtos-ícone, protótipos, teste com tutores e busca da marca no INPI.',
      },
      {
        periodo: '3 a 6 meses',
        titulo: 'Validação de venda',
        texto: 'Lote piloto pequeno, loja online e ação temporária para medir conversão antes do contrato com shopping.',
      },
      {
        periodo: '6 a 12 meses',
        titulo: 'Quiosque piloto',
        texto: 'Primeiro operador, primeiro shopping, linha completa do recorte escolhido.',
      },
      {
        periodo: '12 a 24 meses',
        titulo: 'Escala',
        texto: 'Estampagem em peça única na caixa de areia e na fonte, com o forno da Dassg no recozimento, e segundo ponto de venda.',
      },
    ],
    decisoes: [
      'Recorte da linha: só gato ou gato e cão.',
      'Nome Patas de Aço, com busca formal no INPI.',
      'Autorização para cotar os quatro produtos-ícone com fornecedores de corte e dobra.',
      'Orçamento de desenvolvimento da fase de validação.',
      'Perfil do operador de quiosque a ser procurado.',
    ],
  },

  fontes: [
    { titulo: 'Estatísticas do mercado pet, dados Abinpet 2024', url: 'https://www.luvet.com.br/estatisticas-mercado-pet', data: 'consultado em 13/09/2026' },
    { titulo: 'Radar Pet 2020, Sindan', url: 'https://sindan.org.br/release/pesquisa-radar-pet-brasil-conta-com-a-segunda-maior-populacao-pet-do-mundo/', data: 'consultado em 13/09/2026' },
    { titulo: 'Custo mensal de cão e gato, Instituto Pet Brasil e Abinpet, Poder360', url: 'https://www.poder360.com.br/poder-economia/custo-mensal-para-manter-cachorro-no-brasil-e-de-r-431-diz-estudo/', data: '25/10/2024' },
    { titulo: 'Setor pet deve faturar R$ 77,2 bilhões em 2025, Revista Fator Brasil', url: 'https://www.revistafatorbrasil.com.br/2025/09/24/setor-pet-deve-faturar-772-bilhoes-em-2025/', data: '24/09/2025' },
    { titulo: 'Crescimento de pet care e pet food em 2024, Cães&Gatos', url: 'https://caesegatos.com.br/aquecimento-setor-pet-venda-de-acessorios-luxo/', data: 'consultado em 13/09/2026' },
    { titulo: 'Tutores e investimento no pet, Serasa e Opinion Box, Meio & Mensagem', url: 'https://www.meioemensagem.com.br/marketing/tutores-brasileiros-investem-dinheiro-em-seus-pets-diz-serasa', data: '03/10/2025' },
    { titulo: 'Estudo CVA Petcare 2026, canais de compra', url: 'https://www.araujosanthos.com.br/post/pet-shops-de-bairro-seguem-l%C3%ADderes-nas-compras-mas-grandes-redes-e-e-commerce-ganham-espa%C3%A7o-no-merc', data: 'março de 2026' },
    { titulo: 'Mapa de cães e gatos por estado, IBGE PNS, Panorama PetVet', url: 'https://panoramapetvet.com.br/mapa-de-caes-e-gatos-revela-diferencas-regionais-no-mercado-pet-brasileiro/', data: 'consultado em 13/09/2026' },
    { titulo: 'Chapa de inox 304L 1,0 x 1200 x 3000 mm, ZF Comercial de Aços', url: 'https://www.zfcomercialdeacos.com.br/chapas/chapa-inox-304l-1-00x1200x3000-30-00', data: '13/09/2026' },
    { titulo: 'Quanto custa um quiosque no shopping, AlugueOn', url: 'https://alugueon.com.br/quanto-custa-um-quiosque-no-shopping/', data: '24/04/2024' },
    { titulo: 'Quanto custa um quiosque no shopping, Expo Marca Display', url: 'https://www.expomarcadisplay.com.br/blog/categorias/artigos/quanto-custa-um-quiosque-no-shopping-saiba-os-valores-e-dicas', data: '16/04/2025' },
    { titulo: 'Preços de varejo por categoria, Buscapé', url: 'https://www.buscape.com.br', data: '13/09/2026' },
    { titulo: 'Caixas de areia de inox, Furrbby', url: 'https://www.furrbby.com/collections/stainless-steel-litter-box', data: '13/09/2026' },
    { titulo: 'Guia técnico do inox 430 e resistência a cloreto, Alloy Materials', url: 'https://alloy-materials.com/430-stainless-steel-guide/', data: 'consultado em 13/09/2026' },
    { titulo: 'Inox 304 em gaiolas de biotério, Otto Environmental', url: 'https://www.ottoenvironmental.com/corrosion-resistance-of-304-stainless-steel-in-laboratory-animal-caging/', data: 'consultado em 13/09/2026' },
    { titulo: 'Caixa de Areia Meau Inox com Soleira, Petlove', url: 'https://www.petlove.com.br/caixa-de-areia-meau-inox-com-soleira-para-gatos/p', data: 'consultado em 13/09/2026' },
  ],
}

export function getLinhaPetBySlug(slug: string): LinhaPetConteudo | undefined {
  return slug === patasDeAco.slug ? patasDeAco : undefined
}
