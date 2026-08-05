import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"

export const metadata: Metadata = {
  title: "Privacy Policy & SMS Terms and Conditions | Arkansas Baptist College",
  description:
    "Arkansas Baptist College Privacy Policy and SMS Terms and Conditions describing the information we collect, how it is used, SMS consent, and your rights.",
}

export default function PrivacyPolicySmsTermsPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Privacy Policy & SMS Terms and Conditions"
          subtitle="Consumer Information"
          description="How Arkansas Baptist College collects, uses, and protects your information, and the terms governing SMS text message communications."
          breadcrumbs={[
            { label: "Resources", href: "/resources/consumer-information" },
            { label: "Consumer Information", href: "/resources/consumer-information" },
            { label: "Data Retention Policy", href: "/resources/consumer-information/data-retention-policy" },
            { label: "Privacy Policy & SMS Terms and Conditions" },
          ]}
        />

        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <p>
              <strong>Effective Date:</strong> August 5, 2026
            </p>

            <h2>Privacy Policy</h2>

            <h3>Information We Collect</h3>
            <p>
              Arkansas Baptist College collects only the information necessary to provide services and communicate with
              prospective students, current students, alumni, employees, donors, and other individuals who choose to
              interact with the College. Information collected may include your name, mobile phone number, email address,
              and other information you voluntarily provide.
            </p>

            <h3>How We Use Your Information</h3>
            <p>We use your information to:</p>
            <ul>
              <li>Send admissions and enrollment updates.</li>
              <li>Provide event reminders and campus notifications.</li>
              <li>Send appointment reminders.</li>
              <li>Deliver account or administrative notifications.</li>
              <li>Respond to your requests and inquiries.</li>
              <li>Send other service-related communications that you have requested or consented to receive.</li>
            </ul>

            <h3>SMS Consent</h3>
            <p>SMS consent is obtained directly by Arkansas Baptist College through:</p>
            <ul>
              <li>Website forms</li>
              <li>QR code sign-up forms</li>
            </ul>
            <p>
              By submitting your mobile phone number through one of these opt-in methods and providing your express
              consent, you agree to receive SMS messages from Arkansas Baptist College.
            </p>
            <p>SMS consent is not shared with third parties or affiliates for marketing or promotional purposes.</p>

            <h3>Information Sharing</h3>
            <p>
              Arkansas Baptist College does not sell, rent, or share your personal information, mobile phone number, or
              SMS consent with third parties or affiliates for their marketing or promotional purposes.
            </p>
            <p>
              Information may be shared only when required by law or with service providers who assist in delivering
              services on behalf of Arkansas Baptist College under appropriate confidentiality obligations.
            </p>

            <h3>Data Retention</h3>
            <p>
              Customer information and SMS consent records are retained only as long as necessary to satisfy legal,
              regulatory, contractual, and business requirements. Records are securely deleted or destroyed when they are
              no longer required.
            </p>

            <h3>Security</h3>
            <p>
              Arkansas Baptist College maintains reasonable administrative, technical, and physical safeguards designed
              to protect personal information from unauthorized access, disclosure, alteration, or destruction.
            </p>

            <h2>SMS Terms and Conditions</h2>
            <p>
              By providing your mobile phone number through a website form or QR code and expressly opting in, you agree
              to receive text messages from Arkansas Baptist College.
            </p>
            <p>Messages may include:</p>
            <ul>
              <li>Admissions updates</li>
              <li>Enrollment notifications</li>
              <li>Event reminders</li>
              <li>Appointment reminders</li>
              <li>Student services notifications</li>
              <li>Campus announcements</li>
              <li>Account notifications</li>
              <li>Other service-related communications</li>
            </ul>
            <ul>
              <li>Message frequency may vary.</li>
              <li>Message and data rates may apply.</li>
              <li>Reply STOP at any time to opt out.</li>
              <li>Reply HELP for assistance.</li>
              <li>Consent to receive SMS messages is not a condition of purchasing any goods or services.</li>
              <li>Wireless carriers are not liable for delayed or undelivered messages.</li>
            </ul>

            <h3>Consent</h3>
            <p>
              By checking the SMS consent box on a website form or submitting your information through a QR code sign-up
              form, you acknowledge that:
            </p>
            <ul>
              <li>You are the authorized user of the mobile phone number provided.</li>
              <li>You consent to receive recurring SMS messages from Arkansas Baptist College.</li>
              <li>Your consent applies only to Arkansas Baptist College.</li>
              <li>
                Your mobile number and SMS consent will not be shared with third parties or affiliates for marketing or
                promotional purposes.
              </li>
              <li>You may withdraw your consent at any time by replying STOP.</li>
            </ul>

            <h2>Contact Information</h2>
            <p>
              Arkansas Baptist College
              <br />
              Phone:{" "}
              <a href="tel:+15013759845">(501) 375-9845</a>
              <br />
              Email:{" "}
              <a href="mailto:admissions@arkansasbaptist.edu">admissions@arkansasbaptist.edu</a>
            </p>
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
