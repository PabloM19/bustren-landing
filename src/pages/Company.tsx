import { Link } from 'react-router-dom'
import { useLocale } from '../context/LocaleContext'
import { CountryFlag } from '../components/CountryFlag'
import { countriesPresence } from '../data/content'

export function Company() {
  const { locale, copy } = useLocale()

  return (
    <div className="page">
      <header className="page-head">
        <div className="wrap">
          <h1>{copy.company.title}</h1>
        </div>
      </header>

      <section className="split">
        <img
          src="/images/projects/estacion-madrid.jpg"
          alt={locale === 'es' ? 'Estación de metro' : 'Metro station'}
          style={{ objectPosition: 'center' }}
        />
        <div className="split__copy">
          <p className="kicker">BUSTREN PM</p>
          <h2>
            {locale === 'es'
              ? 'Ingeniería, arquitectura y consultoría de transporte'
              : 'Transport engineering, architecture and consulting'}
          </h2>
          <p>
            {locale === 'es'
              ? 'BUSTREN PM es una empresa española fundada en 2012. Reúne a profesionales con una trayectoria dilatada en redes de metro, ferrocarril, movilidad urbana, estaciones, intercambiadores y edificación asociada al transporte.'
              : 'BUSTREN PM is a Spanish company founded in 2012. It brings together professionals with a long track record in metro networks, railways, urban mobility, stations, interchanges and transport-related buildings.'}
          </p>
          <p>
            {locale === 'es'
              ? 'El equipo asume la dirección de las labores de ingeniería, arquitectura y consultoría a lo largo de todo el ciclo: planificación, diseño, obra, recepción, puesta en servicio y explotación.'
              : 'The team takes responsibility for engineering, architecture and consulting across the full cycle: planning, design, construction, reception, commissioning and operation.'}
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap split-text">
          <div>
            <p className="kicker">{locale === 'es' ? 'Origen' : 'Origin'}</p>
            <h2>
              {locale === 'es'
                ? 'Experiencia ligada a las ampliaciones de Metro de Madrid'
                : 'Experience tied to Madrid Metro expansions'}
            </h2>
          </div>
          <div>
            <p>
              {locale === 'es'
                ? 'En BUSTREN ha confluido un conjunto de especialistas que tuvieron un papel relevante en los sucesivos planes de ampliación de la red de Metro de Madrid. Esa trayectoria, documentada en el periodo 1995-2007 —199 km de túnel, 156 estaciones y 9.902 M€ de inversión en las ampliaciones de la red—, es el fundamento técnico de la empresa.'
                : 'BUSTREN brings together specialists who played a significant role in successive Madrid Metro expansion plans. That trajectory, documented for 1995-2007 —199 km of tunnel, 156 stations and €9,902 m of network expansion investment— is the company’s technical foundation.'}
            </p>
            <p>
              {locale === 'es'
                ? 'A esa base se suma más de una década de actividad internacional en consultoría e ingeniería de transporte.'
                : 'That base is joined by more than a decade of international consulting and transport engineering work.'}
            </p>
          </div>
        </div>
        <div className="wrap stats stats--tight">
          <article>
            <p className="stats__value">199 km</p>
            <p className="stats__label">{locale === 'es' ? 'Túnel · Madrid 1995-2007' : 'Tunnel · Madrid 1995-2007'}</p>
          </article>
          <article>
            <p className="stats__value">156</p>
            <p className="stats__label">{locale === 'es' ? 'Estaciones en ese periodo' : 'Stations in that period'}</p>
          </article>
          <article>
            <p className="stats__value">2012</p>
            <p className="stats__label">{locale === 'es' ? 'Año de constitución' : 'Year founded'}</p>
          </article>
        </div>
      </section>

      <section className="band band--ink">
        <div className="wrap">
          <p className="kicker kicker--light">{locale === 'es' ? 'Extensión' : 'Reach'}</p>
          <h2>{locale === 'es' ? 'Nueve países de actividad' : 'Nine countries of activity'}</h2>
          <ul className="coords">
            {countriesPresence.map((c) => (
              <li key={c.code}>
                <CountryFlag iso={c.code} size="md" />
                <strong>{locale === 'es' ? c.nameEs : c.nameEn}</strong>
                <em>{c.coord}</em>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band">
        <div className="wrap split-text">
          <div>
            <p className="kicker">{locale === 'es' ? 'Equipo' : 'Team'}</p>
            <h2>
              {locale === 'es'
                ? 'Ingenieros, arquitectos y asesores de experiencia senior'
                : 'Engineers, architects and senior advisors'}
            </h2>
          </div>
          <div>
            <p>
              {locale === 'es'
                ? 'La empresa cuenta con un equipo de ingenieros y arquitectos de amplia experiencia, completado con un grupo de asesores expertos de dilatada trayectoria profesional. El perfil cubre arquitectura y sistemas, movilidad y demanda, obra civil, telecomunicaciones y señalización, y operación y material rodante.'
                : 'The company has a team of highly experienced engineers and architects, completed by expert advisors with a long professional record. The profile covers architecture and systems, mobility and demand, civil works, telecommunications and signalling, and operation and rolling stock.'}
            </p>
            <p>
              {locale === 'es'
                ? 'Esa composición permite acompañar todas las fases del proyecto sin cambiar de interlocutor técnico.'
                : 'That composition makes it possible to accompany every project phase without changing technical counterpart.'}
            </p><br />
            <Link to="/contacto" className="btn btn--red">
              {copy.nav.meeting}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
