import { useRef, useEffect, useCallback } from 'react'
import { Box, useTheme } from '@mui/material'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

const PARTICLE_COUNT = 70
// const CONNECTION_DIST = 120
const MOUSE_RADIUS = 150
const REPULSION = 3

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const particlesRef = useRef<Particle[]>([])
  const rafRef = useRef(0)
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'

  const color = isDark ? 'rgba(255,255,255,' : 'rgba(0,0,0,'

  const initParticles = useCallback((w: number, h: number) => {
    const p: Particle[] = []
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      p.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.5 + 1,
      })
    }
    particlesRef.current = p
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0
    let h = 0

    const resize = () => {
      const parent = canvas.parentElement!
      w = parent.offsetWidth
      h = parent.offsetHeight
      canvas.width = w * devicePixelRatio
      canvas.height = h * devicePixelRatio
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx!.scale(devicePixelRatio, devicePixelRatio)
      initParticles(w, h)
    }

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    resize()
    window.addEventListener('resize', resize)
    canvas.addEventListener('mousemove', onMouse)
    canvas.addEventListener('mouseleave', onLeave)

    const loop = () => {
      ctx!.clearRect(0, 0, w, h)
      const particles = particlesRef.current
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      for (const p of particles) {
        const dx = p.x - mx
        const dy = p.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS
          p.vx += (dx / dist) * force * REPULSION * 0.05
          p.vy += (dy / dist) * force * REPULSION * 0.05
        }

        p.vx *= 0.98
        p.vy *= 0.98
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0
      }

      // connections commented out — kept for reference
      // for (let i = 0; i < particles.length; i++) {
      //   for (let j = i + 1; j < particles.length; j++) {
      //     const a = particles[i]
      //     const b = particles[j]
      //     const dx = a.x - b.x
      //     const dy = a.y - b.y
      //     const dist = Math.sqrt(dx * dx + dy * dy)
      //     if (dist < CONNECTION_DIST) {
      //       const alpha = (1 - dist / CONNECTION_DIST) * 0.4
      //       ctx!.beginPath()
      //       ctx!.moveTo(a.x, a.y)
      //       ctx!.lineTo(b.x, b.y)
      //       ctx!.strokeStyle = color + alpha + ')'
      //       ctx!.lineWidth = 0.6
      //       ctx!.stroke()
      //     }
      //   }
      // }

      for (const p of particles) {
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx!.fillStyle = color + '0.5)'
        ctx!.fill()
      }

      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMouse)
      canvas.removeEventListener('mouseleave', onLeave)
    }
  }, [color, initParticles])

  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      <canvas ref={canvasRef} style={{ display: 'block', cursor: 'default' }} />
    </Box>
  )
}
