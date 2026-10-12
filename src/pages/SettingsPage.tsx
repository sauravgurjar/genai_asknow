import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  useColorScheme,
} from '@mui/material'
export default function SettingsPage() {
  const { mode, setMode } = useColorScheme()
  return (
    <Stack spacing={3}>
      <Typography variant="h4" component="h1">
        Settings
      </Typography>
      <Card>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Appearance
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Your theme preference is saved on this device.
          </Typography>
          <FormControl sx={{ minWidth: 220 }}>
            <InputLabel id="theme-label">Theme</InputLabel>
            <Select
              labelId="theme-label"
              label="Theme"
              value={mode ?? 'system'}
              onChange={(event) =>
                setMode(event.target.value as 'light' | 'dark' | 'system')
              }
            >
              <MenuItem value="system">System</MenuItem>
              <MenuItem value="light">Light</MenuItem>
              <MenuItem value="dark">Dark</MenuItem>
            </Select>
          </FormControl>
        </CardContent>
      </Card>
    </Stack>
  )
}
