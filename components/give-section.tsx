import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import type { SiteSettings } from "@/lib/types"

const defaultHeading = "Invest in a Student's Future!"
const defaultBody = `Private gifts from individuals, organizations, churches, and corporations are essential to our ability to fulfill our mission. These contributions, whether restricted or unrestricted, can help support student scholarships, programs, facility updates, and general college operations — ensuring that we have the tools to provide our students with a quality educational experience in an environment conducive to their academic development.

Whether it is through a monthly recurring gift, a one-time donation, or as part of our campaigns and fundraising activities, your generous gifts to Arkansas Baptist College are greatly appreciated and will be carefully stewarded.`
const defaultThankYou = "Thank you for your investment in our students!"

export function GiveSection({ siteSettings }: { siteSettings?: SiteSettings | null }) {
  const heading = siteSettings?.giveHeading ?? defaultHeading
  const body = siteSettings?.giveBody ?? defaultBody
  const thankYou = siteSettings?.giveThankYou ?? defaultThankYou
  const donateUrl = siteSettings?.giveDonateUrl ?? "/give"
  return (
    <section className="relative overflow-hidden bg-secondary py-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-secondary-foreground" />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-secondary-foreground" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/20 p-3">
            <Heart className="h-8 w-8 text-primary" />
          </div>
          <h2 className="mt-6 font-serif text-3xl font-bold text-secondary-foreground sm:text-4xl">
            {heading}
          </h2>
          {body.split('\n\n').map((paragraph, i) => (
            <p key={i} className={`${i === 0 ? 'mt-6 text-lg' : 'mt-4'} text-secondary-foreground/80`}>
              {paragraph}
            </p>
          ))}
          <p className="mt-6 text-xl font-bold text-secondary-foreground">
            {thankYou}
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href={donateUrl}>
                Donate Today
                <Heart className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
