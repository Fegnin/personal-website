import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  title: 'Fernando Parada Zelada, Ph.D.',
  description: 'Psicólogo Clínico y Doctor en Psicoterapia.',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: 'Fernando Parada Z., Ph.D.',
    description: 'Psicoterapia basada en evidencia, docencia y tecnología para la salud mental.',
    url: SITE_URL,
    siteName: 'Fernando Parada',
    images: [{ url: '/og', width: 1200, height: 630 }],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fernando Parada Z., Ph.D.',
    description: 'Psicoterapia basada en evidencia, docencia y tecnología para la salud mental.',
    images: ['/og'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
