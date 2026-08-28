export interface Trustee {
  slug: string
  name: string
  /** Post-nominal credentials shown under the name, e.g. "PT, MOMT, FAAPT" */
  credentials?: string
  /** Board role, e.g. "Chairman" or "Board Member" */
  title: string
  /** Grouping used on the board page, e.g. "Executive Officer" */
  department?: string
  /** Path to the full portrait, when available */
  image?: string
  /** Tailwind classes to fine-tune how the portrait is cropped in the circular card bubble */
  cardImageClass?: string
  /** Short line shown on the profile hero, derived from the bio */
  role?: string
  /** Full biography as an array of paragraphs */
  bio?: string[]
}

export const TRUSTEES: Trustee[] = [
  // ---------- Executive Officers ----------
  {
    slug: "roland-gosey",
    name: "Roland L. Gosey",
    title: "Chairman",
    department: "Executive Officer",
    image: "/images/trustees/roland-gosey.png",
    cardImageClass: "object-top origin-top scale-[1.7]",
    role: "Owner & Managing Funeral Director, Williams Funeral Home",
    bio: [
      "Roland L. Gosey is the owner and managing funeral director of Williams Funeral Home in Arkadelphia, Arkansas. He is a 1996 graduate of Arkadelphia Sr. High School and a 2004 graduate of the University of Arkansas Community College at Hope where he earned an Associate of Applied Science in Funeral Services.",
      "At the age of 27, he became the youngest funeral homeowner in the State of Arkansas at that time. He owned a majority interest in Williams Funeral Home; a family-owned and operated business that opened in 1950. He later became the principal in 2008. He introduced aftercare and personalized services to the community and surrounding cities. His creative genius and eye for detail was a God-given gift that solidified him as a true funeral service professional. He is registered with The International Conference of Funeral Service Examining Boards. In May of 2017, he opened Williams Funeral Home Van Buren in Camden, Arkansas as a satellite location for the Arkadelphia location.",
      "Roland has led Williams Funeral Home to become the premier funeral home in Southwest Arkansas specializing in incomparable service and personalization. Under his management, Williams Funeral Home remains a positive household name known all over the state for its compassionate staff, and professional and personalized service.",
    ],
  },
  {
    slug: "mitch-bettis",
    name: "Mitch Bettis",
    title: "Treasurer",
    department: "Executive Officer",
    image: "/images/trustees/mitch-bettis.png",
    cardImageClass: "object-top",
    role: "President & Owner, Arkansas Business Publishing Group",
    bio: [
      "Mitch Bettis is a seasoned media executive with more than 30 years of experience in journalism, publishing and business leadership. He currently serves as president and owner of Arkansas Business Publishing Group, overseeing a diverse portfolio of more than 30 media brands across Arkansas and Texas.",
      "He is recognized for driving significant revenue growth, implementing transparent leadership practices, and fostering a culture of innovation and trust.",
    ],
  },
  {
    slug: "alicia-ferguson-smith",
    name: "Alicia Ferguson Smith",
    title: "Secretary",
    department: "Executive Officer",
  },

  // ---------- Board Members ----------
  {
    slug: "daryl-bassett",
    name: "Daryl E. Bassett",
    title: "Board Member",
    image: "/images/trustees/daryl-bassett.png",
    cardImageClass: "object-top origin-top scale-[1.35]",
    role: "Cabinet Secretary, Arkansas Department of Labor and Licensing",
    bio: [
      "Daryl E. Bassett currently serves as the Cabinet Secretary for the Arkansas Department of Labor and Licensing. He is the former Director of the Arkansas Department of Workforce Services. He previously served as Director of Business and Commercial Services for the Arkansas Secretary of State. Prior to that service, he was a Commissioner with the Arkansas Public Service Commission for nine years and Chief Economic Development Advisor to former Governor Mike Huckabee.",
      "He is a past President of the Southeastern Association of Regulatory Utility Commissioners (SEARUC). He has also served as Chairman of the Federal Communications Commission (FCC) Diversity Committee and was a member of the Financial Research Institute for Columbia College of Business Board of Directors at the University of Missouri, Columbia.",
      "Prior to his service in state government, he worked in International and Domestic securities as an Investment Banker with Merrill Lynch. Bassett also currently serves on a number of national Boards of Directors, as well as civic organizations in Arkansas.",
    ],
  },
  {
    slug: "shannon-lewis",
    name: "Dr. Shannon Lewis",
    title: "Board Member",
    image: "/images/trustees/shannon-lewis.png",
    cardImageClass: "object-top",
    role: "Director & Principal, Success Achievement Academy, Jonesboro School District",
    bio: [
      "Dr. Shannon Lewis is an accomplished educator, pastor, community advocate, and public servant whose career spans more than two decades of leadership in education, ministry, and civic engagement. Dr. Lewis serves as Director of Success Achievement Academy and Principal for the Jonesboro School District, overseeing an alternative learning environment that serves students from school districts throughout Craighead County. Dr. Lewis also serves as an adjunct professor in Arkansas State University's School of Teacher Education and Leadership, preparing future educational administrators through graduate-level instruction.",
      "Throughout a distinguished career in education, Dr. Lewis has served as Executive Principal of the Academies at Jonesboro High School, Principal of Lee High School, a building administrator at Marvell High School, and an agricultural education teacher. As Executive Principal, Dr. Lewis helped lead Jonesboro High School to wall-to-wall career academy status, expanded Advanced Placement opportunities, managed a $10.8 million budget, strengthened professional learning communities, and implemented programs designed to improve student engagement and graduation outcomes. Dr. Lewis earned a Doctor of Education in Educational Leadership from the University of Arkansas, an Education Specialist degree and a Master of Science in Educational Leadership from Arkansas State University, and a Bachelor of Science in Agricultural Education from Southern Arkansas University.",
      "Dr. Lewis's commitment to service extends deeply into ministry and community outreach. As founder and pastor of New Beginnings Missionary Baptist Church in Jonesboro, Dr. Lewis provides spiritual leadership, pastoral care, and guidance while overseeing church operations and community engagement initiatives. Dr. Lewis also founded New Beginnings Outreach Ministry, a nonprofit organization dedicated to youth mentorship, charitable outreach, educational workshops, and support for underserved families. Previous pastoral leadership includes serving New St. John Missionary Baptist Church, where Dr. Lewis led church revitalization, helped retire the church's mortgage, established a food outreach ministry, and developed a school-adoption initiative. Dr. Lewis also serves as Assistant to the Moderator and Director General for the Consolidated White River District.",
      "In addition to leadership in education and ministry, Dr. Lewis is co-owner of Lewis Brothers Mortuary and served for 10 years as a Monroe County Quorum Court member. Dr. Lewis has received numerous honors, including the Craighead County Martin Luther King Jr. Committee's 2024 Outstanding Leader in Jonesboro recognition, the Arkansas Association of Educational Administrators' 2017 Secondary Assistant Principal of the Year award, and induction into the Arkansas TRIO Hall of Fame. Across every role, Dr. Lewis remains committed to faith, educational excellence, student success, servant leadership, and the development of stronger communities.",
    ],
  },
  {
    slug: "milton-graham",
    name: "Rev. Dr. Milton R. Graham, Sr.",
    title: "Board Member",
    image: "/images/trustees/milton-graham.png",
    cardImageClass: "object-top",
    role: "Senior Pastor, Mount Zion Baptist Church of Little Rock",
    bio: [
      "Rev. Dr. Milton R. Graham, Sr. has been married to Jacqueline F. Graham for 33 years and has four grown children and seven grandchildren. Rev. Dr. Milton Graham is the Senior Pastor at Mount Zion Baptist Church of Little Rock, Arkansas, elected in December 2024. Previously, he served 26 years as Senior Pastor at Bethesda Missionary Baptist Church. He had a distinguished 31-year career with the Arkansas Department of Human Services (DHS), including serving as Pulaski County (Area 6) Director for the Division of Children and Family Services, overseeing staff and services across five county offices. In September 2024, he became the Human Resources Labor and Employee Relations Manager for the City of Little Rock.",
      "During his tenure as Area Director for Pulaski County (Area 6) within DHS, Dr. Graham provided oversight and leadership for all child welfare services in the region. He directed multidisciplinary teams, coordinated programs across multiple counties, and implemented strategic initiatives to enhance outcomes for children and families under DHS care.",
      "Dr. Graham's DHS roles included family services worker, program coordinator, supervisor, qualitative assurance reviewer, administrator, and Statewide Team Decision Making Supervisor. His team managed hundreds of child welfare cases monthly, including investigations, foster care placement, and protective services.",
      "His leadership extends to community service: he founded Five Porches CDC, supporting ministries such as a food pantry, youth mentoring, prison ministry, and more. For over 15 years, he faithfully hosted the widely respected \u201cBehold The Lamb of God\u201d radio broadcast on Praise 102.5FM\u2014offering biblical insight, spiritual encouragement, and a consistent call to Christ-centered living.",
      "Dr. Graham holds a B.A. in Philosophy and Religion from Arkansas Baptist College, an Honorary Doctor of Divinity from Anointed by God Ministries, and has completed extensive professional training in social work and family services. He graduated from Little Rock Central High School, attended UCA and UALR, served in the Arkansas Army National Guard, and completed military support training.",
      "He serves as Vice-Moderator at Large for the Union District Baptist Association, North and Central Vice President of the Consolidated Missionary Baptist State Convention, and sits on the Arkansas Baptist College Board of Trustees. His commitment to church and community is rooted in the belief that ministry serves the greater good, as reflected in his outreach and leadership.",
    ],
  },
  {
    slug: "robert-tillman",
    name: "Robert C. Tillman",
    credentials: "PT, MOMT, FAAPT, FAAOMPT",
    title: "Board Member",
    image: "/images/trustees/robert-tillman.png",
    cardImageClass: "object-top",
    role: "Owner & President, Orthopedic Rehabilitation and Specialty Center",
    bio: [
      "Robert C. Tillman is an accomplished physical therapist, orthopedic manual therapy specialist, healthcare executive, educator, author, and community leader with decades of experience in clinical practice and rehabilitation. He has served as owner and president of Orthopedic Rehabilitation and Specialty Center since 2003 and previously served as Vice President of Clinical Development for HEALTHSOUTH Corporation, with responsibilities extending across the United States and United Kingdom. His professional background also includes advanced Norwegian manual therapy training, service as an instructor and member of the Board of Examiners for the Ola Grimsby Institute, and clinical practice in Little Rock dating to 1991.",
      "Tillman has made significant contributions to physical therapy education, research, and professional practice. His published work addresses lumbopelvic dysfunction, sacroiliac rehabilitation, low-back pain, cervical dysfunction, posture-related headaches, orthopedic assessment, clinical reasoning, and therapeutic exercise. He has presented at state, national, and international professional meetings, served on an American Physical Therapy Association expert panel concerning manual therapy standardization, and co-authored two textbooks in orthopedic physical therapy. He also served as lead author for a volume of the Scientific Therapeutic Exercise Textbook.",
      "His clinical expertise has also been sought in sports rehabilitation and performance. Tillman has served as a rehabilitation and performance consultant for professional sports organizations in the United States and internationally, developed rehabilitation programs for prominent professional athletes, and consulted with collegiate basketball programs at the University of Kentucky, the University of Memphis, and the University of Arkansas at Little Rock. In recognition of his clinical leadership and professional excellence, he was named HEALTHSOUTH's Clinician of the Year in 1997.",
      "Tillman's leadership and service have extended across professional associations, higher education, healthcare, and athletics. His roles have included Treasurer of the Arkansas State Physical Therapy Board by gubernatorial appointment; President and Fellow of the American Academy of Physical Therapy; former Vice President of the Arkansas State Physical Therapy Association; and service with the Arkansas State Prostate Cancer Board. He has also served on the Strategic Advisory Board of the University of Missouri\u2013Columbia, the Board of Trustees of the Arkansas Sports Hall of Fame, the Board of Directors of Pulaski Technical College, and the Board of Directors of Arkansas Baptist College. Throughout his career, Tillman has demonstrated a sustained commitment to clinical excellence, professional education, ethical leadership, and community service.",
    ],
  },
  {
    slug: "mike-richardson",
    name: "Mike Richardson",
    title: "Board Member",
  },
  {
    slug: "gene-mckissic",
    name: "Gene McKissic, Esq.",
    title: "Board Member",
  },
  {
    slug: "steven-jones",
    name: "Steven B. Jones",
    title: "Board Member",
    image: "/images/trustees/steven-jones.png",
    role: "Chief Executive Officer, APEX Consulting Group, LLC",
    bio: [
      "Steven B. Jones is the Chief Executive Officer of APEX Consulting Group, LLC, a Mid-South based Marketing and Public Policy Strategy firm. In that role, he works with various clients and partners to develop and achieve their strategic marketing and public policy objectives. Under the APEX umbrella is a commercial printing division which works with companies and nonprofits across the region to achieve their printing production needs.",
      "Jones previously served as Senior Vice President and Director of Programs with Southern Bancorp Community Partners (SBCP). Southern Bancorp is consistently one of the most impactful Rural Development Banks in the nation and is based in Arkadelphia, Arkansas. SBCP is the bank's affiliate nonprofit. SBCP works with neighbors, nonprofits, governmental entities and businesses to reimagine and rebuild their communities through strategic planning and implementation of their shared vision. Jones oversaw the organization's work in each state where the bank had a presence.",
      "Prior to working with SBCP, Jones served for six years during the administration of Arkansas Governor Mike Beebe as Deputy Director of the Arkansas Department of Human Services (DHS), the state's largest agency. DHS's budget exceeded $6.5 Billion and had over 6,000 employees. In that role he oversaw five of the DHS's ten Divisions. He worked with his leadership team to launch various initiatives that included rebalancing the state's Long-Term Care System for senior citizens, reforming the state's Juvenile Justice System, and expanding the childcare and summer food sites across the state of Arkansas.",
      "In July 2010, Arkansas Governor Mike Beebe appointed Jones to serve as his designee to the Delta Regional Authority Board. This Federal Board fosters partnerships throughout the region as it works to improve the Delta economy and is comprised of the Federal Co-Chairman appointed by the President of the United States, and the governors' designees of the eight states in the Delta Region of our nation.",
      "In 1998, Jones was elected and served over six years in the Arkansas House of Representatives. As a member of the House of Representatives, Jones served as Chairman of the influential Peer/Review Committee, the Claims Committee and the Rail and Mass Transit Subcommittee. He was the lead House sponsor of the Arkansas Delta Development Commission Act, the Arkansas Fair Housing Commission Act, the Arkansas Price Gouging Act along with other pieces of legislation that are positively impacting the lives of Arkansans. His legislative accomplishments have earned commendations from the Arkansas State Police, the Arkansas Municipal League, Arkansas Advocates for Children and Families, the East Arkansas Educational Consortium, Arkansas State University and numerous other civic and advocacy organizations. Jones was recognized as one of the \u201cOne Hundred to Watch\u201d Rising Stars in the Democratic Party during the 2000 Democratic Convention in Los Angeles, California and he was selected as one of the \u201cTop Forty Leaders Under Forty\u201d by the Memphis Business Journal. During his final term he was number 2 in seniority.",
      "Jones, who attended Arkansas State University and The Harvard University Executive Leadership Academy, has previous experience that includes serving as a member of the Earle, Arkansas City Council, Vice Chair of the Arkansas Educational Television Network Commission and Chairman of the Delta Service Corps Board of Directors. He also served on the advisory board of a regional bank, and was general manager of a major Northeast Arkansas publishing and commercial printing firm. Jones's civic contributions include serving as Chairman of the Arkansas Educational Television Network Foundation Board, Finance Chair of the Earle Church of God in Christ Board, Chair of the John Gammon Scholarship Foundation, President of the Earle Chamber of Commerce Board, Member and Chair of the Government Relations Committee of the West Memphis Chamber Board, Member of what is now the Arkansas State University-Mid South Foundation Board and member of the Board of Directors of the Arkansas Foundation for Medical Care.",
      "Jones is married to Dr. Susan Ward-Jones. They have one daughter and two sons, and reside in Marion, Arkansas.",
    ],
  },
  {
    slug: "janet-miles-bartee",
    name: "Janet Miles-Bartee",
    title: "Board Member",
    image: "/images/trustees/janet-miles-bartee.png",
    cardImageClass: "object-top",
    role: "President & CEO, Greater Kansas City LINC, Inc.",
    bio: [
      "Janet Miles-Bartee is a transformational nonprofit executive and community leader with nearly three decades of experience advancing equity, strengthening families, and building cross-sector partnerships that drive lasting community impact. As President and Chief Executive Officer of LINC (Greater Kansas City LINC, Inc.), she leads one of the region's most respected nonprofit organizations dedicated to supporting children, families, and neighborhoods across the Kansas City metropolitan area.",
      "Under Janet's leadership, LINC has grown into a comprehensive, community-centered organization that stewards more than $57 million in annual funding and delivers integrated services to over 18,000 children and families each year. Through a network of more than 50 community-based sites, LINC provides critical resources including before- and after-school programming, family support services, food access initiatives, and community engagement efforts designed to strengthen neighborhood stability and opportunity.",
      "A visionary strategist, Janet has been instrumental in developing collaborative models that bring together schools, government agencies, nonprofits, and community stakeholders to address complex social challenges. She has forged strong partnerships with school district superintendents and civic leaders to improve student stability, reduce barriers to education, and ensure families have access to essential services.",
      "Janet's leadership was especially impactful during the COVID-19 pandemic, when she mobilized large-scale community response efforts, including coordinating vaccination initiatives in partnership with the Missouri National Guard, the Kansas City Fire Department, and local organizations. She also expanded services to address urgent needs related to food insecurity, housing instability, and access to technology.",
    ],
  },
  {
    slug: "joe-booker",
    name: "\u201cBroadway\u201d Joe Booker",
    title: "Board Member",
    image: "/images/trustees/joe-booker.jpg",
    cardImageClass: "object-top",
    role: "Broadcasting Executive & Arkansas Hall of Fame Inductee",
    bio: [
      "\u201cBroadway\u201d Joe Booker is a dynamic broadcasting executive, media innovator, and community leader with 40+ years of experience across radio, television, and digital platforms. He has a proven record of organizational leadership, strategic programming, and community impact across Arkansas. As an Arkansas Hall of Fame inductee, \u201cBroadway\u201d Joe is recognized for pioneering contributions to broadcasting, nonprofit engagement, and cultural advancement.",
    ],
  },
]

export function getTrustee(slug: string): Trustee | undefined {
  return TRUSTEES.find((t) => t.slug === slug)
}
