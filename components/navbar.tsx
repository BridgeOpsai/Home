"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  const handleMouseEnter = (menuName: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setHoveredMenu(menuName)
  }

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }

    // Add a small delay before closing the dropdown
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredMenu(null)
    }, 300) // 300ms delay
  }

  // Define the main menu items
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Industries",
      href: "/industries",
      hasDropdown: true,
      dropdownItems: [
        { name: "Home Services", href: "/industries/home-services" },
        { name: "Events & Rentals", href: "/industries/events-rentals" },
        { name: "Healthcare", href: "/industries/healthcare-wellness" },
        { name: "Hospitality", href: "/industries/hospitality-food" },
        { name: "E-Commerce", href: "/industries/ecommerce-retail" },
        { name: "Education", href: "/industries/education-coaching" },
        { name: "Professional Services", href: "/industries/professional-services" },
        { name: "Real Estate", href: "/industries/real-estate" },
        { name: "Construction", href: "/industries/construction" },
        { name: "Finance Services", href: "/industries/finance-services" },
        { name: "Insurance", href: "/industries/insurance" },
        { name: "Lead Generation", href: "/industries/lead-generation" },
      ],
    },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img src="/images/bridgeops-logo.png" alt="BridgeOps.ai Logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 flex items-center"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>

                {/* Dropdown menu with padding to create a buffer zone */}
                {item.hasDropdown && (
                  <div
                    className={`absolute left-0 pt-2 w-56 z-50 ${hoveredMenu === item.name ? "block" : "hidden"}`}
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link href="/book-call">
              <Button className="ml-2 bg-blue-600 hover:bg-blue-700">Free Consultation</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => !item.hasDropdown && setIsMenuOpen(false)}
                >
                  <div className="flex justify-between items-center">
                    {item.name}
                    {item.hasDropdown && (
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          setHoveredMenu(hoveredMenu === item.name ? null : item.name)
                        }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </Link>

                {/* Mobile dropdown items */}
                {item.hasDropdown && hoveredMenu === item.name && (
                  <div className="pl-4 space-y-1">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/book-call">
              <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">Free Consultation</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
