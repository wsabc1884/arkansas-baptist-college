import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { Clock, Phone, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "J.C. Oliver Library | Arkansas Baptist College",
  description: "The J.C. Oliver Library serves as the academic hub of Arkansas Baptist College, providing books, electronic resources, and research support.",
}

export default function LibraryPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="J.C. Oliver Library"
          subtitle="Academic Resources"
          description="The academic hub of Arkansas Baptist College, supporting research, study, and lifelong learning."
          breadcrumbs={[
            { label: "Academics", href: "/academics/departments" },
            { label: "Library" },
          ]}
        />
        <SectionWrapper>
          <div className="max-w-4xl mx-auto grid gap-4 sm:grid-cols-3 mb-10">
            <div className="flex items-start gap-3 rounded-lg border bg-card p-4">
              <Clock className="h-5 w-5 shrink-0 text-primary mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Library Hours</p>
                <p className="text-sm text-muted-foreground">Mon-Thu: 8:30AM-6:00PM</p>
                <p className="text-sm text-muted-foreground">Fri: 8:30AM-5:00PM</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border bg-card p-4">
              <Phone className="h-5 w-5 shrink-0 text-primary mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Phone</p>
                <p className="text-sm text-muted-foreground">Circulation: <a href="tel:5014201254" className="hover:underline">501-420-1254</a></p>
                <p className="text-sm text-muted-foreground">Main Office: <a href="tel:5014201252" className="hover:underline">501-420-1252</a></p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border bg-card p-4">
              <Mail className="h-5 w-5 shrink-0 text-primary mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Library Director</p>
                <p className="text-sm text-muted-foreground">Jacqueline McGehee, MHA, MLS</p>
                <a href="mailto:jacqueline.mcgehee@arkansasbaptist.edu" className="text-sm text-primary hover:underline">jacqueline.mcgehee@arkansasbaptist.edu</a>
              </div>
            </div>
          </div>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Mission</h2>
            <p>The J.C. Oliver Library is an integral part of Arkansas Baptist College. We challenge ourselves to improve the quality of life for students, faculty, staff and people within the community. Our priority is creating the ultimate educational experience for students to graduate with an enhanced sense of community awareness, social responsibility, and skills necessary for lifelong learning.</p>
            <h2>Vision</h2>
            <p>The library&apos;s vision is to provide every student with a foundation for lifelong learning and ensure that students, faculty, and staff are effective users of ideas and information. The library is dedicated to developing student research and information literacy skills, providing quality resources and delivering courteous, timely and accurate information.</p>
            <h2>Values</h2>
            <p>A Commitment to: Core Values, Service Driven ~ Integrity, Respect, Excellence, Creativity and Flexibility.</p>
            <p>The J.C. Oliver Library is the academic hub of the college, supporting academic programs by providing books, electronic resources, and other materials to strengthen the curriculum. Several volumes of books, periodicals, and journals are accessible, as well as special collections and legal documents for research and study.</p>
            <h2>Online Databases</h2>
            <p>Available through the myABC Portal (JICS):</p>
            <h3>EBSCOhost</h3>
            <p>EBSCOhost is a powerful online reference system offering a variety of full text databases and popular databases from leading information providers. The comprehensive databases range from general reference collections to specially-designed, subject-specific databases.</p>
            <p>To sign into EBSCOhost, please sign into the <a href="https://my.arkansasbaptist.edu/" target="_blank" rel="noopener noreferrer">myABC Portal (JICS)</a> and click on the EBSCOhost link.</p>
            <h3>ProQuest</h3>
            <p>ProQuest connects people to information anywhere they study, work, invent or seek to learn. ProQuest allows you to browse a range of issues for one title, or find a specific issue. You can create a free personal login to save articles, organize your research, add tags, and modify search alerts.</p>
            <p>In order to access ProQuest, you will need to sign into the <a href="https://my.arkansasbaptist.edu/" target="_blank" rel="noopener noreferrer">myABC Portal (JICS)</a> and click on the ProQuest link.</p>
            <h3>Ebrary</h3>
            <p>Ebrary is a platform that provides desktop access to online books. Online books are electronic versions of printed books that can be viewed online from any PC connected to the Internet. The library has access to 2,600+ titles in all subject areas.</p>
            <p>To use Ebrary, please sign into the <a href="https://my.arkansasbaptist.edu/" target="_blank" rel="noopener noreferrer">myABC Portal (JICS)</a>, then click the Ebrary link.</p>
            <h2>Arkansas State Library</h2>
            <p>The Arkansas State Library serves as a resource for state government, for public libraries and for all Arkansas citizens. Access is available through the <a href="https://my.arkansasbaptist.edu/" target="_blank" rel="noopener noreferrer">myABC Portal</a>.</p>
          </div>
        </SectionWrapper>

        {/* Actions */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-4xl flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:jacqueline.mcgehee@arkansasbaptist.edu?subject=Reserve%20a%20Book"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Reserve a Book
            </a>
            <a
              href="mailto:jacqueline.mcgehee@arkansasbaptist.edu?subject=Ask%20a%20Librarian"
              className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Ask a Librarian
            </a>
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
