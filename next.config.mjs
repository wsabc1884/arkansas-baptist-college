/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  async rewrites() {
    return {
      beforeFiles: [
        // Christian Studies microsite proxy
        {
          source: '/christianstudies',
          destination: 'https://mckissic-christian-studies.pages.dev',
        },
        {
          source: '/christianstudies/:path*',
          destination: 'https://mckissic-christian-studies.pages.dev/:path*',
        },
      ],
    }
  },
}

export default nextConfig
