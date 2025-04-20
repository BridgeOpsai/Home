"use client"

import IndustryPageLayout from "@/components/industry-page-layout"

export default function ConstructionPage() {
  const industryData = {
    name: "Construction & Home Improvement",
    description: "Contractors, builders, remodelers, home improvement specialists",
    color: "from-amber-600 to-amber-700",
    heroDescription:
      "AI automation solutions tailored for contractors, builders, remodelers, and home improvement specialists.",
    benefits: [
      {
        title: "Streamline Project Management",
        description:
          "Automate scheduling, resource allocation, and progress tracking to keep projects on time and within budget.",
      },
      {
        title: "Enhance Client Communication",
        description:
          "Automated updates, milestone notifications, and document sharing to keep clients informed and satisfied.",
      },
      {
        title: "Optimize Estimating and Bidding",
        description: "AI-powered estimating tools that improve accuracy and win more contracts.",
      },
      {
        title: "Simplify Compliance and Documentation",
        description:
          "Automated permit applications, inspections scheduling, and compliance documentation to avoid delays.",
      },
      {
        title: "Improve Crew Scheduling and Management",
        description: "Optimize crew assignments and schedules to maximize productivity and reduce downtime.",
      },
      {
        title: "Enhance Material Management",
        description: "Automated inventory tracking, ordering, and delivery coordination to prevent project delays.",
      },
    ],
    useCases: [
      {
        title: "General Contractor Reduces Project Timeline by 20%",
        description:
          "A general contractor implemented our project management automation to streamline workflows, resulting in 20% shorter project timelines and improved client satisfaction.",
      },
      {
        title: "Home Remodeler Increases Bid-to-Win Ratio by 35%",
        description:
          "By implementing our automated estimating and proposal system, a home remodeling company increased their bid-to-win ratio from 20% to 27%, significantly growing their business.",
      },
      {
        title: "Roofing Company Streamlines Inspection and Estimate Process",
        description:
          "A roofing company automated their inspection documentation and estimate generation, reducing the process from days to hours and increasing customer conversion rates.",
      },
      {
        title: "Construction Firm Improves Subcontractor Management",
        description:
          "A construction firm implemented automated subcontractor scheduling and documentation, reducing administrative work by 65% and improving project coordination.",
      },
    ],
    automations: [
      "Project scheduling and milestone tracking",
      "Client communication and updates",
      "Estimating and proposal generation",
      "Permit application and tracking",
      "Crew scheduling and assignment",
      "Material ordering and inventory management",
      "Subcontractor coordination",
      "Inspection scheduling and documentation",
      "Change order processing",
      "Invoice generation and payment tracking",
      "Warranty and maintenance reminders",
      "Client review collection and management",
    ],
    testimonials: [
      {
        quote:
          "The project management automation has transformed how we run our construction business. We're completing projects faster, with better communication and fewer issues. Our clients are happier, and our profit margins have improved significantly.",
        author: "Michael Nguyen",
        company: "Johnson Construction Group",
      },
      {
        quote:
          "As a home remodeler, the estimating and proposal automation has been a game-changer. We're creating more accurate estimates in a fraction of the time, winning more bids, and spending less time on paperwork.",
        author: "Sarah Williams",
        company: "Williams Home Renovations",
      },
      {
        quote:
          "The automated client communication system has dramatically improved our customer satisfaction. Clients love the regular updates and transparency, and we've seen a 40% increase in referrals since implementation.",
        author: "David Rodriguez",
        company: "Elite Builders",
      },
    ],
  }

  return <IndustryPageLayout industry={industryData} />
}
