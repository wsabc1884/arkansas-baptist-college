import {defineType, defineField} from 'sanity'

export const documentForm = defineType({
  name: 'documentForm',
  title: 'Document / Form',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Financial Aid', value: 'financial-aid'},
          {title: 'Compliance', value: 'compliance'},
          {title: 'HR', value: 'hr'},
          {title: 'Facilities', value: 'facilities'},
          {title: 'Enrollment', value: 'enrollment'},
          {title: 'Academics', value: 'academics'},
        ]
      }
    }),
    defineField({name: 'lastUpdated', title: 'Last Updated', type: 'datetime'})
  ],
  orderings: [
    {title: 'Title (A-Z)', name: 'titleAsc', by: [{field: 'title', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'title', subtitle: 'category'},
  },
})
