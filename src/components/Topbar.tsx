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
import { useTranslation } from 'react-i18next'
import { useThemeContext } from '../theme/ThemeContext'
import LangToggle from './LangToggle'

const sections = [
  { id: 'home', labelKey: 'nav.home' },
  { id: 'about', labelKey: 'nav.about' },
  { id: 'services', labelKey: 'nav.services' },
  { id: 'contact', labelKey: 'nav.contact' },
]

export default function Topbar() {
  const { t } = useTranslation()
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
        <Toolbar sx={{ px: { xs: 0.5, sm: 2 }, overflow: 'hidden' }}>
          <Box sx={{ flex: { xs: '0 0 auto', md: 1 }, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label={t('nav.menu')}
              onClick={() => setDrawerOpen(true)}
              size="small"
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
          </Box>

          <Box sx={{ flex: '1 1 auto', minWidth: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: { xs: 0, md: 1 } }}>
            <Typography
              variant="body2"
              noWrap
              sx={{
                display: { xs: 'block', md: 'none' },
                fontWeight: 600,
              }}
            >
              cgzdev
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {sections.map(({ id, labelKey }) => (
                <Button key={id} onClick={() => scrollTo(id)} color="inherit" sx={{ textTransform: 'none', minWidth: 0 }}>
                  {t(labelKey)}
                </Button>
              ))}
            </Box>
          </Box>

          <Box sx={{ flex: { xs: '0 0 auto', md: 1 }, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <LangToggle />
            <IconButton
              onClick={toggleTheme}
              color="inherit"
              size="small"
              aria-label={mode === 'light' ? t('nav.theme_dark') : t('nav.theme_light')}
            >
              {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Box>
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
            {sections.map(({ id, labelKey }) => (
              <ListItem key={id} disablePadding>
                <ListItemButton onClick={() => handleNav(id)}>
                  <ListItemText primary={t(labelKey)} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}
