import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { ITSupportGuidelinesPopup } from "@/components/it-support-guidelines-popup"
import { KeyRound, LifeBuoy, ExternalLink, ArrowRight, FileText, BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "myABC IT Self Service | Arkansas Baptist College",
  description:
    "Self-service IT resources for Arkansas Baptist College. Find tools and step-by-step guides to resolve common technology needs quickly.",
}

type Service = {
  title: string
  description: string
  href: string
  external?: boolean
  icon: typeof KeyRound
}

const services: Service[] = [
  {
    title: "Reset Your Email Password",
    description:
      "Forgot or need to update your ABC email password? Follow our step-by-step guide to reset it using Microsoft's Self-Service Password Reset portal.",
    href: "/resources/it-self-service/email-password-reset",
    icon: KeyRound,
  },
  {
    title: "myABC IT Support Portal",
    description:
      "Submit a support ticket and track its progress. Our Technology Services team will follow up with you to resolve your issue.",
    href: "/resources/it-self-service/it-support-portal",
    icon: LifeBuoy,
  },
]

export default function ITSelfServicePage() {
  return (
    <div className="min-h-screen">
      <ITSupportGuidelinesPopup />
      <main id="main-content">
        <PageHero
          title="myABC IT Self Service"
          subtitle="Resources"
          description="Self-service tools and step-by-step guides to help you resolve common technology needs quickly."
          breadcrumbs={[
            { label: "Resources", href: "/resources/directory" },
            { label: "myABC IT Self Service" },
          ]}
        />

        {/* Services */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Available Services</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Select a service below to get started. Each guide walks you through the process step by step.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon
                const cardClasses =
                  "group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary"

                const inner = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-semibold text-foreground">{service.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      {service.external ? "Submit Ticket" : "View guide"}
                      {service.external ? (
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                      )}
                    </span>
                  </>
                )

                return service.external ? (
                  <a
                    key={service.title}
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClasses}
                  >
                    {inner}
                  </a>
                ) : (
                  <Link key={service.title} href={service.href} className={cardClasses}>
                    {inner}
                  </Link>
                )
              })}
            </div>
          </div>
        </SectionWrapper>

        {/* Resources */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Resources</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Helpful guides and reference documents you can view in your browser.
            </p>

            <div className="mt-8 grid gap-4">
              <Link
                href="/resources/it-self-service/setting-up-blackboard"
                className="group flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
                </span>
                <span className="flex-1">
                  <span className="block font-semibold text-foreground">Setting up Blackboard</span>
                  <span className="mt-1 block text-sm text-muted-foreground leading-relaxed">
                    Step-by-step instructions for setting up your Blackboard account and resetting your password if needed.
                  </span>
                </span>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary">
                  View Guide
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>

              <Link
                href="/resources/it-self-service/adding-a-shared-mailbox"
                className="group flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" aria-hidden="true" />
                </span>
                <span className="flex-1">
                  <span className="block font-semibold text-foreground">How to Add a Shared Mailbox</span>
                  <span className="mt-1 block text-sm text-muted-foreground leading-relaxed">
                    Step-by-step guide for adding and using a shared mailbox in Microsoft 365 (Outlook on the web and
                    Outlook mobile).
                  </span>
                </span>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary">
                  View Guide
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>
        </SectionWrapper>

        <CTABand
          heading="Need Further Assistance?"
          description="Our Technology Services team is ready to help you with your IT needs."
          primaryAction={{ label: "Submit a Ticket", href: "https://arbaptistcollege.on.spiceworks.com/portal/tickets/new" }}
          secondaryAction={{ label: "Technology Services", href: "/about/technology-services" }}
        />
      </main>
    </div>
  )
}
