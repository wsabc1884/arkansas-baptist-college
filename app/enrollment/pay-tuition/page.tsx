import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { CreditCard, Building, Globe, CalendarDays } from "lucide-react"

export const metadata: Metadata = {
  title: "Pay My Tuition | Arkansas Baptist College",
  description: "Make your tuition payment online, view payment options, and learn about installment plans at Arkansas Baptist College.",
}

const paymentMethods = [
  { icon: Globe, title: "Online Payment", description: "Pay securely through the myABC student portal. Log in to your account, navigate to Student Financials, and select Make a Payment." },
  { icon: CreditCard, title: "Credit/Debit Card", description: "Visa, Mastercard, American Express, and Discover accepted in person at the Business Office or through the online portal." },
  { icon: Building, title: "In-Person Payment", description: "Visit the Business Office on the Main Campus during business hours. Cash, check, and money order accepted." },
  { icon: CalendarDays, title: "Payment Plan", description: "Installment payment plans are available to spread your balance across the semester. Contact the Business Office for enrollment." },
]

export default function PayTuitionPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Pay My Tuition"
          subtitle="Multiple convenient options are available to make your tuition payment."
          label="Enrollment"
        />

        <SectionWrapper>
          <div className="max-w-4xl mx-auto grid gap-4 sm:grid-cols-2">
            {paymentMethods.map((method) => (
              <div key={method.title} className="rounded-lg border bg-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 mb-4">
                  <method.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{method.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper background="muted">
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Important Information</h2>
            <ul>
              <li>Tuition is due at the start of each semester unless enrolled in a payment plan.</li>
              <li>A late payment fee of $100 may apply for outstanding balances after the due date.</li>
              <li>Students with unpaid balances may have registration, transcripts, and diplomas held until accounts are settled.</li>
              <li>Third-party billing is available for employers, organizations, or agencies sponsoring your education.</li>
            </ul>

            <h2>Refund Policy</h2>
            <p>
              Students who officially withdraw from courses may be eligible for a tuition refund based on
              the college refund schedule. Refund percentages decrease as the semester progresses. Contact the
              Business Office for the current refund schedule.
            </p>

            <h2>Contact the Business Office</h2>
            <p>
              Phone: <a href="tel:5014201200">501-420-1200</a><br />
              Email: <a href="mailto:businessoffice@arkansasbaptist.edu">businessoffice@arkansasbaptist.edu</a><br />
              Location: Administration Building, Main Campus
            </p>
          </div>
        </SectionWrapper>

        <CTABand
          title="View Current Rates"
          description="See the full breakdown of tuition, fees, and room and board costs."
          primaryLabel="Tuition and Fees"
          primaryHref="/enrollment/tuition-and-fees"
          secondaryLabel="Financial Aid Options"
          secondaryHref="/enrollment/financial-aid"
        />
      </main>
    </div>
  )
}
