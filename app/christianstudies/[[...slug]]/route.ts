import { NextRequest, NextResponse } from 'next/server'

// Use Edge runtime so we can fetch static files from the deployment
export const runtime = 'edge'

const contentTypes: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
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
  '.webp': 'image/webp',
  '.json': 'application/json',
  '.txt': 'text/plain',
  '.md': 'text/markdown',
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
    filePath = 'index.html'
  } else {
    filePath = slug.join('/')
  }

  // If no extension, assume HTML page
  const ext = getExtension(filePath)
  if (!ext) {
    filePath = filePath + '.html'
  }

  // Build URL to fetch the static file from /christianstudies-assets/
  // We store the actual static files in a different path to avoid route conflicts
  const url = new URL(request.url)
  const staticFileUrl = `${url.origin}/christianstudies-assets/${filePath}`

  try {
    const response = await fetch(staticFileUrl, {
      headers: {
        // Pass through any relevant headers
        'Accept': request.headers.get('Accept') || '*/*',
      },
    })

    if (!response.ok) {
      return new NextResponse('Not Found', { status: 404 })
    }

    const body = await response.arrayBuffer()
    const finalExt = getExtension(filePath)
    const contentType = contentTypes[finalExt] || response.headers.get('Content-Type') || 'application/octet-stream'

    return new NextResponse(body, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.error('[v0] Error serving christianstudies file:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
