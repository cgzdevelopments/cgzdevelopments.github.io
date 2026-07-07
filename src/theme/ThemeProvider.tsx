import { ThemeProvider as MuiThemeProvider, CssBaseline, useColorScheme } from '@mui/material'
import ThemeContext from './ThemeContext'
import theme from './theme'

function ThemeController({ children }: { children: React.ReactNode }) {
  const { mode, setMode, systemMode } = useColorScheme()
  const resolvedMode = mode === 'system' ? systemMode : mode

  const toggleTheme = () => {
    setMode(resolvedMode === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ mode: resolvedMode ?? 'light', toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeController>
        {children}
      </ThemeController>
    </MuiThemeProvider>
  )
}
