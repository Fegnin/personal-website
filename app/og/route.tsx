import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: 'linear-gradient(135deg, #6BA292 0%, #E5C687 100%)',
          padding: 60,
          color: '#1f2937',
          fontFamily:
            'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 760 }}>
          <div style={{ fontSize: 60, fontWeight: 800, color: '#0f172a' }}>
            Fernando Parada Z., Ph.D.
          </div>
          <div style={{ fontSize: 34 }}>
            Psicólogo Clínico y Doctor en Psicoterapia
          </div>
          <div style={{ marginTop: 10, fontSize: 26 }}>
            Psicoterapia basada en evidencia · ACT · Tecnología en salud mental
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 } // tamaño aquí, no como export
  )
}
