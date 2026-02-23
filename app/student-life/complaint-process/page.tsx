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
            <h2>External Complaints</h2>
            <p>Students also have the right to file complaints with external agencies:</p>
            <ul>
              <li><strong>Higher Learning Commission:</strong> <a href="https://www.hlcommission.org/Student-Complaints.html" target="_blank" rel="noopener noreferrer">hlcommission.org</a></li>
              <li><strong>Arkansas Division of Higher Education:</strong> <a href="https://www.adhe.edu" target="_blank" rel="noopener noreferrer">adhe.edu</a></li>
            </ul>
            <h2>Contact</h2>
            <p>Office of Student Affairs<br />Phone: <a href="tel:5014201200">501-420-1200</a><br />Email: <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a></p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  )
}
