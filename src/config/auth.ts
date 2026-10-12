/** SSO entry point supplied by the existing AskNow integration. */
export function getSsoLoginUrl(): string | undefined {
  const base = import.meta.env.VITE_USER_BASE_URL?.trim()
  if (!base) return undefined
  try {
    const url = new URL(base)
    if (
      url.protocol !== 'https:' &&
      !(import.meta.env.DEV && url.protocol === 'http:')
    )
      return undefined
    url.pathname = `${url.pathname.replace(/\/$/, '')}/saml2/authenticate/asknow`
    url.search = ''
    url.hash = ''
    return url.href
  } catch {
    return undefined
  }
}
// Enable only while the scheduled maintenance notice is relevant.
export const showMaintenanceNotice =
  import.meta.env.VITE_SHOW_MAINTENANCE_NOTICE === 'true'
