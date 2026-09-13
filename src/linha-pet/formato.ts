const moeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })

export const brl = (n: number) => moeda.format(Math.round(n))

export const num = (n: number, casas = 0) =>
  n.toLocaleString('pt-BR', { minimumFractionDigits: casas, maximumFractionDigits: casas })

export const pct = (n: number, casas = 0) => `${num(n * 100, casas)}%`

export const vezes = (n: number) => `${num(n, 2)}x`

export const meses = (n: number | null) => (n === null ? 'Não se paga' : `${num(n, 1)} meses`)

export const brlOu = (n: number | null, seNulo: string) => (n === null ? seNulo : brl(n))

const EXTENSO = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']
const EXTENSO_FEMININO: Record<number, string> = { 1: 'uma', 2: 'duas' }

export const porExtenso = (n: number, genero: 'm' | 'f' = 'm') =>
  (genero === 'f' ? EXTENSO_FEMININO[n] : undefined) ?? EXTENSO[n] ?? String(n)

export const capitalizar = (texto: string) => texto.charAt(0).toUpperCase() + texto.slice(1)
