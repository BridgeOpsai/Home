"use client"

import IndustryPageLayout from "@/components/industry-page-layout"

export default function ProfessionalServicesPage() {
  const industryData = {
    name: "Accounting, Legal & Professional Services",
    description: "Accountants, bookkeepers, attorneys, insurance brokers",
    color: "from-teal-600 to-teal-700",
    heroDescription: "AI automation solutions tailored for accountants, bookkeepers, attorneys, and insurance brokers.",
    benefits: [
      {
        title: "Streamline Client Intake",
        description:
          "Automate the client onboarding process, document collection, and initial consultations to save time and improve accuracy.",
      },
      {
        title: "Simplify Document Management",
        description:
          "Automated document collection, organization, and secure storage with client-specific access permissions.",
      },
      {
        title: "Enhance Client Communication",
        description:
          "Automated updates, reminders, and milestone notifications to keep clients informed without manual effort.",
      },
      {
        title: "Improve Deadline Management",
        description:
          "Automated tracking of regulatory deadlines, filing requirements, and client deliverables to ensure nothing falls through the cracks.",
      },
      {
        title: "Optimize Billing and Collections",
        description:
          "Streamlined time tracking, invoicing, and payment collection to improve cash flow and reduce administrative work.",
      },
      {
        title: "Facilitate Secure Collaboration",
        description: "Secure client portals with automated access management for document sharing and collaboration.",
      },
    ],
    useCases: [
      {
        title: "Accounting Firm Reduces Tax Season Overtime by 40%",
        description:
          "An accounting firm implemented our document collection and client communication automation, reducing administrative work during tax season and cutting overtime hours by 40%.",
      },
      {
        title: "Law Firm Automates Client Intake Process",
        description:
          "A law firm automated their client intake process, including initial questionnaires, document requests, and conflict checks, reducing the onboarding time from weeks to days while improving accuracy.",
      },
      {
        title: "Bookkeeping Service Streamlines Client Workflows",
        description:
          "A bookkeeping service implemented automated workflows for regular client deliverables, reducing the time spent on recurring tasks by 60% and allowing them to take on more clients.",
      },
      {
        title: "Insurance Broker Improves Policy Renewal Process",
        description:
          "An insurance broker automated their policy renewal process with timely reminders, document collection, and quote comparisons, resulting in a 25% increase in retention and more competitive coverage for clients.",
      },
    ],
    automations: [
      "Client intake and onboarding",
      "Document collection and management",
      "Secure client portal access",
      "Deadline tracking and reminders",
      "Time tracking and billing",
      "Payment processing and collections",
      "Client communication and updates",
      "Appointment scheduling and reminders",
      "Regulatory filing management",
      "Contract generation and management",
      "Client relationship management",
      "Reporting and business analytics",
    ],
    testimonials: [
      {
        quote:
          "Our accounting firm has transformed how we handle tax season. The automated document collection and client communication has reduced our administrative work by 60%, allowing us to serve more clients with less stress.",
        author: "Jennifer Williams, CPA",
        company: "Williams Tax & Accounting",
      },
      {
        quote:
          "As an attorney, keeping track of deadlines across dozens of cases was keeping me up at night. Now, our automated system ensures nothing is missed, and clients receive timely updates without me having to send individual emails.",
        author: "Robert Chen, Esq.",
        company: "Chen Legal Group",
      },
      {
        quote:
          "Our insurance brokerage has seen dramatic improvements in our renewal process. Automated reminders and document collection have increased our retention rate while reducing the administrative burden on our team.",
        author: "Michelle Thompson",
        company: "Secure Coverage Insurance",
      },
    ],
  }

  return <IndustryPageLayout industry={industryData} />
}
