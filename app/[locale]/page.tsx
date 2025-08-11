import { getDictionary } from '@/dictionaries/getDictionary'
import Image from 'next/image'

export default async function Home({ params }: { params: { locale: 'es' | 'en' } }) {
  const dict = await getDictionary(params.locale)
  const isES = params.locale === 'es'

  const es = {
    title: 'Empieza tu camino a una vida valiosa.',
    p1: 'Mi nombre es Fernando, soy psicólogo clínico y doctor en Psicoterapia de la U. de Chile. Soy especialista en Terapia de Aceptación y Compromiso, Mindfulness e intervenciones digitales en Salud Mental. En este sitio encontrarás mi agenda para tomar horas de psicoterapia, así como más información sobre mí y —próximamente— otras herramientas útiles para tu proceso de cambio terapéutico.',
    p2: '¡Bienvenid@ y espero podamos conocernos pronto!',
  }

  const en = {
    title: 'Start your path towards a valued life.',
    p1: 'My name is Fernando. I am a clinical psychologist and hold a Ph.D. in Psychotherapy from Universidad de Chile. I specialize in Acceptance and Commitment Therapy, Mindfulness, and digital mental-health interventions. Here you’ll find my scheduling page for therapy sessions, more about me, and —soon— tools to support your therapeutic change.',
    p2: 'Welcome—hope we can meet soon!',
  }

  const t = isES ? es : en

  return (
    <section className="relative w-full h-[62vh] md:h-[75vh] min-h-[520px] overflow-hidden">
      <Image src="/images/home-hero.png" alt="" fill priority className="object-cover" style={{ objectPosition: 'center 45%' }} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0">
        <div className="max-w-5xl mx-auto h-full px-4 flex items-center justify-center">
          <div className="max-w-3xl text-white text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold animate-fadeUp">{t.title}</h1>
            <p className="mt-5 text-lg md:text-xl leading-relaxed animate-fadeUp delay-150">{t.p1}</p>
            <p className="mt-4 text-lg md:text-xl leading-relaxed animate-fadeUp delay-300">{t.p2}</p>
            <div className="pt-4 animate-fadeIn delay-500 flex justify-center">
              <a
                href="https://encuadrado.com/p/dr-fernando-parada-zelada"
                target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 md:px-9 py-4 md:py-5 rounded-3xl bg-primary text-white text-lg md:text-xl font-semibold shadow-lg hover:shadow-xl transition-transform duration-200 hover:scale-[1.04]"
              >
                {dict.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

