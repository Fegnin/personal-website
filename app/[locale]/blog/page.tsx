import Container from '@/components/Container'
import InstagramGrid from '@/components/InstagramGrid'

export default async function Blog({ params }: { params: { locale: 'es' | 'en' } }) {
  const isES = params.locale === 'es'
  const t = isES
    ? {
        title: 'Blog',
        intro:
          'Aquí iré publicando artículos breves sobre psicoterapia, ACT, mindfulness y tecnología aplicada a la salud mental.',
      }
    : {
        title: 'Blog',
        intro:
          'Here I’ll post short articles on psychotherapy, ACT, mindfulness, and digital mental-health tools.',
      }

  return (
    <Container>
      {/* Título destacado */}
      <div className="mb-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight
                       bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-sm">
          {t.title}
        </h1>
        <div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent" aria-hidden />
      </div>

      <p className="text-lg opacity-90">{t.intro}</p>

      {/* Aquí vendrían tus posts propios (MDX/Markdown) si quieres.
          Abajo, la sección con Instagram */}
      <InstagramGrid locale={params.locale} />
    </Container>
  )
}
