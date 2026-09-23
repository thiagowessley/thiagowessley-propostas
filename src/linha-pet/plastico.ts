import type { LinhaPetConteudo, RecorteConteudo, ProdutoConteudo, Fonte } from './patas-de-aco'

// Conteúdo da segunda linha pet da Dassg, em plástico. Nome de marca ainda em decisão dos sócios
// (candidatos: Dpata, Patas Leves, ver 03-Briefing/Linha-Pet/Plastico/PESQUISA-frentes-concluidas.md
// na memória do Claude), por isso o texto usa "a linha" em vez de cravar um nome. Preparado a partir
// da pesquisa da Fase 02 (22/09/2026): concorrência, fabricação, canais, regulatório, produtos
// extras e nomes, seis frentes documentadas com fonte em cada achado.

const recortes: RecorteConteudo[] = [
  {
    id: 'A',
    titulo: 'Só gato',
    descricao:
      'Dez produtos para a casa de quem tem gato. Mesma coerência de recorte já usada na linha em inox: mensagem mais simples, catálogo mais enxuto para validar primeiro.',
    produtos: ['q01', 'q02', 'q03', 'q04', 'q06', 'q07', 'q08', 'q10', 'q12', 'q15'],
  },
  {
    id: 'B',
    titulo: 'Gato e cão',
    descricao:
      'Onze produtos que dividem o catálogo entre os dois públicos, com casinha, mala de transporte e cama para cão além da base de gato.',
    produtos: ['q01', 'q03', 'q04', 'q05', 'q07', 'q09', 'q11', 'q12', 'q13', 'q14', 'q15'],
  },
]

