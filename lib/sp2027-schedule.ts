export type CourseSection = {
  code: string
  title: string
  credits: number
  instructor: string
  days: string
  time: string
  location: string
  online: boolean
  dates: string
  comment?: string
}

export type Department = {
  name: string
  sections: CourseSection[]
}

const TERM_DATES = "01/11/2027 – 04/30/2027"

type Row = [
  code: string,
  title: string,
  credits: number,
  instructor: string,
  days?: string,
  time?: string,
  room?: string,
  extra?: { dates?: string; comment?: string; online?: boolean },
]

function toSection([code, title, credits, instructor, days = "", time = "", room = "", extra = {}]: Row): CourseSection {
  const online = extra.online ?? !room
  return {
    code,
    title,
    credits,
    instructor: instructor || "TBA",
    days: days || (online ? "Online" : "TBA"),
    time: time || (online ? "Asynchronous" : "TBA"),
    location: room || "Web-based",
    online,
    dates: extra.dates ?? TERM_DATES,
    comment: extra.comment,
  }
}

const raw: Record<string, Row[]> = {
  Accounting: [
    ["ACC 225 01", "Principles of Accounting", 3, "Irish Anderson", "MW", "5:00 PM – 6:15 PM", "GEN1 204"],
    ["ACC 253 W1", "Intermediate Accounting", 3, "Irish Anderson"],
    ["ACC 315 W1", "Accounting for Government", 3, "Stephanie R Cox"],
    ["ACC 413 W1", "Auditing Theory and Practice", 3, "Stephanie R Cox"],
    ["ACC 419 W1", "Advanced Financial Accounting", 3, "Stephanie R Cox"],
  ],
  "Anatomy & Physiology": [
    ["APS 343L 01", "Human Anatomy and Physiology Lab", 1, "Taiquitha Robins", "M", "3:00 PM – 3:50 PM", "SCI SB102"],
    ["APS 344 01", "Human Anatomy/Physiology", 3, "Taiquitha Robins", "MWF", "2:00 PM – 2:50 PM", "SCI SB102"],
    ["APS 344 W1", "Human Anatomy/Physiology", 3, "Taiquitha Robins"],
    ["APS 344L W1", "Anatomy & Physiology Lab", 1, "Taiquitha Robins"],
  ],
  Humanities: [
    ["ART 137 01", "Humanities", 3, "Diann Parker", "TR", "1:00 PM – 2:15 PM", "GEN1 107"],
    ["ART 137 02", "Humanities", 3, "Diann Parker", "TR", "2:25 PM – 3:40 PM", "GEN1 107"],
    ["ART 137 W1", "Humanities", 3, "Diann Parker"],
    ["ART 231 01", "Art Appreciation", 3, "Diann Parker", "MWF", "11:00 AM – 11:50 AM", "GEN1 107"],
    ["ART 231 W1", "Art Appreciation", 3, "Kreylon Gulley"],
  ],
  "Business Administration": [
    ["BAD 103 01", "Financial Literacy", 3, "Miriam N. Karanja", "TR", "4:30 PM – 5:45 PM", "GEN1 206"],
    ["BAD 103 W1", "Financial Literacy", 3, "Miriam N. Karanja"],
    ["BAD 113 01", "Intro to Business", 3, "Janay Palmer", "TR", "10:00 AM – 11:15 AM", "GEN1 206"],
    ["BAD 113 W1", "Intro to Business", 3, "Janay Palmer"],
    ["BAD 211 01", "Business Math", 3, "Miriam N. Karanja", "MW", "4:30 PM – 5:45 PM", "OLDM 208"],
    ["BAD 217 W1", "Principles of Marketing", 3, "Willie Hicks"],
    ["BAD 223 01", "Principles of Economics I", 3, "Miriam N. Karanja", "TR", "6:00 PM – 7:15 PM", "SCI SB202"],
    ["BAD 223 W1", "Principles of Economics I", 3, "Miriam N. Karanja"],
    ["BAD 311 W1", "Management to Organizations", 3, "Nedra Allen"],
    ["BAD 320 W1", "Business Ethics", 3, "Lee Honorable"],
    ["BAD 322 W1", "Corporate Culture", 3, "Darryl Lunon"],
    ["BAD 412 W1", "Business Policy and Strategy", 3, "Nedra Allen"],
    ["BAD 414 W1", "Business Production/Operations", 3, "Janay Palmer"],
    ["BAD 417 01", "Research Methods", 3, "Michal Harris", "R", "6:00 PM – 8:40 PM", "GEN1 206"],
    ["BAD 422 01", "Employee and Labor Relations", 3, "Janay Palmer", "MW", "6:00 PM – 7:15 PM", "SCI SB202"],
    ["BAD 423 W1", "Managerial Leadership", 3, "Janay Palmer"],
    ["BAD 428 01", "Senior Internship II", 6, "Edward Wallace", "T", "6:00 PM – 8:40 PM", "GEN1 108"],
  ],
  Biology: [
    ["BIO 144 01", "General Biology", 3, "Taiquitha Robins", "MW", "9:25 AM – 10:40 AM", "SCI SB102"],
    ["BIO 144 02", "General Biology", 3, "Taiquitha Robins", "TR", "1:00 PM – 2:15 PM", "SCI SB102"],
    ["BIO 144L 01", "Biology Lab", 1, "Taiquitha Robins", "M", "11:00 AM – 11:50 AM", "SCI SB102"],
    ["BIO 144L 02", "Biology Lab", 1, "Taiquitha Robins", "T", "2:30 PM – 3:20 PM", "SCI SB102"],
  ],
  "Criminal Justice": [
    ["CRJ 250 01", "Introduction to Criminal Justice", 3, "Myra Summers-Woolfolk", "M", "6:00 PM – 8:40 PM", "GEN1 317"],
    ["CRJ 252 01", "Ethics in Criminal Justice", 3, "Myra Summers-Woolfolk", "MW", "4:00 PM – 5:15 PM", "GEN1 317"],
    ["CRJ 350 01", "Research Methods in Criminal Justice", 3, "Michal Harris", "R", "6:00 PM – 8:40 PM", "GEN1 206"],
    ["CRJ 357 01", "Organizational Behavior", 3, "Michal Harris"],
    ["CRJ 360 01", "Child Welfare", 3, "Myra Summers-Woolfolk", "W", "6:00 PM – 8:40 PM", "GEN1 206"],
    ["CRJ 452 W1", "Crime and Delinquency", 3, "Myra Summers-Woolfolk"],
    ["CRJ 453 W1", "Race and Justice", 3, "Myra Summers-Woolfolk"],
    ["CRJ 460 01", "Criminal Justice Senior Seminar", 6, "Edward Wallace", "T", "6:00 PM – 8:40 PM", "GEN1 108"],
  ],
  English: [
    ["ENG 131 W1", "English Comp. I", 3, "Sonia Brown"],
    ["ENG 132 01", "English Comp II", 3, "Janet Anokye", "TR", "9:25 AM – 10:40 AM", "GEN1 107"],
    ["ENG 132 02", "English Comp II", 3, "Janet Anokye", "TR", "1:00 PM – 2:15 PM", "GEN1 204"],
    ["ENG 132 03", "English Comp II", 3, "Janet Anokye", "M", "6:00 PM – 8:40 PM", "GEN1 107"],
    ["ENG 132 W1", "English Comp II", 3, "Janet Anokye"],
    ["ENG 234 W1", "World Literature II", 3, "Janet Anokye"],
  ],
  Entrepreneurship: [
    ["ENT 353 01", "Entrepreneurship", 3, "Fitzgerald Hill", "MW", "10:00 AM – 11:15 AM", "COMU 311"],
    ["ENT 421 W1", "Strategies for Entrepreneurship", 3, "Fitzgerald Hill", "TR", "1:00 PM – 2:15 PM", "COMU 311"],
    ["ENT 425 W1", "Entrepreneurship and Small Business", 3, ""],
    ["ENT 426 W1", "Entrepreneurial Finance", 3, ""],
  ],
  "First Year Experience": [
    ["FYE 108 01", "First Year Experience", 3, "Margaret Boyd Owens", "MWF", "11:00 AM – 11:50 AM", "GEN1 206"],
    ["FYE 108 02", "First Year Experience", 3, "Monica Simpson", "R", "6:00 PM – 8:40 PM", "GEN1 107"],
    ["FYE 108 W1", "First Year Experience", 3, "Margaret Boyd Owens"],
  ],
  History: [
    ["HIS 256 01", "Western Civilization II", 3, "Edmond Davis", "T", "6:00 PM – 8:40 PM", "OLDM 208"],
    ["HIS 358 01", "US History II", 3, "Edmond Davis", "MW", "9:25 AM – 10:40 AM", "GEN1 204"],
    ["HIS 358 02", "US History II", 3, "Edmond Davis", "MWF", "11:00 AM – 11:50 AM", "GEN1 204"],
    ["HIS 358 03", "US History II", 3, "Edmond Davis", "R", "6:00 PM – 8:40 PM", "OLDM 208"],
  ],
  "Health & Physical Education": [
    ["HPER 302 W1", "Nutrition", 3, "Lee Pippins"],
    ["HPER 433 W1", "Cultural Competence and Health", 3, "Margaret Boyd Owens"],
    ["KIN 130 01", "Health and Safety", 3, "Kyle Hartsfield", "MW", "10:00 AM – 11:15 AM", "GEN1 108"],
    ["KIN 130 W1", "Health and Safety", 3, "William Torrence"],
    ["KIN 139 01", "Physical Education", 3, "Marlow Rockwell", "MW", "11:00 AM – 12:15 PM", "OLDM 208"],
    ["KIN 139 W1", "Physical Education", 3, "Lee Pippins"],
  ],
  "Human Services": [
    ["HSH 252 01", "Intro to Human Services", 3, "Cheryl Gittens", "T", "6:00 PM – 8:40 PM", "GEN1 204"],
    ["HSH 253 01", "Human Growth/Development", 3, "Cheryl Gittens", "TR", "2:25 PM – 3:40 PM", "GEN1 204"],
    ["HSH 255 01", "Writing in the Social Sciences", 3, "Caron Lott", "M", "6:00 PM – 8:40 PM", "OLDM 208", { comment: "Web-enhanced" }],
    ["HSH 259 W1", "Crisis Intervention", 3, "Cheryl Gittens"],
    ["HSH 350 W1", "Race, Religion, and Culture", 3, "Myra Summers-Woolfolk"],
    ["HSH 351 01", "Research Methods", 3, "Michal Harris", "R", "6:00 PM – 8:40 PM", "GEN1 206"],
    ["HSH 352 01", "Social Problems", 3, "Cheryl Gittens", "TR", "4:30 PM – 5:45 PM", "GEN1 204"],
    ["HSH 354 01", "Child Welfare", 3, "Myra Summers-Woolfolk", "W", "6:00 PM – 8:40 PM", "GEN1 206"],
    ["HSH 450 W1", "Cultural Anthropology", 3, "Cheryl Gittens"],
    ["HSH 452 W1", "Crime and Delinquency", 3, "Myra Summers-Woolfolk"],
    ["HSH 454 W1", "Global Economy, Culture, and Society", 3, "Cheryl Gittens"],
    ["HSH 459 W1", "Social Psychology", 3, "Caron Lott"],
    ["HSH 460 01", "Human Services Senior Seminar", 6, "Edward Wallace", "T", "6:00 PM – 8:40 PM", "GEN1 108"],
  ],
  "Interdisciplinary Studies": [["IDS 496 W1", "IDS Capstone II", 6, "Margaret Boyd Owens"]],
  Mathematics: [
    ["MAT 125 01", "Quantitative Literacy", 3, "Rosetter Dirden", "T", "6:00 PM – 8:40 PM", "GEN1 206"],
    ["MAT 125 W1", "Quantitative Literacy", 3, "Joann Scales"],
    ["MAT 142 01", "College Algebra", 3, "Rosetter Dirden", "R", "6:00 PM – 8:40 PM", "GEN1 317"],
    ["MAT 142 02", "College Algebra", 3, "Khulood Mayyah", "MW", "1:00 PM – 2:15 PM", "SCI SB202"],
    ["MAT 142 W1", "College Algebra", 3, "Joann Scales", "", "", "", { dates: "03/01/2027 – 04/30/2027" }],
  ],
  "Management Information Systems": [
    ["MIS 110 01", "Introduction to Computers", 3, "Tabatha Scott", "TR", "9:25 AM – 10:40 AM", "SCI SB201"],
    ["MIS 110 02", "Introduction to Computers", 3, "Tabatha Scott", "TR", "1:00 PM – 2:15 PM", "SCI SB201"],
    ["MIS 110 03", "Introduction to Computers", 3, "", "MW", "9:25 AM – 10:40 AM", "SCI SB201", { dates: "01/11/2027 – 05/07/2027" }],
    ["MIS 110 04", "Introduction to Computers", 3, "Tabatha Scott", "T", "6:00 PM – 8:40 PM", "SCI SB201"],
    ["MIS 110 W1", "Introduction to Computers", 3, "Tabatha Scott"],
  ],
  Music: [
    ["MUS 107 W1", "Music Appreciation", 3, "Diann Parker"],
    ["MUS 116 W1", "Music Theory II", 3, "Emmanuel Scales"],
    ["MUS 127 W1", "Aural Skills II", 1, "Emmanuel Scales"],
    ["MUS 318L W1", "Applied Lower Brass", 1, "Emmanuel Scales"],
    ["MUS 400 W1", "Orchestration & Arranging", 3, "Emmanuel Scales"],
    ["MUS 420 W1", "Instrumental/Choral Conducting", 2, "Emmanuel Scales"],
  ],
  "Public Administration": [
    ["PAD 114 50", "Intro to Public Administration", 3, "Caron Lott", "MTWR", "10:00 AM – 11:15 AM", "SCI SB202", { dates: "03/01/2027 – 04/30/2027" }],
    ["PAD 209 W1", "E-Governance", 3, "Michal Harris", "T", "6:00 PM – 8:40 PM", "", { online: true }],
    ["PAD 223 01", "Technical Writing", 3, "Caron Lott", "M", "6:00 PM – 8:40 PM", "OLDM 208", { comment: "Web-enhanced" }],
    ["PAD 342 01", "Intro to Research Methods", 3, "Michal Harris", "R", "6:00 PM – 8:40 PM", "GEN1 206"],
    ["PAD 354 01", "Public Policy Process and Analysis", 3, "Michal Harris", "TR", "1:00 PM – 2:15 PM", "GEN1 317"],
    ["PAD 364 W1", "Arkansas Government", 3, "", "TR", "4:00 PM – 5:15 PM", "", { online: true }],
    ["PAD 426 01", "Senior Seminar II", 6, "Edward Wallace", "T", "6:00 PM – 8:40 PM", "GEN1 108"],
    ["PAD 428 01", "Grants and Nonprofit Management", 3, "Michal Harris", "W", "6:00 PM – 8:40 PM", "GEN1 317"],
  ],
  "Physical Science": [
    ["PHY 145 01", "Physical Science Lecture", 3, "Khulood Mayyah", "TR", "9:25 AM – 10:40 AM", "SCI SB102"],
    ["PHY 145 02", "Physical Science Lecture", 3, "Khulood Mayyah", "MW", "10:00 AM – 11:15 AM", "SCI SB101"],
    ["PHY 145 W1", "Physical Science Lecture", 3, "Khulood Mayyah"],
    ["PHY 145L 01", "Physical Science Lab", 1, "Khulood Mayyah", "T", "11:00 AM – 11:50 AM", "SCI SB102"],
    ["PHY 145L 02", "Physical Science Lab", 1, "Khulood Mayyah", "M", "11:30 AM – 12:20 PM", "SCI SB101"],
    ["PHY 145L W1", "Physical Science Lab", 1, "Khulood Mayyah"],
  ],
  "Political Science": [["POL 257 W1", "United States Government", 3, "Edmond Davis"]],
  Psychology: [
    ["PSY 152 01", "General Psychology", 3, "Christina Rockwell", "T", "6:00 PM – 8:40 PM", "SCI SB203"],
    ["PSY 152 W1", "General Psychology", 3, "Christina Rockwell"],
  ],
  "Religious Studies": [
    ["REL 106 01", "Introduction to the Bible", 3, "", "MW", "8:00 AM – 9:15 AM", "GEN1 107"],
    ["REL 106 02", "Introduction to the Bible", 3, "", "M", "6:00 PM – 8:40 PM", "SCI SB203"],
    ["REL 106 W1", "Introduction to the Bible", 3, "Nathanael Palmer"],
    ["REL 106 W2", "Introduction to the Bible", 3, "Nathanael Palmer"],
    ["REL 301 W1", "Expository Preaching", 3, "Phillip Pointer"],
    ["REL 403 W1", "Systematic Theology", 3, "Phillip Pointer"],
    ["REL 404 W1", "Hermeneutics", 3, "Phillip Pointer"],
    ["REL 405 W1", "Pauline Epistles", 3, "Nathanael Palmer"],
    ["REL 407B W1", "Senior Seminar", 3, "Nathanael Palmer"],
  ],
  "Speech Communication": [
    ["SPC 239 01", "Oral Communication", 3, "Michelle Grice", "M", "6:00 PM – 8:40 PM", "GEN1 206"],
    ["SPC 239 02", "Oral Communication", 3, "Michelle Grice", "R", "6:00 PM – 8:40 PM", "GEN1 204"],
    ["SPC 239 W1", "Oral Communication", 3, "Michelle Grice"],
  ],
  "Sports Management": [
    ["SPO 306 01", "Introduction to Sports", 3, "Leonard Williams", "MW", "3:00 PM – 4:15 PM", "OLDM 208"],
    ["SPO 416 W1", "Sports Financial Management", 3, "Leonard Williams"],
    ["SPO 426 W1", "Principles of Leisure Sports", 3, "Leonard Williams"],
  ],
}

export const SP2027_DEPARTMENTS: Department[] = Object.entries(raw).map(([name, rows]) => ({
  name,
  sections: rows.map(toSection),
}))

export const SP2027_PDF = "/documents/academics/sp-2027-course-schedule.pdf"
