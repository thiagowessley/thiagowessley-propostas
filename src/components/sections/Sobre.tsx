import { motion } from 'framer-motion'
import { AnimatedSection } from '../ui/AnimatedSection'
import { DecoLines } from '../ui/DecoLines'
import type { SobreProfissional } from '../../types/proposta'

interface Props {
  sobre: SobreProfissional
  foto?: string
}

export function Sobre({ sobre, foto }: Props) {
  return (
    <AnimatedSection id="sobre">
      <div className="split foto-esquerda" style={{ gridTemplateColumns: '0.95fr 1.05fr' }}>
        {/* Foto a esquerda (decisao do Thiago) */}
        <div style={{ position: 'relative' }}>
          <div className="media vertical" style={{ borderRadius: '4px 4px 64px 4px' }}>
            {foto && <img src={foto} alt="Thiago Wessley" loading="lazy" />}
          </div>
          <DecoLines style={{ bottom: '-30px', right: '-30px' }} width={240} height={300} />
        </div>

        {/* Texto a direita */}
        <div className="reading" style={{ maxWidth: '620px' }}>
          <h2 className="sec-title" style={{ marginBottom: '28px' }}>
            <span className="bold" style={{ fontSize: 'clamp(2.6rem, 7vw, 4.4rem)' }}>{sobre.saudacao}</span>
          </h2>

          {sobre.paragrafos.map((p, i) => (
            <p key={i} style={{ color: 'var(--ice)', lineHeight: 1.75, marginBottom: '18px', fontSize: '0.98rem' }}>
              {p}
            </p>
          ))}

          {sobre.atuacao && sobre.atuacao.length > 0 && (
            <div className="skills-grid">
              {sobre.atuacao.map((a, i) => (
                <div key={a.nome}>
                  <p className="skill-label">{a.nome}</p>
                  <div className="progress-track">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${a.nivel}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 + i * 0.08, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  )
}
