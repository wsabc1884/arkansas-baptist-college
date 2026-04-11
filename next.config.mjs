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
        // Workaround: Proxy root-level HTML page requests from Christian Studies nav links
        {
          source: '/index.html',
          destination: 'https://mckissic-christian-studies.pages.dev/index.html',
          has: [{ type: 'header', key: 'referer', value: '(.*)/christianstudies(.*)' }],
        },
        {
          source: '/about.html',
          destination: 'https://mckissic-christian-studies.pages.dev/about.html',
          has: [{ type: 'header', key: 'referer', value: '(.*)/christianstudies(.*)' }],
        },
        {
          source: '/degrees.html',
          destination: 'https://mckissic-christian-studies.pages.dev/degrees.html',
          has: [{ type: 'header', key: 'referer', value: '(.*)/christianstudies(.*)' }],
        },
        {
          source: '/faculty.html',
          destination: 'https://mckissic-christian-studies.pages.dev/faculty.html',
          has: [{ type: 'header', key: 'referer', value: '(.*)/christianstudies(.*)' }],
        },
        {
          source: '/stories.html',
          destination: 'https://mckissic-christian-studies.pages.dev/stories.html',
          has: [{ type: 'header', key: 'referer', value: '(.*)/christianstudies(.*)' }],
        },
        {
          source: '/admissions.html',
          destination: 'https://mckissic-christian-studies.pages.dev/admissions.html',
          has: [{ type: 'header', key: 'referer', value: '(.*)/christianstudies(.*)' }],
        },
        {
          source: '/faith.html',
          destination: 'https://mckissic-christian-studies.pages.dev/faith.html',
          has: [{ type: 'header', key: 'referer', value: '(.*)/christianstudies(.*)' }],
        },
        {
          source: '/timeline.html',
          destination: 'https://mckissic-christian-studies.pages.dev/timeline.html',
          has: [{ type: 'header', key: 'referer', value: '(.*)/christianstudies(.*)' }],
        },
      ],
    }
  },
}

export default nextConfig
