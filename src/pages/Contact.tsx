import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from 'react'
import {
  ArrowLeftRight,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  Globe,
  Landmark,
  Layers,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  TrainFront,
  TrainTrack,
  TramFront,
  User,
} from 'lucide-react'
import { Logo } from '../components/Logo'
import { useLocale } from '../context/LocaleContext'
import { useTheme } from '../context/ThemeContext'

const projectTypes: { value: string; es: string; en: string; icon: ReactNode }[] = [
  { value: 'metro', es: 'Metro', en: 'Metro', icon: <TrainFront size={16} /> },
  { value: 'rail', es: 'Ferrocarril', en: 'Railway', icon: <TrainTrack size={16} /> },
  { value: 'interchange', es: 'Intercambiador', en: 'Interchange', icon: <ArrowLeftRight size={16} /> },
  { value: 'station', es: 'Estación / edificación', en: 'Station / building', icon: <Landmark size={16} /> },
  { value: 'tram', es: 'Tranvía', en: 'Tram', icon: <TramFront size={16} /> },
  { value: 'other', es: 'Otro', en: 'Other', icon: <Layers size={16} /> },
]

type Errors = Partial<Record<'name' | 'org' | 'country' | 'email' | 'type' | 'message' | 'privacy', string>>

export function Contact() {
  const { locale, copy } = useLocale()
  const { theme } = useTheme()
  const [typeOpen, setTypeOpen] = useState(false)
  const typeRef = useRef<HTMLLabelElement>(null)
  const typeListId = useId()
  const [values, setValues] = useState({
    name: '',
    org: '',
    country: '',
    email: '',
    type: '',
    message: '',
    privacy: false,
  })
  const [errors, setErrors] = useState<Errors>({})
  const [state, setState] = useState<'idle' | 'sending' | 'ok'>('idle')

  const validate = () => {
    const next: Errors = {}
    if (!values.name.trim()) next.name = copy.contact.errorRequired
    if (!values.org.trim()) next.org = copy.contact.errorRequired
    if (!values.country.trim()) next.country = copy.contact.errorRequired
    if (!values.email.trim()) next.email = copy.contact.errorRequired
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = copy.contact.errorEmail
    if (!values.type) next.type = copy.contact.errorRequired
    if (!values.message.trim()) next.message = copy.contact.errorRequired
    if (!values.privacy) next.privacy = copy.contact.errorPrivacy
    setErrors(next)
    return Object.keys(next).length === 0
  }

  useEffect(() => {
    if (!typeOpen) return
    const onPointer = (event: PointerEvent) => {
      if (!typeRef.current?.contains(event.target as Node)) setTypeOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setTypeOpen(false)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [typeOpen])

  const selectedType = projectTypes.find((item) => item.value === values.type)

  const chooseType = (value: string) => {
    setValues((current) => ({ ...current, type: value }))
    setTypeOpen(false)
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setState('sending')
    window.setTimeout(() => setState('ok'), 700)
  }

  const field = (
    key: 'name' | 'org' | 'country' | 'email',
    label: string,
    icon: ReactNode,
    type = 'text',
  ) => (
    <label className={`field${errors[key] ? ' is-error' : ''}`}>
      <span>{label}</span>
      <span className="field__control">
        {icon}
        <input
          type={type}
          value={values[key]}
          onChange={(e) => setValues((v) => ({ ...v, [key]: e.target.value }))}
        />
      </span>
      {errors[key] && <em>{errors[key]}</em>}
    </label>
  )

  return (
    <div className="page">
      <header className="page-head">
        <div className="wrap">
          <h1>{copy.contact.title}</h1>
          <p className="page-head__lead">{copy.contact.lead}</p>
        </div>
      </header>

      <section className="band">
        <div className="wrap contact-grid">
          <aside className="contact-aside">
            <Logo inverted={theme === 'dark'} />
            <p className="kicker">BUSTREN PM</p>
            <ul>
              <li>
                <span className="icon-box">
                  <MapPin size={18} />
                </span>
                <span>{copy.contact.address}</span>
              </li>
              <li>
                <span className="icon-box">
                  <Phone size={18} />
                </span>
                <a href="tel:+34914342280">{copy.contact.phone}</a>
              </li>
              <li>
                <span className="icon-box">
                  <Mail size={18} />
                </span>
                <a href="mailto:info@bustrenpm.es">{copy.contact.mail}</a>
              </li>
            </ul>
          </aside>

          {state === 'ok' ? (
            <p className="success" role="status">
              <CheckCircle2 size={22} />
              {copy.contact.success}
            </p>
          ) : (
            <form className="form" onSubmit={onSubmit} noValidate>
              <div className="form__row">
                {field('name', copy.contact.name, <User size={16} />)}
                {field('org', copy.contact.org, <Building2 size={16} />)}
              </div>
              <div className="form__row">
                {field('country', copy.contact.country, <Globe size={16} />)}
                {field('email', copy.contact.email, <Mail size={16} />, 'email')}
              </div>
              <label className={`field${errors.type ? ' is-error' : ''}`} ref={typeRef}>
                <span>{copy.contact.type}</span>
                <span className={`field__menu${typeOpen ? ' is-open' : ''}`}>
                <button
                  type="button"
                  className={`field__control field__picker${selectedType ? ' is-set' : ''}`}
                  aria-expanded={typeOpen}
                  aria-controls={typeListId}
                  onClick={() => setTypeOpen((open) => !open)}
                >
                  {selectedType ? selectedType.icon : <Layers size={16} />}
                  <span className={selectedType ? '' : 'is-placeholder'}>
                    {selectedType ? selectedType[locale] : copy.projects.all}
                  </span>
                  <ChevronDown className="field__chevron" size={16} aria-hidden />
                </button>
                {typeOpen && (
                  <div className="facet__menu" id={typeListId} role="listbox" aria-label={copy.contact.type}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={!values.type}
                      className={`facet__option${!values.type ? ' is-on' : ''}`}
                      onClick={() => chooseType('')}
                    >
                      <Layers size={16} />
                      <span>{copy.projects.all}</span>
                      {!values.type && <Check className="facet__check" size={14} />}
                    </button>
                    {projectTypes.map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        role="option"
                        aria-selected={values.type === item.value}
                        className={`facet__option${values.type === item.value ? ' is-on' : ''}`}
                        onClick={() => chooseType(item.value)}
                      >
                        {item.icon}
                        <span>{item[locale]}</span>
                        {values.type === item.value && <Check className="facet__check" size={14} />}
                      </button>
                    ))}
                  </div>
                )}
                </span>
                {errors.type && <em>{errors.type}</em>}
              </label>
              <label className={`field${errors.message ? ' is-error' : ''}`}>
                <span>{copy.contact.message}</span>
                <span className="field__control field__control--area">
                  <MessageSquare size={16} />
                  <textarea
                    rows={5}
                    value={values.message}
                    onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                  />
                </span>
                {errors.message && <em>{errors.message}</em>}
              </label>
              <label className={`check${errors.privacy ? ' is-error' : ''}`}>
                <input
                  type="checkbox"
                  checked={values.privacy}
                  onChange={(e) => setValues((v) => ({ ...v, privacy: e.target.checked }))}
                />
                <span>{copy.contact.privacy}</span>
              </label>
              {errors.privacy && <em className="form-error">{errors.privacy}</em>}
              <button type="submit" className="btn btn--red" disabled={state === 'sending'}>
                {state === 'sending' ? copy.contact.sending : copy.contact.send}
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
