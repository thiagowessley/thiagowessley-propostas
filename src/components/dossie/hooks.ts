// Comportamentos do molde dossiê, portados de thiagowessley-dossies/assets/dossie.js.
import { useEffect, useRef, useState, type RefObject } from 'react'

export interface Capitulo {
  id: string
  rotulo: string
}

/** true quando a media query casa; acompanha mudanças (girar o celular, redimensionar). */
export function useMedia(query: string): boolean {
  const [casa, setCasa] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches)
  useEffect(() => {
    const mq = window.matchMedia(query)
    const ao = () => setCasa(mq.matches)
    ao()
    mq.addEventListener('change', ao)
    return () => mq.removeEventListener('change', ao)
  }, [query])
  return casa
}

/** Troca o fundo do body só enquanto o molde está na tela. */
export function useBodyDossie() {
  useEffect(() => {
    document.body.classList.add('dz-body')
    return () => document.body.classList.remove('dz-body')
  }, [])
}

/** Marca com dz-in cada .dz-rv que entra na tela (uma vez só). */
export function useRevelar(raiz: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = raiz.current
    if (!el) return
    const alvos = Array.from(el.querySelectorAll<HTMLElement>('.dz-rv'))
    if (!('IntersectionObserver' in window)) { alvos.forEach(a => a.classList.add('dz-in')); return }
    const io = new IntersectionObserver(entradas => {
      entradas.forEach(e => { if (e.isIntersecting) { e.target.classList.add('dz-in'); io.unobserve(e.target) } })
    }, { rootMargin: '0px 0px -8% 0px' })
    alvos.forEach(a => io.observe(a))
    return () => io.disconnect()
  }, [raiz])
}

/** Liga dz-drawn quando o elemento entra na tela (linha dos 90 dias). */
export function useDesenhar(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) { el.classList.add('dz-drawn'); return }
    const io = new IntersectionObserver(entradas => {
      entradas.forEach(e => { if (e.isIntersecting) { el.classList.add('dz-drawn'); io.disconnect() } })
    }, { threshold: 0.35 })
    io.observe(el)
    const antesDeImprimir = () => el.classList.add('dz-drawn')
    window.addEventListener('beforeprint', antesDeImprimir)
    return () => { io.disconnect(); window.removeEventListener('beforeprint', antesDeImprimir) }
  }, [ref])
}

/** Qual fase está no meio da tela (o palco mostra o quadro dela). Calculado pela posição a cada
 *  rolagem: a última fase cujo topo já passou do meio da tela; antes da primeira, a primeira. */
export function useFaseAtual(raiz: RefObject<HTMLElement | null>, ativo: boolean): string | null {
  const [atual, setAtual] = useState<string | null>(null)
  useEffect(() => {
    const el = raiz.current
    if (!el || !ativo) return
    const linhas = Array.from(el.querySelectorAll<HTMLElement>('[data-key]'))
    if (!linhas.length) return
    let pedido = 0
    const calcular = () => {
      pedido = 0
      const meio = window.innerHeight * 0.5
      let escolhida = linhas[0]
      linhas.forEach(l => { if (l.getBoundingClientRect().top <= meio) escolhida = l })
      setAtual(escolhida.dataset.key ?? null)
    }
    const aoRolar = () => { if (!pedido) pedido = window.requestAnimationFrame(calcular) }
    calcular()
    window.addEventListener('scroll', aoRolar, { passive: true })
    window.addEventListener('resize', aoRolar)
    return () => {
      window.removeEventListener('scroll', aoRolar)
      window.removeEventListener('resize', aoRolar)
      if (pedido) window.cancelAnimationFrame(pedido)
    }
  }, [raiz, ativo])
  return atual
}

function doisDigitos(n: number) { return (n < 10 ? '0' : '') + n }
export function mmss(s: number) { s = Math.max(0, Math.round(s)); return doisDigitos(Math.floor(s / 60)) + ':' + doisDigitos(s % 60) }

export interface EstadoLeitura {
  atual: number
  progresso: number     // 0 a 1
  pesos: number[]       // altura relativa de cada capítulo (largura do trecho no trilho)
  total: number         // segundos de leitura estimados
}

