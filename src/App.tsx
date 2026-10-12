import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import {
  Box,
  CircularProgress,
  CssBaseline,
  ThemeProvider,
} from '@mui/material'
import { theme } from './app/theme'
import { ErrorBoundary } from './components/ErrorBoundary'
import AppLayout from './components/AppLayout'
const LoginPage = lazy(() => import('./pages/LoginPage'))
const HomePage = lazy(() => import('./pages/HomePage'))
const SettingsPage = lazy(() => import('./pages/SettingsPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
export default function App() {
  return (
    <ThemeProvider theme={theme} defaultMode="system">
      <CssBaseline />
      <ErrorBoundary>
        <BrowserRouter>
          <Suspense
            fallback={
              <Box
                role="status"
                aria-label="Loading page"
                sx={{
                  display: 'grid',
                  minHeight: '100dvh',
                  placeItems: 'center',
                }}
              >
                <CircularProgress />
              </Box>
            }
          >
            <Routes>
              <Route index element={<LoginPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route element={<AppLayout />}>
                <Route path="overview" element={<HomePage />} />
                <Route path="settings" element={<SettingsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </ThemeProvider>
  )
}
