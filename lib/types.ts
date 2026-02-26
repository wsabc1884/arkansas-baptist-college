import type { PortableTextBlock } from 'next-sanity'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// ── Site Settings ──────────────────────────────────────────────
export type SiteSettings = {
  collegeName?: string
  collegeAddress?: string
  mainPhone?: string
  mainEmail?: string
  fafsaSchoolCode?: string
  applicationUrl?: string
  myPortal?: string
  email?: string
  blackboard?: string
  ticketSubmission?: string
  logo?: SanityImageSource
  stat1Value?: string
  stat1Label?: string
  stat2Value?: string
  stat2Label?: string
  stat3Value?: string
  stat3Label?: string
  stat4Value?: string
  stat4Label?: string
  giveHeading?: string
  giveBody?: string
  giveThankYou?: string
  giveDonateUrl?: string
  facebook?: string
  instagram?: string
  twitter?: string
  youtube?: string
  linkedin?: string
}

// ── Page ───────────────────────────────────────────────────────
export type Page = {
  _id: string
  title?: string
  slug?: string
  heroSubtitle?: string
  heroDescription?: string
  heroImage?: SanityImageSource
  body?: PortableTextBlock[]
  lastUpdated?: string
  seo?: {
    seoTitle?: string
    seoDescription?: string
  }
}

// ── News Article ───────────────────────────────────────────────
export type NewsArticle = {
  _id: string
  title?: string
  slug?: string
  publishDate?: string
  excerpt?: string
  image?: SanityImageSource
  body?: PortableTextBlock[]
}

// ── Event ──────────────────────────────────────────────────────
export type Event = {
  _id: string
  title?: string
  date?: string
  endDate?: string
  location?: string
  image?: SanityImageSource
  description?: PortableTextBlock[]
}

// ── Staff Member ───────────────────────────────────────────────
export type StaffMember = {
  _id: string
  name?: string
  title?: string
  department?: string
  email?: string
  phone?: string
  bio?: string
  photo?: SanityImageSource
  showOnDirectory?: boolean
  showOnAdminPage?: boolean
}

// ── President Page ─────────────────────────────────────────────
export type PresidentPage = {
  presidentName?: string
  presidentTitle?: string
  presidentInitials?: string
  presidentPhoto?: SanityImageSource
  bioParagraphs?: string[]
  quote?: string
  contactEmail?: string
  contactPhone?: string
  contactAddress?: string
  commitmentHeading?: string
  commitmentBody?: string
  commitmentPillars?: { title?: string; description?: string }[]
}

// ── Document / Form ────────────────────────────────────────────
export type DocumentForm = {
  _id: string
  title?: string
  description?: string
  fileUrl?: string
  category?: 'financial-aid' | 'compliance' | 'hr' | 'facilities' | 'enrollment' | 'academics'
  lastUpdated?: string
}
