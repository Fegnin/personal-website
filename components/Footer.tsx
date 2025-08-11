export default function Footer({ locale }: { locale: 'es' | 'en' }) {
  return (
    <footer className="mt-16 border-t">
      <div className="max-w-5xl mx-auto px-4 py-8 text-sm flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Fernando Parada Zelada.</p>
        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com/ps.fernandoparada"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:opacity-80"
            aria-label="Instagram @ps.fernandoparada"
          >
            {/* Instagram icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
            </svg>
            <span>@ps.fernandoparada</span>
          </a>
          <a
            href="https://tiktok.com/@dr.fernandoparada"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:opacity-80"
            aria-label="TikTok @dr.fernandoparada"
          >
            {/* TikTok icon (simple mark) */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M14 3v6.2a4.8 4.8 0 0 1-3.7-1.3V15a3.5 3.5 0 1 1-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 3c.6 2.6 2.4 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>@dr.fernandoparada</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
