"use client"

import IndustryPageLayout from "@/components/industry-page-layout"

export default function RealEstatePage() {
  const industryData = {
    name: "Real Estate & Property Management",
    description: "Agents, brokers, Airbnb hosts, commercial property managers",
    color: "from-cyan-600 to-cyan-700",
    heroDescription:
      "AI automation solutions tailored for real estate agents, brokers, Airbnb hosts, and property managers.",
    benefits: [
      {
        title: "Streamline Lead Management",
        description: "Automated lead capture, qualification, and nurturing to convert more prospects into clients.",
      },
      {
        title: "Simplify Showing Scheduling",
        description:
          "Automated appointment booking, confirmation, and follow-up for property showings and open houses.",
      },
      {
        title: "Enhance Client Communication",
        description:
          "Automated updates, milestone notifications, and check-ins throughout the buying, selling, or renting process.",
      },
      {
        title: "Optimize Property Marketing",
        description:
          "Automated listing distribution, social media promotion, and email marketing to maximize property exposure.",
      },
      {
        title: "Streamline Transaction Management",
        description:
          "Automated document collection, deadline tracking, and status updates to keep transactions on track.",
      },
      {
        title: "Improve Property Management",
        description: "Automated rent collection, maintenance requests, and tenant communication for property managers.",
      },
    ],
    useCases: [
      {
        title: "Real Estate Team Increases Lead Conversion by 35%",
        description:
          "A real estate team implemented our lead nurturing automation system and increased their lead-to-client conversion rate from 8% to 11%, resulting in significant revenue growth.",
      },
      {
        title: "Property Manager Automates 90% of Tenant Communications",
        description:
          "A property management company automated rent reminders, maintenance updates, and lease renewals, reducing administrative work by 25 hours per week while improving tenant satisfaction.",
      },
      {
        title: "Airbnb Host Streamlines Guest Experience",
        description:
          "An Airbnb host with multiple properties automated check-in instructions, local recommendations, and review requests, improving guest experiences and increasing their average rating from 4.7 to 4.9 stars.",
      },
      {
        title: "Commercial Broker Enhances Client Reporting",
        description:
          "A commercial real estate broker automated their client reporting process, delivering consistent, professional updates that improved client retention and referrals by 40%.",
      },
    ],
    automations: [
      "Lead capture and qualification",
      "Automated drip campaigns for prospects",
      "Showing scheduling and follow-up",
      "Listing marketing and distribution",
      "Transaction management and deadline tracking",
      "Document collection and e-signatures",
      "Client updates and milestone notifications",
      "Rent collection and payment processing",
      "Maintenance request management",
      "Tenant communication and lease renewals",
      "Review collection and reputation management",
      "Market analysis and reporting",
    ],
    testimonials: [
      {
        quote:
          "The lead nurturing automation has completely transformed our real estate business. We're staying in touch with 5x more prospects without additional effort, and our conversion rates have increased dramatically.",
        author: "Michael Rodriguez",
        company: "Elite Real Estate Group",
      },
      {
        quote:
          "As a property manager with 200+ units, the automated rent collection and maintenance request system has saved me countless hours while improving tenant satisfaction. It's like having an extra employee working 24/7.",
        author: "Sarah Patel",
        company: "Johnson Property Management",
      },
      {
        quote:
          "Managing our Airbnb properties used to be a full-time job. Now with automated check-in, cleaning coordination, and guest communication, we've been able to double our portfolio without hiring additional help.",
        author: "David and Lisa Chen",
        company: "Luxury Stay Properties",
      },
    ],
  }

  return <IndustryPageLayout industry={industryData} />
}
