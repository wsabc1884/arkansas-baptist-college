import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { ChevronRight, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Setting up Blackboard | Arkansas Baptist College",
  description:
    "Step-by-step instructions for setting up your Blackboard account and resetting your password if needed.",
}

export default function SettingUpBlackboardPage() {
  const steps = [
    {
      number: 1,
      title: "Visit the Blackboard Login",
      description: "Go to ArkansasBaptist.edu and click Blackboard.",
    },
    {
      number: 2,
      title: "Select Forgot Password",
      description: "On the Blackboard login page, select Forgot Password.",
    },
    {
      number: 3,
      title: "Enter Your Information",
      description:
        "On the password reset page, scroll to the bottom and enter your first name, last name, and school email address. Then click Submit.",
    },
    {
      number: 4,
      title: "Verify Your Information",
      description:
        "If you are unable to proceed, you may need to contact the Admissions Office to verify that your name is spelled correctly in the system.",
    },
    {
      number: 5,
      title: "Check Your Email",
      description:
        "A password reset email will be sent to your school email address. Follow the instructions in the email to create a new password.",
    },
    {
      number: 6,
      title: "Sign In",
      description:
        "Once your password has been reset, return to the Blackboard login page and sign in using your Student ID and your newly created password.",
    },
  ]

  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Setting up Blackboard"
          subtitle="Resources"
          description="Learn how to set up your Blackboard account and reset your password if needed."
          breadcrumbs={[
            { label: "Resources", href: "/resources/directory" },
            { label: "myABC IT Self Service", href: "/resources/it-self-service" },
            { label: "Setting up Blackboard" },
          ]}
        />

        {/* Instructions */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Getting Started</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Follow these steps to set up your Blackboard account and reset your password.
            </p>

            <div className="mt-8 space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4 sm:gap-6">
                  {/* Step Number */}
                  <div className="flex shrink-0 items-start">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {step.number}
                    </span>
                    {step.number < steps.length && (
                      <div className="absolute top-20 left-5 bottom-0 w-0.5 bg-border" aria-hidden="true" />
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="pt-1 pb-8 sm:pt-0">
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    {step.number === 1 && (
                      <div className="mt-4 rounded-lg border border-border overflow-hidden">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main%20site%20blackboard-sjfYJ7jFaMHWJDi2N6nDqnC3iePsfq.jpg"
                          alt="Arkansas Baptist College website header showing the Blackboard link in the navigation bar"
                          width={1200}
                          height={120}
                          className="w-full h-auto"
                          priority
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Email Password Reset Link */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Need to Reset Your Email Password?</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              If you also need to reset your school email password, we have a separate guide available.
            </p>

            <Link
              href="/resources/it-self-service/email-password-reset"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Reset Email Password
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </SectionWrapper>

        {/* Help Section */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <div className="flex items-start gap-4 rounded-lg border border-border bg-muted/50 p-6">
              <Mail className="mt-0.5 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h3 className="font-semibold text-foreground">Still Having Trouble?</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  If you've followed these steps and are still unable to access Blackboard, please reach out to the
                  myABC IT Support Portal for further assistance.
                </p>
                <Link
                  href="https://arbaptistcollege.on.spiceworks.com/portal/registrations"
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
          secondaryAction={{ label: "IT Support Portal", href: "https://arbaptistcollege.on.spiceworks.com/portal/registrations" }}
        />
      </main>
    </div>
  )
}
