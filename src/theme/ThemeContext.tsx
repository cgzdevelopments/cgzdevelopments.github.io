/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext } from 'react'
import type { PaletteMode } from '@mui/material'

export interface ThemeContextValue {
  mode: PaletteMode
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function useThemeContext() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useThemeContext must be used within ThemeProvider')
  return ctx
}

export default ThemeContext
