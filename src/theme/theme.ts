import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: '#fafafa',
          paper: '#ffffff',
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: '#121212',
          paper: '#1e1e1e',
        },
      },
    },
  },
  shape: { borderRadius: 8 },
})

export default theme
