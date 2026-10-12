export class ApiError extends Error {
  readonly status: number
  constructor(status: number) {
    super(`Request failed with status ${status}`)
    this.status = status
    this.name = 'ApiError'
  }
}
/** Callers must validate the unknown response before using it. */
export async function apiRequest(
  path: string,
  options: RequestInit = {},
): Promise<unknown> {
  const base = import.meta.env.VITE_BASE_URL || '/api'
  const headers = new Headers(options.headers)
  headers.set('Accept', 'application/json')
  if (typeof options.body === 'string' && !headers.has('Content-Type'))
    headers.set('Content-Type', 'application/json')
  const response = await fetch(
    `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`,
    {
      ...options,
      headers,
      signal: options.signal ?? AbortSignal.timeout(15000),
    },
  )
  if (!response.ok) throw new ApiError(response.status)
  if (response.status === 204) return undefined
  return response.json()
}
