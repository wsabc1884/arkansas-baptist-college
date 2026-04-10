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
      // Christian Studies microsite rewrites
      { source: '/christianstudies', destination: '/christianstudies/index.html' },
      { source: '/christianstudies/', destination: '/christianstudies/index.html' },
      { source: '/christianstudies/about', destination: '/christianstudies/about.html' },
      { source: '/christianstudies/degrees', destination: '/christianstudies/degrees.html' },
      { source: '/christianstudies/faculty', destination: '/christianstudies/faculty.html' },
      { source: '/christianstudies/stories', destination: '/christianstudies/stories.html' },
      { source: '/christianstudies/admissions', destination: '/christianstudies/admissions.html' },
      { source: '/christianstudies/faith', destination: '/christianstudies/faith.html' },
      { source: '/christianstudies/timeline', destination: '/christianstudies/timeline.html' },
    ]
  },
}

export default nextConfig
