/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      // Christian Studies microsite - serve index.html for the root path
      {
        source: '/christianstudies',
        destination: '/christianstudies/index.html',
      },
      {
        source: '/christianstudies/',
        destination: '/christianstudies/index.html',
      },
    ]
  },
}

export default nextConfig
