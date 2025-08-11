import Container from '@/components/Container'
import Image from 'next/image'

export default function About({ params }: { params: { locale: 'es' | 'en' } }) {
  const isES = params.locale === 'es'

  const links = {
    uai: 'https://www.uai.cl/postgrados/magisteres/magister-mindfulness-relacional-compasion',
    ikastola: 'https://www.institutoikastola.com/pages/equipo-docente',
  }

  const es = {
    h1: 'Sobre mí',
    p1: 'Fernando Parada Zelada, Ph.D. — Psicólogo clínico titulado de la Universidad Central de Chile (2012). Trabajé 8 años en salud mental pública, con experiencia en niveles de atención Primario y Secundario, realizando psicoterapia individual, talleres y actividades grupales.',
    p3: 'En 2018 inicié mi Doctorado en la Universidad de Chile, investigando aplicaciones de tecnología en Salud Mental. En mi tesis diseñé un sistema para ayudar a terapeutas a fortalecer la alianza terapéutica con sus consultantes. En 2022 finalicé el doctorado e ingresé como investigador de Experiencia de Usuario a Microsoft (Xbox).',
    p4: 'Actualmente me dedico a la psicoterapia con adultos, espacio en el que utilizo la Terapia de Aceptación y Compromiso para ayudar a las personas a encontrar sus direcciones valiosas y propósito para así avanzar hacia una vida más valiosa y cargada de sentido. Además, mantengo mi labor de docencia en la Universidad Adolfo Ibáñez y el Instituto Ikastola, así como realizo proyectos de consultoría en Experiencia de Usuario y diseño de productos digitales. Finalmente, tengo un espacio de difusión de contenido psicoterapéutico basado en evidencia en Instagram, donde ya somos más de 8000 personas! En TikTok también comparto contenido y mi cuenta tiene alrededor de 7700 seguidores.',
    p5: 'Además de lo anterior, me encanta tocar guitarra (🎸), jugar videojuegos (🎮), aprender cosas nuevas y pasar tiempo con mi esposa y nuestros dos perritos, Manolo y Frida (🐶🐶).',
    altSuit: 'Fernando Parada con traje y corbata',
    altACT: 'Grupo de formación en ACT (Madrid, 2014)',
  }

  const en = {
    h1: 'About me',
    p1: 'Fernando Parada Zelada, Ph.D. — Clinical psychologist graduated from Universidad Central de Chile (2012). I worked eight years in public mental health across primary and secondary care, doing individual psychotherapy, workshops, and group programs.',
    p3: 'In 2018, I began my PhD at Universidad de Chile, researching technology applications in mental health. In my dissertation, I designed a system to help therapists strengthen the therapeutic alliance with their clients. In 2022, I completed my PhD and joined Microsoft as a User Experience Researcher in the Xbox division.',
    p4: 'Today, I focus on psychotherapy with adults, where I use Acceptance and Commitment Therapy to help people clarify their values and purpose so they can move toward a more meaningful, purpose-driven life. I also continue teaching at Universidad Adolfo Ibáñez and Instituto Ikastola, and I work on consulting projects in User Experience and digital product design. Finally, I run an evidence-based psychotherapy channel on Instagram (8,000+ people) and share content on TikTok (~7,700).',
    p5: 'Besides the above, I love playing guitar (🎸), playing video games (🎮), learning new things, and spending time with my wife and our two dogs, Manolo and Frida (🐶🐶).',
    altSuit: 'Fernando Parada wearing a suit',
    altACT: 'ACT training group (Madrid, 2014)',
  }

  const t = isES ? es : en

  return (
    <Container>
      {/* Título destacado */}
      <div className="max-w-none mb-4">
        <h1
          className="
            text-4xl md:text-5xl lg:text-6xl
            font-extrabold leading-tight
            bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent
            drop-shadow-sm
          "
        >
          {t.h1}
        </h1>
        <div
          className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent"
          aria-hidden
        />
      </div>

      {/* Sección 1: Foto izquierda (recortada) + Párrafos 1–3 a la derecha */}
      <section className="mt-6 grid gap-5 md:gap-6 md:grid-cols-[auto,1fr] items-start">
        <div className="order-1 md:justify-self-start">
          <Image
            src="/images/about-suit.jpg"
            alt={t.altSuit}
            width={320}
            height={480}
            priority
            sizes="(min-width:1024px) 280px, (min-width:768px) 250px, 210px"
            className="rounded-2xl border w-[210px] md:w-[250px] lg:w-[280px] h-[300px] md:h-[340px] lg:h-[380px] object-cover"
            style={{ objectPosition: 'center 25%' }} // menos aire sobre la cabeza
          />
        </div>
        <div className="order-2 prose max-w-none space-y-4">
          <p>{t.p1}</p>

          {/* Formación ACT con enlaces */}
          {isES ? (
            <p>
              En 2014 me especialicé en Terapia de Aceptación y Compromiso (ACT) en el Instituto ACT de
              Madrid, España. Desde entonces me dedico a la docencia de pre y post-grado, enseñando ACT y
              sus fundamentos teóricos. Actualmente soy docente del Máster de Mindfulness Relacional de la{' '}
              <a href={links.uai} target="_blank" rel="noopener noreferrer">Universidad Adolfo Ibáñez</a>{' '}
              (cátedra de ACT y Teoría de los Marcos Relacionales – RFT) y del diplomado en ACT del{' '}
              <a href={links.ikastola} target="_blank" rel="noopener noreferrer">Instituto Ikastola</a>{' '}
              (Santiago de Chile).
            </p>
          ) : (
            <p>
              In 2014, I specialized in Acceptance and Commitment Therapy (ACT) at the ACT Institute in
              Madrid, Spain. Since then I have taught undergraduate and graduate courses on ACT and its
              theoretical foundations. I currently teach in the Relational Mindfulness Master’s program at{' '}
              <a href={links.uai} target="_blank" rel="noopener noreferrer">Universidad Adolfo Ibáñez</a>{' '}
              (course on ACT and Relational Frame Theory – RFT) and in the ACT diploma at{' '}
              <a href={links.ikastola} target="_blank" rel="noopener noreferrer">Instituto Ikastola</a>{' '}
              (Santiago, Chile).
            </p>
          )}

          <p>{t.p3}</p>
        </div>
      </section>

      {/* Sección 2: Párrafo 4 + Párrafo de hobbies a la izquierda; Foto ACT a la derecha */}
      <section className="mt-8 grid gap-5 md:gap-6 md:grid-cols-[1fr,auto] items-start">
        <div className="prose max-w-none space-y-4">
          <p>{t.p4}</p>
          <p>{t.p5}</p>
        </div>
        <div className="justify-self-end">
          <Image
            src="/images/about-act-group.png"
            alt={t.altACT}
            width={420}
            height={320}
            sizes="(min-width:1024px) 340px, (min-width:768px) 300px, 250px"
            className="rounded-2xl border w-[250px] md:w-[300px] lg:w-[340px] h-[260px] md:h-[300px] lg:h-[340px] object-cover"
            style={{ objectPosition: 'center 40%' }} // recorte visual para equilibrar altura
          />
        </div>
      </section>
    </Container>
  )
}


