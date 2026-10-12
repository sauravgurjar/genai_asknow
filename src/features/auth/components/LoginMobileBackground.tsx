import { Box } from '@mui/material'
import { loginAssets as assets } from '../login.assets'
import { mobileQuery } from '../login.mobile.styles'

/** Native mobile Figma layers; SVG dimensions are preserved. */
export function LoginMobileBackground() {
  return (
    <Box
      aria-hidden="true"
      sx={{
        display: 'none',
        [mobileQuery]: { display: 'block' },
        position: 'absolute',
        width: 438,
        height: 801,
        left: '50%',
        top: 'calc(max(140px, 50dvh - 170.5px) - 267.5px)',
        transform: 'translateX(-50%)',
        bgcolor: '#fff',
        pointerEvents: 'none',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: 1393,
          height: 1815,
          left: 218.5,
          top: 'calc(50% + 49px)',
          transform: 'translate(-50%, -50%) rotate(90deg)',
          filter: 'blur(6.941px)',
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
          width: 1510.135,
          height: 1132.601,
          left: -385.17,
          top: -386.23,
          filter: 'blur(26.637px)',
          mixBlendMode: 'multiply',
          opacity: 0.6,
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
          width: 520,
          height: 390,
          left: 'calc(100% - 210px)',
          top: 'calc(50% - 155.5px)',
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover',
          mixBlendMode: 'screen',
          filter: 'blur(.793px)',
          opacity: 0.6,
        }}
      />
      <Box
        component="img"
        src={assets.mobileEllipseBottomLeft}
        alt=""
        sx={{
          position: 'absolute',
          left: 45.52,
          top: 136.91,
          mixBlendMode: 'color',
        }}
      />
      <Box
        component="img"
        src={assets.mobileEllipseTopLeft}
        alt=""
        sx={{
          position: 'absolute',
          left: -63.39,
          top: -145.97,
          mixBlendMode: 'color',
        }}
      />
      <Box
        component="img"
        src={assets.mobileEllipseBottomRight}
        alt=""
        sx={{
          position: 'absolute',
          left: 213.67,
          top: 221.62,
          mixBlendMode: 'color',
        }}
      />
      <Box
        component="img"
        src={assets.mobileEllipseTopRight}
        alt=""
        sx={{
          position: 'absolute',
          left: 'calc(100% - 208.34px)',
          top: -114.01,
          mixBlendMode: 'color',
        }}
      />
      <Box
        component="img"
        src={assets.mobileShadow}
        alt=""
        sx={{
          position: 'absolute',
          left: 'calc(100% - 216.5px)',
          top: 'calc(50% - 20.5px)',
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'multiply',
        }}
      />
    </Box>
  )
}
