import type { ReactNode } from "react"
import { PageHero } from "@/components/page-hero"

interface ComplianceLayoutProps {
  title: string
  subtitle?: string
  lastUpdated?: string
  children: ReactNode
}

export function ComplianceLayout({ title, subtitle, lastUpdated, children }: ComplianceLayoutProps) {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title={title}
          subtitle={subtitle || "Compliance"}
          breadcrumbs={[
            { label: "Compliance", href: "/compliance/consumer-information" },
            { label: title },
          ]}
        />
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          {lastUpdated && (
            <p className="mb-8 text-sm text-muted-foreground border-b border-border pb-4">
              Last updated: {lastUpdated}
            </p>
          )}
          <div className="prose-abc">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