const produtos: ProdutoConteudo[] = [
  {
    id: 'q01',
    imagem: '/img/linha-pet/plastico/q01-fonte-agua-eletrica.png',
    nome: 'Fonte de água elétrica',
    categoria: 'Hidratação',
    animal: 'Gato e cão',
    papel: 'Ticket médio',
    resumo: 'Bomba de 12 V bivolt, reservatório maior que a referência e filtro de carvão substituível.',
    problema:
      'A fonte concorrente nacional já resolve a parte elétrica com bomba de 12 V, mas tem nota 3,5 de 5 e poucas avaliações: o produto existe, a execução deixa a desejar.',
    porQueInox:
      'Mesma engenharia elétrica já provada no mercado nacional (12 V, bivolt, transformador fora da água), reservatório maior e desenho que resolve as reclamações do concorrente. Precisa de checagem de certificação Inmetro antes de vender (item 41 da Portaria 148/2022, aplicação por semelhança de função, não confirmada com certificador).',
    especificacoes: [
      { rotulo: 'Material', valor: 'Plástico injetado, resina não informada ainda' },
      { rotulo: 'Capacidade', valor: '2 litros (acima do 1,5 L da referência nacional)' },
      { rotulo: 'Bomba', valor: '12 V, bivolt, transformador externo' },
      { rotulo: 'Consumível', valor: 'Filtro de carvão substituível' },
    ],
    referenciaMercado: 'Fonte Bebedouro Furacão Pet, 12V bivolt, 1,5L: R$220,90 na versão 220V, nota 3,5 de 5 (petlove.com.br, 22/09/2026).',
  },
  {
    id: 'q02',
    imagem: '/img/linha-pet/plastico/q02-caixa-areia-oval.png',
    nome: 'Caixa de areia aberta oval',
    categoria: 'Higiene',
    animal: 'Gato',
    papel: 'Produto de entrada',
    resumo: 'Formato oval com proteção nas três paredes, produto de giro mais alto do catálogo.',
    problema: 'O concorrente nacional de entrada custa R$33,50, e o consumidor não vê motivo para pagar mais numa caixa simples sem diferencial.',
    porQueInox: 'Design oval sem cantos, borda de entrada baixa, e pá incluída. Compete no degrau de preço logo acima da entrada, não na base.',
    especificacoes: [
      { rotulo: 'Formato', valor: 'Oval, sem cantos' },
      { rotulo: 'Medidas', valor: '50 x 39 x 27 cm (referência de mercado)' },
      { rotulo: 'Detalhe', valor: 'Proteção contra respingo em três lados' },
      { rotulo: 'Acessório', valor: 'Pá incluída' },
    ],
    referenciaMercado: 'Bandeja Higiênica Classic Furacão Pet: R$33,50 (R$30,15 à vista), nota 4,8 (cobasi.com.br, 22/09/2026).',
  },
  {
    id: 'q03',
    imagem: '/img/linha-pet/plastico/q03-caixa-areia-xxl.png',
    nome: 'Caixa de areia XXL com pá',
    categoria: 'Higiene',
    animal: 'Gato',
    papel: 'Ticket médio',
    resumo: 'Versão grande, para gato de porte maior ou multi-gato, com forro sob medida.',
    problema: 'A referência importada (Iris USA) tem reclamação recorrente de forro que não serve no tamanho grande.',
    porQueInox: 'Forro vendido no tamanho exato da caixa, como refil próprio, resolvendo a reclamação mais comum da categoria.',
    especificacoes: [
      { rotulo: 'Medidas', valor: '76 x 51 x 36 cm (referência Iris USA)' },
      { rotulo: 'Consumível', valor: 'Forro sob medida vendido à parte' },
      { rotulo: 'Uso', valor: 'Multi-gato ou gato grande' },
    ],
  },
  {
    id: 'q04',
    imagem: '/img/linha-pet/plastico/q04-comedouro-elevado.png',
    nome: 'Comedouro elevado com armazenamento',
    categoria: 'Alimentação',
    animal: 'Gato',
    papel: 'Ticket médio',
    resumo: 'Reservatório hermético embutido na base, sem o vão que acumula água da referência importada.',
    problema: 'A referência da Iris USA é vendida também para cão grande, categoria associada a torção gástrica em estudo veterinário (achado já registrado na pesquisa do inox).',
    porQueInox: 'Versão dimensionada só para gato e cão pequeno ou médio, com o vão sob as tigelas resolvido. Não anunciado para cão grande, por decisão de segurança.',
    especificacoes: [
      { rotulo: 'Reservatório', valor: 'Hermético, até 20 kg de ração' },
      { rotulo: 'Tigelas', valor: 'Inserto removível para lavar' },
      { rotulo: 'Indicação', valor: 'Gato e cão pequeno ou médio' },
    ],
  },
  {
    id: 'q05',
    imagem: '/img/linha-pet/plastico/q05-casinha-modular.png',
    nome: 'Casinha modular',
    categoria: 'Abrigo',
    animal: 'Cão',
    papel: 'Ticket alto',
    resumo: 'Casinha externa em peças que encaixam, ventilação ajustável.',
    problema: 'É a categoria mais disputada do mercado nacional: pelo menos cinco marcas competem entre R$65 e R$220 pelo mesmo tipo de produto.',
    porQueInox: 'Peça grande e oca: cotação a fazer em rotomoldagem, não em injeção (molde de 3 a 4 vezes mais barato nesse processo, achado da Fase 02). Entra no catálogo do recorte B, mas é a peça de maior risco de margem por causa da concorrência.',
    especificacoes: [
      { rotulo: 'Processo indicado', valor: 'Rotomoldagem, a confirmar com fornecedor' },
      { rotulo: 'Montagem', valor: 'Peças que encaixam, sem parafuso' },
      { rotulo: 'Ventilação', valor: 'Ajustável, com furo de drenagem' },
    ],
    referenciaMercado: 'Casa Furacão Pet, 4 tamanhos: R$104,99 a R$219,99, nota 3,8 de 5 (petz.com.br, 22/09/2026). Concorrência também de DuraPets, Pet Injet, Alvorada e Plast Pet.',
  },
  {
    id: 'q06',
    imagem: '/img/linha-pet/plastico/q06-arranhador-moldura.png',
    nome: 'Arranhador com moldura e miolo substituível',
    categoria: 'Enriquecimento',
    animal: 'Gato',
    papel: 'Entrada e recorrência',
    resumo: 'Moldura de plástico leve com miolo de papelão ou sisal substituível, sem trocar a peça inteira.',
    problema: 'O arranhador de papelão puro vira pó ao desgastar e é descartado inteiro quando o miolo acaba.',
    porQueInox: 'A moldura dura, o miolo é o consumível. Mesma lógica de recorrência já usada no inox, adaptada para um ticket de entrada mais baixo.',
    especificacoes: [
      { rotulo: 'Moldura', valor: 'Plástico injetado' },
      { rotulo: 'Miolo', valor: 'Papelão ou sisal, substituível' },
      { rotulo: 'Papel', valor: 'Porta de entrada da linha' },
    ],
    referenciaMercado: 'Arranhador de entrada nacional (Furacão Pet): R$64,99 (R$55,92 à vista); topo de mercado nacional (São Pet, torre 3 andares): R$1.163,50 (cobasi.com.br, 22/09/2026).',
  },
  {
    id: 'q07',
    imagem: '/img/linha-pet/plastico/q07-kit-sistema-caixa.png',
    nome: 'Kit sistema de caixa de areia',
    categoria: 'Higiene',
    animal: 'Gato e cão',
    papel: 'Ticket alto',
    resumo: 'Caixa com forro reutilizável, tapete e suporte de filtro de odor, vendidos como sistema.',
    problema: 'A caixa simples de entrada não sustenta ticket alto. O sistema completo, com reposição, é o que já vale de 4 a 5 vezes mais no mercado nacional.',
    porQueInox: 'Réplica do modelo que já prova ticket mais alto tanto na referência importada (Modkat Flip) quanto na nacional (Furacão Pet Furba): forro, filtro e pá vendidos junto, com reposição recorrente.',
    especificacoes: [
      { rotulo: 'Composição', valor: 'Caixa, forro reutilizável, tapete e suporte de filtro' },
      { rotulo: 'Consumível', valor: 'Forro (até 3 meses) e filtro de odor' },
      { rotulo: 'Papel', valor: 'Produto de ticket alto do recorte gato' },
    ],
    referenciaMercado: 'Caixa sistema Furacão Pet Furba: R$142,65 a R$158,50 (cobasi.com.br, 22/09/2026); referência importada Modkat Flip, 3.963 avaliações, 87% cinco estrelas.',
  },
  {
    id: 'q08',
    imagem: '/img/linha-pet/plastico/q08-caixa-areia-reciclada.png',
    nome: 'Caixa de areia em plástico reciclado',
    categoria: 'Higiene',
    animal: 'Gato',
    papel: 'Diferencial de marca',
    resumo: 'Mesma caixa aberta, resina reciclada certificada, argumento de sustentabilidade.',
    problema: 'Nenhum concorrente nacional pesquisado usa resina reciclada certificada como argumento de marca.',
    porQueInox: 'Só entra no catálogo se houver fornecedor de resina reciclada com certificado real: sem certificado, a palavra "reciclado" não entra na embalagem, decisão já registrada na pesquisa de referências (P1).',
    especificacoes: [
      { rotulo: 'Material', valor: 'Resina reciclada certificada (fornecedor a confirmar)' },
      { rotulo: 'Formato', valor: 'Paredes altas, fundo curvo' },
      { rotulo: 'Condição', valor: 'Não vende sem certificado do fornecedor' },
    ],
    referenciaMercado: 'Caixa de areia LOO, Catit, 99% plástico reciclado pós-consumo, referência internacional sem preço público no Brasil.',
  },
  {
    id: 'q09',
    imagem: '/img/linha-pet/plastico/q09-mala-transporte.png',
    nome: 'Mala de transporte com visor',
    categoria: 'Mobilidade',
    animal: 'Cão',
    papel: 'Ticket alto',
    resumo: 'Visor panorâmico, ventilação em quatro lados, dentro da regra nova da ANAC.',
    problema: 'A referência que a Débora trouxe (mala importada de dropshipping) custa de 8 a 18 vezes o preço de uma mala equivalente já vendida no Brasil, e não informa ventilação.',
    porQueInox: 'Desenho próprio com ventilação em todos os lados desde o protótipo: exigência simultânea da nova regra da ANAC (em vigor desde 20/10/2025) e da segurança térmica do animal. Nenhum concorrente nacional com esse nível de design foi encontrado na pesquisa.',
    especificacoes: [
      { rotulo: 'Ventilação', valor: 'Em quatro lados, dentro da regra ANAC' },
      { rotulo: 'Visor', valor: 'Painel transparente' },
      { rotulo: 'Peso máximo', valor: 'A definir por faixa de animal' },
    ],
    referenciaMercado: 'Equivalente nacional (Lorben, mochila astronauta): R$110 a R$237. Mala importada de referência: R$1.997 (não entra como dado de mercado).',
  },
  {
    id: 'q10',
    imagem: '/img/linha-pet/plastico/q10-banheira-gato.png',
    nome: 'Banheira para gato',
    categoria: 'Higiene',
    animal: 'Gato',
    papel: 'Categoria adjacente',
    resumo: 'Banheira funcional para banho em casa, mesma linguagem visual do catálogo.',
    problema: 'Categoria fora das 9 referências originais, adicionada por já ter mercado nacional provado em plástico.',
    porQueInox: 'Extensão natural do catálogo, ticket médio (R$93 a R$103 no mercado nacional), sem exigir molde novo de grande porte.',
    especificacoes: [
      { rotulo: 'Uso', valor: 'Banho em casa' },
      { rotulo: 'Formato', valor: 'A definir, referência de mercado com alça' },
    ],
    referenciaMercado: 'Banheira Classic Plus Furacão Pet: R$103,50 (R$93,15 à vista) (cobasi.com.br, 22/09/2026).',
  },
  {
    id: 'q11',
    imagem: '/img/linha-pet/plastico/q11-caixa-transporte.png',
    nome: 'Caixa de transporte rígida ventilada',
    categoria: 'Mobilidade',
    animal: 'Cão',
    papel: 'Diferencial de design',
    resumo: 'Carrier tradicional com porta e ventilação nas laterais, sem o custo do visor panorâmico da mala.',
    problema: 'Nenhum concorrente nacional pesquisado tem diferencial de design nessa categoria, todos vendem sem preço público (modelo B2B) ou sem diferenciação visual.',
    porQueInox: 'Já nasce dentro da exigência de ventilação da ANAC, com preço mais acessível que a mala com visor.',
    especificacoes: [
      { rotulo: 'Porta', valor: 'Grade frontal' },
      { rotulo: 'Ventilação', valor: 'Lateral, dentro da regra ANAC' },
    ],
  },
  {
    id: 'q12',
    imagem: '/img/linha-pet/plastico/q12-base-arranhador.png',
    nome: 'Base de arranhador com poste substituível',
    categoria: 'Enriquecimento',
    animal: 'Gato e cão',
    papel: 'Estrutura',
    resumo: 'Base pesada em plástico injetado, poste de sisal que se troca sem trocar a peça.',
    problema: 'Arranhador leve tomba quando o gato estica o corpo inteiro, e o gato abandona o produto.',
    porQueInox: 'Mesma lição de recorrência do arranhador em inox, num ticket de entrada mais baixo, sem competir com o Patas de Aço.',
    especificacoes: [
      { rotulo: 'Base', valor: 'Plástico injetado, peso concentrado' },
      { rotulo: 'Poste', valor: 'Sisal encaixável e substituível' },
      { rotulo: 'Altura', valor: '90 cm (orientação veterinária)' },
    ],
  },
  {
    id: 'q13',
    imagem: '/img/linha-pet/plastico/q13-comedouro-duplo.png',
    nome: 'Comedouro duplo de entrada',
    categoria: 'Alimentação',
    animal: 'Gato e cão',
    papel: 'Entrada',
    resumo: 'Comedouro e bebedouro simples, produto de giro alto e porta de entrada da marca.',
    problema: 'A categoria já é dominada por preço muito baixo (R$5 a R$15) no mercado nacional.',
    porQueInox: 'Compete pelo design, não pelo preço mínimo: entra como produto de entrada da linha, não como o mais barato do mercado.',
    especificacoes: [
      { rotulo: 'Formato', valor: 'Duplo, comida e água' },
      { rotulo: 'Papel', valor: 'Porta de entrada, giro alto' },
    ],
    referenciaMercado: 'Comedouro de entrada nacional (Pet Flex): R$5,30 a R$5,99 (cobasi.com.br, 22/09/2026).',
  },
  {
    id: 'q14',
    imagem: '/img/linha-pet/plastico/q14-cama-elevada.png',
    nome: 'Cama elevada tipo rede',
    categoria: 'Descanso',
    animal: 'Cão',
    papel: 'Ticket médio',
    resumo: 'Estrutura leve com tela respirável, sem o risco térmico do metal.',
    problema: 'Resolve o problema de cão no chão frio ou quente, sem o trabalho de um molde grande de casinha.',
    porQueInox: 'Estrutura plástica mais leve que a versão em inox do Patas de Aço, com o mesmo princípio de tela removível para lavar.',
    especificacoes: [
      { rotulo: 'Estrutura', valor: 'Plástico injetado' },
      { rotulo: 'Tela', valor: 'Técnica, removível' },
    ],
  },
  {
    id: 'q15',
    imagem: '/img/linha-pet/plastico/q15-refil-avulso.png',
    nome: 'Refil avulso',
    categoria: 'Reposição',
    animal: 'Gato e cão',
    papel: 'Recorrência',
    resumo: 'Forro de caixa de areia, filtro de carvão da fonte e miolo do arranhador, vendidos separados desde o primeiro dia.',
    problema: 'Quando a peça que desgasta não tem reposição própria, o cliente descarta o produto inteiro e não volta a comprar.',
    porQueInox: 'Decisão de catálogo, não produto novo: transformar o consumível em SKU vendável separado. Lição mais forte da pesquisa de referências, 4 das 9 vivem de refil.',
    especificacoes: [
      { rotulo: 'Itens', valor: 'Forro, filtro de carvão, miolo de arranhador' },
      { rotulo: 'Papel', valor: 'Alto volume, baixo ticket, alta recorrência' },
    ],
  },
]

