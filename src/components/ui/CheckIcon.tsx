import { motion } from 'framer-motion'

interface Props {
  color?: string
}

export function CheckIcon({ color = 'var(--gold)' }: Props) {
  return (
    <motion.span
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ type: 'spring', stiffness: 480, damping: 14 }}
      style={{
        flexShrink: 0,
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        border: `1px solid ${color}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '1px',
      }}
    >
      <svg width="9" height="7" viewBox="0 0 10 8" fill="none">
        <path d="M1 4L3.5 6.5L9 1" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.span>
  )
}
