import type { PropostaData } from '../types/proposta'

// Importar cada proposta aqui ao criar nova
// import { instituto } from './instituto'
// import { wood } from './wood'

export const propostas: Record<string, PropostaData> = {
  // instituto,
  // wood,
}

export function getPropostaBySlug(slug: string): PropostaData | undefined {
  return Object.values(propostas).find(p => p.slug === slug)
}
