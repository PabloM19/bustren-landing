import { CtaBand } from '../components/CtaBand'
import { PageHead } from '../components/PageHead'
import { useLocale } from '../context/LocaleContext'
import { serviceCycle } from '../data/content'

export function Services() {
  const { locale, copy } = useLocale()

  return (
    <div className="page">
      <PageHead
        kicker={copy.services.kicker}
        title={copy.services.title}
        lead={
          locale === 'es'
            ? 'Ocho áreas ordenadas como un ciclo de proyecto. Cada fase está pensada para infraestructuras de transporte, no como un catálogo genérico de consultoría.'
            : 'Eight areas arranged as a project cycle. Each phase is conceived for transport infrastructure, not as a generic consulting catalogue.'
        }
      />

      <section className="band">
        <div className="wrap service-grid">
          {serviceCycle.map((s) => (
            <article key={s.n} className="service-card">
              <img src={s.img} alt="" />
              <div className="service-card__veil" />
              <div className="service-card__copy">
                <span>{s.n}</span>
                <h2>{locale === 'es' ? s.titleEs : s.titleEn}</h2>
                <p>{locale === 'es' ? s.textEs : s.textEn}</p>
                <span className="service-card__more">{copy.services.more}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title={
          locale === 'es'
            ? 'Un mismo equipo, de la planificación a la explotación'
            : 'One team, from planning to operation'
        }
        cta={copy.nav.meeting}
      />
    </div>
  )
}
