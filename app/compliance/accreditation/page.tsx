import type { Metadata } from "next"
import { ComplianceLayout } from "@/components/compliance-layout"

export const metadata: Metadata = {
  title: "Accreditation | Arkansas Baptist College",
  description: "Arkansas Baptist College accreditation information and institutional quality assurance.",
}

export default function AccreditationPage() {
  return (
    <ComplianceLayout title="Accreditation" lastUpdated="January 2026">
      <h2>Institutional Accreditation</h2>
      <p>
        Arkansas Baptist College is accredited by the <strong>Higher Learning Commission (HLC)</strong>,
        one of six regional institutional accreditors in the United States. HLC accreditation provides
        assurance to students and the public that the institution meets threshold standards of quality.
      </p>
      <p>
        The Higher Learning Commission can be contacted at:
      </p>
      <ul>
        <li>230 South LaSalle Street, Suite 7-500, Chicago, IL 60604</li>
        <li>Phone: 800-621-7440</li>
        <li>Website: <a href="https://www.hlcommission.org" target="_blank" rel="noopener noreferrer">www.hlcommission.org</a></li>
      </ul>

      <hr />

      <h2>What Accreditation Means</h2>
      <p>
        Institutional accreditation by HLC assures students, families, and the broader community that
        Arkansas Baptist College:
      </p>
      <ul>
        <li>Meets rigorous standards of academic quality and institutional effectiveness</li>
        <li>Is committed to continuous improvement through regular self-assessment and peer review</li>
        <li>Provides educational programs that lead to recognized degrees</li>
        <li>Maintains the financial stability necessary to deliver on its educational mission</li>
        <li>Operates with integrity in all institutional functions</li>
      </ul>

      <hr />

      <h2>Accreditation History</h2>
      <p>
        Arkansas Baptist College has maintained its accreditation through periodic comprehensive evaluations
        conducted by HLC. These evaluations involve extensive self-study, peer review visits, and
        demonstrated commitment to meeting and exceeding accreditation criteria.
      </p>

      <h3>HLC Criteria for Accreditation</h3>
      <ol>
        <li><strong>Mission:</strong> The institution&apos;s mission is clear and articulated publicly, guiding its operations.</li>
        <li><strong>Integrity:</strong> The institution acts with integrity and its conduct is ethical and responsible.</li>
        <li><strong>Teaching and Learning (Quality):</strong> The institution provides high-quality education.</li>
        <li><strong>Teaching and Learning (Evaluation):</strong> The institution demonstrates responsibility for the quality of its programs.</li>
        <li><strong>Institutional Effectiveness:</strong> The institution&apos;s resources, structures, and processes are sufficient to fulfill its mission.</li>
      </ol>

      <hr />

      <h2>Program Approvals</h2>
      <p>
        Arkansas Baptist College is authorized to operate and grant degrees by the <strong>Arkansas Division of
        Higher Education</strong>. All degree programs offered by the college are approved by the appropriate
        state and accrediting bodies.
      </p>

      <hr />

      <h2>Memberships and Affiliations</h2>
      <ul>
        <li>National Association of Intercollegiate Athletics (NAIA)</li>
        <li>United Negro College Fund (UNCF)</li>
        <li>Thurgood Marshall College Fund</li>
        <li>National Baptist Convention, USA, Inc.</li>
        <li>American Association of Collegiate Registrars and Admissions Officers (AACRAO)</li>
      </ul>

      <hr />

      <h2>Questions About Accreditation</h2>
      <p>
        For questions regarding the accreditation status of Arkansas Baptist College, please contact the
        Office of the President at <a href="tel:5014201200">501-420-1200</a> or{" "}
        <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a>.
      </p>
    </ComplianceLayout>
  )
}
