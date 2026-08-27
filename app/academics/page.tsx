import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { CourseSequenceList } from "@/components/course-sequence-list"
import { courseSequences } from "@/lib/course-sequences"
import { 
  BookOpen, 
  Briefcase, 
  Music, 
  Cross, 
  Brain, 
  Scale, 
  GraduationCap,
  Calendar,
  FileText,
  Users,
  Library,
  HeadphonesIcon,
  HeartPulse,
  Stethoscope,
  Activity,
  HandHeart,
  ArrowRight
} from "lucide-react"

export const metadata: Metadata = {
  title: "Academics | Arkansas Baptist College",
  description: "Explore academic programs, degrees, and resources at Arkansas Baptist College. Find your path to success with our faith-centered education.",
}

const degreePrograms = [
  {
    name: "Business Administration",
    icon: Briefcase,
    description: "Develop strategic, entrepreneurial, and ethical business leaders ready for the modern economy.",
    href: "/academics/business-administration",
    degrees: ["Bachelor's", "Associate's"],
  },
  {
    name: "Christian Studies",
    icon: Cross,
    description: "Explore theology, ministry, and the philosophical foundations of faith traditions.",
    href: "/christianstudies",
    degrees: ["Bachelor's"],
  },
  {
    name: "Interdisciplinary Studies",
    icon: BookOpen,
    description: "Design a flexible, well-rounded degree in General Studies tailored to your goals and interests.",
    href: "/academics/interdisciplinary-studies",
    degrees: ["Bachelor's", "Associate's"],
  },
  {
    name: "Education",
    icon: GraduationCap,
    description: "Shape young minds through child development, instructional strategies, and a hands-on teacher residency.",
    href: "/academics/education",
    degrees: ["Bachelor's", "Associate's"],
  },
  {
    name: "Pre-Nursing",
    icon: Stethoscope,
    description: "Build a strong foundation in the sciences and health care concepts to advance into a nursing program.",
    href: "/academics/pre-nursing",
    degrees: ["Associate's"],
  },
  {
    name: "Health Studies",
    icon: HeartPulse,
    description: "Explore health promotion, disease prevention, and health care systems — in person or 100% online.",
    href: "/academics/health-studies",
    degrees: ["Associate's"],
  },
  {
    name: "Health, PE & Recreation",
    icon: Activity,
    description: "Inspire healthy lifestyles through fitness, sports management, and recreational programming.",
    href: "/academics/hper",
    degrees: ["Bachelor's"],
  },
  {
    name: "Fine Arts",
    icon: Music,
    description: "Express, create, and innovate through visual arts, performance, and digital media disciplines.",
    href: "/academics/fine-arts",
    degrees: ["Bachelor's"],
  },
  {
    name: "Criminal Justice",
    icon: Scale,
    description: "Understand the systems of law, justice, and corrections, with an optional Probation & Parole emphasis.",
    href: "/academics/criminal-justice",
    degrees: ["Bachelor's"],
  },
  {
    name: "Human Services",
    icon: HandHeart,
    description: "Support individuals and families in need, with an optional emphasis in Christian Education & Leadership.",
    href: "/academics/human-services",
    degrees: ["Bachelor's"],
  },
  {
    name: "Social & Behavioral Sciences",
    icon: Brain,
    description: "Apply psychology, sociology, and human services frameworks to solve real-world challenges.",
    href: "/academics/social-behavioral-sciences",
    degrees: ["Bachelor's"],
  },
  {
    name: "Public Administration",
    icon: Users,
    description: "Prepare for leadership roles in government, nonprofit organizations, and public service.",
    href: "/academics/public-administration",
    degrees: ["Bachelor's"],
  },
]

const academicResources = [
  {
    name: "Academic Calendar",
    description: "View important dates, deadlines, and academic schedules.",
    href: "/academics/academic-calendar",
    icon: Calendar,
  },
  {
    name: "Academic Catalog",
    description: "Browse course descriptions, degree requirements, and policies.",
    href: "/academics/academic-catalog",
    icon: FileText,
  },
  {
    name: "Academic Advising",
    description: "Get guidance on course selection and degree planning.",
    href: "/academics/academic-advising",
    icon: Users,
  },
  {
    name: "Registrar",
    description: "Access transcripts, enrollment verification, and registration services.",
    href: "/academics/registrar",
    icon: GraduationCap,
  },
  {
    name: "Library",
    description: "Explore research resources, databases, and study spaces.",
    href: "/academics/library",
    icon: Library,
  },
  {
    name: "Testing Services",
    description: "Schedule placement tests, proctored exams, and certifications.",
    href: "/academics/testing-services",
    icon: HeadphonesIcon,
  },
]

const supportServices = [
  {
    name: "Career Services",
    href: "/academics/career-services",
  },
  {
    name: "Adult Education",
    href: "/academics/adult-education",
  },
  {
    name: "Upward Bound",
    href: "/academics/upward-bound",
  },
  {
    name: "Veterans Affairs",
    href: "/academics/veterans-affairs",
  },
  {
    name: "ADA Services",
    href: "/academics/ada",
  },
]

export default function AcademicsPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero 
          title="Academics" 
          subtitle="Find Your Path"
          description="Arkansas Baptist College offers a variety of degree programs designed to prepare you for success in your career and life. Our faith-centered education empowers you to make a difference in your community."
        />

        {/* Degree Programs */}
        <SectionWrapper>
          <SectionHeader 
            title="Degree Programs"
            subtitle="Academic Departments"
            description="Choose from our undergraduate programs across multiple disciplines. Each program combines academic excellence with spiritual growth."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {degreePrograms.map((program) => (
              <Link
                key={program.name}
                href={program.href}
                className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 mb-4">
                  <program.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-card-foreground group-hover:text-primary transition-colors">
                  {program.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground flex-grow">{program.description}</p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {program.degrees.map((degree) => (
                    <span 
                      key={degree}
                      className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                    >
                      {degree}
                    </span>
                  ))}
                </div>

                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </SectionWrapper>

        {/* Academic Resources */}
        <SectionWrapper variant="muted">
          <SectionHeader 
            title="Academic Resources"
            subtitle="Student Support"
            description="Access the tools and services you need to succeed academically."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {academicResources.map((resource) => (
              <Link
                key={resource.name}
                href={resource.href}
                className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <resource.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {resource.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{resource.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </SectionWrapper>

        {/* Degree Course Sequences */}
        <SectionWrapper>
          <SectionHeader
            title="Degree Course Sequences"
            subtitle="Plan Your Path"
            description="Download the recommended semester-by-semester course sequence for each approved degree program."
          />
          <CourseSequenceList sequences={courseSequences} />
        </SectionWrapper>

        {/* Support Services */}
        <SectionWrapper variant="muted">
          <SectionHeader 
            title="Support Services"
            subtitle="Additional Resources"
            description="We offer a range of support services to help you thrive during your time at ABC."
          />
          <div className="flex flex-wrap gap-3">
            {supportServices.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground transition-all hover:border-primary hover:bg-primary/5 hover:text-primary"
              >
                {service.name}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </SectionWrapper>

        <CTABand 
          title="Ready to Begin Your Journey?" 
          description="Apply today and take the first step toward your future at Arkansas Baptist College."
          primaryLabel="Apply Now" 
          primaryHref="/enrollment/apply" 
          secondaryLabel="Request Information" 
          secondaryHref="/enrollment/request-info" 
        />
      </main>
    </div>
  )
}
