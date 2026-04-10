import { client } from '@/sanity/lib/client'

/**
 * GROQ query to fetch a page with all associated section data resolved
 * This expands references to staff, news, events, and documents
 */
export const pageWithSectionsQuery = `
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    _type,
    title,
    "slug": slug.current,
    heroSubtitle,
    heroDescription,
    heroImage {
      asset->,
      hotspot,
      crop
    },
    pageTemplate,
    lastUpdated,
    body[] {
      ...,
      _type == "image" => {
        asset->,
        hotspot,
        crop
      }
    },
    sections[] {
      _type,
      _key,
      
      // Hero Section
      _type == "heroSection" => {
        heading,
        subtitle,
        description,
        image {
          asset->,
          hotspot,
          crop
        },
        ctaButtons
      },
      
      // Rich Text Section
      _type == "richTextSection" => {
        heading,
        subheading,
        content[] {
          ...,
          _type == "image" => {
            asset->,
            hotspot,
            crop
          }
        }
      },
      
      // Staff List Section - resolve staff references
      _type == "staffListSection" => {
        heading,
        subheading,
        layout,
        filterByDepartment,
        "staffMembers": staffMembers[]->{
          _id,
          name,
          title,
          department,
          email,
          phone,
          bio,
          photo {
            asset->,
            hotspot,
            crop
          }
        }
      },
      
      // News List Section - resolve news references or fetch latest
      _type == "newsListSection" => {
        heading,
        subheading,
        limit,
        showViewAll,
        "featuredArticles": featuredArticles[]->{
          _id,
          title,
          "slug": slug.current,
          publishDate,
          excerpt,
          image {
            asset->,
            hotspot,
            crop
          }
        }
      },
      
      // Events List Section - resolve event references or fetch upcoming
      _type == "eventsListSection" => {
        heading,
        subheading,
        limit,
        showViewAll,
        "featuredEvents": featuredEvents[]->{
          _id,
          title,
          date,
          endDate,
          location,
          image {
            asset->,
            hotspot,
            crop
          },
          description
        }
      },
      
      // Documents List Section - resolve document references
      _type == "documentsListSection" => {
        heading,
        subheading,
        filterByCategory,
        "documents": documents[]->{
          _id,
          title,
          description,
          category,
          lastUpdated,
          "fileUrl": file.asset->url,
          "fileName": file.asset->originalFilename
        }
      },
      
      // CTA Band Section
      _type == "ctaBandSection" => {
        heading,
        description,
        buttonLabel,
        buttonUrl,
        variant
      },
      
      // Cards Grid Section
      _type == "cardsGridSection" => {
        heading,
        subheading,
        columns,
        cards[] {
          title,
          description,
          icon,
          image {
            asset->,
            hotspot,
            crop
          },
          linkUrl,
          linkLabel
        }
      },
      
      // Stats Section
      _type == "statsSection" => {
        heading,
        stats[] {
          value,
          label
        }
      },
      
      // FAQ Section
      _type == "faqSection" => {
        heading,
        subheading,
        faqs[] {
          question,
          answer
        }
      },
      
      // Image Gallery Section
      _type == "imageGallerySection" => {
        heading,
        subheading,
        layout,
        images[] {
          asset->,
          hotspot,
          crop,
          caption,
          alt
        }
      }
    },
    seo {
      seoTitle,
      seoDescription,
      ogImage {
        asset->
      },
      noIndex
    }
  }
`

/**
 * Fetch a page by slug with all sections and associated data resolved
 */
export async function getPageBySlug(slug: string) {
  return client.fetch(pageWithSectionsQuery, { slug })
}

/**
 * Fetch all page slugs for static generation
 */
export async function getAllPageSlugs() {
  return client.fetch<{ slug: string }[]>(`
    *[_type == "page" && defined(slug.current)] {
      "slug": slug.current
    }
  `)
}

/**
 * Additional query to fetch staff by department (for staffListSection with filterByDepartment)
 */
export async function getStaffByDepartment(department: string) {
  return client.fetch(`
    *[_type == "staffMember" && department == $department] | order(name asc) {
      _id,
      name,
      title,
      department,
      email,
      phone,
      bio,
      photo {
        asset->,
        hotspot,
        crop
      }
    }
  `, { department })
}

/**
 * Fetch latest news articles (for newsListSection without specific selections)
 */
export async function getLatestNews(limit: number = 3) {
  return client.fetch(`
    *[_type == "newsArticle"] | order(publishDate desc)[0...$limit] {
      _id,
      title,
      "slug": slug.current,
      publishDate,
      excerpt,
      image {
        asset->,
        hotspot,
        crop
      }
    }
  `, { limit: limit - 1 })
}

/**
 * Fetch upcoming events (for eventsListSection without specific selections)
 */
export async function getUpcomingEvents(limit: number = 3) {
  return client.fetch(`
    *[_type == "event" && date >= now()] | order(date asc)[0...$limit] {
      _id,
      title,
      date,
      endDate,
      location,
      image {
        asset->,
        hotspot,
        crop
      },
      description
    }
  `, { limit: limit - 1 })
}

/**
 * Fetch documents by category (for documentsListSection with filterByCategory)
 */
export async function getDocumentsByCategory(category: string) {
  return client.fetch(`
    *[_type == "documentForm" && category == $category] | order(title asc) {
      _id,
      title,
      description,
      category,
      lastUpdated,
      "fileUrl": file.asset->url,
      "fileName": file.asset->originalFilename
    }
  `, { category })
}
