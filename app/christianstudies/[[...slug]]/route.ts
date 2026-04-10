import { NextRequest, NextResponse } from 'next/server'

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

function getExtension(filePath: string): string {
  const lastDot = filePath.lastIndexOf('.')
  if (lastDot === -1) return ''
  return filePath.substring(lastDot).toLowerCase()
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
    // /christianstudies/about, /christianstudies/css/style.css, etc.
    filePath = slug.join('/')
  }

  // If no extension, assume it's an HTML page
  const ext = getExtension(filePath)
  if (!ext) {
    filePath = filePath + '.html'
  }

  // Fetch the static file from the public folder using the origin
  const origin = request.nextUrl.origin
  const staticUrl = `${origin}/christianstudies-static/${filePath}`

  try {
    const response = await fetch(staticUrl)
    
    if (!response.ok) {
      return new NextResponse('Not Found', { status: 404 })
    }

    const fileBuffer = await response.arrayBuffer()
    const finalExt = getExtension(filePath)
    const contentType = contentTypes[finalExt] || 'application/octet-stream'

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600',
      },
    })
  } catch {
    // File not found or fetch error
    return new NextResponse('Not Found', { status: 404 })
  }
}
