import { afterEach, expect, it, vi } from 'vitest'
import { getSsoLoginUrl } from './auth'
afterEach(() => vi.unstubAllEnvs())
it('keeps the service prefix when building the SSO redirect', () => {
  vi.stubEnv(
    'VITE_USER_BASE_URL',
    'https://example.com/DEV/asknow-edge-services/',
  )
  expect(getSsoLoginUrl()).toBe(
    'https://example.com/DEV/asknow-edge-services/saml2/authenticate/asknow',
  )
})
it.each(['', 'invalid', 'javascript:alert(1)'])(
  'rejects invalid SSO configuration: %s',
  (value) => {
    vi.stubEnv('VITE_USER_BASE_URL', value)
    expect(getSsoLoginUrl()).toBeUndefined()
  },
)
