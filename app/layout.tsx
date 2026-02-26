import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import {sanityFetch, SanityLive} from '@/sanity/lib/live'
import {SITE_SETTINGS_QUERY} from '@/lib/queries'
import {Header} from '@/components/header'
import {Footer} from '@/components/footer'

const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const _sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: 'Arkansas Baptist College | Faith. Growth. Service.',
  description: 'Arkansas Baptist College is a private, historically black liberal arts college in Little Rock, Arkansas. Your Education, Your Life, Your School.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon.ico',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let siteSettings = null
  try {
    const result = await sanityFetch({query: SITE_SETTINGS_QUERY})
    siteSettings = result.data
  } catch {
    // Sanity is unreachable -- render with hardcoded defaults
  }

  return (
    <html lang="en">
      <body className={`${_sourceSans.variable} ${_playfair.variable} font-sans antialiased`}>
        <Header siteSettings={siteSettings} />
        {children}
        <Footer siteSettings={siteSettings} />
        <SanityLive />
        <Analytics />
      </body>
    </html>
  )
}
