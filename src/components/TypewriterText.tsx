import { useState, useEffect } from 'react'
import { Box, useTheme } from '@mui/material'
import { motion } from 'framer-motion'

interface TypewriterTextProps {
  text?: string
  speed?: number
  deleteSpeed?: number
  pauseDuration?: number
  loop?: boolean
  showCursor?: boolean
}

export default function TypewriterText({
  text = 'Building the future, one line at a time...',
  speed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
  loop = true,
  showCursor = true,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false)
        if (loop) setIsDeleting(true)
      }, pauseDuration)
    } else if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(text.substring(0, displayText.length - 1))
        }, deleteSpeed)
      } else {
        timeout = setTimeout(() => setIsDeleting(false), 0)
      }
    } else {
      if (displayText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayText(text.substring(0, displayText.length + 1))
        }, speed)
      } else if (loop) {
        timeout = setTimeout(() => setIsPaused(true), 0)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, isPaused, text, speed, deleteSpeed, pauseDuration, loop])

  return (
    <Box sx={{ fontFamily: '"Fira Code", "Cascadia Code", "JetBrains Mono", monospace' }}>
      <Box
        component="span"
        sx={{
          fontStyle: 'italic',
          fontWeight: 300,
          lineHeight: 1.6,
          color: 'text.secondary',
        }}
      >
        {displayText}
        {showCursor && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
            style={{ color: theme.palette.text.secondary }}
          >
            |
          </motion.span>
        )}
      </Box>
    </Box>
  )
}
