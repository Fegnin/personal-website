import Container from '@/components/Container'

export default function PostWelcome() {
  return (
    <Container>
      <div className="mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Welcome
        </h1>
        <div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent" aria-hidden />
      </div>
      <div className="prose max-w-none">
        <p>
          Hi! This is a sample post. I’ll be sharing ideas on psychotherapy, ACT, mindfulness, and digital
          mental-health tools here.
        </p>
      </div>
    </Container>
  )
}
