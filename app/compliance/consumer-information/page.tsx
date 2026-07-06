import type { Metadata } from "next"
import { ComplianceLayout } from "@/components/compliance-layout"

export const metadata: Metadata = {
  title: "Consumer Information | Arkansas Baptist College",
  description: "Student consumer information disclosures required by federal regulation.",
}

export default function ConsumerInformationPage() {
  return (
    <ComplianceLayout title="Consumer Information" subtitle="Student Right-to-Know" lastUpdated="January 2026">
      <h2>Overview</h2>
      <p>
        In compliance with the Higher Education Act, as amended, Arkansas Baptist College provides the
        following consumer information to prospective and enrolled students, families, and the public.
        These disclosures are intended to help students and families make informed decisions about their
        educational investment.
      </p>

      <hr />

      <h2>General Institutional Information</h2>
      <ul>
        <li>Cost of attendance, including tuition, fees, room and board, and estimated personal expenses</li>
        <li>Financial aid programs available, including federal, state, institutional, and private sources</li>
        <li>Refund policies and requirements for return of Title IV financial aid</li>
        <li>Academic programs, facilities, and faculty</li>
        <li>Accreditation information (see <a href="/compliance/accreditation">Accreditation page</a>)</li>
        <li>Transfer of credit policies</li>
        <li>Copyright infringement and peer-to-peer file sharing policies</li>
        <li>Student diversity and demographics</li>
      </ul>

      <hr />

      <h2>Student Financial Aid</h2>
      <p>
        The Office of Financial Aid provides assistance to students in securing funding for their education.
        Available aid types include:
      </p>
      <ul>
        <li><strong>Federal Pell Grants</strong> for eligible undergraduate students</li>
        <li><strong>Federal Supplemental Educational Opportunity Grants (FSEOG)</strong></li>
        <li><strong>Federal Work-Study</strong> employment opportunities</li>
        <li><strong>Federal Direct Loans</strong> (subsidized and unsubsidized)</li>
        <li><strong>State grants and scholarships</strong> through the Arkansas Division of Higher Education</li>
        <li><strong>Institutional scholarships</strong> based on merit and need</li>
      </ul>

      <hr />

      <h2>Student Outcomes</h2>
      <h3>Retention and Graduation Rates</h3>
      <p>
        As required by the Student Right-to-Know Act, Arkansas Baptist College reports retention and
        graduation rates for its student body. Current rates are available through the{" "}
        <a href="https://nces.ed.gov/collegenavigator/?q=arkansas+baptist+college" target="_blank" rel="noopener noreferrer">
          NCES College Navigator
        </a>.
      </p>

      <h3>Gainful Employment</h3>
      <p>
        Information about program outcomes and employment rates for graduates is available from the
        Office of Academic Affairs.
      </p>

      <hr />

      <h2>Health and Safety</h2>
      <ul>
        <li>Annual Security Report (see <a href="/compliance/campus-safety">Campus Safety page</a>)</li>
        <li>Drug and alcohol abuse prevention programs</li>
        <li>Vaccination policies</li>
        <li>Emergency response and evacuation procedures</li>
      </ul>

      <hr />

      <h2>Student Rights</h2>
      <ul>
        <li>Family Educational Rights and Privacy Act (FERPA) (see <a href="/compliance/ferpa">FERPA page</a>)</li>
        <li>Title IX rights and protections (see <a href="/compliance/title-ix">Title IX page</a>)</li>
        <li>Disability services and ADA compliance</li>
        <li>Student complaint and grievance procedures</li>
      </ul>

      <hr />

      <h2>Institutional Policies</h2>
      <p>
        The following institutional policies are available for review by prospective and enrolled students,
        families, and the public:
      </p>
      <ul>
        <li>
          <a href="/resources/consumer-information/student-identification-policy">Student Identification Policy</a>
        </li>
        <li>
          <a href="/resources/consumer-information/data-retention-policy">Data Retention Policy</a>
        </li>
        <li>
          <a href="/resources/consumer-information/assignment-of-credit-hours-policy">Assignment of Credit Hours Policy</a>
        </li>
        <li>
          <a href="/resources/consumer-information/academic-expression-policy">Academic Expression Policy</a>
        </li>
        <li>
          <a href="/student-life/complaint-process">Student Complaint Process</a>
        </li>
      </ul>

      <hr />

      <h2>Voter Registration</h2>
      <p>
        Arkansas Baptist College encourages all eligible students to participate in the democratic process.
        Voter registration information and assistance is available through Student Affairs. Students may
        register to vote in Arkansas at{" "}
        <a href="https://www.sos.arkansas.gov/elections/voter-information" target="_blank" rel="noopener noreferrer">
          Arkansas Secretary of State
        </a>.
      </p>

      <hr />

      <h2>Contact</h2>
      <p>
        For questions about any of the consumer information disclosures listed above, please contact:
      </p>
      <p>
        Arkansas Baptist College<br />
        1600 Dr. Martin Luther King Jr. Drive<br />
        Little Rock, AR 72202<br />
        Phone: <a href="tel:5014201200">501-420-1200</a><br />
        Email: <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a>
      </p>
    </ComplianceLayout>
  )
}
