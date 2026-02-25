import fs from 'fs';

const files = [
  '/app/about/faculty-staff-senate/page.tsx',
  '/app/about/organization-chart/page.tsx',
  '/app/about/partnerships/page.tsx',
  '/app/about/strategic-plan/page.tsx',
  '/app/about/student-affairs/page.tsx',
  '/app/about/technology-services/page.tsx',
  '/app/about/title-iii-safra/page.tsx',
  '/app/enrollment/apply/page.tsx',
  '/app/enrollment/apply-for-financial-aid/page.tsx',
  '/app/enrollment/campus-tour/page.tsx',
  '/app/enrollment/evening-weekend/page.tsx',
  '/app/enrollment/event-calendar/page.tsx',
  '/app/enrollment/office-of-admissions/page.tsx',
  '/app/give/page.tsx',
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Skip if already has Header import
  if (content.includes('import { Header }') || content.includes('from "@/components/header"')) {
    console.log(`SKIP (already has Header): ${file}`);
    continue;
  }

  // Add Header and Footer imports after the first import line
  const firstImportEnd = content.indexOf('\n');
  content = content.slice(0, firstImportEnd) + '\nimport { Header } from "@/components/header"\nimport { Footer } from "@/components/footer"' + content.slice(firstImportEnd);

  // Wrap: replace <main id="main-content"> with <div><Header /><main id="main-content">
  if (content.includes('<main id="main-content">')) {
    content = content.replace(
      '<main id="main-content">',
      '<div className="min-h-screen">\n      <Header />\n      <main id="main-content">'
    );
  } else if (content.includes('<main>')) {
    content = content.replace(
      '<main>',
      '<div className="min-h-screen">\n      <Header />\n      <main>'
    );
  }

  // Close: replace last </main> with </main><Footer /></div>
  const lastMainClose = content.lastIndexOf('</main>');
  if (lastMainClose !== -1) {
    content = content.slice(0, lastMainClose) + '</main>\n      <Footer />\n    </div>' + content.slice(lastMainClose + 7);
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log(`FIXED: ${file}`);
}

console.log('Done!');
