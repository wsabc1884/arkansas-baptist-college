import {defineType, defineField} from 'sanity'

export const staffMember = defineType({
  name: 'staffMember',
  title: 'Staff Member',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Full Name', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'title', title: 'Job Title', type: 'string'}),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
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
        ]
      }
    }),
    defineField({name: 'email', title: 'Email', type: 'string'}),
    defineField({name: 'phone', title: 'Phone', type: 'string'}),
    defineField({name: 'bio', title: 'Bio', type: 'text', rows: 4}),
    defineField({name: 'photo', title: 'Photo', type: 'image', options: {hotspot: true}}),
    defineField({
      name: 'showOnDirectory',
      title: 'Show on Campus Directory',
      description: 'Display this person on the /resources/directory page',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showOnAdminPage',
      title: 'Show on Administration Page',
      description: 'Display this person on the /about/administration page',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  orderings: [
    {title: 'Name (A-Z)', name: 'nameAsc', by: [{field: 'name', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'name', subtitle: 'title', media: 'photo'},
  },
})
