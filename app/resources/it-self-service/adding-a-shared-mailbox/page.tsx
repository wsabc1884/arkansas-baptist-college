import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Globe, Smartphone, Info, AlertTriangle, ListChecks, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "How to Add a Shared Mailbox | Arkansas Baptist College",
  description:
    "Step-by-step guide for adding and using a shared mailbox in Microsoft 365 — Outlook on the web and Outlook mobile.",
}

type Step = {
  number: number
  title: string
  description: string
  image?: { src: string; alt: string; caption: string }
  note?: string
}

const webSteps: Step[] = [
  {
    number: 1,
    title: "Find your mailbox in the left folder list",
    description:
      "After signing in to Outlook on the web, look at the folder list on the left side of the screen. Locate your own mailbox name or email address under the Favorites section.",
    image: {
      src: "/documents/shared-mailbox/img2.png",
      alt: "Outlook on the web left navigation pane with the signed-in mailbox highlighted at the bottom of the Favorites list",
      caption: "Locate your signed-in mailbox in the left navigation pane.",
    },
  },
  {
    number: 2,
    title: "Open the shared mailbox option",
    description:
      "Right-click your mailbox name or email address. From the menu that opens, select Add shared folder or mailbox.",
    image: {
      src: "/documents/shared-mailbox/img3.png",
      alt: "Right-click menu on the mailbox showing the Add shared folder or mailbox option",
      caption: "Choose Add shared folder or mailbox from the right-click menu.",
    },
  },
  {
    number: 3,
    title: "Enter the shared mailbox name or email address",
    description:
      "In the Add a shared email account window, click inside the entry box. Type the shared mailbox name or full email address, select the mailbox if Outlook shows a suggestion, and then click Continue.",
    image: {
      src: "/documents/shared-mailbox/img4.png",
      alt: "Add a shared email account dialog with an entry box for the shared mailbox address and a Continue button",
      caption: "Enter the shared mailbox name or email address in the box shown.",
    },
    note: "If the Continue button stays unavailable, make sure the full mailbox address was typed correctly or select a valid mailbox from the suggestions.",
  },
  {
    number: 4,
    title: "Confirm the shared mailbox was added",
    description:
      "The shared mailbox will appear in the left navigation pane as a separate mailbox. Click the arrow beside it to expand the mailbox, then open the Inbox, Drafts, Sent Items, or any other folder you need.",
    image: {
      src: "/documents/shared-mailbox/img5.png",
      alt: "Left navigation pane showing the newly added shared mailbox expanded to reveal its Inbox, Drafts, and other folders",
      caption: "The shared mailbox appears as a separate expandable mailbox in Outlook.",
    },
  },
]

const mobileSteps: Step[] = [
  {
    number: 1,
    title: "Open the folder menu and tap the mail + icon",
    description:
      "From the Outlook mobile app, open the left navigation or folder menu. Tap the mail/envelope icon with the blue plus sign.",
    image: {
      src: "/documents/shared-mailbox/img6.png",
      alt: "Outlook mobile navigation menu with the mail/envelope icon with a blue plus sign highlighted",
      caption: "Tap the mail/envelope icon with the blue plus sign to open mailbox options.",
    },
  },
  {
    number: 2,
    title: "Select Add Shared Mailbox",
    description:
      "When the menu appears, tap Add Shared Mailbox. Do not select Add Email Account unless you are adding a separate email account.",
    image: {
      src: "/documents/shared-mailbox/img7.png",
      alt: "Outlook mobile menu showing the Add Shared Mailbox option",
      caption: "Choose Add Shared Mailbox from the menu.",
    },
  },
  {
    number: 3,
    title: "Enter the shared mailbox email address",
    description:
      "Type the full shared or delegated mailbox email address. If the domain is already shown, type the mailbox name before the @ symbol. Then tap Add Shared Mailbox.",
    image: {
      src: "/documents/shared-mailbox/img8.png",
      alt: "Outlook mobile screen with a field for the shared mailbox email address and an Add Shared Mailbox button",
      caption: "Enter the shared mailbox address and tap Add Shared Mailbox.",
    },
  },
]

const troubleshooting = [
  "Confirm the user has already been granted access to the shared mailbox by IT.",
  "Confirm the shared mailbox email address was entered correctly.",
  "Refresh the browser page or close and reopen the Outlook mobile app.",
  "Sign out of Outlook and sign back in if the mailbox still does not appear.",
  "Update the Outlook mobile app if the Add Shared Mailbox option is missing.",
  "Sending from the shared mailbox may require separate Send As or Send on behalf permission.",
]

