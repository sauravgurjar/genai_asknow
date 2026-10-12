import { render, screen } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { ThemeProvider } from '@mui/material'
import { theme } from '../app/theme'
import { loginStrings } from '../features/auth/login.strings'
import LoginPage from './LoginPage'
afterEach(() => vi.unstubAllEnvs())
it('shows an SSO link to the configured identity service', () => {
  vi.stubEnv(
    'VITE_USER_BASE_URL',
    'https://example.com/DEV/asknow-edge-services',
  )
  render(
    <ThemeProvider theme={theme}>
      <LoginPage />
    </ThemeProvider>,
  )
  expect(
    screen.getByRole('heading', { name: loginStrings.welcome }),
  ).toBeInTheDocument()
  expect(
    screen.getByRole('link', { name: loginStrings.signInButton }),
  ).toHaveAttribute(
    'href',
    'https://example.com/DEV/asknow-edge-services/saml2/authenticate/asknow',
  )
})
it('shows a useful error when the identity service is not configured', () => {
  vi.stubEnv('VITE_USER_BASE_URL', '')
  render(
    <ThemeProvider theme={theme}>
      <LoginPage />
    </ThemeProvider>,
  )
  expect(screen.getByRole('alert')).toHaveTextContent(
    loginStrings.configurationError,
  )
  expect(
    screen.queryByRole('link', { name: loginStrings.signInButton }),
  ).not.toBeInTheDocument()
})
