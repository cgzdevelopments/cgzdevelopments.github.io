import { IconButton } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useThemeContext } from '../theme/ThemeContext'

export default function ThemeToggle() {
  const { mode, toggleTheme } = useThemeContext()

  return (
    <IconButton
      onClick={toggleTheme}
      sx={{ position: 'fixed', top: 16, right: 16, zIndex: 9999 }}
      color="inherit"
      aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
    >
      {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  )
}
