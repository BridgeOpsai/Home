"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: "About", href: "/about" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Investment Fund", href: "/investment-fund" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "Workflow Automation", href: "/solutions/workflow-automation" },
      { name: "AI Automation", href: "/solutions/ai-automation" },
      { name: "RPA Solutions", href: "/solutions/rpa" },
      { name: "Business Automation", href: "/solutions/business-automation" },
    ],
    industries: [
      { name: "Home Services", href: "/industries/home-services" },
      { name: "Healthcare", href: "/industries/healthcare-wellness" },
      { name: "E-commerce", href: "/industries/ecommerce-retail" },
      { name: "Professional Services", href: "/industries/professional-services" },
    ],
    resources: [
      { name: "Free Audit", href: "/free-audit" },
      { name: "Book a Call", href: "/book-call" },
      { name: "Free Consultation", href: "/free-consultation" },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/bridgeops-logo.png"
                alt="BridgeOps.ai Logo"
                width={200}
                height={50}
                className="h-12 w-auto filter brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming businesses through intelligent automation and AI-powered solutions. We help companies
              streamline operations, reduce costs, and accelerate growth.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>hello@bridgeops.ai</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Started</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">© {currentYear} BridgeOps.ai. All rights reserved.</div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
