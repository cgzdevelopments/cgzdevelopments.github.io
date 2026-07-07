import { Box, Typography, Container, Chip, Stack } from '@mui/material'

const skills = ['VueJS', 'React', 'Laravel', 'Flutter', 'MySQL', 'PostgreSQL']

export default function About() {
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
          About Me
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
          Software developer with over 10 years of experience building services, web applications,
          and mobile apps. I specialize in VueJS, React, Laravel, and Flutter, with strong database
          skills in MySQL and PostgreSQL. I'm constantly exploring new technologies and best
          practices, focused on delivering innovative solutions with high quality and security
          standards.
        </Typography>
        <Stack direction="row" useFlexGap spacing={1} sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
          {skills.map((skill) => (
            <Chip key={skill} label={skill} variant="outlined" />
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
