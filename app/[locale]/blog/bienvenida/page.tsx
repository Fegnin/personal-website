import Container from '@/components/Container'

export default function PostBienvenida() {
  return (
    <Container>
      <div className="mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Bienvenida
        </h1>
        <div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent" aria-hidden />
      </div>
      <div className="prose max-w-none">
        <p>
          ¡Hola! Este es un post de ejemplo. Aquí compartiré ideas sobre psicoterapia, ACT, mindfulness y
          tecnología en salud mental.
        </p>
      </div>
    </Container>
  )
}
