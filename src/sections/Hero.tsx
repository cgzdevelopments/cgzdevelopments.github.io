import { Box, Typography, Container } from '@mui/material'
import ParticleBackground from '../components/ParticleBackground'

export default function Hero() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <ParticleBackground />
      <Container maxWidth="sm" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <Typography variant="h3" sx={{ fontWeight: 600, mb: 3 }}>
          Software Developer
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            fontStyle: 'italic',
            fontWeight: 300,
            lineHeight: 1.6,
            '&::before': { content: '"\\201C"' },
            '&::after': { content: '"\\201D"' },
          }}
        >
          Building web & mobile applications with modern technologies.
        </Typography>
      </Container>
    </Box>
  )
}
