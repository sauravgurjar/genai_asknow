# React + Vite + Material UI

A TypeScript starter with responsive navigation, lazy-loaded routes, persistent system/light/dark themes, an error boundary, and a small fetch client.

## Getting started

Use Node.js 22.12+ (22.x) or 24+ and npm.

```sh
npm ci
cp .env.example .env
npm run dev
```

## Commands

- `npm run dev`: development server
- `npm run build`: type check and create optimized `dist/` output
- `npm run preview`: locally preview the build
- `npm run check`: type check, lint, tests, and production build
- `npm run test:watch`: interactive tests
- `npm run format`: format source files
- `npm run format:check`: verify formatting

## Structure

- `src/app/theme.ts`: MUI design tokens and component defaults
- `src/components/`: shared layout and error boundary
- `src/pages/`: route-level screens
- `src/lib/api.ts`: HTTP errors, timeout, cancellation, and JSON requests
- `src/test/`: test setup

Add routes in `src/App.tsx`. Customize the brand in `src/app/theme.ts` and `src/components/AppLayout.tsx`. Theme preferences persist through MUI's local storage manager.

## API configuration

`VITE_BASE_URL` defaults to `/api`. All `VITE_*` values are public and embedded at build time; never use them for secrets. The starter does not include a backend or authentication. The fetch helper returns `unknown`; validate responses against your API schema. Pass a caller-owned `AbortSignal` for request cancellation. Requests otherwise time out after 15 seconds.

## Deployment

Run `npm run check` and deploy `dist/` to a static host. Configure the host to serve `index.html` for application routes such as `/settings`, while preserving asset and API routes. Set your API URL before building; configure CORS or proxy `/api` on the host. `vite preview` is a local verification server, not a production server.

GitHub Actions runs formatting, lint, type checks, tests, and a production build. Before deploying your product, connect backend/authentication and an error reporting service as required. Rendering failures currently show a recovery screen; production reporting is left as an integration point in `ErrorBoundary.tsx`.

## Node server

```sh
npm run build
npm start
```

Open http://localhost:3000. `server.js` loads PORT and HOST from `.env`, serves the production build, supports React routes, and exposes `/health`. Vite service URLs are embedded during build; rebuild after changing them. The server does not proxy API requests. The remote services must allow your application origin through CORS. The relative login endpoint resolves against the application origin; configure your deployment routing before using it.

## Login screen

`/` and `/login` show the Figma login screen; the starter overview is at `/overview`.

- `src/pages/LoginPage.tsx`: page composition
- `src/features/auth/login.strings.ts`: all login text
- `src/features/auth/login.styles.ts`: responsive MUI styles
- `src/features/auth/components/`: background, branding, and SSO panel
- `src/config/auth.ts`: environment-based SSO URL
- `public/assets/login/`: original Figma image and SVG assets

The SSO button redirects to `VITE_USER_BASE_URL/saml2/authenticate/asknow`, matching the supplied integration. The optional maintenance notice is enabled with `VITE_SHOW_MAINTENANCE_NOTICE=true`; it is hidden by default to match Figma. Authentication callback handling and session validation belong to the backend integration; the starter overview is not access-controlled. Poppins fonts are served locally.

Mobile-specific layout overrides are in `src/features/auth/login.mobile.styles.ts` (below 600px). The mobile design uses a 341px login panel, a 56px SSO button, and bottom safe-area padding. Short screens scroll naturally. The native browser toolbar and home indicator shown in Figma are supplied by the device, rather than duplicated in the page. Tablet widths from 600px to below 1200px retain the 55% branding / 45% login panel split.
