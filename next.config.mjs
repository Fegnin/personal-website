/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: false },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // 👇 añadimos 280 (y mantenemos los otros que usamos)
    imageSizes: [210, 250, 280, 300, 340, 380, 420, 560],
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
