import type { Metadata } from "next"
import { ProgramPage } from "@/components/program-page"

export const metadata: Metadata = {
  title: "Criminal Justice | Arkansas Baptist College",
  description:
    "Embark on a rewarding career with the Bachelor of Arts in Criminal Justice at Arkansas Baptist College, with an optional emphasis in Probation and Parole.",
}

export default function CriminalJusticePage() {
  return (
    <ProgramPage
      label="Degree Programs"
      title="Criminal Justice"
      subtitle="Understand and engage with the complexities of the criminal justice system and make an impact in your community."
      overview={[
        "Embark on a rewarding career in the field of criminal justice with our Bachelor of Arts in Criminal Justice. This comprehensive 122-hour program prepares you to understand and engage with the complexities of the criminal justice system.",
        "Our curriculum covers critical topics such as criminology, law enforcement, criminal law, and restorative justice, equipping you with the skills needed for a wide variety of roles within the field.",
      ]}
      emphasis={{
        heading: "Emphasis in Probation & Parole",
        body: "Students have the option to pursue a specialized emphasis in Probation and Parole, allowing you to focus on rehabilitation and community supervision — preparing you for careers dedicated to restorative justice and second chances.",
      }}
      credits="122 Hours"
      format="On campus"
      careers={[
        "Probation Officer",
        "Parole Officer",
        "Police Officer",
        "Criminal Investigator",
        "Forensic Analyst",
        "Legal Assistant",
        "Victim Advocate",
      ]}
      contact={{ name: "Mrs. Myra Woolfolk", email: "Myra.Summers-Woolfolk@arkansasbaptist.edu" }}
      sequenceSlug="criminal-justice"
      cta={{
        title: "Make an Impact in Your Community",
        description: "Contribute to justice and safety through a fulfilling career in criminal justice.",
      }}
    />
  )
}
