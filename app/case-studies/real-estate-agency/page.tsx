"use client"

import CaseStudyLayout from "@/components/case-study-layout"

export default function RealEstateCaseStudy() {
  const caseStudyData = {
    title: "How Elite Real Estate Group Increased Lead Conversion by 35%",
    industry: "Real Estate & Property Management - Real Estate Agency",
    color: "from-cyan-600 to-cyan-700",
    companyName: "Elite Real Estate Group",
    companyDescription:
      "Elite Real Estate Group is a boutique real estate agency serving the greater Miami area. With a team of 12 agents and 3 administrative staff, they handle approximately 150 transactions annually, focusing on luxury residential properties and investment opportunities. Before automation, they were struggling to effectively manage their growing lead pipeline and transaction processes.",
    problemTitle: "The Challenge: Ineffective Lead Management and Transaction Complexity",
    problemDescription:
      "Elite Real Estate Group was facing several operational challenges that were affecting their growth and profitability:\n\n" +
      "• Inconsistent lead follow-up resulting in missed opportunities\n" +
      "• Manual scheduling for property showings creating conflicts and inefficiencies\n" +
      "• Complex transaction management with multiple deadlines and parties\n" +
      "• Time-consuming client updates requiring frequent agent attention\n" +
      "• Inefficient document collection and management process\n" +
      "• Limited post-transaction follow-up for referrals and reviews\n\n" +
      "These challenges resulted in lower conversion rates, administrative bottlenecks, and reduced agent productivity. Michael Rodriguez, the agency's broker, knew they needed better systems to support their premium service model and growth goals.",
    solutionTitle: "The Solution: End-to-End Real Estate Automation",
    solutionDescription:
      "BridgeOps.ai implemented a comprehensive automation solution tailored to Elite Real Estate Group's specific needs:\n\n" +
      "• Sophisticated lead nurturing system with personalized communication sequences\n" +
      "• Automated showing scheduling with calendar integration and confirmations\n" +
      "• Transaction management system with deadline tracking and automated updates\n" +
      "• Client portal for real-time status updates and document sharing\n" +
      "• Digital document collection and e-signature workflow\n" +
      "• Post-closing follow-up for reviews, referrals, and long-term relationship building\n\n" +
      "The solution was designed to integrate with their existing CRM while adding powerful automation capabilities that streamlined operations across the entire client journey.",
    implementationSteps: [
      "Comprehensive analysis of the client journey from lead to post-closing",
      "Custom solution design focused on lead nurturing and transaction management",
      "Integration with their CRM and other existing systems",
      "Implementation of automated communication sequences for different client scenarios",
      "Setup of transaction management workflow with milestone tracking",
      "Training for agents and staff on new systems and client experience",
      "Ongoing optimization based on conversion metrics and client feedback",
    ],
    metrics: [
      {
        value: "35%",
        label: "Increase in Lead Conversion",
      },
      {
        value: "40%",
        label: "Growth in Referral Business",
      },
      {
        value: "25%",
        label: "Increase in Agent Productivity",
      },
    ],
    results: [
      "Improved lead response time from hours to minutes through automation",
      "Increased lead-to-client conversion rate from 8% to 11%",
      "Reduced showing scheduling time from 25 minutes to 5 minutes per appointment",
      "Decreased transaction management time by 65% through automated workflows",
      "Improved client satisfaction scores from 4.3 to 4.9 out of 5",
      "Increased online review collection by 300%",
      "Enabled agents to handle 25% more transactions while providing better service",
    ],
    testimonial: {
      quote:
        "The lead nurturing automation has completely transformed our real estate business. We're staying in touch with 5x more prospects without additional effort, and our conversion rates have increased dramatically. The transaction management system has also been a game-changer, keeping all parties informed and on track throughout the process. Our agents can now focus on building relationships and providing expert guidance rather than administrative tasks.",
      author: "Michael Rodriguez",
      position: "Broker/Owner",
      company: "Elite Real Estate Group",
    },
    relatedCaseStudies: [
      {
        title: "Johnson Property Management Streamlines Tenant Communication",
        industry: "Real Estate & Property Management - Property Manager",
        slug: "real-estate-property-management",
      },
      {
        title: "Luxury Stay Properties Optimizes Airbnb Management",
        industry: "Real Estate & Property Management - Vacation Rentals",
        slug: "real-estate-vacation-rentals",
      },
      {
        title: "Commercial Properties Inc. Enhances Lease Management",
        industry: "Real Estate & Property Management - Commercial Real Estate",
        slug: "real-estate-commercial",
      },
    ],
  }

  return <CaseStudyLayout caseStudy={caseStudyData} />
}
