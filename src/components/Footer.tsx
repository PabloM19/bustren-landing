import { Link } from 'react-router-dom'
import { ArrowRight, Cookie, FileText, Mail, MapPin, Phone, Settings, Shield } from 'lucide-react'
import { Logo } from './Logo'
import { useLocale } from '../context/LocaleContext'
import { useCookies } from '../context/CookiesContext'

export function Footer() {
  const { copy } = useLocale()
  const { reopen } = useCookies()

  return (
    <footer className="site-footer">
      <div className="wrap site-footer__top">
        <div className="site-footer__brand">
          <Logo inverted />
          <p>{copy.footer.tagline}</p>
          <Link to="/contacto" className="btn btn--red">
            {copy.nav.meeting} <ArrowRight size={16} />
          </Link>
        </div>
        <div>
          <p className="kicker kicker--light">{copy.footer.navigate}</p>
          <Link to="/empresa">{copy.nav.company}</Link>
          <Link to="/servicios">{copy.nav.services}</Link>
          <Link to="/edificacion">{copy.nav.building}</Link>
          <Link to="/proyectos">{copy.nav.projects}</Link>
          <Link to="/contacto">{copy.nav.contact}</Link>
        </div>
        <div>
          <p className="kicker kicker--light">{copy.footer.contact}</p>
          <a href="https://maps.google.com/?q=Méndez+Álvaro+56+Madrid" className="footer-line">
            <MapPin size={16} />
            <span>
              Méndez Álvaro, 56
              <br />
              28045 Madrid, España
            </span>
          </a>
          <a href="tel:+34914342280" className="footer-line">
            <Phone size={16} />
            <span>+34 91 434 22 80</span>
          </a>
          <a href="mailto:info@bustrenpm.es" className="footer-line">
            <Mail size={16} />
            <span>info@bustrenpm.es</span>
          </a>
        </div>
        <div>
          <p className="kicker kicker--light">{copy.footer.legalCol}</p>
          <Link to="/aviso-legal" className="footer-line">
            <FileText size={16} />
            <span>{copy.footer.legal}</span>
          </Link>
          <Link to="/privacidad" className="footer-line">
            <Shield size={16} />
            <span>{copy.footer.privacy}</span>
          </Link>
          <Link to="/cookies" className="footer-line">
            <Cookie size={16} />
            <span>{copy.footer.cookies}</span>
          </Link>
          <button type="button" className="footer-line footer-line--btn" onClick={reopen}>
            <Settings size={16} />
            <span>{copy.cookies.configure}</span>
          </button>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="wrap">
          <span>© {new Date().getFullYear()} {copy.footer.copy}</span>
          <a href="https://zerion.es" className="site-footer__credit" target="_blank" rel="noreferrer">
            {copy.footer.credit}
          </a>
        </div>
      </div>
    </footer>
  )
}