function StepList({ steps }: { steps: Step[] }) {
  return (
    <div className="mt-8 space-y-6">
      {steps.map((step) => (
        <div key={step.number} className="flex gap-4 sm:gap-6">
          <div className="flex shrink-0 items-start">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {step.number}
            </span>
          </div>

          <div className="flex-1 pb-2">
            <h3 className="font-semibold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>

            {step.note && (
              <div className="mt-4 flex items-start gap-3 rounded-lg border border-border bg-muted/50 p-4">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Note: </span>
                  {step.note}
                </p>
              </div>
            )}

            {step.image && (
              <figure className="mt-4">
                <div className="overflow-hidden rounded-lg border border-border bg-card">
                  <Image
                    src={step.image.src || "/placeholder.svg"}
                    alt={step.image.alt}
                    width={900}
                    height={700}
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-2 text-xs text-muted-foreground">{step.image.caption}</figcaption>
              </figure>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function AddingSharedMailboxPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="How to Add a Shared Mailbox"
          subtitle="Resources"
          description="Step-by-step instructions for adding and using a shared mailbox in Microsoft 365 — Outlook on the web and Outlook mobile."
          breadcrumbs={[
            { label: "Resources", href: "/resources/directory" },
            { label: "myABC IT Self Service", href: "/resources/it-self-service" },
            { label: "How to Add a Shared Mailbox" },
          ]}
        />

        {/* Before you begin */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Before You Begin</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              You must already have permission to access the shared mailbox. These instructions add the mailbox to your
              Outlook view; they do not grant mailbox access by themselves.
            </p>

            {/* Quick reference */}
            <div className="mt-8 rounded-lg border border-border bg-muted/30 p-6">
              <div className="flex items-center gap-3">
                <ListChecks className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <h3 className="font-semibold text-foreground">Quick Reference</h3>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
                <li className="flex gap-3">
                  <Globe className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    <span className="font-semibold text-foreground">Outlook on the web: </span>
                    Right-click your mailbox in the left folder list, select Add shared folder or mailbox, type the
                    shared mailbox address, then click Continue.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    <span className="font-semibold text-foreground">Outlook mobile: </span>
                    Tap the mail/envelope icon with the blue plus sign, select Add Shared Mailbox, enter the mailbox
                    address, and tap Add Shared Mailbox.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </SectionWrapper>

        {/* Part 1 - Outlook on the Web */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Globe className="h-5 w-5 text-primary" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">Part 1</p>
                <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Outlook on the Web</h2>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Use these steps when you are already signed in to Outlook in a web browser.
            </p>
            <p className="mt-4 rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Browser path: </span>
              Mailbox list &rarr; right-click your mailbox &rarr; Add shared folder or mailbox &rarr; enter mailbox
              address &rarr; Continue
            </p>

            <StepList steps={webSteps} />
          </div>
        </SectionWrapper>

        {/* Part 2 - Outlook Mobile */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Smartphone className="h-5 w-5 text-primary" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">Part 2</p>
                <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Outlook Mobile</h2>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Use these steps in the Outlook mobile app on a phone or tablet.
            </p>
            <p className="mt-4 rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Mobile path: </span>
              Open the left menu &rarr; tap the mail/envelope icon with the blue plus sign &rarr; Add Shared Mailbox
              &rarr; enter the mailbox address &rarr; Add Shared Mailbox
            </p>

            <StepList steps={mobileSteps} />

            <div className="mt-8 rounded-lg border border-border bg-muted/30 p-6">
              <h3 className="font-semibold text-foreground">After the Mailbox Is Added</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground leading-relaxed">
                <li>The shared mailbox should appear in the Outlook mobile folder list as a separate mailbox or folder group.</li>
                <li>Tap the shared mailbox name or its Inbox to open it.</li>
                <li>It may take a few moments for mail and folders to sync the first time.</li>
              </ul>
            </div>
          </div>
        </SectionWrapper>

        {/* Troubleshooting */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Troubleshooting</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Use this checklist if the shared mailbox does not appear or does not open correctly.
            </p>

            <ul className="mt-6 space-y-3">
              {troubleshooting.map((item) => (
                <li key={item} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                  <ListChecks className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-start gap-3 rounded-lg border border-primary/30 bg-primary/5 p-6">
              <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h3 className="font-semibold text-foreground">Important</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Adding a shared mailbox only makes the mailbox visible in Outlook. Access to the mailbox must be
                  assigned separately by an administrator.
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Help Section */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-muted/50 p-6">
              <Mail className="mt-0.5 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h3 className="font-semibold text-foreground">Still Need Help?</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  If the shared mailbox still does not appear after following these steps, or you need access granted,
                  please reach out to the myABC IT Support Portal.
                </p>
                <Link
                  href="https://arbaptistcollege.on.spiceworks.com/portal/tickets/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex text-sm font-semibold text-primary hover:underline"
                >
                  Submit a Help Request
                </Link>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <CTABand
          heading="Back to myABC IT Self Service"
          description="Return to the main IT self-service page to access other services and resources."
          primaryAction={{ label: "View All Services", href: "/resources/it-self-service" }}
          secondaryAction={{
            label: "IT Support Portal",
            href: "https://arbaptistcollege.on.spiceworks.com/portal/tickets/new",
          }}
        />
      </main>
    </div>
  )
}