const fontes: Fonte[] = [
  { titulo: 'Furacão Pet, catálogo de produtos', url: 'https://www.furacaopet.com/category/all-products', data: '22/09/2026' },
  { titulo: 'Bandeja Higiênica Classic Furacão Pet, Cobasi', url: 'https://www.cobasi.com.br/bandeja-higienica-classic-preta-furacao-pet-3823961/p', data: '22/09/2026' },
  { titulo: 'Fonte Bebedouro Furacão Pet, Petlove', url: 'https://www.petlove.com.br/fonte-bebedouro-furacao-pet-azul-1559984/p', data: '22/09/2026' },
  { titulo: 'Casa Furacão para Cães, Petz', url: 'https://www.petz.com.br/produto/casa-furacao-para-caes-preta', data: '22/09/2026' },
  { titulo: 'Quanto custa um molde de injeção plástica, Metalúrgica Ferri', url: 'https://www.metalferri.com.br/blog/quanto-custa-molde-injecao-plastica', data: '22/09/2026' },
  { titulo: 'Rotomoldagem ou injeção, Poliforma', url: 'https://poliforma.ind.br/artigos-blog/rotomoldagem-ou-injecao', data: '22/09/2026' },
  { titulo: 'Preço de resina de polipropileno, MF Rural', url: 'https://www.mfrural.com.br/busca/polipropileno-disponiveis/estado/sao-paulo', data: '22/09/2026' },
  { titulo: 'Transporte de animais, ANAC', url: 'https://www.gov.br/anac/pt-br/assuntos/passageiros/transporte-de-animais-1', data: 'consultado em 22/09/2026, bloqueado por captcha na leitura automatizada' },
  { titulo: 'Escopo da Portaria Inmetro 148/2022, item 41', url: 'https://www.gov.br/inmetro/pt-br/acesso-a-informacao/perguntas-frequentes/avaliacao-da-conformidade/aparelhos-eletrodomesticos-e-similares/quais-eletrodomesticos-estao-no-escopo-da-portaria-inmetro-ndeg-148-de-2022', data: '22/09/2026' },
  { titulo: 'Taxas do Mercado Livre em 2026', url: 'https://ecommercenapratica.com/blog/comissao-mercado-livre/', data: '22/09/2026' },
  { titulo: 'Pet shops de bairro seguem líderes nas compras, estudo CVA Petcare 2026', url: 'https://www.araujosanthos.com.br/post/pet-shops-de-bairro-seguem-l%C3%ADderes-nas-compras-mas-grandes-redes-e-e-commerce-ganham-espa%C3%A7o-no-merc', data: 'março de 2026' },
]

