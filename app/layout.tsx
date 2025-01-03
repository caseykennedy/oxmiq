import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
  title: "Oxmiq Labs",
  description: "Reimagining the GPU for real-time interactive AI",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  )
}
