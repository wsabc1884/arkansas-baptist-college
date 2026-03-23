"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, ChevronDown, Search, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

import type {SiteSettings} from '@/lib/types'
type Props = { siteSettings: SiteSettings }

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about/history",
    children: [
      { name: "History of the College", href: "/about/history" },
      { name: "Mission & Vision", href: "/about/mission-vision" },
      { name: "Strategic Plan", href: "/about/strategic-plan" },
      { name: "Consumer Information Disclosures", href: "/compliance/consumer-information" },
      { name: "Board of Trustees", href: "/about/board-of-trustees" },
      { name: "Office of the President", href: "/about/office-of-the-president" },
      { name: "Organization Chart", href: "/about/organization-chart" },
      { name: "Administration", href: "/about/administration" },
      { name: "Business Affairs", href: "/about/business-affairs" },
      { name: "Academic Affairs", href: "/about/academic-affairs" },
      { name: "Faculty & Staff Senate", href: "/about/faculty-staff-senate" },
      { name: "Institutional Advancement", href: "/about/institutional-advancement" },
      { name: "Technology Services", href: "/about/technology-services" },
      { name: "Student Affairs", href: "/about/student-affairs" },
      { name: "Title III & SAFRA Grants", href: "/about/title-iii-safra" },
      { name: "Title IX", href: "/compliance/title-ix" },
      { name: "Partnerships", href: "/about/partnerships" },
    ],
  },
  {
    name: "Academics",
    href: "/academics/business-administration",
    children: [
      { name: "Business Administration", href: "/academics/business-administration" },
      { name: "Interdisciplinary Studies", href: "/academics/interdisciplinary-studies" },
      { name: "Fine Arts", href: "/academics/fine-arts" },
      { name: "Public Administration", href: "/academics/public-administration" },
      { name: "Religious Studies", href: "/academics/religious-studies" },
      { name: "Social & Behavioral Sciences", href: "/academics/social-behavioral-sciences" },
      { name: "Academic Affairs", href: "/academics/academic-affairs" },
      { name: "Academic Catalog", href: "/academics/academic-catalog" },
      { name: "Academic Calendar (Main Campus)", href: "/academics/academic-calendar" },
      { name: "Academic Calendar (New Life)", href: "/academics/academic-calendar-new-life" },
      { name: "Course Search", href: "/academics/course-search" },
      { name: "Library", href: "/academics/library" },
      { name: "Registrar", href: "/academics/registrar" },
      { name: "Academic Advising", href: "/academics/academic-advising" },
      { name: "Americans with Disabilities Act", href: "/academics/ada" },
      { name: "Career Services", href: "/academics/career-services" },
      { name: "Upward Bound TRIO Program", href: "/academics/upward-bound" },
      { name: "Adult Education", href: "/academics/adult-education" },
      { name: "Testing Services", href: "/academics/testing-services" },
      { name: "Veterans Affairs", href: "/academics/veterans-affairs" },
    ],
  },
  {
    name: "Enrollment",
    href: "/enrollment/office-of-admissions",
    children: [
      { name: "Office of Admissions", href: "/enrollment/office-of-admissions" },
      { name: "Apply to ABC", href: "/enrollment/apply" },
      { name: "Evening & Weekend College Adult Degree", href: "/enrollment/evening-weekend" },
      { name: "Event Calendar", href: "/enrollment/event-calendar" },
      { name: "Campus Tour", href: "/enrollment/campus-tour" },
      { name: "Office of Student Financial Aid", href: "/enrollment/financial-aid" },
      { name: "Apply for Financial Aid", href: "/enrollment/apply-for-financial-aid" },
      { name: "Default Prevention", href: "/enrollment/default-prevention" },
      { name: "Parent Information", href: "/enrollment/parent-information" },
      { name: "Scholarships", href: "/enrollment/scholarships" },
      { name: "Financial Aid Forms", href: "/enrollment/financial-aid-forms" },
      { name: "Tuition and Fees", href: "/enrollment/tuition-and-fees" },
      { name: "Pay My Tuition", href: "/enrollment/pay-tuition" },
      { name: "1098T - Tuition Statement", href: "/enrollment/1098t" },
      { name: "Satisfactory Academic Progress (SAP)", href: "/enrollment/sap" },
    ],
  },
  {
    name: "Student Life",
    href: "/student-life/organizations",
    children: [
      { name: "Student Organizations", href: "/student-life/organizations" },
      { name: "Campus Life", href: "/student-life/campus-life" },
      { name: "Student Complaint Process", href: "/student-life/complaint-process" },
    ],
  },
  {
    name: "Resources",
    href: "/resources/directory",
    children: [
      { name: "ABC Entrepreneurship Fund", href: "/resources/entrepreneurship-fund" },
      { name: "Campus Safety", href: "/resources/campus-safety" },
      { name: "Consumer Information", href: "/resources/consumer-information" },
      { name: "Directory", href: "/resources/directory" },
      { name: "Facilities", href: "/resources/facilities" },
      { name: "Human Resources", href: "/resources/human-resources" },
      { name: "Institutional Research", href: "/resources/institutional-research" },
      { name: "ABC Tickets", href: "/resources/abc-tickets" },
      { name: "Derek Olivier Research Institute", href: "/resources/derek-olivier-research-institute" },
      { name: "Institutional Advancement", href: "/resources/institutional-advancement" },
    ],
  },
  { name: "Athletics", href: "https://abcbuffaloes.com", external: true },
  { name: "Band and Fine Arts", href: "/academics/fine-arts" },
]

