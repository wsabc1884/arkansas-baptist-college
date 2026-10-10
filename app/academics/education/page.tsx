import type { Metadata } from "next"
import { ProgramPage } from "@/components/program-page"

export const metadata: Metadata = {
  title: "Education | Arkansas Baptist College",
  description:
    "Prepare to shape young minds with Arkansas Baptist College's Associate of Arts in Education.",
}

export default function EducationPage() {
  return (
    <ProgramPage
      label="Degree Programs"
      title="Education"
      subtitle="Shape the future of young minds and become an effective, inspiring educator in today's diverse classrooms."
      overview={[
        "Arkansas Baptist College's Education program prepares you to make a lasting impact on the lives of children. The two-year, 63-hour Associate of Arts in Education qualifies for the AR Futures grant for eligible applicants.",
        "The curriculum builds a strong foundation in child development, instructional strategies, and classroom management, preparing you for continued study and a rewarding career in education.",
      ]}
      credits="63 Hours (AA)"
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
      sequenceSlug="education"
      cta={{
        title: "Inspire the Next Generation",
        description: "Join our Education program and take the first step toward shaping the future of our children.",
      }}
    />
  )
}
