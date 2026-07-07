import type { Metadata } from "next"
import { ComplianceLayout } from "@/components/compliance-layout"

export const metadata: Metadata = {
  title: "Campus Safety | Arkansas Baptist College",
  description: "Arkansas Baptist College campus safety information, Clery Act disclosures, and emergency procedures.",
}

export default function CampusSafetyPage() {
  return (
    <ComplianceLayout title="Campus Safety" subtitle="Clery Act Compliance" lastUpdated="January 2026">
      <h2>Commitment to Campus Safety</h2>
      <p>
        The safety and security of our students, faculty, staff, and visitors is a priority at Arkansas
        Baptist College. The college maintains a campus safety program designed to promote a safe and
        secure learning environment consistent with our mission and values.
      </p>

      <hr />

      <h2>Annual Security Report (Clery Act)</h2>
      <p>
        In compliance with the Jeanne Clery Disclosure of Campus Security Policy and Campus Crime Statistics
        Act, Arkansas Baptist College publishes an Annual Security Report (ASR) each year by October 1. This
        report includes:
      </p>
      <ul>
        <li>Campus security policies and procedures</li>
        <li>Crime statistics for the three most recent calendar years</li>
        <li>Crime prevention and safety awareness programs</li>
        <li>Procedures for reporting criminal activity and emergencies</li>
        <li>Information about sex offender registration</li>
      </ul>
      <p>
        A copy of the Annual Security Report is available from the Office of Campus Safety or by request
        at <a href="tel:5014201211">501-420-1211</a>.
      </p>

      <hr />

      <h2>Reporting Emergencies and Crimes</h2>
      <h3>Emergency</h3>
      <p>
        In the event of an immediate threat to life or property, call <strong>911</strong> first, then
        contact Campus Safety.
      </p>
      <h3>Non-Emergency Reporting</h3>
      <ul>
        <li><strong>Campus Safety:</strong> <a href="tel:5014201211">501-420-1211</a></li>
        <li><strong>Little Rock Police Department:</strong> <a href="tel:5013714829">501-371-4829</a></li>
        <li>Reports may also be made to any campus administrator or Responsible Employee</li>
      </ul>
      <p>
        All reports are taken seriously and investigated. Individuals may report crimes on a confidential
        or anonymous basis.
      </p>

      <hr />

      <h2>Timely Warnings and Emergency Notifications</h2>
      <p>
        Arkansas Baptist College issues timely warnings to the campus community when a Clery Act crime
        occurs that represents a serious or continuing threat. Emergency notifications are issued
        immediately upon confirmation of a significant emergency or dangerous situation on campus.
      </p>
      <p>
        Notifications may be distributed through:
      </p>
      <ul>
        <li>Campus email</li>
        <li>Text message alerts (students should register their mobile numbers)</li>
        <li>Public address systems</li>
        <li>Campus website and social media</li>
      </ul>

      <hr />

      <h2>Safety Programs</h2>
      <p>
        The college provides regular programming to promote campus safety, including:
      </p>
      <ul>
        <li>New student safety orientation</li>
        <li>Personal safety and awareness workshops</li>
        <li>Drug and alcohol abuse prevention education</li>
        <li>Emergency preparedness drills</li>
        <li>Bystander intervention training</li>
      </ul>

      <hr />

      <h2>Missing Student Policy</h2>
      <p>
        Any member of the campus community who believes a residential student has been missing for 24 hours
        should immediately report this concern to Campus Safety. The college will initiate an investigation
        and notify appropriate law enforcement agencies within 24 hours of determining the student is missing.
      </p>

      <hr />

      <h2>Contact Campus Safety</h2>
      <p>
        Office of Campus Safety<br />
        Arkansas Baptist College<br />
        1600 Dr. Martin Luther King Jr. Drive<br />
        Little Rock, AR 72202<br />
        Phone: <a href="tel:5014201211">501-420-1211</a>
      </p>
    </ComplianceLayout>
  )
}
