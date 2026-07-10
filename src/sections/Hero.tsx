import { Box, Container } from '@mui/material'
import { useTranslation } from 'react-i18next'
import ParticleBackground from '../components/ParticleBackground'
import ParticleText from '../components/ParticleText'
import TypewriterText from '../components/TypewriterText'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <Box
      id="home"
      sx={{
        minHeight: '50svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <ParticleBackground />
      <Container maxWidth="sm" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <Box sx={{ mb: 3, '& > div': { display: 'block !important' } }}>
          <ParticleText
            text={t('hero.title')}
            textSize={64}
            particleSize={4}
          />
        </Box>
        <TypewriterText
          text={`\u201C${t('hero.tagline')}\u201D \u2014 ${t('hero.author')}`}
          speed={80}
          deleteSpeed={40}
          pauseDuration={3000}
          loop={false}
        />
      </Container>
    </Box>
  )
}
