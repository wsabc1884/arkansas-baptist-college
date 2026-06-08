import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Public Administration | Arkansas Baptist College",
  description: "The Department of Public Administration prepares students for careers in government, nonprofit organizations, and public service.",
}

export default function PublicAdminPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero title="Public Administration" subtitle="Preparing servant leaders for careers in government, nonprofit organizations, and public service." label="Academic Departments" />
        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Department Mission</h2>
            <p>The Department of Public Administration is devoted to affecting social changes and promoting the public good. The department prepares students for leadership roles in government agencies, nonprofit organizations, and community-based service organizations. The program integrates public policy, management theory, ethics, and practical application.</p>
            <h2>Degree Programs</h2>
            <ul>
              <li><strong>Bachelor of Arts in Public Administration (BA)</strong></li>
              <li><strong>Associate of Arts in Public Administration (AA)</strong></li>
            </ul>
            <h2>Career Opportunities</h2>
            <ul>
              <li>City and County Government</li>
              <li>State and Federal Agencies</li>
              <li>Nonprofit Management</li>
              <li>Community Development</li>
              <li>Public Policy Analysis</li>
              <li>Graduate study in Public Administration (MPA)</li>
            </ul>
            <h2>Contact</h2>
            <p><strong>Michal Harris</strong><br />Phone: <a href="tel:5014201200">501-420-1200</a><br />Email: <a href="mailto:Michal.Harris@arkansasbaptist.edu">Michal.Harris@arkansasbaptist.edu</a></p>
          </div>
        </SectionWrapper>
        <CTABand title="Lead With Purpose" description="A degree in Public Administration opens doors to meaningful careers in public service." primaryLabel="Apply Now" primaryHref="/enrollment/apply" secondaryLabel="View Academic Catalog" secondaryHref="/academics/academic-catalog" />
      </main>
    </div>
  )
}
