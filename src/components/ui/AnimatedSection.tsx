import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  id?: string
  className?: string
  delay?: number
}

export function AnimatedSection({ children, id, className, delay = 0 }: Props) {
  return (
    <motion.section
      id={id}
      className={`section ${className ?? ''}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
}
