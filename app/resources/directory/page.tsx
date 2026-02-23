import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Directory | Arkansas Baptist College",
  description: "Campus directory for Arkansas Baptist College departments, offices, and contact information.",
}

const departments = [
  { name: "Main Campus", phone: "501-420-1200", email: "info@arkansasbaptist.edu" },
  { name: "Office of the President", phone: "501-420-1200", email: "info@arkansasbaptist.edu" },
  { name: "Academic Affairs", phone: "501-420-1200", email: "info@arkansasbaptist.edu" },
  { name: "Office of Admissions", phone: "501-420-1200", email: "admissions@arkansasbaptist.edu" },
  { name: "Business Office", phone: "501-420-1200", email: "businessoffice@arkansasbaptist.edu" },
  { name: "Financial Aid", phone: "501-420-1200", email: "financialaid@arkansasbaptist.edu" },
  { name: "Registrar", phone: "501-420-1200", email: "info@arkansasbaptist.edu" },
  { name: "Student Affairs", phone: "501-420-1200", email: "info@arkansasbaptist.edu" },
  { name: "J.C. Oliver Library", phone: "501-420-1252", email: "jacqueline.mcgehee@arkansasbaptist.edu" },
  { name: "Career Services", phone: "501-420-1343", email: "edmond.davis@arkansasbaptist.edu" },
  { name: "Upward Bound TRIO", phone: "501-420-1276", email: "Michael.Isaac@arkansasbaptist.edu" },
  { name: "Campus Safety", phone: "501-420-1200", email: "info@arkansasbaptist.edu" },
  { name: "IT Help Desk", phone: "501-420-1200", email: "info@arkansasbaptist.edu" },
  { name: "Human Resources", phone: "501-420-1200", email: "info@arkansasbaptist.edu" },
]

export default function DirectoryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <PageHero title="Campus Directory" subtitle="Contact information for Arkansas Baptist College departments and offices." label="Resources" />
        <SectionWrapper>
          <div className="max-w-4xl mx-auto mb-8 flex items-start gap-3 rounded-lg border bg-card p-5">
            <MapPin className="h-5 w-5 shrink-0 text-primary mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">Main Campus</p>
              <p className="text-sm text-muted-foreground">1600 Dr. Martin Luther King Jr. Drive, Little Rock, AR 72202</p>
              <p className="text-sm text-muted-foreground">Main: <a href="tel:5014201200" className="text-primary hover:underline">501-420-1200</a></p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto grid gap-3">
            {departments.map((dept) => (
              <div key={dept.name} className="flex items-start justify-between gap-4 rounded-lg border bg-card px-5 py-4">
                <div>
                  <p className="font-medium text-foreground">{dept.name}</p>
                  <a href={`mailto:${dept.email}`} className="text-sm text-primary hover:underline">{dept.email}</a>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a href={`tel:${dept.phone.replace(/-/g, "")}`} className="text-sm text-muted-foreground hover:underline whitespace-nowrap">{dept.phone}</a>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  )
}
