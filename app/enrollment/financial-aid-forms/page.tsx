import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import {
  FileText,
  Download,
  ExternalLink,
  ArrowRight,
  GraduationCap,
  DollarSign,
  CreditCard,
  ShieldAlert,
  Users,
  TrendingUp,
} from "lucide-react"
import { sanityFetch } from "@/sanity/lib/live"
import { DOCUMENTS_BY_CATEGORY_QUERY } from "@/lib/queries"
import type { DocumentForm } from "@/lib/types"

export const metadata: Metadata = {
  title: "Financial Aid Forms | Arkansas Baptist College",
  description:
    "Download and submit required financial aid forms for Arkansas Baptist College. Includes verification worksheets, loan resources, and federal forms.",
}

/* ------------------------------------------------------------------ */
/* SECTION 2 — 2023-2024 Financial Aid Forms                          */
/* ------------------------------------------------------------------ */
const aidForms = [
  {
    name: "Statement of Educational Purpose & Identification",
    description:
      "Required as part of the identity verification process for financial aid applicants.",
    pdfUrl:
      "https://ifap.ed.gov/sites/default/files/attachments/2019-08/StatementofEducPurpose.pdf",
  },
  {
    name: "Unusual Enrollment History (UEH) Appeal Form",
    description:
      "Required for students flagged for unusual enrollment patterns across multiple institutions.",
    pdfUrl:
      "https://ifap.ed.gov/sites/default/files/attachments/2019-08/UEHAppealForm.pdf",
  },
  {
    name: "Default Resolution Form",
    description:
      "For students who have defaulted on a prior federal student loan and need to demonstrate resolution.",
    pdfUrl:
      "https://studentaid.gov/manage-loans/default/get-out",
  },
]

/* ------------------------------------------------------------------ */
/* SECTION 3 — Miscellaneous Forms                                    */
/* ------------------------------------------------------------------ */
const miscForms = [
  {
    name: "Bankruptcy Status Worksheet",
    description:
      "Used to document the current status of any bankruptcy filing that may affect financial aid eligibility.",
  },
  {
    name: "Default and Overpayment Verification",
    description:
      "Verifies whether the student has resolved any prior federal loan default or grant overpayment.",
  },
  {
    name: "Loan Discharge and Disability Verification Form",
    description:
      "For students seeking documentation related to total and permanent disability loan discharge.",
  },
  {
    name: "Social Security / Name / Date of Birth Verification Form",
    description:
      "Used to resolve discrepancies in personal identification data reported on the FAFSA.",
  },
]

/* ------------------------------------------------------------------ */
/* SECTION 4 — Federal Direct Loan Resources                          */
/* ------------------------------------------------------------------ */
const federalResources = [
  {
    name: "Master Promissory Note (MPN)",
    description:
      "A legal document in which you promise to repay your federal student loans and any accrued interest and fees.",
    url: "https://studentaid.gov/mpn/",
  },
  {
    name: "Entrance Counseling",
    description:
      "Required before you receive your first federal student loan. Ensures you understand the terms and conditions.",
    url: "https://studentaid.gov/entrance-counseling/",
  },
  {
    name: "Exit Counseling",
    description:
      "Required when you graduate, leave school, or drop below half-time enrollment. Reviews repayment obligations.",
    url: "https://studentaid.gov/exit-counseling/",
  },
]

/* ------------------------------------------------------------------ */
/* SECTION 5 — Internal Navigation Links                              */
/* ------------------------------------------------------------------ */
const internalLinks = [
  {
    icon: GraduationCap,
    title: "Office of Student Financial Aid",
    href: "/enrollment/financial-aid",
  },
  {
    icon: DollarSign,
    title: "Tuition & Fees",
    href: "/enrollment/tuition-and-fees",
  },
  {
    icon: CreditCard,
    title: "Pay My Tuition",
    href: "/enrollment/pay-tuition",
  },
  {
    icon: ShieldAlert,
    title: "Default Prevention",
    href: "/enrollment/default-prevention",
  },
  {
    icon: Users,
    title: "Parent Information",
    href: "/enrollment/parent-information",
  },
  {
    icon: TrendingUp,
    title: "Satisfactory Academic Progress (SAP)",
    href: "/enrollment/sap",
  },
]

