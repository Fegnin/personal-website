'use client'

import { usePathname } from 'next/navigation'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '/'
  // Al cambiar la ruta, cambia la key y se reproduce la animación
  return (
    <div key={pathname} className="animate-pageIn">
      {children}
    </div>
  )
}
