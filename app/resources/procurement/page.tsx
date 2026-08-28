import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { FileText, Mail, Phone, MapPin, Clock, CalendarClock, CircleHelp } from "lucide-react"

export const metadata: Metadata = {
  title: "Procurement & Solicitations | Arkansas Baptist College",
  description:
    "Arkansas Baptist College publicly posts competitive solicitation opportunities (RFPs, RFQs, IFBs) to support a fair, open, and transparent procurement process.",
}

type SolicitationDocument = {
  label: string
  href: string
}

type ActiveSolicitation = {
  title: string
  number: string
  type: string
  datePosted: string
  questionDeadline?: string
  dueDate: string
  preBid?: string
  contactName: string
  contactEmail: string
  scope: string
  documents: SolicitationDocument[]
  submission: string
}

type ArchivedSolicitation = {
  title: string
  number: string
  datePosted: string
  closingDate: string
  status: "Closed" | "Canceled" | "Awarded"
}

const activeSolicitations: ActiveSolicitation[] = [
  {
    title: "Workforce Village Development",
    number: "ABC-RFP-2026-001",
    type: "RFP",
    datePosted: "To be confirmed",
    questionDeadline: "To be confirmed",
    dueDate: "To be confirmed",
    preBid: "To be confirmed",
    contactName: "Office of Procurement",
    contactEmail: "procurement@arkansasbaptist.edu",
    scope:
      "Arkansas Baptist College is seeking qualified vendors for the Workforce Village project. Interested vendors should review the full solicitation package for detailed scope, requirements, and submission instructions. Responses must comply with all deadlines and requirements listed in the solicitation documents.",
    documents: [
      { label: "Full Solicitation Package (PDF)", href: "mailto:procurement@arkansasbaptist.edu?subject=Workforce%20Village%20Solicitation%20Package%20Request" },
    ],
    submission:
      "Submit responses by the deadline listed in the solicitation to procurement@arkansasbaptist.edu. Late submissions may not be considered.",
  },
]

const archivedSolicitations: ArchivedSolicitation[] = []

const howToRespond = [
  "Responses must be submitted by the deadline listed in the solicitation.",
  "Late submissions may not be considered.",
  "Questions must be submitted in writing to the contact listed in the solicitation.",
  "Only written addenda issued by Arkansas Baptist College modify the solicitation.",
  "Vendors are responsible for checking this page for updates before the due date.",
]

const statusStyles: Record<ArchivedSolicitation["status"], string> = {
  Closed: "bg-muted text-muted-foreground",
  Canceled: "bg-destructive/10 text-destructive",
  Awarded: "bg-primary/10 text-primary",
}

