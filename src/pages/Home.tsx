import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { CountUp } from '../components/CountUp'
import { CountryLabel } from '../components/CountryLabel'
import { CtaBand } from '../components/CtaBand'
import { PresenceGrid } from '../components/PresenceGrid'
import { useLocale } from '../context/LocaleContext'
import { serviceCycle } from '../data/content'
import { getProjectById } from '../data/projects'

const featuredIds = ['quito-l1', 'panama-2a', 'lima-l3', 'chamartin']

export function Home() {
  const { locale, copy } = useLocale()
  const featured = featuredIds.map((id) => getProjectById(id)!)

  return (
    <>
      <section className="hero">
        <img
          src="/images/hero-tunnel.jpg"
          alt={locale === 'es' ? 'Túnel ferroviario' : 'Railway tunnel'}
          className="hero__img"
        />
        <div className="hero__mask" />
        <div className="wrap hero__content">
          <p className="kicker kicker--light">{copy.hero.kicker}</p>
          <h1>
            {copy.hero.titleLine1}
            <br />
            {copy.hero.titleLine2}
          </h1>
          <p className="hero__lead">{copy.hero.lead}</p>
          <div className="hero__actions">
            <Link to="/proyectos" className="btn btn--red">
              {copy.hero.ctaProjects}
            </Link>
            <Link to="/contacto" className="btn btn--ghost-light">
              {copy.hero.ctaMeeting}
            </Link>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <p className="kicker">{copy.figures.kicker}</p>
          <h2>{copy.figures.title}</h2>
          <p className="note">{copy.figures.note}</p>
          <div className="stats">
            <article>
              <CountUp to={22} unit="km" locale={locale} />
              <p className="stats__label">
                {locale === 'es' ? 'Túnel · Metro de Quito L1' : 'Tunnel · Quito Metro L1'}
              </p>
            </article>
            <article>
              <CountUp to={15} locale={locale} />
              <p className="stats__label">{locale === 'es' ? 'Estaciones · Quito L1' : 'Stations · Quito L1'}</p>
            </article>
            <article>
              <CountUp to={46000} unit="m²" locale={locale} />
              <p className="stats__label">
                {locale === 'es' ? 'Intercambiador de Moncloa' : 'Moncloa Interchange'}
              </p>
            </article>
            <article>
              <CountUp to={9} locale={locale} />
              <p className="stats__label">{locale === 'es' ? 'Países de actividad' : 'Countries of activity'}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="band band--ink">
        <div className="wrap">
          <p className="kicker kicker--light">{copy.map.kicker}</p>
          <h2>{copy.map.title}</h2>
          <p className="lead-ink">{copy.map.lead}</p>
          <PresenceGrid showList />
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="kicker">{copy.featured.kicker}</p>
              <h2>{copy.featured.title}</h2>
            </div>
            <Link to="/proyectos" className="text-link">
              {copy.featured.all} <ArrowRight size={16} />
            </Link>
          </div>
          <div className="feature-grid">
            {featured.map((p, i) => (
              <Link
                key={p.id}
                to={`/proyectos/${p.slug}`}
                className={`feature-card${i === 0 ? ' is-wide' : ''}`}
              >
                <img src={p.coverImage} alt="" style={{ objectPosition: p.coverPosition }} />
                <div>
                  <p className="kicker kicker--with-flag">
                    <CountryLabel
                      name={locale === 'es' ? p.country : p.countryEn}
                      lookupName={p.country}
                    />
                    <span className="kicker__sep" aria-hidden>
                      ·
                    </span>
                    {p.years}
                  </p>
                  <h3>{locale === 'es' ? p.titleEs : p.titleEn}</h3>
                  <p>{locale === 'es' ? p.roleEs : p.roleEn}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--paper">
        <div className="wrap">
          <p className="kicker">{copy.areas.kicker}</p>
          <div className="section-head">
            <h2>{copy.areas.title}</h2>
            <Link to="/servicios" className="text-link">
              {copy.areas.more} <ArrowRight size={16} />
            </Link>
          </div>
          <ol className="cycle">
            {serviceCycle.slice(0, 4).map((s) => (
              <li key={s.n}>
                <span className="cycle__bg" aria-hidden>
                  <img src={s.img} alt="" />
                  <span className="cycle__veil" />
                </span>
                <div className="cycle__copy">
                  <span>{s.n}</span>
                  <h3>{locale === 'es' ? s.titleEs : s.titleEn}</h3>
                  <p>{locale === 'es' ? s.textEs : s.textEn}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="split">
        <img
          src="/images/building/chamartin-1.jpg"
          alt={locale === 'es' ? 'Intercambiador de Chamartín' : 'Chamartín Interchange'}
          style={{ objectPosition: 'center 30%' }}
        />
        <div className="split__copy">
          <p className="kicker">{copy.building.kicker}</p>
          <h2>{copy.building.title}</h2>
          <p>{copy.building.lead}</p>
          <Link to="/edificacion" className="btn btn--red">
            {copy.building.more}
          </Link>
        </div>
      </section>

      <CtaBand
        kicker={copy.close.kicker}
        title={copy.close.title}
        lead={copy.close.lead}
        cta={copy.close.cta}
      />
    </>
  )
}
