import type { ReactNode } from 'react'
import { SideNav } from './SideNav'

const NAV_ITEMS = [
  { id: 'capa',        label: 'Inicio' },
  { id: 'cenario',     label: 'O Cenario' },
  { id: 'escopo',      label: 'Escopo' },
  { id: 'financeiro',  label: 'Investimento' },
  { id: 'referencias', label: 'Referencias' },
  { id: 'contato',     label: 'Proximo Passo' },
]

interface Props {
  children: ReactNode
}

export function PropostaLayout({ children }: Props) {
  return (
    <div className="proposta-page" style={{ maxWidth: '820px', margin: '0 auto', padding: '0 32px' }}>
      <SideNav items={NAV_ITEMS} />
      {children}
    </div>
  )
}
