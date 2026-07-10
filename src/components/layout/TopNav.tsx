import { useEffect, useState } from 'react'

interface NavItem {
  id: string
  label: string
}

interface Props {
  items: NavItem[]
}

export function TopNav({ items }: Props) {
  const [activeId, setActiveId] = useState<string>('')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? Math.round((window.scrollY / total) * 100) : 0)

      for (let i = items.length - 1; i >= 0; i--) {
        const el = document.getElementById(items[i].id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveId(items[i].id)
          break
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [items])

  return (
    <header className="top-nav">
      <div className="top-nav-bar">
        <a href="#capa" className="top-nav-logo">Thiago Wessley</a>
        <nav className="top-nav-links">
          {items.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeId === item.id ? 'ativo' : ''}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="top-nav-progress">
        <div className="top-nav-progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </header>
  )
}
