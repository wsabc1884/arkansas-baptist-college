import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { SectionWrapper } from "@/components/section-wrapper"
import { AcademicCalendar } from "@/components/academic-calendar"

export const metadata: Metadata = {
  title: "Academic Calendar 2026-2028 | Arkansas Baptist College",
  description: "Important dates for the 2026-2028 academic years at Arkansas Baptist College Main Campus.",
}

export default function AcademicCalendarPage() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <PageHero title="Academic Calendar" subtitle="Main Campus - Important dates and deadlines for the 2026-2028 academic years." label="Academic Resources" />
        
        {/* Visual Calendar */}
        <SectionWrapper className="bg-muted/30">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">Calendar View</h2>
            <p className="mt-2 text-muted-foreground">
              Browse important dates month by month. Dates with a dot have scheduled events &mdash; select one to see the
              details, or review what&apos;s coming up in the panel on the right.
            </p>
            <div className="mt-8">
              <AcademicCalendar />
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="prose-abc max-w-4xl mx-auto">
            <h2>Full Schedule</h2>

            {/* Spring 2026 */}
            <h2>Spring Semester 2026</h2>
            <p className="text-sm text-muted-foreground">Term SP-26 | January 12 - May 8</p>
            <ul>
              <li><strong>SAP Appeal Process Begins:</strong> December 1, 2025</li>
              <li><strong>New Year&apos;s Observance (Campus Closed):</strong> January 1</li>
              <li><strong>Faculty Return to Campus:</strong> January 5</li>
              <li><strong>Faculty and Staff Institute:</strong> January 8</li>
              <li><strong>New &amp; Returning Student Move-in:</strong> January 9-11</li>
              <li><strong>SAP Appeal Process Ends:</strong> January 10</li>
              <li><strong>New Student Orientation:</strong> January 10-11</li>
              <li><strong>Regular Classes Begin:</strong> January 12</li>
              <li><strong>Last Day for Payment Arrangements:</strong> January 12</li>
              <li><strong>MLK Holiday (Campus Closed):</strong> January 19</li>
              <li><strong>1st Early Alert Due:</strong> January 19</li>
              <li><strong>Chapel Services Begin:</strong> January 22</li>
              <li><strong>Last Day for Registration/Schedule Changes:</strong> January 23</li>
              <li><strong>Enrollment Verification (Census):</strong> January 26</li>
              <li><strong>Reinstatement Period:</strong> January 28</li>
              <li><strong>Pre-Registration Begins for Stampede:</strong> February 9</li>
              <li><strong>Exit Exams for Spring Graduates:</strong> February 16 - March 6</li>
              <li><strong>Mid-Semester Evaluations:</strong> March 2-6</li>
              <li><strong>Mid-Semester Grades Due:</strong> March 11</li>
              <li><strong>Last Day to Drop for Absenteeism:</strong> March 11</li>
              <li><strong>E.C. Morris Week:</strong> March 23-27</li>
              <li><strong>Last Day for Students to Withdraw from Classes:</strong> March 27</li>
              <li><strong>Residence Halls Close for Spring Break:</strong> March 27</li>
              <li><strong>Spring Break (Residence Halls Closed):</strong> March 30 - April 3</li>
              <li><strong>Good Friday Observed (Campus Closed):</strong> April 3</li>
              <li><strong>Classes Resume:</strong> April 6</li>
              <li><strong>Pre-Registration Begins for Summer and Fall:</strong> April 6</li>
              <li><strong>Final Exams for Graduates:</strong> April 21-23</li>
              <li><strong>Honors Convocation:</strong> April 23</li>
              <li><strong>Final Grades for Graduates Due:</strong> April 24</li>
              <li><strong>Last Day to Withdraw from the College:</strong> April 24</li>
              <li><strong>Last Day for Spring Classes:</strong> April 24</li>
              <li><strong>Final Exams Week:</strong> April 27-30</li>
              <li><strong>Residence Halls Closed:</strong> April 30</li>
              <li><strong>Baccalaureate Service:</strong> May 1</li>
              <li><strong>Commencement:</strong> May 2</li>
              <li><strong>Grades Due (All Terms):</strong> May 6</li>
              <li><strong>Last Faculty Contract Workday:</strong> May 8</li>
            </ul>

            {/* Summer 2026 */}
            <h2>Summer 2026</h2>
            
            <h3>Summer Session I</h3>
            <p className="text-sm text-muted-foreground">May 11 - June 12 (Virtual)</p>
            <ul>
              <li><strong>SAP Appeal Process:</strong> May 7-11</li>
              <li><strong>Summer Session I Begins:</strong> May 11</li>
              <li><strong>Registration Ends:</strong> May 13</li>
              <li><strong>Enrollment Verification Due:</strong> May 15</li>
              <li><strong>Reinstatement Period:</strong> May 18</li>
              <li><strong>Memorial Day (Campus Closed):</strong> May 25</li>
              <li><strong>Last Day of Instruction:</strong> June 10</li>
              <li><strong>Final Examinations:</strong> June 12</li>
              <li><strong>Grades Due:</strong> June 16</li>
            </ul>

            <h3>Summer Session II</h3>
            <p className="text-sm text-muted-foreground">June 15 - July 24</p>
            <ul>
              <li><strong>SAP Appeal Process:</strong> June 12-15</li>
              <li><strong>Residential Hall Check-In:</strong> June 13-14</li>
              <li><strong>New Student Orientation:</strong> June 14</li>
              <li><strong>Summer Session II Begins:</strong> June 15</li>
              <li><strong>Registration Ends:</strong> June 17</li>
              <li><strong>Enrollment Verification Due:</strong> June 18</li>
              <li><strong>Juneteenth (Campus Closed):</strong> June 19</li>
              <li><strong>Reinstatement Period:</strong> June 22</li>
              <li><strong>Fourth of July Holiday (Campus Closed):</strong> July 3</li>
              <li><strong>2nd Early Alert Due:</strong> July 6</li>
              <li><strong>Last Day of Instruction:</strong> July 22</li>
              <li><strong>Final Examinations:</strong> July 24</li>
              <li><strong>Residential Hall Check-out:</strong> July 26</li>
              <li><strong>All Grades Due:</strong> July 29</li>
            </ul>

            <h3>Summer Bridge</h3>
            <p className="text-sm text-muted-foreground">June 15 - July 24</p>
            <ul>
              <li><strong>Residential Hall Check-In:</strong> June 13-14</li>
              <li><strong>New Student Orientation:</strong> June 13-14</li>
              <li><strong>Summer Bridge Begins:</strong> June 15</li>
              <li><strong>Registration Ends:</strong> June 17</li>
              <li><strong>Enrollment Verification Due:</strong> June 18</li>
              <li><strong>Juneteenth (Campus Closed):</strong> June 19</li>
              <li><strong>Reinstatement Period:</strong> June 22</li>
              <li><strong>Fourth of July Holiday (Campus Closed):</strong> July 3</li>
              <li><strong>2nd Early Alert Due:</strong> July 6</li>
              <li><strong>Last Day of Instruction:</strong> July 22</li>
              <li><strong>Final Examinations:</strong> July 24</li>
              <li><strong>Residential Hall Check-out:</strong> July 26</li>
              <li><strong>All Grades Due:</strong> July 29</li>
            </ul>

            {/* Fall 2026 */}
            <h2>Fall Semester 2026</h2>
            
            <h3>Full Term</h3>
            <p className="text-sm text-muted-foreground">August 10 - November 24</p>
            <ul>
              <li><strong>SAP Appeal for Fall:</strong> July 27 - August 20</li>
              <li><strong>Faculty Return to Campus:</strong> August 5</li>
              <li><strong>Faculty and Staff Institute:</strong> August 5</li>
              <li><strong>New and Transfer Student Move-in:</strong> August 7</li>
              <li><strong>Returning Student Move-In:</strong> August 8-9</li>
              <li><strong>New Student Orientation:</strong> August 9</li>
              <li><strong>Regular Classes Begin:</strong> August 10</li>
              <li><strong>Last Day for Registration/Schedule Changes:</strong> August 17</li>
              <li><strong>Chapel Services Begin:</strong> August 20</li>
              <li><strong>Enrollment Verification (Census) by Noon:</strong> August 24</li>
              <li><strong>Reinstatement Period:</strong> August 25-27</li>
              <li><strong>Last Day for Payment Arrangements:</strong> August 30</li>
              <li><strong>Labor Day Holiday (Campus Closed):</strong> September 7</li>
              <li><strong>Classes Resume:</strong> September 8</li>
              <li><strong>Fall 2026 Graduation Application Pickup:</strong> September 14</li>
              <li><strong>Constitution Day:</strong> September 17</li>
              <li><strong>Homecoming Week:</strong> September 20-26</li>
              <li><strong>Mid-Semester Evaluations:</strong> October 5-9</li>
              <li><strong>Mid-Semester Grades Due by 5PM:</strong> October 12</li>
              <li><strong>Last Day to Withdraw from Individual Course:</strong> October 26</li>
              <li><strong>Exit Exams Begin (Associate Degree):</strong> October 26</li>
              <li><strong>Spring 2027 Pre-Registration Begins:</strong> October 28</li>
              <li><strong>Fall 2026 Graduation Application Due:</strong> November 20</li>
              <li><strong>Last Day to Withdraw from the College:</strong> November 20</li>
              <li><strong>Last Day of Instruction:</strong> November 20</li>
              <li><strong>Final Exams:</strong> November 23-24</li>
              <li><strong>Residence Halls Closed by 5PM:</strong> November 24</li>
              <li><strong>Thanksgiving Break (Offices Closed):</strong> November 25-27</li>
              <li><strong>Offices Reopen:</strong> November 30</li>
              <li><strong>Grades Due (All Terms) by 5PM:</strong> December 1</li>
              <li><strong>Campus Closed for Winter Break:</strong> December 18 - January 1, 2027</li>
              <li><strong>Faculty &amp; Staff Return:</strong> January 4, 2027</li>
            </ul>

            <h3>Buffalo Stampede Session</h3>
            <p className="text-sm text-muted-foreground">Term SF-26A | August 19 - December 17</p>
            <ul>
              <li><strong>SAP Appeal Process Begins:</strong> July 1</li>
              <li><strong>Last Day to be Fully Admitted:</strong> August 16</li>
              <li><strong>SAP Appeal Process Ends:</strong> August 16</li>
              <li><strong>New Student Move-in:</strong> August 21-22</li>
              <li><strong>New Student Orientation:</strong> August 23</li>
              <li><strong>Regular Classes Begin:</strong> August 26</li>
              <li><strong>Late Registration:</strong> August 26-27</li>
              <li><strong>Last Day to Add/Drop a Class:</strong> August 30</li>
              <li><strong>Last Day for Payment Arrangements:</strong> August 30</li>
              <li><strong>Labor Day Holiday (Campus Closed):</strong> September 2</li>
              <li><strong>1st Early Alert Due:</strong> September 6</li>
              <li><strong>Enrollment Verification (Census):</strong> September 9</li>
              <li><strong>Last Day to Drop for Absenteeism:</strong> October 4</li>
              <li><strong>Mid-Term Grades Due by Noon:</strong> October 18</li>
              <li><strong>Fall Break (Residence Halls Open):</strong> October 21-22</li>
              <li><strong>E.C. Morris Week:</strong> October 21-25</li>
              <li><strong>Priority Registration for Spring/Summer:</strong> November 4</li>
              <li><strong>Thanksgiving Holiday (Campus Closed):</strong> November 28-29</li>
              <li><strong>Last Day for Students to Withdraw:</strong> November 29</li>
              <li><strong>Final Exams for Graduates:</strong> December 13</li>
              <li><strong>Final Grades for Graduates Due:</strong> December 14</li>
              <li><strong>Last Day of Classes:</strong> December 14</li>
              <li><strong>Reading Day:</strong> December 15</li>
              <li><strong>Final Exams Week:</strong> December 16-17</li>
              <li><strong>Residence Halls Close:</strong> December 17</li>
              <li><strong>Commencement:</strong> December 17</li>
              <li><strong>Grades Due (All Terms):</strong> December 20</li>
            </ul>

            <h3>Buffalo Stampede</h3>
            <p className="text-sm text-muted-foreground">September 28 - November 24</p>
            <ul>
              <li><strong>Pre-Registration Begins:</strong> September 8</li>
              <li><strong>SAP Appeal Process:</strong> September 23-30</li>
              <li><strong>New and Transfer Student Move-in:</strong> September 25-26</li>
              <li><strong>New Student Orientation:</strong> September 27</li>
              <li><strong>Regular Classes Begin:</strong> September 28</li>
              <li><strong>Late Registration:</strong> September 28-29</li>
              <li><strong>Last Day to Add/Drop a Class:</strong> September 30</li>
              <li><strong>Enrollment Verification (Census):</strong> October 2</li>
              <li><strong>Last Day to Withdraw from Individual Course:</strong> October 19</li>
              <li><strong>Spring 2027 Pre-Registration Begins:</strong> October 28</li>
              <li><strong>Last Day to Withdraw from the College:</strong> November 20</li>
              <li><strong>Last Day of Instruction:</strong> November 20</li>
              <li><strong>Final Examinations:</strong> November 23-24</li>
              <li><strong>Residence Halls Closed by 5PM:</strong> November 24</li>
              <li><strong>Thanksgiving Break (Offices Closed):</strong> November 25-27</li>
              <li><strong>Offices Reopen:</strong> November 30</li>
              <li><strong>Grades Due (All Terms) by 5PM:</strong> December 1</li>
            </ul>

            <h3>Fall 2026 Winter Session</h3>
            <p className="text-sm text-muted-foreground">November 30 - December 31</p>
            <ul>
              <li><strong>Pre-Registration Begins:</strong> November 16</li>
              <li><strong>SAP Appeal Process:</strong> November 16 - December 1</li>
              <li><strong>New and Transfer Student Move-in:</strong> November 29</li>
              <li><strong>New Student Orientation:</strong> November 30</li>
              <li><strong>Regular Classes Begin:</strong> December 1</li>
              <li><strong>Late Registration:</strong> December 1</li>
              <li><strong>Last Day to Add/Drop a Class:</strong> December 3</li>
              <li><strong>Enrollment Verification (Census):</strong> December 4</li>
              <li><strong>Last Day to Withdraw from Individual Course:</strong> December 7</li>
              <li><strong>Last Day to Withdraw from the College:</strong> December 29</li>
              <li><strong>Last Day of Instruction:</strong> December 29</li>
              <li><strong>Final Examinations:</strong> December 30</li>
              <li><strong>Residence Halls Closed by 5PM:</strong> December 30</li>
              <li><strong>Grades Due (All Terms) by 5PM:</strong> January 4, 2027</li>
            </ul>

            {/* Spring 2027 */}
            <h2>Spring Semester 2027</h2>
            <p className="text-sm text-muted-foreground">January 11 - April 30</p>
            <ul>
              <li><strong>SAP Appeal Process Begins:</strong> December 7, 2026</li>
              <li><strong>New Year&apos;s Observance (Campus Closed):</strong> January 1</li>
              <li><strong>Faculty and Staff Return:</strong> January 4</li>
              <li><strong>Faculty and Staff Institute:</strong> January 7</li>
              <li><strong>New &amp; Transfer Student Move-in:</strong> January 8</li>
              <li><strong>Returning Student Move-in:</strong> January 9-10</li>
              <li><strong>New Student Orientation:</strong> January 10</li>
              <li><strong>Regular Classes Begin:</strong> January 11</li>
              <li><strong>Late Registration Begins:</strong> January 11</li>
              <li><strong>Last Day for Payment Arrangements:</strong> January 15</li>
              <li><strong>MLK Holiday (Campus Closed):</strong> January 18</li>
              <li><strong>1st Early Alert Due:</strong> January 19</li>
              <li><strong>Chapel Services Begin:</strong> January 21</li>
              <li><strong>Last Day for Registration/Schedule Changes:</strong> January 22</li>
              <li><strong>Enrollment Verification (Census) by 5PM:</strong> January 25</li>
              <li><strong>Reinstatement Period Ends:</strong> January 27</li>
              <li><strong>Spring 2027 Graduation Application Pick-up:</strong> February 8</li>
              <li><strong>Pre-Registration Begins for Stampede:</strong> February 8</li>
              <li><strong>Spring 2027 Graduation Applications Due:</strong> March 1</li>
              <li><strong>Mid-Semester Evaluations:</strong> March 1-5</li>
              <li><strong>Mid-Semester Grades Due by 5PM:</strong> March 8</li>
              <li><strong>E.C. Morris Week:</strong> TBD</li>
              <li><strong>Last Day for Students to Withdraw from Classes:</strong> March 19</li>
              <li><strong>Residence Halls Close for Spring Break:</strong> March 20</li>
              <li><strong>Spring Break (Residence Halls Closed):</strong> March 22-26</li>
              <li><strong>Good Friday Observed (Campus Closed):</strong> March 26</li>
              <li><strong>Classes Resume:</strong> March 29</li>
              <li><strong>Pre-Registration Begins for Summer and Fall:</strong> April 5</li>
              <li><strong>Final Exams for Graduates:</strong> April 20-22</li>
              <li><strong>Honors Convocation:</strong> April 22</li>
              <li><strong>Final Grades for Graduates Due:</strong> April 23</li>
              <li><strong>Last Day to Withdraw from the College:</strong> April 23</li>
              <li><strong>Last Day for Spring Classes:</strong> April 23</li>
              <li><strong>Final Exams Week:</strong> April 26-29</li>
              <li><strong>Residence Halls Closed:</strong> April 30 - May 1</li>
              <li><strong>Baccalaureate Service:</strong> April 30</li>
              <li><strong>Commencement:</strong> May 1</li>
              <li><strong>Grades Due (All Terms):</strong> May 5</li>
              <li><strong>Last Faculty Contract Workday:</strong> May 5</li>
            </ul>

            <h3>Spring Stampede 2027</h3>
            <p className="text-sm text-muted-foreground">March 1 - April 30</p>
            <ul>
              <li><strong>SAP Appeal Process:</strong> February 22 - March 1</li>
              <li><strong>Last Day to be Fully Admitted:</strong> February 23</li>
              <li><strong>New Student Move-in:</strong> February 26-27</li>
              <li><strong>New Student Orientation:</strong> February 28</li>
              <li><strong>Regular Classes Begin:</strong> March 1</li>
              <li><strong>Late Registration:</strong> March 1-2</li>
              <li><strong>Last Day to Add/Drop a Class:</strong> March 3</li>
              <li><strong>1st Early Alert Due:</strong> March 3</li>
              <li><strong>Enrollment Verification (Census):</strong> March 5</li>
              <li><strong>Last Day for Payment Arrangements:</strong> March 17</li>
              <li><strong>E.C. Morris Week:</strong> TBD</li>
              <li><strong>Last Day for Students to Withdraw:</strong> March 19</li>
              <li><strong>Spring Break (Residence Halls Closed):</strong> March 22-26</li>
              <li><strong>Good Friday Observed (Campus Closed):</strong> March 26</li>
              <li><strong>Classes Resume:</strong> March 29</li>
              <li><strong>Pre-Registration Begins for Summer and Fall:</strong> April 5</li>
              <li><strong>Final Exams for Graduates:</strong> April 20-22</li>
              <li><strong>Honors Convocation:</strong> April 22</li>
              <li><strong>Final Grades for Graduates Due:</strong> April 23</li>
              <li><strong>Last Day to Withdraw from the College:</strong> April 23</li>
              <li><strong>Last Day for Spring Classes:</strong> April 23</li>
              <li><strong>Final Exams Week:</strong> April 26-29</li>
              <li><strong>Residence Halls Closed:</strong> April 30</li>
              <li><strong>Baccalaureate Service:</strong> April 30</li>
              <li><strong>Commencement:</strong> May 1</li>
              <li><strong>Grades Due (All Terms):</strong> May 5</li>
              <li><strong>Last Faculty Contract Workday:</strong> May 5</li>
            </ul>

            {/* Summer 2027 */}
            <h2>Summer 2027</h2>
            
            <h3>Summer Session I</h3>
            <p className="text-sm text-muted-foreground">May 10 - June 11</p>
            <ul>
              <li><strong>SAP Appeal:</strong> May 6-10</li>
              <li><strong>Summer Session I Begins:</strong> May 10</li>
              <li><strong>Registration Ends:</strong> May 12</li>
              <li><strong>1st Early Alert Due:</strong> May 12</li>
              <li><strong>Enrollment Verification Due:</strong> May 14</li>
              <li><strong>Reinstatement Period:</strong> May 17</li>
              <li><strong>2nd Early Alert Due:</strong> May 21</li>
              <li><strong>Memorial Day (Campus Closed):</strong> May 31</li>
              <li><strong>Last Day of Instruction:</strong> June 11</li>
              <li><strong>Final Examinations:</strong> June 11</li>
              <li><strong>All Grades Due:</strong> June 15</li>
            </ul>

            <h3>Summer Session II</h3>
            <p className="text-sm text-muted-foreground">June 14 - July 23</p>
            <ul>
              <li><strong>SAP Appeal:</strong> June 10-14</li>
              <li><strong>Residential Hall Check-In:</strong> June 11-13</li>
              <li><strong>New Student Orientation:</strong> June 13</li>
              <li><strong>Summer Session II Begins:</strong> June 14</li>
              <li><strong>Registration Ends:</strong> June 16</li>
              <li><strong>1st Early Alert Due:</strong> June 16</li>
              <li><strong>Juneteenth (Campus Closed):</strong> June 18-19</li>
              <li><strong>Enrollment Verification Due:</strong> June 21</li>
              <li><strong>Reinstatement Period:</strong> June 22</li>
              <li><strong>Fourth of July Holiday (Campus Closed):</strong> July 5</li>
              <li><strong>2nd Early Alert Due:</strong> July 6</li>
              <li><strong>Last Day of Instruction:</strong> July 22</li>
              <li><strong>Final Examinations:</strong> July 23</li>
              <li><strong>Residential Hall Check-out:</strong> July 24</li>
              <li><strong>All Grades Due:</strong> July 27</li>
            </ul>

            <h3>Summer Bridge 2027</h3>
            <p className="text-sm text-muted-foreground">June 14 - July 23</p>
            <ul>
              <li><strong>Residential Hall Check-In:</strong> June 11-13</li>
              <li><strong>New Student Orientation:</strong> June 13</li>
              <li><strong>Summer Bridge Begins:</strong> June 14</li>
              <li><strong>Registration Ends:</strong> June 16</li>
              <li><strong>1st Early Alert Due:</strong> June 16</li>
              <li><strong>Juneteenth (Campus Closed):</strong> June 18-19</li>
              <li><strong>Enrollment Verification Due:</strong> June 21</li>
              <li><strong>Reinstatement Period:</strong> June 22</li>
              <li><strong>Fourth of July Holiday (Campus Closed):</strong> July 5</li>
              <li><strong>2nd Early Alert Due:</strong> July 6</li>
              <li><strong>Last Day of Instruction:</strong> July 22</li>
              <li><strong>Final Examinations:</strong> July 23</li>
              <li><strong>Residential Hall Check-out:</strong> July 24</li>
              <li><strong>All Grades Due:</strong> July 27</li>
            </ul>

            {/* Fall 2027 */}
            <h2>Fall Semester 2027</h2>
            
            <h3>Full Term</h3>
            <p className="text-sm text-muted-foreground">August 9 - November 23</p>
            <ul>
              <li><strong>SAP Appeal:</strong> July 12 - August 13</li>
              <li><strong>Faculty Return to Campus:</strong> August 4</li>
              <li><strong>Faculty and Staff Institute:</strong> August 5</li>
              <li><strong>New and Transfer Student Move-in:</strong> August 6</li>
              <li><strong>Returning Student Move-In:</strong> August 7-8</li>
              <li><strong>New Student Orientation:</strong> August 8</li>
              <li><strong>Regular Classes Begin:</strong> August 9</li>
              <li><strong>Last Day for Payment Arrangements:</strong> August 13</li>
              <li><strong>Last Day for Registration/Schedule Changes:</strong> August 16</li>
              <li><strong>Chapel Services Begin:</strong> August 19</li>
              <li><strong>Enrollment Verification (Census) by 5PM:</strong> August 23</li>
              <li><strong>Reinstatement Period:</strong> August 24-25</li>
              <li><strong>Labor Day Holiday (Campus Closed):</strong> September 6</li>
              <li><strong>Classes Resume:</strong> September 7</li>
              <li><strong>Constitution Day Observation:</strong> September 17</li>
              <li><strong>Religious Emphasis Week:</strong> TBD</li>
              <li><strong>Mid-Semester Evaluations:</strong> October 4-8</li>
              <li><strong>Mid-Semester Grades Due:</strong> October 13</li>
              <li><strong>Homecoming Week:</strong> TBD</li>
              <li><strong>Last Day to Withdraw from Individual Course:</strong> October 18</li>
              <li><strong>Exit Exams (Associate Degree):</strong> TBD</li>
              <li><strong>Pre-Registration Begins:</strong> October 27</li>
              <li><strong>Last Day to Withdraw from the College:</strong> November 19</li>
              <li><strong>Last Day for Fall Classes:</strong> November 19</li>
              <li><strong>Final Exams:</strong> November 22-23</li>
              <li><strong>Residence Halls Closed:</strong> November 24</li>
              <li><strong>Thanksgiving Break (Offices Closed):</strong> November 24-25</li>
              <li><strong>Offices Reopen:</strong> November 29</li>
              <li><strong>Grades Due (All Terms) at Noon:</strong> December 1</li>
              <li><strong>Campus Closed for Winter Break at Noon:</strong> December 17</li>
            </ul>

            <h3>Fall 2027 Buffalo Stampede</h3>
            <p className="text-sm text-muted-foreground">September 27 - November 23</p>
            <ul>
              <li><strong>SAP Appeal Process:</strong> September 20-29</li>
              <li><strong>New and Transfer Student Move-in:</strong> September 24-25</li>
              <li><strong>New Student Orientation:</strong> September 26</li>
              <li><strong>Regular Classes Begin:</strong> September 27</li>
              <li><strong>Late Registration:</strong> September 27-28</li>
              <li><strong>Last Day to Add/Drop a Class:</strong> September 30</li>
              <li><strong>Enrollment Verification (Census) by 5PM:</strong> October 4</li>
              <li><strong>Exit Exams (Associate Degree):</strong> TBD</li>
              <li><strong>Early Alert Follow-up:</strong> October 4-8</li>
              <li><strong>Last Day to Withdraw from Individual Course:</strong> October 18</li>
              <li><strong>Pre-Registration for Spring 2028:</strong> October 27</li>
              <li><strong>Last Day to Withdraw from the College:</strong> November 19</li>
              <li><strong>Last Day for Fall Classes:</strong> November 19</li>
              <li><strong>Final Exams:</strong> November 22-23</li>
              <li><strong>Residence Halls Closed:</strong> November 24</li>
              <li><strong>Thanksgiving Break (Offices Closed):</strong> November 24-25</li>
              <li><strong>Offices Reopen:</strong> November 29</li>
              <li><strong>Grades Due (All Terms) at Noon:</strong> December 1</li>
              <li><strong>Campus Closed for Winter Break at Noon:</strong> December 17</li>
            </ul>

            <h3>Fall 2027 Wintersession</h3>
            <p className="text-sm text-muted-foreground">November 29 - December 31</p>
            <ul>
              <li><strong>Pre-Registration Begins:</strong> November 16</li>
              <li><strong>SAP Appeal Process:</strong> November 16 - December 1</li>
              <li><strong>New and Transfer Student Move-in:</strong> November 28</li>
              <li><strong>New Student Orientation:</strong> November 29</li>
              <li><strong>Regular Classes Begin:</strong> November 30</li>
              <li><strong>Late Registration:</strong> December 1</li>
              <li><strong>Last Day to Add/Drop a Class:</strong> December 3</li>
              <li><strong>Enrollment Verification (Census):</strong> December 6</li>
              <li><strong>Last Day to Withdraw from Individual Course:</strong> December 8</li>
              <li><strong>Last Day to Withdraw from the College:</strong> December 29</li>
              <li><strong>Last Day of Instruction:</strong> December 29</li>
              <li><strong>Final Examinations:</strong> December 30</li>
              <li><strong>Residence Halls Closed:</strong> December 30</li>
              <li><strong>Grades Due (All Terms) by 5PM:</strong> January 3, 2028</li>
            </ul>

            {/* Spring 2028 */}
            <h2>Spring Semester 2028</h2>
            <p className="text-sm text-muted-foreground">January 10 - April 28</p>
            <ul>
              <li><strong>SAP Appeal Process:</strong> December 13, 2027 - January 14, 2028</li>
              <li><strong>New Year&apos;s Observance (Campus Closed):</strong> December 31</li>
              <li><strong>Faculty Return to Campus:</strong> January 5</li>
              <li><strong>Faculty and Staff Institute:</strong> January 6</li>
              <li><strong>New &amp; Transfer Student Move-in:</strong> January 7</li>
              <li><strong>Returning Student Move-In:</strong> January 8-9</li>
              <li><strong>New Student Orientation:</strong> January 9</li>
              <li><strong>Regular Classes Begin:</strong> January 10</li>
              <li><strong>Last Day for Payment Arrangements:</strong> January 14</li>
              <li><strong>MLK Holiday (Campus Closed):</strong> January 17</li>
              <li><strong>1st Early Alert Due:</strong> January 18</li>
              <li><strong>Chapel Services Begin:</strong> January 20</li>
              <li><strong>Last Day for Registration/Schedule Changes:</strong> January 21</li>
              <li><strong>Enrollment Verification (Census) by Noon:</strong> January 24</li>
              <li><strong>Reinstatement Period:</strong> January 25-26</li>
              <li><strong>Pre-Registration Begins for Stampede:</strong> February 9</li>
              <li><strong>Exit Exams for Spring Graduates:</strong> TBD</li>
              <li><strong>E.C. Morris Week:</strong> TBD</li>
              <li><strong>Mid-Semester Evaluations:</strong> March 6-10</li>
              <li><strong>Last Day to Drop for Absenteeism:</strong> March 10</li>
              <li><strong>Mid-Semester Grades Due:</strong> March 15</li>
              <li><strong>Last Day for Students to Withdraw:</strong> March 17</li>
              <li><strong>Spring Break (Residence Halls Closed):</strong> March 20-24</li>
              <li><strong>Classes Resume:</strong> March 27</li>
              <li><strong>Pre-Registration Begins for Summer and Fall:</strong> April 4</li>
              <li><strong>Good Friday Observed (Campus Closed):</strong> April 14</li>
              <li><strong>Final Exams for Graduates:</strong> April 17-20</li>
              <li><strong>Honors Convocation:</strong> April 20</li>
              <li><strong>Final Grades for Graduates Due:</strong> April 21</li>
              <li><strong>Last Day to Withdraw from the College:</strong> April 21</li>
              <li><strong>Last Day for Spring Classes:</strong> April 21</li>
              <li><strong>Final Exams Week:</strong> April 24-27</li>
              <li><strong>Baccalaureate Service:</strong> April 28</li>
              <li><strong>Commencement:</strong> April 29</li>
              <li><strong>Residence Halls Closed:</strong> April 29</li>
              <li><strong>Grades Due (All Terms) by 5PM:</strong> May 2</li>
              <li><strong>Last Faculty Contract Workday:</strong> May 2</li>
            </ul>

            <h3>Spring Stampede 2028</h3>
            <p className="text-sm text-muted-foreground">March 1 - April 28</p>
            <ul>
              <li><strong>SAP Appeal Process:</strong> February 23 - March 1</li>
              <li><strong>Residence Halls Check-In:</strong> February 26-27</li>
              <li><strong>New Student Orientation:</strong> February 28</li>
              <li><strong>Stampede Classes Begin:</strong> March 1</li>
              <li><strong>Late Registration:</strong> March 1-2</li>
              <li><strong>Last Day to Add/Drop a Class:</strong> March 3</li>
              <li><strong>Last Day for Payment Arrangements:</strong> March 3</li>
              <li><strong>1st Early Alert Due:</strong> March 3</li>
              <li><strong>Enrollment Verification (Census):</strong> March 6</li>
              <li><strong>E.C. Morris Institute:</strong> TBD</li>
              <li><strong>Last Day for Students to Withdraw:</strong> March 17</li>
              <li><strong>Spring Break (Residence Halls Closed):</strong> March 20-24</li>
              <li><strong>Classes Resume:</strong> March 27</li>
              <li><strong>Pre-Registration Begins for Summer and Fall:</strong> April 4</li>
              <li><strong>Good Friday Observed (Campus Closed):</strong> April 14</li>
              <li><strong>Honors Convocation:</strong> April 20</li>
              <li><strong>Final Exams for Graduates:</strong> April 21</li>
              <li><strong>Final Grades for Graduates Due:</strong> April 21</li>
              <li><strong>Last Day to Withdraw from the College:</strong> April 21</li>
              <li><strong>Last Day for Spring Classes:</strong> April 26</li>
              <li><strong>Final Exams:</strong> April 27-28</li>
              <li><strong>Baccalaureate Service:</strong> April 28</li>
              <li><strong>Commencement:</strong> April 29</li>
              <li><strong>Residence Halls Closed:</strong> April 29</li>
              <li><strong>Grades Due (All Terms) by 5PM:</strong> May 2</li>
              <li><strong>Last Faculty Contract Workday:</strong> May 2</li>
            </ul>

            {/* Summer 2028 */}
            <h2>Summer 2028</h2>
            
            <h3>Summer Session I</h3>
            <p className="text-sm text-muted-foreground">May 8 - June 10</p>
            <ul>
              <li><strong>SAP Appeal Process:</strong> May 1-9</li>
              <li><strong>New &amp; Transfer Student Orientation:</strong> May 7</li>
              <li><strong>Summer Session I Begins:</strong> May 8</li>
              <li><strong>Registration Ends:</strong> May 11</li>
              <li><strong>1st Early Alert Due:</strong> May 11</li>
              <li><strong>Enrollment Verification Due:</strong> May 12</li>
              <li><strong>Reinstatement Period:</strong> May 15</li>
              <li><strong>2nd Early Alert Due:</strong> May 20</li>
              <li><strong>Memorial Day (Campus Closed):</strong> May 28</li>
              <li><strong>Summer Session I Ends:</strong> June 8</li>
              <li><strong>Final Examinations:</strong> June 9</li>
              <li><strong>All Grades Due by 5PM:</strong> June 13</li>
            </ul>

            <h3>Summer Session II</h3>
            <p className="text-sm text-muted-foreground">June 13 - July 22</p>
            <ul>
              <li><strong>SAP Appeal Process:</strong> June 6-13</li>
              <li><strong>Residential Hall Check-In:</strong> June 10</li>
              <li><strong>New Student Orientation:</strong> June 11</li>
              <li><strong>Summer Session II Begins:</strong> June 13</li>
              <li><strong>Registration Ends:</strong> June 15</li>
              <li><strong>1st Early Alert Due:</strong> June 15</li>
              <li><strong>Juneteenth (Campus Closed):</strong> June 18-19</li>
              <li><strong>Enrollment Verification Due:</strong> June 19</li>
              <li><strong>Reinstatement Period:</strong> June 20</li>
              <li><strong>Fourth of July Holiday (Campus Closed):</strong> July 3-4</li>
              <li><strong>2nd Early Alert Due:</strong> July 5</li>
              <li><strong>Last Day of Instruction:</strong> July 20</li>
              <li><strong>Final Examinations:</strong> July 21</li>
              <li><strong>Residential Hall Check-out:</strong> July 22</li>
              <li><strong>All Grades Due by 5PM:</strong> July 25</li>
            </ul>

            <h3>Summer Bridge 2028</h3>
            <p className="text-sm text-muted-foreground">June 13 - July 22</p>
            <ul>
              <li><strong>Residential Hall Check-In:</strong> June 10</li>
              <li><strong>New Student Orientation:</strong> June 11</li>
              <li><strong>Summer Bridge Begins:</strong> June 13</li>
              <li><strong>Registration Ends:</strong> June 15</li>
              <li><strong>1st Early Alert Due:</strong> June 15</li>
              <li><strong>Juneteenth (Campus Closed):</strong> June 18-19</li>
              <li><strong>Enrollment Verification Due:</strong> June 19</li>
              <li><strong>Reinstatement Period:</strong> June 20</li>
              <li><strong>Fourth of July Holiday (Campus Closed):</strong> July 3-4</li>
              <li><strong>2nd Early Alert Due:</strong> July 5</li>
              <li><strong>Last Day of Instruction:</strong> July 20</li>
              <li><strong>Final Examinations:</strong> July 21</li>
              <li><strong>Residential Hall Check-out:</strong> July 22</li>
              <li><strong>All Grades Due by 5PM:</strong> July 25</li>
            </ul>

            <p className="text-xs italic mt-8">Dates are subject to change. Contact the Registrar&apos;s Office at <a href="tel:5014201237">501-420-1237</a> for the most current calendar.</p>
          </div>
        </SectionWrapper>
      </main>
    </div>
  )
}
