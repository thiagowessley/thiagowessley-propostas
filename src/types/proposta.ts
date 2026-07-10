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
  periodo?: string  // ex: "MAR/2026" badge no rodape do card
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

// --- Redesign 2026: novas estruturas ---

export interface AreaAtuacao {
  nome: string
  nivel: number  // 0 a 100, barra de progresso
}

export interface SobreProfissional {
  saudacao: string          // ex: "Ola!"
  paragrafos: string[]      // texto de apresentacao
  atuacao?: AreaAtuacao[]   // grid de competencias com barras
}

export interface PortfolioItem {
  titulo: string
  categoria: string  // ex: "Evento", "Branding", "Site"
  imagem: string     // caminho /img/portfolio/p1.jpg
}

export interface Portfolio {
  intro: string[]                          // paragrafos da coluna esquerda
  link?: { label: string; url: string }    // link externo (Behance, etc)
  itens: PortfolioItem[]                   // grid de imagens
}

export interface PlanoPreco {
  nome: string           // "Basico", "Completo", "Setup"
  destaque?: boolean     // card central iluminado
  resumo: string         // linha de destaque, ex: "12 posts/mes"
  itens: string[]        // bullets do plano
  valor: number          // valor em reais (0 = "sob consulta")
  periodo?: string       // "/mes", "entrega unica"
  rodape?: string        // observacao pequena no fim
}

export interface ItemPrazo {
  texto: string
  bold?: string  // trecho do texto a destacar em negrito (substring)
}

export interface TermoColuna {
  titulo: string   // ex: "Contrato e Entrega" (2 palavras: light + bold)
  itens: string[]
}

export interface MeioPagamento {
  nome: string
  detalhe: string
}

export interface OpcaoPagamento {
  blocos: { titulo: string; descricao: string }[]
  meios: MeioPagamento[]
}

export interface ServicoAdicional {
  titulo: string
  paragrafos: string[]
  imagem: string
}

export interface PropostaData {
  slug: string              // ex: "instituto-site"
  cliente: string
  segmento: string
  servico: string
  responsavel?: string      // nome do responsavel do cliente (capa)
  validade: string          // ISO date: "2026-07-04"
  envio?: string            // ISO date de envio (capa). default: hoje
  valor: ValorProposta
  video_capa?: string       // caminho relativo ou URL do video
  intro_capa?: string       // paragrafo de introducao no rodape da capa

  // perfil do profissional (reutilizavel entre propostas)
  foto_profissional?: string
  foto_secundaria?: string
  sobre?: SobreProfissional
  portfolio?: Portfolio

  secoes: {
    cenario: {
      problema: string
      publico: string
      desafio: string
      entregas?: string[]  // "o que o site precisa entregar", lista de beneficios
    }
    fases: FaseEscopo[]
    referencias?: Referencia[]
    faq?: ItemFAQ[]
    primeiros_30_dias?: string[]
    confidencialidade?: string

    // redesign: novas secoes da proposta
    planos?: PlanoPreco[]
    prazos?: ItemPrazo[]
    contrato?: TermoColuna[]
    pagamento?: OpcaoPagamento
    servico_adicional?: ServicoAdicional
    encerramento?: string
  }

  utm_copy?: {
    whatsapp?: string
    email?: string
    default?: string
  }
  contato: {
    whatsapp: string       // numero com DDI: "5547992358161"
    email: string
    instagram?: string     // ex: "@thiagowessley"
    qr?: string            // caminho do QR code local (default: /img/qr-whatsapp.png)
  }
}
