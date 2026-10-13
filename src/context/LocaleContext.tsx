import { createContext, useContext } from 'react'
import type { Locale } from '../data/content'
import { t } from '../data/content'

export const LocaleContext = createContext<{
  locale: Locale
  setLocale: (l: Locale) => void
  copy: (typeof t)[Locale]
}>({
  locale: 'es',
  setLocale: () => undefined,
  copy: t.es,
})

export const useLocale = () => useContext(LocaleContext)
