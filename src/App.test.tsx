import { render, screen, fireEvent } from '@testing-library/react'
import { beforeEach, expect, it } from 'vitest'
import App from './App'
beforeEach(() => {
  window.history.replaceState({}, '', '/overview')
  localStorage.clear()
})
it('navigates from overview to settings', async () => {
  render(<App />)
  expect(
    await screen.findByRole('heading', { name: 'Build something great.' }),
  ).toBeInTheDocument()
  fireEvent.click(screen.getByRole('link', { name: 'Explore settings' }))
  expect(
    await screen.findByRole('heading', { name: 'Settings' }),
  ).toBeInTheDocument()
  expect(screen.getByRole('combobox', { name: 'Theme' })).toBeInTheDocument()
})
it('provides recovery navigation for unknown routes', async () => {
  window.history.replaceState({}, '', '/missing')
  render(<App />)
  expect(
    await screen.findByRole('heading', { name: 'Page not found' }),
  ).toBeInTheDocument()
  fireEvent.click(screen.getByRole('link', { name: 'Back to overview' }))
  expect(
    await screen.findByRole('heading', { name: 'Build something great.' }),
  ).toBeInTheDocument()
})
