import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BridgeOps.ai - Business Process Automation & AI Solutions",
  description:
    "Transform your business with intelligent automation solutions. BridgeOps.ai specializes in workflow automation, AI integration, and custom business process optimization.",
  keywords:
    "business automation, AI solutions, workflow automation, process optimization, artificial intelligence, business intelligence",
  authors: [{ name: "BridgeOps.ai" }],
  creator: "BridgeOps.ai",
  publisher: "BridgeOps.ai",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bridgeops.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BridgeOps.ai - Business Process Automation & AI Solutions",
    description:
      "Transform your business with intelligent automation solutions. BridgeOps.ai specializes in workflow automation, AI integration, and custom business process optimization.",
    url: "https://bridgeops.ai",
    siteName: "BridgeOps.ai",
    images: [
      {
        url: "/images/bridgeops-social-share.png",
        width: 1200,
        height: 630,
        alt: "BridgeOps.ai - Business Process Automation & AI Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BridgeOps.ai - Business Process Automation & AI Solutions",
    description:
      "Transform your business with intelligent automation solutions. BridgeOps.ai specializes in workflow automation, AI integration, and custom business process optimization.",
    images: ["/images/bridgeops-social-share.png"],
    creator: "@bridgeopsai",
  },
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
