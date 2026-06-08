import type { Metadata } from "next"
import { ProgramPage } from "@/components/program-page"

export const metadata: Metadata = {
  title: "Education | Arkansas Baptist College",
  description:
    "Prepare to shape young minds with Arkansas Baptist College's Education programs, including the Associate of Arts in Education and the Bachelor of Science in Elementary Education.",
}

export default function EducationPage() {
  return (
    <ProgramPage
      label="Degree Programs"
      title="Education"
      subtitle="Shape the future of young minds and become an effective, inspiring educator in today's diverse classrooms."
      overview={[
        "Arkansas Baptist College's Education programs prepare you to make a lasting impact on the lives of children. Begin with the two-year, 63-hour Associate of Arts in Education — which qualifies for the AR Futures grant for eligible applicants — and continue seamlessly into the Bachelor of Science in Elementary Education, a comprehensive 120-hour program.",
        "Our Bachelor of Science in Elementary Education is in the process of being accredited by the Council for the Accreditation of Educator Preparation (CAEP), ensuring you receive a high-quality education recognized by schools and employers. The curriculum combines foundational courses in child development, instructional strategies, and classroom management with practical experience through a two-semester teacher residency.",
        "All courses in the Associate of Arts in Education are fully transferable to the Bachelor of Science in Elementary Education, allowing you to advance your education without losing momentum.",
      ]}
      emphasis={{
        heading: "A Seamless Pathway from Associate to Bachelor's",
        body: "Start with the AA in Education and transfer every credit into the BS in Elementary Education. The hands-on teacher residency lets you apply your knowledge in real classrooms, gaining invaluable insight into the teaching profession.",
      }}
      credits="63 Hours (AA) / 120 Hours (BS)"
      format="On campus"
      careers={[
        "Elementary School Teacher",
        "Special Education Teacher",
        "Curriculum Developer",
        "Educational Consultant",
        "School Administrator",
        "Instructional Coordinator",
        "Teaching Assistant",
        "After-School Program Coordinator",
      ]}
      contact={{ name: "Dr. Jennifer Nelson", email: "Jennifer.Nelson@arkansasbaptist.edu" }}
      sequenceSlug="education"
      cta={{
        title: "Inspire the Next Generation",
        description: "Join our Education program and take the first step toward shaping the future of our children.",
      }}
    />
  )
}
