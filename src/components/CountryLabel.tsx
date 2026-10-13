import { CountryFlag } from './CountryFlag'
import { countryIsoFromName } from '../lib/countryIso'

type Props = {
  /** Localized label shown beside the flag */
  name: string
  /** Canonical country name for ISO lookup (defaults to `name`) */
  lookupName?: string
  className?: string
  flagSize?: 'sm' | 'md'
}

export function CountryLabel({ name, lookupName, className = '', flagSize = 'sm' }: Props) {
  const iso = countryIsoFromName(lookupName ?? name)
  if (!iso) {
    return <span className={className}>{name}</span>
  }

  return (
    <span className={`country-label${className ? ` ${className}` : ''}`}>
      <CountryFlag iso={iso} size={flagSize} />
      <span>{name}</span>
    </span>
  )
}
