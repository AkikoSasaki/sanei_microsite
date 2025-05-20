import type React from "react"
import type { Metadata } from "next"
import { Inter, Noto_Sans_JP } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-noto-sans-jp" })

export const metadata: Metadata = {
  title: "SAN-EI 東京オートサロン 2026",
  description: "SAN-EI株式会社の東京オートサロン2026プロジェクト公式マイクロサイト",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoSansJP.variable} font-sans`}>
        <ThemeProvider defaultTheme="dark" storageKey="sanei-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
