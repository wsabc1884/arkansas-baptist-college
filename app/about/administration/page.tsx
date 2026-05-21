import { PageHero } from "@/components/page-hero"
import { CTABand } from "@/components/cta-band"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"
import { TeamDirectory } from "@/components/team-directory"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, GraduationCap, Building, Heart, Phone, Mail } from "lucide-react"
import { sanityFetch } from "@/sanity/lib/live"
import { ADMIN_PAGE_STAFF_QUERY } from "@/lib/queries"
import type { StaffMember } from "@/lib/types"

export const metadata = {
  title: "Administration | Arkansas Baptist College",
  description: "Meet the administration team at Arkansas Baptist College dedicated to student success.",
}

const departments = [
  {
    name: "Academic Affairs",
    description: "Oversees academic programs, curriculum development, and faculty support",
    icon: GraduationCap,
  },
  {
    name: "Student Affairs",
    description: "Supports student life, housing, counseling, and campus activities",
    icon: Users,
  },
  {
    name: "Business & Finance",
    description: "Manages financial operations, budgeting, and institutional resources",
    icon: Building,
  },
  {
    name: "Enrollment Management",
    description: "Handles admissions, financial aid, and student recruitment",
    icon: Heart,
  },
]

export default async function AdministrationPage() {
  let staff: StaffMember[] = []
  try {
    const result = await sanityFetch({ query: ADMIN_PAGE_STAFF_QUERY })
    staff = result.data ?? []
  } catch {
    // Sanity unreachable -- TeamDirectory will show coming soon state
  }

  const teamMembers = staff.map((s) => ({
    name: s.name,
    title: s.title ?? "",
    department: s.department ?? undefined,
    email: s.email ?? undefined,
    phone: s.phone ?? undefined,
  }))
  return (
    <div className="min-h-screen bg-background">
      <main id="main-content">
        <PageHero
          title="Administration"
          subtitle="About Us"
          description="Dedicated professionals committed to supporting student success and institutional excellence."
          breadcrumbs={[
            { label: "About Us", href: "/about/history" },
            { label: "Administration", href: "/about/administration" },
          ]}
        />

        {/* Introduction */}
        <SectionWrapper>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#3d1a5c]/70">
              Our Team
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Serving With Excellence
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              The administration of Arkansas Baptist College is comprised of dedicated
              professionals who work tirelessly to create an environment where students
              can thrive academically, spiritually, and personally. Together, we uphold
              the college&apos;s mission of Truth and Light.
            </p>
          </div>
        </SectionWrapper>

        {/* Departments */}
        <SectionWrapper variant="muted">
          <SectionHeader
            title="Administrative Departments"
            description="Our departments work together to provide comprehensive support for students and faculty."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((dept) => (
              <div
                key={dept.name}
                className="rounded-lg bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3d1a5c]">
                  <dept.icon className="h-7 w-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-card-foreground">{dept.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{dept.description}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Staff Directory */}
        <SectionWrapper>
          <SectionHeader
            title="Meet Our Team"
            subtitle="Staff Directory"
            align="center"
          />
          <TeamDirectory
            members={teamMembers.length > 0 ? teamMembers : undefined}
            comingSoon={teamMembers.length === 0}
            comingSoonMessage="In the tradition of service that defines Arkansas Baptist College, we are preparing a comprehensive directory of our administrative team. Our staff members embody the values of faith, excellence, and dedication that have guided this institution since 1884."
          />
        </SectionWrapper>

        {/* Contact Section */}
        <SectionWrapper variant="purple">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
              Get In Touch
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Our team is here to assist you. Reach out to us for any questions or support.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <Phone className="mx-auto h-8 w-8 text-white/70" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-white">Main Office</h3>
                <p className="mt-2 text-white/70">
                  <a href="tel:5014201200" className="hover:text-white">(501) 420-1200</a>
                </p>
              </div>
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <Mail className="mx-auto h-8 w-8 text-white/70" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-white">Email</h3>
                <p className="mt-2 text-white/70">
                  <a href="mailto:info@arkansasbaptist.edu" className="hover:text-white">info@arkansasbaptist.edu</a>
                </p>
              </div>
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
                <Building className="mx-auto h-8 w-8 text-white/70" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-white">Campus</h3>
                <p className="mt-2 text-white/70">
                  1600 Dr. Martin Luther King Jr. Drive<br />
                  Little Rock, AR 72202
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Commitment */}
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border-l-4 border-[#3d1a5c] bg-muted p-8 md:p-12">
              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                Our Commitment to You
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                The administration of Arkansas Baptist College is committed to creating
                an environment where every student has the opportunity to succeed. We
                believe in the transformative power of education combined with faith,
                and we work every day to make that a reality for our students.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                From enrollment to graduation and beyond, our team is here to support
                you on your journey. We are dedicated to the values of Truth and Light
                that have guided Arkansas Baptist College for over 142 years.
              </p>
              <div className="mt-8">
                <Button className="bg-[#3d1a5c] hover:bg-[#3d1a5c]/90 text-white" asChild>
                  <Link href="/enrollment/apply">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
