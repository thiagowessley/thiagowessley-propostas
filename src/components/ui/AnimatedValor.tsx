import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'
import { formatarReais } from '../../lib/tempo'

interface Props {
  valor: number
}

export function AnimatedValor({ valor }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, valor, {
      duration: 0.7,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [isInView, valor])

  return <span ref={ref}>{formatarReais(display)}</span>
}
