import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Tuition and Fees | Arkansas Baptist College",
  description: "Current tuition rates, fees, and cost of attendance information for Arkansas Baptist College.",
}

export default function TuitionAndFeesPage() {
  return (
    <div className="min-h-screen">
      <Header />
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
                    <td className="py-3 pr-4 font-medium text-foreground">Tuition (Full-time, 12-18 credit hours)</td>
                    <td className="py-3 px-4 text-right">$4,440</td>
                    <td className="py-3 pl-4 text-right">$8,880</td>
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
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-medium text-foreground">Room &amp; Board (Double Occupancy)</td>
                    <td className="py-3 px-4 text-right">$3,500</td>
                    <td className="py-3 pl-4 text-right">$7,000</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4 font-medium text-foreground">Meal Plan</td>
                    <td className="py-3 px-4 text-right">$1,500</td>
                    <td className="py-3 pl-4 text-right">$3,000</td>
                  </tr>
                  <tr className="border-t-2 border-foreground/20">
                    <td className="py-3 pr-4 font-bold text-foreground">Estimated Total (Residential Student)</td>
                    <td className="py-3 px-4 text-right font-bold text-foreground">$10,940</td>
                    <td className="py-3 pl-4 text-right font-bold text-foreground">$21,880</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="prose-abc mt-10">
              <h2>Additional Fees</h2>
              <ul>
                <li><strong>Part-Time Tuition:</strong> $370 per credit hour (fewer than 12 credit hours)</li>
                <li><strong>Overload Fee:</strong> $370 per credit hour beyond 18 credit hours</li>
                <li><strong>Late Registration Fee:</strong> $100</li>
                <li><strong>Application Fee:</strong> $25 (non-refundable)</li>
                <li><strong>Graduation Fee:</strong> $150</li>
                <li><strong>Transcript Fee:</strong> $10 per official transcript</li>
              </ul>

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
      <Footer />
    </div>
  )
}
