DEPLOYMENT INSTRUCTIONS
McKissic School of Christian Studies — Arkansas Baptist College
Prepared by: Henry L. Parker / The Design Group (TDG)
=============================================================

STEP 1 — UPLOAD FILES
Drop the entire /christianstudies folder into your web server's root directory
(public_html, www, or httpdocs). The site will be accessible at:
  arkansasbaptist.edu/christianstudies/

STEP 2 — VERIFY SERVER CONFIG
This is a plain static HTML site. No build step, no Node.js, no PHP required.
  - Apache: Confirm .htaccess is enabled (AllowOverride All)
  - Nginx: Add a location block for /christianstudies if needed

STEP 3 — KNOWN ISSUE: LEAD CAPTURE FORMS
The Request Info and Contact forms currently submit to Genspark's Table API
(tables/leads). These forms WILL silently fail on your server.
To fix this, choose one of the following:
  Option A: Forward form submissions to an email address using a service
            like Formspree (formspree.io) — free tier available
  Option B: Connect to your own CRM or student info system
  Option C: Contact Henry L. Parker (TDG) for integration support

STEP 4 — CONTACT PAGE
Note: contact.html is referenced in site documentation but was not included
in this build. The main lead capture form is on index.html and admissions.html.

STEP 5 — REMAINING PHOTO SLOTS (optional before launch)
  images/dr-palmer.jpg         — Replace with final Dr. Palmer photo
  images/campus-gallery-1.jpg  through
  images/campus-gallery-8.jpg  — Community life photo gallery (stories page)

QUESTIONS?
Henry L. Parker / The Design Group (TDG)
christianstudies@arkansasbaptist.edu | (501) 420-1200
