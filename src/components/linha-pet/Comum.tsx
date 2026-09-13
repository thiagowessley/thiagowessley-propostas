import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const FONTES_URL =
  'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@400;500;600&display=swap'

export function usePaginaLinhaPet(titulo: string) {
  useEffect(() => {
    document.title = titulo
    document.body.classList.add('lp-body')
    if (!document.getElementById('fonte-linha-pet')) {
      const link = document.createElement('link')
      link.id = 'fonte-linha-pet'
      link.rel = 'stylesheet'
      link.href = FONTES_URL
      document.head.appendChild(link)
    }
    return () => {
      document.body.classList.remove('lp-body')
    }
  }, [titulo])
}

interface BarraTopoProps {
  marca: string
  slug: string
  atual: 'catalogo' | 'plano'
}

export function BarraTopo({ marca, slug, atual }: BarraTopoProps) {
  return (
    <header className="lp-topo">
      <div className="lp-topo-barra">
        <span className="lp-topo-marca">{marca}</span>
        <nav className="lp-topo-links" aria-label="Materiais">
          <Link to={`/c/${slug}`} className={atual === 'catalogo' ? 'ativo' : ''}>
            Catálogo
          </Link>
          <Link to={`/n/${slug}`} className={atual === 'plano' ? 'ativo' : ''}>
            Plano de negócios
          </Link>
        </nav>
      </div>
    </header>
  )
}

interface OpcaoSeletor<T extends string> {
  valor: T
  rotulo: string
}

interface SeletorProps<T extends string> {
  rotulo: string
  opcoes: OpcaoSeletor<T>[]
  valor: T
  onChange: (valor: T) => void
}

export function Seletor<T extends string>({ rotulo, opcoes, valor, onChange }: SeletorProps<T>) {
  return (
    <div className="lp-seletor" role="group" aria-label={rotulo}>
      <span className="lp-seletor-rotulo">{rotulo}</span>
      <div className="lp-seletor-opcoes">
        {opcoes.map(o => (
          <button key={o.valor} type="button" aria-pressed={o.valor === valor} onClick={() => onChange(o.valor)}>
            {o.rotulo}
          </button>
        ))}
      </div>
    </div>
  )
}

interface FiguraProps {
  imagem?: string
  numero: string
  nome: string
}

export function Figura({ imagem, numero, nome }: FiguraProps) {
  if (imagem) {
    return <img className="lp-figura" src={imagem} alt={nome} loading="lazy" />
  }
  return (
    <div className="lp-figura lp-figura-vazia" role="img" aria-label={`${nome}: imagem em produção`}>
      <span className="lp-figura-num">{numero}</span>
      <span className="lp-figura-nota">Imagem do produto em produção</span>
    </div>
  )
}

export function Rodape({ texto }: { texto: string }) {
  return (
    <footer className="lp-rodape">
      <span>{texto}</span>
      <span>Preparado por Thiago Wessley</span>
    </footer>
  )
}
