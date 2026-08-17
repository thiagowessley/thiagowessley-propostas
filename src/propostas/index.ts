import type { PropostaData } from '../types/proposta'
import { instituto } from './instituto'
import { caridadeSite } from './caridade-site'
import { caridadeRedes } from './caridade-redes'
import { crisAftermovie } from './cris-aftermovie'
import { radioParatiMentoria } from './radio-parati-mentoria'
import { radioParatiProducao } from './radio-parati-producao'
import { eduardaDiariaConteudo } from './eduarda-diaria-conteudo'
import { eduardaAdrianaDiariaCompartilhada } from './eduarda-adriana-diaria-compartilhada'
import { valensProducaoConteudo } from './valens-producao-conteudo'

export const propostas: Record<string, PropostaData> = {
  instituto,
  caridadeSite,
  caridadeRedes,
  crisAftermovie,
  radioParatiMentoria,
  radioParatiProducao,
  eduardaDiariaConteudo,
  eduardaAdrianaDiariaCompartilhada,
  valensProducaoConteudo,
}

export function getPropostaBySlug(slug: string): PropostaData | undefined {
  return Object.values(propostas).find(p => p.slug === slug)
}
