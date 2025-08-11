import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'Fernando Parada Zelada, Ph.D.',
  description: 'Psicólogo Clínico y Doctor en Psicoterapia.',
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: 'es' | 'en' }
}) {
  const { locale } = params
  return (
    <>
      <Header locale={locale} />
      <main className="mt-10">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer locale={locale} />
    </>
  )
}
