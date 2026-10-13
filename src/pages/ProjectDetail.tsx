import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useLocale } from '../context/LocaleContext'
import {
  getProjectById,
  getProjectBySlug,
  infrastructureLabels,
  serviceLabels,
} from '../data/projects'

export function ProjectDetail() {
  const { slug } = useParams()
  const { locale, copy } = useLocale()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return (
      <div className="page wrap">
        <p>Proyecto no encontrado.</p>
        <Link to="/proyectos">{copy.detail.back}</Link>
      </div>
    )
  }

  const related = project.related.map((id) => getProjectById(id)).filter(Boolean)
  const title = locale === 'es' ? project.titleEs : project.titleEn

  return (
    <article className="case">
      <section className="case-hero">
        <div className="case-hero__media">
          <img
            src={project.coverImage}
            alt={title}
            style={{ objectPosition: project.coverPosition }}
          />
        </div>
        <div className="case-hero__copy">
          <Link to="/proyectos" className="text-link">
            <ArrowLeft size={16} /> {copy.detail.back}
          </Link>
          <p className="kicker">
            {locale === 'es' ? project.country : project.countryEn} · {project.city} · {project.years}
          </p>
          <h1>{title}</h1>
          <p className="case-hero__service">
            {infrastructureLabels[project.infrastructureType][locale]} ·{' '}
            {project.services.map((s) => serviceLabels[s][locale]).join(' · ')}
          </p>
          <div className="case-role">
            <p className="kicker">{copy.detail.role}</p>
            <p>{locale === 'es' ? project.roleEs : project.roleEn}</p>
          </div>
          <dl className="case-metrics">
            {project.metrics.map((m) => (
              <div key={m.value + m.labelEs}>
                <dt>{locale === 'es' ? m.labelEs : m.labelEn}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
            {project.investment && (
              <div>
                <dt>{copy.detail.investment}</dt>
                <dd>{project.investment}</dd>
              </div>
            )}
          </dl>
        </div>
      </section>

      <section className="band">
        <div className="wrap narrow">
          <p className="kicker">{copy.detail.summary}</p>
          <p className="summary">{locale === 'es' ? project.summaryEs : project.summaryEn}</p>
        </div>
      </section>

      <section className="band band--paper">
        <div className="wrap">
          <p className="kicker">{copy.detail.gallery}</p>
          <div className="gallery">
            {project.gallery.map((img) => (
              <figure key={img.src}>
                <img src={img.src} alt={locale === 'es' ? img.altEs : img.altEn} style={{ objectPosition: img.position }} />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap split-text">
          <div>
            <p className="kicker">{copy.detail.scope}</p>
            <h2>{copy.detail.scope}</h2>
          </div>
          <ol className="scope">
            {(locale === 'es' ? project.scopeEs : project.scopeEn).map((item, i) => (
              <li key={item}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {related.length > 0 && (
        <section className="band band--paper">
          <div className="wrap">
            <p className="kicker">{copy.detail.related}</p>
            <div className="related">
              {related.map((p) =>
                p ? (
                  <Link key={p.id} to={`/proyectos/${p.slug}`} className="related__item">
                    <img src={p.coverImage} alt="" />
                    <div>
                      <p className="kicker">{locale === 'es' ? p.country : p.countryEn}</p>
                      <h3>{locale === 'es' ? p.titleEs : p.titleEn}</h3>
                    </div>
                  </Link>
                ) : null,
              )}
            </div>
          </div>
        </section>
      )}

      <section className="cta-band">
        <div className="wrap">
          <h2>{copy.detail.cta}</h2>
          <Link to="/contacto" className="btn btn--red">
            {copy.nav.meeting} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </article>
  )
}
