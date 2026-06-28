import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getPropostaBySlug } from '../propostas/index'
import { PropostaLayout } from '../components/layout/PropostaLayout'
import { Capa } from '../components/sections/Capa'
import { Cenario } from '../components/sections/Cenario'
import { Escopo } from '../components/sections/Escopo'
import { Financeiro } from '../components/sections/Financeiro'
import { Referencias } from '../components/sections/Referencias'
import { Contato } from '../components/sections/Contato'
import { PopupSaida } from '../components/ui/PopupSaida'
import { registrarVisita } from '../lib/analytics'
import { calcularTempoLeitura } from '../lib/tempo'

export function PropostaPage() {
  const { slug } = useParams<{ slug: string }>()
  const proposta = slug ? getPropostaBySlug(slug) : undefined

  useEffect(() => {
    if (proposta) {
      registrarVisita(proposta.slug)
      document.title = `Proposta ${proposta.servico} — ${proposta.cliente}`
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

  if (!proposta) {
    return (
      <div style={{ padding: '60px', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--muted)' }}>Proposta nao encontrada.</h2>
        <p style={{ color: 'var(--muted)', marginTop: '8px', fontSize: '0.9rem' }}>
          Verifique o link ou entre em contato.
        </p>
      </div>
    )
  }

  return (
    <>
      <PropostaLayout>
        <Capa proposta={proposta} tempoLeitura={tempoLeitura} />
        <Cenario cenario={proposta.secoes.cenario} />
        <Escopo fases={proposta.secoes.fases} />
        <Financeiro
          valor={proposta.valor}
          primeiros30={proposta.secoes.primeiros_30_dias}
          confidencialidade={proposta.secoes.confidencialidade}
        />
        {proposta.secoes.referencias && (
          <Referencias referencias={proposta.secoes.referencias} />
        )}
        <Contato proposta={proposta} />
      </PropostaLayout>
      <PopupSaida whatsapp={proposta.contato.whatsapp} />
    </>
  )
}
