/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: false },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // Añadimos las variantes @2x que faltaban (500, 600, 680)
    imageSizes: [210, 250, 280, 300, 340, 380, 420, 500, 560, 600, 680],
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
