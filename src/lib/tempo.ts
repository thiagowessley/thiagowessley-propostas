/** Calcula minutos de leitura estimados (250 palavras/min) */
export function calcularTempoLeitura(textos: string[]): number {
  const totalPalavras = textos
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length
  return Math.max(1, Math.ceil(totalPalavras / 250))
}

/** Retorna dias restantes ate a validade (negativo = vencida) */
export function calcularDiasRestantes(validadeISO: string): number {
  const hoje = new Date()
  hoje.setHours(0, 0, 0, 0)
  const validade = new Date(`${validadeISO}T00:00:00`)
  validade.setHours(0, 0, 0, 0)
  const diff = validade.getTime() - hoje.getTime()
  return Math.round(diff / (1000 * 60 * 60 * 24))
}

/** Formata data ISO para exibicao: "04 de julho de 2026" */
export function formatarData(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

/** Formata valor em reais: 1997 -> "R$ 1.997" */
export function formatarReais(valor: number): string {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
  })
}

/** Calcula valor por dia: 1997 / 30 -> "R$ 67/dia" */
export function calcularPorDia(valor: number, dias = 30): string {
  return `${formatarReais(Math.round(valor / dias))}/dia`
}
