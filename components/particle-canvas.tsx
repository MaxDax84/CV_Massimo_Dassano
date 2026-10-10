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

const MOBILE_MAX = 767

/**
 * Le due "nebulose" di sfondo si spostavano di ±60px con un periodo di circa due
 * minuti: percettivamente statiche, ma costavano due createRadialGradient e due
 * fillRect a schermo pieno per ogni frame. Ora sono due radial-gradient CSS.
 * Le alpha sono quelle originali moltiplicate per 0.65, l'opacity che il canvas
 * applicava a tutto il suo contenuto, così la resa è la stessa.
 */
const NEBULAE =
  "radial-gradient(circle 42vw at 72% 28%, rgba(0,245,255,0.0293) 0%, rgba(0,245,255,0) 100%)," +
  "radial-gradient(circle 38vw at 22% 72%, rgba(168,85,247,0.026) 0%, rgba(168,85,247,0) 100%)"

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isMobile = window.innerWidth <= MOBILE_MAX

    let animId = 0
    let running = false
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
    if (!reduceMotion) window.addEventListener("mousemove", handleMouseMove, { passive: true })

    const COLORS = ["#00f5ff", "#00f5ff", "#00f5ff", "#a855f7", "#e879f9", "#ffffff"]
    // Su mobile: metà particelle e niente linee di connessione (il doppio ciclo
    // su tutte le coppie è la voce più cara del frame).
    const COUNT = isMobile ? 55 : 110
    const DRAW_LINKS = !isMobile
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

    const render = (animate: boolean) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update & draw particles
      for (const p of particles) {
        if (animate) {
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
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = Math.max(0, Math.min(1, p.opacity))
        ctx.fill()
      }

      ctx.globalAlpha = 1

      // Draw connections
      if (DRAW_LINKS) {
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
      }
    }

    // ── prefers-reduced-motion: un solo fotogramma, nessun requestAnimationFrame.
    // Il campo stellato resta visibile, semplicemente non si muove.
    if (reduceMotion) {
      render(false)
      const redraw = () => { resize(); render(false) }
      window.addEventListener("resize", redraw)
      return () => {
        window.removeEventListener("resize", handleResize)
        window.removeEventListener("resize", redraw)
      }
    }

    const loop = () => {
      render(true)
      animId = requestAnimationFrame(loop)
    }

    const start = () => {
      if (running) return
      running = true
      animId = requestAnimationFrame(loop)
    }
    const stop = () => {
      if (!running) return
      running = false
      cancelAnimationFrame(animId)
    }

    // Il canvas è position:fixed, quindi in pratica non esce mai dal viewport:
    // l'observer è una rete di sicurezza se un domani smettesse di esserlo.
    // La sospensione che si attiva davvero è quella su visibilitychange.
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 }
    )
    io.observe(canvas)

    const onVisibility = () => {
      if (document.hidden) stop()
      else start()
    }
    document.addEventListener("visibilitychange", onVisibility)

    start()

    return () => {
      stop()
      io.disconnect()
      document.removeEventListener("visibilitychange", onVisibility)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ zIndex: 0, background: NEBULAE }}
      />
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 0, opacity: 0.65 }}
      />
    </>
  )
}
