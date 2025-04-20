"use client"

import IndustryPageLayout from "@/components/industry-page-layout"

export default function FinanceServicesPage() {
  const industryData = {
    name: "Finance Services",
    description: "Credit card processing, merchant cash advance, payment solutions",
    color: "from-emerald-600 to-emerald-700",
    heroDescription:
      "AI automation solutions tailored for credit card processing, merchant cash advance, and payment solution providers.",
    benefits: [
      {
        title: "Streamline Application Processing",
        description:
          "Automate application intake, verification, and approval workflows to reduce processing time and increase volume.",
      },
      {
        title: "Enhance Risk Assessment",
        description:
          "AI-powered risk scoring and verification to improve underwriting accuracy and reduce default rates.",
      },
      {
        title: "Optimize Customer Onboarding",
        description:
          "Automated document collection, verification, and account setup to create a seamless customer experience.",
      },
      {
        title: "Improve Compliance Management",
        description:
          "Automated compliance checks and documentation to ensure regulatory requirements are consistently met.",
      },
      {
        title: "Enhance Customer Communication",
        description:
          "Automated updates, payment reminders, and account notifications to improve customer satisfaction.",
      },
      {
        title: "Streamline Reporting and Analytics",
        description:
          "Automated data collection and visualization to provide real-time insights into business performance.",
      },
    ],
    useCases: [
      {
        title: "Payment Processor Reduces Application Approval Time by 75%",
        description:
          "A payment processing company implemented our application automation system, reducing approval time from 4 days to just 1 day while maintaining high approval quality.",
      },
      {
        title: "Merchant Cash Advance Provider Improves Underwriting Accuracy",
        description:
          "By implementing our AI risk assessment system, a merchant cash advance provider reduced default rates by 30% while maintaining approval volumes.",
      },
      {
        title: "Credit Card Processor Streamlines Merchant Onboarding",
        description:
          "A credit card processor automated their merchant onboarding process, reducing setup time from weeks to days and improving merchant satisfaction.",
      },
      {
        title: "Payment Gateway Enhances Compliance Documentation",
        description:
          "A payment gateway implemented automated compliance checks and documentation, reducing audit preparation time by 80% and eliminating compliance gaps.",
      },
    ],
    automations: [
      "Application intake and processing",
      "Document collection and verification",
      "Risk assessment and scoring",
      "Customer onboarding and account setup",
      "Compliance checks and documentation",
      "Payment processing and reconciliation",
      "Customer communication and updates",
      "Reporting and analytics",
      "Fraud detection and prevention",
      "Chargeback management",
      "Merchant support ticket handling",
      "Renewal and upsell management",
    ],
    testimonials: [
      {
        quote:
          "The application processing automation has transformed our merchant cash advance business. We're processing applications 4x faster with half the staff, allowing us to scale rapidly while maintaining quality.",
        author: "Jennifer Martinez",
        company: "Capital Advance Solutions",
      },
      {
        quote:
          "As a payment processor, the automated onboarding system has been a game-changer. We're getting merchants up and running in days instead of weeks, leading to faster revenue generation and happier clients.",
        author: "Michael Thompson",
        company: "Integrated Payment Systems",
      },
      {
        quote:
          "The compliance automation has dramatically reduced our regulatory risk. What used to take a dedicated team weeks to prepare for audits now happens automatically, with better accuracy and completeness.",
        author: "Lisa Chen",
        company: "Secure Payment Processing",
      },
    ],
  }

  return <IndustryPageLayout industry={industryData} />
}
