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
      afterFiles: [
        // Workaround: Proxy root-level asset requests from the Christian Studies microsite
        // The Cloudflare site uses absolute paths like /images/..., /css/..., etc.
        {
          source: '/images/:path*',
          destination: 'https://mckissic-christian-studies.pages.dev/images/:path*',
          has: [{ type: 'header', key: 'referer', value: '(.*)/christianstudies(.*)' }],
        },
        {
          source: '/css/:path*',
          destination: 'https://mckissic-christian-studies.pages.dev/css/:path*',
          has: [{ type: 'header', key: 'referer', value: '(.*)/christianstudies(.*)' }],
        },
        {
          source: '/js/:path*',
          destination: 'https://mckissic-christian-studies.pages.dev/js/:path*',
          has: [{ type: 'header', key: 'referer', value: '(.*)/christianstudies(.*)' }],
        },
        {
          source: '/videos/:path*',
          destination: 'https://mckissic-christian-studies.pages.dev/videos/:path*',
          has: [{ type: 'header', key: 'referer', value: '(.*)/christianstudies(.*)' }],
        },
      ],
    }
  },
}

export default nextConfig
