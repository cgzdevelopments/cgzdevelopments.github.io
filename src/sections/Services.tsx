import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material'
import WebIcon from '@mui/icons-material/Web'
import SmartphoneIcon from '@mui/icons-material/Smartphone'
import CodeIcon from '@mui/icons-material/Code'
import BugReportIcon from '@mui/icons-material/BugReport'

const services = [
  {
    title: 'Web Development',
    description: 'Full-stack web applications using React, VueJS, and Laravel with responsive, modern UIs.',
    icon: WebIcon,
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps built with Flutter for iOS and Android from a single codebase.',
    icon: SmartphoneIcon,
  },
  {
    title: 'Application Development',
    description: 'End-to-end custom software development tailored to your business needs and workflows.',
    icon: CodeIcon,
  },
  {
    title: 'Software Testing',
    description: 'Comprehensive testing strategies to ensure quality, reliability, and performance.',
    icon: BugReportIcon,
  },
]

export default function Services() {
  return (
    <Box
      id="services"
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
          Services
        </Typography>
        <Grid container spacing={3}>
          {services.map(({ title, description, icon: Icon }) => (
            <Grid size={{ xs: 12, sm: 6 }} key={title}>
              <Card sx={{ height: '100%' }} variant="outlined">
                <CardContent sx={{ textAlign: 'center', py: 4 }}>
                  <Icon sx={{ fontSize: 48, mb: 2, color: 'primary.main' }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
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
