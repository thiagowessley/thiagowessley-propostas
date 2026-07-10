import type { PropostaData } from '../types/proposta'
import { instituto } from './instituto'
import { caridadeSite } from './caridade-site'
import { caridadeRedes } from './caridade-redes'

export const propostas: Record<string, PropostaData> = {
  instituto,
  caridadeSite,
  caridadeRedes,
}

export function getPropostaBySlug(slug: string): PropostaData | undefined {
  return Object.values(propostas).find(p => p.slug === slug)
}
