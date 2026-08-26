import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Phone, MapPin, Users } from "lucide-react"
import { sanityFetch } from "@/sanity/lib/live"
import { DIRECTORY_STAFF_QUERY } from "@/lib/queries"
import type { StaffMember } from "@/lib/types"

export const metadata: Metadata = {
  title: "Directory | Arkansas Baptist College",
  description: "Campus directory for Arkansas Baptist College departments, offices, and contact information.",
}

const fallbackDepartments: { name: string; phone: string; email?: string }[] = [
  { name: "Office of the President", phone: "501-420-1202", email: "President@arkansasbaptist.edu" },
  { name: "Academic Affairs", phone: "501-420-1312", email: "AcademicAffairs@arkansasbaptist.edu" },
  { name: "Office of Admissions", phone: "501-420-1234", email: "Admissions@arkansasbaptist.edu" },
  { name: "Business Office", phone: "501-420-1214", email: "Businessoffice@arkansasbaptist.edu" },
  { name: "Financial Aid", phone: "501-420-1226", email: "Financialaid@arkansasbaptist.edu" },
  { name: "Registrar", phone: "501-420-1237", email: "Registrarsoffice@arkansasbaptist.edu" },
  { name: "Student Affairs", phone: "501-420-1200", email: "Info@arkansasbaptist.edu" },
  { name: "J.C. Oliver Library", phone: "501-420-1252", email: "Jacqueline.mcgehee@arkansasbaptist.edu" },
  { name: "Upward Bound TRIO", phone: "501-420-1276" },
  { name: "Campus Safety", phone: "501-420-1211", email: "Security@arkansasbaptist.edu" },
  { name: "IT Help Desk", phone: "501-420-1200", email: "Info@arkansasbaptist.edu" },
  { name: "Human Resources", phone: "501-420-1219", email: "HR@arkansasbaptist.edu" },
]

const departmentLabels: Record<string, string> = {
  "administration": "Administration",
  "academic-affairs": "Academic Affairs",
  "student-affairs": "Student Affairs",
  "business-affairs": "Business Affairs",
  "institutional-advancement": "Institutional Advancement",
  "financial-aid": "Financial Aid",
  "admissions": "Admissions",
  "technology-services": "Technology Services",
  "library": "Library",
  "athletics": "Athletics",
}

export default async function DirectoryPage() {
  let staff: StaffMember[] = []
  try {
    const result = await sanityFetch({ query: DIRECTORY_STAFF_QUERY })
    staff = result.data ?? []
  } catch {
    // Sanity unreachable -- show fallback departments
  }

  const hasStaff = staff.length > 0

  // Group staff by department
  const grouped = staff.reduce<Record<string, StaffMember[]>>((acc, member) => {
    const dept = member.department ?? "other"
    if (!acc[dept]) acc[dept] = []
    acc[dept].push(member)
    return acc
  }, {})

  return (
    <div className="min-h-screen">
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

          {hasStaff ? (
            <div className="max-w-4xl mx-auto space-y-8">
              {Object.entries(grouped).map(([dept, members]) => (
                <div key={dept}>
                  <h2 className="mb-3 font-serif text-xl font-bold text-foreground">
                    {departmentLabels[dept] ?? dept}
                  </h2>
                  <div className="grid gap-3">
                    {members.map((member) => (
                      <div key={member._id} className="flex items-start justify-between gap-4 rounded-lg border bg-card px-5 py-4">
                        <div>
                          <p className="font-medium text-foreground">{member.name}</p>
                          {member.title && <p className="text-sm text-muted-foreground">{member.title}</p>}
                          {member.email && (
                            <a href={`mailto:${member.email}`} className="text-sm text-primary hover:underline">{member.email}</a>
                          )}
                        </div>
                        {member.phone && (
                          <div className="flex items-center gap-2 shrink-0">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <a href={`tel:${member.phone.replace(/\D/g, "")}`} className="text-sm text-muted-foreground hover:underline whitespace-nowrap">{member.phone}</a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto grid gap-3">
              {fallbackDepartments.map((dept) => (
                <div key={dept.name} className="flex items-start justify-between gap-4 rounded-lg border bg-card px-5 py-4">
                  <div>
                    <p className="font-medium text-foreground">{dept.name}</p>
                    {dept.email && (
                      <a href={`mailto:${dept.email}`} className="text-sm text-primary hover:underline">{dept.email}</a>
                    )}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a href={`tel:${dept.phone.replace(/-/g, "")}`} className="text-sm text-muted-foreground hover:underline whitespace-nowrap">{dept.phone}</a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </SectionWrapper>
      </main>
    </div>
  )
}
