import { Box, Typography } from '@mui/material'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <Box
      sx={{
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ThemeToggle />
      <Typography variant="h1">Hello World</Typography>
    </Box>
  )
}

export default App
