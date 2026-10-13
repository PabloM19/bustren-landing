import { useCookies } from '../context/CookiesContext'
import { useLocale } from '../context/LocaleContext'

export function CookieBanner() {
  const { copy } = useLocale()
  const { open, configure, analytics, accept, reject, openConfig, setAnalytics, saveConfig } =
    useCookies()

  if (!open) return null

  return (
    <div className="cookie" role="dialog" aria-labelledby="cookie-title">
      <div className="cookie__panel">
        <p id="cookie-title" className="kicker">
          {copy.cookies.title}
        </p>
        <p>{copy.cookies.text}</p>
        {configure && (
          <div className="cookie__prefs">
            <label>
              <input type="checkbox" checked disabled />
              {copy.cookies.necessary} — {copy.cookies.always}
            </label>
            <label>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
              />
              {copy.cookies.analytics}
            </label>
          </div>
        )}
        <div className="cookie__actions">
          <button type="button" className="btn btn--red" onClick={accept}>
            {copy.cookies.accept}
          </button>
          <button type="button" className="btn btn--ghost-light" onClick={reject}>
            {copy.cookies.reject}
          </button>
          {configure ? (
            <button type="button" className="btn btn--ghost-light" onClick={saveConfig}>
              {copy.cookies.save}
            </button>
          ) : (
            <button type="button" className="btn btn--ghost-light" onClick={openConfig}>
              {copy.cookies.configure}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
