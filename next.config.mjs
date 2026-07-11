/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // pdfkit ships built-in .afm font metric files that it reads from disk at
  // runtime. Bundling it (Turbopack/webpack) rewrites __dirname and breaks that
  // lookup, so keep it external and let it resolve from node_modules directly.
  serverExternalPackages: ["pdfkit"],

  async rewrites() {
    return [
      {
        source: '/christianstudies/:path*',
        destination: 'https://mckissic-christian-studies.pages.dev/:path*',
      },
      {
        source: '/christianstudies/',
        destination: 'https://mckissic-christian-studies.pages.dev/',
      },
      {
        source: '/christianstudies',
        destination: 'https://mckissic-christian-studies.pages.dev',
      },
    ]
  },
}

export default nextConfig
