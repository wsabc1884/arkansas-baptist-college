import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react"

const footerLinks = {
  about: [
    { name: "History of the College", href: "/about/history" },
    { name: "Mission & Vision", href: "/about/mission-vision" },
    { name: "Office of the President", href: "/about/office-of-the-president" },
    { name: "Board of Trustees", href: "/about/board-of-trustees" },
    { name: "Administration", href: "/about/administration" },
  ],
  academics: [
    { name: "Academic Catalog", href: "/academics/academic-catalog" },
    { name: "Academic Calendar", href: "/academics/academic-calendar" },
    { name: "Library", href: "/academics/library" },
    { name: "Registrar", href: "/academics/registrar" },
    { name: "Course Search", href: "/academics/course-search" },
  ],
  admissions: [
    { name: "Apply to ABC", href: "/enrollment/apply" },
    { name: "Financial Aid", href: "/enrollment/financial-aid" },
    { name: "Tuition and Fees", href: "/enrollment/tuition-and-fees" },
    { name: "Campus Tour", href: "/enrollment/campus-tour" },
    { name: "Adult Education", href: "/academics/adult-education" },
  ],
  resources: [
    { name: "myABC Portal", href: "/resources/directory" },
    { name: "Blackboard", href: "/resources/directory" },
    { name: "Campus Safety", href: "/compliance/campus-safety" },
    { name: "Directory", href: "/resources/directory" },
    { name: "IT Help Desk", href: "/resources/directory" },
  ],
}

const complianceLinks = [
  { name: "Accreditation", href: "/compliance/accreditation" },
  { name: "Title IX", href: "/compliance/title-ix" },
  { name: "Consumer Information", href: "/compliance/consumer-information" },
  { name: "Campus Safety", href: "/compliance/campus-safety" },
  { name: "FERPA", href: "/compliance/ferpa" },
  { name: "Privacy Policy", href: "/compliance/privacy-policy" },
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground" role="contentinfo">
      {/* Accreditation & Membership Banner */}
      <div className="bg-[#3d1a5c]/80 border-b border-secondary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 items-center gap-8 sm:grid-cols-4">
            <a
              href="https://www.acenet.edu/Programs-Services/Pages/Professional-Learning/ACE-Internationalization-Laboratory.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
              aria-label="ACE Internationalization Lab - Current Participant"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2a5f8f]">
                <span className="text-xs font-bold text-white text-center leading-tight">ACE</span>
              </div>
              <span className="text-xs text-center text-secondary-foreground/80">ACE Internationalization Lab</span>
            </a>
            <a
              href="https://catalog.gpo.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
              aria-label="Catalog of U.S. Government Publications"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-md bg-[#4a9fd5]">
                <span className="text-[10px] font-bold text-white text-center leading-tight">U.S. Gov Publications</span>
              </div>
              <span className="text-xs text-center text-secondary-foreground/80">U.S. Gov Publications</span>
            </a>
            <a
              href="https://hbcuc2.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
              aria-label="HBCU C2 Member"
            >
              <div className="flex h-16 items-center justify-center">
                <span className="text-2xl font-extrabold tracking-tight text-white">HBCU C<sup className="text-sm">2</sup></span>
              </div>
              <span className="text-xs text-center text-secondary-foreground/80">HBCU C2 Member</span>
            </a>
            <a
              href="https://www.naia.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
              aria-label="National Association of Intercollegiate Athletics"
            >
              <div className="flex h-16 items-center justify-center">
                <span className="text-2xl font-extrabold tracking-widest text-white">NAIA</span>
              </div>
              <span className="text-xs text-center text-secondary-foreground/80">NAIA Member</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Logo and Contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="https://www.arkansasbaptist.edu/wp-content/uploads/2021/01/ABC-LOGO-150x200-1.png"
                alt="Arkansas Baptist College Logo"
                width={40}
                height={53}
                className="h-12 w-auto brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">Arkansas Baptist</span>
                <span className="text-sm leading-tight opacity-80">College</span>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-secondary-foreground/70 leading-relaxed">
              Arkansas Baptist College is a private, historically black liberal arts college in
              Little Rock, Arkansas. Truth and Light since 1884.
            </p>
            <address className="mt-6 space-y-3 text-sm not-italic">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>1600 Dr. Martin Luther King Jr. Drive, Little Rock, AR 72202</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a href="tel:5014201200" className="hover:underline">501-420-1200</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a href="mailto:info@arkansasbaptist.edu" className="hover:underline">info@arkansasbaptist.edu</a>
              </div>
            </address>
            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-foreground/10 transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <nav aria-label="About links">
            <h3 className="text-sm font-bold uppercase tracking-wider">About</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 transition-colors hover:text-secondary-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Admissions links">
            <h3 className="text-sm font-bold uppercase tracking-wider">Admissions</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.admissions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 transition-colors hover:text-secondary-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resource links">
            <h3 className="text-sm font-bold uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 transition-colors hover:text-secondary-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Compliance Links */}
        <div className="mt-12 border-t border-secondary-foreground/10 pt-8">
          <nav aria-label="Compliance and policy links">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-secondary-foreground/60">
              {complianceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-secondary-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* HLC Accreditation & Copyright */}
        <div className="mt-6 border-t border-secondary-foreground/10 pt-6">
          <div className="flex flex-col items-center gap-6">
            <a
              href="https://www.hlcommission.org/component/directory/?Itemid=&Action=ShowBasic&instid=1076"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 transition-opacity hover:opacity-80"
              aria-label="Accredited by the Higher Learning Commission - Verify Status"
            >
              <div className="rounded-md border-2 border-[#6b2d8b] bg-white px-4 py-3 text-center">
                <p className="text-xs font-bold uppercase tracking-wide text-[#6b2d8b]">Accredited</p>
                <p className="text-sm font-bold text-[#6b2d8b]">Higher Learning</p>
                <p className="text-sm font-bold text-[#6b2d8b]">Commission</p>
                <p className="mt-1 text-[10px] text-[#6b2d8b]/80">Verify Status Here</p>
              </div>
            </a>
            <div className="flex flex-col items-center gap-1 text-xs text-secondary-foreground/50">
              <p>
                &copy; {new Date().getFullYear()} Arkansas Baptist College. All rights reserved.
              </p>
              <p>
                Accredited by the Higher Learning Commission &middot; Member of NAIA
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
