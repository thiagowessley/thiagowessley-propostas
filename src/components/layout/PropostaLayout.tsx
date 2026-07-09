import type { ReactNode } from 'react'
import { SideNav } from './SideNav'

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
    <div className="proposta-page" style={{ maxWidth: 'var(--maxw)', margin: '0 auto', padding: '0 40px' }}>
      <SideNav items={navItems} />
      {children}
    </div>
  )
}
