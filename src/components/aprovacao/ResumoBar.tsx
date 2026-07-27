import { useState } from 'react'
import type { AprovacaoPost } from '../../types/aprovacao'

interface Props {
  cliente: string
  posts: AprovacaoPost[]
  comentarios: Record<string, string>
}

export function ResumoBar({ cliente, posts, comentarios }: Props) {
  const [texto, setTexto] = useState('')
  const [visivel, setVisivel] = useState(false)

  function gerarResumo() {
    const linhas = [`Comentários · Aprovação · ${cliente}`, '']
    let algum = false
    posts.forEach(post => {
      const valor = (comentarios[post.numero] || '').trim()
      if (valor) {
        algum = true
        linhas.push(`Post ${post.numero} · ${post.titulo}:`)
        linhas.push(valor)
        linhas.push('')
      }
    })
    if (!algum) {
      linhas.push('Nenhum ajuste pedido, os posts estão aprovados como estão.')
    }
    setTexto(linhas.join('\n'))
    setVisivel(true)
    requestAnimationFrame(() => {
      document.getElementById('aprovacao-output')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
  }

  return (
    <>
      {visivel && (
        <div className="aprovacao-output-panel" id="aprovacao-output">
          <div className="aprovacao-output-panel-inner">
            <p>Selecione tudo e copie (Ctrl+C / Cmd+C) pra colar no WhatsApp:</p>
            <textarea className="aprovacao-output-text" readOnly value={texto} onFocus={e => e.target.select()} />
          </div>
        </div>
      )}
      <div className="aprovacao-summary-bar">
        <div className="aprovacao-summary-bar-inner">
          <span className="aprovacao-summary-hint">Preencheu algum comentário? Gere o resumo pra enviar de volta.</span>
          <button className="aprovacao-summary-btn" onClick={gerarResumo}>Gerar resumo dos comentários</button>
        </div>
      </div>
    </>
  )
}
