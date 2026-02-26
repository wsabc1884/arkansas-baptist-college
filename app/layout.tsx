import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import {sanity} from '@/lib/sanity'
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
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
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
  const siteSettings = await sanity.fetch(SITE_SETTINGS_QUERY)

  return (
    <html lang="en">
      <body className={`${_sourceSans.variable} ${_playfair.variable} font-sans antialiased`}>
        <Header siteSettings={siteSettings} />
        {children}
        <Footer siteSettings={siteSettings} />
        <Analytics />
      </body>
    </html>
  )
}