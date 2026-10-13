import { useEffect, useMemo, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { CookieBanner } from './CookieBanner'
import { LocaleContext } from '../context/LocaleContext'
import { CookiesContext, type Consent } from '../context/CookiesContext'
import { ThemeContext, type Theme } from '../context/ThemeContext'
import { t, type Locale } from '../data/content'

const KEY = 'bustren-consent'
const LANG = 'bustren-lang'
const THEME = 'bustren-theme'

export function Layout() {
  const location = useLocation()
  const [locale, setLocaleState] = useState<Locale>('es')
  const [theme, setTheme] = useState<Theme>('light')
  const [consent, setConsent] = useState<Consent>(null)
  const [banner, setBanner] = useState(false)
  const [configure, setConfigure] = useState(false)
  const [analytics, setAnalytics] = useState(false)

  useEffect(() => {
    const storedLang = localStorage.getItem(LANG)
    if (storedLang === 'en' || storedLang === 'es') setLocaleState(storedLang)
    const storedTheme = localStorage.getItem(THEME)
    if (storedTheme === 'dark' || storedTheme === 'light') {
      setTheme(storedTheme)
      document.documentElement.dataset.theme = storedTheme
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      document.documentElement.dataset.theme = 'dark'
    }
    const stored = localStorage.getItem(KEY) as Consent | null
    if (stored === 'accepted' || stored === 'rejected' || stored === 'custom') {
      setConsent(stored)
      setBanner(false)
    } else {
      setBanner(true)
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    localStorage.setItem(LANG, l)
    document.documentElement.lang = l
  }

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem(THEME, next)
    document.documentElement.dataset.theme = next
  }

  const persist = (value: Consent) => {
    if (value) localStorage.setItem(KEY, value)
    setConsent(value)
    setBanner(false)
    setConfigure(false)
  }

  const cookies = useMemo(
    () => ({
      consent,
      open: banner,
      configure,
      analytics,
      accept: () => persist('accepted'),
      reject: () => persist('rejected'),
      openConfig: () => setConfigure(true),
      setAnalytics,
      saveConfig: () => persist('custom'),
      reopen: () => {
        setBanner(true)
        setConfigure(true)
      },
    }),
    [consent, banner, configure, analytics],
  )

  return (
    <LocaleContext.Provider value={{ locale, setLocale, copy: t[locale] }}>
      <ThemeContext.Provider value={{ theme, toggle: toggleTheme }}>
        <CookiesContext.Provider value={cookies}>
          <Header />
          <main className={location.pathname === '/' ? 'is-home' : undefined}>
            <Outlet />
          </main>
          <Footer />
          <CookieBanner />
        </CookiesContext.Provider>
      </ThemeContext.Provider>
    </LocaleContext.Provider>
  )
}
