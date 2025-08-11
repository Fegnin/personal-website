import Container from '@/components/Container'

export default function PostACTQueEs() {
  return (
    <Container>
      <div className="mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          ¿Qué es la Terapia de Aceptación y Compromiso (ACT)?
        </h1>
        <div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent" aria-hidden />
      </div>
      <div className="prose max-w-none">
        <p>
          ACT es un enfoque basado en evidencia que busca aumentar la flexibilidad psicológica para
          vivir de acuerdo con tus valores, incluso en presencia de emociones difíciles.
        </p>
      </div>
    </Container>
  )
}
