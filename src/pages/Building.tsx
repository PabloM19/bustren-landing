import { Link } from 'react-router-dom'
import { CtaBand } from '../components/CtaBand'
import { PageHead } from '../components/PageHead'
import { useLocale } from '../context/LocaleContext'

const themes = [
  {
    titleEs: 'Estaciones',
    titleEn: 'Stations',
    textEs: 'Vestíbulos, andenes y arquitectura de estación como pieza del sistema, no como objeto aislado.',
    textEn: 'Concourses, platforms and station architecture as part of the system, not as an isolated object.',
    img: '/images/projects/estacion-madrid.jpg',
    pos: 'center',
  },
  {
    titleEs: 'Intercambiadores',
    titleEn: 'Interchanges',
    textEs: 'Nodos que concentran Metro, autobús y ferrocarril suburbano, con demanda de cientos de miles de viajeros.',
    textEn: 'Nodes that concentrate Metro, bus and suburban rail, with demand of hundreds of thousands of passengers.',
    img: '/images/building/moncloa-aereo.jpg',
    pos: 'center',
  },
  {
    titleEs: 'Edificios de usos múltiples',
    titleEn: 'Mixed-use buildings',
    textEs: 'El conjunto de Aquilino de la Guardia, en la Línea 2A de Panamá, articula estación y edificación asociada.',
    textEn: 'The Aquilino de la Guardia complex on Panama Line 2A articulates station and associated building.',
    img: '/images/building/usos-multiples.jpg',
    pos: 'center',
  },
  {
    titleEs: 'Arquitectura ferroviaria',
    titleEn: 'Railway architecture',
    textEs: 'Criterios de circulación, seguridad, mantenimiento y escala urbana aplicados al diseño.',
    textEn: 'Circulation, safety, maintenance and urban scale criteria applied to design.',
    img: '/images/building/arquitectura-ferroviaria.jpg',
    pos: 'center',
  },
  {
    titleEs: 'Integración urbana',
    titleEn: 'Urban integration',
    textEs: 'Obra en centros históricos y avenidas densas, como la Línea 1 de Quito junto a San Francisco.',
    textEn: 'Works in historic centres and dense avenues, such as Quito Line 1 beside San Francisco.',
    img: '/images/projects/quito-san-francisco.jpg',
    pos: 'center 40%',
  },
  {
    titleEs: 'Patios, talleres y centros de control',
    titleEn: 'Depots, workshops and control centres',
    textEs: 'Infraestructura de apoyo de la línea: patio-taller y puesto de control, como en el Metro de Quito.',
    textEn: 'Line support infrastructure: depot-workshop and control centre, as on Quito Metro.',
    img: '/images/projects/patio-taller.jpg',
    pos: 'center',
  },
]

export function Building() {
  const { locale, copy } = useLocale()

  return (
    <div className="page">
      <PageHead
        kicker={copy.buildingPage.kicker}
        title={copy.buildingPage.title}
        lead={
          locale === 'es'
            ? 'La edificación no es un anexo decorativo. En BUSTREN forma parte del sistema de transporte: estaciones, intercambiadores, patios y edificios vinculados a la explotación.'
            : 'Buildings are not a decorative annex. At BUSTREN they are part of the transport system: stations, interchanges, depots and buildings linked to operation.'
        }
      />

      <section className="split">
        <img src="/images/building/chamartin-1.jpg" alt="Chamartín" style={{ objectPosition: 'center 30%' }} />
        <div className="split__copy">
          <p className="kicker">{locale === 'es' ? 'Referencia' : 'Reference'}</p>
          <h2>{locale === 'es' ? 'Intercambiador de Chamartín' : 'Chamartín Interchange'}</h2>
          <p>
            {locale === 'es'
              ? 'Puente entre movilidad y edificación: Metro, Cercanías y autobuses en un nodo del norte de Madrid, con previsión de nuevas líneas.'
              : 'A bridge between mobility and building: Metro, suburban rail and buses at a node in northern Madrid, with provision for new lines.'}
          </p>
          <Link to="/proyectos/intercambiador-chamartin-madrid" className="text-link">
            {locale === 'es' ? 'Ver ficha' : 'View case'}
          </Link>
        </div>
      </section>

      <section className="band">
        <div className="wrap theme-grid">
          {themes.map((item) => (
            <article key={item.titleEs} className="theme">
              <img src={item.img} alt="" style={{ objectPosition: item.pos }} />
              <h2>{locale === 'es' ? item.titleEs : item.titleEn}</h2>
              <p>{locale === 'es' ? item.textEs : item.textEn}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split split--rev">
        <img src="/images/building/moncloa-aereo.jpg" alt="Moncloa" />
        <div className="split__copy">
          <p className="kicker">2007</p>
          <h2>{locale === 'es' ? 'Intercambiador de Moncloa' : 'Moncloa Interchange'}</h2>
          <p>
            {locale === 'es'
              ? 'Ampliación puesta en servicio en 2007. 46.000 m² de superficie útil, 360.000 viajeros al día, 34 dársenas y conexión con autobuses urbanos, interurbanos y las líneas 3 y 6 de Metro.'
              : 'Extension commissioned in 2007. 46,000 m² of usable area, 360,000 passengers a day, 34 bays and connection with urban buses, interurban buses and Metro lines 3 and 6.'}
          </p>
          <Link to="/proyectos/intercambiador-moncloa-madrid" className="text-link">
            {locale === 'es' ? 'Ver ficha' : 'View case'}
          </Link>
        </div>
      </section>

      <CtaBand
        title={
          locale === 'es'
            ? 'Estación y ciudad se resuelven juntas'
            : 'Station and city are resolved together'
        }
        lead={
          locale === 'es'
            ? 'Arquitectura, movilidad y explotación se resuelven en el mismo encargo.'
            : 'Architecture, mobility and operation are resolved in the same assignment.'
        }
        cta={copy.nav.meeting}
      />
    </div>
  )
}
