import { Box } from '@mui/material'
import { loginAssets as assets } from '../login.assets'
import { loginStyles } from '../login.styles'

/** Original Figma layer positions, relative to the background canvas. */
export function LoginBackground() {
  return (
    <Box aria-hidden="true" sx={loginStyles.background}>
      <Box
        sx={{
          position: 'absolute',
          width: 1558.5,
          height: 2030.708,
          left: 'calc(50% + .75px)',
          top: 'calc(50% + 53.25px)',
          transform: 'translate(-50%, -50%) rotate(90deg)',
          filter: 'blur(27px)',
          opacity: 0.2,
        }}
      >
        <Box
          component="img"
          src={assets.texture}
          alt=""
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            bgcolor: '#203ca7',
            mixBlendMode: 'color',
          }}
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: 4252,
          height: 3189,
          left: -1084.5,
          top: -1087.5,
          filter: 'blur(75px)',
          mixBlendMode: 'multiply',
        }}
      >
        <Box
          component="img"
          src={assets.colorCloud}
          alt=""
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            bgcolor: '#203ca7',
            mixBlendMode: 'color',
          }}
        />
      </Box>
      <Box
        component="img"
        src={assets.orb}
        alt=""
        sx={{
          position: 'absolute',
          width: 2322,
          height: 1741.5,
          left: '50%',
          top: 'calc(50% + 53.25px)',
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover',
          mixBlendMode: 'screen',
          filter: 'blur(3px)',
        }}
      />
      <Box
        component="img"
        src={assets.ellipseBottomLeft}
        alt=""
        sx={{
          position: 'absolute',
          mixBlendMode: 'color',
          left: 'calc(8.333% + 24.5px)',
          top: 385.5,
        }}
      />
      <Box
        component="img"
        src={assets.ellipseTopLeft}
        alt=""
        sx={{
          position: 'absolute',
          mixBlendMode: 'color',
          left: -178.5,
          top: -411,
        }}
      />
      <Box
        component="img"
        src={assets.ellipseBottomRight}
        alt=""
        sx={{
          position: 'absolute',
          mixBlendMode: 'color',
          left: 'calc(50% - 15px)',
          top: 624,
        }}
      />
      <Box
        component="img"
        src={assets.ellipseTopRight}
        alt=""
        sx={{
          position: 'absolute',
          mixBlendMode: 'color',
          left: 'calc(50% + 30px)',
          top: -321,
        }}
      />
    </Box>
  )
}
