import type { ReactNode } from 'react'
import { TopNav } from './TopNav'

export interface NavItem {
  id: string
  label: string
}

interface Props {
  children: ReactNode
  navItems: NavItem[]
}

export function PropostaLayout({ children, navItems }: Props) {
  return (
    <>
      <TopNav items={navItems} />
      <div className="proposta-page" style={{ maxWidth: 'var(--maxw)', margin: '0 auto', padding: '0 40px' }}>
        {children}
      </div>
    </>
  )
}
