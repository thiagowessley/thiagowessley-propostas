import type { AprovacaoData } from '../types/aprovacao'
import { dassgMes1 } from './dassg-mes1'

export const aprovacoes: Record<string, AprovacaoData> = {
  dassgMes1,
}

export function getAprovacaoBySlug(slug: string): AprovacaoData | undefined {
  return Object.values(aprovacoes).find(a => a.slug === slug)
}
