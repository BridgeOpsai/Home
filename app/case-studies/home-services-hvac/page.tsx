"use client"

import CaseStudyLayout from "@/components/case-study-layout"

export default function HVACCaseStudy() {
  const caseStudyData = {
    title: "How Wilson Heating & Cooling Reduced Administrative Work by 70%",
    industry: "Home Services & Trades - HVAC",
    color: "from-blue-600 to-blue-700",
    companyName: "Wilson Heating & Cooling",
    companyDescription:
      "Wilson Heating & Cooling is a family-owned HVAC company serving residential and light commercial customers in the greater Boston area. With 12 technicians and 4 office staff, they handle approximately 3,500 service calls annually, including installations, repairs, and maintenance.",
    problemTitle: "The Challenge: Drowning in Paperwork and Scheduling Conflicts",
    problemDescription:
      "Before partnering with BridgeOps.ai, Wilson Heating & Cooling was struggling with several operational challenges that were limiting their growth and profitability:\n\n" +
      "• Manual scheduling was causing double-bookings and inefficient technician routing\n" +
      "• Paper-based work orders and invoices were getting lost or delayed\n" +
      "• Customer information was scattered across multiple systems\n" +
      "• Follow-up for maintenance contracts was inconsistent\n" +
      "• Office staff was overwhelmed with administrative tasks\n\n" +
      "These challenges resulted in wasted technician time, customer complaints, and missed revenue opportunities. The company's owner, Michael Johnson, knew they needed a better system but was concerned about the complexity and cost of implementing new technology.",
    solutionTitle: "The Solution: Comprehensive Workflow Automation",
    solutionDescription:
      "BridgeOps.ai worked closely with Wilson Heating & Cooling to implement a tailored automation solution that addressed their specific challenges. The solution included:\n\n" +
      "• An AI-powered scheduling system that optimizes technician routes and prevents double-bookings\n" +
      "• Digital work orders and invoices with mobile access for technicians\n" +
      "• Automated customer communications for appointments, follow-ups, and maintenance reminders\n" +
      "• A centralized customer database with service history and equipment information\n" +
      "• Automated maintenance contract renewal sequences\n\n" +
      "The system was designed to be user-friendly for both office staff and technicians, with minimal training required.",
    implementationSteps: [
      "Initial consultation and workflow analysis to identify key pain points and opportunities for automation",
      "Custom solution design based on Wilson Heating & Cooling's specific needs and existing processes",
      "Data migration from previous systems and paper records to the new centralized database",
      "Phased implementation starting with scheduling and dispatch, followed by digital work orders and invoicing",
      "Training sessions for office staff and technicians, with ongoing support during the transition",
      "Continuous optimization and refinement based on feedback and performance metrics",
    ],
    metrics: [
      {
        value: "70%",
        label: "Reduction in Administrative Work",
      },
      {
        value: "35%",
        label: "Increase in Service Calls per Day",
      },
      {
        value: "42%",
        label: "Growth in Maintenance Contracts",
      },
    ],
    results: [
      "Eliminated scheduling conflicts and reduced travel time between jobs by 25%",
      "Reduced invoice processing time from 3 days to same-day",
      "Increased technician productivity from 5 to 7 service calls per day on average",
      "Improved customer satisfaction scores from 4.2 to 4.8 out of 5",
      "Grew maintenance contract revenue by 42% through consistent follow-up",
      "Reduced office staff needs from 4 to 2 people, despite business growth",
      "Achieved ROI on the automation investment within 4 months",
    ],
    testimonial: {
      quote:
        "The automation system from BridgeOps.ai has completely transformed our business. Our technicians are more productive, our customers are happier, and our office staff is no longer drowning in paperwork. We've been able to grow our business by 35% without adding administrative staff, which has significantly improved our bottom line.",
      author: "Thomas Wilson",
      position: "Owner",
      company: "Wilson Heating & Cooling",
    },
    relatedCaseStudies: [
      {
        title: "Elite Plumbing Increases Revenue by 45% with Automated Follow-ups",
        industry: "Home Services & Trades - Plumbing",
        slug: "home-services-plumbing",
      },
      {
        title: "Sunshine Cleaning Doubles Client Base with Same Staff",
        industry: "Home Services & Trades - Cleaning",
        slug: "home-services-cleaning",
      },
      {
        title: "Green Lawn Landscaping Optimizes Crew Scheduling",
        industry: "Home Services & Trades - Landscaping",
        slug: "home-services-landscaping",
      },
    ],
  }

  return <CaseStudyLayout caseStudy={caseStudyData} />
}
