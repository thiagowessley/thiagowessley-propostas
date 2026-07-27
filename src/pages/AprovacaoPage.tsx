import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAprovacaoBySlug } from '../aprovacoes/index'
import { PostCard } from '../components/aprovacao/PostCard'
import { ResumoBar } from '../components/aprovacao/ResumoBar'
import { TopNav } from '../components/layout/TopNav'

export function AprovacaoPage() {
  const { slug } = useParams<{ slug: string }>()
  const aprovacao = slug ? getAprovacaoBySlug(slug) : undefined
  const [comentarios, setComentarios] = useState<Record<string, string>>({})

  useEffect(() => {
    if (aprovacao) {
      document.title = `Aprovação: ${aprovacao.cliente}`
    }
  }, [aprovacao])

  if (!aprovacao) {
    return (
      <div style={{ padding: '60px', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--muted)' }}>Material não encontrado.</h2>
        <p style={{ color: 'var(--muted)', marginTop: '8px', fontSize: '0.9rem' }}>
          Verifique o link ou entre em contato.
        </p>
      </div>
    )
  }

  return (
    <>
      <TopNav items={[]} />
      <div className="aprovacao-page">
        <div className="aprovacao-masthead">
          <div className="aprovacao-eyebrow">{aprovacao.eyebrow}</div>
          <h1>
            {aprovacao.titulo} <span>{aprovacao.tituloDestaque}</span>
          </h1>
          <p>{aprovacao.intro}</p>
          <div className="aprovacao-validity">
            Resposta até <b>{aprovacao.validadeTexto}</b>
          </div>
        </div>

        <div className="aprovacao-strategy">
          <div className="aprovacao-strategy-title">Por que esses posts, nessa ordem</div>
          <div className="aprovacao-strategy-grid">
            {aprovacao.estrategia.map(item => (
              <div key={item.numero} className="aprovacao-strategy-item">
                <span className="aprovacao-strategy-num">{item.numero}</span>
                <div>
                  <h3>{item.titulo}</h3>
                  <p>{item.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="aprovacao-feed">
          {aprovacao.posts.map(post => (
            <PostCard
              key={post.numero}
              post={post}
              comentario={comentarios[post.numero] || ''}
              onComentarioChange={valor => setComentarios(prev => ({ ...prev, [post.numero]: valor }))}
            />
          ))}
        </div>

        <div className="aprovacao-footer">
          <div className="aprovacao-footer-brand">THIAGO WESSLEY</div>
          <div className="aprovacao-footer-contact">contato@thiagowessley.com.br · (47) 9 9235-8161</div>
        </div>
      </div>

      <ResumoBar cliente={aprovacao.cliente} posts={aprovacao.posts} comentarios={comentarios} />
    </>
  )
}
