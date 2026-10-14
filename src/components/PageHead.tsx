type Props = {
  kicker?: string
  title: string
  lead?: string
}

export function PageHead({ kicker, title, lead }: Props) {
  return (
    <header className="page-head">
      <div className="wrap">
        {kicker && <p className="page-head__label">{kicker}</p>}
        <h1>{title}</h1>
        {lead && <p className="page-head__lead">{lead}</p>}
      </div>
    </header>
  )
}
