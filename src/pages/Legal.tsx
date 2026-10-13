import { Link, useLocation } from 'react-router-dom'
import { useLocale } from '../context/LocaleContext'

export function Legal() {
  const { pathname } = useLocation()
  const { locale, copy } = useLocale()
  const kind = pathname.includes('privacidad') ? 'privacy' : pathname.includes('cookies') ? 'cookies' : 'legal'

  const title =
    kind === 'privacy' ? copy.legal.privacyTitle : kind === 'cookies' ? copy.legal.cookiesTitle : copy.legal.legalTitle

  return (
    <div className="page">
      <header className="page-head">
        <div className="wrap">
          <h1>{title}</h1>
        </div>
      </header>
      <section className="band">
        <div className="wrap legal">
          {kind === 'legal' && (
            <>
              <p>
                {locale === 'es'
                  ? 'BUSTREN PM S.L., con domicilio en Méndez Álvaro, 56, 28045 Madrid, España. Teléfono +34 91 434 22 80. Correo info@bustrenpm.es.'
                  : 'BUSTREN PM S.L., registered at Méndez Álvaro, 56, 28045 Madrid, Spain. Phone +34 91 434 22 80. Email info@bustrenpm.es.'}
              </p>
              <p>
                {locale === 'es'
                  ? 'Este texto forma parte de un prototipo comercial. No sustituye el aviso legal definitivo de la web en WordPress.'
                  : 'This text is part of a commercial prototype. It does not replace the definitive legal notice of the WordPress site.'}
              </p>
            </>
          )}
          {kind === 'privacy' && (
            <>
              <p>
                {locale === 'es'
                  ? 'Los datos del formulario de reunión se tratarían, en la web final, para gestionar la solicitud de contacto. Este prototipo no envía ni almacena datos en un servidor.'
                  : 'Meeting-form data would be processed, on the final site, to handle the contact request. This prototype does not send or store data on a server.'}
              </p>
              <p>
                {locale === 'es'
                  ? 'Redacción de prototipo. No constituye una política de privacidad definitiva.'
                  : 'Prototype wording. It does not constitute a definitive privacy policy.'}
              </p>
            </>
          )}
          {kind === 'cookies' && (
            <>
              <p>
                {locale === 'es'
                  ? 'El banner de esta maqueta simula el comportamiento de un gestor de consentimiento. La web final utilizará Complianz Premium para adaptar la elección por regiones.'
                  : 'The banner in this mock-up simulates a consent manager. The final site will use Complianz Premium to adapt the choice by region.'}
              </p>
              <p>
                {locale === 'es'
                  ? 'Redacción de prototipo. No constituye una política de cookies definitiva.'
                  : 'Prototype wording. It does not constitute a definitive cookies policy.'}
              </p>
            </>
          )}
          <p>
            <Link to="/">{copy.nav.home}</Link>
          </p>
        </div>
      </section>
    </div>
  )
}
