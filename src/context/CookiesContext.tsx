import { createContext, useContext } from 'react'

export type Consent = 'accepted' | 'rejected' | 'custom' | null

export const CookiesContext = createContext<{
  consent: Consent
  open: boolean
  configure: boolean
  analytics: boolean
  accept: () => void
  reject: () => void
  openConfig: () => void
  setAnalytics: (value: boolean) => void
  saveConfig: () => void
  reopen: () => void
}>({
  consent: null,
  open: false,
  configure: false,
  analytics: false,
  accept: () => undefined,
  reject: () => undefined,
  openConfig: () => undefined,
  setAnalytics: () => undefined,
  saveConfig: () => undefined,
  reopen: () => undefined,
})

export const useCookies = () => useContext(CookiesContext)
