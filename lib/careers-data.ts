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

// Duties and responsibilities are identical across all three Department Chair
// postings per the official job descriptions.
const DEPARTMENT_CHAIR_RESPONSIBILITIES: string[] = [
  "Manages all departmental curricula, concentrations, certificates, faculty, and instructional staff.",
  "Ensures proper instruction and delivery of curricula and that the learning environment meets curricula requirements.",
  "Communicates performance expectations to faculty and instructional staff, monitors performance (including classroom observations), analyzes key performance indicators, provides coaching and feedback, evaluates performance, recommends corrective actions, and facilitates faculty concern resolution.",
  "Assists the Vice President of Academic Affairs in creating academic goals and objectives for the campuses' Assessment Plan, and develops and coaches faculty in achieving them.",
  "Makes recommendations to the Vice President of Academic Affairs regarding the selection, retention, and assignment/scheduling of faculty and courses.",
  "Manages orientation, training, and development of faculty.",
  "Conducts regular faculty meetings to discuss policies and procedures and monitors faculty to ensure compliance.",
  "Serves as a curriculum resource for students and faculty at the campus.",
  "Conducts regular curriculum meetings to inform faculty about new and revised curriculum, courseware, and teaching materials; solicits and provides feedback to the appropriate curriculum committee; may serve as curriculum content contributor and/or reviewer; and participates in advisory committee and advisory board meetings.",
  "Monitors student grades and attendance to ensure accuracy and compliance with policies and procedures.",
  "Motivates students to actively participate in the educational process, provides academic advising, ensures all documents are entered in the student information system, notifies the Vice President of Academic Affairs about student behavioral issues, and assists with new student orientation and student concern resolution.",
  "Promotes student enrollment growth by participating in campus programs, implementing retention initiatives, attending campus events, and engaging in community and professional organizations and events.",
  "Collaborates with the Director of Career Planning and Placement to improve graduate employment outcomes in the school of study.",
  "Teaches a minimum of two (2) course sections each academic semester and performs all essential functions of an Instructor.",
  "Completes professional development activities to maintain subject matter expertise in accordance with standards and/or as assigned.",
  "Serves on College committees as assigned.",
]

export const jobPostings: JobPosting[] = [
  {
    slug: "business-administration-department-chair",
    title: "Business Administration, Department Chair",
    department: "Department of Business Administration",
    employmentType: "Full-Time Faculty",
    location: "Little Rock, AR",
    summary:
      "Senior faculty member (rank open) to serve as Department Chair for the Accounting, Business Administration, Entrepreneurship, Sports Management, and eSports programs.",
    overview: [
      "The Department of Business Administration seeks a senior faculty member whose rank is open who can serve as Department Chair for the Accounting, Business Administration, Entrepreneurship, Sports Management, and eSports programs.",
      "An earned doctorate in Accounting, Business Administration, Entrepreneurship, Sports Management, or a closely aligned field is preferred. Candidates must display excellence in research and service, and evidence of quality teaching.",
    ],
    responsibilities: DEPARTMENT_CHAIR_RESPONSIBILITIES,
    qualifications: [
      "Earned doctorate in Accounting, Business Administration, Entrepreneurship, Sports Management, or a closely aligned field is preferred.",
      "Rank is open for senior faculty candidates.",
      "Demonstrated excellence in research and service.",
      "Evidence of quality teaching.",
      "Preference given to candidates with teaching and research experience in accounting, business administration, entrepreneurship, or sports management.",
    ],
  },
  {
    slug: "public-service-department-chair",
    title: "Public Service, Department Chair",
    department: "Department of Public Service",
    employmentType: "Full-Time Faculty",
    location: "Little Rock, AR",
    summary:
      "Senior faculty member (rank open) to serve as Department Chair of the Public Administration, Human Services, and Criminal Justice programs.",
    overview: [
      "The Department of Public Service seeks a senior faculty member whose rank is open who can serve as Department Chair of the Public Administration, Human Services, and Criminal Justice programs.",
      "An earned doctorate in Social Science, Sociology, Social Work, Criminal Justice, Public Administration, or a closely aligned field is preferred. Candidates must display excellence in research and service, and evidence of quality teaching.",
    ],
    responsibilities: DEPARTMENT_CHAIR_RESPONSIBILITIES,
    qualifications: [
      "Earned doctorate in Social Science, Sociology, Social Work, Criminal Justice, Public Administration, or a closely aligned field is preferred.",
      "Rank is open for senior faculty candidates.",
      "Demonstrated excellence in research and service.",
      "Evidence of quality teaching.",
      "Preference given to candidates with teaching and research experience in human services, sociology, criminal justice, social work, or public administration.",
    ],
  },
  {
    slug: "interdisciplinary-studies-department-chair",
    title: "Interdisciplinary Studies, Department Chair",
    department: "Department of Interdisciplinary Studies",
    employmentType: "Full-Time Faculty",
    location: "Little Rock, AR",
    summary:
      "Senior faculty member (rank open) to serve as Department Chair for the Department of Interdisciplinary Studies.",
    overview: [
      "The Department of Interdisciplinary Studies seeks a senior faculty member whose rank is open who can serve as Department Chair.",
      "An earned doctorate in Education, Music Education, Humanities, or a closely aligned field is preferred. Candidates must display excellence in research and service, and evidence of quality teaching.",
    ],
    responsibilities: DEPARTMENT_CHAIR_RESPONSIBILITIES,
    qualifications: [
      "Earned doctorate in Education, Music Education, Humanities, or a closely aligned field is preferred.",
      "Rank is open for senior faculty candidates.",
      "Demonstrated excellence in research and service.",
      "Evidence of quality teaching.",
      "Preference given to candidates with teaching and research experience in education, history, communications, mathematics, science, social science, or music education.",
    ],
  },
]

export function getJobBySlug(slug: string): JobPosting | undefined {
  return jobPostings.find((job) => job.slug === slug)
}
