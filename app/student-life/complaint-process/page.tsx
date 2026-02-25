import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Student Complaint Process | Arkansas Baptist College",
  description: "Information about the student complaint and grievance process at Arkansas Baptist College.",
}

export default function StudentComplaintPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Student Complaint Process" subtitle="Arkansas Baptist College is committed to addressing student concerns fairly and promptly." label="Student Life" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Filing a Complaint</h2>
            <p>Arkansas Baptist College provides a formal process for students to address complaints and grievances. The College is committed to resolving concerns in a fair, timely, and equitable manner.</p>
            <h2>Steps</h2>
            <ol>
              <li><strong>Informal Resolution:</strong> Students are encouraged to first attempt to resolve the issue directly with the individual or department involved.</li>
              <li><strong>Formal Written Complaint:</strong> If informal resolution is unsuccessful, submit a written complaint to the Office of Student Affairs describing the issue, the parties involved, and the desired resolution.</li>
              <li><strong>Investigation:</strong> The Office of Student Affairs will review the complaint, conduct an investigation, and provide a written response within a reasonable timeframe.</li>
              <li><strong>Appeal:</strong> Students who are not satisfied with the resolution may appeal to the Vice President of Academic Affairs.</li>
            </ol>
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
      <Footer />
    </div>
  )
}
