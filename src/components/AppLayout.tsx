import { useState } from 'react'
import { NavLink, Outlet } from 'react-router'
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useColorScheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined'
const width = 240
const links = [
  { to: '/overview', label: 'Overview', icon: <DashboardOutlinedIcon /> },
  { to: '/settings', label: 'Settings', icon: <SettingsOutlinedIcon /> },
]
export default function AppLayout() {
  const [open, setOpen] = useState(false)
  const { mode, systemMode, setMode } = useColorScheme()
  const activeMode = mode === 'system' ? systemMode : mode
  const navigation = (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ p: 2 }}>
        AskNow
      </Typography>
      <List>
        {links.map((link) => (
          <ListItemButton
            key={link.to}
            component={NavLink}
            to={link.to}
            end
            onClick={() => setOpen(false)}
            sx={{
              borderRadius: 2,
              mb: 1,
              '&.active': { bgcolor: 'action.selected', color: 'primary.main' },
            }}
          >
            <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
              {link.icon}
            </ListItemIcon>
            <ListItemText primary={link.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  )
  return (
    <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
      <Box
        component="a"
        href="#main-content"
        sx={{
          position: 'absolute',
          left: -9999,
          '&:focus': {
            left: 16,
            top: 16,
            zIndex: 1500,
            bgcolor: 'background.paper',
            p: 2,
          },
        }}
      >
        Skip to content
      </Box>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          width: { md: `calc(100% - ${width}px)` },
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="Open navigation"
            onClick={() => setOpen(true)}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ flexGrow: 1, fontWeight: 600 }}>
            Workspace
          </Typography>
          <IconButton
            aria-label="Toggle color theme"
            onClick={() => setMode(activeMode === 'dark' ? 'light' : 'dark')}
          >
            <Brightness4OutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        aria-label="Main navigation"
        sx={{ width: { md: width }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={open}
          onClose={() => setOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { width },
          }}
        >
          {navigation}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { width, boxSizing: 'border-box' },
          }}
        >
          {navigation}
        </Drawer>
      </Box>
      <Box
        component="main"
        id="main-content"
        tabIndex={-1}
        sx={{ flexGrow: 1, minWidth: 0, pb: 4 }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  )
}
