import type { Metadata } from "next"
import { ProgramPage } from "@/components/program-page"

export const metadata: Metadata = {
  title: "Health Studies | Arkansas Baptist College",
  description:
    "Kickstart your career in the health sector with the Associate of Science in Health Studies at Arkansas Baptist College — available in person or 100% online.",
}

export default function HealthStudiesPage() {
  return (
    <ProgramPage
      label="Degree Programs"
      title="Health Studies"
      subtitle="Kickstart your career in the health sector with a flexible foundation in health promotion and disease prevention."
      overview={[
        "The Associate of Science in Health Studies is a 65-hour program that can be completed in person or 100% online, providing the flexibility to fit your busy lifestyle.",
        "Our curriculum covers essential topics in health promotion, disease prevention, and health care systems, equipping you with the foundational knowledge needed for a variety of roles in the health field. This degree prepares you for immediate entry into the workforce or for further studies in health-related disciplines.",
      ]}
      credits="65 Hours"
      format="In person or 100% online"
      careers={[
        "Health Educator",
        "Medical Office Assistant",
        "Community Health Worker",
        "Health Services Coordinator",
        "Wellness Program Assistant",
      ]}
      contact={{ name: "Dr. Taiquitha Robins", email: "Taiquitha.Robins@arkansasbaptist.edu" }}
      sequenceSlug="health-studies"
      cta={{
        title: "Make an Impact on Health & Wellness",
        description: "Join us in making a positive impact on health and wellness in our communities.",
      }}
    />
  )
}
