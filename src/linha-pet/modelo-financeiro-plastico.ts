// Modelo financeiro da linha em plástico (nome de marca ainda em decisão dos sócios).
// Mesmo espírito do modelo-financeiro.ts do inox: toda premissa mora aqui, as páginas só chamam
// calcular(). scripts/verificar-modelo-pet-plastico.mjs refaz a conta de forma independente.
// Diferença de fundo em relação ao inox: custo de peça em plástico não vem de área de chapa, vem de
// peso da peça x preço da resina, mais amortização de molde por unidade (o inox não tem molde).
// Canal: a pesquisa da Fase 02 (frente 3) mostrou que quiosque não é o canal recomendado para este
// produto, então o modelo cobre os dois canais pesquisados: distribuidor (atacado para pet shop de
// bairro) e marketplace (venda direta com comissão).

export type CenarioId = 'conservador' | 'base' | 'otimista'
export type RecorteId = 'A' | 'B'
export type CanalId = 'distribuidor' | 'marketplace'
export type Complexidade = 'baixa' | 'media' | 'alta'

export interface ProdutoPremissa {
  id: string
  pesoPecaKg: number
  complexidade: Complexidade
  custoMoldeReais: number
  vidaUtilMoldeUnidades: number
  componentesReais: number
  embalagemReais: number
  precoVarejo: number
  volumeBaseMes: Partial<Record<RecorteId, number>>
}

export interface CenarioPremissa {
  rotulo: string
  precoResinaKg: number
  fatorProcessoCenario: number
  multiplicadorVolume: number
}

export interface CanalPremissa {
  rotulo: string
  vendeDireto: boolean
  margemDistribuidorOuComissao: number
  custosFixosMes: { operacao: number; marketing: number; outros: number }
  investimentoInicial: { setupCanal: number; mesesEstoqueInicial: number; mesesCapitalGiro: number }
}

export interface Premissas {
  globais: {
    perdaResina: number
    fatorProcesso: Record<Complexidade, number>
    margemFabricante: number
    tributosFabricante: number
    taxasCartaoVarejo: number
    registroMarca: number
    identidadeFotosEmbalagem: number
  }
  cenarios: Record<CenarioId, CenarioPremissa>
  canais: Record<CanalId, CanalPremissa>
  produtos: ProdutoPremissa[]
}

// Resina PP virgem: R$7,00/kg em lote industrial de 400t em SP (mfrural.com.br, 22/09/2026) contra
// R$13 a R$14,50/kg em lote pequeno de 1kg (combahamas.com.br, mesma data). A ABIPLAST alertou em
// abril de 2026 para alta de até 80% no PP por desabastecimento (plasticonews.org). Sem cotação real
// do fornecedor da Dassg, o cenário base usa o meio do intervalo industrial e o conservador usa o
// topo do intervalo de lote pequeno, para não subestimar o risco de alta.
const RESINA_BASE = 9.5
const RESINA_CONSERVADOR = 14.5
const RESINA_OTIMISTA = 7

