import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText, Lock, HelpCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "1098-T Tuition Statement | Arkansas Baptist College",
  description:
    "Access your IRS Form 1098-T Tuition Statement online. Learn how to log in, retrieve your form, and understand education tax credits.",
}

export default function TuitionStatementPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="1098-T Tuition Statement"
          subtitle="Enrollment"
          description="A copy of this document has been sent to your mailing address on file with Arkansas Baptist College. To access an online copy, follow the instructions below."
          breadcrumbs={[
            { label: "Enrollment", href: "/enrollment/office-of-admissions" },
            { label: "1098-T Tuition Statement" },
          ]}
        />

        {/* Access Your 1098-T Online */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
              Access Your 1098-T Online
            </h2>
            <p className="mt-2 text-muted-foreground">
              Follow these steps to retrieve your 1098-T Tuition Statement electronically.
            </p>

            <div className="mt-8 rounded-lg border bg-card p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Step 1: Go to the 1098-T Portal
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Visit the tax statement portal at the link below:
              </p>
              <div className="mt-4">
                <Button asChild>
                  <a
                    href="https://www.tsc1098t.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to www.tsc1098t.com
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="mt-4 rounded-lg border bg-card p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Step 2: Enter Your Login Credentials
              </h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-4 rounded-md bg-muted/50 p-4">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Site ID</p>
                    <p className="mt-1 font-mono text-lg font-bold text-primary">11798</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-md bg-muted/50 p-4">
                  <Lock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Username</p>
                    <p className="mt-1 text-muted-foreground">
                      <strong className="text-foreground">ABC</strong> followed by your{" "}
                      <strong className="text-foreground">Student ID Number</strong>
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Example: If your Student ID is 12345, your username is{" "}
                      <span className="font-mono font-semibold text-foreground">ABC12345</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-md bg-muted/50 p-4">
                  <Lock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Password</p>
                    <p className="mt-1 text-muted-foreground">
                      <strong className="text-foreground">Last 4 digits of your SSN</strong>{" "}
                      (first-time users)
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      If you have previously logged in, your password is what you changed it
                      to. A &ldquo;Forgot Password&rdquo; option is available on the login
                      screen.
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Students who did not provide an SSN should enter{" "}
                      <span className="font-mono font-semibold text-foreground">0000</span>{" "}
                      as the temporary password.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-lg border bg-card p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Step 3: Set a New Password (First-Time Users)
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                For security reasons, new users will be prompted to change their password.
                Enter your current password (last four digits of your SSN), then create a
                new password. An automated email will be sent to your email address on file
                to confirm the change.
              </p>
              <div className="mt-4 rounded-md border border-primary/20 bg-primary/5 p-4">
                <p className="text-sm font-medium text-primary">Password Requirements</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>At least 8 characters</li>
                  <li>At least one uppercase letter</li>
                  <li>At least one lowercase letter</li>
                  <li>At least one number</li>
                  <li>At least one special character</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 rounded-lg border bg-card p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Step 4: Online Consent
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                After logging in, you will be presented with an online consent form. If you
                agree, click &ldquo;Consent.&rdquo; Your consent will apply to the current
                and subsequent tax years.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> By granting consent, you
                authorize the College to deliver this document electronically{" "}
                <strong className="text-foreground">instead of</strong> mailing a hard copy in future
                years. If you have previously logged in and registered for the service, a
                paper copy was <strong className="text-foreground">not</strong> mailed.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* What Is the 1098-T */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <div className="prose-abc">
              <h2>What Is the 1098-T?</h2>
              <p>
                The IRS Form 1098-T, Tuition Statement, is an informational tax document
                issued to students who have made qualifying tuition and related expense
                payments during the calendar year. This form may be used when filing federal
                income taxes to claim education-related tax credits such as the American
                Opportunity Credit or the Lifetime Learning Credit.
              </p>

              <h2>Understanding Your 1098-T</h2>
              <p>Key boxes on the form include:</p>
              <ul>
                <li>
                  <strong>Box 1:</strong> Payments received for qualified tuition and
                  related expenses.
                </li>
                <li>
                  <strong>Box 5:</strong> Scholarships or grants received.
                </li>
                <li>
                  <strong>Box 7:</strong> Indicates whether Box 1 includes amounts for an
                  academic period beginning in January through March of the next year.
                </li>
              </ul>
              <p>
                <strong>Important:</strong> Arkansas Baptist College cannot provide tax
                advice. Please consult a qualified tax professional or visit{" "}
                <a
                  href="https://www.irs.gov/credits-deductions/individuals/education-credits"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  irs.gov
                </a>{" "}
                for information about education tax credits.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Need Help */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <div className="flex items-start gap-4 rounded-lg border p-6">
              <HelpCircle className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">
                  Need Help Accessing Your 1098-T?
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  If you have trouble logging in or need assistance with your tuition
                  statement, contact the Business Office:
                </p>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  <li>
                    Phone:{" "}
                    <a
                      href="tel:5014201200"
                      className="text-primary hover:underline"
                    >
                      501-420-1200
                    </a>
                  </li>
                  <li>
                    Email:{" "}
                    <a
                      href="mailto:info@arkansasbaptist.edu"
                      className="text-primary hover:underline"
                    >
                      info@arkansasbaptist.edu
                    </a>
                  </li>
                  <li>
                    In Person: Business Office, 1600 Dr. Martin Luther King Jr.
                    Drive, Little Rock, AR 72202
                  </li>
                </ul>
              </div>
            </div>

            {/* Related Links */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <Link
                href="/enrollment/tuition-fees"
                className="rounded-lg border p-5 transition-colors hover:border-primary hover:bg-muted/50"
              >
                <h4 className="font-semibold text-foreground">Tuition & Fees</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  View current tuition rates and fee schedules
                </p>
              </Link>
              <Link
                href="/enrollment/financial-aid"
                className="rounded-lg border p-5 transition-colors hover:border-primary hover:bg-muted/50"
              >
                <h4 className="font-semibold text-foreground">Financial Aid</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Explore grants, scholarships, and funding
                </p>
              </Link>
              <Link
                href="/enrollment/pay-tuition"
                className="rounded-lg border p-5 transition-colors hover:border-primary hover:bg-muted/50"
              >
                <h4 className="font-semibold text-foreground">Pay My Tuition</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Make a payment online through the portal
                </p>
              </Link>
            </div>
          </div>
        </SectionWrapper>

        <CTABand
          heading="Questions About Your Account?"
          description="The Business Office is here to help with billing, payments, and financial records."
          primaryAction={{ label: "Contact Business Office", href: "/about/administration" }}
          secondaryAction={{ label: "Apply for Financial Aid", href: "/enrollment/apply-for-financial-aid" }}
        />
      </main>
    </div>
  )
}
