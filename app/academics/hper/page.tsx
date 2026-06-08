import type { Metadata } from "next"
import { ProgramPage } from "@/components/program-page"

export const metadata: Metadata = {
  title: "Health, Physical Education & Recreation | Arkansas Baptist College",
  description:
    "Enhance the well-being of individuals and communities with the Bachelor of Science in Health, Physical Education, and Recreation (HPER) at Arkansas Baptist College.",
}

export default function HperPage() {
  return (
    <ProgramPage
      label="Degree Programs"
      title="Health, Physical Education & Recreation"
      subtitle="Inspire healthy lifestyles and engage diverse populations through fitness, sport, and recreation."
      overview={[
        "The Bachelor of Science in Health, Physical Education, and Recreation (HPER) is a 120-hour program that can be completed in person or 100% online, offering flexibility to suit your needs.",
        "Our curriculum focuses on health promotion, physical fitness, sports management, and recreational programming, providing you with the skills to inspire healthy lifestyles and engage diverse populations. This degree opens doors to a variety of rewarding career opportunities.",
      ]}
      credits="120 Hours"
      format="In person or 100% online"
      careers={[
        "Health and Wellness Coordinator",
        "Physical Education Teacher",
        "Recreation Director",
        "Sports Coach",
        "Fitness Instructor",
        "Community Health Educator",
      ]}
      contact={{ name: "Dr. Taiquitha Robins", email: "Taiquitha.Robins@arkansasbaptist.edu" }}
      sequenceSlug="hper"
      cta={{
        title: "Promote Health & Fitness",
        description: "Join us in promoting health and fitness in our communities.",
      }}
    />
  )
}
