export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Hide the site header and footer when inside the studio */}
      <style>{`
        body > header, body > footer { display: none !important; }
        #sanity-studio { height: 100vh; }
      `}</style>
      <div id="sanity-studio">
        {children}
      </div>
    </>
  )
}
