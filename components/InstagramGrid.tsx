import Image from 'next/image'

type IGItem = {
  id: string
  caption?: string
  media_url: string
  permalink: string
  thumbnail_url?: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  timestamp?: string
}

export default async function InstagramGrid({
  locale,
  username = 'ps.fernandoparada',
  limit = 9,
}: {
  locale: 'es' | 'en'
  username?: string
  limit?: number
}) {
  const title =
    locale === 'es'
      ? '¡Ponte al día con mis posts en Instagram!'
      : 'Catch up with my Instagram posts!'

  const token = process.env.IG_ACCESS_TOKEN

  // Si no hay token, mostramos placeholder con link a IG
  if (!token) {
    return (
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
        <div className="mt-4 rounded-2xl border bg-white/70 p-6 text-center">
          <p className="opacity-80">
            {locale === 'es'
              ? 'Conectaremos Instagram para que tus publicaciones aparezcan aquí.'
              : 'We’ll connect Instagram to show your posts here.'}
          </p>
          <a
            href={`https://instagram.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-primary text-white hover:opacity-90"
          >
            @{username}
          </a>
        </div>
      </section>
    )
  }

  // Con token: traemos las últimas publicaciones desde Instagram Basic Display API
  const fields =
    'id,caption,media_url,permalink,thumbnail_url,media_type,timestamp'
  const url = `https://graph.instagram.com/me/media?fields=${fields}&limit=${limit}&access_token=${token}`

  let items: IGItem[] = []
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } }) // cache 1h
    const json = await res.json()
    items = (json?.data as IGItem[]) || []
  } catch {
    items = []
  }

  return (
    <section className="mt-12">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
        <a
          href={`https://instagram.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex text-sm underline opacity-80 hover:opacity-100"
        >
          @{username}
        </a>
      </div>

      {items.length === 0 ? (
        <div className="mt-4 rounded-2xl border bg-white/70 p-6 text-center">
          <p className="opacity-80">
            {locale === 'es'
              ? 'No pude cargar publicaciones por ahora. Intenta de nuevo más tarde.'
              : 'Couldn’t load posts right now. Please try again later.'}
          </p>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
          {items.map((it) => {
            const src =
              it.media_type === 'VIDEO'
                ? it.thumbnail_url || it.media_url
                : it.media_url
            const alt =
              it.caption?.slice(0, 120) ||
              (locale === 'es' ? 'Publicación de Instagram' : 'Instagram post')
            return (
              <a
                key={it.id}
                href={it.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl border bg-white/60"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={600}
                  height={600}
                  className="aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                  // Evita configurar domains de imágenes externas por ahora:
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </a>
            )
          })}
        </div>
      )}
    </section>
  )
}
