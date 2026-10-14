import { useEffect, useId, useMemo, useRef, useState, type ReactNode } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  ArrowLeftRight,
  ArrowUpRight,
  Building2,
  Check,
  ChevronDown,
  Landmark,
  Search,
  TrainFront,
  TramFront,
  X,
} from 'lucide-react'
import { CountryFlag } from '../components/CountryFlag'
import { CountryLabel } from '../components/CountryLabel'
import { PageHead } from '../components/PageHead'
import { useLocale } from '../context/LocaleContext'
import { metricWithUnit } from '../lib/metricValue'
import { countryIsoFromName } from '../lib/countryIso'
import {
  countries,
  infrastructureLabels,
  projects,
  serviceLabels,
  statusLabels,
  years,
  type InfrastructureType,
  type ProjectStatus,
  type ServiceKey,
} from '../data/projects'

const typeIcons: Record<InfrastructureType, ReactNode> = {
  metro: <TrainFront size={15} />,
  tram: <TramFront size={15} />,
  interchange: <ArrowLeftRight size={15} />,
  station: <Landmark size={15} />,
  building: <Building2 size={15} />,
}

type FacetOption = { value: string; label: string; icon?: ReactNode }

function FilterFacet({
  id,
  label,
  value,
  options,
  allLabel,
  clearLabel,
  open,
  onOpenChange,
  onChange,
}: {
  id: string
  label: string
  value: string
  options: FacetOption[]
  allLabel: string
  clearLabel: string
  open: boolean
  onOpenChange: (open: boolean) => void
  onChange: (value: string) => void
}) {
  const rootRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const listId = useId()
  const selected = options.find((option) => option.value === value)

  useEffect(() => {
    if (!open || !menuRef.current) return
    const menu = menuRef.current
    const rect = menu.getBoundingClientRect()
    if (rect.right > window.innerWidth - 12) {
      menu.style.left = 'auto'
      menu.style.right = '0'
    }
    if (rect.left < 12) {
      menu.style.left = '0'
      menu.style.right = 'auto'
    }
  }, [open])

  return (
    <div className={`facet${value ? ' is-set' : ''}${open ? ' is-open' : ''}`} ref={rootRef}>
      <button
        type="button"
        className="facet__btn"
        data-filter-menu={id}
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => onOpenChange(!open)}
      >
        <span className="facet__label">{label}</span>
        {selected && (
          <span className="facet__value">
            {selected.icon}
            <span>{selected.label}</span>
          </span>
        )}
        <ChevronDown className="facet__chevron" size={14} aria-hidden />
      </button>
      {value && (
        <button
          type="button"
          className="facet__x"
          aria-label={`${clearLabel}: ${label}`}
          onClick={() => onChange('')}
        >
          <X size={13} />
        </button>
      )}
      {open && (
        <div className="facet__menu" id={listId} role="listbox" aria-label={label} ref={menuRef}>
          <button
            type="button"
            role="option"
            aria-selected={!value}
            className={`facet__option${!value ? ' is-on' : ''}`}
            onClick={() => {
              onChange('')
              onOpenChange(false)
            }}
          >
            <span>{allLabel}</span>
            {!value && <Check className="facet__check" size={14} />}
          </button>
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              role="option"
              data-filter={option.value}
              aria-selected={value === option.value}
              className={`facet__option${value === option.value ? ' is-on' : ''}`}
              onClick={() => {
                onChange(option.value)
                onOpenChange(false)
              }}
            >
              {option.icon}
              <span>{option.label}</span>
              {value === option.value && <Check className="facet__check" size={14} />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function Projects() {
  const { locale, copy } = useLocale()
  const [searchParams] = useSearchParams()
  const [q, setQ] = useState('')
  const [country, setCountry] = useState('')
  const [service, setService] = useState('')
  const [type, setType] = useState('')
  const [status, setStatus] = useState('')
  const [year, setYear] = useState('')
  const [menu, setMenu] = useState<string | null>(null)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const pais = searchParams.get('pais') ?? ''
    if (pais && countries.includes(pais)) setCountry(pais)
  }, [searchParams])

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const hay = `${p.titleEs} ${p.titleEn} ${p.city} ${p.country} ${p.summaryEs}`.toLowerCase()
      if (q && !hay.includes(q.toLowerCase())) return false
      if (country && p.country !== country) return false
      if (service && !p.services.includes(service as ServiceKey)) return false
      if (type && p.infrastructureType !== type) return false
      if (status && p.status !== status) return false
      if (year && String(p.yearStart) !== year) return false
      return true
    })
  }, [q, country, service, type, status, year])

  const clear = () => {
    setQ('')
    setCountry('')
    setService('')
    setType('')
    setStatus('')
    setYear('')
  }

  const active = Boolean(q || country || service || type || status || year)

  useEffect(() => {
    if (!menu) return
    const onPointer = (event: PointerEvent) => {
      if (!barRef.current?.contains(event.target as Node)) setMenu(null)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenu(null)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [menu])

  const facet = (
    id: string,
    label: string,
    value: string,
    options: FacetOption[],
    onChange: (next: string) => void,
  ) => (
    <FilterFacet
      id={id}
      label={label}
      value={value}
      options={options}
      allLabel={copy.projects.all}
      clearLabel={copy.projects.clear}
      open={menu === id}
      onOpenChange={(next) => setMenu(next ? id : null)}
      onChange={(next) => {
        onChange(next)
        setMenu(null)
      }}
    />
  )

  return (
    <div className="page">
      <PageHead kicker={copy.projects.kicker} title={copy.projects.title} lead={copy.projects.lead} />

      <div className="wrap">
        <div className="filter-bar" ref={barRef}>
          <div className="filter-bar__top">
            <label className="search">
              <Search size={16} />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={copy.projects.search}
              />
              {q && (
                <button type="button" className="search__clear" aria-label={copy.projects.clear} onClick={() => setQ('')}>
                  <X size={14} />
                </button>
              )}
            </label>
            <p className="filter-count" aria-live="polite">
              {filtered.length} {filtered.length === 1 ? copy.projects.result : copy.projects.results}
            </p>
          </div>

          <div className="filter-bar__facets">
            {facet(
              'country',
              copy.projects.country,
              country,
              countries.map((c) => {
                const iso = countryIsoFromName(c)
                return {
                  value: c,
                  label: c,
                  icon: iso ? <CountryFlag iso={iso} size="sm" /> : undefined,
                }
              }),
              setCountry,
            )}
            {facet(
              'type',
              copy.projects.type,
              type,
              (Object.keys(infrastructureLabels) as InfrastructureType[]).map((k) => ({
                value: k,
                label: infrastructureLabels[k][locale],
                icon: typeIcons[k],
              })),
              setType,
            )}
            {facet(
              'status',
              copy.projects.status,
              status,
              (Object.keys(statusLabels) as ProjectStatus[]).map((k) => ({
                value: k,
                label: statusLabels[k][locale],
              })),
              setStatus,
            )}
            {facet(
              'year',
              copy.projects.year,
              year,
              years.map((y) => ({ value: String(y), label: String(y) })),
              setYear,
            )}
            {facet(
              'service',
              copy.projects.service,
              service,
              Object.entries(serviceLabels).map(([k, v]) => ({ value: k, label: v[locale] })),
              setService,
            )}
            {active && (
              <button type="button" className="filter-clear" onClick={clear}>
                <X size={14} /> {copy.projects.clear}
              </button>
            )}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="empty">{copy.projects.empty}</p>
        ) : (
          <div className="portfolio">
            {filtered.map((p) => (
              <Link
                key={p.id}
                to={`/proyectos/${p.slug}`}
                className="p-card"
              >
                <div className="p-card__media">
                  <img src={p.coverImage} alt="" style={{ objectPosition: p.coverPosition }} />
                  <span className="p-card__flag">
                    <CountryLabel
                      name={locale === 'es' ? p.country : p.countryEn}
                      lookupName={p.country}
                    />
                  </span>
                  {p.metrics[0] && <span className="p-card__stat">{metricWithUnit(p.metrics[0].value)}</span>}
                </div>
                <div className="p-card__body">
                  <p className="kicker">
                    {p.city} · {p.years}
                  </p>
                  <h2>{locale === 'es' ? p.titleEs : p.titleEn}</h2>
                  <p className="p-card__meta">
                    {infrastructureLabels[p.infrastructureType][locale]} · {serviceLabels[p.services[0]][locale]}
                  </p>
                  <span className="p-card__go">
                    {locale === 'es' ? 'Ver ficha' : 'View case'} <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
