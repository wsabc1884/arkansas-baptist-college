# Arkansas Baptist College — School of Christian Studies
## Program Microsite | Review Draft

> **"Where Purpose Is Your Major."**

---

## Project Overview

A full 8-page microsite for the **School of Christian Studies at Arkansas Baptist College** — built as a shareable draft for internal review by ABC leadership and the enrollment team. Developed from the comprehensive marketing plan authored by Henry L. Parker / The Design Group (TDG), February 2026.

**Logo Concept Used:** Concept B — Cross & Cornerstone (institutional, legacy-forward, geometric shield with bold gold cross)

---

## Live Pages (all 8 pages complete)

| Page | File | Purpose |
|------|------|---------|
| 🏠 Home | `index.html` | Video-first hero, tagline, dual CTAs, 4 concentrations, faculty spotlight, student stories teaser, lead capture form |
| 📋 About | `about.html` | Mission, brand pillars, HLC accreditation, 7 PLO table, mottos & taglines |
| 🎓 Degrees & Courses | `degrees.html` | Interactive tabbed concentration explorer (4 tracks), capstone options |
| 👨‍🏫 Faculty | `faculty.html` | Dr. Palmer featured profile (full credentials), faculty grid placeholders |
| 💬 Student Stories | `stories.html` | Video wall (6 testimonial cards), written profiles, photo gallery |
| 🙏 Faith & Community | `faith.html` | Chapel schedule, ministry opportunities, Called/Equipped/Sent formation pathway |
| 📬 Admissions & Aid | `admissions.html` | Open admission policy, 4-step apply guide, deadline cards, FAQ accordion |
| 📞 Contact / Request Info | `contact.html` | Full 8-field lead capture form (saves to database), contact sidebar, map link |

---

## Brand System (from TDG Marketing Plan)

| Element | Value |
|---------|-------|
| Primary Color | ABC Navy `#1B2A4A` |
| Secondary Color | Heritage Gold `#B8860B` |
| Accent | Covenant Purple `#4A235A` |
| Background | Parchment Cream `#FDF6E3` |
| Display Font | Playfair Display (Google Fonts) |
| Body Font | Inter (Google Fonts) |
| Primary Tagline | "Where Purpose Is Your Major." |
| Logo Concept | Concept B — Cross & Cornerstone (SVG inline) |

---

## Photo Assets — Ready to Swap

The site is built with named image slots. Drop in photos to replace placeholders:

| File Path | Used On | Description |
|-----------|---------|-------------|
| `images/dr-palmer.jpg` | `faculty.html`, `index.html` | **Dr. Nathanael A. Palmer** — primary faculty photo |
| `images/campus-hero.jpg` | `index.html` | Hero section background |
| `images/campus-feature.jpg` | `index.html`, `about.html` | Campus feature image (About / Home sections) |
| `images/campus-chapel.jpg` | `faith.html` | Chapel/worship life photo |
| `images/campus-gallery-1.jpg` through `campus-gallery-8.jpg` | `stories.html` | Community life photo gallery |

**To add Dr. Palmer's photo:** Save the photo file as `images/dr-palmer.jpg` — it will automatically appear on the faculty page and homepage spotlight.

**To add a campus photo:** Save as `images/campus-hero.jpg` (for the hero background) or `images/campus-feature.jpg` (for the feature section). All images include `onerror` fallbacks so the site looks great even before photos are uploaded.

---

## Data Storage

**Table: `leads`** — All form submissions from the Request Info and Contact forms are saved to the `leads` table via the RESTful Table API.

Fields: `first_name`, `last_name`, `email`, `phone`, `concentration`, `student_type`, `message`, `page_source`, `submitted_at`

---

## File Structure

```
index.html              — Home (video-first hero)
about.html              — About the Program
degrees.html            — Degrees & Courses (tabbed concentrations)
faculty.html            — Meet the Faculty
stories.html            — Student Stories
faith.html              — Faith & Community
admissions.html         — Admissions & Aid
contact.html            — Contact / Request Info
css/
  style.css             — Full brand design system
js/
  main.js               — Navigation, accordion, tabs, form submission
  shared.js             — Shared header/footer builder (reference)
images/
  dr-palmer.jpg         — [REPLACE with actual Dr. Palmer photo]
  campus-hero.jpg       — [REPLACE with campus hero photo]
  campus-feature.jpg    — [REPLACE with campus feature photo]
  campus-chapel.jpg     — [REPLACE with chapel/worship photo]
  campus-gallery-1..8   — [REPLACE with community life photos]
```

---

## Key Content Alignments (from Marketing Plan)

- ✅ All 4 concentrations with taglines, courses, capstone, and career paths
- ✅ Dr. Palmer featured profile with full credentials and "signature story" framing
- ✅ 7 HLC Program Learning Outcomes (student-facing language)
- ✅ 3 capstone options
- ✅ Open admission policy noted
- ✅ Primary tagline "Where Purpose Is Your Major." on every page hero
- ✅ Contact info: 1600 Dr. MLK Jr. Drive, Little Rock, AR 72202 · (501) 420-1200
- ✅ Lead capture forms on Home and Contact pages (saves to database)
- ✅ Fully mobile-responsive with hamburger navigation

---

## Next Steps for Production

1. **Add Dr. Palmer's photo** → `images/dr-palmer.jpg`
2. **Add campus photos** → `images/campus-hero.jpg`, `campus-feature.jpg`, `campus-chapel.jpg`, `campus-gallery-1.jpg` through `campus-gallery-8.jpg`
3. **Select final logo concept** (A, B, or C) and swap the SVG or add an image file
4. **Confirm chapel times and deadlines** with Office of Academic Affairs
5. **Add remaining faculty profiles** to `faculty.html` as hired
6. **Record and embed program video** (replace video card placeholder)
7. **Activate social media links** in footer (Instagram, Facebook, YouTube, TikTok)
8. **Connect admissions email** — update `mailto:` in contact sidebar
9. **Confirm FAFSA/aid links** with Financial Aid office
10. **Publish via the Publish tab** to generate a shareable live URL

---

## To Share With Reviewers

**Go to the Publish tab → click Publish → copy the URL → share by text or email.**

The published URL will work on any device (desktop and mobile) and does not require a login to view.

---

*Prepared March 2026 · Arkansas Baptist College — School of Christian Studies · TDG Marketing Plan Integration*
