import { Box, Typography } from '@mui/material'
import { loginAssets as assets } from '../login.assets'
import { loginStrings as strings } from '../login.strings'
import { loginStyles as styles } from '../login.styles'

function BankLogo() {
  return (
    <Box
      role="img"
      aria-label={strings.bankName}
      sx={{ position: 'relative', width: 180, height: 36 }}
    >
      <Box
        component="img"
        src={assets.bankBackground}
        alt=""
        sx={{ position: 'absolute', inset: 0 }}
      />
      <Box
        component="img"
        src={assets.bankSymbol}
        alt=""
        sx={{ position: 'absolute', left: 3.6, top: 3.6 }}
      />
      <Box
        component="img"
        src={assets.bankBlue}
        alt=""
        sx={{ position: 'absolute', left: 32.4, top: 3.6 }}
      />
      <Box
        component="img"
        src={assets.bankWordmark}
        alt=""
        sx={{ position: 'absolute', left: 39.6, top: 10.797 }}
      />
      <Box
        component="img"
        src={assets.bankText}
        alt=""
        sx={{ position: 'absolute', left: 107.924, top: 10.797 }}
      />
    </Box>
  )
}
export function LoginBranding() {
  return (
    <Box
      component="section"
      aria-label={strings.productName}
      sx={styles.branding}
    >
      <Box sx={styles.brandContent}>
        <BankLogo />
        <Typography component="h1" sx={styles.brandTitle}>
          <Box component="span" sx={{ fontWeight: 600 }}>
            {strings.productName}
          </Box>
          <Box component="span" sx={styles.titleSeparator}>
            {' | '}
          </Box>
          <Box component="span" sx={styles.tagline}>
            {strings.tagline}
          </Box>
        </Typography>
        <Typography sx={styles.description}>{strings.description}</Typography>
      </Box>
    </Box>
  )
}
