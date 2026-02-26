export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
    collegeName,
    mainPhone,
    mainEmail,
    applicationUrl,
    fafsaSchoolCode,
    address,
    myPortal,
    email,
    blackboard,
    ticketSubmission
  }`