const fs = require('fs')
const path = require('path')

const ROOT = '/vercel/share/v0-project'

// Recursively find all .tsx files
function findTsxFiles(dir) {
  let results = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.next') {
      results = results.concat(findTsxFiles(full))
    } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
      results.push(full)
    }
  }
  return results
}

const appFiles = findTsxFiles(path.join(ROOT, 'app'))
const compFiles = findTsxFiles(path.join(ROOT, 'components'))
const allFiles = [...appFiles, ...compFiles]

console.log(`Scanning ${allFiles.length} .tsx files...`)

const SKIP = [
  path.join(ROOT, 'app/layout.tsx'),
  path.join(ROOT, 'app/studio/layout.tsx'),
]

let fixedCount = 0

for (const file of allFiles) {
  const rel = path.relative(ROOT, file)

  // Skip root layout and studio layout
  if (SKIP.includes(file)) {
    console.log(`  SKIP: ${rel}`)
    continue
  }

  // Skip the actual component definition files
  if (rel.startsWith('components/header') || rel.startsWith('components/footer')) {
    console.log(`  SKIP: ${rel} (component def)`)
    continue
  }

  // Skip UI library components
  if (rel.startsWith('components/ui/')) {
    console.log(`  SKIP: ${rel} (UI lib)`)
    continue
  }

  let content = fs.readFileSync(file, 'utf-8')

  // Check if file even references Header or Footer
  if (!content.includes('Header') && !content.includes('Footer')) {
    continue
  }

  const original = content

  // Remove import lines for Header and Footer
  content = content.replace(/import\s*\{[^}]*Header[^}]*\}\s*from\s*['"]@\/components\/header['"]\s*;?\s*\n?/g, '')
  content = content.replace(/import\s*\{[^}]*Footer[^}]*\}\s*from\s*['"]@\/components\/footer['"]\s*;?\s*\n?/g, '')

  // Remove JSX usage: <Header ... />, <Header ... >, <Footer ... />, <Footer ... >
  content = content.replace(/^\s*<Header\b[^>]*\/?>.*$/gm, '')
  content = content.replace(/^\s*<Footer\b[^>]*\/?>.*$/gm, '')

  // Clean up resulting double blank lines
  content = content.replace(/\n{3,}/g, '\n\n')

  if (content !== original) {
    fs.writeFileSync(file, content)
    fixedCount++
    console.log(`  FIXED: ${rel}`)
  }
}

console.log(`\nDone! Fixed ${fixedCount} files.`)
