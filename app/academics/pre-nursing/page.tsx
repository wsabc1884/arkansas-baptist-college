import type { Metadata } from "next"
import { ProgramPage } from "@/components/program-page"

export const metadata: Metadata = {
  title: "Pre-Nursing | Arkansas Baptist College",
  description:
    "Begin your journey toward a nursing career with the Associate of Arts in Pre-Nursing at Arkansas Baptist College — available in person or 100% online.",
}

export default function PreNursingPage() {
  return (
    <ProgramPage
      label="Degree Programs"
      title="Pre-Nursing"
      subtitle="Begin your journey toward a nursing career with a strong foundation in the sciences and health care concepts."
      overview={[
        "The Associate of Arts in Pre-Nursing is a 63-hour program designed to prepare you for further study in nursing programs. It can be completed in person or 100% online, offering the flexibility you need to succeed.",
        "Our curriculum provides a solid foundation in the sciences, health care concepts, and nursing principles, equipping you with the knowledge and skills necessary for a variety of entry-level roles in the health care field while you prepare to advance into a nursing program.",
      ]}
      credits="63 Hours"
      format="In person or 100% online"
      careers={[
        "Nursing Assistant",
        "Patient Care Technician",
        "Medical Office Assistant",
        "Health Educator",
        "Community Health Worker",
      ]}
      contact={{ name: "Dr. Taiquitha Robins", email: "Taiquitha.Robins@arkansasbaptist.edu" }}
      sequenceSlug="pre-nursing"
      cta={{
        title: "Take the First Step Toward Nursing",
        description: "Apply today and begin building the foundation for a fulfilling career in health care.",
      }}
    />
  )
}
