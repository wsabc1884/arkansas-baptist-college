import type { Metadata } from "next"
import { ComplianceLayout } from "@/components/compliance-layout"

export const metadata: Metadata = {
  title: "FERPA | Arkansas Baptist College",
  description: "Family Educational Rights and Privacy Act (FERPA) information and student privacy rights.",
}

export default function FERPAPage() {
  return (
    <ComplianceLayout title="FERPA" subtitle="Student Privacy Rights" lastUpdated="January 2026">
      <h2>Overview</h2>
      <p>
        The Family Educational Rights and Privacy Act (FERPA) is a federal law that protects the privacy
        of student education records. FERPA applies to all educational institutions that receive federal
        funding, including Arkansas Baptist College.
      </p>

      <hr />

      <h2>Student Rights Under FERPA</h2>
      <p>
        Under FERPA, eligible students (students who are 18 years of age or older or who attend a
        postsecondary institution) have the following rights:
      </p>
      <ol>
        <li>
          <strong>Right to Inspect and Review:</strong> Students have the right to inspect and review
          their education records within 45 days of submitting a written request to the Registrar.
        </li>
        <li>
          <strong>Right to Request Amendment:</strong> Students may request amendment of records they
          believe are inaccurate, misleading, or in violation of their privacy rights.
        </li>
        <li>
          <strong>Right to Consent to Disclosure:</strong> Students have the right to consent to the
          disclosure of personally identifiable information from their education records, except to the
          extent that FERPA authorizes disclosure without consent.
        </li>
        <li>
          <strong>Right to File a Complaint:</strong> Students may file a complaint with the U.S.
          Department of Education regarding alleged failures by the institution to comply with FERPA.
        </li>
      </ol>

      <hr />

      <h2>Directory Information</h2>
      <p>
        Arkansas Baptist College has designated the following as directory information, which may be
        disclosed without prior consent:
      </p>
      <ul>
        <li>Student name</li>
        <li>Address (local and permanent)</li>
        <li>Telephone number</li>
        <li>Email address</li>
        <li>Date and place of birth</li>
        <li>Major field of study</li>
        <li>Classification (freshman, sophomore, etc.)</li>
        <li>Dates of attendance</li>
        <li>Degrees and awards received</li>
        <li>Most recent previous institution attended</li>
        <li>Participation in officially recognized activities and sports</li>
        <li>Photographs</li>
      </ul>
      <p>
        Students who wish to restrict the release of their directory information may do so by submitting
        a written request to the Office of the Registrar.
      </p>

      <hr />

      <h2>Permitted Disclosures Without Consent</h2>
      <p>
        FERPA permits disclosure of education records without student consent in certain circumstances,
        including:
      </p>
      <ul>
        <li>To school officials with a legitimate educational interest</li>
        <li>To other schools to which a student is transferring</li>
        <li>To specified officials for audit or evaluation purposes</li>
        <li>In connection with financial aid</li>
        <li>To comply with a judicial order or lawfully issued subpoena</li>
        <li>To appropriate parties in a health or safety emergency</li>
        <li>To accrediting organizations</li>
      </ul>

      <hr />

      <h2>Filing a Complaint</h2>
      <p>
        Complaints regarding alleged violations of FERPA may be filed with:
      </p>
      <p>
        Family Policy Compliance Office<br />
        U.S. Department of Education<br />
        400 Maryland Avenue, SW<br />
        Washington, DC 20202
      </p>

      <hr />

      <h2>Contact</h2>
      <p>
        For questions about FERPA or your education records, contact:
      </p>
      <p>
        Office of the Registrar<br />
        Arkansas Baptist College<br />
        1600 Dr. Martin Luther King Jr. Drive<br />
        Little Rock, AR 72202<br />
        Phone: <a href="tel:5014201237">501-420-1237</a><br />
        Email: <a href="mailto:registrarsoffice@arkansasbaptist.edu">registrarsoffice@arkansasbaptist.edu</a>
      </p>
    </ComplianceLayout>
  )
}
