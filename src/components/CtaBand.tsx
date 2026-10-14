import { Link } from 'react-router-dom'
import { TrainFront } from 'lucide-react'

type Props = {
  kicker?: string
  title: string
  lead?: string
  to?: string
  cta: string
}

export function CtaBand({ kicker, title, lead, to = '/contacto', cta }: Props) {
  return (
    <section className="cta-band">
      <TrainFront className="cta-band__mark" strokeWidth={1.15} aria-hidden />
      <div className="wrap">
        {kicker && <p className="kicker kicker--light">{kicker}</p>}
        <h2>{title}</h2>
        {lead && <p>{lead}</p>}
        <Link to={to} className="btn btn--red">
          {cta}
        </Link>
      </div>
    </section>
  )
}