const allPages = navigation.flatMap((item) =>
  item.children
    ? item.children.map((child) => ({ name: child.name, href: child.href, section: item.name }))
    : [{ name: item.name, href: item.href, section: "" }]
)

function SearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 0)
    } else {
      setQuery("")
    }
  }, [open])

  const filtered = query.length > 0
    ? allPages.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.section.toLowerCase().includes(query.toLowerCase())
      )
    : allPages

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-0 gap-0 overflow-hidden">
        <DialogTitle className="sr-only">Search Arkansas Baptist College</DialogTitle>
        <div className="flex items-center border-b px-4 py-3">
          <Search className="mr-3 h-5 w-5 text-muted-foreground shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages..."
            className="flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
          />
        </div>
        <div className="max-h-72 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <p className="py-6 text-center text-sm text-muted-foreground">No results found.</p>
          ) : (
            <ul role="listbox">
              {filtered.map((page) => (
                <li key={page.name + page.href}>
                  <Link
                    href={page.href}
                    onClick={() => onOpenChange(false)}
                    className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm hover:bg-muted transition-colors"
                  >
                    <span className="font-medium">{page.name}</span>
                    {page.section && (
                      <span className="text-xs text-muted-foreground">{page.section}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

function NavDropdown({ item }: { item: (typeof navigation)[number] }) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null)

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150)
  }, [])

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary-foreground/10"
      >
        {item.name}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div
          className="absolute left-0 top-full z-50 mt-1 w-60 rounded-md border bg-popover p-1.5 shadow-lg"
          role="menu"
        >
          {item.children?.map((child) => (
            <Link
              key={child.name}
              href={child.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block rounded-sm px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-muted"
            >
              {child.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function Header({siteSettings}: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)

  const normalizeExternalUrl = (input: string) => {
    const v = (input || "").trim()
    if (!v) return ""

    if (
      v.startsWith("http://") ||
      v.startsWith("https://") ||
      v.startsWith("mailto:") ||
      v.startsWith("tel:")
    ) {
      return v
    }

    return `https://${v.replace(/^\/+/, "")}`
  }

  // Use `||` so empty strings fall back, then normalize so missing schemes don't become relative routes.
  const portalUrl = normalizeExternalUrl(siteSettings?.myPortal || "https://my.arkansasbaptist.edu/ICS/")
  const emailUrl = normalizeExternalUrl(siteSettings?.email || "https://outlook.office.com/")
  const blackboardUrl = normalizeExternalUrl(siteSettings?.blackboard || "https://arkansasbc.blackboard.com/ultra/admin")
  const ticketUrl = "https://arbaptistcollege.on.spiceworks.com/portal/registrations"

  const phone = (siteSettings?.mainPhone || "501-420-1200").trim()
  const address = (siteSettings?.collegeAddress || "1600 Dr. Martin Luther King Jr. Drive, Old Main Building, Room B107, Little Rock, Arkansas 72202").trim()

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      <header className="bg-secondary text-secondary-foreground">
        {/* Utility Bar */}
        <div className="border-b border-secondary-foreground/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-9 items-center justify-between text-xs">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <Phone className="h-3 w-3" aria-hidden="true" />
                  <a href={`tel:${phone.replace(/\D/g, '')}`} className="hover:underline">{phone}</a>
                </span>
                <span className="hidden items-center gap-1.5 sm:flex">
                  <MapPin className="h-3 w-3" aria-hidden="true" />
                  <span>{address}</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a href={portalUrl} target="_blank" rel="noopener noreferrer" className="hidden hover:underline sm:inline">myABC Portal</a>
                <a href={emailUrl} target="_blank" rel="noopener noreferrer" className="hidden hover:underline sm:inline">Email</a>
                <a href={blackboardUrl} target="_blank" rel="noopener noreferrer" className="hidden hover:underline sm:inline">Blackboard</a>
                <a href={ticketUrl} target="_blank" rel="noopener noreferrer" className="hidden hover:underline sm:inline">myABC IT Support Portal</a>
                <span className="hidden h-3 w-px bg-secondary-foreground/20 sm:inline" aria-hidden="true" />
                <Link href="/give" className="hidden hover:underline sm:inline">Give to ABC</Link>
                <Link href="/enrollment/campus-tour" className="flex items-center gap-1 hover:underline">
                  <MapPin className="h-3 w-3 sm:hidden" aria-hidden="true" />
                  <span className="hidden sm:inline">Visit Campus</span>
                  <span className="sm:hidden">Visit</span>
                </Link>
                <button
                  type="button"
                  onClick={() => setSearchOpen(true)}
                  className="flex items-center gap-1 hover:underline"
                  aria-label="Open search"
                >
                  <Search className="h-3 w-3" aria-hidden="true" />
                  <span className="hidden sm:inline">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/abc-seal.png"
                alt="Arkansas Baptist College Seal - Truth and Light, Founded 1884"
                width={60}
                height={60}
                className="h-14 w-14 object-contain"
                loading="eager"
                priority
              />
              <div className="hidden flex-col sm:flex">
                <span className="text-lg font-bold leading-tight">Arkansas Baptist</span>
                <span className="text-sm leading-tight opacity-80">College</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center lg:flex" aria-label="Main navigation">
              {navigation.map((item) =>
                item.children ? (
                  <NavDropdown key={item.name} item={item} />
                ) : item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary-foreground/10"
                  >
                    {item.name}
                    <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary-foreground/10"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>

            {/* CTA Button */}
            <div className="hidden items-center lg:flex">
              <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/enrollment/apply">Apply Now</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden rounded-md p-2 hover:bg-secondary-foreground/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="border-t border-secondary-foreground/10 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto max-w-7xl space-y-1 px-4 pb-4 pt-2 sm:px-6">
              {/* Mobile utility links */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 border-b border-secondary-foreground/10 pb-3 mb-2 text-sm opacity-80">
                <a href={portalUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>myABC Portal</a>
                <a href={emailUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>Email</a>
                <a href={blackboardUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>Blackboard</a>
                <a href={ticketUrl} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>myABC IT Support Portal</a>
                <Link href="/give" onClick={() => setMobileMenuOpen(false)}>Give to ABC</Link>
              </div>

              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setExpandedMobile(expandedMobile === item.name ? null : item.name)}
                        aria-expanded={expandedMobile === item.name}
                        className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-base font-medium hover:bg-secondary-foreground/10"
                      >
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transition-transform ${expandedMobile === item.name ? "rotate-180" : ""}`} />
                      </button>
                      {expandedMobile === item.name && (
                        <div className="ml-4 space-y-0.5 pb-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block rounded-md px-3 py-2 text-sm opacity-80 hover:bg-secondary-foreground/10"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2 rounded-md px-3 py-2.5 text-base font-medium hover:bg-secondary-foreground/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                      {item.external && <ExternalLink className="h-3.5 w-3.5 opacity-60" />}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile search */}
              <button
                type="button"
                onClick={() => { setSearchOpen(true); setMobileMenuOpen(false) }}
                className="flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-base font-medium hover:bg-secondary-foreground/10"
              >
                <Search className="h-4 w-4" aria-hidden="true" />
                Search
              </button>

              <div className="pt-3 border-t border-secondary-foreground/10">
                <Button className="bg-primary w-full" asChild>
                  <Link href="/enrollment/apply">Apply Now</Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </header>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  )
}
