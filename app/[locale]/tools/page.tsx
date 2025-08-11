import Container from '@/components/Container'

export default function Tools({ params }: { params: { locale: 'es' | 'en' } }) {
  const isES = params.locale === 'es'
  const t = isES
    ? {
        title: 'Herramientas',
        intro: 'Aquí irán las apps y recursos que estamos construyendo. Muy pronto tendrás aquí los enlaces para usarlas.',
        coming: 'Próximamente',
      }
    : {
        title: 'Tools',
        intro: 'Apps and resources we’re building will live here. Links coming soon.',
        coming: 'Coming soon',
      }

  const cards = [
    { title: isES ? 'ACTivate — Entrenamiento en flexibilidad psicológica' : 'ACTivate — Psychological flexibility training', desc: t.coming },
    { title: isES ? 'Medición EMA — Síntomas y expectativas' : 'EMA Tracker — Symptoms & expectations', desc: t.coming },
    { title: isES ? 'Guías y ejercicios — Mindfulness/ACT' : 'Guides & exercises — Mindfulness/ACT', desc: t.coming },
  ]

  return (
    <Container>
      <div className="mb-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight
                       bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-sm">
          {t.title}
        </h1>
        <div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent" aria-hidden />
      </div>

      <p className="text-lg opacity-90">{t.intro}</p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {cards.map((c, i) => (
          <div key={i} className="rounded-2xl border bg-white/70 p-5 shadow-sm">
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-sm opacity-75 mt-1">{c.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}
