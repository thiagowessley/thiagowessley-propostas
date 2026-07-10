import type { ReactNode } from 'react'
import { TopNav } from './TopNav'

export interface NavItem {
  id: string
  label: string
}

interface Props {
  children: ReactNode
  navItems: NavItem[]
  whatsapp: string
}

export function PropostaLayout({ children, navItems, whatsapp }: Props) {
  return (
    <>
      <TopNav items={navItems} whatsapp={whatsapp} />
      <div className="proposta-page" style={{ maxWidth: 'var(--maxw)', margin: '0 auto', padding: '0 40px' }}>
        {children}
      </div>
    </>
  )
}
