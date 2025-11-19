import type {Metadata} from "next"
import {Inter} from "next/font/google"

import "./globals.css"
import {ThemeProvider} from "./provider"
import StructuredData from "@/components/StructuredData"
import Analytics from "@/components/Analytics"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Rasheed Iskilu - Senior Full Stack Developer | Frontend Architecture Specialist",
  description:
    "Senior Full Stack Developer with 4+ years experience in healthcare & fintech. Expert in React, Next.js, TypeScript, .NET Core. Led projects serving 10,000+ users with 99.9% uptime. Specialized in HIPAA-compliant EHR systems, mobile apps, and enterprise solutions.",
  keywords: [
    "Senior Full Stack Developer",
    "Frontend Architecture",
    "React Developer",
    "Next.js Expert",
    "TypeScript Developer",
    ".NET Core Developer",
    "Healthcare Software",
    "EHR Systems",
    "React Native Developer",
    "Enterprise Solutions",
    "HIPAA Compliance",
    "Lagos Nigeria Developer",
    "Rasheed Iskilu"
  ],
  authors: [{ name: "Rasheed Iskilu" }],
  creator: "Rasheed Iskilu",
  publisher: "Rasheed Iskilu",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rashdev.vercel.app",
    title: "Rasheed Iskilu - Senior Full Stack Developer | Frontend Architecture Specialist",
    description:
      "Senior Full Stack Developer with 4+ years experience in healthcare & fintech. Expert in React, Next.js, TypeScript, .NET Core. Led projects serving 10,000+ users.",
    siteName: "Rasheed Iskilu Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rasheed Iskilu - Senior Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rasheed Iskilu - Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer specializing in React, Next.js, and enterprise healthcare solutions. 4+ years experience serving 10,000+ users.",
    creator: "@rashdev_i",
    images: ["/og-image.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://rashdev.vercel.app",
  },
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
        <link rel="apple-touch-icon" href="/jsm-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3275F8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Rasheed Portfolio" />
        <meta name="application-name" content="Rasheed Portfolio" />
        <meta name="msapplication-TileColor" content="#3275F8" />
        <meta name="msapplication-tap-highlight" content="no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <StructuredData />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
