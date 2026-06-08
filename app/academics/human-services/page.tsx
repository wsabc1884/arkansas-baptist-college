import type { Metadata } from "next"
import { ProgramPage } from "@/components/program-page"

export const metadata: Metadata = {
  title: "Human Services | Arkansas Baptist College",
  description:
    "Make a difference in your community with the Bachelor of Arts in Human Services at Arkansas Baptist College, with an optional emphasis in Christian Education and Leadership.",
}

export default function HumanServicesPage() {
  return (
    <ProgramPage
      label="Degree Programs"
      title="Human Services"
      subtitle="Gain the knowledge and skills to support individuals and families in need across a variety of settings."
      overview={[
        "Make a difference in your community with our Bachelor of Arts in Human Services. This comprehensive 122-hour program equips you with the knowledge and skills to support individuals and families in need.",
        "Our curriculum covers essential topics such as counseling, community resources, ethics, and program development, preparing you for impactful roles in social services, counseling, and community leadership.",
      ]}
      emphasis={{
        heading: "Emphasis in Christian Education & Leadership",
        body: "Students have the option to specialize in Christian Education and Leadership, blending human services with spiritual guidance and community leadership for a faith-centered approach to service.",
      }}
      credits="122 Hours"
      format="On campus"
      careers={[
        "Social Services Coordinator",
        "Case Manager",
        "Community Outreach Specialist",
        "Substance Abuse Counselor",
        "Family Support Worker",
        "Christian Education Director",
      ]}
      contact={{ name: "Nathanael Palmer", email: "Nathanael.Palmer@arkansasbaptist.edu" }}
      sequenceSlug="human-services"
      cta={{
        title: "Begin a Transformative Journey",
        description: "Join us and be part of a transformative journey in human services.",
      }}
    />
  )
}
