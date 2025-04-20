"use client"

import type React from "react"

import { useEffect } from "react"
import Script from "next/script"

interface CalendlyEmbedProps {
  url: string
  styles?: React.CSSProperties
}

export default function CalendlyEmbed({ url, styles = {} }: CalendlyEmbedProps) {
  useEffect(() => {
    // Initialize Calendly when the component mounts
    // This assumes the Calendly script is loaded
    if ((window as any).Calendly) {
      ;(window as any).Calendly.initInlineWidget({
        url: url,
        parentElement: document.getElementById("calendly-embed"),
        prefill: {},
        utm: {},
      })
    }
  }, [url])

  return (
    <>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      <div
        id="calendly-embed"
        style={{
          minWidth: "320px",
          height: "630px",
          ...styles,
        }}
      />
    </>
  )
}
