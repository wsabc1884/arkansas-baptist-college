import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Disability Services Policies & Procedures | Arkansas Baptist College",
  description:
    "Policies and procedures of the Office of Disability Services (ODS) at Arkansas Baptist College, covering admission, accommodations, documentation, and grievances.",
}

export default function DisabilityPoliciesPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Disability Services Policies & Procedures"
          subtitle="Office of Disability Services"
          description="The complete policies and procedures governing disability accommodations and services at Arkansas Baptist College."
          breadcrumbs={[
            { label: "Academics", href: "/academics/departments" },
            { label: "Disability Services", href: "/academics/ada" },
            { label: "Policies & Procedures" },
          ]}
        />

        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Admission to Arkansas Baptist College (ABC)</h2>
            <h3>Policy</h3>
            <p>
              Individuals with disabilities enter the College through the established admissions procedures that are
              required of all applicants. Neither the nature nor the severity of one&apos;s disability is used as a
              criterion for admission. An applicant&apos;s admission is based solely on academic qualifications.
            </p>
            <h3>Procedure</h3>
            <p>
              ODS is available to meet with students to discuss the need for accommodation upon enrollment at Arkansas
              Baptist College (ABC). Please call (501) 749-1911 to schedule an appointment.
            </p>

            <h2>Prior to Arriving at Arkansas Baptist College (ABC)</h2>
            <h3>Policy</h3>
            <p>
              Prior planning is critical to a smooth transition and adaptation to Arkansas Baptist College (ABC).
              Accommodation planning should begin prior to the student&apos;s arrival on campus.
            </p>
            <h3>Procedure</h3>
            <p>
              New Student and Transfer Orientation who are requesting services should look at the following web sites to
              gain further knowledge concerning disabilities, accommodations and how they apply to the college setting.
              Students and parents are also encouraged to read the documents <em>Differences between High School and
              College Disability Services</em> and <em>Students with Disabilities Preparing for Post Secondary
              Education</em>. These may be found at the ODS website.
            </p>

            <h2>Qualifying for Services</h2>
            <h3>Policy</h3>
            <p>
              Students requesting disability accommodations from The College must self identify to ODS. Students are
              required to submit current documentation of their disability to the department prior to the implementation
              of services. Students requesting accommodations from The College must have a disability as defined by
              section 504 of the Rehabilitation Act and the Americans with Disabilities Act. In cases where
              documentation is deemed insufficient, the student may be required to provide additional documentation.
              Students must also complete and submit the &ldquo;Voluntary Disability Disclosure&rdquo; form which is
              located at the ODS website, or the form may be obtained directly from ODS. The College reserves the right
              to consult with college professionals in reviewing and assessing documentation when it is necessary for
              approving accommodations.
            </p>
            <h3>Procedure</h3>
            <p>
              A student who has decided to attend Arkansas Baptist College (ABC) should contact his/her doctor or
              diagnostician for a copy of their disability documentation. In most cases, acceptable reports come from
              psychologists, psychiatrists, audiologists, speech therapists and physicians. Disability documentation and
              the &ldquo;Voluntary Disability Disclosure&rdquo; form must be submitted to ODS for review prior to
              approval for accommodations.
            </p>

            <h2>Record Maintenance and Correspondence</h2>
            <h3>Policy</h3>
            <p>
              Records for students with disabilities are maintained in the ODS office until 5 years after the last
              semester of enrollment. Documents that relate to the student&apos;s disability are not a part of the
              academic record in the Registrar&apos;s Office. Disability documentation and release of information is
              governed by the Family Educational Rights and Privacy Act (FERPA). An explanation of FERPA and policies
              governing release of records may be accessed at The Registrar&apos;s Office. The ODS maintains a secure
              computer database. Correspondence to students registered with ODS will generally be by electronic mail.
              Students are responsible for checking their college assigned e-mail accounts for access to announcements.
            </p>
            <h3>Procedure</h3>
            <p>
              Upon completion of the &ldquo;Voluntary Disability Disclosure&rdquo; and registration with ODS, students
              may detail their wishes regarding the release of information. Students are responsible for checking their
              e-mail accounts for announcements regarding upcoming events as well as registration deadlines.
            </p>

            <h2>Academic Accommodations</h2>
            <p>
              When appropriate, academic accommodations will be made. It is generally considered non-discriminatory to
              adhere to academic standards that are essential to a course of study (i.e.: setting a grade point average
              requirement for admission to a particular program). Requests for academic accommodations must be made in a
              timely manner. All requests for services should be made directly to ODS. Academic adjustments must be
              supported by the documentation.
            </p>

            <h3>Faculty Notification</h3>
            <h4>Policy</h4>
            <p>
              Faculty notification is initiated by the student, and disclosure of the disability is at the discretion of
              the student. Faculty will not be notified by ODS that they have a student with a disability in the
              classroom.
            </p>
            <h4>Procedure</h4>
            <p>
              Students should attend class and receive the syllabi and course documents for each course for which they
              have registered. Early in the semester, after receiving the syllabi and course documents for each class,
              students should make an appointment with an ODS counselor. Students should bring the syllabi and course
              documents to their appointment at the ODS. Letters to faculty will be written by the counselor and the
              student and will only be written with student input and signature. It is the student&apos;s responsibility
              to deliver faculty notification letters to those faculty members to whom they wish to disclose their
              disability and need for accommodations. Upon delivery of the faculty notification letter, students should
              ensure that each faculty member signs the &ldquo;Acknowledgement of Class Modifications&rdquo; form. This
              form is available in the ODS and will be given to each student when faculty notification letters are
              written. Once the student has delivered all faculty notification letters the completed
              &ldquo;Acknowledgement of Class Modifications&rdquo; form should be turned in to ODS. This form informs ODS
              of those faculty members to whom the student has chosen to disclose a disability.
            </p>

            <h3>Registration</h3>
            <h4>Policy</h4>
            <p>
              ODS makes every effort to secure priority scheduling of students with disabilities who are approved for
              early registration. Students are approved based on their need for The College to make advance preparations.
              Priority registration is determined on a case-by-case basis and is based on demonstrated need. Course
              prerequisites are the responsibility of the student. ODS does not have the authority to &ldquo;special
              add&rdquo; students into restricted classes. The student&apos;s desired schedule and choice of faculty
              member are not guaranteed by ODS.
            </p>
            <h4>Procedure</h4>
            <p>
              During the fall and spring semesters, all students have the opportunity online to participate in the
              registration process for their next semester&apos;s classes. It is the student&apos;s responsibility to
              make an appointment with their advisor well before registration opens to get approval of their course
              schedule. Students should ensure their advisor signs the registration form and provides them with their
              current advising code. Students approved for priority registration should make an appointment with ODS so
              that their advising forms may be reviewed for priority registration. Students should ensure that they have
              their personal advising codes and course schedule with them when they come to ODS. After a student has met
              with an ODS counselor it is necessary for them to visit the Registrar&apos;s Office to complete the
              registration process. The ODS does not have the capability to register students for classes.
            </p>

            <h3>Testing Accommodations</h3>
            <h4>Policy</h4>
            <p>
              Initiating the testing accommodation procedure is the responsibility of the student. Testing
              accommodations may include extended time, scribe, computer for written exams, use of a spell checking
              device, calculator, readers, and accessible test formats such as Braille and enlarged print. Unless there
              is a time conflict, tests will be scheduled at the same time as the rest of the class. A student who misses
              a test or exam scheduled with ODS will be required to notify the faculty member. ODS is not able to
              reschedule exams. Rescheduling of exams is the responsibility of, and should be initiated by, the student
              in consultation with the faculty member, and a faculty member must approve the rescheduling. A student who
              is late for a scheduled exam must finish the test in the time remaining (extended time will be calculated
              from the scheduled time of the test, not the time of arrival). Final exams will only be rescheduled in
              accordance with college policy.
            </p>
            <h4>Procedure</h4>
            <p>
              Students should complete part I of the &ldquo;Testing Accommodations Request.&rdquo; These forms are
              located in the ODS and at the ODS website. Students should have their professor complete part II of the
              &ldquo;Testing Accommodations Request.&rdquo; The form must be signed by the professor of the class for
              which the student is requesting testing accommodations. The ODS can only proctor tests for classes in which
              the student has chosen to disclose a disability. Disclosure of the disability, and the faculty
              member&apos;s acknowledgement of the need for accommodations will be verified in the ODS by reviewing the
              faculty member&apos;s signature on the &ldquo;Acknowledgement of Class Modifications&rdquo; form. The
              &ldquo;Acknowledgement of Class Modifications&rdquo; form, signed by the faculty member, must be turned in
              to the ODS before tests can be proctored. &ldquo;Testing Accommodations Request&rdquo; forms must be
              received in the ODS no less than 48 business hours prior to the test or exam. Requests for accommodations
              on final exams must be received in the ODS no less than five working days prior to the exam day. Students
              may take into the testing area only those materials that the professor deems appropriate. These materials
              should be listed by the professor in the space provided on the &ldquo;Testing Accommodations Request&rdquo;
              form. All electronic devices not specifically approved by the professor, cell phones, pagers, planners,
              book bags, purses, and overcoats should be left outside of the testing area. These items will be stored
              securely by ODS staff until completion of the scheduled test or exam.
            </p>

            <h3>Classroom Accommodations</h3>
            <h4>Policy</h4>
            <p>
              Classroom accommodations may include: sign language interpretation; assistive listening devices; note
              taking; use of tape recorder; priority seating and alternative testing. Students receiving in-class support
              services must attend classes on a regular basis or risk losing those services.
            </p>
            <h4>Procedure</h4>
            <p>Classroom accommodations are made by meeting with ODS to request specific accommodations.</p>

            <h2>Degree Requirement Modification</h2>
            <h3>Policy</h3>
            <p>
              Students are expected to complete all degree requirements for graduation in their major. The ADA requires
              that college offer reasonable accommodations to qualified students; however, it does not require the
              adjustment of standards that would fundamentally alter degree requirements.
            </p>
            <h3>Procedure</h3>
            <p>
              If a student deems it necessary to request deviation from the prescribed course of study, the student
              should consult the dean of the college or school, or the chairperson of the department of the
              student&apos;s major. Any deviations from the applicable published degree requirements must have the
              approval of the appropriate departmental chairperson or school dean and the approval of the Dean of
              Undergraduate Studies.
            </p>

            <h2>Tutoring Services</h2>
            <h3>Policy</h3>
            <p>
              Tutorial services are available to all students at Arkansas Baptist College (ABC) through the tutoring
              services located in the library. Requests for tutors should be submitted early in the semester to ensure an
              assignment. Additionally, many academic departments offer tutorials specific to their academic offerings.
              Personal or private content specific tutoring is considered the financial responsibility of the student.
            </p>
            <h3>Procedure</h3>
            <p>
              Tutoring may be accessed through either the academic department or the library. Students should check their
              syllabi, departmental and/or faculty announcements for published tutorial sessions.
            </p>

            <h2>Interpreter Services</h2>
            <h3>Policy</h3>
            <p>
              It is the responsibility of the student requesting interpreting services to provide the office with their
              schedule immediately after registration. In the event of late registration, every effort will be made to
              secure accommodations as soon as possible. Any changes to a schedule prior to, or after the start of a
              semester, should be reported immediately to the Director of Disability Support Services. Upon request, ODS
              will provide interpreting services for meetings, plays, movies or other functions sponsored by the College.
            </p>
            <p>
              It is the responsibility of the student to inform ODS if he/she does not plan to be in class on a given day
              or if the student plans to miss an event in which they have requested an interpreter. If three consecutive
              classes and/or events are missed without informing ODS, interpreting services to that class and/or event
              will be suspended pending a meeting with the Director of Disability Support Services. It is the
              responsibility of the student to inform ODS if a class is cancelled; the interpreter(s) will be reassigned.
              Interpreters will wait for 15 minutes for you to arrive for classes and/or events that are 1 to 2 hours in
              length. Interpreters will wait 30 minutes for classes and/or events that are 3 hours in length or longer.
              While ODS will consider individual preferences in the assignment of interpreters, it reserves the right to
              make all interpreter assignments. Interpreter assignments are at the sole discretion of ODS and may be
              based upon many factors which may include, but may not be limited to, availability, certification,
              qualification and the appropriateness of the request based on actual or perceived conflicts of interest.
              Your interpreter is expected to follow the Code of Professional Conduct under which they are classified, as
              well as to comply with all ODS standards and policies.
            </p>
            <h3>Procedure</h3>
            <p>
              For events that occur outside of the students&apos; regular class schedule, an Interpreter Request Form
              should be submitted to the Director no later than one week prior to the event. Requests for interpreters for
              final examinations should be submitted no later than two weeks prior to the first day of final exams.
              Requests received less than one week before the scheduled event will be honored if possible. Students
              should check their syllabi at the beginning of the semester for dates when the instructor plans a video and
              should inquire as to whether or not the videos are closed-captioned. Questions should be referred to the
              Director of Disability Support Services. Interpreters are only available during exams to facilitate
              communication between the faculty member and the student. All exam questions should be directed to the
              faculty member. When taking an examination, the student has the option to have the interpreter remain or to
              excuse them. Before dismissing an interpreter students should ensure the instructor does not intend to
              lecture after the test. Students who are taking a test in a class that is team interpreted should inform the
              Director so that interpreters may be released or rescheduled ahead of time.
            </p>

            <h2>Note-taking Services</h2>
            <h3>Policy</h3>
            <p>
              Students registered in the ODS may request note-takers for classes. The need for note-takers is determined
              individually, and is based on documentation and the functional limitations of the student. Note-taking
              services are provided in two ways and provision is determined individually. Students may receive volunteer
              student note-takers from their class. The student receiving services is responsible for identifying a
              note-taker. Students are encouraged to consult with faculty to ensure they are receiving adequate notes.
              ODS will provide carbon paper or copying services as needed. Students should not expect to receive notes if
              he/she does not attend class. The ODS is available to assist students, and to work with faculty in
              identifying note-takers. Note-taking services may also be provided by a note-taker who works directly for
              ODS and is not a student in the class. Note-taking will be provided on a lap-top computer with a disk which
              will be given to the student at the end of class. If the student fails to bring a disk to class the notes
              will be saved on the computer and the student may come to ODS to receive a copy at a later time.
            </p>
            <p>
              It is the responsibility of the student to inform ODS if he/she does not plan on attending class on a given
              day. If three consecutive classes are missed without informing ODS, note-taking services to that class will
              be suspended pending a meeting with the Assistant Director for Deaf and Hard of Hearing Services. It is the
              responsibility of the student to inform ODS if a class is cancelled; the note-taker may be reassigned.
              Note-taking services will not be provided when a student does not attend class. Note-takers employed by the
              ODS will wait for 15 minutes for the student to arrive for classes that are 1 to 2 hours in length.
              Note-takers will wait 30 minutes for classes that are 3 hours in length or longer.
            </p>
            <h3>Procedure</h3>
            <p>
              As early as possible in the semester, make an appointment with an ODS counselor or the Director of
              Disability Support Services to request services. ODS will determine the appropriateness of note-taking
              services based on students&apos; individual needs and documented disability. ODS reserves the right to make
              all note-taking assignments. Note-taking assignments are at the sole discretion of ODS and may be based
              upon many factors which include, but are not limited to, availability, qualification, and the
              appropriateness of the request based on actual or perceived conflicts of interest. When taking an
              examination, the note-taker should be excused from the classroom. The note-taker may wait outside the
              classroom if the instructor plans to lecture after the test. Note-takers are expected to comply with all
              ODS standards, policies and procedures.
            </p>

            <h2>Requesting Assistive Listening Devices (ALDs)</h2>
            <h3>Policy</h3>
            <p>
              As early as possible in the semester, make an appointment with the Assistant Director for Deaf and Hard of
              Hearing Services to request an ALD. Hard of Hearing students may check out an ALD for use in the classroom.
            </p>
            <h3>Procedure</h3>
            <p>
              ALDs may be checked out on a short-term (day/week) or semester basis by making a request to the Director of
              Disability Support Services. The student is expected to return the ALD in excellent condition and will be
              responsible for any damages caused while the equipment was in his/her possession.
            </p>

            <h2>Taped Text Services</h2>
            <h3>Policy</h3>
            <p>
              The ODS should have the capability to scan books, articles and many reserve materials into the computer so
              that text may be used or read in conjunction with assistive technology. Text is saved as a MS Word document
              and can then be made into MP3 files, cut and pasted into NaturalReader or Kurzweil 3000, or read by screen
              reader software. Students must purchase the book or text they wish to have scanned. NOTE: In order for text
              to be scanned from a book, the binding of the book must be removed, making it impossible to re-sell. The
              scanning process is done with optical character reader software. If the book or text to be scanned has been
              written upon or highlighted, the scanner may not recognize some characters. Poor character recognition may
              also happen with some graphics and pictures. The ODS will not correct unclear text for scanning. It is the
              student&apos;s responsibility to provide the ODS with &ldquo;clear&rdquo; text to ensure accurate scanning.
            </p>
            <h3>Procedure</h3>
            <p>
              The ODS requires at least one week notice for scanning texts. If the item to be scanned is a book the
              student has purchased, it will be necessary for the ODS to remove the binding to complete scanning. Once
              the binding is removed the book cannot be re-sold. Students are responsible for providing the ODS with CDs
              or floppy disks with space adequate for recording the requested text. In some cases recorded text may be
              obtained from Recordings for the Blind and Dyslexic (RFB&amp;D). Texts ordered through RFB&amp;D have no
              guarantee on time of delivery. Students are responsible for providing complete publication data when
              ordering texts from RFB&amp;D. Inquiries concerning available texts may be made to RFB&amp;D online.
            </p>

            <h2>Housing Accommodations</h2>
            <h3>Policy</h3>
            <p>
              Arkansas Baptist College (ABC) will consider reasonable housing accommodations for students with
              disabilities. The deadline for requesting modified housing accommodations is the same as the deadline for
              the housing application. When the documentation shows that a private room is a necessary method of meeting
              the housing needs of a student with a disability, Arkansas Baptist College (ABC) will consider exceptions
              to its general room rate structure unless doing so would result in a fundamental alteration to the housing
              program. In order for the student with a disability to be approved to receive a private room, he/she must
              provide sufficient documentation completed by a qualified professional addressing the student&apos;s
              disability and their unique need for special housing accommodations.
            </p>
            <h3>Procedure</h3>
            <p>
              The student will indicate on the &ldquo;Voluntary Disability Disclosure&rdquo; form his/her intent to
              request housing accommodations and exception to the general room rate structure. A housing application must
              be completed and must be on file with the Arkansas Baptist College (ABC) Housing and Residence Life office.
              In addition to following documentation requirements for the ODS, students must provide specific
              documentation from an approved clinician addressing the need for a single room. Each case will be
              individually evaluated with respect to the documentation presented and the accommodations requested. The
              intent to request housing accommodations that the student includes on the &ldquo;Voluntary Disability
              Disclosure&rdquo; form DOES NOT take the place of the housing application required by Arkansas Baptist
              College (ABC) Housing and Residence Life.
            </p>

            <h2>Barrier Removal</h2>
            <h3>Policy</h3>
            <p>
              Students may not be excluded from a requested course offering, program or activity because it is not
              offered in an accessible location. New construction will be planned in accordance with the Americans with
              Disabilities Act Accessibility Guidelines or the Uniform Federal Accessibility Standards.
            </p>
            <h3>Procedure</h3>
            <p>Any student wishing to address issues regarding physical barriers should meet with ODS.</p>

            <h2>Adaptive Equipment, Auxiliary Aides, Service Animals and Personal Care Attendants</h2>
            <h3>Policy</h3>
            <p>
              Students with disabilities may use the computers in the labs located throughout the campus, many of which
              are equipped with adaptive software with screen reading and voice activation capabilities. In accordance
              with State law, service animals assisting students with disabilities are permitted in all facilities of the
              college. ODS does not provide prescriptive devices, devices of a personal nature or personal attendant
              care. Any equipment loaned by ODS to a student and not returned will result in a tag being placed on the
              student&apos;s record.
            </p>
            <h3>Procedure</h3>
            <p>
              Computers located in the student labs, including those with adaptive software, are accessible with the
              student&apos;s college assigned identification number and password. Assistive listening devices and tape
              players can be checked out by making an appointment with ODS. Any questions regarding the availability or
              use of available adaptive equipment should be referred to ODS.
            </p>

            <h2>Class Attendance</h2>
            <h3>Policy</h3>
            <p>
              As stated in the undergraduate catalog, students are expected to punctually attend all lecture, laboratory
              sessions and field experiences in courses for which they are registered. Attendance requirements for each
              class are at the faculty member&apos;s discretion, and absences are generally counted from the first class
              meeting. Absences because of late registration will not be automatically excused. ODS does not have the
              authority to excuse students from attending class, nor does the ODS issue official written excuses for
              absences. ODS can only provide written verification of a disability based on appropriate documentation.
              This verification may address the legitimacy of, but not necessarily excuse an absence.
            </p>
            <h3>Procedure</h3>
            <p>
              Should issues regarding class attendance arise, make an appointment with ODS as quickly as possible.
            </p>

            <h2>Grievance</h2>
            <h3>Policy</h3>
            <p>
              Any student having a grievance related to a disability is entitled to prompt and equitable resolution of
              his/her complaint.
            </p>
            <h3>Procedure</h3>
            <p>
              Grievance Procedures for students registered with the ODS are the same as those outlined for all Arkansas
              Baptist College (ABC) students. Formal and informal procedures for resolving grievances may be found on the
              student conduct website under &ldquo;Policies for Students.&rdquo; Initial, informal attempts to resolve
              grievances in the ODS should be conducted by the end of the academic semester following the semester in
              which the grievance occurred (e.g. if the incident occurred in the spring semester, an initial attempt at
              resolution must be completed by the last day of the summer term). Allegations should be communicated orally
              or in writing to the administrative officer most directly concerned, EXCLUDING the person accused of the
              improper act. Specifically:
            </p>
            <ul>
              <li>
                In the ODS, initial attempts at informal resolution of a grievance may be made to the Director of the
                Office of Disability Services, (501) 244-5137.
              </li>
              <li>
                If equitable resolution of the grievance is not reached through informal discussion, counseling,
                mediation, agreement of the parties, or administrative action by the Director of the ODS, students may
                seek resolution through the Assistant Dean of Students, (501) 244-5129.
              </li>
              <li>A further informal attempt at resolution may be made to the Dean of Students, (501) 244-5129.</li>
              <li>
                A final attempt at equitable resolution of a grievance may be sought through the Chief Student Affairs
                Person on campus, (501) 244-5129.
              </li>
              <li>
                A student who is dissatisfied with the outcome of an informal inquiry conducted in the preceding manner
                may submit a formal complaint for resolution.
              </li>
            </ul>
          </div>
        </SectionWrapper>

        <SectionWrapper variant="muted">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border bg-card p-6 sm:p-8">
              <h2 className="font-serif text-xl font-bold text-foreground sm:text-2xl">Office of Disability Services</h2>
              <p className="mt-3 text-muted-foreground">Arkansas Baptist College</p>
              <p className="mt-1 text-muted-foreground">1621 Dr. Martin Luther King Dr., Little Rock, AR 72211</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Phone: <a href="tel:5014201200" className="text-primary hover:underline">501-420-1200</a>
              </p>
            </div>
          </div>
        </SectionWrapper>

        <CTABand
          heading="Need Accommodations?"
          description="Contact the Office of Disability Services to begin the accommodation process."
          primaryAction={{ label: "Intake Form", href: "/academics/ada/intake-form" }}
          secondaryAction={{ label: "Back to Disability Services", href: "/academics/ada" }}
        />
      </main>
    </div>
  )
}
