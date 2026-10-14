import { useEffect, useRef, useState } from 'react'

function formatNumber(value: number, locale: string) {
  return new Intl.NumberFormat(locale === 'en' ? 'en-GB' : 'es-ES', {
    maximumFractionDigits: 0,
  }).format(Math.round(value))
}

type Props = {
  from?: number
  to: number
  unit?: string
  duration?: number
  locale?: string
}

export function CountUp({ from = 0, to, unit, duration = 1600, locale = 'es' }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(from)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const run = () => {
      if (started.current) return
      started.current = true
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduced || from === to) {
        setValue(to)
        return
      }
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration)
        const eased = 1 - (1 - t) ** 3
        setValue(from + (to - from) * eased)
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) run()
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [from, to, duration])

  return (
    <span className="stats__value" ref={ref}>
      {formatNumber(value, locale)}
      {unit ? <span className="stats__unit"> {unit}</span> : null}
    </span>
  )
}