export const PREMISSAS: Premissas = {
  globais: {
    perdaResina: 0.08,
    fatorProcesso: { baixa: 0.6, media: 1.1, alta: 1.7 },
    margemFabricante: 0.3,
    tributosFabricante: 0.15,
    taxasCartaoVarejo: 0.04,
    registroMarca: 2500,
    identidadeFotosEmbalagem: 12000,
  },
  cenarios: {
    conservador: { rotulo: 'Conservador', precoResinaKg: RESINA_CONSERVADOR, fatorProcessoCenario: 1.25, multiplicadorVolume: 0.6 },
    base: { rotulo: 'Base', precoResinaKg: RESINA_BASE, fatorProcessoCenario: 1, multiplicadorVolume: 1 },
    otimista: { rotulo: 'Otimista', precoResinaKg: RESINA_OTIMISTA, fatorProcessoCenario: 0.85, multiplicadorVolume: 1.5 },
  },
  canais: {
    // Distribuidor: a Dassg vende a atacado (preço com a margemFabricante já embutida) para um
    // distribuidor ou direto para o pet shop de bairro, que revende a varejo. A margem do canal
    // é a própria diferença entre atacado e varejo, igual ao modelo do inox: não soma taxa extra.
    distribuidor: {
      rotulo: 'Distribuidor para pet shop de bairro',
      vendeDireto: false,
      margemDistribuidorOuComissao: 0,
      custosFixosMes: { operacao: 1500, marketing: 1000, outros: 500 },
      investimentoInicial: { setupCanal: 5000, mesesEstoqueInicial: 1, mesesCapitalGiro: 2 },
    },
    // Marketplace: a Dassg vende direto ao consumidor pelo preço de varejo cheio, sem intermediário
    // comprando a atacado. O que sai da receita é só a comissão da plataforma. Usado 16%, media
    // entre a faixa do Mercado Livre (10 a 19%, ecommercenapratica.com, 22/09/2026) e a comissao
    // efetiva da Shopee (cerca de 14% mais R$7 fixo por item, mesma pesquisa), sem cotação exata da
    // categoria pet nas duas plataformas: Premissa, a confirmar no painel de vendedor.
    marketplace: {
      rotulo: 'Marketplace (venda direta)',
      vendeDireto: true,
      margemDistribuidorOuComissao: 0.16,
      custosFixosMes: { operacao: 2500, marketing: 2000, outros: 700 },
      investimentoInicial: { setupCanal: 3000, mesesEstoqueInicial: 1.5, mesesCapitalGiro: 2 },
    },
  },
  produtos: [
    { id: 'q01', pesoPecaKg: 0.3, complexidade: 'media', custoMoldeReais: 45000, vidaUtilMoldeUnidades: 60000, componentesReais: 55, embalagemReais: 15, precoVarejo: 189, volumeBaseMes: { A: 14, B: 14 } },
    { id: 'q02', pesoPecaKg: 0.5, complexidade: 'baixa', custoMoldeReais: 35000, vidaUtilMoldeUnidades: 60000, componentesReais: 8, embalagemReais: 20, precoVarejo: 129, volumeBaseMes: { A: 20 } },
    { id: 'q03', pesoPecaKg: 0.7, complexidade: 'baixa', custoMoldeReais: 50000, vidaUtilMoldeUnidades: 60000, componentesReais: 10, embalagemReais: 28, precoVarejo: 149, volumeBaseMes: { A: 10, B: 10 } },
    { id: 'q04', pesoPecaKg: 0.6, complexidade: 'media', custoMoldeReais: 60000, vidaUtilMoldeUnidades: 60000, componentesReais: 40, embalagemReais: 22, precoVarejo: 179, volumeBaseMes: { A: 12, B: 12 } },
    { id: 'q05', pesoPecaKg: 3, complexidade: 'alta', custoMoldeReais: 70000, vidaUtilMoldeUnidades: 20000, componentesReais: 20, embalagemReais: 60, precoVarejo: 349, volumeBaseMes: { B: 4 } },
    { id: 'q06', pesoPecaKg: 0.4, complexidade: 'baixa', custoMoldeReais: 30000, vidaUtilMoldeUnidades: 60000, componentesReais: 60, embalagemReais: 20, precoVarejo: 149, volumeBaseMes: { A: 16 } },
    { id: 'q07', pesoPecaKg: 1, complexidade: 'media', custoMoldeReais: 55000, vidaUtilMoldeUnidades: 60000, componentesReais: 90, embalagemReais: 40, precoVarejo: 249, volumeBaseMes: { A: 8, B: 8 } },
    { id: 'q08', pesoPecaKg: 0.6, complexidade: 'baixa', custoMoldeReais: 40000, vidaUtilMoldeUnidades: 60000, componentesReais: 12, embalagemReais: 24, precoVarejo: 139, volumeBaseMes: { A: 12 } },
    { id: 'q09', pesoPecaKg: 1.2, complexidade: 'alta', custoMoldeReais: 65000, vidaUtilMoldeUnidades: 20000, componentesReais: 70, embalagemReais: 45, precoVarejo: 349, volumeBaseMes: { B: 5 } },
    { id: 'q10', pesoPecaKg: 0.4, complexidade: 'baixa', custoMoldeReais: 32000, vidaUtilMoldeUnidades: 60000, componentesReais: 10, embalagemReais: 18, precoVarejo: 119, volumeBaseMes: { A: 10 } },
    { id: 'q11', pesoPecaKg: 1, complexidade: 'media', custoMoldeReais: 58000, vidaUtilMoldeUnidades: 20000, componentesReais: 55, embalagemReais: 35, precoVarejo: 229, volumeBaseMes: { B: 6 } },
    { id: 'q12', pesoPecaKg: 0.5, complexidade: 'media', custoMoldeReais: 38000, vidaUtilMoldeUnidades: 60000, componentesReais: 30, embalagemReais: 20, precoVarejo: 139, volumeBaseMes: { A: 10, B: 10 } },
    { id: 'q13', pesoPecaKg: 0.2, complexidade: 'baixa', custoMoldeReais: 20000, vidaUtilMoldeUnidades: 60000, componentesReais: 5, embalagemReais: 10, precoVarejo: 49, volumeBaseMes: { B: 18 } },
    { id: 'q14', pesoPecaKg: 0.5, complexidade: 'media', custoMoldeReais: 42000, vidaUtilMoldeUnidades: 20000, componentesReais: 45, embalagemReais: 22, precoVarejo: 159, volumeBaseMes: { B: 6 } },
    { id: 'q15', pesoPecaKg: 0.05, complexidade: 'baixa', custoMoldeReais: 15000, vidaUtilMoldeUnidades: 100000, componentesReais: 2, embalagemReais: 4, precoVarejo: 25, volumeBaseMes: { A: 40, B: 40 } },
  ],
}

