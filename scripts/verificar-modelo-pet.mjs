// Refaz, de forma independente, toda a conta do modelo financeiro da linha Patas de Aço e compara
// com o que as páginas mostram. Depois planta um erro de propósito para provar que a verificação
// realmente detecta divergência. Uso: node scripts/verificar-modelo-pet.mjs
import { PREMISSAS, calcular } from '../src/linha-pet/modelo-financeiro.ts'

const TOLERANCIA = 0.005
const clonar = o => JSON.parse(JSON.stringify(o))

function contaIndependente(premissas, recorte, cenarioId) {
  const g = premissas.globais
  const c = premissas.cenarios[cenarioId]
  const itens = premissas.produtos.filter(p => p.volumeBaseMes[recorte] !== undefined)

  const porProduto = {}
  let receita = 0
  let cmv = 0
  let custoProducao = 0
  let unidades = 0
  for (const p of itens) {
    const kg = p.espessuraMm * g.densidadeKgPorM2PorMm * p.areaChapaM2
    const material = c.precoInoxKg * kg + c.precoInoxKg * kg * g.perdaChapa
    const processo = material * c.fatorProcessoCenario * g.fatorProcesso[p.complexidade]
    const custo = p.embalagemReais + p.componentesReais + processo + material
    const atacado = custo * (1 / (1 - g.margemFabricante))
    const volume = Math.max(1, Math.round(p.volumeBaseMes[recorte] * c.multiplicadorVolume))
    receita += p.precoVarejo * volume
    cmv += atacado * volume
    custoProducao += custo * volume
    unidades += volume
    porProduto[p.id] = { massaKg: kg, custoUnitario: custo, precoAtacado: atacado, volume, markupQuiosque: p.precoVarejo / atacado }
  }

  const fixos = Object.values(c.custosFixosQuiosque).reduce((a, b) => a + b, 0)
  const taxas = g.taxasVarejo * receita
  const lucro = receita - taxas - cmv - fixos
  const pctContrib = 1 - cmv / receita - g.taxasVarejo
  const inv = c.investimentoQuiosque
  const totalInvestidor = inv.caucaoLuvas + inv.montagem + inv.mesesEstoqueInicial * cmv + inv.mesesCapitalGiro * fixos
  const tributos = g.tributosFabricante * cmv
  const margemFab = cmv - tributos - custoProducao
  const invFab = g.identidadeFotosEmbalagem + g.registroMarca + c.desenvolvimentoPorProduto * itens.length

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
    for (const k of ['massaKg', 'custoUnitario', 'precoAtacado', 'volume', 'markupQuiosque']) {
      if (!iguais(r[k], e[k])) falhas.push(`${r.id}.${k}: modelo ${r[k]} x independente ${e[k]}`)
    }
  }
  return falhas
}

let totalFalhas = 0
for (const recorte of ['A', 'B']) {
  for (const cenario of ['conservador', 'base', 'otimista']) {
    const falhas = comparar(calcular(recorte, cenario), contaIndependente(PREMISSAS, recorte, cenario))
    totalFalhas += falhas.length
    console.log(`Recorte ${recorte} / ${cenario}: ${falhas.length === 0 ? 'OK' : 'DIVERGE'}`)
    falhas.forEach(f => console.log('   ' + f))
  }
}

// Erro plantado: o modelo roda com o inox R$ 1/kg mais caro, a conta independente usa o valor real.
// Se a verificação não acusar diferença, ela não serve como garantia.
const adulterado = clonar(PREMISSAS)
adulterado.cenarios.base.precoInoxKg += 1
const detectou = comparar(calcular('A', 'base', adulterado), contaIndependente(PREMISSAS, 'A', 'base')).length > 0
console.log(`Teste do erro plantado: ${detectou ? 'DETECTADO (verificador confiável)' : 'NÃO DETECTADO (verificador inválido)'}`)

if (totalFalhas > 0 || !detectou) {
  console.log('\nRESULTADO: FALHOU')
  process.exit(1)
}
console.log('\nRESULTADO: modelo conferido nos 6 cenários, verificador provado com erro plantado')
