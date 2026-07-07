import { Box, Typography, Container, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SiVuedotjs, SiReact, SiLaravel, SiFlutter, SiMysql, SiPostgresql } from 'react-icons/si'

const skills = [
  { name: 'VueJS', icon: SiVuedotjs },
  { name: 'React', icon: SiReact },
  { name: 'Laravel', icon: SiLaravel },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'MySQL', icon: SiMysql },
  { name: 'PostgreSQL', icon: SiPostgresql },
]

export default function About() {
  const { t } = useTranslation()

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>
          {t('about.title')}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
          {t('about.body')}
        </Typography>
        <Stack direction="row" useFlexGap spacing={3} sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
          {skills.map(({ name, icon: Icon }) => (
            <Box
              key={name}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              <Icon size={32} />
              <Typography variant="caption" color="text.secondary">
                {name}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
