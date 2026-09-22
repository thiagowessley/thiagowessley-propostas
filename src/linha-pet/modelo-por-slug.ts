// Resolve qual modelo financeiro usar (inox ou plástico) a partir do slug da URL. As páginas
// (CatalogoPage, PlanoPage) chamam isto em vez de importar modelo-financeiro.ts direto, para que
// o inox continue funcionando exatamente como antes e o plástico use a própria conta (peso de
// resina e molde, não área de chapa metálica).
import * as modeloInox from './modelo-financeiro'
import * as modeloPlastico from './modelo-financeiro-plastico'

export interface ModeloLinhaPet {
  PREMISSAS: modeloInox.Premissas | modeloPlastico.Premissas
  calcular: (recorte: string, cenario: string, canal?: string) => modeloInox.Resultado | modeloPlastico.Resultado
  canais?: Record<string, { rotulo: string }>
}

export function getModeloBySlug(slug: string): ModeloLinhaPet {
  if (slug === 'linha-plastico') {
    return {
      PREMISSAS: modeloPlastico.PREMISSAS,
      calcular: (recorte, cenario, canal) =>
        modeloPlastico.calcular(recorte as modeloPlastico.RecorteId, cenario as modeloPlastico.CenarioId, (canal as modeloPlastico.CanalId) ?? 'distribuidor'),
      canais: modeloPlastico.PREMISSAS.canais,
    }
  }
  return {
    PREMISSAS: modeloInox.PREMISSAS,
    calcular: (recorte, cenario) => modeloInox.calcular(recorte as modeloInox.RecorteId, cenario as modeloInox.CenarioId),
  }
}