const linhaPlastico: LinhaPetConteudo = {
  slug: 'linha-plastico',
  marca: 'Linha Pet em Plástico',
  endosso: 'Uma marca Dassg Têmpera · nome em decisão dos sócios',

  catalogo: {
    eyebrow: 'Catálogo de produtos · Prévia da pesquisa · Setembro de 2026',
    subtitulo:
      'Produtos de plástico para gato e cão com design próprio e peça de reposição vendida separada, não mais uma linha de plástico genérico.',
    pilares: [
      {
        titulo: 'Design',
        texto:
          'O mercado nacional de plástico pet tem um buraco de preço entre R$100 e R$300: comodite de R$30 a R$70 de um lado, marca de design de R$180 a mais de R$1.000 do outro. É nesse meio que esta linha entra.',
      },
      {
        titulo: 'Recorrência',
        texto:
          'Forro de caixa de areia, filtro de fonte, miolo de arranhador: cada peça de desgaste é um produto próprio, vendido separado desde o primeiro dia. É a venda repetida que sustenta o negócio, não a peça única.',
      },
      {
        titulo: 'Fabricação testada',
        texto:
          'Peça pequena em injeção, peça grande e oca (casinha, mala) em rotomoldagem, processo de molde de 3 a 4 vezes mais barato. Escolha de processo por peça, não uma decisão única para a linha inteira.',
      },
    ],
    teseTitulo: 'Três motivos para um plástico de marca, não plástico genérico',
    comparativo: [
      { criterio: 'Preço no mercado nacional', plastico: 'R$30 a R$70, sem diferencial', inox: 'R$100 a R$300, com design e reposição' },
      { criterio: 'Reposição', plastico: 'Produto inteiro descartado quando desgasta', inox: 'Peça de desgaste vendida separada' },
      { criterio: 'Engenharia elétrica (fonte)', plastico: 'Bomba de 12 V já resolvida no mercado, execução fraca (nota 3,5)', inox: 'Mesma engenharia, execução melhor' },
      { criterio: 'Segurança regulatória (mala)', plastico: 'Sem informação de ventilação na referência', inox: 'Ventilação desde o desenho, dentro da regra ANAC' },
      { criterio: 'Molde de peça grande', plastico: 'Concorrentes não informam processo', inox: 'Rotomoldagem cotada por peça, 3 a 4x mais barata que injeção' },
    ],
    comparativoTitulo: 'Plástico genérico e a linha, lado a lado',
    comparativoColEsquerda: 'Plástico genérico nacional',
    comparativoColDireita: 'Esta linha',
    porQueTitulo: 'Por que nesta linha',
    fabricacao: [
      { titulo: 'Escolha de processo', texto: 'Peça pequena em injeção, peça grande e oca (casinha, mala) em rotomoldagem, decidido por peça, não pela linha inteira.' },
      { titulo: 'Molde piloto', texto: 'Lote pequeno de validação antes do molde de produção definitivo, reduzindo o risco de gastar tudo num molde só.' },
      { titulo: 'Terceirização possível', texto: 'Existe fabricante nacional que presta serviço de injeção plástica por terceiro, sem exigir compra de máquina própria na fase inicial.' },
      { titulo: 'Componentes de terceiro', texto: 'Bomba de 12 V, filtro de carvão e sisal seguem de fornecedor especializado, mesmo padrão já usado pela concorrência nacional.' },
      { titulo: 'Controle e certificação', texto: 'Certificação Inmetro a confirmar para a fonte elétrica; ventilação da mala desenhada dentro da regra da ANAC desde o protótipo.' },
    ],
    notaFabricacao:
      'Diferente do inox, esta linha não usa a competência de tratamento térmico da Dassg: o processo é injeção ou rotomoldagem, fabricado internamente com equipamento novo ou terceirizado. É uma capacidade a desenvolver, não uma extensão direta do que a empresa já faz.',
  },

  recortes,
  produtos,

  plano: {
    eyebrow: 'Plano de negócios · Documento para validação interna · Setembro de 2026',
    subtitulo:
      'Segunda linha pet da Dassg Têmpera, em plástico, vendida por distribuidor para pet shop de bairro ou direto por marketplace.',
    mercado: [
      {
        valor: '32,2 milhões',
        rotulo: 'de gatos no Brasil em 2024, com alta de 4,5%, o maior crescimento entre as espécies',
        fonte: 'Abinpet, via Luvet',
      },
      {
        valor: '30,5%',
        rotulo: 'dos tutores de gato compram em pet shop de bairro, o canal mais forte do mercado',
        fonte: 'Estudo CVA Petcare 2026',
      },
      {
        valor: 'R$258,40',
        rotulo: 'de gasto mensal médio com um gato',
        fonte: 'Instituto Pet Brasil e Abinpet, out. 2024',
      },
      {
        valor: 'R$100 a R$300',
        rotulo: 'é o intervalo de preço sem concorrente forte no mercado nacional de plástico pet',
        fonte: 'Pesquisa de concorrência, Fase 02, 22/09/2026',
      },
    ],
    mercadoTexto: [
      'Mesmo mercado de base do inox: 32,2 milhões de gatos, crescimento de 4,5% ao ano, setor pet desacelerando mas o segmento pet care crescendo acima da média.',
      'A diferença real está no canal: o quiosque de shopping não aparece como canal nos estudos do setor. O canal mais forte para tutor de gato é pet shop de bairro (30,5%), e é esse o canal que este plano usa como referência de distribuidor.',
    ],
    lacunaTitulo: 'O plástico nacional já existe, o meio do preço ainda não',
    lacuna: [
      'O mercado nacional de plástico pet já tem dois fabricantes consolidados, Furacão Pet e Stiloplast, cobrindo quase toda a linha que esta proposta cobre.',
      'O formato do mercado é de haltere: produto de entrada de R$30 a R$70, produto de marca de design de R$180 a mais de R$1.000, quase nada no meio.',
      'A prova de que plástico com design vende acima do que a intuição sugere: um arranhador torre de marca nacional já vende por mais de mil reais.',
      'A pergunta que um investidor faz não é "existe plástico no Brasil". É "por que este plástico, e não o concorrente que já está na prateleira do pet shop". A resposta não pode ser só o material, precisa ser reposição, design e engenharia resolvida (elétrica e regulatória) que o concorrente atual não entrega bem.',
    ],
    precisaoTecnica: [
      'Ao contrário do inox, esta linha não usa a competência de tratamento térmico da Dassg. O processo de fabricação (injeção ou rotomoldagem) é uma capacidade nova, e a cotação real ainda depende do engenheiro repassar processo por peça, não um processo único para a linha inteira.',
      'A rotomoldagem é o achado técnico mais importante da pesquisa: para peça grande e oca (casinha, mala), o molde custa de 3 a 4 vezes menos que em injeção, o que muda a cotação a pedir.',
    ],
    ondeFornoEntraTitulo: 'O que a Dassg precisa desenvolver, não o que já tem',
    ondeFornoEntra: [
      {
        titulo: 'Equipamento ou terceirização',
        texto: 'Existe opção de terceirizar a injeção plástica com um fabricante nacional que já presta esse serviço, sem comprar máquina própria na fase de validação.',
      },
      {
        titulo: 'Molde piloto antes do molde de produção',
        texto: 'Lote pequeno de validação com molde mais simples e barato, antes de investir no molde definitivo, reduzindo o risco de gastar tudo e descobrir depois que o produto não vende do jeito esperado.',
      },
    ],
    cuidadosTecnicos: [
      'Peça grande e oca (casinha, mala) cotada em rotomoldagem, não em injeção, por causa do custo de molde.',
      'Mala e caixa de transporte desenhadas com ventilação em todos os lados desde o protótipo, dentro da regra da ANAC em vigor desde 20/10/2025.',
      'Fonte de água elétrica com checagem de certificação Inmetro antes de vender, item 41 da Portaria 148/2022, aplicação por semelhança de função, ainda não confirmada com certificador.',
    ],
    foraDaLinha: [
      {
        titulo: 'Casinha grande (versão iglu completa)',
        texto: 'Fica para depois: molde grande costuma ser o mais caro da linha, mesmo em rotomoldagem, e a categoria já é a mais disputada do mercado nacional.',
      },
    ],
    operacao: [
      {
        titulo: 'Fabricante do plástico',
        texto: 'Injeção ou rotomoldagem, própria ou terceirizada, conforme a peça. Sete fornecedores de corte e dobra do inox não se aplicam aqui, é uma cadeia de fornecedor diferente.',
      },
      {
        titulo: 'Dassg Têmpera',
        texto: 'Engenharia do produto, design, marca, embalagem e venda ao canal.',
      },
      {
        titulo: 'Distribuidor ou marketplace',
        texto: 'Compra a atacado (distribuidor) ou vende direto com comissão de plataforma (marketplace), e chega ao pet shop de bairro ou ao consumidor final.',
      },
      {
        titulo: 'Cliente final',
        texto: 'Compra no pet shop de bairro (canal mais forte do mercado) ou online, e volta para os refis.',
      },
    ],
    custoIntro:
      'Custo montado de baixo para cima, a partir do peso da peça e do preço da resina de polipropileno. O custo de injeção ou rotomoldagem ainda não tem cotação real: entra como fator sobre o custo do material, conforme a complexidade da peça, e é a primeira premissa a ser trocada por número real do engenheiro.',
    custoTitulo: 'Do quilo de resina ao preço na prateleira',
    custoRotuloPeso: 'Peso (kg)',
    quiosqueIntro:
      'Dois canais modelados: distribuidor para pet shop de bairro (a Dassg vende a atacado, o canal revende a varejo) e marketplace (a Dassg vende direto, descontando a comissão da plataforma). Escolha o canal no seletor acima.',
    fabricanteIntro:
      'Resultado da Dassg por canal, depois de pagar material, processo de fabricação, amortização do molde, componentes, embalagem e tributos sobre a venda.',
    riscos: [
      {
        risco: 'O mercado nacional já tem dois fabricantes consolidados cobrindo quase toda a linha (Furacão Pet, Stiloplast).',
        mitigacao: 'Vencer pelo que eles não entregam: design no meio do intervalo de preço, reposição vendida separada e engenharia elétrica e regulatória mais bem resolvida.',
      },
      {
        risco: 'A casinha e o arranhador de entrada são as categorias mais disputadas por preço.',
        mitigacao: 'Priorizar os produtos com menos concorrente de design (fonte, caixa sistema, mala) e deixar casinha completa para depois.',
      },
      {
        risco: 'O custo de injeção ou rotomoldagem ainda é premissa, sem cotação real.',
        mitigacao: 'Cotar por peça com o engenheiro, perguntando processo específico (injeção ou rotomoldagem), não uma cotação única para a linha.',
      },
      {
        risco: 'O preço da resina de polipropileno variou até 80% em 2026, segundo alerta da Abiplast.',
        mitigacao: 'Cenário conservador do modelo já usa o topo da faixa de preço pesquisada, não o meio.',
      },
      {
        risco: 'A fonte elétrica pode exigir certificação Inmetro ainda não orçada.',
        mitigacao: 'Confirmar com certificador credenciado antes de prometer prazo de lançamento da fonte especificamente.',
      },
      {
        risco: 'Molde é gasto sem volta: comprar o molde de produção errado é dinheiro perdido.',
        mitigacao: 'Molde piloto (lote pequeno, mais barato) antes do molde definitivo, ou terceirização sem comprar máquina.',
      },
    ],
    roadmap: [
      {
        periodo: '0 a 3 meses',
        titulo: 'Validação técnica',
        texto: 'Cotação de processo por peça (injeção ou rotomoldagem) com o engenheiro, protótipos dos produtos-ícone, confirmação de certificação Inmetro da fonte.',
      },
      {
        periodo: '3 a 6 meses',
        titulo: 'Validação de venda',
        texto: 'Lote piloto pequeno com molde barato, teste em 1 a 2 pet shops de bairro e em marketplace, antes de qualquer investimento maior.',
      },
      {
        periodo: '6 a 12 meses',
        titulo: 'Escala de canal',
        texto: 'Ampliar para mais pontos de distribuidor e consolidar o canal de marketplace, com o recorte completo (gato ou gato e cão).',
      },
      {
        periodo: '12 a 24 meses',
        titulo: 'Molde de produção definitivo',
        texto: 'Trocar o molde piloto pelo de produção nos produtos que validaram venda, e avaliar casinha completa e novos canais.',
      },
    ],
    decisoes: [
      'Recorte da linha: só gato ou gato e cão.',
      'Nome da marca: Dpata, Patas Leves ou outra direção, com busca formal no INPI.',
      'Autorização para cotar processo por peça (injeção ou rotomoldagem) com fornecedores.',
      'Canal de lançamento: distribuidor, marketplace, ou os dois em paralelo.',
      'Orçamento do molde piloto de validação.',
    ],
  },

  fontes,
}

export function getLinhaPlasticoBySlug(slug: string): LinhaPetConteudo | undefined {
  return slug === linhaPlastico.slug ? linhaPlastico : undefined
}
