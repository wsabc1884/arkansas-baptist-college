import {defineType, defineField} from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}, validation: (Rule) => Rule.required()}),
    defineField({name: 'heroSubtitle', title: 'Hero Subtitle', type: 'string'}),
    defineField({name: 'heroDescription', title: 'Hero Description', type: 'text', rows: 3}),
    defineField({name: 'heroImage', title: 'Hero Image', type: 'image', options: {hotspot: true}}),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}]
    }),
    defineField({name: 'lastUpdated', title: 'Last Updated', type: 'datetime'}),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      options: {collapsible: true, collapsed: true},
      fields: [
        defineField({name: 'seoTitle', title: 'SEO Title', type: 'string'}),
        defineField({name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 2}),
      ]
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'slug.current'},
  },
})
