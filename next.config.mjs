/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: false,
  },
  images: {
    // tamaños que usamos en About + defaults sensatos
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [210, 250, 300, 340, 380, 420, 560, 384], // añadimos nuestros anchos
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
