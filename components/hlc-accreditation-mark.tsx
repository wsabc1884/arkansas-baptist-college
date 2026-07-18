"use client"

import { useEffect, useState } from "react"

/**
 * HLC Mark of Accreditation Status.
 *
 * The official embed is a third-party iframe from cdn.yoshki.com. It works in
 * most browsers, but Safari's Intelligent Tracking Prevention (ITP) blocks the
 * cross-site iframe from rendering, so the mark disappears on iOS/macOS Safari.
 *
 * Safari does NOT block plain <img> requests the same way, so for Safari only
 * we render the identical mark as a linked image (which still performs Yoshki's
 * referrer-based domain validation server-side). Every other browser keeps the
 * original iframe format, unchanged.
 */
export function HlcAccreditationMark() {
  const [isSafari, setIsSafari] = useState(false)

  useEffect(() => {
    const ua = navigator.userAgent
    // Matches Safari on iOS and macOS while excluding Chrome, Android,
    // Chrome for iOS (CriOS), Firefox for iOS (FxiOS), and Edge for iOS.
    const safari = /^((?!chrome|android|crios|fxios|edgios).)*safari/i.test(ua)
    setIsSafari(safari)
  }, [])

  return (
    <div
      className="flex items-center justify-center"
      style={{ width: 150, height: 166 }}
      aria-label="Accredited by the Higher Learning Commission - Click to verify status"
    >
      {isSafari ? (
        <a
          href="https://yoshki.com/validate.aspx?104108099+118097108105100097116105111110+108111103111046112110103"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "block", lineHeight: 0 }}
        >
          {/* Native img (not next/image) so the request goes directly to
              Yoshki with the site referrer for domain validation. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.yoshki.com/hlc/validation/150/0/logo.png"
            alt="Higher Learning Commission Accreditation Status"
            width={150}
            referrerPolicy="origin"
            style={{ display: "block", width: "150px", height: "auto", border: 0 }}
          />
        </a>
      ) : (
        <iframe
          frameBorder="0"
          scrolling="no"
          allowTransparency={true}
          referrerPolicy="origin"
          width="150"
          height="166"
          src="https://cdn.yoshki.com/iframe/54732.html"
          style={{
            border: 0,
            margin: 0,
            padding: 0,
            backgroundColor: "transparent",
            display: "block",
            width: "150px",
            height: "166px",
            minWidth: "150px",
            minHeight: "166px",
          }}
          title="Higher Learning Commission Accreditation Status"
        />
      )}
    </div>
  )
}
