import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Massimo Dassano — Web Creator & Web Interior Designer, Milano'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#030610',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: '60px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(0,245,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* Cyan glow */}
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,245,255,0.08) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)',
        }} />

        {/* Top accent line */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, transparent, #00f5ff, rgba(168,85,247,0.8), transparent)',
        }} />

        {/* Corner brackets */}
        <div style={{ position: 'absolute', top: 30, left: 30, width: 28, height: 28, borderTop: '2px solid rgba(0,245,255,0.6)', borderLeft: '2px solid rgba(0,245,255,0.6)' }} />
        <div style={{ position: 'absolute', top: 30, right: 30, width: 28, height: 28, borderTop: '2px solid rgba(0,245,255,0.6)', borderRight: '2px solid rgba(0,245,255,0.6)' }} />
        <div style={{ position: 'absolute', bottom: 30, left: 30, width: 28, height: 28, borderBottom: '2px solid rgba(0,245,255,0.6)', borderLeft: '2px solid rgba(0,245,255,0.6)' }} />
        <div style={{ position: 'absolute', bottom: 30, right: 30, width: 28, height: 28, borderBottom: '2px solid rgba(0,245,255,0.6)', borderRight: '2px solid rgba(0,245,255,0.6)' }} />

        {/* Tag */}
        <div style={{
          color: '#00f5ff',
          fontSize: 15,
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          marginBottom: 24,
          padding: '6px 16px',
          border: '1px solid rgba(0,245,255,0.3)',
          background: 'rgba(0,245,255,0.07)',
        }}>
          WEB CREATOR · MILANO
        </div>

        {/* Name */}
        <div style={{
          color: '#ffffff',
          fontSize: 76,
          fontWeight: 'bold',
          marginBottom: 20,
          letterSpacing: '-0.02em',
          textShadow: '0 0 60px rgba(0,245,255,0.3)',
        }}>
          Massimo Dassano
        </div>

        {/* Subtitle */}
        <div style={{
          color: '#00f5ff',
          fontSize: 26,
          marginBottom: 32,
          letterSpacing: '0.02em',
        }}>
          Web Interior Designer
        </div>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
          <div style={{ width: 80, height: 1, background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.5))' }} />
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00f5ff', boxShadow: '0 0 10px rgba(0,245,255,0.9)' }} />
          <div style={{ width: 80, height: 1, background: 'linear-gradient(90deg, rgba(0,245,255,0.5), transparent)' }} />
        </div>

        {/* Services */}
        <div style={{
          display: 'flex',
          gap: 24,
          color: 'rgba(155,180,215,0.8)',
          fontSize: 18,
        }}>
          <span style={{ padding: '8px 20px', border: '1px solid rgba(0,245,255,0.18)', background: 'rgba(0,245,255,0.05)' }}>
            Restyling siti esistenti
          </span>
          <span style={{ padding: '8px 20px', border: '1px solid rgba(168,85,247,0.18)', background: 'rgba(168,85,247,0.05)' }}>
            Siti web ex novo
          </span>
          <span style={{ padding: '8px 20px', border: '1px solid rgba(0,245,255,0.12)', background: 'rgba(0,245,255,0.03)' }}>
            Siti completi
          </span>
        </div>

        {/* URL */}
        <div style={{
          position: 'absolute',
          bottom: 40,
          right: 50,
          color: 'rgba(0,245,255,0.4)',
          fontSize: 16,
          letterSpacing: '0.1em',
        }}>
          massimodassano.it
        </div>
      </div>
    ),
    { ...size }
  )
}
