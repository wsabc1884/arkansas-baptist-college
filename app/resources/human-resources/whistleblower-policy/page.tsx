import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Download, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Whistleblower Policy | Arkansas Baptist College",
  description:
    "Arkansas Baptist College Whistleblower Policy: how to report suspected wrongdoing in good faith, anonymous reporting options, confidentiality, and protection from retaliation.",
}

const policyDetails = [
  { label: "Policy owner", value: "Office of Human Resources" },
  { label: "Oversight", value: "Office of the President and Board of Trustees" },
  { label: "Effective date", value: "September 17, 2026" },
  { label: "Review cycle", value: "At least every two years" },
  { label: "Supersedes", value: "Any prior whistleblower policy or interim guidance" },
]

const reportingChannels = [
  { concern: "Most employee or operational concerns", channel: "Direct supervisor or department head" },
  {
    concern: "Concern involving a supervisor or department head",
    channel: "Office of Human Resources",
    email: "HR@arkansasbaptist.edu",
    phone: "501-420-1219",
  },
  {
    concern: "Concern involving Human Resources or a senior administrator",
    channel: "Office of the President",
    email: "President@arkansasbaptist.edu",
    phone: "501-420-1201",
  },
  { concern: "Concern involving the President or a trustee other than the Board chair", channel: "Chair of the Board of Trustees" },
  {
    concern: "Concern involving the Board chair",
    channel: "Trustee appointed by collaboration of the President and Office of Human Resources",
  },
  {
    concern: "Concern involving both the chair and vice chair, or a pervasive Board conflict",
    channel: "Independent legal counsel designated by the Board",
  },
]

