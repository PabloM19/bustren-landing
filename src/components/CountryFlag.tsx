import type { ComponentType, SVGProps } from 'react'
import * as FlagIcons from 'country-flag-icons/react/3x2'

const flags = FlagIcons as Record<string, ComponentType<SVGProps<SVGSVGElement>>>

type Props = {
  iso: string
  size?: 'sm' | 'md'
  className?: string
}

export function CountryFlag({ iso, size = 'md', className = '' }: Props) {
  const Flag = flags[iso.toUpperCase()]
  if (!Flag) return null

  return (
    <span
      className={`country-flag country-flag--${size}${className ? ` ${className}` : ''}`}
      aria-hidden
    >
      <Flag />
    </span>
  )
}
