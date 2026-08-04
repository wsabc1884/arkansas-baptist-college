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
  /** Optional list of specific open positions/subject areas within this posting. */
  availablePositions?: string[]
  /** Optional per-posting application email. Falls back to CAREERS_EMAIL when omitted. */
  applicationEmail?: string
  /** Optional custom "how to apply" instructions. Falls back to the default resume/cover-letter text. */
  applicationInstructions?: string
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
  {
    slug: "digital-teaching-learning-activity-director",
    title: "Digital Teaching and Learning, Activity Director",
    department: "Office of Title III",
    employmentType: "Full-Time",
    location: "Little Rock, AR",
    summary:
      "Director for the Strengthening the College Through Digital Teaching and Learning Activity, leading digital teaching initiatives, faculty development, and online/hybrid course quality.",
    overview: [
      "The Department of Business Administration seeks to hire a Director for the Strengthening the College Through Digital Teaching and Learning Activity. A master's degree is required in Business Administration or a related field.",
      "Candidates must display excellence in research and service, and evidence of quality teaching. Preference will be given to candidates with teaching and research experience in Business Administration.",
    ],
    responsibilities: [
      "Develop, implement, and continuously improve strategies that strengthen teaching and learning through digital technologies while aligning initiatives with departmental and institutional strategic goals.",
      "Design, coordinate, and deliver faculty orientation, professional development, training, workshops, and individualized coaching on educational technology, online and hybrid instruction, instructional design, and evidence-based teaching practices.",
      "Communicate performance expectations to faculty; monitor instructional effectiveness through classroom observations and key performance indicators; provide coaching, feedback, performance evaluations, and recommendations regarding faculty selection, retention, assignments, scheduling, and corrective actions when appropriate.",
      "Conduct regular faculty meetings to communicate policies, procedures, curriculum updates, and instructional best practices while facilitating faculty collaboration and concern resolution.",
      "Oversee the development, implementation, and continuous improvement of online, hybrid, and technology-enhanced courses, ensuring instructional quality, accessibility, accreditation, copyright, and institutional compliance.",
      "Promote and support the effective use of learning management systems (LMS), educational technologies, and digital resources to enhance teaching, student engagement, retention, and academic success.",
      "Serve as a curriculum resource by leading curriculum meetings, reviewing and providing feedback on curriculum, courseware, teaching materials, and instructional resources, and participating as a curriculum contributor or reviewer when appropriate.",
      "Plan, implement, manage, and evaluate digital teaching and learning projects, including project timelines, budgets, resources, and coordination with academic departments, Information Technology, student support services, and external partners.",
      "Identify, evaluate, and recommend instructional technologies, digital learning resources, guides, and training materials that support faculty and student success.",
      "Collect, analyze, and report data related to digital learning initiatives, faculty participation, student success, and key performance indicators to evaluate effectiveness and recommend continuous improvements based on assessment results and emerging best practices.",
      "Assist the Department Chair in developing department goals and assessment plans while coaching faculty in achieving institutional assessment objectives.",
      "Promote student enrollment, retention, engagement, and achievement through participation in community outreach, student orientation, academic advising, and initiatives that improve equitable access to technology and online learning resources.",
      "Monitor student grades and attendance to ensure accuracy and compliance with institutional policies, address student concerns, document advising activities in the student information system, and notify the Department Chair regarding behavioral or academic issues.",
      "Teach a minimum of two (2) course sections each academic semester and perform all essential duties and responsibilities of an Instructor.",
      "Collaborate with department leadership, faculty, Information Technology, student support services, academic administration, and external stakeholders to communicate project goals, progress, outcomes, and institutional initiatives.",
      "Complete ongoing professional development to maintain subject matter expertise and remain current with instructional technologies, digital learning trends, and higher education best practices.",
      "Serve on college committees as assigned.",
    ],
    qualifications: [
      "Master's degree in Business Administration, or a related field (doctorate may be preferred).",
      "Experience in higher education teaching, instructional design, faculty development, or academic technology.",
      "Knowledge of learning management systems, online pedagogy, accessibility standards, and digital learning tools.",
      "Strong leadership, project management, communication, and analytical skills.",
      "Ability to lead cross-functional teams and manage multiple initiatives simultaneously.",
    ],
  },
  {
    slug: "general-studies-instructor",
    title: "General Studies Instructor",
    department: "Department of General Studies",
    employmentType: "Full-Time & Adjunct",
    location: "Little Rock, AR",
    applicationEmail: "HR@arkansasbaptist.edu",
    summary:
      "Full-time and adjunct instructor positions in the Department of General Studies for the 2026-27 academic year, beginning Fall 2026.",
    overview: [
      "Arkansas Baptist College invites applicants for full-time and adjunct instructors in the Department of General Studies. The teaching opportunities for instructors are nine-month appointments, and for adjuncts are semester to semester.",
      "The contract is for the 2026-27 academic year, starting the Fall 2026 semester.",
    ],
    availablePositions: ["Mathematics", "History", "Psychology", "English", "Speech"],
    responsibilities: [
      "Full-time instructors teach 12 undergraduate hours per semester; adjunct instructors teach 3-11 hours.",
      "Serve as academic advisor to General Studies students.",
      "Hold office hours.",
      "Other responsibilities as assigned.",
    ],
    qualifications: [
      "Master's degree in the area of concentration or a related field.",
      "A minimum of 18 graduate hours in the area of concentration.",
      "An earned doctorate degree is preferred (ABDs will be considered).",
    ],
    applicationInstructions:
      "A complete application packet must include a letter of application, curriculum vita, master and doctorate transcripts, and contact information for three references. Official transcripts, three letters of recommendation, and a completed ABC Application for Employment will be required for the successful candidate after selection. Applications will be reviewed immediately.",
  },
]

export function getJobBySlug(slug: string): JobPosting | undefined {
  return jobPostings.find((job) => job.slug === slug)
}
