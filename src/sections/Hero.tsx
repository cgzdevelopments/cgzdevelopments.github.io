import { Box, Typography, Container } from '@mui/material'
import { useTranslation } from 'react-i18next'
import ParticleBackground from '../components/ParticleBackground'

export default function Hero() {
  const { t } = useTranslation()

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
        <Typography variant="h2" sx={{ fontWeight: 600, mb: 3 }}>
          {t('hero.title')}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic', fontWeight: 300, lineHeight: 1.6, mb: 1 }}>
          &ldquo;{t('hero.tagline')}&rdquo;
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 300 }}>
          &mdash; {t('hero.author')}
        </Typography>
      </Container>
    </Box>
  )
}
