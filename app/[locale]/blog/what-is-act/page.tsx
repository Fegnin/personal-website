import Container from '@/components/Container'

export default function PostWhatIsACT() {
  return (
    <Container>
      <div className="mb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          What is Acceptance and Commitment Therapy (ACT)?
        </h1>
        <div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent" aria-hidden />
      </div>
      <div className="prose max-w-none">
        <p>
          ACT is an evidence-based approach that builds psychological flexibility so you can live by your
          values—even alongside difficult thoughts and feelings.
        </p>
      </div>
    </Container>
  )
}
