import { createTheme } from '@mui/material/styles'
export const theme = createTheme({
  cssVariables: true,
  colorSchemes: { light: true, dark: true },
  palette: { primary: { main: '#5056d6' } },
  typography: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    h4: { fontWeight: 700 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { textTransform: 'none' } },
    },
    MuiCard: { defaultProps: { variant: 'outlined' } },
  },
})
