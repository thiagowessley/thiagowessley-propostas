import type { PropostaData } from '../types/proposta'
import { instituto } from './instituto'

export const propostas: Record<string, PropostaData> = {
  instituto,
}

export function getPropostaBySlug(slug: string): PropostaData | undefined {
  return Object.values(propostas).find(p => p.slug === slug)
}
