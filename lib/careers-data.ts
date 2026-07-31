export const CAREERS_EMAIL = "Applications@arkansasbaptist.edu"

export interface JobPosting {
  slug: string
  title: string
  department: string
  employmentType: string
  location: string
  summary: string
  /** Full overview paragraphs describing the role. */
  overview: string[]
  responsibilities: string[]
  qualifications: string[]
}

// NOTE: The content below is PLACEHOLDER text. Replace each field with the
// real details from the job description document. The page layout, routing,
// and application instructions are complete and will update automatically
// once these values are filled in.
export const jobPostings: JobPosting[] = [
  {
    slug: "job-one",
    title: "Job Title One (Placeholder)",
    department: "Department Name",
    employmentType: "Full-Time",
    location: "Little Rock, AR",
    summary:
      "Placeholder summary for the first position. Replace this with the short description from the job posting document.",
    overview: [
      "Placeholder overview paragraph. Describe the purpose of the role, who it reports to, and how it supports the mission of Arkansas Baptist College.",
      "Add any additional context about the position, the team, or the department here.",
    ],
    responsibilities: [
      "Placeholder responsibility one.",
      "Placeholder responsibility two.",
      "Placeholder responsibility three.",
      "Placeholder responsibility four.",
    ],
    qualifications: [
      "Placeholder qualification one (e.g., required degree or certification).",
      "Placeholder qualification two (e.g., years of experience).",
      "Placeholder qualification three (e.g., preferred skills).",
    ],
  },
  {
    slug: "job-two",
    title: "Job Title Two (Placeholder)",
    department: "Department Name",
    employmentType: "Full-Time",
    location: "Little Rock, AR",
    summary:
      "Placeholder summary for the second position. Replace this with the short description from the job posting document.",
    overview: [
      "Placeholder overview paragraph. Describe the purpose of the role, who it reports to, and how it supports the mission of Arkansas Baptist College.",
      "Add any additional context about the position, the team, or the department here.",
    ],
    responsibilities: [
      "Placeholder responsibility one.",
      "Placeholder responsibility two.",
      "Placeholder responsibility three.",
      "Placeholder responsibility four.",
    ],
    qualifications: [
      "Placeholder qualification one (e.g., required degree or certification).",
      "Placeholder qualification two (e.g., years of experience).",
      "Placeholder qualification three (e.g., preferred skills).",
    ],
  },
  {
    slug: "job-three",
    title: "Job Title Three (Placeholder)",
    department: "Department Name",
    employmentType: "Full-Time",
    location: "Little Rock, AR",
    summary:
      "Placeholder summary for the third position. Replace this with the short description from the job posting document.",
    overview: [
      "Placeholder overview paragraph. Describe the purpose of the role, who it reports to, and how it supports the mission of Arkansas Baptist College.",
      "Add any additional context about the position, the team, or the department here.",
    ],
    responsibilities: [
      "Placeholder responsibility one.",
      "Placeholder responsibility two.",
      "Placeholder responsibility three.",
      "Placeholder responsibility four.",
    ],
    qualifications: [
      "Placeholder qualification one (e.g., required degree or certification).",
      "Placeholder qualification two (e.g., years of experience).",
      "Placeholder qualification three (e.g., preferred skills).",
    ],
  },
]

export function getJobBySlug(slug: string): JobPosting | undefined {
  return jobPostings.find((job) => job.slug === slug)
}
