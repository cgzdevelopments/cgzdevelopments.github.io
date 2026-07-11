import { useEffect, useRef } from 'react'
import { Box, useTheme } from '@mui/material'
import { motion } from 'framer-motion'

interface ParticleTextProps {
  text?: string
  textSize?: number
  particleSize?: number
  particleColor?: string
  textColor?: string
  splitAt?: number
}

export default function ParticleText({ text = 'PARTICLES', textSize = 56, particleSize, particleColor: pc, textColor: tc, splitAt }: ParticleTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const theme = useTheme()
  const particleColor = pc ?? (theme.palette.mode === 'dark' ? '#888' : '#999')
  const textColor = tc ?? (theme.palette.mode === 'dark' ? '#fff' : '#000')
  const dotSize = particleSize ?? Math.max(1, Math.round(textSize / 40))
  const orbitScale = textSize / 56

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const particles: HTMLDivElement[] = []

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div')
      particle.style.position = 'absolute'
      particle.style.width = `${dotSize}px`
      particle.style.height = `${dotSize}px`
      particle.style.borderRadius = '50%'
      particle.style.backgroundColor = particleColor
      particle.style.pointerEvents = 'none'
      particle.style.opacity = Math.random().toString()

      const x = Math.random() * container.offsetWidth
      const y = Math.random() * container.offsetHeight
      particle.style.left = `${x}px`
      particle.style.top = `${y}px`

      container.appendChild(particle)
      particles.push(particle)
    }

    let rafId: number

    const animateParticles = () => {
      particles.forEach((particle, index) => {
        const time = Date.now() * 0.001 + index
        const x = (Math.sin(time * 0.5) * 20 + Math.cos(time * 0.3) * 30) * orbitScale
        const y = (Math.cos(time * 0.4) * 15 + Math.sin(time * 0.6) * 25) * orbitScale

        particle.style.transform = `translate(${x}px, ${y}px)`
        particle.style.opacity = (Math.sin(time * 2) * 0.5 + 0.5).toString()
      })

      rafId = requestAnimationFrame(animateParticles)
    }

    animateParticles()

    return () => {
      cancelAnimationFrame(rafId)
      particles.forEach((particle) => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      })
    }
  }, [particleColor, dotSize, orbitScale])

  return (
    <Box
      ref={containerRef}
        sx={{
          position: 'relative',
          display: 'inline-block',
          overflow: 'hidden',
          fontWeight: 'bold',
          fontSize: {
            xs: '3rem',
            sm: '3rem',
            md: `${textSize}px`,
          },
        }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
          style={{
            position: 'relative',
            zIndex: 10,
            color: textColor,
            textShadow: `0 0 20px ${particleColor}40`,
            filter: `drop-shadow(0 0 10px ${particleColor}60)`,
          }}
      >
        {splitAt != null ? (
          <Box
            component="span"
            sx={{
              display: 'inline',
              '& > span': {
                display: { xs: 'block', sm: 'inline' },
              },
            }}
          >
            <Box component="span">{text.slice(0, splitAt)}</Box>
            <Box component="span">{text.slice(splitAt)}</Box>
          </Box>
        ) : (
          text
        )}
      </motion.div>
    </Box>
  )
}