export default function WhistleblowerPolicyPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Whistleblower Policy"
          subtitle="Human Resources"
          description="Integrity, accountability, good-faith reporting, and protection from retaliation."
          breadcrumbs={[
            { label: "Resources", href: "/resources/human-resources" },
            { label: "Human Resources", href: "/resources/human-resources" },
            { label: "Whistleblower Policy", href: "/resources/human-resources/whistleblower-policy" },
          ]}
        />

        <SectionWrapper>
          <div className="mx-auto flex max-w-4xl flex-col gap-6">
            <div className="flex flex-col gap-4 rounded-lg border border-destructive/40 bg-destructive/5 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-destructive" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-foreground">
                  <strong>Immediate threat to life or safety?</strong> Call 911 and Campus Safety at{" "}
                  <a href="tel:5014201211" className="font-semibold text-primary hover:underline">
                    501-420-1211
                  </a>{" "}
                  before or in addition to a report under this policy.
                </p>
              </div>
              <a
                href="/documents/hr/whistleblower-policy.pdf"
                download
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download PDF
              </a>
            </div>

            <dl className="grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2">
              {policyDetails.map((item) => (
                <div key={item.label} className="flex flex-col gap-1 bg-card p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{item.label}</dt>
                  <dd className="text-sm text-foreground">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="prose-abc mx-auto mt-10 max-w-4xl">
            <h2 id="purpose">1. Purpose</h2>
            <p>
              Arkansas Baptist College (the &ldquo;College&rdquo;) is committed to conducting its affairs with integrity,
              ethics, accountability, transparency, and responsible stewardship, consistent with its mission as a
              Christian institution of higher learning. Honesty, moral courage, and responsible reporting are essential
              to protecting the College, its students, its employees, and the public.
            </p>
            <p>
              This policy establishes accessible and appropriately independent channels for reporting suspected
              wrongdoing; protects good-faith reporters and participants from retaliation; provides for prompt, fair,
              impartial, and appropriately confidential review; and supports compliance with applicable law and College
              policy.
            </p>

            <h2 id="scope">2. Scope</h2>
            <p>
              This policy applies to all members of the College community and to others who conduct business with or
              on behalf of the College, including:
            </p>
            <ul>
              <li>Full-time and part-time faculty, staff, and administrators;</li>
              <li>Members and officers of the Board of Trustees;</li>
              <li>Students;</li>
              <li>Volunteers; and</li>
              <li>Independent contractors, vendors, consultants, and other stakeholders.</li>
            </ul>

            <h2 id="definitions">3. Definitions</h2>
            <p>
              <strong>Good-faith report.</strong> A report made honestly, without malice or intent for improper personal
              gain, and based on a reasonable belief that the information disclosed may indicate misconduct. A reporter
              need not prove that misconduct occurred or be correct in the conclusion to receive protection for a
              good-faith report.
            </p>
            <p>
              <strong>Reporter.</strong> A person who raises a concern or provides information under this policy,
              whether identified or anonymous.
            </p>
            <p>
              <strong>Retaliation.</strong> An adverse action, threat, intimidation, harassment, interference, or other
              conduct that might dissuade a reasonable person from making a good-faith report or participating in an
              authorized review.
            </p>
            <p>
              <strong>Conflict of interest.</strong> A personal, professional, financial, supervisory, or other interest
              that could reasonably call a person&apos;s impartiality into question.
            </p>

            <h2 id="reportable-conduct">4. Reportable Conduct</h2>
            <p>
              A person is encouraged to report conduct reasonably believed to violate law, regulation, College policy,
              contractual or grant requirements, or applicable ethical standards. Reportable matters include, but are
              not limited to:
            </p>
            <ul>
              <li>Fraud, embezzlement, theft, misappropriation, improper payments, bribery, or kickbacks;</li>
              <li>Misuse of College, grant, restricted, or public funds;</li>
              <li>
                Falsification, concealment, unauthorized alteration, or improper destruction of financial, academic,
                personnel, student, compliance, or other College records;
              </li>
              <li>
                Violations of accounting procedures, internal controls, procurement requirements, or segregation-of-duty
                safeguards;
              </li>
              <li>Misuse of College assets, property, systems, data, or confidential information;</li>
              <li>Undisclosed or improperly managed conflicts of interest;</li>
              <li>
                Material violations of federal, state, or local law, including requirements applicable to federal
                student aid, federal grants, civil rights, campus safety, student privacy, workplace safety, or other
                regulated College activities;
              </li>
              <li>Discrimination, harassment, or retaliation prohibited by law or College policy;</li>
              <li>Conduct that creates a substantial threat to the health or safety of students, employees, or the public;</li>
              <li>Obstruction of, interference with, or failure to cooperate in an authorized investigation; and</li>
              <li>Any other significant breach of College policy or ethical responsibility.</li>
            </ul>
            <p>
              This policy does not replace established procedures for Title IX reports, discrimination complaints,
              employee or student grievances, academic appeals, campus safety emergencies, or other matters governed by
              a specific process. Those procedures ordinarily should be used. A person may also use this policy when the
              concern includes suspected retaliation, misuse of the designated process, concealment, a conflict of
              interest, or a reasonable fear that the designated process will not provide appropriate protection.
            </p>
            <p>
              An immediate threat to life or safety should be reported to 911 and Campus Safety at 501-420-1211 before
              or in addition to a report under this policy.
            </p>

            <h2 id="reporting">5. Reporting a Concern</h2>
            <h3>5.1 General expectations</h3>
            <p>
              Reports should be made as soon as reasonably possible. A reporter should provide available factual
              information, such as what occurred, relevant dates and locations, persons involved, possible witnesses,
              and supporting documents. A reporter should not delay reporting to investigate independently, access
              records without authorization, confront an involved person, or interfere with evidence or an
              investigation.
            </p>
            <h3>5.2 Authorized reporting channels</h3>
          </div>

          <div className="mx-auto mt-4 max-w-4xl overflow-x-auto rounded-lg border">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Authorized whistleblower reporting channels by nature of concern</caption>
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Nature of concern
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Primary channel
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y bg-card">
                {reportingChannels.map((row) => (
                  <tr key={row.concern}>
                    <td className="px-4 py-3 align-top leading-relaxed text-foreground">{row.concern}</td>
                    <td className="px-4 py-3 align-top leading-relaxed text-foreground">
                      <span className="font-medium">{row.channel}</span>
                      {row.email ? (
                        <span className="mt-1 flex flex-wrap gap-x-3 text-muted-foreground">
                          <a href={`mailto:${row.email}`} className="text-primary hover:underline">
                            {row.email}
                          </a>
                          <a href={`tel:${row.phone?.replace(/-/g, "")}`} className="hover:underline">
                            {row.phone}
                          </a>
                        </span>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="prose-abc mx-auto mt-6 max-w-4xl">
            <p>
              The College shall maintain current contact information for the Board chair on the policy webpage. A change
              in officeholder or contact information does not require a policy amendment, but the published information
              must be updated promptly.
            </p>
            <p>
              A report also may be mailed in a sealed envelope marked{" "}
              <strong>
                &ldquo;CONFIDENTIAL WHISTLEBLOWER REPORT - TO BE OPENED ONLY BY THE ADDRESSEE&rdquo;
              </strong>{" "}
              to the appropriate recipient by title at Arkansas Baptist College, 1600 Dr. Martin Luther King Jr. Drive,
              Little Rock, Arkansas 72202. Personnel receiving such mail shall deliver it unopened to the named
              officeholder.
            </p>

            <h3>5.3 Anonymous reports</h3>
            <p>
              A person may report anonymously using the College&apos;s designated anonymous reporting form linked on the
              College policy webpage, printing, and sending it in a sealed envelope marked &ldquo;CONFIDENTIAL
              WHISTLEBLOWER REPORT - TO BE OPENED ONLY BY THE ADDRESSEE&rdquo; to the appropriate recipient by title at
              Arkansas Baptist College, 1600 Dr. Martin Luther King Jr. Drive, Little Rock, Arkansas 72202 without
              identifying information. The anonymous reporting form shall be configured not to require or record the
              reporter&apos;s name, College email address, or sign-in identity. The College will not attempt to
              identify an anonymous reporter except when required by law or necessary to address an imminent threat.
            </p>
            <p>
              Anonymous reports should include sufficient detail to permit review. Anonymity may limit the
              College&apos;s ability to ask questions, verify information, report progress, or complete an
              investigation. The Microsoft Forms training and acknowledgment quiz is not an anonymous reporting channel
              and shall not be used to submit allegations.
            </p>

            <h3>5.4 External reporting</h3>
            <p>
              Nothing in this policy prohibits or discourages any person from communicating with, filing a charge or
              complaint with, providing information to, or participating in an investigation or proceeding before an
              appropriate government agency or law-enforcement authority. No prior authorization from the College is
              required, and a person is not required to notify the College of such communication. Applicable legal
              protections and remedies remain available.
            </p>

            <h2 id="triage">6. Receipt, Triage, and Conflict Screening</h2>
            <ol>
              <li>
                When the reporter&apos;s identity and contact information are known, the authorized recipient will
                acknowledge receipt within five business days. Acknowledgment does not represent a conclusion about the
                report.
              </li>
              <li>
                The authorized recipient will promptly assess immediate safety, legal, regulatory, evidence-preservation,
                reporting, and conflict-of-interest considerations.
              </li>
              <li>
                The recipient will determine whether the matter falls within this policy, should be referred to another
                established process, warrants interim protective measures, or requires a full investigation.
              </li>
              <li>
                Before participating, every person assigned to receive, direct, investigate, advise on, or decide the
                matter must disclose actual or perceived conflicts. A conflicted person shall be recused and shall not
                receive confidential updates except as legally required.
              </li>
              <li>
                The College will document the routing decision, assigned authority, recusals, and any interim measures.
              </li>
            </ol>

            <h2 id="investigation">7. Investigation and Resolution</h2>
            <h3>7.1 Assignment of an impartial investigator</h3>
            <p>
              If an investigation is warranted, it will be assigned to a qualified and impartial investigator.
              Depending on the subject matter and persons involved, the investigator may be Human Resources, another
              qualified College official, independent legal counsel, an accountant or auditor, or another external
              investigator selected by the authorized decision-maker.
            </p>
            <ul>
              <li>
                For matters not involving the President or a trustee, the President or designee will select the
                investigator after conflict screening.
              </li>
              <li>
                For matters involving the President or a trustee other than the Board chair, the Board chair will select
                the investigator.
              </li>
              <li>For matters involving the Board chair, the Board vice chair will select the investigator.</li>
              <li>
                When both the chair and vice chair are implicated or conflicted, independent legal counsel previously
                designated by the Board will coordinate assignment with the disinterested members of the Board.
              </li>
              <li>
                A person named in the report, supervised by a person named in the report, or otherwise conflicted may
                not select, direct, or participate in the investigation or disposition.
              </li>
            </ul>
            <h3>7.2 Fair process</h3>
            <p>
              Investigations will be prompt, fair, impartial, appropriately scoped, and conducted in a manner consistent
              with applicable law and College policy. All members of the College community are expected to cooperate,
              preserve relevant information, respond truthfully, and maintain appropriate confidentiality. Knowingly
              interfering with an investigation or retaliating against a participant is prohibited.
            </p>
            <p>
              Investigations generally should be completed within 60 calendar days after assignment. When complexity or
              circumstances require additional time, the case record will document the reason, revised target date, and
              periodic status review.
            </p>
            <h3>7.3 Findings and corrective action</h3>
            <p>
              At the conclusion, the investigator will provide findings and recommendations to the authorized
              decision-maker. Appropriate corrective, disciplinary, remedial, control, policy, reporting, or training
              action will be taken when warranted. The reporter will be informed that the matter has been addressed or
              closed to the extent permitted by law, privacy, personnel, student-record, privilege, and other
              confidentiality requirements. The College is not required to disclose confidential personnel action or
              other protected information.
            </p>

            <h2 id="confidentiality">8. Confidentiality and Information Protection</h2>
            <p>
              The College will protect the confidentiality of reports and investigations to the greatest extent
              reasonably possible, consistent with a thorough and fair review, legal obligations, safety needs, due
              process, and corrective action. A reporter&apos;s identity and case information will be shared only with
              persons who have a legitimate need to know. Absolute confidentiality cannot be guaranteed.
            </p>
            <p>
              Reporters, witnesses, investigators, decision-makers, and others who receive case information must protect
              it from unauthorized disclosure. This requirement does not restrict lawful communications with government
              agencies, law enforcement, personal legal counsel, or others as protected by law; nor does it prevent a
              person from discussing the person&apos;s own experiences or exercising protected rights.
            </p>

            <h2 id="non-retaliation">9. Prohibition Against Retaliation</h2>
            <p>
              The College prohibits retaliation against any person who, in good faith, reports a concern, seeks guidance
              about reporting, declines to participate in suspected misconduct, preserves or provides information,
              participates in an authorized review, or communicates with an appropriate government agency or
              law-enforcement authority.
            </p>
            <p>
              Retaliation may include termination, demotion, suspension, intimidation, threats, harassment, reduction in
              pay or hours, adverse scheduling or assignments, exclusion, denial of academic or employment opportunity, a
              negative evaluation motivated by protected activity, interference with lawful employment or education, or
              other conduct that could dissuade a reasonable person from reporting or participating.
            </p>
            <p>
              Suspected retaliation should be reported promptly through any channel in Section 5. A retaliation report
              involving a person who received or directed the original matter must be routed to an alternate,
              nonconflicted recipient. Retaliation is a separate violation and may result in discipline up to and
              including termination, expulsion, contract action, or removal from the Board, subject to applicable
              procedures.
            </p>

            <h2 id="good-faith">10. Good Faith and Knowingly False Reports</h2>
            <p>
              Protection applies when a report is made honestly and on a reasonable belief, even if the concern is not
              substantiated. A report made maliciously, with knowledge that it is false, or for improper personal gain
              is not protected and may result in corrective or disciplinary action. A finding that a concern was
              unsubstantiated, standing alone, is not evidence that the report was made in bad faith.
            </p>

            <h2 id="records">11. Centralized Documentation and Records</h2>
            <p>
              The Office of Human Resources will maintain a centralized, access-controlled case log for reports that do
              not involve Human Resources, the President, or a trustee. Board-level matters will be maintained by the
              Board-designated independent custodian, such as independent legal counsel, and summarized in
              de-identified form for the institutional log. No person implicated in a report may control or alter the
              corresponding record.
            </p>
            <p>
              The log will record, as applicable, general category; reporting channel; assigned authority; conflict
              screening and recusals; acknowledgment date; referral or investigation status; target and closure dates;
              disposition; corrective action; retaliation allegations; and follow-up. Case files will be retained
              securely in accordance with the College&apos;s records-retention schedule, legal holds, grant or
              regulatory requirements, and applicable law.
            </p>
            <p>
              At least annually, Human Resources and the Board-designated custodian will prepare a de-identified report
              for the President and Board of Trustees describing the number and general categories of reports,
              timeliness, dispositions, corrective actions, retaliation concerns, training completion, and recommended
              policy or control improvements. Reports to the Board will protect identities and privileged or legally
              protected information.
            </p>

            <h2 id="training">12. Training, Communication, and Accessibility</h2>
            <ul>
              <li>
                The policy will be posted on the College website and incorporated by reference into applicable employee
                and student handbooks.
              </li>
              <li>
                Faculty, staff, and administrators will complete training upon hire and annually thereafter. Training
                will address reportable conduct, reporting options, confidentiality, good faith, nonretaliation,
                conflicts, and supervisory responsibilities.
              </li>
              <li>
                Trustees will receive the policy during onboarding and complete periodic governance and ethics training.
              </li>
              <li>
                Supervisors who receive a possible report must promptly route it to an authorized channel, avoid
                promising absolute confidentiality, preserve information, refrain from investigating independently, and
                prevent retaliation.
              </li>
              <li>
                Training completion, assessment results, acknowledgments, reminders, and remediation will be documented.
              </li>
              <li>Reasonable accommodations and accessible formats will be provided upon request.</li>
            </ul>

            <h2 id="administration">13. Administration, Review, and Non-Waiver</h2>
            <p>
              The Office of Human Resources owns and administers this policy for ordinary institutional matters. The
              President oversees implementation, subject to Board oversight. The Board chair, vice chair, and
              Board-designated independent legal counsel administer matters assigned to them under this policy. The full
              Board retains ultimate governance oversight but will exclude conflicted trustees from deliberation and
              decision-making.
            </p>
            <p>
              Human Resources will review the policy at least every two years in consultation with the President, Board
              leadership, and legal counsel. Material amendments require approval by the Board of Trustees. Operational
              contact information may be updated without a formal policy amendment, provided the approved reporting
              structure is not changed.
            </p>
            <p>
              Nothing in this policy creates a contract of employment, alters at-will employment where applicable,
              limits rights or obligations under law, prevents the College from taking legitimate nonretaliatory action,
              or requires disclosure of privileged or legally protected information. If this policy conflicts with
              applicable law, the law controls and the remainder of the policy remains in effect.
            </p>

            <h2 id="questions">14. Questions</h2>
            <p>
              Questions about this policy may be directed to the Office of Human Resources at{" "}
              <a href="mailto:HR@arkansasbaptist.edu">HR@arkansasbaptist.edu</a> or{" "}
              <a href="tel:5014201219">501-420-1219</a>. Questions should not include an allegation or confidential case
              information unless submitted through an authorized reporting channel.
            </p>
          </div>
        </SectionWrapper>

        <CTABand
          heading="Questions About This Policy?"
          description="Contact the Office of Human Resources. Please do not include allegations or confidential case information in general questions."
          primaryAction={{ label: "Email HR", href: "mailto:HR@arkansasbaptist.edu" }}
          secondaryAction={{ label: "Download Policy PDF", href: "/documents/hr/whistleblower-policy.pdf" }}
        />
      </main>
    </div>
  )
}
