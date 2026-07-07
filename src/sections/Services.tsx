import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material'
import { useTranslation } from 'react-i18next'
import WebIcon from '@mui/icons-material/Web'
import SmartphoneIcon from '@mui/icons-material/Smartphone'
import CodeIcon from '@mui/icons-material/Code'
import BugReportIcon from '@mui/icons-material/BugReport'

const services = [
  {
    titleKey: 'services.web_title',
    descKey: 'services.web_desc',
    icon: WebIcon,
  },
  {
    titleKey: 'services.mobile_title',
    descKey: 'services.mobile_desc',
    icon: SmartphoneIcon,
  },
  {
    titleKey: 'services.app_title',
    descKey: 'services.app_desc',
    icon: CodeIcon,
  },
  {
    titleKey: 'services.testing_title',
    descKey: 'services.testing_desc',
    icon: BugReportIcon,
  },
]

export default function Services() {
  const { t } = useTranslation()

  return (
    <Box
      id="services"
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
          {t('services.title')}
        </Typography>
        <Grid container spacing={3}>
          {services.map(({ titleKey, descKey, icon: Icon }) => (
            <Grid size={{ xs: 12, sm: 6 }} key={titleKey}>
              <Card sx={{ height: '100%' }} variant="outlined">
                <CardContent sx={{ textAlign: 'center', py: 4 }}>
                  <Icon sx={{ fontSize: 48, mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {t(titleKey)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t(descKey)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
