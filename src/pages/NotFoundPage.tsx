import { Button, Stack, Typography } from '@mui/material'
import { Link } from 'react-router'
export default function NotFoundPage() {
  return (
    <Stack spacing={2} sx={{ alignItems: 'flex-start' }}>
      <Typography variant="h4" component="h1">
        Page not found
      </Typography>
      <Typography color="text.secondary">
        The page you requested does not exist.
      </Typography>
      <Button variant="contained" component={Link} to="/overview">
        Back to overview
      </Button>
    </Stack>
  )
}
