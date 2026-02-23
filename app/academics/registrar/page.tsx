import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Registrar | Arkansas Baptist College",
  description: "The Office of the Registrar manages academic records, transcripts, enrollment verification, and graduation certification.",
}

export default function RegistrarPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Office of the Registrar" subtitle="Maintaining academic records and supporting student matriculation at Arkansas Baptist College." label="Academic Resources" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Mission</h2>
            <p>The Office of the Registrar is the College&apos;s data center whose primary responsibility entails collecting, storing, and maintaining academic records for the current and historical student body. The Office collaborates with internal and external constituents to enhance the total collegiate experience of student matriculation at Arkansas Baptist College.</p>
            <h2>Obtaining Transcripts</h2>
            <p>Official transcripts are processed through the <a href="https://www.mystudentcenter.org" target="_blank" rel="noopener noreferrer">National Student Clearinghouse</a>. A processing fee applies.</p>
            <p>To request a transcript:</p>
            <ol>
              <li>Go to <a href="https://www.mystudentcenter.org" target="_blank" rel="noopener noreferrer">www.mystudentcenter.org</a></li>
              <li>Select &ldquo;Order a Transcript&rdquo;</li>
              <li>Follow the instructions to complete your request</li>
            </ol>
            <h2>Services</h2>
            <ul>
              <li>Maintain accuracy and data integrity of academic records</li>
              <li>Interpret academic policies covered in the student handbook</li>
              <li>Evaluate and post transfer credits</li>
              <li>Certify undergraduate students for graduation</li>
              <li>Process change of major, minor, and advisor requests</li>
              <li>Prepare enrollment verifications and loan deferments</li>
              <li>Veterans Affairs reporting</li>
              <li>IPEDS reporting</li>
              <li>Prepare semester and summer class schedules</li>
              <li>Issue official transcripts</li>
              <li>Coordinate Honors Convocation, Baccalaureate, and Commencement</li>
              <li>International student admittance (DSO)</li>
            </ul>
            <h2>Available Forms</h2>
            <ul>
              <li>Transcript Request Form</li>
              <li>Change of Address Request Form</li>
              <li>Change of Name Form</li>
              <li>Change of Major Request Form</li>
              <li>Enrollment Verification</li>
              <li>Hold Directory Information Form</li>
              <li>Student Request for Withdrawal</li>
            </ul>
            <h2>Contact</h2>
            <p><strong>Delores Voliber, BBA</strong><br />Office Hours: Mon-Fri, 9:00 AM - 5:00 PM<br />Phone: <a href="tel:5014201200">501-420-1200</a></p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  )
}