/** Linha do tempo da leitura: capítulo atual, progresso da rolagem e tempo estimado. */
export function useLinhaDoTempo(capitulos: Capitulo[], raiz: RefObject<HTMLElement | null>): EstadoLeitura {
  const [estado, setEstado] = useState<EstadoLeitura>({ atual: 0, progresso: 0, pesos: capitulos.map(() => 1), total: 0 })
  const medidas = useRef<{ topos: number[] }>({ topos: [] })

  useEffect(() => {
    let pedido = 0
    const medir = () => {
      const els = capitulos.map(c => document.getElementById(c.id))
      const topos = els.map(e => (e ? e.getBoundingClientRect().top + window.scrollY : 0))
      const fim = document.documentElement.scrollHeight
      const pesos = topos.map((t, i) => Math.max(1, (i + 1 < topos.length ? topos[i + 1] : fim) - t))
      const palavras = (raiz.current?.innerText || '').split(/\s+/).filter(Boolean).length
      medidas.current.topos = topos
      setEstado(e => ({ ...e, pesos, total: Math.round(palavras / 200 * 60) }))
    }
    const atualizar = () => {
      pedido = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progresso = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      const linha = window.scrollY + 120
      let atual = 0
      medidas.current.topos.forEach((t, i) => { if (t <= linha) atual = i })
      if (progresso > 0.995) atual = capitulos.length - 1
      setEstado(e => (e.atual === atual && Math.abs(e.progresso - progresso) < 0.001 ? e : { ...e, atual, progresso }))
    }
    const aoRolar = () => { if (!pedido) pedido = window.requestAnimationFrame(atualizar) }
    const aoMudar = () => { medir(); atualizar() }
    medir(); atualizar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    window.addEventListener('resize', aoMudar)
    window.addEventListener('load', aoMudar)
    const t = window.setTimeout(aoMudar, 1200)
    return () => {
      window.removeEventListener('scroll', aoRolar)
      window.removeEventListener('resize', aoMudar)
      window.removeEventListener('load', aoMudar)
      window.clearTimeout(t)
      if (pedido) window.cancelAnimationFrame(pedido)
    }
  }, [capitulos, raiz])

  return estado
}

/** Timecode do visor da abertura, a 24 quadros por segundo. Parado se o aparelho pede menos movimento. */
export function useTimecode(): string {
  const [tc, setTc] = useState('01:00:00:00')
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const inicio = performance.now()
    let ultimo = ''
    const passo = (agora: number) => {
      const q = Math.floor((agora - inicio) / (1000 / 24))
      const f = q % 24, s = Math.floor(q / 24) % 60, m = Math.floor(q / 1440) % 60
      const txt = `01:${doisDigitos(m)}:${doisDigitos(s)}:${doisDigitos(f)}`
      if (txt !== ultimo) { ultimo = txt; setTc(txt) }
      raf = requestAnimationFrame(passo)
    }
    raf = requestAnimationFrame(passo)
    return () => cancelAnimationFrame(raf)
  }, [])
  return tc
}

/** Frase do fecho que acende palavra por palavra enquanto sobe na tela (porta do dossie.js).
 *  Devolve quantas palavras estão acesas; -1 quando o aparelho pede menos movimento (tudo aceso). */
export function useFraseAcende(ref: RefObject<HTMLElement | null>, palavras: number): number {
  const [acesas, setAcesas] = useState(-1)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let pedido = 0
    const calcular = () => {
      pedido = 0
      const vh = window.innerHeight
      const s0 = vh * 0.86, s1 = vh * 0.4
      const p = Math.min(1, Math.max(0, (s0 - el.getBoundingClientRect().top) / (s0 - s1)))
      setAcesas(Math.round(p * palavras))
    }
    const aoRolar = () => { if (!pedido) pedido = window.requestAnimationFrame(calcular) }
    const antesDeImprimir = () => setAcesas(-1)
    calcular()
    window.addEventListener('scroll', aoRolar, { passive: true })
    window.addEventListener('resize', aoRolar)
    window.addEventListener('beforeprint', antesDeImprimir)
    return () => {
      window.removeEventListener('scroll', aoRolar)
      window.removeEventListener('resize', aoRolar)
      window.removeEventListener('beforeprint', antesDeImprimir)
      if (pedido) window.cancelAnimationFrame(pedido)
    }
  }, [ref, palavras])
  return acesas
}
