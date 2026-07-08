import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Staff Handbook 2024-2026 | Arkansas Baptist College",
  description:
    "Arkansas Baptist College Staff Handbook (2024-2026) covering policies, procedures, and benefits for non-instructional staff.",
}

export default function StaffHandbookPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Staff Handbook 2024-2026"
          subtitle="Human Resources"
          description="Policies, procedures, and benefits of Arkansas Baptist College for non-instructional staff."
          breadcrumbs={[
            { label: "Resources", href: "/resources/human-resources" },
            { label: "Human Resources", href: "/resources/human-resources" },
            { label: "Staff Handbook" },
          ]}
        />

        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <p>
              The purpose of this Handbook is to inform employees of the policies, procedures, and benefits of Arkansas
              Baptist College. Information included applies to non-instructional staff. This Handbook is for information
              only, and its contents should not be interpreted as a contractual agreement between the College and
              employee.
            </p>
            <p>
              The College reserves the right to change policies at any time. The Director of Human Resources notifies
              staff of policy changes via e-mail or other methods of communication. Policy changes are effective on
              dates determined by the College, and supersede any previously written document. Uncertainty or concerns
              about policies and procedures should be directed to the Director of Human Resources.
            </p>

            <h2>Mission Statement</h2>
            <p>
              Arkansas Baptist College prepares students for a life of service grounded in academic scholarship, the
              liberal arts tradition, social responsibility, Christian development and preparation for employment in a
              global community.
            </p>

            <h2>Diversity Statement</h2>
            <p>
              Arkansas Baptist College is a faith-based learning community, strongly committed to Christian values and
              the equitable treatment of all who comprise the college community. The College is committed to encouraging
              and enhancing a learning culture that actively celebrates inclusiveness. At Arkansas Baptist College,
              diversity is broadly defined in terms of race and culture, gender, appearance, geographical orientation,
              educational attainment, sexual identity, age, religious and ethnic beliefs, socioeconomic status, and
              physical and mental abilities.
            </p>

            <h2>Vision Statement</h2>
            <p>
              To see our community, state, and nation positively influenced through the integration of academic
              scholarship and Christian principles.
            </p>

            <h2>Core Values</h2>
            <p>
              Arkansas Baptist College was built and resurrected on the foundation of Christian values and principles.
              Throughout our history they have been our &ldquo;true north&rdquo; and they will steadfastly guide us into
              our vision for 2020 and beyond. We clearly see that ABC is:
            </p>
            <ul>
              <li>Mission Driven</li>
              <li>Historically Grounded</li>
              <li>Service Motivated</li>
              <li>Community Empowered</li>
              <li>Academically and Professionally Integrated</li>
              <li>Entrepreneurially Minded</li>
              <li>Fiscally Responsible</li>
            </ul>

            <h2>Accreditation</h2>
            <p>
              Arkansas Baptist College is accredited by the Higher Learning Commission of the North Central Association
              of Colleges and Schools, 30 North LaSalle Street, Suite 2400, Chicago, IL 60602-2504, (800) 621-7440 /
              (312) 263-0456.
            </p>

            <h2>100. General Policies</h2>
            <h3>100.1 Hiring Policy</h3>
            <p>
              Recommendations for hire must be submitted to the Office of Human Resources. Once received, the Director of
              Human Resources will authorize a reference and background check. If an acceptable reference and background
              check are received, the Director of Human Resources forwards the recommendation for hire to the Department
              Supervisor, Chief Financial Officer and President for signatures. All salary, contractual agreements,
              promotions and demotions must be approved by the Chief Financial Officer and President. Unauthorized hiring
              of personnel will result in disciplinary action up to and including termination.
            </p>
            <h3>100.2 Classification of Employees</h3>
            <p>The following terms are used to describe the classification of employees and their employment status:</p>
            <ul>
              <li>
                <strong>Exempt</strong> &mdash; Employee whose position meets specific tests established by the Fair
                Labor Standards Act (FLSA) and state law and are exempt from overtime pay requirements.
              </li>
              <li>
                <strong>Non-Exempt</strong> &mdash; Employee whose position does not meet FLSA and state law exemption
                tests and are paid a multiple of their regular compensation for hours per week worked in excess of 40.
              </li>
              <li>
                <strong>Regular full-time</strong> &mdash; Employee who is not temporary or probationary, and works 40
                or more hours per week.
              </li>
              <li>
                <strong>Part-time</strong> &mdash; Employee who is scheduled to work less than 40 hours per week.
                Part-time employees are not eligible to receive benefits.
              </li>
              <li>
                <strong>Temporary</strong> &mdash; Employee who is hired for a pre-established period to assist in the
                completion of a specific project. Temporary employment may be full or part-time. A temporary employee is
                not eligible to receive benefits.
              </li>
              <li>
                <strong>Introductory</strong> &mdash; Employee who has less than three months of experience whose
                performance is being evaluated to decide future employment.
              </li>
            </ul>
            <h3>100.3 Employment At-Will</h3>
            <p>
              In accordance with the laws of the State of Arkansas, all non-faculty employees are considered at-will,
              meaning the employee may be terminated at any time, for any reason with or without advance notice.
              Employees also have the right to resign at any time.
            </p>
            <h3>100.4 Nepotism Policy</h3>
            <p>
              Arkansas Baptist College appreciates the referral of relatives. However, a prospective employee will not
              be hired if a direct reporting relationship or conflict of interest exists between prospective and existing
              employee. The policy is built on the following principles:
            </p>
            <ol>
              <li>A relative can be referred and considered for employment at Arkansas Baptist College.</li>
              <li>
                A relative cannot work in a position where there is a direct or indirect reporting relationship between
                employees.
              </li>
            </ol>
            <p>
              <strong>Definitions</strong>
            </p>
            <ol>
              <li>
                A direct reporting relationship occurs when an employee reports directly to a relative that is a
                supervisor or manager.
              </li>
              <li>
                Relatives include the following persons: spouse (including common-law spouse, cohabitant, and same-sex
                partner), parent (including step or foster parent, child including step or foster child), sibling (sister
                and brother), grandparents, grandchildren, aunts, uncles, nephews, nieces, cousin, in-laws (including
                mother-in-law, father-in-law, sister-in-law, or brother-in-law).
              </li>
              <li>
                A conflict of interest exists when an employee has the potential to gain an advantage due to being a
                relative of an Arkansas Baptist College employee, or the college is at risk because two or more
                employees are relatives. If it is determined that a conflict exists, one employee must resign. A conflict
                of interest exists when:
                <ol type="a">
                  <li>
                    influence is exercised directly or indirectly by an Arkansas Baptist College employee in the hiring
                    process in which a relative is a candidate;
                  </li>
                  <li>
                    one family member has authority to influence or exert financial or administrative control over
                    another;
                  </li>
                  <li>
                    one family member has the ability to influence Human Resource matters including performance review,
                    preferred work assignment, promotion, reclassification, disciplinary matters, special leave, and
                    access to overtime;
                  </li>
                  <li>
                    a relative is in a position that establishes security, confidentiality, or financial risk to Arkansas
                    Baptist College.
                  </li>
                </ol>
              </li>
            </ol>

            <h2>200. Anti-Discrimination Policies</h2>
            <h3>200.1 Equal Employment Opportunity / Affirmative Action</h3>
            <p>
              Arkansas Baptist College is committed to compliance with federal and state laws with regards to equal
              employment and affirmative action without regard to race, color, religion, gender, age, national origin,
              disability, veteran status or any other protected class applicable to federal and state laws.
            </p>
            <p>
              Arkansas Baptist College will make all decisions regarding recruitment, hiring, promotion, transfer,
              suspension, termination, layoff and all other terms and conditions of employment without discrimination on
              the basis of race, color, sex, age, national origin, veteran status, disability or other factors
              prohibited by federal and state laws.
            </p>
            <p>
              Arkansas Baptist College complies with the provisions of the Americans with Disabilities Act (ADA).
              Arkansas Baptist College will not discriminate against any qualified employee or job applicant with respect
              to any terms, privileges, or conditions of employment because of a person&apos;s physical or mental
              disability. Arkansas Baptist College will make reasonable accommodations as necessary for all employees or
              applicants with disabilities, provided that the individual is qualified to safely perform the essential
              duties of his/her job and provided that the accommodations do not impose an undue hardship on the College.
            </p>
            <h3>200.2 Harassment: Sexual &amp; Discriminatory</h3>
            <p>
              The policy of Arkansas Baptist College is to provide an environment free from discrimination in all of its
              forms. These forms include discriminatory and sexual harassment.
            </p>
            <p>
              <strong>Discriminatory Harassment</strong>
            </p>
            <p>
              Discriminatory harassment occurs when verbal or physical conduct defames or shows hostility toward an
              individual because of his or her race, religion, gender, national origin, age, disability, or a disability
              of an individual&apos;s relative, friend, or associate; creates or intends to create an intimidating,
              hostile, or offensive working environment; interferes or is intended to interfere with an individual&apos;s
              work performance; or otherwise adversely affects an individual&apos;s employment or educational
              opportunities. Harassing conduct includes but is not limited to:
            </p>
            <ul>
              <li>
                Epithets, slurs, negative stereotyping, threatening, intimidating or hostile acts which relate to race,
                color, gender, national origin, age or disability.
              </li>
              <li>
                Written or graphic material that defames or shows aversion toward an individual or group because of their
                race, color, gender, national origin, age or disability and is placed on walls, bulletin boards, or
                elsewhere on the College premises.
              </li>
            </ul>
            <p>
              <strong>Sexual Harassment</strong>
            </p>
            <p>
              What constitutes sexual harassment is circumstantial. Generally, sexual harassment is defined as
              unwelcomed sexual advances, requests for sexual favors, and other verbal or physical conduct of a sexual
              nature when:
            </p>
            <ul>
              <li>
                Submission to or rejection of such conduct is made either explicitly or implicitly a term or condition of
                employment.
              </li>
              <li>
                Submission to or rejection of such conduct is used as a basis for employment decisions affecting an
                individual or such conduct interferes with an individual&apos;s work performance or creates an
                intimidating, hostile or offensive work environment.
              </li>
              <li>
                Coercive or repeated unsolicited and unwelcomed verbal comments, gestures, or physical contact used as a
                means of exerting influence or control over employee&apos;s salary.
              </li>
            </ul>
            <p>
              <strong>Duty of all Employees to Report Harassment</strong>
            </p>
            <p>
              To assist Arkansas Baptist College in preventing discrimination and sexual harassment, all members of the
              College community have a duty to report any type of harassment to the Director of Human Resources. The
              duties in this section apply to all employees at Arkansas Baptist College who receive reports, witnessed,
              or otherwise have knowledge of conduct that could be in violation of this policy.
            </p>
            <p>
              In order to accurately handle allegations, individuals reporting harassment are encouraged to file a
              written complaint. Employees who file a complaint in good faith will not be retaliated against. Supervisors
              who fail to take appropriate action when a complaint is received are subject to disciplinary action which
              can include termination. Under the terms of this policy, victims of harassment may seek informal or formal
              resolution as outlined below:
            </p>
            <p>
              <strong>Informal Resolution</strong>
            </p>
            <p>
              An informal resolution may be appropriate if the harassment is an isolated occurrence. Examples of this are
              innuendo, an inappropriate joke, comment, display or distribution of drawings or pictures that are
              discriminatory or sexual in nature. An employee that violates the harassment policy will be reprimanded by
              their supervisor, or alternatively by the Director of Human Resources. If the matter is resolved, a written
              summary of the matter will be generated by the Director of Human Resources and placed in the
              employee&apos;s personnel file. If the victim is unsatisfied with the informal resolution, a hearing will be
              held.
            </p>
            <p>
              <strong>Formal Resolution</strong>
            </p>
            <p>
              Continuous harassment and isolated acts that are of a serious nature are handled through formal resolution.
              Through this process, the alleged harasser and complainant are separately interviewed by the Director of
              Human Resources. The alleged harasser is given due process (notice of the complaint filed, and an
              opportunity to respond). If testimony of the alleged harasser and complainant are inconsistent, the
              Director of Human Resources conducts a full investigation. When the investigation is complete, a written
              conclusion of findings is forwarded to both parties. The results may fall in two categories:
            </p>
            <ul>
              <li>
                <strong>Unfounded</strong> &mdash; If the complaint is determined to be without merit, the complaint will
                be regarded as resolved and all reasonable steps will be taken to restore the reputation of the alleged
                harasser, if damaged. A complainant who intentionally files a fraudulent grievance is subject to the full
                range of the College&apos;s disciplinary procedures which can include but is not limited to termination.
              </li>
              <li>
                <strong>Founded</strong> &mdash; If there is sufficient evidence to conclude that the alleged harasser
                violated the Harassment Policy, the harasser is reprimanded by the Director of Human Resources which can
                include but is not limited to termination.
              </li>
            </ul>
            <h3>200.3 No Retaliation</h3>
            <p>
              As part of Arkansas Baptist College&apos;s commitment to equal employment opportunity and in support of our
              policy against all forms of discrimination, including harassment, we reiterate our policy of non-retaliation
              for such complaints. No person shall be retaliated against for making a good faith complaint of
              discrimination or who otherwise engages in protected activity. Protected activity may include opposing any
              practice made unlawful by state or federal employment laws, filing charges of discrimination or other
              complaints with appropriate state or federal employment agencies, filing a lawsuit related to employment
              practices, testifying in such proceedings or otherwise participating in the investigation of complaints of
              discrimination. No adverse action will be taken because of such protected activity, including discharge,
              refusal to hire, failure to promote, demotion, significant changes in duties or position or salary,
              harassment and the like. Any person who wishes to report actions they believe constitute prohibited
              retaliation should speak directly with the Human Resources Director, Executive Vice President, or
              President. Complaints need not be in writing, but this would aid in investigation. All complaints will be
              promptly and thoroughly investigated.
            </p>

            <h2>300. Ethics and Conduct</h2>
            <h3>300.1 Conflict of Interest</h3>
            <p>
              A conflict of interest exists when an employee is able, or has the potential to gain a special advantage in
              hiring decisions, bidding processes, contractual negotiations and other transactions as a result of
              personal interest. Personal interest includes self-dealing, dealings with relatives and friends and
              ownership interest in companies providing services or supplies.
            </p>
            <ol>
              <li>
                <strong>Employment Issues.</strong> An employee must remove themselves from interview or approval
                processes when a relative is being considered for employment. Employees cannot provide a reference for a
                relative.
              </li>
              <li>
                <strong>Business Dealings.</strong> An employee must remove themselves from decision-making processes and
                give notice if they have a personal interest in a company doing business with the College. Interest
                includes being a shareholder, or having a relative or personal relationship with someone who is
                influential in the company&apos;s decision-making.
              </li>
              <li>
                <strong>Disclosure.</strong> If a conflict of interest exists, employee must notify the Chief Financial
                Officer and the Director of Human Resources in writing of the conflict. The writing must describe the
                nature of the conflict. A copy of the disclosure will be filed in the Office of Human Resources.
              </li>
              <li>
                <strong>Bribes and Gifts.</strong> An employee is forbidden to accept personal gifts above $100 from
                vendors, contractors, or anyone doing business or who plans to do business with the College.
              </li>
            </ol>
            <p>
              Arkansas Baptist College has the liberty to contract with a company selected through the formal bid process
              if disclosure is timely. Contracts or Purchase Agreements awarded as a result of a conflict of interest may
              result in termination of the contract and/or appropriate disciplinary actions of the employee which can
              include but is not limited to termination.
            </p>
            <h3>300.2 Outside Employment</h3>
            <p>
              If an employee is employed full-time at Arkansas Baptist College, the employee&apos;s presence is expected
              during normal business hours. Outside employment is allowed provided it does not interfere with the
              employee&apos;s job performance, coincide with the College&apos;s normal hours or operation, cause late
              arrival or early departure, or create a conflict of interest. Employees accepting outside employment must
              notify their immediate supervisor and the Office of Human Resources in writing. Should a conflict of
              interest result from outside employment, the Director of Human Resources may instruct the employee to
              terminate outside employment or recommend termination from Arkansas Baptist College.
            </p>
            <h3>300.3 Conduct and Work Standards</h3>
            <p>
              The administration at Arkansas Baptist College expects all employees to adhere to certain standards while
              in the workplace to maintain a safe and orderly environment. An employee will receive appropriate
              disciplinary action which can include but is not limited to termination for the following behavior:
            </p>
            <ul>
              <li>Failure to accurately submit timesheets and failure to submit absentee forms</li>
              <li>Submission of false information on the employment application</li>
              <li>Falsifying college records or documents</li>
              <li>Refusal to perform assigned duties</li>
              <li>Disorderly conduct, fighting, or other acts of violence</li>
              <li>Theft or unauthorized removal of supplies and equipment</li>
              <li>
                Possession, distribution, sale, transfer or use of alcohol or illegal substances in the workplace, while
                on duty, or while operating the College&apos;s vehicles or equipment
              </li>
              <li>Possession of firearms or other dangerous or unauthorized materials</li>
              <li>Unsatisfactory job performance</li>
              <li>Violation of personnel policies</li>
              <li>Violation of the College&apos;s computer and software policies</li>
              <li>Excessive use of a cellular phone during working hours for personal conversation</li>
              <li>Sleeping while on duty</li>
            </ul>
            <p>
              This is an illustrative list of prohibited behavior. Other activities may be deemed impermissible by the
              employee&apos;s supervisor or Office of Human Resources.
            </p>
            <h3>300.4 Non-Disclosure</h3>
            <p>
              Protection of confidential information is vital to the success of Arkansas Baptist College. Employees have a
              duty of confidentiality even after services to the institution have ended. Questions from external bodies
              should be referred to a supervisor or executive level administrator. Confidential documents include:
            </p>
            <ol>
              <li>Compensation Data</li>
              <li>Donor Lists</li>
              <li>Institutional Financial Information</li>
              <li>Student Information</li>
            </ol>
            <p>
              Removal or duplication of institutional records without prior approval is strictly prohibited. An employee
              found to have violated this policy is subject to disciplinary actions which can include but is not limited
              to termination.
            </p>
            <h3>300.5 Absence without Notice</h3>
            <p>
              Supervisors and administrators at Arkansas Baptist College recognize that unforeseen events occur. However,
              an employee has a responsibility to notify his/her Supervisor or the Office of Human Resources of such
              event. If an employee is unable to communicate, he or she should have a family member or medical personnel
              make contact with the College. Absence without notice for three (3) consecutive workdays is considered job
              abandonment, and may result in termination.
            </p>
            <h3>300.6 Grievance</h3>
            <p>
              Arkansas Baptist College promotes a positive, collegial work environment among employees. If an employee
              feels that a policy or personal right has been violated, he/she is entitled to file a grievance with their
              Supervisor or the Office of Human Resources. Employees still in probationary period are not eligible for
              grievance process. Below is the grievance process:
            </p>
            <ul>
              <li>Employee should discuss the problem with his/her supervisor.</li>
              <li>
                Employee should submit a complaint in writing to the Office of Human Resources within five (5) days
                describing the nature of the issue, if it was not resolved by their supervisor.
              </li>
              <li>
                The Director of Human Resources officer will meet with employee and supervisor within five (5) business
                days of receipt of complaint to mediate the dispute. An employee cannot record the mediation.
              </li>
              <li>
                The Director of Human Resources will issue written findings to both parties within three (3) business
                days after the meeting. If the issue is resolved, the process ends. If there is no mutual agreement, the
                Director of Human Resources forwards the complaint and accompanying documents to the Grievance Committee.
              </li>
              <li>
                The Grievance Committee will convene within seven (7) business days of receipt of the complaint, and make
                a recommendation to the Director of Human Resources within three (3) business days.
              </li>
              <li>
                The Director of Human Resources will forward the recommendation to the President for approval or
                disapproval.
              </li>
              <li>
                The President will submit a written decision to the Director of Human Resources to be distributed to the
                parties within five (5) days.
              </li>
            </ul>

            <h2>400. Employee Benefits and Services</h2>
            <h3>400.1 Medical and Dental Coverage</h3>
            <p>
              Medical and dental plans are available to full-time regular employees and their dependents. Generally, the
              definition of dependent is a spouse or child under the age of 26 or attending college. However, this
              definition varies by insurance provider. Eligible employees must enroll in a medical or dental plan within
              30 days of hire. Enrollment forms are available in the Office of Human Resources. Employees who do not
              enroll within 30 days may only enroll if they qualify under the Health Insurance Portability and
              Accountability Act (HIPAA) or during the College&apos;s open enrollment. To qualify under HIPAA, the
              employee must have a loss of previous coverage, marry, or adopt a child.
            </p>
            <h3>400.2 Federal Consolidated Omnibus Budget Reconciliation Act (COBRA)</h3>
            <p>
              COBRA extends to an employee and qualified beneficiary the opportunity to continue health insurance
              coverage when a qualifying event would normally result in the loss of eligibility. Qualifying events are
              resignation, termination, or death of an employee; a reduction in hours or leave of absence; divorce or
              legal separation, and a child becoming independent. To be eligible for insurance continuation, the employee
              must be actively enrolled in the College&apos;s health plan when the qualifying event occurs. The Office of
              Human Resources will provide written notification to an eligible employee further detailing rights under
              COBRA.
            </p>
            <h3>400.3 Workers&apos; Compensation</h3>
            <p>
              Workers&apos; Compensation benefits are provided at no cost to the employee. Covered under Workers&apos;
              Compensation are injuries or illness sustained while in the course and scope of employment that requires
              medical, surgical, or hospital treatment. If an injury or illness is sustained the employee should contact
              the Office of Human Resources immediately.
            </p>
            <h3>400.4 Time off to Vote</h3>
            <p>
              Employees are encouraged to participate in the electoral process. If an employee is unable to vote prior to
              regular or after business hours, such employee is given one hour to fulfill this civic duty. If possible,
              three (3) days notice should be given by the employee to his/her supervisor.
            </p>

            <h2>500. Leaves</h2>
            <h3>500.1 Vacation</h3>
            <p>
              Arkansas Baptist College provides paid vacation to a full-time regular employee. Below is the vacation
              eligibility:
            </p>
            <ul>
              <li>1&ndash;5 years: 10 days</li>
              <li>6&ndash;10 years: 15 days</li>
              <li>10&ndash;15 years: 20 days</li>
              <li>15+ years: 30 days (maximum)</li>
            </ul>
            <p>
              The length of eligible service is calculated on the basis of the calendar year. Vacation is earned monthly
              based on years of service. Employee should submit a request for vacation two weeks prior to the anticipated
              vacation date. An extenuating circumstance that prevents two week notice being given must be approved by an
              executive level administrator of the department. Approval of vacation requests will not be unreasonably
              withheld and are based upon business and staffing needs.
            </p>
            <p>
              Employees are encouraged to take vacations annually; however, during critical times for the institution
              i.e. registration, reporting deadlines, and other business affairs deemed vital to the college&apos;s
              operation, vacation may or may not be approved. Employees are asked to take these times into consideration
              when making the request. If an employee takes vacation without prior approval, the absence will be treated
              as unexcused and the employee will not be compensated.
            </p>
            <p>
              Payment of vacation time will not exceed the amount earned. Unused vacation can be accumulated up to one and
              one-half times the amount allowed for the years of service. On June 30 of each year, accumulated vacation
              hours exceeding one and one-half times the normal vacation are adjusted to the maximum amount allowed. If
              there is a separation of service from the institution, employee is entitled to vacation hours earned
              regardless of the reason for separation.
            </p>
            <h3>500.2 Holidays</h3>
            <p>
              Arkansas Baptist College employees are compensated for all recognized holidays. These holidays include:
            </p>
            <ul>
              <li>New Year&apos;s Day</li>
              <li>Martin Luther King Jr. Day</li>
              <li>Good Friday</li>
              <li>Memorial Day</li>
              <li>Juneteenth</li>
              <li>Independence Day</li>
              <li>Labor Day</li>
              <li>Thanksgiving Recess (Wednesday, Thursday, and Friday)</li>
              <li>Christmas Recess</li>
            </ul>
            <h3>500.3 Sick Leave</h3>
            <p>
              Sick leave is available to eligible full-time employees. Unlike vacation, sick leave is available only if
              the employee is unable to work because of illness or injury. Sick leave may also be utilized for the
              illness of immediate family. Immediate family is considered father, mother, legal guardian, husband, wife,
              child, brother, sister, grandparents, grandchildren, or in-law.
            </p>
            <ol>
              <li>
                The sick leave accrual rate for eligible full-time employees is 1.25 days per month with a maximum
                accrual rate of 15 days per fiscal year, up to a maximum of 30 days.
              </li>
              <li>
                Upon separation of service, an employee is not entitled to receive compensation for accrued sick leave.
              </li>
              <li>
                If an employee becomes ill, he/she should notify the immediate supervisor and the Office of Human
                Resources immediately. Notice should also be given for absence due to medical appointments or
                non-emergency surgical procedures.
              </li>
              <li>
                A physician&apos;s statement is required to return to work for an absence of three (3) or more
                consecutive days.
              </li>
            </ol>
            <p>
              If abuse of sick leave is suspected, the College reserves the right to have the employee evaluated by
              medical personnel at the College&apos;s expense. Failure to undergo evaluation may result in appropriate
              disciplinary actions which can include but is not limited to termination.
            </p>
            <h3>500.4 Maternity Leave</h3>
            <p>
              An employee that has conceived may continue to work during pregnancy if the demands of daily job
              requirements are met. Since pregnancy is considered a temporary illness, an employee who is not able to
              work because of pregnancy may use sick and vacation leave. When such accumulations are exhausted, a leave
              without pay may be granted. Upon return from maternity leave, the employee resumes their normal or
              comparable duties. Employees are expected to provide written notice to his/her supervisor and the Office of
              Human Resources prior to beginning maternity leave, and at least a two week notice should be given prior to
              returning to work.
            </p>
            <h3>500.5 Bereavement Leave</h3>
            <p>
              Employees are entitled to three (3) days of bereavement leave for the death of an immediate family member
              (see 500.3 for a description of immediate family). Notice should be given to prevent being subject to the
              policy on job abandonment. Employees must report the bereavement days used on their time sheet. Upon
              returning to work, an official record of death or other form of documentation may be required.
            </p>
            <h3>500.6 Family Medical Leave Act (FMLA)</h3>
            <p>
              The purpose of FMLA is to allow eligible employees to take leave for medical reasons, child birth or
              adoption, and caretaking a child, spouse, or parent who has a serious health condition. The FMLA provides
              job protection during the leave period.
            </p>
            <p>
              Employees are eligible for FMLA if they have worked for the College at least 12 continuous months or worked
              1250 hours in a 12-month period. The College provides up to 12 weeks of FMLA during a 12-month period to
              eligible employees. In 2007, the FMLA was expanded under the Support for Injured Service Members Act to
              provide up to 26 weeks of leave in any 12-month period to employees whose circumstances qualify for
              coverage under the Act.
            </p>
            <p>
              A 12-month period is measured backwards from the date an employee uses FMLA. Therefore, any time an
              employee takes FMLA, remaining entitlement is the balance of the 12 weeks not used during the preceding 12
              months. FMLA taken for personal health conditions or for an immediate family member may be taken
              intermittently when necessary. The employee must substitute accrued paid leave for any part of the 12 weeks
              used under FMLA. If accrued leave is depleted, employment pay status is adjusted to leave without pay.
            </p>
            <p>
              Requests for FMLA must be submitted to the Office of Human Resources in writing at least 30 days prior to
              absence if possible. All FMLA requests except for child birth or adoption must be accompanied by the
              Certification of Health Care Provider form completed by the physician. An employee absent under FMLA must
              provide updates on their status and intent to return to work periodically to the Office of Human Resources.
              Leave taken for a personal health condition requires certification from a physician that the employee is
              able to return to work.
            </p>
            <p>
              The College will maintain the matching portion of group health insurance while on leave. The employee is
              responsible for paying his/her portion and additional premiums. Failure to continue payment will result in
              policy cancelation. Coverage may be reinstated upon returning to work without being subject to a qualifying
              period. Failure to receive an extension or return to work constitutes voluntary job abandonment.
            </p>
            <h3>500.7 Military Leave Policy</h3>
            <p>
              To comply with the Uniformed Services Employment and Reemployment Act of 1994 (USERRA), military leave is
              granted to all part-time and full-time employees, except temporary employees serving in the United States
              Armed Services. The law covers all persons deployed by the U.S. Army, Navy, Marine Corps, Air Force, Coast
              Guard, National Guard, Public Health Service Commissioned Corps, and the National Disaster Medical System
              for active duty, active and inactive duty training.
            </p>
            <p>
              <strong>Notice Period.</strong> Unless precluded by military necessity or circumstances under which the
              giving of notice is otherwise impracticable, the employee or an appropriate officer of the uniformed
              service must give as much advance written or oral notice as possible. It is the employee&apos;s
              responsibility to submit a copy of his/her military orders prior to deployment. If the employee&apos;s
              service time is extended, a copy of extended orders must be timely submitted.
            </p>
            <p>
              <strong>Inactive Duty.</strong> If an employee is a member of a Reserve Unit and is required to attend
              training or annual two-week encampment, the employee will be compensated for 10 days. Leave in excess of 10
              days will be charged to the employee&apos;s vacation leave, if days are available. If vacation leave is
              exhausted, additional leave will be without pay.
            </p>
            <p>
              <strong>Active Duty.</strong> If an employee is absent from work due to active military service, the College
              will grant employee the maximum number of days for leave as required by USERRA. It is the employee&apos;s
              responsibility to submit a copy of his/her military orders prior to deployment. If the employee&apos;s
              service time is extended, a copy of extended orders must be timely submitted.
            </p>
            <p>
              <strong>Reemployment.</strong> Under USERRA, an employee is entitled to reemployment separation from
              military service, provided the employee:
            </p>
            <ul>
              <li>
                Gave advance written or verbal notice of service; was separated from service with an honorable or
                qualifying discharge;
              </li>
              <li>Was employed in a position for which there was an expectation of continued employment;</li>
              <li>
                Has not been absent for duty in the Uniformed Services for longer than a cumulative period of five years
                unless involuntarily retained in the Uniformed Service; and
              </li>
              <li>
                Reported to work or notified his or her supervisor of an intention to return to work, at the proper time.
              </li>
            </ul>
            <p>
              An eligible employee will be reinstated to his or her former position and benefits. If the position has been
              filled, employee will be placed in a comparable position.
            </p>
            <p>
              <strong>Benefit Continuation and Reinstatement.</strong> The following benefit policy pertains to periods of
              military service under USERRA: Healthcare &mdash; The College provides employees with limited health
              coverage during military leave. An employee on active duty fewer than 31 days, health coverage is not
              affected. Those deployed for more than 31 days may elect to continue employer-sponsored healthcare up to 18
              months.
            </p>
            <h3>500.8 Jury Duty and Court Appearance</h3>
            <p>
              The College encourages employees to fulfill civic responsibilities by serving mandatory jury duty or
              attending court if subpoenaed. Employees working over 20 hours per week are granted time off without loss
              of regular pay or fringe benefits. Employees summoned to court who are a party to the legal action and the
              issue does not involve Arkansas Baptist College are not compensated unless vacation leave is used. It is the
              employee&apos;s responsibility to notify his/her supervisor of the amount of time required for court
              appearance.
            </p>

            <h2>600. Probationary Period for New Employees</h2>
            <p>
              The introductory period for new non-instructional and re-hired personnel is 90 days from the date of hire.
              During this time, management has the opportunity to evaluate work performance, attendance, and work habits.
              At the expiration of 90 days, the employee will receive a written evaluation. Upon written request to the
              Director of Human Resources, the evaluation period may be extended an additional 30 days. If satisfactory
              progress is made during the introductory period, employment status will change to a regular employee.
            </p>

            <h2>700. Compensation and Work Hours</h2>
            <h3>700.1 Work Schedule</h3>
            <p>
              The standard work week for full-time regular employees is forty hours. Normal working hours are
              Monday&ndash;Friday 8:30 a.m.&ndash;5:00 p.m. Staff and operational demands may necessitate a change in
              start and end times and hours worked per week. Employees must submit an absentee form if they are not at
              work during their regularly scheduled hours. Certain positions require a variation in normal working hours.
              Employees are notified of this deviation at the time of hire.
            </p>
            <h3>700.2 Time and Attendance Records</h3>
            <p>
              Employees are responsible for submission of timesheets. The deadline for submitting timesheets is five (5)
              days prior to each payroll period. Timesheets must have a supervisor signature prior to submission. In
              addition, timesheets must reflect absence and leave. Altering, falsifying, or tampering with time records
              will result in disciplinary action which can include but is not limited to termination.
            </p>
            <h3>700.3 Lunch and Rest Periods</h3>
            <p>
              The normal lunch period is one hour. Supervisors may establish mandatory lunch schedules to ensure offices
              are open without interruption. Employees may take a fifteen minute break as work allows, in the morning and
              in afternoon.
            </p>
            <h3>700.4 Paydays</h3>
            <p>
              Hourly employees are paid semi-monthly on the 15th and last working day of the month. Salaried employees are
              paid on the last working day of the month. All employees are asked to participate in direct deposit.
              Employees may contact Human Resources for information on how to access their payroll stub. Payroll
              disbursements are subject to availability of funds.
            </p>
            <h3>700.5 Pay Correction</h3>
            <p>
              Payroll personnel take every measure to ensure that employees are paid due compensation. In the event an
              error occurs, the employee should promptly report the discrepancy to the Office of Human Resources.
              Reasonable efforts will be taken to correct the error within 72 hours.
            </p>
            <h3>700.6 Payroll Deductions</h3>
            <p>
              Federal and state laws require certain deductions from employee wages. Among these are federal, state, and
              social security taxes. Arkansas Baptist College offers deduction for supplemental benefits beyond those
              required by law. Eligible employees may authorize deductions from their paychecks to cover the cost of
              participation in these programs. All requests for payroll deduction excluding those required by law must be
              in writing and signed by the employee. Court ordered deductions are taken away upon immediate receipt of
              documentation from the requesting agency.
            </p>
            <h3>700.7 Overtime</h3>
            <p>
              In accordance with federal and state laws, non-exempt employees receive compensation for hours worked in
              excess of 40 hours per week. If possible, advance notification for the opportunity for overtime is given.
              Overtime worked must receive prior authorization and is distributed equitably among eligible employees.
              Failure to work scheduled overtime or overtime worked without prior authorization may result in
              disciplinary action which can include but is not limited to termination.
            </p>
            <h3>700.8 Compensatory Leave</h3>
            <p>
              An employee can accrue compensatory leave for hours worked exceeding normal work week hours. Compensatory
              leave is not to be accrued for work that should have been completed during regular work hours. An employee
              may only receive 80 hours annually of compensatory leave. All compensatory leave must have supervisor
              approval and be taken after the first two months it was accrued in, unless extenuating circumstances prevent
              the leave from being taken. Employees may not receive pay for compensatory leave, nor is it available after
              separation of service.
            </p>

            <h2>800. Performance Appraisal</h2>
            <p>
              A performance appraisal is conducted at the end of an employee&apos;s probationary period. Additional
              performance evaluations are conducted yearly to provide supervisors and employees the opportunity to
              discuss job tasks, identify and correct weaknesses, encourage and recognize strengths, and discuss positive
              approaches for meeting goals.
            </p>
            <h3>800.1 Performance Evaluation</h3>
            <p>
              At least once a year, performance evaluations are given. This evaluation allows the supervisor and employee
              to discuss previous work performance and measures job effectiveness and completion of goals and objectives.
              In addition, the evaluations can be used to document unsatisfactory job performance. Performance evaluations
              are due to the Office of Human Resources by June 30 of each year.
            </p>

            <h2>900. Progressive Discipline Policy</h2>
            <p>
              The Progressive Discipline Policy is used to handle successive violations of institutional policies,
              procedures, rules and standards. The purpose of the policy is:
            </p>
            <ol>
              <li>To establish a uniform system for the administration of discipline</li>
              <li>To fix the penalty and progression of discipline for specific offenses</li>
              <li>To assure that non-instructional employees receive fair and uniform disciplinary treatment</li>
              <li>To assure discipline is administered without discrimination</li>
            </ol>
            <h3>900.1 Disciplines Applicable to a Specific Offense</h3>
            <p>
              With the exception of employees in a probationary period, progressive penalties are utilized. For offenses
              not included in the Progressive Discipline Policy, the immediate supervisor and an executive level
              administrator agree in advance on a proper disciplinary measure. However, a written statement outlining
              performance deficiencies must be given to the employee prior to termination.
            </p>
            <h3>900.2 Types of Discipline</h3>
            <ul>
              <li>
                <strong>Verbal Warning:</strong> Verbal Warning is the first notification given explaining inadequate
                performance or unacceptable behavior.
              </li>
              <li>
                <strong>Written Warning:</strong> This is a formal notification. Written warnings are documented by
                memorandum, forwarded to the appropriate executive level administrator and entered into the
                employee&apos;s personnel file.
              </li>
              <li>
                <strong>Suspension:</strong> Disciplinary layoff with pay results from serious violation of college
                policies, procedures, rules and standards. This action can occur for repetitious conduct and behavior of
                a serious nature. The appropriate executive level administrator approves the suspension, and a memorandum
                memorializing the suspension is placed in the employee&apos;s personnel file.
              </li>
              <li>
                <strong>Termination:</strong> Termination occurs when the employee/employer relationship ceases to exist.
                The two types of termination are:
                <ul>
                  <li>
                    <strong>Discretionary Termination:</strong> This results from repeated violations of college
                    policies, procedures, rules, and standards. A discretionary termination may occur only after it is
                    apparent that other forms of disciplinary action do not yield employee improvement. This action is
                    documented by memorandum and entered into the employee&apos;s personnel file. Review and approval by
                    the President must be obtained.
                  </li>
                  <li>
                    <strong>Summary Termination:</strong> This result is a consequence of a violation of College policy,
                    procedure, rules or standards that is of such a serious nature that the employee knows or should have
                    known that violation would result in immediate termination. A summary termination does not require
                    use of other disciplinary action prior to separation from service. Documentation setting forth
                    incident details and witness statements are placed in the employee&apos;s personnel file.
                  </li>
                </ul>
              </li>
            </ul>

            <h2>1000. Employee Records</h2>
            <p>
              An employee&apos;s personnel file consists of an employment application, tax withholding and deduction
              forms, reference checklist, transcripts, performance evaluations, emergency contact information and salary
              agreement. Misrepresentation or falsification of any document in the personnel file or on the employment
              application is basis for termination.
            </p>
            <p>
              It is the employee&apos;s responsibility to notify the Office of Human Resources of any change in name,
              address, tax withholding or emergency contact information. Employees who wish to review their personnel file
              may do so by scheduling an appointment with the Director of Human Resources. In addition, employee
              supervisors who have a legitimate reason to review information in a file are allowed to do so. Employees are
              not allowed to remove information from the file. Personnel files are the property of Arkansas Baptist
              College.
            </p>

            <h2>1100. Resignation or Separation from Service</h2>
            <p>
              Resignation is a voluntary act initiated by the employee to terminate employment. Separation from service
              is an agreement between the College and employee that services will end on a specific date. To ensure a
              smooth transition and not cause disruption in the daily flow of activities, the College requests a two-week
              notification for resignation. Failure to give a two-week notice may result in ineligibility for re-hire.
            </p>
            <p>
              In the case of resignation or separation from the College, a form must be signed to show: (1) amounts due
              Arkansas Baptist College and (2) College property including cellular phone, computer, keys, and other
              college property have been returned. The College reserves the right to deduct the value of all items from
              employee&apos;s final payroll check or withhold final payroll check until items are returned.
            </p>

            <h2>1200. Dress Code</h2>
            <p>
              Employees are expected to portray a clean and neat image when reporting to work. Supervisors may determine
              appropriate attire for specific departments in accordance with the work performed.
            </p>

            <h2>1300. Computer Usage</h2>
            <p>
              Arkansas Baptist College makes access available to computers and computer resources including hardware,
              software, e-mail, online services and Internet to perform job-related duties. The College encourages use of
              available computers as a research tool and communication device. Use of the College&apos;s computers and
              software for non-college activities is strictly prohibited. Excessive personal use and visiting
              inappropriate web-sites will result in appropriate disciplinary action which can include but is not limited
              to termination.
            </p>

            <h2>1400. Return of Property</h2>
            <p>
              Employees must return all College property, materials and monies owed upon request or termination of
              employment. Failure to return such items may result in disciplinary actions including deduction from the
              employee&apos;s payroll check and termination.
            </p>

            <h2>1500. Equipment and Vehicle Usage</h2>
            <p>
              Employees who use college equipment and vehicles are expected to exercise care and follow operating
              procedures, safety standards and guidelines. Only employees with appropriate and valid driver&apos;s
              licenses may operate college vehicles. Employees without insurance and valid driver&apos;s licenses cannot
              drive a personal vehicle to conduct business on behalf of the College. Notification should be given to a
              supervisor or appropriate personnel if there appears to be a malfunction, damage or repair needed to
              equipment or the vehicle in the employee&apos;s possession.
            </p>
            <p>
              Employees who are negligent in the operation of college equipment or vehicles will receive appropriate
              disciplinary action which can include but is not limited to termination. An employee may also be held
              financially responsible for the loss of the equipment or vehicle.
            </p>

            <h2>1600. Alcohol and Drug Abuse</h2>
            <p>
              Arkansas Baptist College is a Drug/Alcohol and Smoke Free Campus. The College prohibits the unlawful
              manufacturing, distribution, possession or use of alcohol, drugs or any controlled substance. Sanctions for
              illegal use of drugs and alcohol in the workplace may include recommendation for completion of an
              appropriate rehabilitation program, written or verbal warning, suspension, and in egregious situations,
              summary termination. The Alcohol and Drug Abuse policy is as follows:
            </p>
            <ol>
              <li>
                Arkansas Baptist College employees are prohibited from unlawfully manufacturing, distributing, dispensing,
                possessing, or using alcohol or a controlled substance while on campus. If it is determined that an
                employee has violated this policy, such employee is subject to appropriate disciplinary action which can
                include but is not limited to termination.
              </li>
              <li>
                Arkansas Baptist College employees are required to report to work sober. If an employee reports to work
                under the influence of alcohol or drugs, employee will be asked to leave.
              </li>
              <li>
                Arkansas Baptist College will not offer employment to persons with a known addiction. This policy does not
                preclude hiring employees that have been rehabilitated.
              </li>
              <li>
                Arkansas Baptist College prohibits employees on official business from purchasing, transferring, using or
                possessing illegal drugs and abusing alcohol or prescription drugs. Employees who are found to be under
                the influence of alcohol and/or other drugs while on official business are subject to the disciplinary
                policy.
              </li>
              <li>
                Arkansas Baptist College recognizes that prescription medications may cause impairments in judgment,
                coordination and physical ability. Reasonable accommodations will be made for an employee who uses
                prescription medication. It is the responsibility of the employee to notify his or her immediate
                supervisor of all prescription medications taken.
              </li>
              <li>
                Arkansas Baptist College will enforce this policy through management supervision and drug testing. The
                drug testing program includes the following components:
                <ul>
                  <li>
                    <strong>Applicant Testing:</strong> Final applicants for prospective employment will undergo drug
                    testing prior to hiring.
                  </li>
                  <li>
                    <strong>Reasonable Suspicion Testing:</strong> Any employee may undergo alcohol and/or drug testing
                    based on a for-cause determination by a supervisor. Any employee involved in a significant incident in
                    which the employee&apos;s health and safety is involved or extensive property damage occurred will
                    undergo alcohol and/or drug testing.
                  </li>
                  <li>
                    <strong>Follow-up Testing:</strong> Employee referred through administrative channels to a counseling
                    or rehabilitation program may be subject to follow-up testing.
                  </li>
                </ul>
              </li>
              <li>
                Confidentiality about alcohol and/or other drug test results will be maintained to the extent provided by
                law, and employees shall have the opportunity to contest the results.
              </li>
              <li>
                Employees who have a confirmed positive alcohol or drug test may be required to enroll in and successfully
                complete a substance abuse rehabilitation program certified by the Arkansas Department of Alcohol and Drug
                Addiction Services. If an employee has a confirmed positive drug test while enrolled in or subsequent to
                completion of the rehabilitation program, the employee will be subject to disciplinary actions which can
                include but is not limited to termination. Notwithstanding this provision, employees may still be subject
                to disciplinary action for workplace or job-related incidents directly or indirectly associated with drug
                test results.
              </li>
              <li>
                Sale or possession of alcohol and/or illicit drugs in the workplace or any location where employees
                conduct official business shall be reported to the Office of Campus Safety. Employees who possess or sell
                alcohol or illicit drugs in the workplace or any location where college business is conducted is subject
                to disciplinary actions.
              </li>
              <li>
                Employees are required to notify the Office of Human Resources immediately after he or she is charged with
                a violation of any federal or state criminal drug statute.
              </li>
            </ol>
            <h3>1600.1 Smoking</h3>
            <p>
              In accordance with the Arkansas Clean Indoor Air Act, smoking and vaping is prohibited on the campus of
              Arkansas Baptist College. All employees are expected to adhere to this regulation. Employees found in
              violation are subject to disciplinary actions.
            </p>

            <h2>1700. Campus Safety</h2>
            <p>
              The College provides 24-hour security for protection of its faculty, staff, students, property and
              equipment. Security can be contacted at (501) 786-7356. When calling this number, the following information
              should be given:
            </p>
            <ol>
              <li>Your name</li>
              <li>Your location</li>
              <li>Nature of the problem</li>
            </ol>
            <h3>1700.1 Workplace Searches</h3>
            <p>
              Authorized personnel may conduct searches for drugs, alcohol or other materials considered dangerous if the
              College has probable cause to believe such material is being harbored. These searches may be conducted at
              any time. Searches of college property such as desks and storage devices may be conducted when there is
              reasonable suspicion to believe that employees have violated the Alcohol/Substance Abuse policy or workplace
              conditions justify a search. Employees are expected to cooperate fully. Refusal to consent may result in
              disciplinary action which can include but is not limited to termination.
            </p>
            <h3>1700.3 Visitors in the Workplace</h3>
            <p>
              Arkansas Baptist College welcomes visits from friends, family and former employees. However, such visits
              should not interfere with performing job responsibilities. Employees are responsible for visitor safety at
              all times.
            </p>

            <h2>1800. Media and Publication</h2>
            <p>
              All questions from the media regarding Arkansas Baptist College must be directed to the Office of the
              President or Office of Public Relations. In the event an employee is contacted by the media, employee should
              decline comment and forward the media channel to one of the aforementioned offices. Requests for media
              information should be routed through the Office of the President or Office of Public Relations. Employees are
              encouraged to refrain from appearing as agents of the College unless expressed authorization is given. An
              employee who deliberately acts as an agent for the College to the media is subject to disciplinary action
              which can include but is not limited to termination.
            </p>

            <h2>1900. Inclement Weather</h2>
            <p>
              The decision to close the College or change normal business hours rests solely with the President. Campus
              closing will be communicated to employees through media, email, or the campus alert notification system.
              Employees should ensure their email address and telephone number have been communicated to the Chief of
              Security in order to be input into the campus notification system. In the event of campus closing, full-time
              permanent non-essential employees are paid for the regular work day.
            </p>

            <h2>Staff / Employee Acknowledgement Form</h2>
            <p>
              By signing this form, I acknowledge my responsibilities under the Non-Instructional Staff Handbook, and
              understand that:
            </p>
            <ul>
              <li>I am responsible for complying with the policies and rules applicable to me.</li>
              <li>I have the opportunity to ask questions on any items in which I do not understand.</li>
              <li>
                The Handbook is only intended to provide a general overview of the College&apos;s personnel policies and
                may not represent all policies or practices in force at any particular time.
              </li>
              <li>Revisions may occur that supersedes, modifies, or eliminates existing policies.</li>
              <li>
                This Handbook is not intended to create an express or implied contract, covenant, promise, or
                representation between Arkansas Baptist College and the employee.
              </li>
            </ul>
            <p>
              My employment is at-will, and Arkansas Baptist College may terminate the employment relationship at any time
              with or without cause.
            </p>
            <p>
              Employee Signature ____________________________ Date __________
              <br />
              Employee&apos;s Name (Printed) ____________________________
            </p>

            <hr />
            <p>
              Arkansas Baptist College
              <br />
              1621 Dr. Martin Luther King Drive
              <br />
              Little Rock, Arkansas 72202
              <br />
              Phone: 501-420-1200
              <br />
              www.arkansasbaptist.edu
            </p>
          </div>
        </SectionWrapper>

        <CTABand
          heading="Questions About HR Policies?"
          description="Contact the Office of Human Resources for clarification on any policy or procedure in this handbook."
          primaryAction={{ label: "Email HR", href: "mailto:HR@arkansasbaptist.edu" }}
          secondaryAction={{ label: "Back to Human Resources", href: "/resources/human-resources" }}
        />
      </main>
    </div>
  )
}
