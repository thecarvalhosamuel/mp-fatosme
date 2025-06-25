import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // ✅ ESSENCIAL para builds estáticos
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  trailingSlash: true, // Opcional: para compatibilidade com alguns servidores
}

export default nextConfig