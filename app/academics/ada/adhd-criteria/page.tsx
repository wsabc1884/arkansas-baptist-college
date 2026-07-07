import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { CTABand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "ADHD Documentation Guidelines | Arkansas Baptist College",
  description:
    "Disability verification guidelines for Attention Deficit/Hyperactivity Disorders (ADHD) at Arkansas Baptist College, including evaluator qualifications, documentation, and accommodation requirements.",
}

export default function AdhdCriteriaPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero
          title="Disability Verification Guidelines for ADHD"
          subtitle="Office of Disability Services"
          description="Documentation guidelines for verifying Attention Deficit/Hyperactivity Disorders (ADHD) to request academic accommodations at Arkansas Baptist College."
          breadcrumbs={[
            { label: "Academics", href: "/academics/departments" },
            { label: "Disability Services", href: "/academics/ada" },
            { label: "ADHD Documentation Guidelines" },
          ]}
        />

        <SectionWrapper>
          <div className="prose-abc mx-auto max-w-4xl">
            <h2>Qualifications of the Evaluator</h2>
            <p>
              The name, title, and license/certification credentials of the evaluator should be stated in the report.
              The following professionals are considered qualified to evaluate ADHD: licensed psychologists, and other
              appropriately credentialed mental health professionals, and medical doctors who have expertise in
              evaluating the impact of ADHD on an individual&apos;s educational performance. A diagnosis of ADHD by
              someone whose training is not in these fields is not acceptable. All reports should be typed on letterhead,
              dated, and signed.
            </p>

            <h2>Current Documentation</h2>
            <p>
              Evaluation should be no more than three years old. Changes may have occurred in the student&apos;s
              performance since a previous diagnosis, or new medication may have been prescribed or discontinued since
              the initial diagnosis was made. Documentation should substantiate the need for services based on the
              student&apos;s current functioning.
            </p>

            <h2>Identification of ADHD</h2>
            <p>
              A comprehensive evaluation should include a clinical interview, assessment of attention difficulties, and a
              diagnosis of ADHD using DSM-IV criteria. An IEP, 504 Accommodation Plan, or notification that the student
              is currently taking medication for ADHD are insufficient documentation by themselves, but may be included
              as part of a more comprehensive report.
            </p>

            <h3>Clinical Interview</h3>
            <p>
              Because ADHD is, by definition in the DSM-IV, first exhibited in childhood and manifests itself in more
              than one setting, relevant historical information is essential. The student&apos;s academic history should
              be included. Medical, developmental, and social histories should be investigated and reported, along with
              any family history of educational, medical, or psychosocial difficulties. A description of the
              individual&apos;s presenting attention symptoms should be provided, as well as any history of such
              symptoms. A family history of ADHD and the student&apos;s medication history also are important.
            </p>

            <h2>Assessment of Attention Difficulties</h2>
            <p>
              The evaluator should include any assessment data that supports or refutes a diagnosis of ADHD. Assessments
              such as checklists and rating scales are very important, but checklists, surveys, or subtest scores should
              not be used as the SOLE criterion for a diagnosis of ADHD. Most evaluators find it is valuable to
              administer, or examine the results of, intelligence tests such as the WISC-3, WAIS-R, or the
              Stanford-Binet.
            </p>
            <p>
              The evaluator should investigate the possibility of dual diagnoses and/or co-existing medical and/or
              psychological disorders that result in behaviors that mimic ADHD. Medical, social, and psychiatric problems
              should be ruled out as causes of ADHD.
            </p>

            <h3>Diagnosis of ADHD Using DSM-IV Criteria</h3>
            <p>
              Individuals who exhibit general problems with organization, test anxiety, memory, and concentration do not
              fit the diagnostic criteria for ADHD. Likewise, a positive response to medication by itself does not
              confirm a diagnosis of ADHD. The diagnostician should use direct language in the diagnosis of ADHD,
              avoiding the use of terms such as &ldquo;suggests&rdquo;, &ldquo;is indicative of&rdquo;, or &ldquo;attention
              problems&rdquo;. To enable Arkansas Baptist College officials to make an informed decision regarding
              reasonable accommodations, a SPECIFIC statement that the student is diagnosed with ADHD and the
              accompanying DSM-IV criteria are required. Also, the evaluator must describe the substantial limitation(s)
              to academic learning presented by the attention disorder. If the data indicate that ADHD is not present,
              the evaluator should state that finding in the report.
            </p>

            <h2>Recommendations for Accommodations</h2>
            <p>
              The diagnostic report should include specific recommendations for academic accommodations, and the
              rationale for such recommendations and how the proposed accommodations benefit the student in light of the
              identified disability. If accommodations are not identified specifically in the diagnostic report, the
              Office of Disability Support Services will request this information prior to offering any reasonable
              accommodations. A history of accommodations in itself does not warrant the provision of similar
              accommodations at Arkansas Baptist College. The final determination of appropriate and reasonable
              accommodation rests with the Office of Disability Support Services.
            </p>
            <p>
              A summary of diagnostic findings is a valuable component of the report. The summary might include an
              indication of how patterns of inattentiveness and/or hyperactivity validate the presence of ADHD, and the
              elimination of alternative explanations for academic problems (such as poor study habits, lack of
              motivation, psychosocial or medical problems).
            </p>

            <h2>Remit To</h2>
            <p>
              Office of Disability Support Services
              <br />
              1621 Dr. Martin Luther King
              <br />
              Little Rock, AR 72202
              <br />
              <a href="mailto:john.mcallister@arkansasbaptist.edu">john.mcallister@arkansasbaptist.edu</a>
            </p>
          </div>
        </SectionWrapper>

        <CTABand
          heading="Questions About Documentation?"
          description="The Office of Disability Services is here to help you understand what documentation is needed to request accommodations."
          primaryAction={{ label: "Contact Disability Services", href: "/academics/ada" }}
          secondaryAction={{ label: "Campus Directory", href: "/resources/directory" }}
        />
      </main>
    </div>
  )
}
