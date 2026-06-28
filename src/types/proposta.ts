export interface ValorProposta {
  principal: number
  manutencao?: number
  alternativa?: number  // para ancoragem: valor mais alto mostrado primeiro
  moeda: 'BRL'
}

export interface ItemEscopo {
  titulo: string
  descricao: string
  limite?: string  // ex: "ate 12 posts/mes"
}

export interface FaseEscopo {
  numero: string
  titulo: string
  itens: ItemEscopo[]
}

export interface Referencia {
  nome: string
  url: string
  tecnica: string  // o que vamos aplicar deste site
  thumbnail?: string
}

export interface ItemFAQ {
  pergunta: string
  resposta: string
}

export interface PropostaData {
  slug: string              // ex: "instituto-abc123"
  cliente: string
  segmento: string
  servico: string
  validade: string          // ISO date: "2026-07-04"
  valor: ValorProposta
  video_capa?: string       // caminho relativo ou URL do video
  secoes: {
    cenario: {
      problema: string
      publico: string
      desafio: string
    }
    fases: FaseEscopo[]
    referencias?: Referencia[]
    faq?: ItemFAQ[]
    primeiros_30_dias?: string[]
    confidencialidade?: string
  }
  utm_copy?: {
    whatsapp?: string
    email?: string
    default?: string
  }
  contato: {
    whatsapp: string       // numero com DDI: "5547992358161"
    email: string
  }
}
