import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { KeyRound, ExternalLink, LifeBuoy } from "lucide-react"

export const metadata: Metadata = {
  title: "Reset Your Email Password | myABC IT Self Service | Arkansas Baptist College",
  description:
    "Step-by-step instructions for resetting your Arkansas Baptist College email password using Microsoft's Self-Service Password Reset portal.",
}

const resetUrl = "https://passwordreset.microsoftonline.com/passwordreset#!/"

const steps = [
  {
    title: "Open the password reset portal",
    body: (
      <>
        Click the{" "}
        <a
          href={resetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary hover:underline"
        >
          Self-Service Password Reset
        </a>{" "}
        button below. The page will open in a new tab so you can follow along with these instructions.
      </>
    ),
  },
  {
    title: "Enter your ABC email address",
    body: (
      <>
        Type your full Arkansas Baptist College email address (for example,{" "}
        <span className="font-medium text-foreground">studentID@arkansasbaptist.edu</span>),
        then enter the characters shown in the verification image to confirm you are not a robot. Select{" "}
        <span className="font-medium text-foreground">Next</span>.
      </>
    ),
  },
  {
    title: "Verify your identity",
    body: (
      <>
        Choose a verification method you have access to — such as a text message, phone call, or alternate email —
        and follow the prompts to receive and enter your security code. This step keeps your account secure.
      </>
    ),
  },
  {
    title: "Create a new password",
    body: (
      <>
        Enter a new password, then re-enter it to confirm. Choose a strong password that is at least 8 characters
        long and includes a mix of uppercase letters, lowercase letters, numbers, and symbols.
      </>
    ),
  },
  {
    title: "Sign in with your new password",
    body: (
      <>
        Once your password is updated, you can sign in to your email and other Microsoft 365 services with your new
        credentials. If you stay signed in on any devices, be sure to update the saved password there as well.
      </>
    ),
  },
]

export default function EmailPasswordResetPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Reset Your Email Password"
          subtitle="myABC IT Self Service"
          description="Reset your Arkansas Baptist College email password yourself, at any time, using Microsoft's Self-Service Password Reset portal."
          breadcrumbs={[
            { label: "Resources", href: "/resources/directory" },
            { label: "myABC IT Self Service", href: "/resources/it-self-service" },
            { label: "Reset Your Email Password" },
          ]}
        />

        {/* Intro */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <KeyRound className="h-5 w-5 text-primary" />
              </span>
              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                Self-Service Password Reset
              </h2>
            </div>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              If you have forgotten your email password or need to update it, you can reset it yourself at any time
              using Microsoft&apos;s Self-Service Password Reset portal. Follow the steps below to regain access to your
              Arkansas Baptist College email account.
            </p>

            <div className="mt-8">
              <a
                href={resetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Self-Service Password Reset
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <p className="mt-3 break-all text-xs text-muted-foreground">{resetUrl}</p>
            </div>
          </div>
        </SectionWrapper>

        {/* Step-by-step Instructions */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
              Step-by-Step Instructions
            </h2>
            <ol className="mt-8 space-y-6">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </SectionWrapper>

        {/* Additional Help */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <LifeBuoy className="h-5 w-5 text-primary" />
              </span>
              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Still Need Help?</h2>
            </div>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              If you continue to experience trouble after resetting your password, the IT team is here to assist.
              Submit a request through the myABC IT Support Portal and a member of our team will follow up with you.
            </p>
            <a
              href="https://arbaptistcollege.on.spiceworks.com/portal/registrations"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              myABC IT Support Portal
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </SectionWrapper>

        <CTABand
          heading="Need Further Assistance?"
          description="Our Technology Services team is ready to help you with your IT needs."
          primaryAction={{ label: "IT Support Portal", href: "https://arbaptistcollege.on.spiceworks.com/portal/registrations" }}
          secondaryAction={{ label: "Back to IT Self Service", href: "/resources/it-self-service" }}
        />
      </main>
    </div>
  )
}
