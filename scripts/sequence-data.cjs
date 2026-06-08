// Structured course-sequence data for all degree programs.
// Each term is a list of [courseDescription, credits] rows.
// Used by scripts/generate-sequence-pdfs.cjs to render branded PDFs.

const programs = {
  "aa-education": {
    title: "Associate of Arts in Education",
    totalHours: 63,
    updated: "Updated 1/25",
    years: [
      {
        name: "Freshman",
        terms: [
          {
            term: "Fall",
            courses: [
              ["ENG 131 English Composition I", 3],
              ["BIO 144 Biology", 3],
              ["BIO 144L Biology Lab", 1],
              ["FYE 108 First Year Experience**", 3],
              ["MIS 110 Intro to Computers", 3],
              ["EDU 113 Intro to Education, Reflective Teaching, & Multiculturalism", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["ENG 132 English Composition II", 3],
              ["PHY 145 Physical Science", 3],
              ["PHY 145L Physical Science Lab", 1],
              ["REL 106 Intro to Bible or REL 203 Bible Doctrine**", 3],
              ["KIN 130 Health & Safety or KIN 139 Physical Education", 3],
              ["BAD 103 Financial Literacy**", 3],
            ],
          },
        ],
      },
      {
        name: "Sophomore",
        terms: [
          {
            term: "Fall",
            courses: [
              ["MAT 125 Quantitative Literacy or MAT 124 College Algebra", 3],
              ["PSY 152 Gen. Psychology or HSH 250 Intro to Sociology", 3],
              ["SPC 239 Oral Communication", 3],
              ["HIS 357/358 US History I or II (Social/Behavioral Science)", 3],
              ["EDU 212 Child Psychology or EDU Elective", 2],
              ["EDU 222 School/Family/Community Partnerships or EDU Elective", 2],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["Humanities/Fine Arts Elective", 3],
              ["POL 257 US Government", 3],
              ["EDU 283 Integrating Educational Technology or EDU Elective", 3],
              ["EDU 323 Fostering Engagement/Positive Behavior or EDU Elective", 3],
              ["EDU 343 Curriculum and Methods of Teaching or EDU Elective", 3],
            ],
          },
        ],
      },
    ],
  },

  "aa-interdisciplinary-studies": {
    title: "Associate of Arts in Interdisciplinary Studies",
    totalHours: 62,
    updated: "",
    years: [
      {
        name: "Freshman",
        terms: [
          {
            term: "Fall",
            courses: [
              ["ENG 131 English Composition I", 3],
              ["BIO 144 Biology", 3],
              ["BIO 144L Biology Lab", 1],
              ["FYE 108 First Year Experience**", 3],
              ["MIS 110 Intro to Computers", 3],
              ["BAD 113 Intro to Business", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["ENG 132 English Composition II", 3],
              ["PHY 145 Physical Science", 3],
              ["PHY 145L Physical Science Lab", 1],
              ["BAD 103 Financial Literacy**", 3],
              ["KIN 130 Health & Safety or KIN 139 Physical Education", 3],
              ["Humanities/Fine Arts Elective", 3],
            ],
          },
        ],
      },
      {
        name: "Sophomore",
        terms: [
          {
            term: "Fall",
            courses: [
              ["MAT 125 Quantitative Literacy or MAT 124 College Algebra", 3],
              ["SPC 239 Oral Communication", 3],
              ["PSY 152 Gen. Psychology or HSH 250 Intro to Sociology", 3],
              ["EDU 113 Intro to Education, Reflective Teaching, & Multiculturalism", 3],
              ["ACC 215 Principles of Accounting I", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["PAD 114 Intro to Public Administration", 3],
              ["Humanities/Fine Arts Elective", 3],
              ["POL 257 US Government", 3],
              ["REL 106 Intro to Bible or REL 203 Bible Doctrine**", 3],
              ["ACC 225 Principles of Accounting II", 3],
            ],
          },
        ],
      },
    ],
  },

  "aa-pre-nursing": {
    title: "Associate of Science in Pre-Nursing",
    totalHours: 63,
    updated: "Updated 1/25",
    years: [
      {
        name: "Freshman",
        terms: [
          {
            term: "Fall",
            courses: [
              ["ENG 131 English Composition I", 3],
              ["MAT 142 College Algebra", 3],
              ["FYE 108 First Year Experience**", 3],
              ["MIS 110 Intro to Computers", 3],
              ["HUManities/Fine Arts Elective", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["ENG 132 English Composition II", 3],
              ["BIO 144/144L Biology w/ Lab", 4],
              ["BAD 103 Financial Literacy**", 3],
              ["KIN 130 Health & Safety", 3],
              ["REL 106 Intro to Bible**", 3],
            ],
          },
        ],
      },
      {
        name: "Sophomore",
        terms: [
          {
            term: "Fall",
            courses: [
              ["APS 343/343L Anatomy and Physiology I w/ Lab", 4],
              ["SPC 239 Oral Communication", 3],
              ["PSY 152 Gen. Psychology or HSH 250 Intro to Sociology", 3],
              ["HIS 357/358 US History I or II (Social/Behavioral Science)", 3],
              ["HPER 302 Nutrition", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["APS 344/344L Anatomy and Physiology II w/ Lab", 4],
              ["POL 257 US Government", 3],
              ["KIN 139 Physical Education", 3],
              ["MDT 300 Medical Terminology", 3],
              ["HPER 433 Cultural Competence and Controversial Issues in Health Education", 3],
            ],
          },
        ],
      },
    ],
  },

  "as-health-studies": {
    title: "Associate of Science in Health Studies",
    totalHours: 65,
    updated: "Updated 4/25",
    years: [
      {
        name: "Freshman",
        terms: [
          {
            term: "Fall",
            courses: [
              ["ENG 131 English Composition I", 3],
              ["MAT 125 Quantitative Literacy or MAT 124 College Algebra", 3],
              ["FYE 108 First Year Experience**", 3],
              ["KIN 130 Health & Safety or KIN 139 Physical Education", 3],
              ["MIS 110 Intro to Computers", 3],
              ["HPER 101 Foundations of Health and Physical Education", 2],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["ENG 132 English Composition II", 3],
              ["BIO 144/144L Biology w/ Lab", 4],
              ["BAD 103 Financial Literacy**", 3],
              ["REL 106 Intro to Bible or REL 203 Bible Doctrine**", 3],
              ["Humanities/Fine Arts Elective", 3],
            ],
          },
        ],
      },
      {
        name: "Sophomore",
        terms: [
          {
            term: "Fall",
            courses: [
              ["APS 343/343L Anatomy and Physiology I w/ Lab", 4],
              ["HPER 302 Nutrition or HPER Elective", 3],
              ["PSY 152 Gen. Psychology or HSH 250 Intro to Sociology", 3],
              ["SPC 239 Oral Communication", 3],
              ["HIS 357/358 US History I or II", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["POL 257 US Government", 3],
              ["APS 344/344L Anatomy and Physiology II w/ Lab", 4],
              ["KIN 303 Exercise Physiology or HPER Elective", 3],
              ["HPER 337 Community Health Agencies", 3],
              ["HPER 433 Cultural Competence and Controversial Issues in Health Education", 3],
            ],
          },
        ],
      },
    ],
  },

  "ba-criminal-justice": {
    title: "Bachelor of Arts in Criminal Justice",
    totalHours: 122,
    updated: "",
    years: [
      {
        name: "Freshman",
        terms: [
          {
            term: "Fall",
            courses: [
              ["ENG 131 English Composition I", 3],
              ["BIO 144 Biology", 3],
              ["BIO 144L Biology Lab", 1],
              ["FYE 108 First Year Experience**", 3],
              ["MIS 110 Intro to Computers", 3],
              ["Humanities/Fine Arts Elective", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["ENG 132 English Composition II", 3],
              ["PHY 145 Physical Science", 3],
              ["PHY 145L Physical Science Lab", 1],
              ["REL 106 Intro to Bible or REL 203 Bible Doctrine**", 3],
              ["SPC 239 Oral Communication", 3],
              ["BAD 103 Financial Literacy**", 3],
            ],
          },
        ],
      },
      {
        name: "Sophomore",
        terms: [
          {
            term: "Fall",
            courses: [
              ["PSY 152 Gen. Psychology", 3],
              ["HSH 255 Writing for the Social Sciences", 3],
              ["Humanities/Fine Arts Elective", 3],
              ["MAT 142 College Algebra or MAT 125 Quantitative Literacy", 3],
              ["CRJ 250 Intro to Criminal Justice", 3],
              ["KIN 130 Physical Education or KIN 139 Health and Safety", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["HSH 250 Intro to Sociology", 3],
              ["CRJ 252 Criminal Justice Ethics", 3],
              ["POL 257 US Government", 3],
              ["HSH 253 Human Growth and Development", 3],
              ["CRJ 257 Probation and Parole", 3],
            ],
          },
        ],
      },
      {
        name: "Junior",
        terms: [
          {
            term: "Fall",
            courses: [
              ["CRJ 253 Intro to Juvenile Justice", 3],
              ["CRJ 348 Record Keeping and Report Writing", 3],
              ["CRJ 350 Research Methods", 3],
              ["CRJ 351 Juvenile Delinquency", 3],
              ["CRJ 352 Intro to Corrections", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["CRJ 353 Police Admin and Management", 3],
              ["CRJ 356 Law and Society", 3],
              ["CRJ 357 Organizational Behavior in Criminal Justice", 3],
              ["CRJ 359 Juvenile Interrogations", 3],
              ["CRJ 360 Child Welfare", 3],
            ],
          },
        ],
      },
      {
        name: "Senior",
        terms: [
          {
            term: "Fall",
            courses: [
              ["CRJ 366 Case Management in Corrections", 3],
              ["CRJ 369 Police and the Community", 3],
              ["CRJ 450 Critical Issues in Criminal Justice", 3],
              ["CRJ 451 Substance Abuse Treatment", 3],
              ["CRJ 458 Senior Seminar I", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["CRJ 452 Crime and Delinquency", 3],
              ["CRJ 453 Race and Justice", 3],
              ["HSH 460 Senior Seminar II", 6],
            ],
          },
        ],
      },
    ],
  },

  "ba-criminal-justice-probation-parole": {
    title: "Bachelor of Arts in Criminal Justice (Probation & Parole)",
    totalHours: 122,
    updated: "",
    years: [
      {
        name: "Freshman",
        terms: [
          {
            term: "Fall",
            courses: [
              ["ENG 131 English Composition I", 3],
              ["BIO 144 Biology", 3],
              ["BIO 144L Biology Lab", 1],
              ["FYE 108 First Year Experience**", 3],
              ["MIS 110 Intro to Computers", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["ENG 132 English Composition II", 3],
              ["PHY 145 Physical Science", 3],
              ["PHY 145L Physical Science Lab", 1],
              ["REL 106 Intro to Bible or REL 203 Bible Doctrine**", 3],
              ["SPC 239 Oral Communication", 3],
              ["BAD 103 Financial Literacy**", 3],
            ],
          },
        ],
      },
      {
        name: "Sophomore",
        terms: [
          {
            term: "Fall",
            courses: [
              ["PSY 152 Gen. Psychology", 3],
              ["HSH 255 Writing for the Social Sciences", 3],
              ["Humanities/Fine Arts Elective", 3],
              ["MAT 142 College Algebra or MAT 125 Quantitative Literacy", 3],
              ["CRJ 250 Intro to Criminal Justice", 3],
              ["KIN 130 Physical Education or KIN 139 Health and Safety", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["HSH 250 Intro to Sociology", 3],
              ["CRJ 252 Criminal Justice Ethics", 3],
              ["POL 257 US Government", 3],
              ["HSH 253 Human Growth and Development", 3],
              ["CRJ 257 Probation and Parole", 3],
            ],
          },
        ],
      },
      {
        name: "Junior",
        terms: [
          {
            term: "Fall",
            courses: [
              ["CRJ 348 Record Keeping and Report Writing", 3],
              ["CRJ 350 Research Methods", 3],
              ["CRJ 351 Juvenile Delinquency", 3],
              ["CRJ 352 Intro to Corrections", 3],
              ["CRJ 353 Police Admin and Management", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["CRJ 356 Law and Society", 3],
              ["CRJ 357 Organizational Behavior in Criminal Justice", 3],
              ["CRJ 361 Foundations for Re-Entry", 3],
              ["CRJ 366 Case Management in Corrections", 3],
              ["CRJ 369 Police and the Community", 3],
            ],
          },
        ],
      },
      {
        name: "Senior",
        terms: [
          {
            term: "Fall",
            courses: [
              ["CRJ 450 Critical Issues in Criminal Justice", 3],
              ["CRJ 451 Substance Abuse Treatment", 3],
              ["CRJ 452 Crime and Delinquency", 3],
              ["CRJ 453 Race and Justice", 3],
              ["CRJ 458 Senior Seminar I", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["CRJ 454 Criminal Law", 3],
              ["CRJ 455 Criminal Procedures", 3],
              ["HSH 460 Senior Seminar II", 6],
            ],
          },
        ],
      },
    ],
  },

  "ba-human-services": {
    title: "Bachelor of Arts in Human Services",
    totalHours: 122,
    updated: "",
    years: [
      {
        name: "Freshman",
        terms: [
          {
            term: "Fall",
            courses: [
              ["ENG 131 English Composition I", 3],
              ["BIO 144 Biology", 3],
              ["BIO 144L Biology Lab", 1],
              ["FYE 108 First Year Experience**", 3],
              ["MIS 110 Intro to Computers", 3],
              ["Humanities/Fine Arts Elective", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["ENG 132 English Composition II", 3],
              ["PHY 145 Physical Science", 3],
              ["PHY 145L Physical Science Lab", 1],
              ["REL 106 Intro to Bible or REL 203 Bible Doctrine**", 3],
              ["SPC 239 Oral Communication", 3],
              ["BAD 103 Financial Literacy**", 3],
            ],
          },
        ],
      },
      {
        name: "Sophomore",
        terms: [
          {
            term: "Fall",
            courses: [
              ["PSY 152 Gen. Psychology", 3],
              ["HSH 250 Intro to Sociology", 3],
              ["Humanities/Fine Arts Elective", 3],
              ["MAT 142 College Algebra or MAT 125 Quantitative Literacy", 3],
              ["HSH 252 Intro to Human Services", 3],
              ["KIN 130 Physical Education or KIN 139 Health and Safety", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["HSH 253 Human Growth and Development", 3],
              ["HSH 254 Intro to Public Policy", 3],
              ["POL 257 US Government", 3],
              ["HSH 255 Writing for the Social Sciences", 3],
              ["HSH 266 Health Care and Aging", 3],
            ],
          },
        ],
      },
      {
        name: "Junior",
        terms: [
          {
            term: "Fall",
            courses: [
              ["HSH 259 Crisis Intervention", 3],
              ["HSH 351 Research Methods", 3],
              ["HSH 352 Social Problems", 3],
              ["HSH 353 Marriage and the Family", 3],
              ["HSH 354 Child Welfare", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["HSH 355 Interviewing and Counseling", 3],
              ["HSH 357 Intro to Family Violence", 3],
              ["HSH 359 Social Organization and Disorganization", 3],
              ["HSH 361 Child Development", 3],
              ["HSH 364 Adolescent Development", 3],
            ],
          },
        ],
      },
      {
        name: "Senior",
        terms: [
          {
            term: "Fall",
            courses: [
              ["HSH 450 Cultural Anthropology", 3],
              ["HSH 451 Substance Abuse Policy", 3],
              ["HSH 453 Race and Justice", 3],
              ["HSH 455 Case Management", 3],
              ["HSH 458 Senior Seminar I", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["HSH 457 Legal Issues and Ethics", 3],
              ["HSH 459 Social Psychology", 3],
              ["HSH 460 Senior Seminar II", 6],
            ],
          },
        ],
      },
    ],
  },

  "ba-interdisciplinary-studies": {
    title: "Bachelor of Arts in Interdisciplinary Studies",
    totalHours: 120,
    updated: "",
    years: [
      {
        name: "Freshman",
        terms: [
          {
            term: "Fall",
            courses: [
              ["ENG 131 English Composition I", 3],
              ["BIO 144 Biology", 3],
              ["BIO 144L Biology Lab", 1],
              ["FYE 108 First Year Experience**", 3],
              ["MIS 110 Intro to Computers", 3],
              ["Humanities/Fine Arts Elective", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["ENG 132 English Composition II", 3],
              ["PHY 145 Physical Science", 3],
              ["PHY 145L Physical Science Lab", 1],
              ["BAD 103 Financial Literacy**", 3],
              ["KIN 130 Health & Safety or KIN 139 Physical Education", 3],
              ["MAT 125 Quantitative Literacy or MAT 124 College Algebra", 3],
            ],
          },
        ],
      },
      {
        name: "Sophomore",
        terms: [
          {
            term: "Fall",
            courses: [
              ["BAD 113 Intro to Business", 3],
              ["SPC 239 Oral Communication", 3],
              ["PSY 152 Gen. Psychology or HSH 250 Intro to Sociology", 3],
              ["EDU 113 Intro to Education, Reflective Teaching, & Multiculturalism", 3],
              ["ACC 215 Principles of Accounting I", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["PAD 114 Intro to Public Administration", 3],
              ["Humanities/Fine Arts Elective", 3],
              ["POL 257 US Government", 3],
              ["REL 106 Intro to Bible or REL 203 Bible Doctrine**", 3],
              ["ACC 225 Principles of Accounting II", 3],
            ],
          },
        ],
      },
      {
        name: "Junior",
        terms: [
          {
            term: "Fall",
            courses: [
              ["HPER 320 Exercise, Wellness, and Lifestyle", 3],
              ["HPER 302 Nutrition", 3],
              ["HPER 433 Cultural Competence and Controversial Issues in Health Education", 3],
              ["BAD 213 Principles of Economics I", 3],
              ["SPO 306 Intro to Sports Management", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["HPER 333 Drug and Alcohol Education", 3],
              ["HPER 337 Community Health Agencies", 3],
              ["BAD 223 Principles of Economics II", 3],
              ["BAD 217 Principles of Marketing", 3],
              ["Elective", 3],
            ],
          },
        ],
      },
      {
        name: "Senior",
        terms: [
          {
            term: "Fall",
            courses: [
              ["HPER 410 Mental Health Education", 3],
              ["Elective", 3],
              ["Elective", 3],
              ["IDS 495 Interdisciplinary Capstone I", 4],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["Elective", 3],
              ["Elective", 3],
              ["Elective", 3],
              ["IDS 496 Interdisciplinary Capstone II", 6],
            ],
          },
        ],
      },
    ],
  },

  "bs-elementary-education": {
    title: "Bachelor of Science in Elementary Education",
    totalHours: 120,
    updated: "Updated 4/17/2023",
    years: [
      {
        name: "Freshman",
        terms: [
          {
            term: "Fall",
            courses: [
              ["ENG 131 English Composition I", 3],
              ["BIO 144 Biology", 3],
              ["BIO 144L Biology Lab", 1],
              ["FYE 108 First Year Experience**", 3],
              ["MIS 110 Intro to Computers", 3],
              ["Humanities/Fine Arts Elective", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["ENG 132 English Composition II", 3],
              ["PHY 145 Physical Science", 3],
              ["PHY 145L Physical Science Lab", 1],
              ["REL 106 Intro to Bible or REL 203 Bible Doctrine**", 3],
              ["KIN 130 Health & Safety or KIN 139 Physical Education", 3],
              ["BAD 103 Financial Literacy", 3],
            ],
          },
        ],
      },
      {
        name: "Sophomore",
        terms: [
          {
            term: "Fall",
            courses: [
              ["MAT 125 Quantitative Literacy or MAT 124 College Algebra", 3],
              ["PSY 152 Gen. Psychology or HSH 250 Intro to Sociology", 3],
              ["SPC 239 Oral Communication", 3],
              ["HIS 357/358 US History I or II (Social/Behavioral Science)", 1],
              ["EDU 113 Intro to Education, Reflective Teaching, & Multiculturalism", 3],
              ["EDU 212 Child Psychology", 2],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["POL 257 US Government", 3],
              ["ELE 213 Foundations of Literacy", 3],
              ["ELE 223 Math Concepts for Elementary Teachers", 3],
              ["EDU 222 School/Family/Community Partnerships", 2],
              ["EDU 242 Testing and Assessment Seminar", 2],
              ["HIS 350 Arkansas History", 3],
            ],
          },
        ],
      },
      {
        name: "Junior",
        terms: [
          {
            term: "Fall",
            courses: [
              ["EDU 283 Integrating Educational Technology into Teaching", 3],
              ["ELE 313 The Arts in Elementary Education", 3],
              ["EDU 303 Teaching and Assessing Children w/ Disabilities/Exceptionalities", 3],
              ["ELE 323 Literacy and Language Arts", 3],
              ["ELE 303 Physical Development, Health, Nutrition, Drug Use Effects - Grade 6", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["EDU 343 Curriculum and Methods of Teaching", 3],
              ["EDU 313 Assessment of Learning", 3],
              ["EDU 323 Fostering Engagement/Positive Behavior", 3],
              ["ELE 353 Teaching Vocabulary, Comprehension and Writing Instruction", 3],
              ["ELE 343 Literacy Assessments and Interventions", 3],
            ],
          },
        ],
      },
      {
        name: "Senior",
        terms: [
          {
            term: "Fall",
            courses: [
              ["ELE 373 Science Curriculum and Differentiated Instruction", 3],
              ["ELE 363 Social Studies Curriculum and Differentiated Methods", 3],
              ["ELE 383 Teaching Mathematics", 3],
              ["ELE 453 Teaching Residency I and Seminar", 3],
              ["ELE 333 Teaching Children's Literature in Grades K-6", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["ELE 466 Advanced Teaching Residency II and Seminar", 12],
            ],
          },
        ],
      },
    ],
  },

  "bs-hper": {
    title: "Bachelor of Science in Health, PE, and Recreation",
    totalHours: 120,
    updated: "",
    years: [
      {
        name: "Freshman",
        terms: [
          {
            term: "Fall",
            courses: [
              ["ENG 131 English Composition I", 3],
              ["MAT 125 Quantitative Literacy or MAT 124 College Algebra", 3],
              ["FYE 108 First Year Experience**", 3],
              ["MIS 110 Intro to Computers", 3],
              ["KIN 130 Health & Safety", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["ENG 132 English Composition II", 3],
              ["BIO 144 Biology w/ Lab", 4],
              ["REL 106 Intro to Bible or REL 203 Bible Doctrine**", 3],
              ["Humanities/Fine Arts Elective", 3],
              ["BAD 103 Financial Literacy", 3],
            ],
          },
        ],
      },
      {
        name: "Sophomore",
        terms: [
          {
            term: "Fall",
            courses: [
              ["PSY 152 General Psychology", 3],
              ["APS 343 Anatomy & Physiology I w/ Lab", 4],
              ["SPC 239 Oral Communications", 3],
              ["HIS 357 US History", 3],
              ["KIN 139 Physical Education", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["HPER 101 Foundations of Health and Physical Education", 2],
              ["APS 344 Anatomy & Physiology II w/ Lab", 4],
              ["POL 257 United States Government", 3],
              ["Humanities/Fine Arts Elective", 3],
              ["KIN 146 First Aid/CPR", 2],
            ],
          },
        ],
      },
      {
        name: "Junior",
        terms: [
          {
            term: "Fall",
            courses: [
              ["HPER 222 Motor Development and Learning", 3],
              ["HPER 302 Nutrition", 3],
              ["RECR 306 Indoor/Outdoor Recreation & Primary Games", 3],
              ["KIN 303 Exercise Physiology", 3],
              ["HPER 320 Exercise, Wellness, and Lifestyle", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["HPER 202 Sports Officiating", 3],
              ["HPER 314 Family, Life, and Sex Education", 3],
              ["HPER 333 Drug and Alcohol Education", 3],
              ["HPER 328 Coaching and Theory Methods", 3],
              ["HPER 200 Individual, Dual, and Team Sports", 2],
              ["REC 329 Leadership in Recreation", 3],
            ],
          },
        ],
      },
      {
        name: "Senior",
        terms: [
          {
            term: "Fall",
            courses: [
              ["KIN 406 Kinesiology", 3],
              ["HPER 410 Mental Health Education", 3],
              ["HPER 430 Organization and Administration of Health, PE, Recreation, and Athletic Programs", 3],
              ["KIN 431 Care and Prevention of Injuries", 3],
              ["HPER 433 Exercise Assessment", 3],
            ],
          },
          {
            term: "Spring",
            courses: [
              ["HPER 337 Community Health Agencies", 3],
              ["HPER 433 Cultural Competence and Controversial Issues in Health Education", 3],
              ["RECR 460 Field Experience", 6],
            ],
          },
        ],
      },
    ],
  },
};

module.exports = { programs };
