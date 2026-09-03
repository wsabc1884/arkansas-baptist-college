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

export const jobPostings: JobPosting[] = [
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
  {
    slug: "director-of-student-activities",
    title: "Director of Student Activities",
    department: "Division for Student Affairs",
    employmentType: "Full-Time",
    location: "Little Rock, AR",
    summary:
      "Responsible for creating and supporting a high-quality student life experience, leading co-curricular learning, student leadership development, engagement, and retention initiatives.",
    overview: [
      "The Director of Student Activities is responsible for creating and supporting a high-quality student life experience for all students at Arkansas Baptist College. The Director creates, implements, and facilitates opportunities for co-curricular learning and student leadership development, promotes proactive retention activities and student engagement, and collaborates with college organizations and departments in a professional manner.",
      "The Director functions as a student advocate by responding directly to student needs and issues affecting student well-being, and reports to the Dean of Students. The Director is responsible for managing all aspects of student engagement, including programming, internal and external reporting, retention, and external student engagement. Superior leadership development planning, organization, supervision, interpersonal, and scheduling skills are essential.",
      "The duties of this position require considerable evening and weekend work, including attendance at meetings of student organizations and a variety of events. Office hours may be adjusted if working late nights and weekends, with supervisor approval.",
    ],
    responsibilities: [
      "Manage the Office of Student Activities, including strategic planning, developing and adhering to the area budget, ultimate responsibility for programs, and leadership development for student leaders, clubs, organizations, and groups served by Student Engagement.",
      "Oversee the overall functioning of the Office of Student Activities, developing and monitoring the office budget to ensure effective fiscal management.",
      "Provide strategic direction and ensure thorough assessment of office programs and services reflecting a holistic approach to student outreach and learning.",
      "Serve as Chair of the Homecoming Committee (Miss and Mister ABC Coronation and week of student events): prepare logistics and budget, convene and facilitate weekly meetings, negotiate contracts, and develop marketing plans for the annual Homecoming week activities.",
      "Serve as the primary advisor to the Student Government Association (SGA) and Greek Life organizations, providing guidance on policies and procedures, financial management, budgeting, marketing, communication, vendor and donor relationships, student travel, inventory management, and document review.",
      "Offer leadership development, training, and support to student leaders, advisors, and the SGA, and facilitate risk management, programming, event logistics, recruitment, retention, and program evaluation.",
      "Develop collaborative relationships with key campus stakeholders, including Greek Organizations, the Office of Student Conduct, Student Government Association, Campus Security, and Facilities Departments.",
      "Lead the development, planning, implementation, and assessment of all new and transfer undergraduate student orientation programs for the fall, spring, and summer semesters, collaborating with Academic Affairs, Student Affairs, and Enrollment Management (Admissions and Financial Aid).",
      "Recruit, train, and mentor New Student Orientation Leaders and peer mentors; evaluate program effectiveness against student learning outcomes and student/parent satisfaction, and use findings to improve and develop programs.",
      "Promote and foster an environment of diversity, equity, and inclusion among students and staff, and partner with the Department of Residential Life and Housing on programming and educational events.",
      "Ensure student organization handbooks, trainings, and paperwork are updated and aligned with college policies and procedures.",
      "Engage in ongoing professional development through conferences, workshops, and webinars, and participate in college-appointed committees as assigned.",
      "Supervise student workers and collaborate with on-campus and off-campus advisors for student organizations.",
      "Undertake other duties and responsibilities as assigned by college administration in support of the strategic goals and mission of the college.",
    ],
    qualifications: [
      "Bachelor's degree from an accredited institution in psychology, education, social work, or a related field (required).",
      "Minimum of two years of experience as a staff member or administrator directly working with student engagement and/or retention services at an institution of higher education (required).",
      "Master's degree in Student Affairs Administration, Higher Education, Education, Counseling, Social Work, or a related field (preferred).",
      "Experience with college student leadership development, student conduct, and working with an urban/diverse student population.",
      "Experience providing intervention to college students lacking basic needs and other barriers to well-being.",
      "Experience managing business social media accounts.",
      "Knowledge of trends, issues, and accepted practices relevant to higher education, student affairs, student leadership development, and student well-being.",
      "Proficiency in MS Word, PowerPoint, Excel, and Outlook; ability to develop marketing and communication plans; excellent diplomacy, interpersonal, and customer service skills; strong planning, organizational, and analytical skills with attention to detail.",
      "Ability to deliver excellent written and oral communication appropriate to the audience, prioritize responsibilities, and synthesize complex information into clear recommendations.",
      "Primary work location is an office environment; occasional lifting, pushing, climbing, and pulling may be required, along with occasional evening and/or weekend work.",
    ],
  },
]

export function getJobBySlug(slug: string): JobPosting | undefined {
  return jobPostings.find((job) => job.slug === slug)
}
