interface Props {
  style?: React.CSSProperties
  width?: number
  height?: number
}

/** Linhas geometricas diagonais decorativas (canto das paginas escuras).
 *  Padrao visual das referencias: traços finos cinza, baixa opacidade. */
export function DecoLines({ style, width = 420, height = 520 }: Props) {
  return (
    <svg
      className="deco-lines"
      width={width}
      height={height}
      viewBox="0 0 420 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      aria-hidden="true"
    >
      <path d="M40 510 L380 40" stroke="var(--muted)" strokeWidth="1" opacity="0.35" />
      <path
        d="M120 470 C 300 430, 410 330, 360 230 C 320 150, 180 170, 200 260 C 215 330, 330 320, 360 250"
        stroke="var(--muted)"
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  )
}
