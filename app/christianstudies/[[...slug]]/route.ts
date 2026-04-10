import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

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
  const ext = path.extname(filePath).toLowerCase()
  if (!ext) {
    filePath = filePath + '.html'
  }

  // Build the full path
  const fullPath = path.join(process.cwd(), 'public', 'christianstudies', filePath)

  try {
    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      return new NextResponse('Not Found', { status: 404 })
    }

    const fileBuffer = fs.readFileSync(fullPath)
    const finalExt = path.extname(filePath).toLowerCase()
    const contentType = contentTypes[finalExt] || 'application/octet-stream'

    return new NextResponse(fileBuffer, {
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
