import {defineType, defineField} from 'sanity'

export const newsArticle = defineType({
  name: 'newsArticle',
  title: 'News Article',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'slug', type: 'slug', options: {source: 'title'}}),
    defineField({name: 'publishDate', type: 'datetime'}),
    defineField({name: 'image', type: 'image'}),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}]
    })
  ]
})