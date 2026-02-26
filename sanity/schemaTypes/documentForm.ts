import {defineType, defineField} from 'sanity'

export const documentForm = defineType({
  name: 'documentForm',
  title: 'Document / Form',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'description', type: 'text'}),
    defineField({
      name: 'file',
      type: 'file'
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: [
          {title: 'Financial Aid', value: 'financial-aid'},
          {title: 'Compliance', value: 'compliance'},
          {title: 'HR', value: 'hr'},
          {title: 'Facilities', value: 'facilities'}
        ]
      }
    }),
    defineField({name: 'lastUpdated', type: 'datetime'})
  ]
})