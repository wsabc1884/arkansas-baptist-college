import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

// Find all .tsx files in app/ and components/ that contain <Header or <Footer
const files = execSync(
  `grep -rl '<Header\\s*/\\?>\\|<Footer\\s*/\\?>' --include='*.tsx' app/ components/`,
  { encoding: 'utf-8' }
).trim().split('\n').filter(Boolean)

console.log(`Found ${files.length} files with Header/Footer references`)

for (const file of files) {
  // Skip the layout.tsx -- that's the one that SHOULD have them
  if (file === 'app/layout.tsx') {
    console.log(`  SKIP: ${file} (root layout)`)
    continue
  }
  
  let content = fs.readFileSync(file, 'utf-8')
  const original = content
  
  // Remove import lines for Header and Footer
  content = content.replace(/import\s*\{\s*Header\s*\}\s*from\s*['"]@\/components\/header['"]\s*\n?/g, '')
  content = content.replace(/import\s*\{\s*Footer\s*\}\s*from\s*['"]@\/components\/footer['"]\s*\n?/g, '')
  
  // Remove JSX usage: <Header /> or <Header> with any props
  content = content.replace(/\s*<Header\s*\/?\s*>\s*\n?/g, '\n')
  content = content.replace(/\s*<Header\s+[^>]*\/?\s*>\s*\n?/g, '\n')
  
  // Remove JSX usage: <Footer /> or <Footer> with any props
  content = content.replace(/\s*<Footer\s*\/?\s*>\s*\n?/g, '\n')
  content = content.replace(/\s*<Footer\s+[^>]*\/?\s*>\s*\n?/g, '\n')
  
  if (content !== original) {
    fs.writeFileSync(file, content)
    console.log(`  FIXED: ${file}`)
  } else {
    console.log(`  NO CHANGE: ${file}`)
  }
}

console.log('Done!')
