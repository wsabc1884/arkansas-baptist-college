import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react"

const footerLinks = {
  about: [
    { name: "History of the College", href: "/about/history" },
    { name: "Mission & Vision", href: "/about/mission-vision" },
    { name: "Office of the President", href: "/about/office-of-the-president" },
    { name: "Board of Trustees", href: "/about/board-of-trustees" },
    { name: "Consumer Information", href: "#" },
  ],
  academics: [
    { name: "Academic Catalog", href: "#" },
    { name: "Academic Calendar", href: "#" },
    { name: "Library", href: "#" },
    { name: "Registrar", href: "#" },
    { name: "Course Search", href: "#" },
  ],
  admissions: [
    { name: "Apply to ABC", href: "#" },
    { name: "Financial Aid", href: "#" },
    { name: "Tuition and Fees", href: "#" },
    { name: "Campus Tour", href: "#" },
    { name: "Adult Education", href: "#" },
  ],
  resources: [
    { name: "myABC Portal", href: "#" },
    { name: "Blackboard", href: "#" },
    { name: "Campus Safety", href: "#" },
    { name: "Directory", href: "#" },
    { name: "IT Help Desk", href: "#" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Logo and Contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                ABC
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">Arkansas Baptist</span>
                <span className="text-sm leading-tight opacity-80">College</span>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-secondary-foreground/70">
              Arkansas Baptist College is a private, historically black liberal arts college in 
              Little Rock, Arkansas. Faith. Growth. Service.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span>1621 Dr. Martin Luther King Jr. Drive, Little Rock, AR 72202</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>501-420-1200</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>info@arkansasbaptist.edu</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-foreground/10 transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div>
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
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider">Academics</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.academics.map((link) => (
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
          </div>

          <div>
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-secondary-foreground/60 sm:flex-row">
            <p>© {new Date().getFullYear()} Arkansas Baptist College. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-secondary-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-secondary-foreground">
                Terms & Conditions
              </Link>
              <Link href="#" className="hover:text-secondary-foreground">
                Title IX
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
