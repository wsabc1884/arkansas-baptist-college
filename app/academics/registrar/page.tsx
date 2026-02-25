import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExternalLink, Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Registrar | Arkansas Baptist College",
  description:
    "The Office of the Registrar manages academic records, transcripts, enrollment verification, and graduation certification.",
}

export default function RegistrarPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero
          title="Office of the Registrar"
          subtitle="Academic Resources"
          description="Maintaining academic records and supporting student matriculation at Arkansas Baptist College."
          breadcrumbs={[
            { label: "Academics", href: "/academics/departments" },
            { label: "Registrar" },
          ]}
        />

        {/* Mission */}
        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Mission Statement</h2>
            <p>The Office of the Registrar is the College&apos;s data center whose primary responsibility entails collecting, storing, and maintaining academic records for the current and historical student body. The Office of the Registrar collaborates with internal and external constituents to enhance the total collegiate experience of student matriculation at Arkansas Baptist College.</p>
          </div>
        </SectionWrapper>

        {/* Transcripts */}
        <SectionWrapper className="bg-muted/30">
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Obtaining Transcripts of Record</h2>
            <p>A transcript of record must bear the corporate seal of Arkansas Baptist College, the date of issue, and the signature of the registrar in order to be official.</p>
            <p>To obtain a Transcript of Record or to have Arkansas Baptist College send a transcript to a third party, the student must provide:</p>
            <ol type="a">
              <li>The student&apos;s signature supported by a social security number or the unique student number issued by the academic computer. The unique Arkansas Baptist College ID number appears on the student ID card, transcript of record, individual financial account with the College, and adjacent to the name on all class rosters and grade reports.</li>
              <li>An individual address or fax number to which the transcript is to be sent.</li>
              <li>The name of the individual, company, educational agency, or institution to which the transcript is being released.</li>
              <li>Evidence that the student account is in good standing.</li>
            </ol>
            <p>Intra-College transcripts from the registrar&apos;s office to a department, division, school, dean, placement office, or adviser are free. Such transcripts are issued under the terms and conditions of the <strong>Family Education Rights and Privacy Act (FERPA)</strong> with the specific understanding that the transcript will not be released to a third party.</p>

            <h3>Official Transcript Fees</h3>
            <p>Due to social distancing policies, official transcripts are processed through the National Student Clearinghouse.</p>
            <div className="not-prose my-4">
              <a
                href="https://www.mystudentcenter.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Order a Transcript
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <p><em>Note: The National Student Clearinghouse does charge a fee.</em></p>
          </div>
        </SectionWrapper>

        {/* Services */}
        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Other Services by the Registrar&apos;s Office</h2>
            <ul>
              <li>Maintain accuracy and data integrity of academic records</li>
              <li>Interpret the academic policies covered in the student handbook</li>
              <li>Evaluate and post credits for transfer students</li>
              <li>Certify undergraduate students for graduation</li>
              <li>Maintain the students&apos; billing addresses (address to which grades are mailed)</li>
              <li>Change majors, minors, and advisers for the student population</li>
              <li>Prepare enrollment verifications, loan deferments, and Veterans Affairs reporting</li>
              <li>Key holder for Integrated Postsecondary Education Data System (IPEDS) reports</li>
              <li>Prepare semester and summer school class schedules</li>
              <li>Verify and run all grade rosters</li>
              <li>End-of-term retention notifications and statistical reports</li>
              <li>Issue official transcripts</li>
              <li>Maintain classroom assignments</li>
              <li>Responsible for the logistics of the Honors Convocation, Baccalaureate, and Commencement</li>
              <li>Maintain enrollment verification in the National Student Loan Data System (NSLDS)</li>
              <li>Service and Designated School Officer (DSO) for the admittance of international students</li>
            </ul>
          </div>
        </SectionWrapper>

        {/* Forms */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Available Forms</h2>
            <p className="mt-2 text-muted-foreground">Download the forms you need below.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { title: "Transcript Request Form", file: "transcript-request.pdf" },
                { title: "Change of Address Request Form", file: "change-of-address.pdf" },
                { title: "Change of Name Form", file: "change-of-name.pdf" },
                { title: "Change of Major Request Form", file: "change-of-major.pdf" },
                { title: "Enrollment Verification", file: "enrollment-verification.pdf" },
                { title: "Hold Directory Information Form", file: "hold-directory-info.pdf" },
                { title: "Student Request for Withdrawal", file: "student-withdrawal.pdf" },
              ].map((form) => (
                <a key={form.title} href={`/documents/registrar/${form.file}`} download className="group flex items-center gap-3 rounded-lg border bg-card p-4 transition-colors hover:border-primary">
                  <Download className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground group-hover:text-primary">{form.title}</span>
                </a>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Contact */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border bg-card p-6 sm:p-8">
              <h2 className="font-serif text-xl font-bold text-foreground sm:text-2xl">Registrar Office</h2>
              <div className="mt-4 space-y-2">
                <p className="font-semibold text-foreground">Delores Voliber, BBA</p>
                <p className="text-sm text-muted-foreground">Office Hours: Mon-Fri, 9:00 AM - 5:00 PM</p>
                <p className="text-sm text-muted-foreground">Phone: <a href="tel:5014201200" className="text-primary hover:underline">501-420-1200</a></p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <CTABand
          heading="Need Academic Records?"
          description="Order your official transcript online or contact the Registrar's Office for assistance."
          primaryAction={{ label: "Order Transcript", href: "https://www.mystudentcenter.org" }}
          secondaryAction={{ label: "Academic Catalog", href: "/academics/academic-catalog" }}
        />
      </main>
      <Footer />
    </div>
  )
}
