import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"

export const metadata: Metadata = {
  title: "Academic Expression Policy | Arkansas Baptist College",
  description:
    "Arkansas Baptist College Content Governance and Academic Expression Policy establishing guidelines for the review, regulation, and dissemination of academic and institutional content.",
}

export default function AcademicExpressionPolicyPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Academic Expression Policy"
          subtitle="Consumer Information"
          description="Content Governance and Academic Expression Policy."
          breadcrumbs={[
            { label: "Resources", href: "/resources/consumer-information" },
            { label: "Consumer Information", href: "/resources/consumer-information" },
            { label: "Academic Expression Policy" },
          ]}
        />

        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Arkansas Baptist College Content Governance and Academic Expression Policy</h2>

            <h3>1. Purpose</h3>
            <p>
              This policy establishes guidelines for the review, regulation, and dissemination of academic,
              instructional, and institutional content at Arkansas Baptist College. It aims to:
            </p>
            <ul>
              <li>Uphold the College&apos;s Christian mission and Baptist heritage</li>
              <li>Protect academic freedom and intellectual inquiry</li>
              <li>Ensure content aligns with ethical, legal, and educational standards</li>
              <li>Provide clear procedures for addressing concerns about content</li>
            </ul>

            <h3>2. Guiding Principles</h3>
            <h4>2.1 Academic Freedom</h4>
            <p>Arkansas Baptist College affirms that faculty and students have the right to:</p>
            <ul>
              <li>Explore diverse perspectives</li>
              <li>Engage in critical inquiry</li>
              <li>Discuss controversial or sensitive topics relevant to coursework</li>
            </ul>
            <p>Academic freedom is exercised within the framework of respectful discourse and institutional values.</p>

            <h4>2.2 Institutional Values</h4>
            <p>As a faith-based institution, the College expects all content to reflect:</p>
            <ul>
              <li>Respect for Christian principles</li>
              <li>Human dignity and inclusion</li>
              <li>Moral and ethical responsibility</li>
            </ul>

            <h3>3. Scope of Policy</h3>
            <p>This policy applies to:</p>
            <ul>
              <li>Course materials and syllabi</li>
              <li>Lectures, presentations, and classroom discussions</li>
              <li>Library collections and academic resources</li>
              <li>Student publications and campus media</li>
              <li>Guest speakers and public events hosted by the College</li>
            </ul>

            <h3>4. Content Standards</h3>
            <p>Content may be subject to review if it includes:</p>
            <h4>4.1 Prohibited Content</h4>
            <ul>
              <li>Material that promotes violence, hatred, or discrimination</li>
              <li>Obscene or unlawful content as defined by federal or state law</li>
              <li>Harassment or targeted attacks against individuals or groups</li>
            </ul>
            <h4>4.2 Restricted Content (Contextual Use Allowed)</h4>
            <p>The following may be permitted for academic purposes when clearly justified:</p>
            <ul>
              <li>Explicit or sensitive material in literature, history, or health sciences</li>
              <li>Discussions of controversial social, political, or theological issues</li>
              <li>Critiques of religious or institutional doctrines</li>
            </ul>
            <p>Such content must:</p>
            <ul>
              <li>Be pedagogically relevant</li>
              <li>Include appropriate context and guidance</li>
              <li>Be presented in a respectful and scholarly manner</li>
            </ul>

            <h3>5. Review and Oversight</h3>
            <h4>5.1 Faculty Responsibility</h4>
            <p>Faculty members are responsible for:</p>
            <ul>
              <li>Selecting course materials aligned with academic objectives</li>
              <li>Providing content warnings when appropriate</li>
              <li>Ensuring balanced and respectful presentation</li>
            </ul>
            <h4>5.2 Content Review Committee</h4>
            <p>
              The College shall maintain a <strong>Content Review Committee (CRC)</strong> composed of:
            </p>
            <ul>
              <li>Faculty representatives</li>
              <li>Academic administrators</li>
              <li>A student affairs representative</li>
            </ul>
            <p>The CRC will:</p>
            <ul>
              <li>Review complaints regarding content</li>
              <li>Evaluate materials against this policy</li>
              <li>Recommend actions when necessary</li>
            </ul>

            <h3>6. Complaint and Resolution Process</h3>
            <h4>6.1 Filing a Complaint</h4>
            <p>
              Students, faculty, or staff may submit a formal complaint if they believe content violates this policy.
            </p>
            <h4>6.2 Review Procedure</h4>
            <ul>
              <li>Initial review by department chair</li>
              <li>Escalation to CRC if unresolved</li>
              <li>Final determination issued within a reasonable timeframe</li>
            </ul>
            <h4>6.3 Possible Outcomes</h4>
            <ul>
              <li>No action (content deemed appropriate)</li>
              <li>Recommendation for modification or contextualization</li>
              <li>Removal of content in extreme cases</li>
              <li>Mediation between involved parties</li>
            </ul>

            <h3>7. Protection Against Censorship Abuse</h3>
            <p>To prevent misuse of this policy:</p>
            <ul>
              <li>Content will not be restricted solely due to disagreement with viewpoints</li>
              <li>Academic inquiry will not be suppressed without clear justification</li>
              <li>Decisions must be transparent and documented</li>
            </ul>

            <h3>8. Student Expression</h3>
            <p>Students retain the right to:</p>
            <ul>
              <li>Express opinions in coursework and campus forums</li>
              <li>Publish ideas in student media</li>
            </ul>
            <p>However, student expression must comply with:</p>
            <ul>
              <li>College conduct standards</li>
              <li>Laws governing speech and safety</li>
            </ul>

            <h3>9. External Speakers and Events</h3>
            <p>Guest speakers and hosted events must:</p>
            <ul>
              <li>Align broadly with the College&apos;s mission</li>
              <li>Be reviewed if presenting high-risk or controversial topics</li>
              <li>Include disclaimers when views do not reflect the institution</li>
            </ul>

            <h3>10. Compliance with Law</h3>
            <p>This policy adheres to:</p>
            <ul>
              <li>U.S. constitutional principles</li>
              <li>Applicable federal and Arkansas state laws</li>
              <li>Accreditation standards for higher education institutions</li>
            </ul>

            <h3>11. Policy Review</h3>
            <p>
              This policy shall be reviewed every <strong>three years</strong> or as needed to ensure relevance and
              effectiveness.
            </p>

            <h3>12. Effective Date</h3>
            <p>This policy becomes effective upon approval by the College administration.</p>
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
