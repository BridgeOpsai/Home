"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const industries = [
    { name: "Home Services", href: "/industries/home-services" },
    { name: "Healthcare", href: "/industries/healthcare-wellness" },
    { name: "E-commerce", href: "/industries/ecommerce-retail" },
    { name: "Professional Services", href: "/industries/professional-services" },
    { name: "Real Estate", href: "/industries/real-estate" },
    { name: "Finance", href: "/industries/finance-services" },
  ]

  const solutions = [
    { name: "Workflow Automation", href: "/solutions/workflow-automation" },
    { name: "AI Automation", href: "/solutions/ai-automation" },
    { name: "RPA Solutions", href: "/solutions/rpa" },
    { name: "Business Automation", href: "/solutions/business-automation" },
    { name: "Sales Automation", href: "/solutions/sales-automation" },
    { name: "Office Automation", href: "/solutions/office-automation" },
  ]

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Investment Fund", href: "/investment-fund" },
    { name: "Contact", href: "/contact" },
    { name: "Free Consultation", href: "/book-call" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/images/bridgeops-logo.png"
                alt="BridgeOps.ai Logo"
                width={180}
                height={45}
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Founded by Maury Eldeiry, BridgeOps.ai transforms businesses through intelligent automation solutions,
              helping companies streamline operations and accelerate growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/bridgeopsai"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/bridgeopsai"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/bridgeopsai"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              {industries.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href="mailto:hello@bridgeops.ai" className="hover:text-white transition-colors">
                  hello@bridgeops.ai
                </a>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href="tel:+1-555-BRIDGE" className="hover:text-white transition-colors">
                  +1 (555) BRIDGE
                </a>
              </div>
              <div className="flex items-start text-gray-300 text-sm">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {currentYear} BridgeOps.ai. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
