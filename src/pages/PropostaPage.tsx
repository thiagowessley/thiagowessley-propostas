import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getPropostaBySlug } from '../propostas/index'
import { PropostaLayout, type NavItem } from '../components/layout/PropostaLayout'
import { Capa } from '../components/sections/Capa'
import { Sobre } from '../components/sections/Sobre'
import { Portfolio } from '../components/sections/Portfolio'
import { Cenario } from '../components/sections/Cenario'
import { Escopo } from '../components/sections/Escopo'
import { Financeiro } from '../components/sections/Financeiro'
import { PrazosAlteracoes } from '../components/sections/PrazosAlteracoes'
import { ContratoEntrega } from '../components/sections/ContratoEntrega'
import { Pagamento } from '../components/sections/Pagamento'
import { ServicoAdicional } from '../components/sections/ServicoAdicional'
import { Referencias } from '../components/sections/Referencias'
import { Encerramento } from '../components/sections/Encerramento'
import { PopupSaida } from '../components/ui/PopupSaida'
import { registrarVisita } from '../lib/analytics'
import { calcularTempoLeitura } from '../lib/tempo'

export function PropostaPage() {
  const { slug } = useParams<{ slug: string }>()
  const proposta = slug ? getPropostaBySlug(slug) : undefined

  useEffect(() => {
    if (proposta) {
      registrarVisita(proposta.slug)
      document.title = `Proposta ${proposta.servico}: ${proposta.cliente}`
    }
  }, [proposta])

  const tempoLeitura = useMemo(() => {
    if (!proposta) return 0
    const textos = [
      proposta.servico,
      proposta.secoes.cenario.problema,
      proposta.secoes.cenario.publico,
      proposta.secoes.cenario.desafio,
      ...proposta.secoes.fases.flatMap(f => f.itens.map(i => i.titulo + ' ' + i.descricao)),
    ]
    return calcularTempoLeitura(textos)
  }, [proposta])

  const navItems = useMemo<NavItem[]>(() => {
    if (!proposta) return []
    const s = proposta.secoes
    const items: NavItem[] = []
    items.push({ id: 'cenario', label: 'Cenário' })
    items.push({ id: 'escopo', label: 'Escopo' })
    items.push({ id: 'financeiro', label: 'Investimento' })
    if (s.prazos) items.push({ id: 'prazos', label: 'Prazos' })
    if (proposta.sobre) items.push({ id: 'sobre', label: 'Sobre' })
    if (proposta.mostrarPortfolio && proposta.portfolio) items.push({ id: 'portfolio', label: 'Portfólio' })
    if (s.referencias) items.push({ id: 'referencias', label: 'Referências' })
    items.push({ id: 'encerramento', label: 'Contato' })
    return items
  }, [proposta])

  if (!proposta) {
    return (
      <div style={{ padding: '60px', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--muted)' }}>Proposta não encontrada.</h2>
        <p style={{ color: 'var(--muted)', marginTop: '8px', fontSize: '0.9rem' }}>
          Verifique o link ou entre em contato.
        </p>
      </div>
    )
  }

  const s = proposta.secoes

  return (
    <>
      <PropostaLayout navItems={navItems}>
        <Capa proposta={proposta} tempoLeitura={tempoLeitura} />
        <Cenario cenario={s.cenario} />
        <Escopo fases={s.fases} />
        <Financeiro
          valor={proposta.valor}
          planos={s.planos}
          primeiros30={s.primeiros_30_dias}
          confidencialidade={s.confidencialidade}
        />
        {s.prazos && <PrazosAlteracoes prazos={s.prazos} />}
        {s.contrato && <ContratoEntrega colunas={s.contrato} />}
        {s.pagamento && <Pagamento pagamento={s.pagamento} />}
        {proposta.sobre && <Sobre sobre={proposta.sobre} foto={proposta.foto_profissional} />}
        {proposta.mostrarPortfolio && proposta.portfolio && <Portfolio portfolio={proposta.portfolio} />}
        {s.servico_adicional && (
          <ServicoAdicional servico={{ ...s.servico_adicional, imagem: s.servico_adicional.imagem || proposta.foto_secundaria || '' }} />
        )}
        {s.referencias && <Referencias referencias={s.referencias} />}
        <Encerramento proposta={proposta} />
      </PropostaLayout>
      <PopupSaida whatsapp={proposta.contato.whatsapp} />
    </>
  )
}
