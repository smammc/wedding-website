import type { ReactNode } from "react"
import "./globals.css"

export const metadata = {
  title: "Next App",
  description: "Starter you can extend",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
