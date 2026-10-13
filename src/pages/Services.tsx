import { Link } from 'react-router-dom'
import { useLocale } from '../context/LocaleContext'
import { serviceCycle } from '../data/content'

export function Services() {
  const { locale, copy } = useLocale()

  return (
    <div className="page">
      <header className="page-head">
        <div className="wrap">
          <h1>{copy.services.title}</h1>
          <p className="page-head__lead">
            {locale === 'es'
              ? 'Ocho áreas ordenadas como un ciclo de proyecto. Cada fase está pensada para infraestructuras de transporte, no como un catálogo genérico de consultoría.'
              : 'Eight areas arranged as a project cycle. Each phase is conceived for transport infrastructure, not as a generic consulting catalogue.'}
          </p>
        </div>
      </header>

      <section className="band">
        <div className="wrap">
          <ol className="phases">
            {serviceCycle.map((s) => (
              <li key={s.n}>
                <span className="phases__n">{s.n}</span>
                <div>
                  <h2>{locale === 'es' ? s.titleEs : s.titleEn}</h2>
                  <p>{locale === 'es' ? s.textEs : s.textEn}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>
            {locale === 'es'
              ? 'Un mismo equipo, de la planificación a la explotación'
              : 'One team, from planning to operation'}
          </h2>
          <Link to="/contacto" className="btn btn--red">
            {copy.nav.meeting}
          </Link>
        </div>
      </section>
    </div>
  )
}