export interface ResultadoProduto {
  id: string
  volume: number
  massaKg: number
  custoMaterial: number
  custoProcesso: number
  custoMoldePorUnidade: number
  custoUnitario: number
  precoAtacado: number
  precoVarejo: number
  markupQuiosque: number
}

export interface Resultado {
  recorte: RecorteId
  cenario: CenarioId
  canal: CanalId
  produtos: ResultadoProduto[]
  quiosque: {
    receita: number
    cmv: number
    taxas: number
    margemBruta: number
    contribuicao: number
    custosFixos: number
    lucroMensal: number
    margemContribuicaoPct: number
    pontoEquilibrioReceita: number | null
    unidades: number
    ticketMedio: number
  }
  investidor: {
    montagem: number
    caucaoLuvas: number
    estoqueInicial: number
    capitalGiro: number
    total: number
    paybackMeses: number | null
  }
  fabricante: {
    receita: number
    custoProducao: number
    tributos: number
    margemContribuicao: number
    investimento: number
    paybackMeses: number | null
  }
}

export function produtosDoRecorte(recorte: RecorteId, premissas: Premissas = PREMISSAS): ProdutoPremissa[] {
  return premissas.produtos.filter(p => p.volumeBaseMes[recorte] !== undefined)
}

export function calcular(recorte: RecorteId, cenarioId: CenarioId, canalId: CanalId = 'distribuidor', premissas: Premissas = PREMISSAS): Resultado {
  const g = premissas.globais
  const c = premissas.cenarios[cenarioId]
  const canal = premissas.canais[canalId]
  const itens = produtosDoRecorte(recorte, premissas)

  const produtos: ResultadoProduto[] = itens.map(p => {
    const massaKg = p.pesoPecaKg
    const custoMaterial = massaKg * c.precoResinaKg * (1 + g.perdaResina)
    const custoProcesso = custoMaterial * g.fatorProcesso[p.complexidade] * c.fatorProcessoCenario
    const custoMoldePorUnidade = p.custoMoldeReais / p.vidaUtilMoldeUnidades
    const custoUnitario = custoMaterial + custoProcesso + custoMoldePorUnidade + p.componentesReais + p.embalagemReais
    // Canal que vende direto (marketplace): a Dassg não vende a um revendedor com markup próprio,
    // então não existe preço de atacado separado, o custo de base é o custo de produção mesmo.
    // Canal com revenda (distribuidor): o preço de atacado carrega a margemFabricante, igual ao inox.
    const precoAtacado = canal.vendeDireto ? custoUnitario : custoUnitario / (1 - g.margemFabricante)
    const volume = Math.max(1, Math.round((p.volumeBaseMes[recorte] ?? 0) * c.multiplicadorVolume))
    return {
      id: p.id,
      volume,
      massaKg,
      custoMaterial,
      custoProcesso,
      custoMoldePorUnidade,
      custoUnitario,
      precoAtacado,
      precoVarejo: p.precoVarejo,
      markupQuiosque: p.precoVarejo / precoAtacado,
    }
  })

  const soma = (fn: (r: ResultadoProduto) => number) => produtos.reduce((t, r) => t + fn(r), 0)
  const receita = soma(r => r.volume * r.precoVarejo)
  const cmv = soma(r => r.volume * r.precoAtacado)
  const custoProducao = soma(r => r.volume * r.custoUnitario)
  const unidades = soma(r => r.volume)

  const f = canal.custosFixosMes
  const custosFixos = f.operacao + f.marketing + f.outros
  const taxas = receita * (g.taxasCartaoVarejo + canal.margemDistribuidorOuComissao)
  const margemBruta = receita - cmv
  const contribuicao = margemBruta - taxas
  const lucroMensal = contribuicao - custosFixos
  const margemContribuicaoPct = contribuicao / receita

  const inv = canal.investimentoInicial
  const estoqueInicial = cmv * inv.mesesEstoqueInicial
  const capitalGiro = custosFixos * inv.mesesCapitalGiro
  const totalInvestidor = inv.setupCanal + estoqueInicial + capitalGiro

  // Canal com revenda (distribuidor): a Dassg recebe o preço de atacado (cmv), como no inox.
  // Canal direto (marketplace): não existe revenda separada, a Dassg é quem vende e recebe a
  // receita já descontada de comissão e cartão (a mesma "taxas" calculada acima).
  const receitaFabricante = canal.vendeDireto ? receita - taxas : cmv
  const tributos = receitaFabricante * g.tributosFabricante
  const margemFabricante = receitaFabricante - custoProducao - tributos
  const investimentoFabricante = itens.reduce((t, p) => t + p.custoMoldeReais, 0) + g.registroMarca + g.identidadeFotosEmbalagem

  return {
    recorte,
    cenario: cenarioId,
    canal: canalId,
    produtos,
    quiosque: {
      receita,
      cmv,
      taxas,
      margemBruta,
      contribuicao,
      custosFixos,
      lucroMensal,
      margemContribuicaoPct,
      pontoEquilibrioReceita: margemContribuicaoPct > 0 ? custosFixos / margemContribuicaoPct : null,
      unidades,
      ticketMedio: receita / unidades,
    },
    investidor: {
      montagem: inv.setupCanal,
      caucaoLuvas: 0,
      estoqueInicial,
      capitalGiro,
      total: totalInvestidor,
      paybackMeses: lucroMensal > 0 ? totalInvestidor / lucroMensal : null,
    },
    fabricante: {
      receita: receitaFabricante,
      custoProducao,
      tributos,
      margemContribuicao: margemFabricante,
      investimento: investimentoFabricante,
      paybackMeses: margemFabricante > 0 ? investimentoFabricante / margemFabricante : null,
    },
  }
}
