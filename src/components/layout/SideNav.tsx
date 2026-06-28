import { useEffect, useState } from 'react'

interface NavItem {
  id: string
  label: string
}

interface Props {
  items: NavItem[]
}

export function SideNav({ items }: Props) {
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
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [items])

  return (
    <nav className="side-nav" style={{
      position: 'fixed',
      top: '50%',
      right: '24px',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      zIndex: 100,
    }}>
      {items.map(item => (
        <a
          key={item.id}
          href={`#${item.id}`}
          title={item.label}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: activeId === item.id ? 'var(--gold)' : 'var(--muted)',
            fontSize: '0.75rem',
            transition: 'color 0.2s',
          }}
        >
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: activeId === item.id ? 'var(--gold)' : 'var(--border)',
            flexShrink: 0,
            transition: 'background 0.2s',
          }} />
        </a>
      ))}
      <div style={{
        marginTop: '8px',
        fontSize: '0.65rem',
        color: 'var(--muted)',
        textAlign: 'center',
      }}>{progress}%</div>
    </nav>
  )
}
