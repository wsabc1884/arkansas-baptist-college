import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { LifeBuoy, ExternalLink, PlayCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "myABC IT Support Portal | Arkansas Baptist College",
  description:
    "Submit an IT support ticket and track its progress through the myABC IT Support Portal. Watch our step-by-step video on how to submit a ticket.",
}

const ticketUrl = "https://arbaptistcollege.on.spiceworks.com/portal/tickets/new"
const videoUrl =
  "https://archive.org/download/how-to-submit-a-it-ticket/How%20to%20submit%20a%20IT%20ticket.mp4"

export default function ITSupportPortalPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="myABC IT Support Portal"
          subtitle="myABC IT Self Service"
          description="Submit a support ticket and track its progress. Our Technology Services team will follow up with you to resolve your issue."
          breadcrumbs={[
            { label: "Resources", href: "/resources/directory" },
            { label: "myABC IT Self Service", href: "/resources/it-self-service" },
            { label: "myABC IT Support Portal" },
          ]}
        />

        {/* How to Submit a Ticket Video */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <PlayCircle className="h-5 w-5 text-primary" aria-hidden="true" />
              </span>
              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">How to Submit a Ticket</h2>
            </div>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              New to the support portal? Watch this short walkthrough to learn how to create and submit an IT support
              ticket step by step.
            </p>

            <div className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
              <video controls preload="metadata" className="aspect-video w-full bg-black">
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag. You can{" "}
                <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="underline">
                  download the video
                </a>{" "}
                instead.
              </video>
            </div>

            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Open Video in New Tab
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </SectionWrapper>

        {/* Submit a Ticket */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <LifeBuoy className="h-5 w-5 text-primary" aria-hidden="true" />
              </span>
              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Submit a Support Ticket</h2>
            </div>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Need help with a technology issue? Submit a ticket through the myABC IT Support Portal and a member of our
              Technology Services team will follow up with you. You can also use the portal to track the status of your
              existing requests.
            </p>

            <div className="mt-8">
              <a
                href={ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Submit a Ticket
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <p className="mt-3 break-all text-xs text-muted-foreground">{ticketUrl}</p>
            </div>
          </div>
        </SectionWrapper>

        <CTABand
          heading="Need Further Assistance?"
          description="Our Technology Services team is ready to help you with your IT needs."
          primaryAction={{ label: "Submit a Ticket", href: ticketUrl }}
          secondaryAction={{ label: "Back to IT Self Service", href: "/resources/it-self-service" }}
        />
      </main>
    </div>
  )
}
