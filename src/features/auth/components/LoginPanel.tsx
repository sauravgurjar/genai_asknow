import { Alert, Box, Button, Typography } from '@mui/material'
import { getSsoLoginUrl, showMaintenanceNotice } from '../../../config/auth'
import { loginAssets as assets } from '../login.assets'
import { loginStrings as strings } from '../login.strings'
import { loginStyles as styles } from '../login.styles'

export function LoginPanel() {
  const loginUrl = getSsoLoginUrl()
  return (
    <Box component="section" aria-labelledby="login-heading" sx={styles.panel}>
      <Box sx={styles.panelContent}>
        {showMaintenanceNotice && (
          <Alert severity="warning" sx={{ mb: 3 }}>
            {strings.maintenance}
          </Alert>
        )}
        <Box sx={styles.header}>
          <Box sx={styles.welcome}>
            <Box
              component="img"
              src={assets.shield}
              alt=""
              sx={styles.desktopShield}
            />
            <Box
              component="img"
              src={assets.mobileShield}
              alt=""
              sx={styles.mobileShield}
            />
            <Typography
              id="login-heading"
              component="h2"
              sx={styles.welcomeTitle}
            >
              {strings.welcome}
            </Typography>
          </Box>
          <Typography sx={styles.signInDescription}>
            {strings.signInDescription}
            <br />
            {strings.signInDescriptionEnd}
          </Typography>
        </Box>
        {loginUrl ? (
          <Button
            component="a"
            href={loginUrl}
            variant="contained"
            fullWidth
            endIcon={<img src={assets.signIn} alt="" />}
            sx={styles.button}
          >
            {strings.signInButton}
          </Button>
        ) : (
          <Alert severity="error" sx={{ my: 3 }}>
            {strings.configurationError}
          </Alert>
        )}
        <Box sx={styles.divider}>
          <Box
            component="img"
            src={assets.divider}
            alt=""
            sx={styles.desktopDivider}
          />
          <Box
            component="img"
            src={assets.tabletDivider}
            alt=""
            sx={styles.tabletDivider}
          />
          <Box
            component="img"
            src={assets.mobileDivider}
            alt=""
            sx={styles.mobileDivider}
          />
        </Box>
        <Box component="footer" sx={styles.footer}>
          <Typography sx={styles.footerText}>{strings.copyright}</Typography>
          <Box sx={styles.security}>
            <img src={assets.lock} alt="" />
            <Typography sx={styles.footerText}>{strings.security}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
