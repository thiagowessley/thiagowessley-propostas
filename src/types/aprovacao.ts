export interface AprovacaoPost {
  numero: string
  titulo: string
  pilar: string
  imagem: string
  handle: string
  legendaPreview: string
  legendaCorpo: string[]
  hashtags: string
  descricaoAprovacao: string
  publicarQuando: string
  plataformas: string[]
}

export interface AprovacaoEstrategiaItem {
  numero: string
  titulo: string
  texto: string
}

export interface AprovacaoData {
  slug: string
  cliente: string
  eyebrow: string
  titulo: string
  tituloDestaque: string
  intro: string
  validadeTexto: string
  estrategia: AprovacaoEstrategiaItem[]
  posts: AprovacaoPost[]
  contato: {
    whatsapp: string
  }
}
