"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "#",
    children: [
      { name: "History of the College", href: "/about/history" },
      { name: "Mission & Vision", href: "/about/mission-vision" },
      { name: "Office of the President", href: "/about/office-of-the-president" },
      { name: "Board of Trustees", href: "/about/board-of-trustees" },
      { name: "Administration", href: "/about/administration" },
    ],
  },
  {
    name: "Academics",
    href: "#",
    children: [
      { name: "Business Administration", href: "#" },
      { name: "Interdisciplinary Studies", href: "#" },
      { name: "Fine Arts", href: "#" },
      { name: "Public Administration", href: "#" },
      { name: "Religious Studies", href: "#" },
      { name: "Social & Behavioral Sciences", href: "#" },
    ],
  },
  {
    name: "Enrollment",
    href: "#",
    children: [
      { name: "Office of Admissions", href: "#" },
      { name: "Apply to ABC", href: "#" },
      { name: "Financial Aid", href: "#" },
      { name: "Tuition and Fees", href: "#" },
      { name: "Campus Tour", href: "#" },
    ],
  },
  {
    name: "Student Life",
    href: "#",
    children: [
      { name: "Student Organizations", href: "#" },
      { name: "Campus Life", href: "#" },
      { name: "Campus Safety", href: "#" },
    ],
  },
  { name: "Athletics", href: "https://abcbuffaloes.com", external: true },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-secondary text-secondary-foreground">
      {/* Top Bar */}
      <div className="border-b border-secondary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>501-420-1200</span>
            </div>
            <div className="hidden items-center gap-4 sm:flex">
              <Link href="#" className="hover:underline">
                myABC Portal
              </Link>
              <Link href="#" className="hover:underline">
                Email
              </Link>
              <Link href="#" className="hover:underline">
                Blackboard
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://www.arkansasbaptist.edu/wp-content/uploads/2021/01/ABC-LOGO-150x200-1.png"
              alt="Arkansas Baptist College Logo"
              width={45}
              height={60}
              className="h-14 w-auto"
            />
            <div className="hidden flex-col sm:flex">
              <span className="text-lg font-bold leading-tight">Arkansas Baptist</span>
              <span className="text-sm leading-tight opacity-80">College</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) =>
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary-foreground/10">
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        <Link href={child.href}>{child.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
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

          {/* CTA Buttons */}
          <div className="hidden items-center gap-2 lg:flex">
            <Button variant="outline" size="sm" className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 bg-transparent">
              Give to ABC
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Apply Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-secondary-foreground/10 lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 pb-4 pt-2 sm:px-6">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium hover:bg-secondary-foreground/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="ml-4 space-y-1">
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
              </div>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="outline" className="border-secondary-foreground/20 text-secondary-foreground bg-transparent">
                Give to ABC
              </Button>
              <Button className="bg-primary">Apply Now</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
