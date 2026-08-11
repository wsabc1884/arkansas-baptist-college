import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, FileText, MessageSquare, Smartphone } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"

export const metadata: Metadata = {
  title: "Data Retention & Privacy Policies | Arkansas Baptist College",
  description:
    "Arkansas Baptist College data retention and privacy policies, including the institutional Data Retention Policy and the College's SMS Privacy Policy and Messaging Terms & Conditions.",
}

const policies = [
  {
    title: "Data Retention Policy",
    description:
      "Standards and responsibilities for the collection, use, storage, protection, and retention of personal and institutional data.",
    href: "/resources/consumer-information/data-retention-policy/policy",
    icon: FileText,
  },
  {
    title: "SMS Privacy Policy",
    description:
      "How the College collects, uses, and protects information associated with our SMS text messaging programs, including consent and opt-out.",
    href: "/privacy-policy",
    icon: MessageSquare,
  },
  {
    title: "SMS Messaging Terms & Conditions",
    description:
      "Terms governing participation in the College's SMS text messaging programs, including consent, message frequency, opt-out, and eligibility.",
    href: "/terms-and-conditions",
    icon: Smartphone,
  },
]

export default function DataRetentionLandingPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Data Retention & Privacy Policies"
          subtitle="Consumer Information"
          description="Review the College's policies governing how personal and institutional data is collected, protected, retained, and used."
          breadcrumbs={[
            { label: "Resources", href: "/resources/consumer-information" },
            { label: "Consumer Information", href: "/resources/consumer-information" },
            { label: "Data Retention & Privacy Policies" },
          ]}
        />

        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <ul className="grid gap-6 md:grid-cols-2">
              {policies.map((policy) => {
                const Icon = policy.icon
                return (
                  <li key={policy.href}>
                    <Link
                      href={policy.href}
                      className="group flex h-full flex-col rounded-lg border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-primary/5"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h2 className="mt-4 font-serif text-xl font-bold text-card-foreground text-balance">
                        {policy.title}
                      </h2>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {policy.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                        View policy
                        <ArrowRight
                          className="h-4 w-4 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
