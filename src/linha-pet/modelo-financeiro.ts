// Modelo financeiro da linha Patas de Aço.
// Toda premissa mora aqui. As páginas nunca digitam número à mão, só chamam calcular().
// scripts/verificar-modelo-pet.mjs refaz a conta de forma independente para provar o resultado.

export type CenarioId = 'conservador' | 'base' | 'otimista'
export type RecorteId = 'A' | 'B'
export type Complexidade = 'baixa' | 'media' | 'alta'

export interface ProdutoPremissa {
  id: string
  areaChapaM2: number
  espessuraMm: number
  complexidade: Complexidade
  componentesReais: number
  embalagemReais: number
  precoVarejo: number
  volumeBaseMes: Partial<Record<RecorteId, number>>
}

export interface CenarioPremissa {
  rotulo: string
  precoInoxKg: number
  fatorProcessoCenario: number
  multiplicadorVolume: number
  custosFixosQuiosque: {
    aluguel: number
    taxaShopping: number
    equipe: number
    marketing: number
    outros: number
  }
  investimentoQuiosque: {
    montagem: number
    caucaoLuvas: number
    mesesEstoqueInicial: number
    mesesCapitalGiro: number
  }
  desenvolvimentoPorProduto: number
}

export interface Premissas {
  globais: {
    densidadeKgPorM2PorMm: number
    perdaChapa: number
    fatorProcesso: Record<Complexidade, number>
    margemFabricante: number
    tributosFabricante: number
    taxasVarejo: number
    registroMarca: number
    identidadeFotosEmbalagem: number
  }
  cenarios: Record<CenarioId, CenarioPremissa>
  produtos: ProdutoPremissa[]
}

const INOX_304_KG = 41.22

export const PREMISSAS: Premissas = {
  globais: {
    densidadeKgPorM2PorMm: 7.93,
    perdaChapa: 0.2,
    fatorProcesso: { baixa: 0.5, media: 0.9, alta: 1.3 },
    margemFabricante: 0.3,
    tributosFabricante: 0.15,
    taxasVarejo: 0.11,
    registroMarca: 2500,
    identidadeFotosEmbalagem: 12000,
  },
  cenarios: {
    conservador: {
      rotulo: 'Conservador',
      precoInoxKg: INOX_304_KG * 1.1,
      fatorProcessoCenario: 1.25,
      multiplicadorVolume: 0.6,
      custosFixosQuiosque: { aluguel: 10000, taxaShopping: 2000, equipe: 7000, marketing: 2000, outros: 1200 },
      investimentoQuiosque: { montagem: 60000, caucaoLuvas: 15000, mesesEstoqueInicial: 1.5, mesesCapitalGiro: 3 },
      desenvolvimentoPorProduto: 6000,
    },
    base: {
      rotulo: 'Base',
      precoInoxKg: INOX_304_KG,
      fatorProcessoCenario: 1,
      multiplicadorVolume: 1,
      custosFixosQuiosque: { aluguel: 7000, taxaShopping: 1500, equipe: 6000, marketing: 1500, outros: 1000 },
      investimentoQuiosque: { montagem: 40000, caucaoLuvas: 10000, mesesEstoqueInicial: 1.5, mesesCapitalGiro: 3 },
      desenvolvimentoPorProduto: 4000,
    },
    otimista: {
      rotulo: 'Otimista',
      precoInoxKg: INOX_304_KG,
      fatorProcessoCenario: 0.85,
      multiplicadorVolume: 1.5,
      custosFixosQuiosque: { aluguel: 5000, taxaShopping: 1000, equipe: 5000, marketing: 1000, outros: 800 },
      investimentoQuiosque: { montagem: 25000, caucaoLuvas: 6000, mesesEstoqueInicial: 1.5, mesesCapitalGiro: 3 },
      desenvolvimentoPorProduto: 3000,
    },
  },
  produtos: [
    { id: 'p01', areaChapaM2: 0.8, espessuraMm: 0.6, complexidade: 'media', componentesReais: 10, embalagemReais: 35, precoVarejo: 990, volumeBaseMes: { A: 10, B: 10 } },
    { id: 'p02', areaChapaM2: 1.5, espessuraMm: 0.6, complexidade: 'media', componentesReais: 25, embalagemReais: 55, precoVarejo: 2190, volumeBaseMes: { A: 4 } },
    { id: 'p03', areaChapaM2: 0.2025, espessuraMm: 1.2, complexidade: 'baixa', componentesReais: 35, embalagemReais: 15, precoVarejo: 590, volumeBaseMes: { A: 18, B: 18 } },
    { id: 'p04', areaChapaM2: 0.48, espessuraMm: 1.2, complexidade: 'media', componentesReais: 255, embalagemReais: 60, precoVarejo: 2290, volumeBaseMes: { A: 4 } },
    { id: 'p05', areaChapaM2: 0.3, espessuraMm: 1.5, complexidade: 'baixa', componentesReais: 75, embalagemReais: 45, precoVarejo: 1190, volumeBaseMes: { A: 8, B: 8 } },
    { id: 'p06', areaChapaM2: 1.2, espessuraMm: 1.2, complexidade: 'media', componentesReais: 345, embalagemReais: 110, precoVarejo: 4490, volumeBaseMes: { A: 2 } },
    { id: 'p07', areaChapaM2: 0.148, espessuraMm: 0.8, complexidade: 'alta', componentesReais: 60, embalagemReais: 25, precoVarejo: 549, volumeBaseMes: { A: 10, B: 12 } },
    { id: 'p08', areaChapaM2: 0.02, espessuraMm: 1.5, complexidade: 'baixa', componentesReais: 55, embalagemReais: 12, precoVarejo: 249, volumeBaseMes: { A: 20, B: 20 } },
    { id: 'p09', areaChapaM2: 0.33, espessuraMm: 1.2, complexidade: 'media', componentesReais: 86, embalagemReais: 60, precoVarejo: 1290, volumeBaseMes: { B: 8 } },
    { id: 'p10', areaChapaM2: 0.75, espessuraMm: 1, complexidade: 'media', componentesReais: 131, embalagemReais: 80, precoVarejo: 2290, volumeBaseMes: { B: 3 } },
    { id: 'p11', areaChapaM2: 0.084, espessuraMm: 1.5, complexidade: 'media', componentesReais: 15, embalagemReais: 15, precoVarejo: 390, volumeBaseMes: { B: 16 } },
  ],
}

