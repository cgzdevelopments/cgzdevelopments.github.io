import { IconButton, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export default function LangToggle() {
  const { i18n } = useTranslation()
  const lang = i18n.language.startsWith('en') ? 'en' : 'es'

  const toggle = () => {
    i18n.changeLanguage(lang === 'en' ? 'es' : 'en')
  }

  const label = lang === 'en' ? 'EN' : 'ES'
  const ariaLabel = lang === 'en' ? 'Switch to Spanish' : 'Switch to English'

  return (
    <IconButton onClick={toggle} color="inherit" aria-label={ariaLabel} size="small" sx={{ fontWeight: 700, mr: -0.5 }}>
      <Typography variant="caption" sx={{ fontWeight: 700, lineHeight: 1 }}>
        {label}
      </Typography>
    </IconButton>
  )
}
