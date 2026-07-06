import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"

export const metadata: Metadata = {
  title: "Data Retention Policy | Arkansas Baptist College",
  description:
    "Arkansas Baptist College Data Retention Policy establishing standards for the collection, use, storage, protection, and retention of personal and institutional data.",
}

export default function DataRetentionPolicyPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Data Retention Policy"
          subtitle="Consumer Information"
          description="Standards and responsibilities for the collection, use, storage, protection, and retention of data."
          breadcrumbs={[
            { label: "Resources", href: "/resources/consumer-information" },
            { label: "Consumer Information", href: "/resources/consumer-information" },
            { label: "Data Retention Policy" },
          ]}
        />

        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>I. Policy Statement</h2>
            <p>
              Arkansas Baptist College (&ldquo;the College&rdquo;) is committed to safeguarding the privacy,
              confidentiality, and integrity of personal and institutional data. This policy establishes the standards
              and responsibilities for the collection, use, storage, protection, and retention of data in compliance
              with applicable federal and state laws and best practices in higher education.
            </p>

            <h2>II. Purpose</h2>
            <p>
              The purpose of this policy is to ensure that Arkansas Baptist College maintains appropriate administrative,
              technical, and physical safeguards to protect personal data and institutional information, while
              supporting the College&apos;s academic, administrative, and operational functions.
            </p>

            <h2>III. Scope</h2>
            <p>
              This policy applies to all Arkansas Baptist College students, employees, contractors, and any individuals
              or entities who access, use, or manage College data or information systems.
            </p>

            <h2>IV. Definitions</h2>
            <p>
              <strong>Data</strong>
              <br />
              Information in a format that can be processed by Arkansas Baptist College systems, including electronic and
              physical records.
            </p>
            <p>
              <strong>Personal Data</strong>
              <br />
              Any information relating to an identifiable individual, including but not limited to students, employees,
              applicants, and alumni. This includes identifiers such as names, identification numbers, email addresses,
              location data, online identifiers (e.g., IP addresses), or other characteristics specific to an individual.
            </p>
            <p>
              <strong>Data Subject</strong>
              <br />
              Any individual whose personal data is collected, maintained, or processed by Arkansas Baptist College.
            </p>
            <p>
              <strong>Consent</strong>
              <br />
              A freely given, specific, informed, and unambiguous indication of a data subject&apos;s agreement to the
              processing of their personal data.
            </p>
            <p>
              <strong>Data Storage</strong>
              <br />
              The methods and systems used by Arkansas Baptist College to securely retain and manage data in electronic
              or physical formats.
            </p>

            <h2>V. Policy Requirements</h2>

            <h3>A. Baseline Requirements</h3>
            <ol>
              <li>
                All employees and authorized users must protect College data by following established security policies
                and procedures.
              </li>
              <li>
                Data shall not be shared informally and must only be accessed based on assigned roles and
                responsibilities.
              </li>
              <li>
                Arkansas Baptist College shall provide training and guidance to ensure employees understand their data
                protection responsibilities.
              </li>
              <li>
                Personal data shall not be disclosed to unauthorized individuals within or outside the College.
              </li>
            </ol>

            <h3>B. Data Collection</h3>
            <ol>
              <li>
                Arkansas Baptist College collects personally identifiable information (PII) that is voluntarily provided
                through institutional processes, including admissions, financial aid, course registration, employment,
                and other College services.
              </li>
              <li>
                The College shall limit data collection to only what is necessary to fulfill legitimate institutional
                purposes.
              </li>
            </ol>

            <h3>C. Data Protection</h3>
            <ol>
              <li>
                The College shall implement reasonable administrative, technical, and physical safeguards to protect
                personal data.
              </li>
              <li>
                While the College strives to protect all data, no system of transmission or storage can be guaranteed to
                be completely secure.
              </li>
              <li>
                The College is not responsible for the privacy or security practices of third-party systems not
                controlled by Arkansas Baptist College.
              </li>
            </ol>

            <h3>D. Data Retention</h3>
            <ol>
              <li>
                Personal data shall be retained only for as long as necessary to meet operational, legal, and regulatory
                requirements.
              </li>
            </ol>

            <h3>E. Data Use and Disclosure</h3>
            <ol>
              <li>
                Personal data may be used to support College operations, provide services, and communicate with
                students, employees, and stakeholders.
              </li>
              <li>Arkansas Baptist College does not sell or trade personal data.</li>
              <li>
                Personal data may be disclosed only under the following conditions:
                <ul>
                  <li>With the explicit consent of the individual;</li>
                  <li>As required by law, court order, or legal process;</li>
                  <li>
                    To authorized service providers acting on behalf of the College, provided they agree to maintain
                    confidentiality and data security.
                  </li>
                </ul>
              </li>
              <li>
                Individuals may request removal of non-essential or outdated contact information, when appropriate,
                through the Office of the Registrar (students) or Human Resources (employees).
              </li>
              <li>
                Use of Arkansas Baptist College information systems constitutes acknowledgment and consent to the data
                practices outlined in this policy.
              </li>
              <li>
                Aggregated, non-identifiable data may be used for institutional improvement, analytics, and security
                monitoring.
              </li>
            </ol>

            <h3>F. Data Storage</h3>
            <ol>
              <li>
                All electronic data must be securely stored and protected against unauthorized access, loss, or cyber
                threats.
              </li>
              <li>
                Data must be stored on approved Arkansas Baptist College systems, including designated servers and
                authorized cloud services.
              </li>
              <li>
                Storage of institutional data on personal devices is prohibited unless explicitly authorized and
                properly secured.
              </li>
              <li>
                Physical records containing sensitive information must be secured in locked or restricted-access
                locations when not in use.
              </li>
            </ol>

            <h2>VI. Responsibilities</h2>
            <ul>
              <li>
                <strong>Office of Information Technology</strong>
                <br />
                Responsible for implementing and maintaining data security systems and protocols.
              </li>
              <li>
                <strong>Faculty and Staff</strong>
                <br />
                Responsible for safeguarding data and complying with all provisions of this policy.
              </li>
              <li>
                <strong>Supervisors and Department Leaders</strong>
                <br />
                Responsible for ensuring that employees understand and comply with this policy.
              </li>
            </ul>

            <h2>VII. Compliance</h2>
            <p>
              Failure to comply with this policy may result in disciplinary action, up to and including termination of
              employment or dismissal, in accordance with Arkansas Baptist College policies and procedures.
            </p>

            <h2>VIII. Related Policies</h2>
            <ul>
              <li>Acceptable Use Policy</li>
              <li>Records Retention Policy</li>
              <li>Information Security Policy</li>
              <li>Family Educational Rights and Privacy Act (FERPA)</li>
            </ul>

            <h2>IX. Review and Revision</h2>
            <p>
              This policy shall be reviewed periodically by the Office of Information Technology and College leadership
              and updated as necessary to remain compliant with applicable laws and institutional needs.
            </p>
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
