import { useState } from 'react'
import type { AprovacaoPost } from '../../types/aprovacao'

interface Props {
  post: AprovacaoPost
  comentario: string
  onComentarioChange: (valor: string) => void
}

export function PostCard({ post, comentario, onComentarioChange }: Props) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="aprovacao-card">
      <div className="aprovacao-card-head">
        <div className="aprovacao-card-head-left">
          <div className="aprovacao-num">{post.numero}</div>
          <div className="aprovacao-titles">
            <h2>{post.titulo}</h2>
            <span className="aprovacao-pillar-tag">{post.pilar}</span>
          </div>
        </div>
        <span className="aprovacao-status-pill">Pronto</span>
      </div>

      <div className="aprovacao-content">
        <div className="aprovacao-preview">
          <div className="aprovacao-ig-mock">
            <div className="aprovacao-ig-header">
              <div className="aprovacao-ig-avatar">DG</div>
              <div className="aprovacao-ig-handle">{post.handle}</div>
              <div className="aprovacao-ig-dots">•••</div>
            </div>
            <div className="aprovacao-ig-image">
              {!imgError ? (
                <img src={post.imagem} alt={post.titulo} onError={() => setImgError(true)} />
              ) : (
                <div className="aprovacao-ig-image-placeholder">Imagem chega assim que exportada do Claude Design</div>
              )}
            </div>
            <div className="aprovacao-ig-actions">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 000-7.8z" /></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
              <svg className="spacer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" /></svg>
            </div>
            <div className="aprovacao-ig-caption-preview">
              <b>{post.handle}</b> {post.legendaPreview}
            </div>
          </div>
          <div className="aprovacao-platforms">
            {post.plataformas.map(p => (
              <span key={p} className="aprovacao-platform-chip">{p}</span>
            ))}
          </div>
        </div>

        <div className="aprovacao-body">
          <p className="aprovacao-desc">{post.descricaoAprovacao}</p>
          <details className="aprovacao-caption-box">
            <summary>Legenda ({post.plataformas.join(' · ')})</summary>
            <div className="aprovacao-caption-box-body">
              {post.legendaCorpo.map((par, i) => (
                <p key={i}>{par}</p>
              ))}
              <p className="aprovacao-caption-tags">{post.hashtags}</p>
            </div>
          </details>
          <div className="aprovacao-publish-when">
            Publicação: <b style={{ color: 'var(--gold)' }}>{post.publicarQuando}</b> após aprovação
          </div>
          <div className="aprovacao-comment-block">
            <span className="aprovacao-comment-label">Comentário (opcional)</span>
            <textarea
              className="aprovacao-comment-input"
              placeholder="Deixe aqui se quiser algum ajuste neste post..."
              value={comentario}
              onChange={e => onComentarioChange(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
