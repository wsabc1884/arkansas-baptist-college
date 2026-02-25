import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Partnerships - Arkansas Baptist College",
  description: "Arkansas Baptist College partners with Apple, HBCU C2, NAIA, and other organizations to expand educational equity and student opportunities.",
}

const partnerships = [
  {
    name: "HBCU C2 (Coding & Creativity)",
    partner: "Apple Community Education Initiative & Tennessee State University",
    description:
      "Arkansas Baptist College is a hub for Coding and Creativity as part of Apple's Community Education Initiative and Tennessee State University's HBCU C2 initiative designed to bring coding and creativity experiences to HBCUs and their communities. As part of its Community Education Initiative, Apple supports the College with equipment and professional development.",
    url: "https://hbcuc2.com/",
  },
  {
    name: "Velvatex College of Beauty",
    partner: "Academic Partnership",
    description:
      "ABC partners with Velvatex College of Beauty to offer the Associate of Arts in Cosmetic Sciences, providing students a pathway into the beauty and cosmetology industry with an accredited degree.",
  },
  {
    name: "WorldLink Trucking Academy",
    partner: "Certificate Partnership",
    description:
      "Through a partnership with WorldLink Trucking Academy, ABC offers a Certificate in Commercial Truck Driving (CDL), providing students with industry-ready skills and employment opportunities.",
  },
  {
    name: "Higher Learning Commission (HLC)",
    partner: "Accreditation",
    description:
      "Arkansas Baptist College is accredited by the Higher Learning Commission, ensuring that academic programs meet rigorous standards of quality and continuous improvement.",
    url: "https://www.hlcommission.org/component/directory/?Itemid=&Action=ShowBasic&instid=1076",
  },
  {
    name: "NAIA",
    partner: "Athletics",
    description:
      "As a member of the National Association of Intercollegiate Athletics (NAIA), ABC Buffaloes compete in intercollegiate sports while upholding the values of character, integrity, and sportsmanship.",
    url: "https://www.naia.org/",
  },
  {
    name: "ACE Internationalization Lab",
    partner: "American Council on Education",
    description:
      "ABC is a participant in the ACE Internationalization Laboratory, working to advance comprehensive internationalization across campus through strategic planning and curriculum enhancement.",
    url: "https://www.acenet.edu/Programs-Services/Pages/Professional-Learning/ACE-Internationalization-Laboratory.aspx",
  },
]

export default function PartnershipsPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Partnerships"
        subtitle="About Us"
        description="Arkansas Baptist College leverages strategic partnerships to expand educational equity, enhance technical training, and create opportunities for students and the community."
        breadcrumbs={[
          { label: "About Us", href: "/about/history" },
          { label: "Partnerships", href: "/about/partnerships" },
        ]}
      />

      <SectionWrapper>
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {partnerships.map((p) => (
              <div key={p.name} className="rounded-lg border p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{p.name}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{p.partner}</p>
                  </div>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                      aria-label={`Visit ${p.name} website`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="font-serif text-xl font-bold text-foreground">HBCU C2 Contact</h3>
            <div className="mt-4 rounded-lg border bg-muted/50 p-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Dr. Jaqueline McGehee</strong>, Faculty Lead<br />
                Email:{" "}
                <a href="mailto:jacqueline.mcgehee@arkansasbaptist.edu" className="text-primary hover:underline">
                  jacqueline.mcgehee@arkansasbaptist.edu
                </a><br />
                Phone: <a href="tel:5014201252" className="text-primary hover:underline">501-420-1252</a>
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                <strong className="text-foreground">Dr. Nita Bohannon</strong>, Program Manager<br />
                Email:{" "}
                <a href="mailto:nita.bohannon@arkansasbaptist.edu" className="text-primary hover:underline">
                  nita.bohannon@arkansasbaptist.edu
                </a><br />
                Phone: <a href="tel:5014201221" className="text-primary hover:underline">501-420-1221</a>
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CTABand
        heading="Partner with Arkansas Baptist College"
        description="Explore opportunities to collaborate with ABC in education, research, and community engagement."
        primaryAction={{ label: "Contact Us", href: "/about/administration" }}
        secondaryAction={{ label: "Institutional Advancement", href: "/about/institutional-advancement" }}
      />
    </main>
  )
}
