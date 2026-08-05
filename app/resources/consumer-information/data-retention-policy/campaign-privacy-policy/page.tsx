import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"

export const metadata: Metadata = {
  title: "Campaign Privacy Policy & Terms and Conditions | Arkansas Baptist College",
  description:
    "Campaign Privacy Policy and SMS Terms and Conditions for Jenzabar Mobile and Blackboard Mobile text messaging communications from Arkansas Baptist College.",
}

export default function CampaignPrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Campaign Privacy Policy & Terms and Conditions"
          subtitle="Jenzabar Mobile / Blackboard Mobile"
          description="Privacy practices and SMS terms and conditions governing text message communications."
          breadcrumbs={[
            { label: "Resources", href: "/resources/consumer-information" },
            { label: "Consumer Information", href: "/resources/consumer-information" },
            { label: "Data Retention Policy", href: "/resources/consumer-information/data-retention-policy" },
            { label: "Campaign Privacy Policy" },
          ]}
        />

        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <p>
              <strong>Effective Date:</strong> 08/05/2026
            </p>

            <h2>Privacy Policy</h2>

            <h3>Data Collection and Retention</h3>
            <p>
              We collect only the information necessary to provide our services and communicate with you. Records,
              including customer information and SMS consent records, are retained only as long as necessary to meet
              legal, regulatory, contractual, and business requirements. When records are no longer needed, they are
              securely destroyed or permanently deleted.
            </p>

            <h3>Privacy and Security</h3>
            <p>
              We maintain appropriate administrative, technical, and physical safeguards to protect personal information
              from unauthorized access, use, or disclosure.
            </p>
            <p>
              Mobile phone numbers and SMS consent are not shared with third parties or affiliates for marketing or
              promotional purposes.
            </p>

            <h2>SMS Terms and Conditions</h2>
            <p>
              By opting in to receive SMS messages, you agree to receive text messages from our organization related to
              our services. Messages may include informational updates, appointment reminders, account notifications, or
              other service-related communications.
            </p>
            <ul>
              <li>Message frequency may vary.</li>
              <li>Message and data rates may apply.</li>
              <li>Reply STOP at any time to opt out of future messages.</li>
              <li>Reply HELP for assistance.</li>
              <li>Consent to receive SMS messages is not a condition of purchasing any goods or services.</li>
              <li>Carriers are not liable for delayed or undelivered messages.</li>
            </ul>
            <p>
              By providing your mobile phone number and opting in, you acknowledge that you have read and agree to this
              Campaign Privacy Policy and Terms and Conditions.
            </p>

            <h2>Policy Review</h2>
            <p>
              This policy is reviewed periodically and updated as necessary to ensure compliance with applicable laws
              and industry standards.
            </p>
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
