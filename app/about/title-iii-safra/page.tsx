import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Title III & SAFRA Grants - Arkansas Baptist College",
  description: "Title III-B Strengthening HBCUs program and SAFRA grant administration at Arkansas Baptist College.",
}

export default function TitleIIISafraPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Title III & SAFRA Grants"
        subtitle="About Us"
        description="U.S. Department of Education Title III Program Administration supporting the academic, administrative, and fiscal capabilities of Arkansas Baptist College."
        breadcrumbs={[
          { label: "About Us", href: "/about/history" },
          { label: "Title III & SAFRA Grants", href: "/about/title-iii-safra" },
        ]}
      />

      <SectionWrapper>
        <div className="mx-auto max-w-3xl prose-abc">
          <h2>U.S. Department of Education Title III Program Administration</h2>

          <h3>Purpose</h3>
          <p>
            Title III-B authorizes the Strengthening Historically Black Colleges and Universities (HBCUs) program award grants to eligible institutions to assist them in strengthening their academic, administrative, and fiscal capabilities. These programs are typically funded through annual discretionary appropriations; and with additional annual mandatory appropriations provided through the FUTURE Act, which extended mandatory funding beyond fiscal year 2019.
          </p>

          <h3>Allowable Activities</h3>
          <p>
            Activities in accordance with section 1068h(a)(2) may include:
          </p>
          <ul>
            <li>Institutional services</li>
            <li>Educational equipment</li>
            <li>Acquisition of real property in connection with the construction, renovation, or additional improvement of campus facilities</li>
            <li>Programs to improve the financial and economic literacy designed for students</li>
            <li>Financial management information systems</li>
            <li>Faculty and staff development</li>
            <li>Implementation of other project activities described under the Legislative Allowable Activities (LAA) outlined in the program statute</li>
            <li>Endowment development (no more than twenty percent of grant funds may be used for this purpose)</li>
          </ul>

          <h2>Contact</h2>
          <p>
            For questions about Title III and SAFRA Grant programs at Arkansas Baptist College, contact the Title III Office at{" "}
            <a href="tel:5014201200">501-420-1200</a> or email{" "}
            <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a>.
          </p>
        </div>
      </SectionWrapper>

      <CTABand
        heading="Learn More About ABC"
        description="Explore our academic programs, institutional history, and leadership."
        primaryAction={{ label: "About ABC", href: "/about/history" }}
        secondaryAction={{ label: "Administration", href: "/about/administration" }}
      />
    </main>
  )
}
