// ── Site Settings (singleton) ──────────────────────────────────
export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  collegeName,
  collegeAddress,
  mainPhone,
  mainEmail,
  applicationUrl,
  fafsaSchoolCode,
  myPortal,
  email,
  blackboard,
  ticketSubmission,
  logo,
  stat1Value, stat1Label,
  stat2Value, stat2Label,
  stat3Value, stat3Label,
  stat4Value, stat4Label,
  giveHeading, giveBody, giveThankYou, giveDonateUrl,
  facebook,
  instagram,
  twitter,
  youtube,
  linkedin
}`

// ── Pages ──────────────────────────────────────────────────────
export const ALL_PAGES_QUERY = `*[_type == "page"] | order(title asc){
  _id,
  title,
  "slug": slug.current,
  heroSubtitle,
  heroDescription,
  heroImage,
  lastUpdated
}`

export const PAGE_BY_SLUG_QUERY = `*[_type == "page" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  heroSubtitle,
  heroDescription,
  heroImage,
  body,
  lastUpdated,
  seo
}`

// ── News Articles ──────────────────────────────────────────────
export const ALL_NEWS_QUERY = `*[_type == "newsArticle"] | order(publishDate desc){
  _id,
  title,
  "slug": slug.current,
  publishDate,
  excerpt,
  image
}`

export const NEWS_BY_SLUG_QUERY = `*[_type == "newsArticle" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  publishDate,
  excerpt,
  image,
  body
}`

// ── Events ─────────────────────────────────────────────────────
export const ALL_EVENTS_QUERY = `*[_type == "event"] | order(date asc){
  _id,
  title,
  date,
  endDate,
  location,
  image,
  description
}`

export const UPCOMING_EVENTS_QUERY = `*[_type == "event" && date >= now()] | order(date asc){
  _id,
  title,
  date,
  endDate,
  location,
  image,
  description
}`

// ── Staff Members ──────────────────────────────────────────────
export const ALL_STAFF_QUERY = `*[_type == "staffMember"] | order(name asc){
  _id,
  name,
  title,
  department,
  email,
  phone,
  bio,
  photo,
  showOnDirectory,
  showOnAdminPage
}`

export const DIRECTORY_STAFF_QUERY = `*[_type == "staffMember" && showOnDirectory == true] | order(name asc){
  _id,
  name,
  title,
  department,
  email,
  phone,
  bio,
  photo
}`

export const ADMIN_PAGE_STAFF_QUERY = `*[_type == "staffMember" && showOnAdminPage == true] | order(name asc){
  _id,
  name,
  title,
  department,
  email,
  phone,
  bio,
  photo
}`

export const STAFF_BY_DEPARTMENT_QUERY = `*[_type == "staffMember" && department == $department] | order(name asc){
  _id,
  name,
  title,
  department,
  email,
  phone,
  bio,
  photo
}`

// ── President Page (singleton) ─────────────────────────────────
export const PRESIDENT_PAGE_QUERY = `*[_type == "presidentPage"][0]{
  presidentName,
  presidentTitle,
  presidentInitials,
  presidentPhoto,
  bioParagraphs,
  quote,
  contactEmail,
  contactPhone,
  contactAddress,
  commitmentHeading,
  commitmentBody,
  commitmentPillars
}`

// ── Documents & Forms ──────────────────────────────────────────
export const ALL_DOCUMENTS_QUERY = `*[_type == "documentForm"] | order(title asc){
  _id,
  title,
  description,
  "fileUrl": file.asset->url,
  category,
  lastUpdated
}`

export const DOCUMENTS_BY_CATEGORY_QUERY = `*[_type == "documentForm" && category == $category] | order(title asc){
  _id,
  title,
  description,
  "fileUrl": file.asset->url,
  category,
  lastUpdated
}`
