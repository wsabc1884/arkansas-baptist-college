import {defineType, defineField} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    {name: 'general', title: 'General', default: true},
    {name: 'homepage', title: 'Homepage'},
    {name: 'links', title: 'Quick Links'},
    {name: 'social', title: 'Social Media'},
  ],
  fields: [
    // ── General ────────────────────────────────────────────
    defineField({name: 'collegeName', title: 'College Name', type: 'string', group: 'general'}),
    defineField({name: 'collegeAddress', title: 'Address', type: 'string', group: 'general'}),
    defineField({name: 'mainPhone', title: 'Main Phone', type: 'string', group: 'general'}),
    defineField({name: 'mainEmail', title: 'Main Email', type: 'string', group: 'general'}),
    defineField({name: 'fafsaSchoolCode', title: 'FAFSA School Code', type: 'string', group: 'general'}),
    defineField({name: 'logo', title: 'Logo', type: 'image', group: 'general'}),

    // ── Homepage Stats ──────────────────────────────────────
    defineField({name: 'stat1Value', title: 'Stat 1 Value (e.g. "140+")', type: 'string', group: 'homepage'}),
    defineField({name: 'stat1Label', title: 'Stat 1 Label (e.g. "Years of Excellence")', type: 'string', group: 'homepage'}),
    defineField({name: 'stat2Value', title: 'Stat 2 Value (e.g. "15:1")', type: 'string', group: 'homepage'}),
    defineField({name: 'stat2Label', title: 'Stat 2 Label (e.g. "Student-Faculty Ratio")', type: 'string', group: 'homepage'}),
    defineField({name: 'stat3Value', title: 'Stat 3 Value (e.g. "20+")', type: 'string', group: 'homepage'}),
    defineField({name: 'stat3Label', title: 'Stat 3 Label (e.g. "Degree Programs")', type: 'string', group: 'homepage'}),
    defineField({name: 'stat4Value', title: 'Stat 4 Value (e.g. "100%")', type: 'string', group: 'homepage'}),
    defineField({name: 'stat4Label', title: 'Stat 4 Label (e.g. "Commitment to Students")', type: 'string', group: 'homepage'}),

    // ── Give / Donate Section ──────────────────────────────
    defineField({name: 'giveHeading', title: 'Give Section Heading', type: 'string', group: 'homepage'}),
    defineField({name: 'giveBody', title: 'Give Section Body', type: 'text', rows: 6, group: 'homepage'}),
    defineField({name: 'giveThankYou', title: 'Give Section Thank You Line', type: 'string', group: 'homepage'}),
    defineField({name: 'giveDonateUrl', title: 'Donate Button URL', type: 'string', group: 'homepage'}),

    // ── Quick Links ────────────────────────────────────────
    defineField({name: 'applicationUrl', title: 'Application URL', type: 'url', group: 'links'}),
    defineField({name: 'myPortal', title: 'My Portal', type: 'url', group: 'links'}),
    defineField({name: 'email', title: 'Email Portal', type: 'url', group: 'links'}),
    defineField({name: 'blackboard', title: 'Blackboard', type: 'url', group: 'links'}),
    defineField({name: 'ticketSubmission', title: 'Ticket Submission', type: 'url', group: 'links'}),

    // ── Social Media ───────────────────────────────────────
    defineField({name: 'facebook', title: 'Facebook URL', type: 'url', group: 'social'}),
    defineField({name: 'instagram', title: 'Instagram URL', type: 'url', group: 'social'}),
    defineField({name: 'twitter', title: 'X / Twitter URL', type: 'url', group: 'social'}),
    defineField({name: 'youtube', title: 'YouTube URL', type: 'url', group: 'social'}),
    defineField({name: 'linkedin', title: 'LinkedIn URL', type: 'url', group: 'social'}),
  ],
  preview: {
    prepare: () => ({title: 'Site Settings'}),
  },
})
