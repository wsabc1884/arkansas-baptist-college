import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, User } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { CTABand } from "@/components/cta-band"
import { SectionWrapper } from "@/components/section-wrapper"
import { TRUSTEES, getTrustee } from "@/lib/trustees"

export function generateStaticParams() {
  return TRUSTEES.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const trustee = getTrustee(slug)
  if (!trustee) {
    return { title: "Trustee | Arkansas Baptist College" }
  }
  return {
    title: `${trustee.name} | Board of Trustees | Arkansas Baptist College`,
    description:
      trustee.role ||
      `${trustee.name} serves on the Board of Trustees of Arkansas Baptist College.`,
  }
}

export default async function TrusteeProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const trustee = getTrustee(slug)

  if (!trustee) {
    notFound()
  }

  const hasBio = trustee.bio && trustee.bio.length > 0

  return (
    <div className="min-h-screen bg-background">
      <main id="main-content">
        <PageHero
          title={trustee.name}
          subtitle={trustee.title}
          description={trustee.role}
          breadcrumbs={[
            { label: "About Us", href: "/about/history" },
            { label: "Board of Trustees", href: "/about/board-of-trustees" },
            { label: trustee.name, href: `/about/board-of-trustees/${trustee.slug}` },
          ]}
        />

        <SectionWrapper>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
            {/* Portrait */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="overflow-hidden rounded-lg border border-border bg-card">
                {trustee.image ? (
                  <Image
                    src={trustee.image || "/placeholder.svg"}
                    alt={`Portrait of ${trustee.name}`}
                    width={640}
                    height={800}
                    className="h-auto w-full object-cover"
                    priority
                  />
                ) : (
                  <div className="flex aspect-[4/5] w-full items-center justify-center bg-[#3d1a5c]/10">
                    <User className="h-24 w-24 text-[#3d1a5c]/40" aria-hidden="true" />
                  </div>
                )}
              </div>
              <div className="mt-6 rounded-lg bg-[#f0eef3] p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#3d1a5c]/70">
                  Board Role
                </p>
                <p className="mt-2 font-serif text-xl font-bold text-[#3d1a5c]">{trustee.title}</p>
                {trustee.credentials && (
                  <p className="mt-1 text-sm text-[#3d1a5c]/70">{trustee.credentials}</p>
                )}
              </div>
            </div>

            {/* Biography */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#3d1a5c]/70">
                Biography
              </p>
              <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
                {trustee.name}
                {trustee.credentials && (
                  <span className="block text-lg font-medium text-muted-foreground mt-1">
                    {trustee.credentials}
                  </span>
                )}
              </h2>

              {hasBio ? (
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  {trustee.bio!.map((paragraph, index) => (
                    <p key={index} className={index === 0 ? "text-lg" : undefined}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <div className="mt-6 rounded-lg border border-border bg-card px-8 py-12 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#3d1a5c]/10">
                    <User className="h-8 w-8 text-[#3d1a5c]" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground">Bio Coming Soon</h3>
                  <p className="mx-auto mt-3 max-w-md text-muted-foreground leading-relaxed">
                    A full biography for {trustee.name} is being prepared and will be available
                    shortly. Thank you for your patience.
                  </p>
                </div>
              )}

              <div className="mt-10">
                <Link
                  href="/about/board-of-trustees"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#3d1a5c] transition-colors hover:text-[#3d1a5c]/70"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Back to Board of Trustees
                </Link>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <CTABand
          heading="Learn More About Our Leadership"
          description="Discover the dedicated team guiding Arkansas Baptist College."
          primaryAction={{ label: "Office of the President", href: "/about/office-of-the-president" }}
          secondaryAction={{ label: "Board of Trustees", href: "/about/board-of-trustees" }}
        />
      </main>
    </div>
  )
}
