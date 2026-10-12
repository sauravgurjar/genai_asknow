import { afterEach, expect, it, vi } from 'vitest'
import { apiRequest, ApiError } from './api'
afterEach(() => vi.unstubAllGlobals())
it('preserves custom headers and supports no-content responses', async () => {
  const fetchMock = vi
    .fn()
    .mockResolvedValue(new Response(null, { status: 204 }))
  vi.stubGlobal('fetch', fetchMock)
  await expect(
    apiRequest('/example', { headers: { 'X-Request-ID': '123' } }),
  ).resolves.toBeUndefined()
  const options = fetchMock.mock.calls[0]?.[1] as RequestInit
  expect(new Headers(options.headers).get('X-Request-ID')).toBe('123')
  expect(options.signal).toBeInstanceOf(AbortSignal)
})
it('rejects unsuccessful HTTP responses', async () => {
  vi.stubGlobal(
    'fetch',
    vi.fn().mockResolvedValue(new Response(null, { status: 503 })),
  )
  await expect(apiRequest('/example')).rejects.toBeInstanceOf(ApiError)
})
