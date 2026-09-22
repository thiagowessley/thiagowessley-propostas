// Refaz, de forma independente, toda a conta do modelo financeiro da linha em plástico e compara
// com o que as páginas mostram. Depois planta um erro de propósito para provar que a verificação
// realmente detecta divergência. Uso: node scripts/verificar-modelo-pet-plastico.mjs
import { PREMISSAS, calcular } from '../src/linha-pet/modelo-financeiro-plastico.ts'

const TOLERANCIA = 0.005
const clonar = o => JSON.parse(JSON.stringify(o))

function contaIndependente(premissas, recorte, cenarioId, canalId) {
  const g = premissas.globais
  const c = premissas.cenarios[cenarioId]
  const canal = premissas.canais[canalId]
  const itens = premissas.produtos.filter(p => p.volumeBaseMes[recorte] !== undefined)

  const porProduto = {}
  let receita = 0
  let cmv = 0
  let custoProducao = 0
  let unidades = 0
  for (const p of itens) {
    const kg = p.pesoPecaKg
    const material = c.precoResinaKg * kg + c.precoResinaKg * kg * g.perdaResina
    const processo = material * c.fatorProcessoCenario * g.fatorProcesso[p.complexidade]
    const molde = p.custoMoldeReais / p.vidaUtilMoldeUnidades
    const custo = p.embalagemReais + p.componentesReais + molde + processo + material
    const atacado = canal.vendeDireto ? custo : custo * (1 / (1 - g.margemFabricante))
    const volume = Math.max(1, Math.round(p.volumeBaseMes[recorte] * c.multiplicadorVolume))
    receita += p.precoVarejo * volume
    cmv += atacado * volume
    custoProducao += custo * volume
    unidades += volume
    porProduto[p.id] = { massaKg: kg, custoMoldePorUnidade: molde, custoUnitario: custo, precoAtacado: atacado, volume, markupQuiosque: p.precoVarejo / atacado }
  }

  const fixos = canal.custosFixosMes.operacao + canal.custosFixosMes.marketing + canal.custosFixosMes.outros
  const taxas = (g.taxasCartaoVarejo + canal.margemDistribuidorOuComissao) * receita
  const lucro = receita - taxas - cmv - fixos
  const pctContrib = 1 - cmv / receita - (g.taxasCartaoVarejo + canal.margemDistribuidorOuComissao)
  const inv = canal.investimentoInicial
  const totalInvestidor = inv.setupCanal + inv.mesesEstoqueInicial * cmv + inv.mesesCapitalGiro * fixos
  const receitaFab = canal.vendeDireto ? receita - taxas : cmv
  const tributos = g.tributosFabricante * receitaFab
  const margemFab = receitaFab - tributos - custoProducao
  const invFab = itens.reduce((t, p) => t + p.custoMoldeReais, 0) + g.identidadeFotosEmbalagem + g.registroMarca

  return {
    porProduto,
    campos: {
      'quiosque.receita': receita,
      'quiosque.cmv': cmv,
      'quiosque.taxas': taxas,
      'quiosque.custosFixos': fixos,
      'quiosque.lucroMensal': lucro,
      'quiosque.pontoEquilibrioReceita': pctContrib > 0 ? fixos / pctContrib : null,
      'quiosque.unidades': unidades,
      'quiosque.ticketMedio': receita / unidades,
      'investidor.total': totalInvestidor,
      'investidor.paybackMeses': lucro > 0 ? totalInvestidor / lucro : null,
      'fabricante.custoProducao': custoProducao,
      'fabricante.tributos': tributos,
      'fabricante.margemContribuicao': margemFab,
      'fabricante.investimento': invFab,
      'fabricante.paybackMeses': margemFab > 0 ? invFab / margemFab : null,
    },
  }
}

function pegar(obj, caminho) {
  return caminho.split('.').reduce((o, k) => o[k], obj)
}

function iguais(a, b) {
  if (a === null || b === null) return a === b
  return Math.abs(a - b) <= TOLERANCIA * Math.max(1, Math.abs(b))
}

function comparar(resultadoModelo, esperado) {
  const falhas = []
  for (const [caminho, valor] of Object.entries(esperado.campos)) {
    const obtido = pegar(resultadoModelo, caminho)
    if (!iguais(obtido, valor)) falhas.push(`${caminho}: modelo ${obtido} x independente ${valor}`)
  }
  for (const r of resultadoModelo.produtos) {
    const e = esperado.porProduto[r.id]
    for (const k of ['massaKg', 'custoMoldePorUnidade', 'custoUnitario', 'precoAtacado', 'volume', 'markupQuiosque']) {
      if (!iguais(r[k], e[k])) falhas.push(`${r.id}.${k}: modelo ${r[k]} x independente ${e[k]}`)
    }
  }
  return falhas
}

let totalFalhas = 0
for (const recorte of ['A', 'B']) {
  for (const cenario of ['conservador', 'base', 'otimista']) {
    for (const canal of ['distribuidor', 'marketplace']) {
      const falhas = comparar(calcular(recorte, cenario, canal), contaIndependente(PREMISSAS, recorte, cenario, canal))
      totalFalhas += falhas.length
      console.log(`Recorte ${recorte} / ${cenario} / ${canal}: ${falhas.length === 0 ? 'OK' : 'DIVERGE'}`)
      falhas.forEach(f => console.log('   ' + f))
    }
  }
}

// Erro plantado: o modelo roda com a resina R$ 1/kg mais cara, a conta independente usa o valor real.
// Se a verificação não acusar diferença, ela não serve como garantia.
const adulterado = clonar(PREMISSAS)
adulterado.cenarios.base.precoResinaKg += 1
const detectou = comparar(calcular('A', 'base', 'distribuidor', adulterado), contaIndependente(PREMISSAS, 'A', 'base', 'distribuidor')).length > 0
console.log(`Teste do erro plantado: ${detectou ? 'DETECTADO (verificador confiável)' : 'NÃO DETECTADO (verificador inválido)'}`)

if (totalFalhas > 0 || !detectou) {
  console.log('\nRESULTADO: FALHOU')
  process.exit(1)
}
console.log('\nRESULTADO: modelo conferido nos 12 cenários (2 recortes x 3 cenários x 2 canais), verificador provado com erro plantado')