/* ------------------------------------------------------------------ */
/* PDF Form Card                                                      */
/* ------------------------------------------------------------------ */
function FormCard({
  name,
  description,
  pdfUrl,
}: {
  name: string
  description: string
  pdfUrl?: string
}) {
  return (
    <div className="flex items-start gap-4 rounded-lg border bg-card p-5 transition-colors hover:border-primary/40 hover:shadow-sm">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
        <FileText className="h-5 w-5 text-primary" />
      </div>
      <div className="flex-1">
        <p className="font-semibold text-foreground">{name}</p>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        {pdfUrl ? (
          <div className="mt-3 flex items-center gap-3">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Download className="h-3.5 w-3.5" />
              Download PDF
            </a>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
            >
              View
              <ExternalLink className="h-3 w-3" />
            </a>
            <span className="text-xs text-muted-foreground">PDF</span>
          </div>
        ) : (
          <p className="mt-3 text-xs text-muted-foreground italic">
            Contact the Office of Financial Aid for this form.
          </p>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* PAGE                                                               */
/* ------------------------------------------------------------------ */
export default async function FinancialAidFormsPage() {
  let sanityDocs: DocumentForm[] = []
  try {
    const result = await sanityFetch({
      query: DOCUMENTS_BY_CATEGORY_QUERY,
      params: { category: "financial-aid" },
    })
    sanityDocs = result.data ?? []
  } catch {
    // Sanity unreachable -- rely on hardcoded forms
  }

  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Financial Aid Forms"
          subtitle="Download and submit the required forms to complete your financial aid file."
          label="Financial Aid"
          breadcrumbs={[
            { label: "Enrollment", href: "/enrollment/office-of-admissions" },
            { label: "Financial Aid", href: "/enrollment/financial-aid" },
            { label: "Forms" },
          ]}
        />

        {/* SECTION 1 — Intro Instructions */}
        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Downloading and Completing Forms</h2>
            <p>
              The forms listed below are available for download in PDF format. Students
              must select the correct academic year when completing any financial aid
              form. All forms must be <strong>printed and completed clearly</strong> in
              blue or black ink. Incomplete or illegible forms may delay the processing
              of your financial aid file.
            </p>
            <p>
              You will need{" "}
              <a
                href="https://get.adobe.com/reader/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Adobe Acrobat Reader
              </a>{" "}
              (free) to view and print PDF forms. Some forms may be fillable on-screen;
              however, all forms must be signed by hand before submission.
            </p>
            <p>
              The Office of Financial Aid will verify all submitted documentation. Please
              allow adequate processing time after submission. You will be contacted if
              additional information is required.
            </p>
            <h3>Submitting Your Forms</h3>
            <p>Completed forms can be submitted by:</p>
            <ul>
              <li>
                <strong>In Person:</strong> Office of Financial Aid, Administration
                Building, Main Campus
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:financialaid@arkansasbaptist.edu">
                  financialaid@arkansasbaptist.edu
                </a>
              </li>
              <li>
                <strong>Fax:</strong> 501-420-1200
              </li>
              <li>
                <strong>Mail:</strong> Office of Financial Aid, Arkansas Baptist College,
                1600 Dr. Martin Luther King Jr. Drive, Little Rock, AR 72202
              </li>
            </ul>
          </div>
        </SectionWrapper>

        {/* CMS-MANAGED DOCUMENTS — from Sanity */}
        {sanityDocs.length > 0 && (
          <SectionWrapper className="bg-muted/30">
            <div className="mx-auto max-w-4xl">
              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                Financial Aid Documents
              </h2>
              <p className="mt-2 text-muted-foreground">
                The following documents are available for download. Updated by the Office of Financial Aid.
              </p>
              <div className="mt-8 grid gap-4">
                {sanityDocs.map((doc) => (
                  <div key={doc._id} className="flex items-start gap-4 rounded-lg border bg-card p-5 transition-colors hover:border-primary/40 hover:shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{doc.title}</p>
                      {doc.description && (
                        <p className="mt-1 text-sm text-muted-foreground">{doc.description}</p>
                      )}
                      {doc.fileUrl && (
                        <div className="mt-3 flex items-center gap-3">
                          <a
                            href={doc.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                          >
                            <Download className="h-3.5 w-3.5" />
                            Download
                          </a>
                          <a
                            href={doc.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                          >
                            View
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>
        )}

        {/* SECTION 2 — 2023-2024 Financial Aid Forms */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
              2023 &ndash; 2024 Financial Aid Forms
            </h2>
            <p className="mt-2 text-muted-foreground">
              The following forms are required for the current award year. Download, complete,
              and submit to the Office of Financial Aid.
            </p>
            <div className="mt-8 grid gap-4">
              {aidForms.map((form) => (
                <FormCard
                  key={form.name}
                  name={form.name}
                  description={form.description}
                  pdfUrl={form.pdfUrl}
                />
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* SECTION 3 — Miscellaneous Forms */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
              Miscellaneous Forms
            </h2>
            <p className="mt-2 text-muted-foreground">
              Additional forms that may be requested by the Office of Financial Aid.
              Contact our office to request a specific form or for assistance completing any document.
            </p>
            <div className="mt-8 grid gap-4">
              {miscForms.map((form) => (
                <FormCard
                  key={form.name}
                  name={form.name}
                  description={form.description}
                />
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* SECTION 4 — Federal Direct Loan Resources */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
              Federal Direct Loan Resources
            </h2>
            <p className="mt-2 text-muted-foreground">
              The following are required federal processes managed through the U.S. Department
              of Education. Each link will open the official federal website in a new tab.
            </p>
            <div className="mt-8 grid gap-4">
              {federalResources.map((resource) => (
                <a
                  key={resource.name}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-lg border bg-card p-5 transition-colors hover:border-primary/40 hover:shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <ExternalLink className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {resource.name}
                      </p>
                      <span className="inline-flex items-center rounded-full border border-border px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                        External Site
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {resource.description}
                    </p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* SECTION 5 — Internal Navigation */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
              Financial Aid Resources
            </h2>
            <p className="mt-2 text-muted-foreground">
              Explore additional financial aid information and resources.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {internalLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group flex items-center gap-3 rounded-lg border p-4 transition-colors hover:border-primary hover:bg-muted/50"
                >
                  <link.icon className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* CTA */}
        <CTABand
          heading="Need Help?"
          description="The financial aid team is here to walk you through every step."
          primaryAction={{
            label: "Contact Financial Aid",
            href: "/enrollment/financial-aid",
          }}
          secondaryAction={{
            label: "Apply for Financial Aid",
            href: "/enrollment/apply-for-financial-aid",
          }}
        />
      </main>
    </div>
  )
}
