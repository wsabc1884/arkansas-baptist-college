import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"

export const metadata: Metadata = {
  title: "SMS Messaging Terms & Conditions | Arkansas Baptist College",
  description:
    "Arkansas Baptist College SMS Messaging Terms & Conditions governing participation in our SMS text messaging programs, including consent, message frequency, opt-out, and eligibility.",
}

export default function SmsTermsAndConditionsPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="SMS Messaging Terms & Conditions"
          subtitle="Text Messaging"
          description="Terms governing your participation in SMS text messaging programs operated by Arkansas Baptist College."
          breadcrumbs={[{ label: "SMS Messaging Terms & Conditions" }]}
        />

        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <p>
              <strong>Effective Date:</strong> August 10, 2026
            </p>

            <p>
              These SMS Messaging Terms &amp; Conditions (&ldquo;SMS Terms&rdquo;) govern your participation in SMS text
              messaging programs operated by Arkansas Baptist College (&ldquo;Arkansas Baptist College,&rdquo;
              &ldquo;ABC,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
            </p>
            <p>
              By voluntarily providing your mobile telephone number and affirmatively opting in to receive SMS messages
              from Arkansas Baptist College, you agree to these SMS Terms. Your consent to receive SMS messages is not a
              condition of enrollment, admission, purchase, use of college services, or any other transaction with
              Arkansas Baptist College.
            </p>

            <h2>1. SMS Program Description</h2>
            <p>
              Arkansas Baptist College may use SMS text messaging to provide notifications and other information related
              to the College and its services. Depending on the program for which you have provided consent, messages
              may include information such as enrollment-related notifications, application or admissions updates,
              reminders, account or service notifications, important College communications, and other notifications
              relevant to your relationship with Arkansas Baptist College.
            </p>
            <p>The specific messages you receive will depend on the SMS program for which you opted in.</p>
            <p>
              You can learn more about Arkansas Baptist College at{" "}
              <Link href="/">Arkansas Baptist College</Link>.
            </p>
            <p>
              You may also visit our admissions and application information at{" "}
              <Link href="/enrollment/apply">Apply to Arkansas Baptist College</Link>.
            </p>

            <h2>2. Consent to Receive Text Messages</h2>
            <p>
              By completing an SMS opt-in process, entering your mobile telephone number, and affirmatively selecting the
              option to receive SMS messages, you authorize Arkansas Baptist College to send text messages to the mobile
              telephone number you provided.
            </p>
            <p>
              SMS consent is voluntary and is separate from your acceptance of these SMS Terms and from the Arkansas
              Baptist College Privacy Policy.
            </p>
            <p>
              If SMS consent is presented through a web form, the SMS consent checkbox or other consent control must be
              intentionally selected by you and will not be selected by default.
            </p>
            <p>
              You may decline SMS consent and continue with the underlying College activity when the SMS program is
              presented as an optional communication method.
            </p>

            <h2>3. Message Frequency</h2>
            <p>
              Message frequency varies depending on your relationship with Arkansas Baptist College and the SMS program
              for which you have opted in.
            </p>
            <p>You may receive recurring messages when enrolled in an applicable notification program.</p>

            <h2>4. Message and Data Rates</h2>
            <p>Message and data rates may apply.</p>
            <p>
              Your mobile carrier&apos;s standard messaging and data rates may apply to SMS messages sent to or received
              from Arkansas Baptist College. Arkansas Baptist College does not control charges imposed by your mobile
              carrier.
            </p>

            <h2>5. How to Opt In</h2>
            <p>
              Where keyword-based enrollment is supported, you may opt in by texting an applicable enrollment keyword,
              such as JOIN, START, or YES, to an Arkansas Baptist College SMS number designated for the applicable
              program.
            </p>
            <p>
              You may also opt in through an Arkansas Baptist College website or other authorized enrollment process that
              clearly identifies the SMS program and obtains your affirmative consent.
            </p>
            <p>
              SMS consent applies only to the specific messaging program for which you provide consent. Opting in to one
              SMS program does not automatically enroll you in unrelated SMS programs.
            </p>

            <h2>6. How to Opt Out</h2>
            <p>
              You may stop receiving Arkansas Baptist College SMS messages at any time by replying <strong>STOP</strong>{" "}
              to the applicable SMS number.
            </p>
            <p>
              You may also use other supported opt-out keywords, including UNSUBSCRIBE, END, CANCEL, or QUIT, where
              supported.
            </p>
            <p>
              After you send an opt-out request, Arkansas Baptist College will process the request and will not send
              additional messages through the applicable SMS program, except for messages that may be necessary to
              confirm or process your opt-out or as otherwise permitted by applicable law.
            </p>
            <p>
              If you later wish to receive messages again, you may re-enroll through an authorized Arkansas Baptist
              College opt-in process.
            </p>

            <h2>7. Help and Customer Support</h2>
            <p>
              For help with Arkansas Baptist College SMS messaging, reply <strong>HELP</strong> to the applicable SMS
              number or contact:
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
              You may also visit{" "}
              <Link href="/">the Arkansas Baptist College website</Link>.
            </p>

            <h2>8. Eligibility</h2>
            <p>
              The Arkansas Baptist College SMS program is intended for individuals who are 18 years of age or older.
            </p>
            <p>
              By opting in, you represent that you are at least 18 years old and that you have the authority to use the
              mobile telephone number provided for SMS enrollment.
            </p>

            <h2>9. Mobile Number Responsibility</h2>
            <p>
              You are responsible for providing an accurate mobile telephone number and for maintaining control of the
              mobile device and telephone number associated with your SMS enrollment.
            </p>
            <p>
              If your mobile telephone number changes, you should update your information through the applicable Arkansas
              Baptist College process and discontinue SMS enrollment associated with your previous number.
            </p>

            <h2>10. Privacy</h2>
            <p>
              Your use of the Arkansas Baptist College SMS program is also governed by our{" "}
              <Link href="/privacy-policy">SMS Privacy Policy</Link>.
            </p>
            <p>
              Arkansas Baptist College does not sell or share mobile telephone numbers or SMS opt-in/consent information
              with third parties or affiliates for their own marketing or promotional purposes.
            </p>
            <p>
              For additional information regarding privacy and the information Arkansas Baptist College collects and
              uses, please review our <Link href="/privacy-policy">SMS Privacy Policy</Link>.
            </p>

            <h2>11. No Warranty Regarding Mobile Networks</h2>
            <p>
              SMS messages are transmitted through wireless carriers and telecommunications networks. Arkansas Baptist
              College does not guarantee that every message will be delivered, or that messages will be delivered without
              delay.
            </p>
            <p>Carriers are not liable for delayed or undelivered messages.</p>

            <h2>12. Changes to These SMS Terms</h2>
            <p>
              Arkansas Baptist College may update these SMS Terms from time to time. The updated version will be posted
              on this page with a revised effective date.
            </p>
            <p>
              Your continued participation in an applicable SMS program after an update may be subject to the revised SMS
              Terms, to the extent permitted by applicable law.
            </p>

            <h2>13. Contact Arkansas Baptist College</h2>
            <p>
              Questions regarding these SMS Terms or Arkansas Baptist College SMS messaging may be directed to:
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
