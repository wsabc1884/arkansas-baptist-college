import {defineType, defineField} from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'slug', type: 'slug', options: {source: 'title'}}),
    defineField({name: 'heroSubtitle', type: 'string'}),
    defineField({name: 'heroDescription', type: 'text'}),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({name: 'lastUpdated', type: 'datetime'})
  ]
})