"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseOpacity: number
  opacity: number
  color: string
  pulse: number
  pulseSpeed: number
}

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animId: number
    const mouse = { x: -9999, y: -9999 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const handleResize = () => resize()
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    const COLORS = ["#00f5ff", "#00f5ff", "#00f5ff", "#a855f7", "#e879f9", "#ffffff"]
    const COUNT = 110
    const MAX_DIST = 140
    const MOUSE_REPEL = 100

    const particles: Particle[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.5 + 0.3,
      baseOpacity: Math.random() * 0.5 + 0.1,
      opacity: Math.random() * 0.5 + 0.1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.018 + Math.random() * 0.022,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const time = Date.now() * 0.00008

      // Nebula blob 1 — cyan
      const g1 = ctx.createRadialGradient(
        canvas.width * 0.72 + Math.sin(time) * 60,
        canvas.height * 0.28 + Math.cos(time * 0.7) * 50,
        0,
        canvas.width * 0.72,
        canvas.height * 0.28,
        canvas.width * 0.42
      )
      g1.addColorStop(0, "rgba(0,245,255,0.045)")
      g1.addColorStop(1, "transparent")
      ctx.fillStyle = g1
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Nebula blob 2 — purple
      const g2 = ctx.createRadialGradient(
        canvas.width * 0.22 + Math.cos(time * 0.9) * 55,
        canvas.height * 0.72 + Math.sin(time * 0.6) * 55,
        0,
        canvas.width * 0.22,
        canvas.height * 0.72,
        canvas.width * 0.38
      )
      g2.addColorStop(0, "rgba(168,85,247,0.04)")
      g2.addColorStop(1, "transparent")
      ctx.fillStyle = g2
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update & draw particles
      for (const p of particles) {
        p.pulse += p.pulseSpeed
        p.opacity = p.baseOpacity + Math.sin(p.pulse) * 0.18

        p.x += p.vx
        p.y += p.vy

        if (p.x < -5) p.x = canvas.width + 5
        if (p.x > canvas.width + 5) p.x = -5
        if (p.y < -5) p.y = canvas.height + 5
        if (p.y > canvas.height + 5) p.y = -5

        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_REPEL && dist > 0) {
          const force = (MOUSE_REPEL - dist) / MOUSE_REPEL
          p.x += (dx / dist) * force * 1.8
          p.y += (dy / dist) * force * 1.8
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = Math.max(0, Math.min(1, p.opacity))
        ctx.fill()
      }

      ctx.globalAlpha = 1

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const ddx = a.x - b.x
          const ddy = a.y - b.y
          const d = Math.sqrt(ddx * ddx + ddy * ddy)
          if (d < MAX_DIST) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(0,245,255,${(1 - d / MAX_DIST) * 0.11})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: 0.65 }}
    />
  )
}
