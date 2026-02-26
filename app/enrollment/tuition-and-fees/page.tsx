import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Tuition and Fees | Arkansas Baptist College",
  description: "Current tuition rates, fees, and cost of attendance information for Arkansas Baptist College.",
}

export default function TuitionAndFeesPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Tuition and Fees"
          subtitle="Arkansas Baptist College is committed to providing an affordable, high-quality education. Below are the current tuition rates and fees."
          label="Enrollment"
        />

        <SectionWrapper>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-foreground/20">
                    <th className="py-3 pr-4 text-sm font-bold text-foreground">Item</th>
                    <th className="py-3 px-4 text-sm font-bold text-foreground text-right">Per Semester</th>
                    <th className="py-3 pl-4 text-sm font-bold text-foreground text-right">Per Year</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-medium text-foreground">Tuition (Full-time, 12 credit hours)</td>
                    <td className="py-3 px-4 text-right">$4,380</td>
                    <td className="py-3 pl-4 text-right">$8,760</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-medium text-foreground">General Fees</td>
                    <td className="py-3 px-4 text-right">$1,250</td>
                    <td className="py-3 pl-4 text-right">$2,500</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-medium text-foreground">Technology Fee</td>
                    <td className="py-3 px-4 text-right">$250</td>
                    <td className="py-3 pl-4 text-right">$500</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="prose-abc mt-10">
              <h2>Additional Fees</h2>
              <ul>
                <li><strong>Per Credit Hour:</strong> $365 (part-time or overload)</li>
                <li><strong>Late Registration Fee:</strong> $150</li>
                <li><strong>Application Fee:</strong> $25 (non-refundable)</li>
                <li><strong>Graduation Fee:</strong> $150</li>
                <li><strong>Transcript Fee:</strong> $10 per official transcript</li>
                <li><strong>Science Lab Fee:</strong> $75</li>
                <li><strong>Student ID Fee:</strong> $30</li>
                <li><strong>Parking Fee:</strong> $100</li>
              </ul>

              <h2>Room Rates (Per Semester)</h2>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border bg-card p-5 text-center">
                <p className="text-sm text-muted-foreground">Ripley Hall</p>
                <p className="mt-1 text-2xl font-bold text-foreground">$2,369</p>
              </div>
              <div className="rounded-lg border bg-card p-5 text-center">
                <p className="text-sm text-muted-foreground">Hill Hall</p>
                <p className="mt-1 text-2xl font-bold text-foreground">$2,369</p>
              </div>
              <div className="rounded-lg border bg-card p-5 text-center">
                <p className="text-sm text-muted-foreground">1600 Residence</p>
                <p className="mt-1 text-2xl font-bold text-foreground">$2,051</p>
              </div>
            </div>

            <div className="prose-abc mt-10">
              <h2>Meal Plans (Per Semester)</h2>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border bg-card p-5 text-center">
                <p className="text-sm text-muted-foreground">19 Meals/Week</p>
                <p className="mt-1 text-2xl font-bold text-foreground">$2,044</p>
              </div>
              <div className="rounded-lg border bg-card p-5 text-center">
                <p className="text-sm text-muted-foreground">10 Meals/Week</p>
                <p className="mt-1 text-2xl font-bold text-foreground">$1,056</p>
              </div>
              <div className="rounded-lg border bg-card p-5 text-center">
                <p className="text-sm text-muted-foreground">5 Meals/Week</p>
                <p className="mt-1 text-2xl font-bold text-foreground">$542</p>
              </div>
            </div>

            <div className="prose-abc mt-10">
              <h2>Payment Options</h2>
              <p>
                Arkansas Baptist College offers multiple payment options including online payment, payment
                plans, and third-party billing. Visit the{" "}
                <a href="/enrollment/pay-tuition">Pay My Tuition</a> page for details.
              </p>

              <p className="text-xs italic mt-8">
                Note: Tuition and fees are subject to change. Contact the Business Office at{" "}
                <a href="tel:5014201200">501-420-1200</a> for the most current information.
              </p>
            </div>
          </div>
        </SectionWrapper>

        <CTABand
          title="Make Your Education Affordable"
          description="Explore financial aid and scholarship options to offset the cost of attendance."
          primaryLabel="Apply for Financial Aid"
          primaryHref="/enrollment/apply-for-financial-aid"
          secondaryLabel="View Scholarships"
          secondaryHref="/enrollment/scholarships"
        />
      </main>
    </div>
  )
}
