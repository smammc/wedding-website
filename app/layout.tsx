import type { ReactNode } from "react"
import "./globals.css"

// Import Pompiere font from Google Fonts
export const metadata = {
  title: "Maria e Sebastião",
  description: "Site do casamento de Maria e Sebastião",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Pompiere&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
