import {defineType, defineField} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({name: 'collegeName', type: 'string'}),
    defineField({name: 'collegeAddress', type: 'string'}),
    defineField({name: 'mainPhone', type: 'string'}),
    defineField({name: 'mainEmail', type: 'string'}),
    defineField({name: 'fafsaSchoolCode', type: 'string'}),
    defineField({name: 'applicationUrl', type: 'url'}),
    defineField({name: 'myPortal', type: 'url'}),
    defineField({name: 'email', type: 'url'}),
    defineField({name: 'blackboard', type: 'url'}),
    defineField({name: 'ticketSubmission', type: 'url'}),
  ]
})