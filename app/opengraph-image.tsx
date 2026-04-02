import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Massimo Dassano – Senior Sales & Business Development Manager'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#09090b',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: '60px',
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #a855f7, #7c3aed)',
          }}
        />

        {/* Label */}
        <div
          style={{
            color: '#a855f7',
            fontSize: 18,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: 28,
          }}
        >
          Senior Manager
        </div>

        {/* Name */}
        <div
          style={{
            color: '#ffffff',
            fontSize: 72,
            fontWeight: 'bold',
            marginBottom: 24,
            letterSpacing: '-0.02em',
          }}
        >
          Massimo Dassano
        </div>

        {/* Description */}
        <div
          style={{
            color: '#a1a1aa',
            fontSize: 24,
            textAlign: 'center',
            maxWidth: 860,
            lineHeight: 1.5,
            marginBottom: 48,
          }}
        >
          15+ years of international experience in B2B sales planning,
          strategic partnerships &amp; business development
        </div>

        {/* Location + URL */}
        <div
          style={{
            display: 'flex',
            gap: '32px',
            color: '#71717a',
            fontSize: 18,
          }}
        >
          <span>📍 Milan, Italy</span>
          <span>massimodassano.it</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