export default function ProcurementPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Procurement & Solicitations"
          subtitle="Resources"
          description="Competitive solicitation opportunities for vendors interested in doing business with Arkansas Baptist College."
          breadcrumbs={[
            { label: "Resources", href: "/resources/directory" },
            { label: "Procurement & Solicitations" },
          ]}
        />

        {/* Opening statement */}
        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <p>
              Arkansas Baptist College publicly posts competitive solicitation opportunities on this page to support a
              fair, open, and transparent procurement process. Vendors interested in doing business with the College
              should review the solicitation documents carefully and follow all instructions, deadlines, and submission
              requirements included in each posting. Arkansas Baptist College reserves the right to reject any or all
              responses in accordance with applicable law, policy, and solicitation terms. Competitive solicitations
              posted on this page are publicly available for vendor review during the solicitation period.
            </p>
          </div>
        </SectionWrapper>

        {/* Active Solicitations */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Active Solicitations</h2>
            <p className="mt-2 text-muted-foreground">
              Open opportunities currently accepting responses. Review each posting for full requirements.
            </p>

            {activeSolicitations.length === 0 ? (
              <p className="mt-6 rounded-lg border bg-card p-6 text-muted-foreground">
                There are no active solicitations at this time. Please check back for future opportunities.
              </p>
            ) : (
              <div className="mt-6 space-y-6">
                {activeSolicitations.map((sol) => (
                  <article key={sol.number} className="rounded-lg border bg-card p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-xl font-bold text-foreground">{sol.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Solicitation No. {sol.number}
                        </p>
                      </div>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {sol.type}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{sol.scope}</p>

                    <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Date Posted</dt>
                        <dd className="mt-1 text-sm text-foreground">{sol.datePosted}</dd>
                      </div>
                      {sol.questionDeadline && (
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Question Deadline</dt>
                          <dd className="mt-1 text-sm text-foreground">{sol.questionDeadline}</dd>
                        </div>
                      )}
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Response Due</dt>
                        <dd className="mt-1 text-sm font-semibold text-foreground">{sol.dueDate}</dd>
                      </div>
                      {sol.preBid && (
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Pre-Proposal Conference</dt>
                          <dd className="mt-1 text-sm text-foreground">{sol.preBid}</dd>
                        </div>
                      )}
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Contact</dt>
                        <dd className="mt-1 text-sm text-foreground">
                          {sol.contactName}
                          <br />
                          <a href={`mailto:${sol.contactEmail}`} className="font-semibold text-primary hover:underline">
                            {sol.contactEmail}
                          </a>
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-6 border-t pt-4">
                      <h4 className="text-sm font-semibold text-foreground">Solicitation Documents</h4>
                      <ul className="mt-3 space-y-2">
                        {sol.documents.map((doc) => (
                          <li key={doc.label}>
                            <a href={doc.href} className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                              <FileText className="h-4 w-4 shrink-0" />
                              {doc.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-sm text-muted-foreground">
                        <strong className="text-foreground">Submission:</strong> {sol.submission}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </SectionWrapper>

        {/* How to Respond */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">How to Respond</h2>
            <ul className="mt-6 space-y-3">
              {howToRespond.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CircleHelp className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </SectionWrapper>

        {/* Archived / Closed Solicitations */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Archived / Closed Solicitations</h2>
            <p className="mt-2 text-muted-foreground">
              A record of past solicitations for transparency and reference.
            </p>

            {archivedSolicitations.length === 0 ? (
              <p className="mt-6 rounded-lg border bg-card p-6 text-muted-foreground">
                There are no archived solicitations at this time.
              </p>
            ) : (
              <div className="mt-6 overflow-x-auto rounded-lg border bg-card">
                <table className="w-full text-left text-sm">
                  <thead className="border-b bg-muted/50">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-foreground">Title</th>
                      <th className="px-4 py-3 font-semibold text-foreground">Number</th>
                      <th className="px-4 py-3 font-semibold text-foreground">Posted</th>
                      <th className="px-4 py-3 font-semibold text-foreground">Closed</th>
                      <th className="px-4 py-3 font-semibold text-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {archivedSolicitations.map((sol) => (
                      <tr key={sol.number} className="border-b last:border-0">
                        <td className="px-4 py-3 text-foreground">{sol.title}</td>
                        <td className="px-4 py-3 text-muted-foreground">{sol.number}</td>
                        <td className="px-4 py-3 text-muted-foreground">{sol.datePosted}</td>
                        <td className="px-4 py-3 text-muted-foreground">{sol.closingDate}</td>
                        <td className="px-4 py-3">
                          <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusStyles[sol.status]}`}>
                            {sol.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </SectionWrapper>

        {/* Procurement contact block */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Office of Procurement</h2>
            <p className="mt-2 text-muted-foreground">
              For general procurement questions, contact the Business Office. Questions about a specific solicitation
              must be directed to the contact listed within that posting.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-lg border bg-card p-5">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a href="mailto:procurement@arkansasbaptist.edu" className="mt-1 inline-block text-sm font-semibold text-primary hover:underline">
                    procurement@arkansasbaptist.edu
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border bg-card p-5">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <p className="mt-1 text-sm text-muted-foreground">(501) 420-1200</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border bg-card p-5">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">Business Hours</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Monday&ndash;Friday, 8:00 a.m.&ndash;5:00 p.m. CT</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border bg-card p-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">Mailing Address</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Arkansas Baptist College
                    <br />
                    Attn: Business Office / Procurement
                    <br />
                    1600 Dr. Martin Luther King Jr. Drive
                    <br />
                    Little Rock, AR 72202
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <CTABand
          heading="Questions About Doing Business with ABC?"
          description="Reach out to the Office of Procurement for guidance on active solicitations and vendor requirements."
          primaryAction={{ label: "Email Procurement", href: "mailto:procurement@arkansasbaptist.edu" }}
          secondaryAction={{ label: "Resource Directory", href: "/resources/directory" }}
        />
      </main>
    </div>
  )
}
