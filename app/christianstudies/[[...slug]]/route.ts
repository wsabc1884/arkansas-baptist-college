import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import path from 'path'

// Static files mapping
const contentTypes: Record<string, string> = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.ico': 'image/x-icon',
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug?: string[] }> }
) {
  const { slug } = await params
  
  // Determine the file path
  let filePath: string
  if (!slug || slug.length === 0) {
    // /christianstudies -> index.html
    filePath = 'index.html'
  } else {
    // /christianstudies/about.html, /christianstudies/css/style.css, etc.
    filePath = slug.join('/')
  }

  // If no extension, assume it's an HTML page
  if (!path.extname(filePath)) {
    filePath = filePath + '.html'
  }

  // Build the full path to the file in public/christianstudies
  const fullPath = path.join(process.cwd(), 'public', 'christianstudies', filePath)

  try {
    const fileBuffer = await readFile(fullPath)
    const ext = path.extname(filePath).toLowerCase()
    const contentType = contentTypes[ext] || 'application/octet-stream'

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600',
      },
    })
  } catch {
    // File not found
    return new NextResponse('Not Found', { status: 404 })
  }
}
