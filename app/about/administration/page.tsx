import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, GraduationCap, Building, Heart, Phone, Mail } from "lucide-react"

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

export default function AdministrationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-[#3d1a5c] py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full bg-[url('/images/hero-campus.jpg')] bg-cover bg-center" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
              About Us
            </p>
            <h1 className="mt-2 font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Administration
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              Dedicated professionals committed to supporting student success and institutional excellence.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-[#3d1a5c]">
                Our Team
              </div>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Serving With Excellence
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                The administration of Arkansas Baptist College is comprised of dedicated 
                professionals who work tirelessly to create an environment where students 
                can thrive academically, spiritually, and personally. Together, we uphold 
                the college&apos;s mission of Truth and Light.
              </p>
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="bg-muted py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Administrative Departments
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our departments work together to provide comprehensive support for students and faculty.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {departments.map((dept) => (
                <div
                  key={dept.name}
                  className="rounded-lg bg-card p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3d1a5c]">
                    <dept.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-card-foreground">{dept.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{dept.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon - Staff Directory */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-block rounded-full bg-[#3d1a5c]/10 px-4 py-2 text-sm font-semibold text-[#3d1a5c]">
                Staff Directory
              </div>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground sm:text-4xl">
                Meet Our Team
              </h2>
            </div>

            {/* Coming Soon Message */}
            <div className="mt-12 mx-auto max-w-2xl">
              <div className="rounded-lg border-2 border-dashed border-[#3d1a5c]/30 bg-card p-12 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#3d1a5c]/10">
                  <Users className="h-10 w-10 text-[#3d1a5c]" />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-bold text-foreground">
                  Directory Coming Soon
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  In the tradition of service that defines Arkansas Baptist College, we are 
                  preparing a comprehensive directory of our administrative team. Our staff 
                  members embody the values of faith, excellence, and dedication that have 
                  guided this institution since 1884.
                </p>
                <p className="mt-4 text-muted-foreground">
                  We look forward to introducing you to the caring professionals who make 
                  Arkansas Baptist College a place where students can grow and succeed.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button className="bg-[#3d1a5c] hover:bg-[#3d1a5c]/90 text-white" asChild>
                    <Link href="/about/office-of-the-president">
                      Office of the President
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-[#3d1a5c] text-[#3d1a5c] hover:bg-[#3d1a5c] hover:text-white bg-transparent" asChild>
                    <Link href="#">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-[#3d1a5c] py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
                Get In Touch
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Our team is here to assist you. Reach out to us for any questions or support.
              </p>
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                  <Phone className="mx-auto h-8 w-8 text-white/70" />
                  <h3 className="mt-4 text-lg font-bold text-white">Main Office</h3>
                  <p className="mt-2 text-white/70">(501) 420-1200</p>
                </div>
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                  <Mail className="mx-auto h-8 w-8 text-white/70" />
                  <h3 className="mt-4 text-lg font-bold text-white">Email</h3>
                  <p className="mt-2 text-white/70">info@arkansasbaptist.edu</p>
                </div>
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
                  <Building className="mx-auto h-8 w-8 text-white/70" />
                  <h3 className="mt-4 text-lg font-bold text-white">Campus</h3>
                  <p className="mt-2 text-white/70">
                    1621 Dr. Martin Luther King Jr. Drive<br />
                    Little Rock, AR 72202
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-lg border-l-4 border-[#3d1a5c] bg-muted p-8 md:p-12">
                <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                  Our Commitment to You
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  The administration of Arkansas Baptist College is committed to creating 
                  an environment where every student has the opportunity to succeed. We 
                  believe in the transformative power of education combined with faith, 
                  and we work every day to make that a reality for our students.
                </p>
                <p className="mt-4 text-muted-foreground">
                  From enrollment to graduation and beyond, our team is here to support 
                  you on your journey. We are dedicated to the values of Truth and Light 
                  that have guided Arkansas Baptist College for over 140 years.
                </p>
                <div className="mt-8">
                  <Button className="bg-white text-[#3d1a5c] hover:bg-white/90" asChild>
                    <Link href="#">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
