export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const locales: Array<'es' | 'en'> = ['es', 'en']
  const pages = ['', 'about', 'projects', 'blog', 'contact']

  const urls = locales.flatMap((loc) =>
    pages.map((p) => ({
      url: `${baseUrl}/${loc}${p ? `/${p}` : ''}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: p === '' ? 1 : 0.8,
    }))
  )

  return urls
}
