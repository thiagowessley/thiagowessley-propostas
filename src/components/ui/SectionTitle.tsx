interface Props {
  thin: string
  bold: string
  id?: string
}

/** Titulo de duas linhas: palavra fina (muted) + palavra grossa (white).
 *  Padrao visual das referencias aprovadas do Thiago. */
export function SectionTitle({ thin, bold, id }: Props) {
  return (
    <h2 className="sec-title" id={id}>
      <span className="thin">{thin}</span>
      <span className="bold">{bold}</span>
    </h2>
  )
}
