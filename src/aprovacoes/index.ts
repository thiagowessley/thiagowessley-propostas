import type { AprovacaoData } from '../types/aprovacao'

export const aprovacoes: Record<string, AprovacaoData> = {}

export function getAprovacaoBySlug(slug: string): AprovacaoData | undefined {
  return Object.values(aprovacoes).find(a => a.slug === slug)
}
