import {defineType, defineField, defineArrayMember} from 'sanity'

// Reusable section types for flexible page building
const heroSection = defineArrayMember({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Heading', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({name: 'image', title: 'Background Image', type: 'image', options: {hotspot: true}}),
    defineField({
      name: 'ctaButtons',
      title: 'CTA Buttons',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({name: 'label', title: 'Label', type: 'string'}),
          defineField({name: 'url', title: 'URL', type: 'string'}),
          defineField({name: 'variant', title: 'Variant', type: 'string', options: {list: ['primary', 'secondary', 'outline']}}),
        ],
        preview: {select: {title: 'label', subtitle: 'url'}},
      }],
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare: ({title}) => ({title: title || 'Hero Section', subtitle: 'Hero'}),
  },
})

const richTextSection = defineArrayMember({
  name: 'richTextSection',
  title: 'Rich Text Section',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Section Heading', type: 'string'}),
    defineField({name: 'subheading', title: 'Section Subheading', type: 'string'}),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}],
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare: ({title}) => ({title: title || 'Rich Text Section', subtitle: 'Rich Text'}),
  },
})

const staffListSection = defineArrayMember({
  name: 'staffListSection',
  title: 'Staff List Section',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Section Heading', type: 'string'}),
    defineField({name: 'subheading', title: 'Section Subheading', type: 'string'}),
    defineField({
      name: 'staffMembers',
      title: 'Staff Members',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'staffMember'}]}],
      description: 'Select specific staff members to display',
    }),
    defineField({
      name: 'filterByDepartment',
      title: 'Or Filter by Department',
      type: 'string',
      description: 'Alternatively, show all staff from a department',
      options: {
        list: [
          {title: 'Administration', value: 'administration'},
          {title: 'Academic Affairs', value: 'academic-affairs'},
          {title: 'Student Affairs', value: 'student-affairs'},
          {title: 'Business Affairs', value: 'business-affairs'},
          {title: 'Institutional Advancement', value: 'institutional-advancement'},
          {title: 'Financial Aid', value: 'financial-aid'},
          {title: 'Admissions', value: 'admissions'},
          {title: 'Technology Services', value: 'technology-services'},
          {title: 'Library', value: 'library'},
          {title: 'Athletics', value: 'athletics'},
        ],
      },
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {list: ['grid', 'list', 'cards']},
      initialValue: 'grid',
    }),
  ],
  preview: {
    select: {title: 'heading', department: 'filterByDepartment'},
    prepare: ({title, department}) => ({
      title: title || 'Staff List',
      subtitle: department ? `Staff: ${department}` : 'Staff Section',
    }),
  },
})

const newsListSection = defineArrayMember({
  name: 'newsListSection',
  title: 'News List Section',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Section Heading', type: 'string'}),
    defineField({name: 'subheading', title: 'Section Subheading', type: 'string'}),
    defineField({
      name: 'featuredArticles',
      title: 'Featured Articles',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'newsArticle'}]}],
      description: 'Select specific articles, or leave empty to show latest',
    }),
    defineField({
      name: 'limit',
      title: 'Number of Articles',
      type: 'number',
      initialValue: 3,
      description: 'If no featured articles selected, show this many latest articles',
    }),
    defineField({name: 'showViewAll', title: 'Show "View All" Link', type: 'boolean', initialValue: true}),
  ],
  preview: {
    select: {title: 'heading'},
    prepare: ({title}) => ({title: title || 'News Section', subtitle: 'News List'}),
  },
})

const eventsListSection = defineArrayMember({
  name: 'eventsListSection',
  title: 'Events List Section',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Section Heading', type: 'string'}),
    defineField({name: 'subheading', title: 'Section Subheading', type: 'string'}),
    defineField({
      name: 'featuredEvents',
      title: 'Featured Events',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'event'}]}],
      description: 'Select specific events, or leave empty to show upcoming',
    }),
    defineField({
      name: 'limit',
      title: 'Number of Events',
      type: 'number',
      initialValue: 3,
      description: 'If no featured events selected, show this many upcoming events',
    }),
    defineField({name: 'showViewAll', title: 'Show "View All" Link', type: 'boolean', initialValue: true}),
  ],
  preview: {
    select: {title: 'heading'},
    prepare: ({title}) => ({title: title || 'Events Section', subtitle: 'Events List'}),
  },
})

const documentsListSection = defineArrayMember({
  name: 'documentsListSection',
  title: 'Documents List Section',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Section Heading', type: 'string'}),
    defineField({name: 'subheading', title: 'Section Subheading', type: 'string'}),
    defineField({
      name: 'documents',
      title: 'Documents',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'documentForm'}]}],
      description: 'Select specific documents to display',
    }),
    defineField({
      name: 'filterByCategory',
      title: 'Or Filter by Category',
      type: 'string',
      description: 'Alternatively, show all documents from a category',
      options: {
        list: [
          {title: 'Financial Aid', value: 'financial-aid'},
          {title: 'Compliance', value: 'compliance'},
          {title: 'HR', value: 'hr'},
          {title: 'Facilities', value: 'facilities'},
          {title: 'Enrollment', value: 'enrollment'},
          {title: 'Academics', value: 'academics'},
        ],
      },
    }),
  ],
  preview: {
    select: {title: 'heading', category: 'filterByCategory'},
    prepare: ({title, category}) => ({
      title: title || 'Documents',
      subtitle: category ? `Documents: ${category}` : 'Documents Section',
    }),
  },
})

