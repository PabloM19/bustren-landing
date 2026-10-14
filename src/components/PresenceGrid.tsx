import { Link } from 'react-router-dom'
import { CountryFlag } from './CountryFlag'
import { useLocale } from '../context/LocaleContext'
import { countriesPresence } from '../data/content'

type Props = {
  showList?: boolean
}

export function PresenceGrid({ showList = false }: Props) {
  const { locale, copy } = useLocale()

  return (
    <>
      {showList && <p className="presence-line">{copy.hero.presence}</p>}
      <ul className="coords">
        {countriesPresence.map((c) => (
          <li key={c.code}>
            <Link to={`/proyectos?pais=${encodeURIComponent(c.nameEs)}`}>
              <CountryFlag iso={c.code} size="md" />
              <strong>{locale === 'es' ? c.nameEs : c.nameEn}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
