import type { ReactNode } from 'react'

const UNIT = /\s+(km|m²|m2)$/i

export function metricWithUnit(value: string): ReactNode {
  const match = value.match(UNIT)
  if (!match || match.index === undefined) return value
  return (
    <>
      {value.slice(0, match.index)}
      <span className="stats__unit">{match[0]}</span>
    </>
  )
}
