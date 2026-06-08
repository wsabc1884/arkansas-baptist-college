export interface CourseSequence {
  title: string
  file: string
  /** Department slugs this sequence belongs to */
  departments: string[]
}

const DOC_BASE = "/documents/course-sequences"

export const courseSequences: CourseSequence[] = [
  {
    title: "AA in General Studies (Interdisciplinary Studies)",
    file: `${DOC_BASE}/aa-interdisciplinary-studies.pdf`,
    departments: ["interdisciplinary-studies"],
  },
  {
    title: "BA in General Studies (Interdisciplinary Studies)",
    file: `${DOC_BASE}/ba-interdisciplinary-studies.pdf`,
    departments: ["interdisciplinary-studies"],
  },
  {
    title: "AS in General Studies / Pre-Nursing",
    file: `${DOC_BASE}/aa-pre-nursing.pdf`,
    departments: ["interdisciplinary-studies"],
  },
  {
    title: "AA in Education",
    file: `${DOC_BASE}/aa-education.pdf`,
    departments: ["interdisciplinary-studies"],
  },
  {
    title: "BS in Elementary Education",
    file: `${DOC_BASE}/bs-elementary-education.pdf`,
    departments: ["interdisciplinary-studies"],
  },
  {
    title: "BA in Criminal Justice",
    file: `${DOC_BASE}/ba-criminal-justice.pdf`,
    departments: ["social-behavioral-sciences"],
  },
  {
    title: "BA in Criminal Justice — Probation & Parole",
    file: `${DOC_BASE}/ba-criminal-justice-probation-parole.pdf`,
    departments: ["social-behavioral-sciences"],
  },
  {
    title: "BA in Human Services",
    file: `${DOC_BASE}/ba-human-services.pdf`,
    departments: ["social-behavioral-sciences"],
  },
  {
    title: "AS in Health Studies",
    file: `${DOC_BASE}/as-health-studies.pdf`,
    departments: ["interdisciplinary-studies"],
  },
  {
    title: "BS in Health, Physical Education & Recreation (HPER)",
    file: `${DOC_BASE}/bs-hper.pdf`,
    departments: ["interdisciplinary-studies"],
  },
]

export function getSequencesByDepartment(slug: string): CourseSequence[] {
  return courseSequences.filter((seq) => seq.departments.includes(slug))
}
