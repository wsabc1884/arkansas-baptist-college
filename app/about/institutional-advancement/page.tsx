import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Institutional Advancement - Arkansas Baptist College",
  description: "Institutional Advancement at Arkansas Baptist College oversees fundraising, alumni relations, annual giving, endowments, and special events.",
}

export default function InstitutionalAdvancementPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Institutional Advancement"
        subtitle="About Us"
        description="Giving opportunities, special events, and alumni engagement to advance the mission of Arkansas Baptist College."
        breadcrumbs={[
          { label: "About Us", href: "/about/history" },
          { label: "Institutional Advancement", href: "/about/institutional-advancement" },
        ]}
      />

      <SectionWrapper>
        <div className="mx-auto max-w-3xl prose-abc">
          <h2>Giving Opportunities & Special Events</h2>
          <p>
            Since 1884, Arkansas Baptist College has offered an exceptional education to students who otherwise may not have access to higher learning. Investing in our scholars allows them to focus on their degree attainment without the heavy burden of financial worries.
          </p>

          <h2>Annual Giving</h2>
          <p>
            The <strong>Annual Fund</strong> is comprised of unrestricted gifts to provide educational enrichment through student scholarships, instructional delivery systems, informational technology, infrastructure services and facilities. Gifts to the fund are donated annually and support current operations. These gifts are critical in meeting the daily needs as we move the needle of higher education and prepare our students for careers and entrepreneurial endeavors.
          </p>

          <h2>Endowment</h2>
          <p>
            Across a span of over 140 years, our Alumni and Friends have been the bedrock of Arkansas Baptist College, pledging a solid commitment to the future existence and advancement. We appreciate your support and we encourage you to establish an Arkansas Baptist College Endowment Trust Fund. The Trust Fund will be established in the name of the donor and will produce scholarships for students. The scholarship awards will be created from the accrued interest of the Trust Fund. The funds will remain in an interest bearing account to continue to grow for many years to ensure students complete a college degree.
          </p>

          <h2>Chairs of Excellence</h2>
          <h3>Chairs of Excellence in Science, Technology, Engineering, Arts and Mathematics (STEAM)</h3>
          <p>
            Arkansas Baptist College recognizes the need and the value of forming partnerships with the private sector to promote education through research, innovation and creative activities. Collaborations are imperative to our success and sustaining a relevant curriculum in alignment with the global workforce.
          </p>
          <p>
            We are honored to engage Corporations to participate in this partnership and initiative to support the <strong>Chairs of Excellence in Science, Technology, Engineering, Arts and Mathematics (STEAM)</strong>. The endowments will supplement resources to support strengthening academic departments with notable professors with expertise and specializations in distinctive fields of study. These experts will provide an avenue to enhance funds for research through the acquisition of grants and contracts as well as attract new student scholars to increase enrollment.
          </p>

          <h2>Naming Opportunities</h2>
          <p>
            Arkansas Baptist College has several naming opportunities for donors on designated buildings, rooms and academic spaces. The opportunity to name a space or programs can have a powerful impact. Think expansively and creatively. Many of the buildings on campus have utilitarian names such as the Science Building. The newly renovated building houses lecture halls and laboratory facilities for the Biology, Chemistry, Physical Science and Computer Information Technology disciplines. It is an excellent opportunity to raise the value of the Sciences by attaching your name to the building, laboratory, and lecture hall.
          </p>

          <div className="mt-8 rounded-lg border bg-muted/50 p-6 not-prose">
            <h3 className="text-lg font-semibold text-foreground">Make a Gift</h3>
            <p className="mt-2 text-muted-foreground">
              Support Arkansas Baptist College through a donation of any amount.
            </p>
            <a
              href="#"
              className="mt-4 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Give to ABC
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* Migration Note */}
      {/* Source: arkansasbaptist.edu/institutional-advancement-2 */}
      {/* Confidence: High - full content extracted from source */}
      {/* Missing: Give to ABC external link URL */}

      <CTABand
        heading="Invest in the Future of ABC"
        description="Your gift supports student scholarships, campus improvements, and academic excellence."
        primaryAction={{ label: "Give to ABC", href: "#" }}
        secondaryAction={{ label: "Contact Advancement", href: "/about/administration" }}
      />
    </main>
  )
}
