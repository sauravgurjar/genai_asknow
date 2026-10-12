import { Link } from 'react-router'
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from '@mui/material'
export default function HomePage() {
  return (
    <Stack spacing={4}>
      <Box>
        <Chip
          label="Your starting point"
          color="primary"
          variant="outlined"
          size="small"
          sx={{ mb: 2 }}
        />
        <Typography variant="h4" component="h1" gutterBottom>
          Build something great.
        </Typography>
        <Typography color="text.secondary">
          A clean foundation for your next React application.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 3,
        }}
      >
        {[
          [
            'Ready to extend',
            'Organized pages, shared components, and an application shell.',
          ],
          [
            'Designed to adapt',
            'Responsive navigation and a persistent light or dark theme.',
          ],
          [
            'Built with confidence',
            'TypeScript, automated checks, and optimized production builds.',
          ],
        ].map(([title, description]) => (
          <Card key={title}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                {title}
              </Typography>
              <Typography color="text.secondary">{description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Card>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Make it yours
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Start with your first feature, connect an API, and customize the
            theme to match your brand.
          </Typography>
          <Button variant="contained" component={Link} to="/settings">
            Explore settings
          </Button>
        </CardContent>
      </Card>
    </Stack>
  )
}
