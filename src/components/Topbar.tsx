import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  alpha,
  Button,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useThemeContext } from '../theme/ThemeContext'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

export default function Topbar() {
  const { mode, toggleTheme } = useThemeContext()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleNav = (id: string) => {
    scrollTo(id)
    setDrawerOpen(false)
  }

  return (
    <>
      <AppBar position="fixed" color="default" elevation={0} sx={(theme) => ({ bgcolor: alpha(theme.palette.background.default, 0.75), backdropFilter: 'blur(8px)' })}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            component="img"
            src="/logo.png"
            alt="cgzdev logo"
            sx={{
              height: 40,
              display: { xs: 'none', md: 'block' },
            }}
          />

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {sections.map(({ id, label }) => (
              <Button key={id} onClick={() => scrollTo(id)} color="inherit" sx={{ textTransform: 'none' }}>
                {label}
              </Button>
            ))}
          </Box>

          <Typography
            sx={{
              display: { xs: 'block', md: 'none' },
              fontWeight: 600,
            }}
          >
            cgzdev
          </Typography>

          <IconButton
            onClick={toggleTheme}
            color="inherit"
            aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
          >
            {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <Box
            component="img"
            src="/logo.png"
            alt="cgzdev logo"
            sx={{ height: 40, mb: 2 }}
          />
          <List>
            {sections.map(({ id, label }) => (
              <ListItem key={id} disablePadding>
                <ListItemButton onClick={() => handleNav(id)}>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}
