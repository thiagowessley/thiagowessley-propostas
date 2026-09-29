export interface ValorProposta {
  principal: number
  manutencao?: number
  alternativa?: number  // para ancoragem: valor mais alto mostrado primeiro
  alternativa_label?: string  // legenda da ancoragem, ex: "Referencia de mercado (site + sistema completo)"
  moeda: 'BRL'
}

export interface ItemEscopo {
  titulo: string
  descricao: string
  limite?: string  // ex: "ate 12 posts/mes"
  resultado?: string  // molde dossiê: o que o cliente tem na mão depois da entrega
}

export interface FaseEscopo {
  numero: string
  titulo: string
  itens: ItemEscopo[]
  periodo?: string  // ex: "MAR/2026" badge no rodape do card
  resumo?: string   // molde dossiê: uma frase com o estado ao fim da fase
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

export interface PlanoVideo {
  youtubeId: string  // id do video no YouTube
  label?: string     // legenda pequena abaixo do video, ex: "Exemplo de entrega"
}

export interface PlanoPreco {
  nome: string           // "Basico", "Completo", "Setup"
  destaque?: boolean     // card central iluminado
  resumo: string         // linha de destaque, ex: "12 posts/mes"
  itens: string[]        // bullets do plano
  valor: number          // valor em reais (0 = "sob consulta")
  periodo?: string       // "/mes", "entrega unica"
  rodape?: string        // observacao pequena no fim
  video?: PlanoVideo     // exemplo em video do resultado do plano, opcional
  colunasItens?: 2 | 3   // desktop: divide os bullets em colunas e alarga o card, opcional
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

// --- Molde dossiê (28/09/2026): visual do dossie.thiagowessley.com.br, opcional por proposta ---

export interface DossieImagem {
  src: string       // caminho em /public, ex: "/img/dossie/dassg/q05.webp"
  alt: string
  largura: number
  altura: number
}

export interface DossieProva {
  titulo: string
  legenda: string
  imagem: DossieImagem
  url?: string      // link para abrir o material entregue
}

export interface DossieVideo {
  youtubeId: string
  titulo: string
  poster: string    // quadro vertical 9:16 em /public
}

// Desenho do site e do Instagram da marca (quadro 'presenca'): todo texto vem da proposta
export interface DossiePresenca {
  site: {
    endereco: string                    // ex: "marca.com.br"
    marca: string
    chamada: string
    menu: string[]
    produtos: DossieImagem[]            // vitrine, legenda = alt
    formulario: { titulo: string; opcoes: string[]; campos: string[]; botao: string; aviso: string }
  }
  instagram: {
    perfil: string                      // ex: "@marca"
    nome: string
    destaques: string[]
    posts: DossieImagem[]               // grade de até 6
    reels: number[]                     // índices dos posts que levam o ícone de vídeo
  }
}

export interface ExtrasDossie {
  retrato: DossieImagem & { foco?: string; mira?: [string, string] }   // imagem da abertura no visor de câmera (foco = object-position, mira = x e y do quadro de foco)
  galeria?: (DossieImagem & { foco?: string })[]   // outras imagens da abertura, trocadas a cada 3 segundos depois do retrato
  titulo: { fino: string; grosso: string }
  lede: string                          // linha de abertura abaixo do título
  documento: string                     // ex: "Proposta comercial"
  duracao: string                       // título da seção do projeto, ex: "em 60 dias"
  base: { provas: DossieProva[]; produtos: DossieImagem[] }   // o que já foi entregue
  linha: { titulo: string; nota: string; inicio: string; fim: string }  // cabeçalho da linha do tempo do projeto
  marcos: { dia: string; nome: string }[]   // pontos da linha do tempo
  videos?: DossieVideo[]                // prova do padrão de foto e vídeo (quadro 'videos')
  presenca?: DossiePresenca             // desenho do site e do Instagram (quadro 'presenca')
  teste: { etapa: string; nome: string }[]  // desenho do teste de mercado
  // quadro ao lado de cada fase, na mesma ordem de secoes.fases (null = fase sem quadro)
  paineis: ({ tipo: 'base' | 'produtos' | 'videos' | 'presenca' | 'teste'; titulo: string; legenda: string } | null)[]
  fecho: string                         // frase grande do encerramento
  depois?: string                       // próximo serviço, dito uma vez, abaixo do botão de ação
  assinatura?: DossieImagem             // foto ao lado do fecho (opcional)
  referencias?: { rotulo: string; url: string }[]  // links do rodapé: portfólio e trabalhos entregues
}

export interface PropostaData {
  slug: string              // ex: "instituto-site"
  estilo?: 'padrao' | 'dossie'  // molde visual. default: 'padrao' (o de sempre)
  dossie?: ExtrasDossie     // obrigatório quando estilo = 'dossie'
  ogImagem?: string         // imagem do cartão de compartilhamento (1200x630), caminho em /public
  cliente: string
  segmento: string
  servico: string
  responsavel?: string      // nome do responsavel do cliente (capa)
  validade: string          // ISO date: "2026-07-04"
  envio?: string            // ISO date de envio (capa). default: hoje
  valor: ValorProposta
  video_capa?: string       // caminho relativo ou URL do video
  intro_capa?: string       // paragrafo de introducao no rodape da capa
  mostrarBotaoPdf?: boolean // default false: propostas novas nao expoem download em PDF
  mostrarPortfolio?: boolean // default false: secao de Portfolio fica oculta a menos que a proposta peca
  ctaWhatsapp?: string      // texto do botao principal de WhatsApp no Encerramento. default: "Falar no WhatsApp"

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
