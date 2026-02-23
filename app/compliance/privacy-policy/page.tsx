import type { Metadata } from "next"
import { ComplianceLayout } from "@/components/compliance-layout"

export const metadata: Metadata = {
  title: "Privacy Policy | Arkansas Baptist College",
  description: "Arkansas Baptist College website privacy policy and data collection practices.",
}

export default function PrivacyPolicyPage() {
  return (
    <ComplianceLayout title="Privacy Policy" subtitle="Data Privacy" lastUpdated="January 2026">
      <h2>Introduction</h2>
      <p>
        Arkansas Baptist College is committed to protecting the privacy of visitors to our website and
        users of our online services. This privacy policy describes how we collect, use, and safeguard
        personal information.
      </p>

      <hr />

      <h2>Information We Collect</h2>
      <h3>Automatically Collected Information</h3>
      <p>
        When you visit our website, our servers may automatically collect certain information, including:
      </p>
      <ul>
        <li>Internet Protocol (IP) address</li>
        <li>Browser type and version</li>
        <li>Operating system</li>
        <li>Referring website</li>
        <li>Pages visited and time spent on our website</li>
        <li>Date and time of visit</li>
      </ul>

      <h3>Information You Provide</h3>
      <p>
        We collect personal information that you voluntarily provide when you:
      </p>
      <ul>
        <li>Complete an application for admission</li>
        <li>Request information about our programs</li>
        <li>Register for events or campus visits</li>
        <li>Make a donation</li>
        <li>Subscribe to newsletters or communications</li>
        <li>Contact us through forms or email</li>
      </ul>

      <hr />

      <h2>How We Use Your Information</h2>
      <p>
        Personal information collected by Arkansas Baptist College is used for the following purposes:
      </p>
      <ul>
        <li>Processing applications and enrollment</li>
        <li>Responding to inquiries and requests for information</li>
        <li>Sending communications about programs, events, and institutional updates</li>
        <li>Processing donations and issuing receipts</li>
        <li>Improving our website and online services</li>
        <li>Complying with legal obligations</li>
      </ul>

      <hr />

      <h2>Information Sharing</h2>
      <p>
        Arkansas Baptist College does not sell, trade, or rent personal information to third parties. We
        may share information with:
      </p>
      <ul>
        <li>Service providers who assist in our operations (subject to confidentiality agreements)</li>
        <li>Government agencies as required by law</li>
        <li>Accrediting bodies for institutional evaluation</li>
      </ul>

      <hr />

      <h2>Data Security</h2>
      <p>
        We implement reasonable administrative, technical, and physical safeguards to protect personal
        information from unauthorized access, use, modification, or disclosure. However, no method of
        electronic transmission or storage is completely secure.
      </p>

      <hr />

      <h2>Cookies</h2>
      <p>
        Our website may use cookies and similar technologies to enhance your browsing experience and analyze
        website traffic. You may configure your browser to refuse cookies, though some features of our
        website may not function properly without them.
      </p>

      <hr />

      <h2>Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites. Arkansas Baptist College is not responsible
        for the privacy practices or content of these external sites. We encourage you to review the
        privacy policies of any third-party sites you visit.
      </p>

      <hr />

      <h2>Children&apos;s Privacy</h2>
      <p>
        Our website is not directed at children under the age of 13. We do not knowingly collect personal
        information from children under 13. If we become aware that we have collected such information,
        we will take steps to delete it.
      </p>

      <hr />

      <h2>Changes to This Policy</h2>
      <p>
        Arkansas Baptist College reserves the right to update this privacy policy at any time. Changes
        will be posted on this page with an updated revision date.
      </p>

      <hr />

      <h2>Contact</h2>
      <p>
        If you have questions about this privacy policy or our data practices, please contact:
      </p>
      <p>
        Arkansas Baptist College<br />
        1621 Dr. Martin Luther King Jr. Drive<br />
        Little Rock, AR 72202<br />
        Phone: <a href="tel:5014201200">501-420-1200</a><br />
        Email: <a href="mailto:info@arkansasbaptist.edu">info@arkansasbaptist.edu</a>
      </p>
    </ComplianceLayout>
  )
}
