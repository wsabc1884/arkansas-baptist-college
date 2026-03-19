import {defineType, defineField} from 'sanity'

export const presidentPage = defineType({
  name: 'presidentPage',
  title: 'President Page',
  type: 'document',
  fields: [
    defineField({
      name: 'presidentName',
      title: 'President Name',
      type: 'string',
      description: 'e.g. "Mr. William L. Bill Walker, Jr."',
    }),
    defineField({
      name: 'presidentTitle',
      title: 'President Title',
      type: 'string',
      description: 'e.g. "President"',
    }),
    defineField({
      name: 'presidentInitials',
      title: 'Initials (for placeholder)',
      type: 'string',
      description: 'e.g. "GH" — shown when no photo is uploaded',
    }),
    defineField({
      name: 'presidentPhoto',
      title: 'President Photo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'bioParagraphs',
      title: 'Bio Paragraphs',
      type: 'array',
      of: [{type: 'text', rows: 4}],
      description: 'Each entry becomes a paragraph in the bio section.',
    }),
    defineField({
      name: 'quote',
      title: 'Featured Quote',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
    }),
    defineField({
      name: 'contactAddress',
      title: 'Contact Address',
      type: 'string',
    }),
    defineField({
      name: 'commitmentHeading',
      title: 'Commitment Section Heading',
      type: 'string',
    }),
    defineField({
      name: 'commitmentBody',
      title: 'Commitment Section Body',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'commitmentPillars',
      title: 'Commitment Pillars',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'string'}),
          ],
          preview: {
            select: {title: 'title', subtitle: 'description'},
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({title: 'President Page'}),
  },
})
