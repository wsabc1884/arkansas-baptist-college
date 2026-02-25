import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Office of Academic Affairs | Arkansas Baptist College",
  description: "Arkansas Baptist College Academic Affairs oversees curriculum, degree programs, faculty, and student learning outcomes.",
}

export default function AcademicAffairsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
      <PageHero
        title="Office of Academic Affairs"
        subtitle="About Us"
        description="Providing students focused, real-world learning experiences through small classes, personalized instruction, and academic support services."
        breadcrumbs={[
          { label: "About Us", href: "/about/history" },
          { label: "Academic Affairs", href: "/about/academic-affairs" },
        ]}
      />

      <SectionWrapper>
        <div className="mx-auto max-w-3xl prose-abc">
          <p>
            Arkansas Baptist College provides students focused, real world learning experiences. The curriculum is presented on-ground and online in small classes, with personal individualized instruction with academic support services. The diverse methods of teaching and learning to promote student engagement is conducted in newly renovated academic buildings. Arkansas Baptist College is invested and committed to the success of all students. The College prepares students to enter the increasingly competitive global workforce and to explore the opportunities of entrepreneurship.
          </p>

          <h2>Student Services</h2>
          <ul>
            <li><Link href="/academics/academic-advising">Academic Advising</Link></li>
            <li><Link href="/academics/ada">Americans with Disabilities Act Services</Link></li>
            <li><Link href="/academics/career-services">Career Services</Link></li>
            <li><Link href="/academics/testing-services">Testing Services</Link></li>
            <li><Link href="/academics/veterans-affairs">Veterans Services</Link></li>
          </ul>

          <h2>Degree Programs</h2>

          <h3>Department of Business Administration</h3>
          <ul>
            <li>Bachelor of Business Administration
              <ul>
                <li>Concentration: Accounting</li>
                <li>Concentration: Entrepreneurship</li>
                <li>Concentration: Sports Management</li>
              </ul>
            </li>
            <li>Associate of Arts in Business Administration</li>
            <li>Associate of Arts in Cosmetic Sciences (partnership with Velvatex College of Beauty)</li>
            <li>Associate of Arts in Esports</li>
            <li>Certificate Programs:
              <ul>
                <li>Accounting</li>
                <li>Entrepreneurship</li>
                <li>Commercial Truck Driving (CDL) (partnership with WorldLink Trucking Academy)</li>
                <li>Esports</li>
              </ul>
            </li>
          </ul>

          <h3>Department of Interdisciplinary Studies</h3>
          <ul>
            <li>Bachelor of Arts in Interdisciplinary Studies</li>
            <li>Bachelor of Science in Interdisciplinary Studies</li>
            <li>Associate of Arts in Interdisciplinary Studies</li>
          </ul>

          <h3>Department of Public Administration</h3>
          <ul>
            <li>Bachelor of Arts in Public Administration</li>
            <li>Associate of Arts in Public Administration</li>
          </ul>

          <h3>Department of Religious Studies</h3>
          <ul>
            <li>Bachelor of Arts in Christian Education</li>
            <li>Associate of Arts in Christian Education</li>
            <li>Bachelor of Arts in Religious Studies</li>
            <li>Associate of Arts in Religious Studies</li>
            <li>Associate of Arts in Church Administration</li>
          </ul>

          <h3>Department of Social & Behavioral Sciences</h3>
          <ul>
            <li>Bachelor of Arts in Criminal Justice
              <ul>
                <li>Concentration: Juvenile Justice</li>
                <li>Concentration: Police Administration</li>
                <li>Concentration: Private Security</li>
                <li>Concentration: Probation and Parole</li>
              </ul>
            </li>
            <li>Bachelor of Arts in Human Services
              <ul>
                <li>Concentration: Addiction Studies</li>
                <li>Concentration: Child Development</li>
                <li>Concentration: Family Counseling</li>
                <li>Concentration: Leadership and Administration</li>
              </ul>
            </li>
            <li>Bachelor of Arts in Urban Community Leadership</li>
          </ul>

          <h3>Department of Fine and Performing Arts</h3>
          <ul>
            <li>Bachelor of Arts in Music Performance
              <ul>
                <li>Concentration: Instrumental Performance</li>
                <li>Concentration: Piano Performance</li>
                <li>Concentration: Vocal Performance</li>
              </ul>
            </li>
            <li>Associate of Arts in Music Business</li>
          </ul>

          <h2>Library and Media Services</h2>
          <p>
            <strong>Jacqueline McGehee, MS</strong><br />
            Director of Library Services
          </p>

          <h2>SARA Student Complaint Process</h2>
          <p>
            Information about the SARA Student Complaint Process is available through the{" "}
            <Link href="/student-life/complaint-process">Student Complaint Process</Link> page.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-muted/30">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">ABC Quick Links</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Academic Calendar", href: "/academics/academic-calendar" },
              { label: "Academic Catalog", href: "/academics/academic-catalog" },
              { label: "Admissions", href: "/enrollment/office-of-admissions" },
              { label: "Campus Life", href: "/student-life/campus-life" },
              { label: "Consumer Information", href: "/resources/consumer-information" },
              { label: "Library", href: "/academics/library" },
              { label: "Financial Aid", href: "/enrollment/financial-aid" },
              { label: "myABC Portal", href: "https://my.arkansasbaptist.edu/" },
              { label: "Course Search", href: "/academics/course-search" },
              { label: "Staff Directory", href: "/resources/directory" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg border bg-card p-4 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <CTABand
        heading="Ready to Start Your Academic Journey?"
        description="Explore our degree programs and find the right path for your career."
        primaryAction={{ label: "Apply to ABC", href: "/enrollment/apply" }}
        secondaryAction={{ label: "Academic Catalog", href: "/academics/academic-catalog" }}
      />
      </main>
      <Footer />
    </div>
  )
}
