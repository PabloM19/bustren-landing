import { Link } from 'react-router-dom'

type Props = {
  inverted?: boolean
  compact?: boolean
}

export function Logo({ inverted = false, compact = false }: Props) {
  return (
    <Link
      to="/"
      className={`logo${compact ? ' logo--compact' : ''}${inverted ? ' is-inverted' : ''}`}
      aria-label="BUSTREN PM"
    >
      <span className="logo__lockup">
        <img src="/images/brand/bustren-logo.png" alt="" />
        <span className="logo__rest" aria-hidden="true">
          <span className="logo__ustren">USTREN</span>
          <span className="logo__pm">P.M.</span>
        </span>
      </span>
    </Link>
  )
}
