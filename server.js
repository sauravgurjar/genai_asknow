import express from 'express'
import helmet from 'helmet'
import { existsSync } from 'node:fs'
import { loadEnvFile } from 'node:process'
import { dirname, extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
if (existsSync(join(root, '.env'))) loadEnvFile(join(root, '.env'))
const dist = join(root, 'dist')
if (!existsSync(join(dist, 'index.html'))) {
  console.error('Production build missing. Run npm run build before npm start.')
  process.exit(1)
}
const port = Number(process.env.PORT || 3000)
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('PORT must be an integer between 1 and 65535')
}
const host = process.env.HOST || '0.0.0.0'
const app = express()
app.disable('x-powered-by')
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        'connect-src': ["'self'", 'https://asknow-dev.hdfcbankuat.com'],
        // MUI Emotion injects runtime styles.
        'style-src': ["'self'", "'unsafe-inline'"],
        'upgrade-insecure-requests':
          process.env.NODE_ENV === 'production' ? [] : null,
      },
    },
  }),
)
app.get('/health', (_req, res) =>
  res.set('Cache-Control', 'no-store').json({ status: 'ok' }),
)
app.use(
  '/assets',
  express.static(join(dist, 'assets'), { immutable: true, maxAge: '1y' }),
)
app.use(express.static(dist, { index: false, maxAge: 0 }))
app.get('/{*path}', (req, res, next) => {
  // Missing assets and API paths must not receive the application HTML.
  if (
    extname(req.path) ||
    /^\/(assets|api|DEV)(\/|$)/.test(req.path) ||
    !req.accepts('html')
  )
    return next()
  res.set('Cache-Control', 'no-store').sendFile(join(dist, 'index.html'))
})
app.use((_req, res) => res.status(404).json({ message: 'Not found' }))
app.use((error, _req, res, _next) => {
  console.error(error)
  res.status(500).json({ message: 'Internal server error' })
})
const server = app.listen(port, host, () =>
  console.log(`Application listening on http://${host}:${port}`),
)
server.on('error', (error) => {
  console.error(error)
  process.exitCode = 1
})
for (const signal of ['SIGINT', 'SIGTERM']) {
  process.once(signal, () => {
    server.close(() => process.exit(0))
    setTimeout(() => process.exit(1), 10000).unref()
  })
}
