import type { Metadata } from "next"
import { Smartphone, Apple, Play, Wifi } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"

export const metadata: Metadata = {
  title: "Jenzabar Mobile | Arkansas Baptist College",
  description:
    "Access the myABC Portal on your phone with the Jenzabar Mobile app. Download for iPhone or Android and use Connect Code ABC to get started.",
}

const APPLE_URL = "https://apps.apple.com/us/app/jenzabar-mobile/id1529665354"
const GOOGLE_URL =
  "https://play.google.com/store/apps/details?id=com.jenzabar.jgoapp&hl=en_US&gl=US"

const stores = [
  {
    name: "Download on the App Store",
    subtitle: "For iPhone & iPad",
    href: APPLE_URL,
    icon: Apple,
    qr: "https://my.arkansasbaptist.edu/m/ClientConfig/HtmlContent/Images/Store-Apple-QRcode.png",
    qrAlt: "QR code to download Jenzabar Mobile from the Apple App Store",
  },
  {
    name: "Get it on Google Play",
    subtitle: "For Android devices",
    href: GOOGLE_URL,
    icon: Play,
    qr: "https://my.arkansasbaptist.edu/m/ClientConfig/HtmlContent/Images/Store-Google-QRcode.png",
    qrAlt: "QR code to download Jenzabar Mobile from Google Play",
  },
]

export default function MobileAppPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Access the myABC Portal with a Mobile App"
          subtitle="Powered by Jenzabar Mobile"
          description="Stay connected to Arkansas Baptist College from anywhere. Download the free Jenzabar Mobile app to view your courses, grades, financial aid, campus announcements, and more."
          breadcrumbs={[{ label: "Jenzabar Mobile" }]}
        />

        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            {/* Connect Code callout */}
            <div className="flex flex-col items-center gap-4 rounded-lg border bg-card p-8 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Wifi className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  When prompted, enter your Connect Code
                </p>
                <p className="mt-2 font-serif text-5xl font-bold tracking-widest text-primary">
                  ABC
                </p>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                Download the app, search for Arkansas Baptist College or enter the Connect Code
                {" "}
                <span className="font-semibold text-foreground">ABC</span>, then sign in with your
                myABC Portal credentials.
              </p>
            </div>

            {/* Store cards */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {stores.map((store) => {
                const Icon = store.icon
                return (
                  <div
                    key={store.name}
                    className="flex flex-col items-center rounded-lg border bg-card p-6 text-center"
                  >
                    <a
                      href={store.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-secondary px-5 py-3 text-secondary-foreground transition-colors hover:bg-secondary/90"
                    >
                      <Icon className="h-7 w-7" aria-hidden="true" />
                      <span className="flex flex-col items-start leading-tight">
                        <span className="text-[10px] uppercase tracking-wide opacity-80">
                          {store.subtitle}
                        </span>
                        <span className="text-sm font-semibold">{store.name}</span>
                      </span>
                    </a>

                    <a
                      href={store.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-block rounded-lg border bg-white p-3"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={store.qr || "/placeholder.svg"}
                        alt={store.qrAlt}
                        width={180}
                        height={180}
                        className="h-44 w-44 object-contain"
                      />
                    </a>
                    <p className="mt-3 text-xs text-muted-foreground">
                      Scan with your phone&apos;s camera to download
                    </p>
                  </div>
                )
              })}
            </div>

            <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
              <Smartphone className="h-4 w-4" aria-hidden="true" />
              The Jenzabar Mobile app is free to download for all Arkansas Baptist College students,
              faculty, and staff.
            </p>
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
