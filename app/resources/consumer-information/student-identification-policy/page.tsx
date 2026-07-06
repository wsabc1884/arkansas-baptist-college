import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"

export const metadata: Metadata = {
  title: "Student Identification Policy | Arkansas Baptist College",
  description:
    "Arkansas Baptist College Student Identity Verification Policy for Distance Education, in compliance with the Higher Education Opportunity Act (HEOA) of 2008.",
}

export default function StudentIdentificationPolicyPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Student Identification Policy"
          subtitle="Consumer Information"
          description="Student Identity Verification Policy for Distance Education."
          breadcrumbs={[
            { label: "Resources", href: "/resources/consumer-information" },
            { label: "Consumer Information", href: "/resources/consumer-information" },
            { label: "Student Identification Policy" },
          ]}
        />

        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Arkansas Baptist College Student Identity Verification Policy for Distance Education</h2>
            <p>
              In compliance with the provisions of the United States Federal Higher Education Opportunity Act (HEA) of
              2008 (Public Law 110-315) and 34 CFR &sect; 602.17(g), regarding the verification of student identity in
              distance education, Arkansas Baptist College has established procedures to ensure that the individual who
              applies for admission, enrolls in courses, participates in online learning activities, and completes
              coursework is the same individual who receives academic credit.
            </p>
            <p>
              This policy applies to all credit-bearing distance education courses and programs offered by Arkansas
              Baptist College, beginning with the application for admission and continuing through a student&apos;s
              graduation, transfer, or withdrawal from the College. The purpose of this policy is to ensure that Arkansas
              Baptist College operates in full compliance with federal regulations concerning student identity
              verification in distance education.
            </p>
            <p>
              The HEA requires institutions offering distance education to implement processes that verify that the
              student who registers for a course is the same student who participates in and completes the course and
              receives credit. To meet these requirements, Arkansas Baptist College employs one or more of the following
              methods:
            </p>
            <ul>
              <li>Secure login credentials (username and password)</li>
              <li>Proctored examinations</li>
              <li>New or emerging technologies and practices that effectively verify student identity</li>
            </ul>

            <h3>Section 1: Compliance</h3>
            <p>
              Arkansas Baptist College provides each student with secure login credentials to access institutional
              systems, including the College&apos;s learning management system (LMS). Upon admission, students are issued
              a unique student identification number, an official College email address, and an initial password.
            </p>
            <p>
              Students are responsible for providing accurate and complete identity information during the admissions and
              verification processes. Sharing login credentials or allowing another individual to access one&apos;s
              account is strictly prohibited and constitutes a violation of the College&apos;s Acceptable Use Policy.
            </p>
            <p>
              The College&apos;s LMS integrates with institutional authentication systems to ensure secure access to
              courses and student records. All users are responsible for maintaining the confidentiality of their login
              credentials. Unauthorized access attempts, including attempting to obtain another user&apos;s credentials
              or accessing restricted information, are prohibited.
            </p>
            <p>
              Personally identifiable information collected by the College may be used, at the institution&apos;s
              discretion, for identity verification purposes. For example, students requesting password resets may be
              required to provide multiple forms of identification or present a government-issued photo ID in person.
            </p>
            <p>
              The Office of Academic Affairs is responsible for overseeing compliance with this policy and ensuring that
              academic leadership is informed of any updates. The Office of Enrollment Management and Student Affairs is
              responsible for maintaining compliance in admissions, registration, and related student services.
            </p>

            <h3>Section 2: Responsibilities</h3>
            <p>
              All users of Arkansas Baptist College&apos;s systems are responsible for maintaining the security of their
              usernames, passwords, and other access credentials. Accounts are assigned to individuals for their
              exclusive use and must not be shared under any circumstances.
            </p>
            <p>
              Users are accountable for all activity conducted under their accounts and are expected to update passwords
              periodically to maintain security. Familiarity with and adherence to policies outlined in the College
              Catalog and Student Handbook are required. Failure to review these materials does not exempt users from
              compliance.
            </p>
            <p>
              Faculty members play a critical role in maintaining academic integrity in distance education. They are
              expected to design courses and assessments that promote authenticity in student work. Indicators such as
              sudden changes in academic performance, writing style, or participation patterns may signal potential
              integrity concerns.
            </p>
            <p>
              Faculty must also communicate with the Office of the Provost regarding any new technologies used for
              identity verification to ensure proper coordination and compliance with student privacy standards.
            </p>
            <p>
              Deans, department chairs, and program directors are responsible for ensuring that faculty members
              understand and adhere to this policy and that all academic programs comply with its provisions.
            </p>
            <p>
              At present, Arkansas Baptist College does not charge additional fees for student identity verification.
              Should such fees be implemented, they will be clearly disclosed in the College catalog or tuition and fees
              schedule prior to registration.
            </p>
            <p>
              Arkansas Baptist College complies fully with the Family Educational Rights and Privacy Act (FERPA), which
              protects the privacy of student education records. Personally identifiable student information will not be
              disclosed without consent, except as permitted by law.
            </p>
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
