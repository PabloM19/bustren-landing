/** ISO 3166-1 alpha-2, keyed by Spanish or English country names used in the site. */
const COUNTRY_TO_ISO: Record<string, string> = {
  España: 'ES',
  Spain: 'ES',
  Ecuador: 'EC',
  Perú: 'PE',
  Peru: 'PE',
  Panamá: 'PA',
  Panama: 'PA',
  Colombia: 'CO',
  Argentina: 'AR',
  Brasil: 'BR',
  Brazil: 'BR',
  Rusia: 'RU',
  Russia: 'RU',
  México: 'MX',
  Mexico: 'MX',
}

export function countryIsoFromName(name: string): string | undefined {
  return COUNTRY_TO_ISO[name]
}
