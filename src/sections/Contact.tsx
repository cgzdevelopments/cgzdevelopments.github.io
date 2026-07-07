import { Box, Typography, Container, Stack, Link } from '@mui/material'
import { useTranslation } from 'react-i18next'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
          {t('contact.title')}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          {t('contact.body')}
        </Typography>
        <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
          <Link
            href="https://github.com/cgzdevelopments"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            sx={{ '&:hover': { color: 'primary.main' } }}
          >
            <GitHubIcon sx={{ fontSize: 40 }} />
          </Link>
          <Link
            href="https://linkedin.com/in/cesar-augusto-garcia-zurita"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            sx={{ '&:hover': { color: 'primary.main' } }}
          >
            <LinkedInIcon sx={{ fontSize: 40 }} />
          </Link>
        </Stack>
      </Container>
    </Box>
  )
}
