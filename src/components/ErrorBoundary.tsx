import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Alert, Box, Button } from '@mui/material'
export class ErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    // Connect your production error reporting service here.
    if (import.meta.env.DEV) console.error(error, info)
  }
  render() {
    if (this.state.failed)
      return (
        <Box sx={{ p: 4 }}>
          <Alert severity="error">
            Something went wrong. Please reload and try again.
          </Alert>
          <Button onClick={() => window.location.reload()} sx={{ mt: 2 }}>
            Reload application
          </Button>
        </Box>
      )
    return this.props.children
  }
}
