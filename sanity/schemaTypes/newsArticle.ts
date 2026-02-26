import {defineType, defineField} from 'sanity'

export const newsArticle = defineType({
  name: 'newsArticle',
  title: 'News Article',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}, validation: (Rule) => Rule.required()}),
    defineField({name: 'publishDate', title: 'Publish Date', type: 'datetime', initialValue: () => new Date().toISOString()}),
    defineField({name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3, description: 'Short summary for listing pages'}),
    defineField({name: 'image', title: 'Featured Image', type: 'image', options: {hotspot: true}}),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}]
    })
  ],
  orderings: [
    {title: 'Publish Date (Newest)', name: 'publishDateDesc', by: [{field: 'publishDate', direction: 'desc'}]},
  ],
  preview: {
    select: {title: 'title', subtitle: 'publishDate', media: 'image'},
  },
})
