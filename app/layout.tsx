import type { ReactNode } from "react"
import "./globals.css"
import Image from "next/image"
import backgroundImage from '../public/IMG_1930.JPG';

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
      <body className="relative">
      <div className="fixed inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>
      {children}
      </body>
    </html>
  )
}