export interface ResultadoProduto {
  id: string
  volume: number
  massaKg: number
  custoMaterial: number
  custoProcesso: number
  custoUnitario: number
  precoAtacado: number
  precoVarejo: number
  markupQuiosque: number
}

export interface Resultado {
  recorte: RecorteId
  cenario: CenarioId
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

export function calcular(recorte: RecorteId, cenarioId: CenarioId, premissas: Premissas = PREMISSAS): Resultado {
  const g = premissas.globais
  const c = premissas.cenarios[cenarioId]
  const itens = produtosDoRecorte(recorte, premissas)

  const produtos: ResultadoProduto[] = itens.map(p => {
    const massaKg = p.areaChapaM2 * p.espessuraMm * g.densidadeKgPorM2PorMm
    const custoMaterial = massaKg * c.precoInoxKg * (1 + g.perdaChapa)
    const custoProcesso = custoMaterial * g.fatorProcesso[p.complexidade] * c.fatorProcessoCenario
    const custoUnitario = custoMaterial + custoProcesso + p.componentesReais + p.embalagemReais
    const precoAtacado = custoUnitario / (1 - g.margemFabricante)
    const volume = Math.max(1, Math.round((p.volumeBaseMes[recorte] ?? 0) * c.multiplicadorVolume))
    return {
      id: p.id,
      volume,
      massaKg,
      custoMaterial,
      custoProcesso,
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

  const f = c.custosFixosQuiosque
  const custosFixos = f.aluguel + f.taxaShopping + f.equipe + f.marketing + f.outros
  const taxas = receita * g.taxasVarejo
  const margemBruta = receita - cmv
  const contribuicao = margemBruta - taxas
  const lucroMensal = contribuicao - custosFixos
  const margemContribuicaoPct = contribuicao / receita

  const inv = c.investimentoQuiosque
  const estoqueInicial = cmv * inv.mesesEstoqueInicial
  const capitalGiro = custosFixos * inv.mesesCapitalGiro
  const totalInvestidor = inv.montagem + inv.caucaoLuvas + estoqueInicial + capitalGiro

  const tributos = cmv * g.tributosFabricante
  const margemFabricante = cmv - custoProducao - tributos
  const investimentoFabricante = itens.length * c.desenvolvimentoPorProduto + g.registroMarca + g.identidadeFotosEmbalagem

  return {
    recorte,
    cenario: cenarioId,
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
      montagem: inv.montagem,
      caucaoLuvas: inv.caucaoLuvas,
      estoqueInicial,
      capitalGiro,
      total: totalInvestidor,
      paybackMeses: lucroMensal > 0 ? totalInvestidor / lucroMensal : null,
    },
    fabricante: {
      receita: cmv,
      custoProducao,
      tributos,
      margemContribuicao: margemFabricante,
      investimento: investimentoFabricante,
      paybackMeses: margemFabricante > 0 ? investimentoFabricante / margemFabricante : null,
    },
  }
}
