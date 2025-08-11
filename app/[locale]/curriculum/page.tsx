import Container from '@/components/Container'
import Link from 'next/link'

type Item = {
  title: string
  place?: string
  range?: string
  bullets?: string[]
}

export default function Curriculum({ params }: { params: { locale: 'es' | 'en' } }) {
  const isES = params.locale === 'es'

  // ======== DATA (desde tu CV) ========
  const education: Item[] = isES
    ? [
        { title: 'Psicología, mención Clínica — Universidad Central de Chile (Distinción Máxima)', range: '2007–2012' },
        { title: 'Doctorado en Psicoterapia — Universidad de Chile / Pontificia Universidad Católica de Chile', range: '2017–2022' },
        { title: 'Formación intensiva ACT Bootcamp — Reno, Nevada (EE. UU.)', range: '2013' },
        { title: 'Postítulo ACT — Instituto ACT de Madrid, España', range: '2014' },
        { title: 'Diploma en Diseño e Investigación UX — Pontificia Universidad Católica de Chile', range: '2018' },
      ]
    : [
        { title: 'Psychology (Clinical) — Universidad Central de Chile (Highest Distinction)', range: '2007–2012' },
        { title: 'Ph.D. in Psychotherapy — Universidad de Chile / Pontificia Universidad Católica de Chile', range: '2017–2022' },
        { title: 'ACT Bootcamp (intensive) — Reno, NV, USA', range: '2013' },
        { title: 'ACT postgraduate training — ACT Institute, Madrid, Spain', range: '2014' },
        { title: 'Diploma in UX Research & Design — Pontificia Universidad Católica de Chile', range: '2018' },
      ]

  const experience: Item[] = isES
    ? [
        {
          title: 'User Researcher II — Xbox, Microsoft',
          range: 'Ago 2022 – Actualidad',
          bullets: ['Investigación de experiencia de usuario y tecnologías aplicadas a salud mental.'],
        },
        {
          title: 'UX Researcher — Get on Board',
          range: 'Feb 2022 – Ago 2022',
        },
        {
          title: 'UX Researcher — MHIRA (Mental Health Information Reporting Assistant)',
          range: 'Jul 2019 – Ene 2022',
        },
        {
          title: 'Consultor — “Radiografía de Salud Mental” (Banco Santander–MideUC–MIDAP)',
          range: 'Dic 2020 – Dic 2021',
        },
        {
          title: 'Investigador Estudiante — Instituto Milenio MIDAP',
          range: 'Jul 2019 – Actualidad',
        },
        {
          title: 'Psicólogo Clínico GES — Medicien / Isapre Colmena',
          range: 'Jun 2017 – Nov 2019',
        },
        {
          title: 'Ayudante de Investigación — Facultad de Medicina, Universidad de Chile (FONDECYT 1161696)',
          range: 'May 2017 – Mar 2019',
        },
        { title: 'Psicólogo Clínico — Hospital de Día, CRS Cordillera Oriente (Peñalolén)', range: 'Mar 2016 – Abr 2017' },
        { title: 'Psicólogo Clínico — Hospital de Día, Hospital El Carmen (Maipú)', range: 'Mar 2015 – Mar 2016' },
        { title: 'Director Área Psicología — Fundación Oncoloop', range: 'May 2014 – Mar 2016' },
        {
          title: 'Unidad de Hospitalización Diurna — Complejo Asistencial Barros Luco Trudeau',
          range: 'Jun 2013 – Feb 2015',
        },
        {
          title: 'CDT / Psiquiatría Adultos — Complejo Asistencial Barros Luco (clínico-comunitario)',
          range: 'Dic 2012 – Jul 2014',
        },
        { title: 'CESFAM Juan Pablo II (La Reina) — Psicólogo Comunitario', range: 'Mar – Jun 2013' },
        { title: 'CES Raúl Brañes Farmer (San Bernardo) — Psicólogo Clínico', range: 'Jun – Nov 2012' },
        { title: 'Consulta particular', range: 'Ene 2012 – Presente' },
      ]
    : [
        { title: 'User Researcher II — Xbox, Microsoft', range: 'Aug 2022 – Present' },
        { title: 'UX Researcher — Get on Board', range: 'Feb 2022 – Aug 2022' },
        { title: 'UX Researcher — MHIRA', range: 'Jul 2019 – Jan 2022' },
        { title: 'Consultant — “Radiografía de Salud Mental”', range: 'Dec 2020 – Dec 2021' },
        { title: 'Graduate Researcher — MIDAP', range: 'Jul 2019 – Present' },
        { title: 'Clinical Psychologist (GES) — Medicien / Colmena', range: 'Jun 2017 – Nov 2019' },
        { title: 'Research Assistant — School of Medicine, Universidad de Chile', range: 'May 2017 – Mar 2019' },
        { title: 'Clinical Psychologist — Day Hospital, CRS Cordillera Oriente', range: 'Mar 2016 – Apr 2017' },
        { title: 'Clinical Psychologist — Day Hospital, Hospital El Carmen', range: 'Mar 2015 – Mar 2016' },
        { title: 'Head of Psychology — Fundación Oncoloop', range: 'May 2014 – Mar 2016' },
        { title: 'Day Hospital — Barros Luco Trudeau', range: 'Jun 2013 – Feb 2015' },
        { title: 'CDT / Adult Psychiatry — Barros Luco Trudeau (community clinical)', range: 'Dec 2012 – Jul 2014' },
        { title: 'CESFAM Juan Pablo II (La Reina) — Community Psychologist', range: 'Mar – Jun 2013' },
        { title: 'CES Raúl Brañes Farmer (San Bernardo) — Clinical Psychologist', range: 'Jun – Nov 2012' },
        { title: 'Private practice', range: 'Jan 2012 – Present' },
      ]

  const teaching: Item[] = isES
    ? [
        { title: 'Magíster en Mindfulness Relacional — Universidad Adolfo Ibáñez (docente)', range: '2018 – Actualidad' },
        { title: 'Instituto Ikastola — Docente titular (ACT)', range: '2020 – Actualidad' },
        { title: 'CIPSYC — Docente titular', range: '2020 – 2022' },
        { title: 'Escuela de Psicología — Univ. Finis Terrae (cátedras)', range: '2020 – 2022' },
        { title: 'Escuela de Medicina — Univ. de Chile (Salud Mental Integral)', range: '2016 – 2017' },
      ]
    : [
        { title: 'Relational Mindfulness Master — Universidad Adolfo Ibáñez (faculty)', range: '2018 – Present' },
        { title: 'Instituto Ikastola — Lecturer (ACT)', range: '2020 – Present' },
        { title: 'CIPSYC — Lecturer', range: '2020 – 2022' },
        { title: 'School of Psychology — Universidad Finis Terrae (courses)', range: '2020 – 2022' },
        { title: 'School of Medicine — Universidad de Chile (Integrated Mental Health)', range: '2016 – 2017' },
      ]

  const publications = {
    articles: isES
      ? [
          'Hernández, C., Cottin, M., Parada, F., Labbé, N., Núñez, C., Quevedo, Y., Davanzo, A. & Behn, A. (2020). Watching the world from my screen… Computers in Human Behavior (en revisión).',
          'Parada, F., Martínez, V., Espinosa, D., Bauer, S., Moessner, M. (2019). Using Persuasive Systems Design (PSD) to evaluate “Cuida tu Ánimo”… Telemedicine and e-Health, 26(2). DOI: 10.1089/tmj.2018.0272.',
        ]
      : [
          'Hernández, C., Cottin, M., Parada, F., Labbé, N., Núñez, C., Quevedo, Y., Davanzo, A., & Behn, A. (2020). Watching the world from my screen… Computers in Human Behavior (under review).',
          'Parada, F., Martínez, V., Espinosa, D., Bauer, S., Moessner, M. (2019). Using Persuasive Systems Design (PSD) to evaluate “Cuida tu Ánimo”… Telemedicine and e-Health, 26(2). DOI: 10.1089/tmj.2018.0272.',
        ],
    chapters: isES
      ? [
          'Contexto histórico de las terapias de tercera generación. En “Terapias Contextuales: Fundamentos e Integración en Psicoterapia” (en redacción).',
          'E-mental health: qué es y por qué llegó para quedarse. En “Salud Mental en Tiempos de Crisis”, Ediciones UAH (Santiago, Chile).',
        ]
      : [
          'Historical context of third-wave therapies. In “Contextual Therapies: Foundations and Integration in Psychotherapy” (in preparation).',
          'E-mental health: what it is and why it’s here to stay. In “Mental Health in Times of Crisis”, UAH Press (Santiago, Chile).',
        ],
  }

  const conferences: Item[] = isES
    ? [
        { title: 'Panel “Internet Interventions: Developments and Challenges” — SPR Scientific Meeting, Ámsterdam', range: '2018' },
        { title: 'Poster — ISRII World Conference', range: '2017' },
        { title: 'Beca ACBS — World Conference 14 (Seattle). Expositor (poster).', range: '2016' },
        { title: 'Ciclo de charlas: Actualizaciones en Terapia Cognitiva y Análisis Funcional de la Conducta — U. Central', range: '2014' },
      ]
    : [
        { title: 'Panel “Internet Interventions: Developments and Challenges” — SPR Scientific Meeting, Amsterdam', range: '2018' },
        { title: 'Poster — ISRII World Conference', range: '2017' },
        { title: 'ACBS Developing Nations Fund — World Conference 14 (Seattle). Poster presenter.', range: '2016' },
        { title: 'Talk series: Updates in Cognitive Therapy & Functional Analysis — Universidad Central', range: '2014' },
      ]

  // ======== TEXTOS ========
  const t = isES
    ? {
        title: 'Currículum',
        education: 'Formación académica',
        experience: 'Experiencia',
        teaching: 'Docencia',
        publications: 'Publicaciones',
        articles: 'Artículos científicos',
        chapters: 'Capítulos',
        conferences: 'Congresos y otras actividades',
        download: 'Descargar CV (PDF)',
      }
    : {
        title: 'Curriculum',
        education: 'Education',
        experience: 'Experience',
        teaching: 'Teaching',
        publications: 'Publications',
        articles: 'Journal articles',
        chapters: 'Book chapters',
        conferences: 'Conferences & other activities',
        download: 'Download CV (PDF)',
      }

  // ======== UI ========
  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  )

  const Card = ({ item }: { item: Item }) => (
    <div className="rounded-2xl border bg-white/70 p-5 shadow-sm">
      <h3 className="font-semibold">{item.title}</h3>
      {item.range && <p className="text-sm opacity-75 mt-1">{item.range}</p>}
      {item.bullets && (
        <ul className="mt-2 list-disc pl-5 space-y-1">
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  )

  return (
    <Container>
      {/* Título */}
      <div className="mb-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight
                       bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-sm">
          {t.title}
        </h1>
        <div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent" aria-hidden />
      </div>

      {/* Botón descargar CV */}
      <div className="mb-4">
        <a
          href="/cv/fernando-parada.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-5 py-3 rounded-2xl
                     bg-primary text-white text-sm md:text-base font-semibold
                     shadow-md hover:shadow-lg transition-transform duration-200 hover:scale-[1.03]"
        >
          {t.download}
        </a>
      </div>

      {/* Formación */}
      <Section title={t.education}>
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((e, i) => <Card key={i} item={e} />)}
        </div>
      </Section>

      {/* Experiencia (timeline simple) */}
      <Section title={t.experience}>
        <ol className="relative border-s pl-6 space-y-6">
          {experience.map((e, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary" />
              <Card item={e} />
            </li>
          ))}
        </ol>
      </Section>

      {/* Docencia */}
      <Section title={t.teaching}>
        <div className="grid gap-4 md:grid-cols-2">
          {teaching.map((e, i) => <Card key={i} item={e} />)}
        </div>
      </Section>

      {/* Publicaciones */}
      <Section title={t.publications}>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border bg-white/70 p-5 shadow-sm">
            <h3 className="font-semibold">{t.articles}</h3>
            <ul className="mt-2 space-y-2 list-disc pl-5">
              {publications.articles.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border bg-white/70 p-5 shadow-sm">
            <h3 className="font-semibold">{t.chapters}</h3>
            <ul className="mt-2 space-y-2 list-disc pl-5">
              {publications.chapters.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        </div>
      </Section>

      {/* Congresos & otras actividades */}
      <Section title={t.conferences}>
        <div className="grid gap-4 md:grid-cols-2">
          {conferences.map((c, i) => <Card key={i} item={c} />)}
        </div>
      </Section>

      <div className="mb-16" />
    </Container>
  )
}

