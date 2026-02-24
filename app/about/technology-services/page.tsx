import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Monitor, Mail, BookOpen, Headphones, Shield, Wifi } from "lucide-react"

export const metadata: Metadata = {
  title: "Technology Services - Arkansas Baptist College",
  description: "Technology Services at Arkansas Baptist College provides IT support, email, Blackboard LMS, and campus network services.",
}

const services = [
  {
    icon: Headphones,
    title: "IT Help Desk",
    description: "Submit a support ticket for technical issues, account access, and equipment requests.",
  },
  {
    icon: Mail,
    title: "Outlook 365 Email",
    description: "Official email service for students, faculty, and staff using Microsoft Outlook 365.",
  },
  {
    icon: BookOpen,
    title: "Blackboard LMS",
    description: "Access course materials, assignments, grades, and online learning resources through Blackboard.",
  },
  {
    icon: Monitor,
    title: "myABC Portal",
    description: "Access student records, registration, financial aid, and administrative services through JICS.",
  },
  {
    icon: Wifi,
    title: "Campus Network",
    description: "Wi-Fi connectivity across campus including academic buildings, residence halls, and common areas.",
  },
  {
    icon: Shield,
    title: "Account Security",
    description: "Password resets, multi-factor authentication, and security best practices for your ABC accounts.",
  },
]

export default function TechnologyServicesPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Technology Services"
        subtitle="About Us"
        description="Providing the digital tools, infrastructure, and support that keep students, faculty, and staff connected."
        breadcrumbs={[
          { label: "About Us", href: "/about/history" },
          { label: "Technology Services", href: "/about/technology-services" },
        ]}
      />

      <SectionWrapper>
        <div className="mx-auto max-w-4xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Technology Services department at Arkansas Baptist College manages the campus IT infrastructure, digital learning platforms, email systems, and technical support for students, faculty, and staff. Our team ensures that the tools and systems essential to teaching, learning, and campus operations are reliable, secure, and accessible.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-lg border p-6 transition-colors hover:border-primary/40 hover:bg-muted/30"
              >
                <service.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-lg border bg-muted/50 p-6">
            <h3 className="text-lg font-semibold text-foreground">Need Technical Support?</h3>
            <p className="mt-2 text-muted-foreground">
              Contact the IT Help Desk for assistance with accounts, passwords, email, Blackboard, and other technology issues.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              <strong>Phone:</strong>{" "}
              <a href="tel:5014201200" className="text-primary hover:underline">501-420-1200</a><br />
              <strong>Email:</strong>{" "}
              <a href="mailto:info@arkansasbaptist.edu" className="text-primary hover:underline">info@arkansasbaptist.edu</a>
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Migration Note */}
      {/* Source: arkansasbaptist.edu/it-help-desk/ + search results */}
      {/* Confidence: Medium - technology services page was not directly available, content synthesized from IT help desk page and site navigation */}
      {/* Missing: Specific IT staff contacts, help desk hours */}

      <CTABand
        heading="Having Technical Issues?"
        description="The IT Help Desk is ready to assist you with any technology-related questions."
        primaryAction={{ label: "Submit a Ticket", href: "/about/technology-services" }}
        secondaryAction={{ label: "Contact IT", href: "/resources/directory" }}
      />
    </main>
  )
}
