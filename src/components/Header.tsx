import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { Logo } from './Logo'
import { useLocale } from '../context/LocaleContext'
import { useTheme } from '../context/ThemeContext'

const links = [
  { to: '/', key: 'home' as const },
  { to: '/empresa', key: 'company' as const },
  { to: '/servicios', key: 'services' as const },
  { to: '/edificacion', key: 'building' as const },
  { to: '/proyectos', key: 'projects' as const },
  { to: '/contacto', key: 'contact' as const },
]

function blurNavFocus(event: { currentTarget: HTMLElement }) {
  event.currentTarget.blur()
}

export function Header() {
  const { locale, setLocale, copy } = useLocale()
  const { theme, toggle } = useTheme()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const overlay = location.pathname === '/' && !scrolled && !open
  const inverted = overlay || open || theme === 'dark'

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, locale])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`site-header${overlay ? ' is-overlay' : ''}${open ? ' is-open' : ''}`}>
      <div className="wrap site-header__bar">
        <Logo inverted={inverted} />
        <nav className="site-nav" aria-label="Principal">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={blurNavFocus}>
              {copy.nav[l.key]}
            </NavLink>
          ))}
        </nav>
        <div className="site-header__tools">
          <div className="lang" role="group" aria-label="Idioma">
            <button
              type="button"
              className={locale === 'es' ? 'is-active' : ''}
              onClick={() => setLocale('es')}
            >
              ES
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              className={locale === 'en' ? 'is-active' : ''}
              onClick={() => setLocale('en')}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            className="theme-btn"
            onClick={toggle}
            aria-label={theme === 'dark' ? copy.theme.light : copy.theme.dark}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <NavLink to="/contacto" className="btn btn--red site-header__cta" onClick={blurNavFocus}>
            {copy.nav.meeting}
          </NavLink>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
            <span className="sr-only">Menú</span>
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-nav" className="mobile-nav">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={blurNavFocus}>
              {copy.nav[l.key]}
            </NavLink>
          ))}
          <NavLink to="/contacto" className="btn btn--red" onClick={blurNavFocus}>
            {copy.nav.meeting}
          </NavLink>
        </div>
      )}
    </header>
  )
}
