import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"


export const metadata: Metadata = {
  title: "Student Complaint Process | Arkansas Baptist College",
  description: "Information about the student complaint and grievance process at Arkansas Baptist College.",
}

export default function StudentComplaintPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero title="Student Complaint Process" subtitle="Arkansas Baptist College is committed to addressing student concerns fairly and promptly." label="Student Life" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Student Life and Student Affairs Complaint Process</h2>
            <p>
              The Division of Student Affairs at Arkansas Baptist College is committed to maintaining a respectful and
              supportive environment for all students. Student feedback is valued and the college strives to address
              concerns in a fair and timely manner. If students encounter issues related to housing, safety and security,
              campus organizations, or interactions with other students, the following complaint process has been
              established to ensure concerns are heard and resolved:
            </p>

            <h3>1. Identify the Issue</h3>
            <ul>
              <li>
                Before filing a complaint, students should attempt to resolve the issue directly with the relevant
                department or individual when possible. This may include reaching out to housing staff for concerns
                related to the residential halls, or speaking with student organization leaders for issues regarding
                clubs and activities.
              </li>
            </ul>

            <h3>2. File a Formal Complaint</h3>
            <p>If the issue cannot be resolved directly or informally, students may file a formal complaint with Student Affairs. To do so:</p>
            <ul>
              <li><strong>Submit a Complaint Form:</strong> Complete the complaint form.</li>
              <li><strong>Provide Detailed Information:</strong> Be sure to include a description of the issue, the individuals or departments involved, any steps already taken to resolve the matter, and the desired outcome. Please include any supporting documentation or evidence that may help in addressing your concern.</li>
              <li><strong>Submit the Form:</strong> The form can be submitted electronically or in person.</li>
            </ul>

            <h3>3. Complaint Review</h3>
            <ul>
              <li>Once submitted, complaints will be acknowledged within 3 business days. Student Affairs will review the details of the complaint to assess the situation.</li>
              <li><strong>Initial Response:</strong> Students will receive an initial response within 5-7 business days, outlining the next steps and the timeline for resolution. If more information or clarification is needed, students may be contacted for further details.</li>
            </ul>

            <h3>4. Investigation and Resolution</h3>
            <ul>
              <li>Student Affairs will investigate the issue fairly and impartially, consulting with relevant individuals or departments as necessary. This process may take up to 10 business days, depending on the complexity of the issue.</li>
              <li>Students will be notified of the outcome of the investigation, including any actions taken or steps for resolution. If the issue is resolved, the student will be informed of the steps that have been implemented.</li>
            </ul>

            <h3>5. Escalation Process</h3>
            <ul>
              <li>If the student is dissatisfied with the outcome or feels that the concern has not been adequately addressed, the student may request an escalation of the complaint to a designated senior administrator. The request for escalation should be made in writing within 5 business days of receiving the initial resolution.</li>
              <li>The senior administrator will review the case and provide a final response within 10 business days.</li>
            </ul>

            <h3>6. Confidentiality and Non-Retaliation</h3>
            <ul>
              <li>All complaints will be handled with confidentiality to the greatest extent possible, and privacy will be respected throughout the process.</li>
              <li>The college maintains a strict non-retaliation policy. Students who file complaints in good faith will not face retaliation in any form for doing so.</li>
            </ul>

            <h3>7. Feedback and Continuous Improvement</h3>
            <ul>
              <li>Upon resolution of the complaint, students will have the opportunity to provide feedback on the complaint process and the outcome. This feedback is valuable for ongoing improvements in student services and the overall student experience.</li>
            </ul>
            <h2>SARA (State Authorization Reciprocity Agreement)</h2>
            <p>
              Arkansas Baptist College participates in the <strong>National Council for State Authorization Reciprocity Agreements (NC-SARA)</strong>. NC-SARA is a voluntary, regional approach to state oversight of postsecondary distance education that establishes comparable national standards for interstate offering of post-secondary distance education courses and programs.
            </p>
            <p>
              Students enrolled in distance education programs who have completed the internal complaint process and have not achieved resolution may file a complaint with the <strong>Arkansas Division of Higher Education (ADHE)</strong> as the SARA Portal Entity for Arkansas.
            </p>

            <h2>External Complaints</h2>
            <p>Students also have the right to file complaints with external agencies:</p>
            <ul>
              <li><strong>Higher Learning Commission:</strong> <a href="https://www.hlcommission.org/Student-Complaints.html" target="_blank" rel="noopener noreferrer">hlcommission.org</a></li>
              <li><strong>Arkansas Division of Higher Education (ADHE):</strong> <a href="https://adhe.edu/" target="_blank" rel="noopener noreferrer">adhe.edu</a></li>
              <li><strong>NC-SARA:</strong> <a href="https://www.nc-sara.org/" target="_blank" rel="noopener noreferrer">nc-sara.org</a></li>
            </ul>

            <h2>Contact</h2>
            <p>
              <strong>Office of Student Affairs</strong><br />
              Phone: <a href="tel:5014201200">501-420-1200</a><br />
              Email: <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a>
            </p>
            <p>
              <strong>Dean of Students and Title IX Coordinator</strong><br />
              Cleodis J. Colbert, M.Ed.<br />
              Email: <a href="mailto:cleodis.colbert@arkansasbaptist.edu">cleodis.colbert@arkansasbaptist.edu</a>
            </p>
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
