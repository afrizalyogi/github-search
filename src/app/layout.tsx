"use client"
import "./globals.css"
import { Montserrat } from "next/font/google"
import { ThemeProvider } from "next-themes"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "Github Search by Afrizal Yogi",
  description: "Search your Github profile by typing on this website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  )
}
