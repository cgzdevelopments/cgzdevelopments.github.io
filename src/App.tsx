import { Box } from '@mui/material'
import Topbar from './components/Topbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <Topbar />
      <Box sx={{ pt: { xs: '56px', sm: '64px' } }}>
        <Hero />
        <About />
        <Services />
        <Contact />
      </Box>
    </>
  )
}

export default App
