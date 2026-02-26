import {defineType, defineField} from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'date', title: 'Start Date & Time', type: 'datetime', validation: (Rule) => Rule.required()}),
    defineField({name: 'endDate', title: 'End Date & Time', type: 'datetime'}),
    defineField({name: 'location', title: 'Location', type: 'string'}),
    defineField({name: 'image', title: 'Event Image', type: 'image', options: {hotspot: true}}),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}]
    })
  ],
  orderings: [
    {title: 'Event Date (Soonest)', name: 'dateAsc', by: [{field: 'date', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'title', subtitle: 'date', media: 'image'},
  },
})
