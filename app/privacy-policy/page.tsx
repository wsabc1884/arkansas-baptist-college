import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"

export const metadata: Metadata = {
  title: "SMS Privacy Policy | Arkansas Baptist College",
  description:
    "Arkansas Baptist College SMS Privacy Policy describing how we collect, use, and protect information associated with our SMS text messaging programs.",
}

export default function SmsPrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="SMS Privacy Policy"
          subtitle="Text Messaging"
          description="How Arkansas Baptist College collects, uses, and protects information associated with our SMS text messaging programs."
          breadcrumbs={[{ label: "SMS Privacy Policy" }]}
        />

        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <p>
              <strong>Effective Date:</strong> August 10, 2026
            </p>

            <p>
              Arkansas Baptist College (&ldquo;Arkansas Baptist College,&rdquo; &ldquo;ABC,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This SMS Privacy Policy explains how Arkansas
              Baptist College collects, uses, and protects information associated with our SMS text messaging programs.
            </p>
            <p>
              This policy applies specifically to information collected in connection with Arkansas Baptist College SMS
              messaging and should be read together with our{" "}
              <Link href="/terms-and-conditions">SMS Messaging Terms &amp; Conditions</Link>.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              When you voluntarily enroll in an Arkansas Baptist College SMS messaging program, we may collect
              information necessary to provide the messaging service, including:
            </p>
            <ul>
              <li>Your mobile telephone number;</li>
              <li>Your SMS opt-in or consent status;</li>
              <li>The date, time, and method through which you provided SMS consent;</li>
              <li>The SMS program or notification category for which you opted in;</li>
              <li>Messages and responses associated with the SMS program;</li>
              <li>Your requests to opt out or obtain assistance; and</li>
              <li>Other information necessary to administer, secure, and maintain the SMS messaging service.</li>
            </ul>

            <h2>2. How We Use SMS Information</h2>
            <p>Arkansas Baptist College may use SMS-related information to:</p>
            <ul>
              <li>Send notifications and communications for the SMS program for which you provided consent;</li>
              <li>Process and maintain your SMS enrollment;</li>
              <li>Confirm your opt-in or opt-out requests;</li>
              <li>Respond to HELP or customer-support requests;</li>
              <li>Maintain records of consent and messaging preferences;</li>
              <li>Monitor and maintain the security and reliability of our messaging services;</li>
              <li>Comply with applicable legal, regulatory, and carrier requirements; and</li>
              <li>Operate and administer Arkansas Baptist College services.</li>
            </ul>

            <h2>3. Mobile Information and SMS Consent Are Not Sold or Shared for Marketing</h2>
            <p>
              Arkansas Baptist College does not sell, rent, trade, or share your mobile telephone number, SMS opt-in
              information, or SMS consent information with third parties or affiliates for their own marketing or
              promotional purposes.
            </p>
            <p>
              Mobile information and SMS opt-in/consent data will not be shared with third parties or affiliates for
              marketing or promotional purposes.
            </p>
            <p>
              This restriction specifically applies to mobile information and SMS consent data collected through our SMS
              messaging programs.
            </p>
            <p>
              We may disclose information to service providers that perform services on our behalf, such as
              telecommunications, messaging, technology, security, hosting, compliance, or administrative services, when
              necessary to provide or maintain the SMS service. Such service providers may use the information only as
              necessary to perform services for Arkansas Baptist College and subject to applicable contractual or legal
              restrictions.
            </p>

            <h2>4. SMS Message Frequency</h2>
            <p>
              SMS message frequency varies depending on the notification program and your relationship with Arkansas
              Baptist College.
            </p>
            <p>You may receive recurring messages if you enroll in an applicable SMS notification program.</p>
            <p>Message and data rates may apply.</p>

            <h2>5. Your SMS Choices</h2>
            <p>
              You may stop receiving SMS messages at any time by replying <strong>STOP</strong> to the applicable
              Arkansas Baptist College SMS number.
            </p>
            <p>
              You may also use supported opt-out keywords such as UNSUBSCRIBE, END, CANCEL, or QUIT.
            </p>
            <p>
              For assistance, reply <strong>HELP</strong> to the applicable SMS number or contact Arkansas Baptist
              College at: <a href="tel:+15014201200">501-420-1200</a> /{" "}
              <a href="mailto:support@arkansasbaptist.edu">support@arkansasbaptist.edu</a>
            </p>

            <h2>6. SMS Consent Is Voluntary</h2>
            <p>Providing consent to receive Arkansas Baptist College SMS messages is voluntary.</p>
            <p>
              SMS consent is separate from acceptance of our Terms &amp; Conditions, Privacy Policy, application
              procedures, enrollment requirements, or other required College agreements.
            </p>
            <p>
              Where SMS consent is collected through a website, users will be provided with a separate SMS consent option
              that requires affirmative action. SMS consent controls should not be pre-selected.
            </p>
            <p>
              You may decline SMS messaging and continue with an underlying College activity when SMS messaging is offered
              as an optional communication method.
            </p>

            <h2>7. Age Requirement</h2>
            <p>
              The Arkansas Baptist College SMS program is intended for individuals who are 18 years of age or older.
            </p>
            <p>We do not knowingly use the SMS program to collect consent from individuals under 18.</p>

            <h2>8. Security and Retention</h2>
            <p>
              Arkansas Baptist College uses reasonable administrative, technical, and organizational safeguards designed
              to protect information associated with our SMS messaging programs.
            </p>
            <p>
              We retain SMS consent and messaging information for as long as reasonably necessary to administer the SMS
              program, demonstrate consent and compliance, resolve disputes, maintain records, and satisfy applicable
              legal or regulatory obligations.
            </p>

            <h2>9. Third-Party Service Providers</h2>
            <p>
              Arkansas Baptist College may use trusted service providers to support the delivery and administration of
              SMS messages.
            </p>
            <p>
              These providers may process information such as mobile telephone numbers and message-related information
              solely to provide services to Arkansas Baptist College, maintain the messaging infrastructure, provide
              technical support, prevent abuse, or meet compliance obligations.
            </p>
            <p>
              The use of a service provider does not authorize that provider to sell or use Arkansas Baptist College SMS
              opt-in information for its own marketing or promotional purposes.
            </p>

            <h2>10. Links to Other Websites</h2>
            <p>
              Our website may contain links to websites or services operated by other organizations. Arkansas Baptist
              College is not responsible for the privacy practices of websites or services that it does not operate.
            </p>
            <p>
              For information about Arkansas Baptist College and its services, visit{" "}
              <Link href="/">Arkansas Baptist College</Link>.
            </p>
            <p>
              For admissions and application information, visit{" "}
              <Link href="/enrollment/apply">Apply to Arkansas Baptist College</Link>.
            </p>

            <h2>11. Changes to This SMS Privacy Policy</h2>
            <p>
              Arkansas Baptist College may update this SMS Privacy Policy from time to time. Changes will be posted on
              this page with a revised effective date.
            </p>

            <h2>12. Contact Us</h2>
            <p>
              If you have questions about this SMS Privacy Policy or Arkansas Baptist College SMS messaging, contact:
            </p>
            <p>
              Arkansas Baptist College
              <br />
              1600 Martin Luther King Dr
              <br />
              Little Rock, AR 72202
              <br />
              Phone: <a href="tel:+15014201200">501-420-1200</a>
              <br />
              Email: <a href="mailto:support@arkansasbaptist.edu">support@arkansasbaptist.edu</a>
            </p>

            <p>
              <strong>Last Updated:</strong> August 10, 2026
            </p>
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
