import type {Metadata} from "next"
import {Inter} from "next/font/google"

import "./globals.css"
import {ThemeProvider} from "./provider"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Rasheed's Portfolio",
  description:
    "Rasheed is a skilled Frontend Developer specializing in React and Vue.js, creating dynamic and responsive web applications. Explore my portfolio to see a showcase of innovative designs, user-friendly interfaces, and cutting-edge technology in action. Let’s bring your vision to life with clean, maintainable code and a focus on performance and user experience.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