const ctaBandSection = defineArrayMember({
  name: 'ctaBandSection',
  title: 'CTA Band Section',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Heading', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
    defineField({name: 'buttonLabel', title: 'Button Label', type: 'string'}),
    defineField({name: 'buttonUrl', title: 'Button URL', type: 'string'}),
    defineField({
      name: 'variant',
      title: 'Style Variant',
      type: 'string',
      options: {list: ['primary', 'secondary', 'dark']},
      initialValue: 'primary',
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare: ({title}) => ({title: title || 'CTA Band', subtitle: 'Call to Action'}),
  },
})

const cardsGridSection = defineArrayMember({
  name: 'cardsGridSection',
  title: 'Cards Grid Section',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Section Heading', type: 'string'}),
    defineField({name: 'subheading', title: 'Section Subheading', type: 'string'}),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({name: 'title', title: 'Title', type: 'string'}),
          defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
          defineField({name: 'icon', title: 'Icon Name', type: 'string', description: 'Lucide icon name (e.g., "BookOpen", "Users")'}),
          defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
          defineField({name: 'linkUrl', title: 'Link URL', type: 'string'}),
          defineField({name: 'linkLabel', title: 'Link Label', type: 'string'}),
        ],
        preview: {select: {title: 'title', subtitle: 'description'}},
      }],
    }),
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'number',
      options: {list: [{title: '2 Columns', value: 2}, {title: '3 Columns', value: 3}, {title: '4 Columns', value: 4}]},
      initialValue: 3,
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare: ({title}) => ({title: title || 'Cards Grid', subtitle: 'Cards Section'}),
  },
})

const statsSection = defineArrayMember({
  name: 'statsSection',
  title: 'Stats Section',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Section Heading', type: 'string'}),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({name: 'value', title: 'Value', type: 'string'}),
          defineField({name: 'label', title: 'Label', type: 'string'}),
        ],
        preview: {select: {title: 'value', subtitle: 'label'}},
      }],
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare: ({title}) => ({title: title || 'Stats Section', subtitle: 'Statistics'}),
  },
})

const faqSection = defineArrayMember({
  name: 'faqSection',
  title: 'FAQ Section',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Section Heading', type: 'string'}),
    defineField({name: 'subheading', title: 'Section Subheading', type: 'string'}),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({name: 'question', title: 'Question', type: 'string'}),
          defineField({name: 'answer', title: 'Answer', type: 'text', rows: 4}),
        ],
        preview: {select: {title: 'question'}},
      }],
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare: ({title}) => ({title: title || 'FAQ Section', subtitle: 'FAQs'}),
  },
})

const imageGallerySection = defineArrayMember({
  name: 'imageGallerySection',
  title: 'Image Gallery Section',
  type: 'object',
  fields: [
    defineField({name: 'heading', title: 'Section Heading', type: 'string'}),
    defineField({name: 'subheading', title: 'Section Subheading', type: 'string'}),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{
        type: 'image',
        options: {hotspot: true},
        fields: [
          defineField({name: 'caption', title: 'Caption', type: 'string'}),
          defineField({name: 'alt', title: 'Alt Text', type: 'string'}),
        ],
      }],
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {list: ['grid', 'masonry', 'carousel']},
      initialValue: 'grid',
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare: ({title}) => ({title: title || 'Image Gallery', subtitle: 'Gallery'}),
  },
})

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'seo', title: 'SEO'},
    {name: 'settings', title: 'Settings'},
  ],
  fields: [
    // Basic page info
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required(), group: 'content'}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}, validation: (Rule) => Rule.required(), group: 'content'}),
    
    // Hero settings (simplified for pages that just need a basic hero)
    defineField({name: 'heroSubtitle', title: 'Hero Subtitle', type: 'string', group: 'content'}),
    defineField({name: 'heroDescription', title: 'Hero Description', type: 'text', rows: 3, group: 'content'}),
    defineField({name: 'heroImage', title: 'Hero Image', type: 'image', options: {hotspot: true}, group: 'content'}),
    
    // Modular page sections - this is where the magic happens
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      group: 'content',
      description: 'Build your page with modular sections. Each section can pull in associated data.',
      of: [
        heroSection,
        richTextSection,
        staffListSection,
        newsListSection,
        eventsListSection,
        documentsListSection,
        ctaBandSection,
        cardsGridSection,
        statsSection,
        faqSection,
        imageGallerySection,
      ],
    }),
    
    // Legacy body field for simpler pages
    defineField({
      name: 'body',
      title: 'Body Content (Legacy)',
      type: 'array',
      of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}],
      group: 'content',
      description: 'Simple rich text content. Use "Page Sections" above for more control.',
    }),
    
    // Page settings
    defineField({name: 'lastUpdated', title: 'Last Updated', type: 'datetime', group: 'settings'}),
    defineField({
      name: 'pageTemplate',
      title: 'Page Template',
      type: 'string',
      group: 'settings',
      options: {
        list: [
          {title: 'Default', value: 'default'},
          {title: 'Landing Page', value: 'landing'},
          {title: 'Department', value: 'department'},
          {title: 'Resource', value: 'resource'},
        ],
      },
      initialValue: 'default',
    }),
    
    // SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'seo',
      options: {collapsible: true, collapsed: true},
      fields: [
        defineField({name: 'seoTitle', title: 'SEO Title', type: 'string', description: 'Override the page title for search engines'}),
        defineField({name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 2}),
        defineField({name: 'ogImage', title: 'Open Graph Image', type: 'image', description: 'Image for social media sharing'}),
        defineField({name: 'noIndex', title: 'Hide from Search Engines', type: 'boolean', initialValue: false}),
      ],
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'slug.current', media: 'heroImage'},
  },
})
