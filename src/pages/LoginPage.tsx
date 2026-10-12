import { useEffect } from 'react'
import { Box } from '@mui/material'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import { LoginBackground } from '../features/auth/components/LoginBackground'
import { LoginMobileBackground } from '../features/auth/components/LoginMobileBackground'
import { LoginBranding } from '../features/auth/components/LoginBranding'
import { LoginPanel } from '../features/auth/components/LoginPanel'
import { loginStyles } from '../features/auth/login.styles'
import { loginStrings } from '../features/auth/login.strings'
export default function LoginPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = loginStrings.pageTitle
    return () => {
      document.title = previousTitle
    }
  }, [])
  return (
    <Box component="main" sx={loginStyles.page}>
      <LoginBackground />
      <LoginMobileBackground />
      <LoginBranding />
      <LoginPanel />
    </Box>
  )
}
