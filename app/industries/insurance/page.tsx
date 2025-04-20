"use client"

import IndustryPageLayout from "@/components/industry-page-layout"

export default function InsurancePage() {
  const industryData = {
    name: "Insurance",
    description: "Insurance agencies, brokers, carriers, claims processing",
    color: "from-sky-600 to-sky-700",
    heroDescription:
      "AI automation solutions tailored for insurance agencies, brokers, carriers, and claims processing operations.",
    benefits: [
      {
        title: "Streamline Policy Quoting",
        description: "Automate the quoting process to provide faster, more accurate quotes to potential clients.",
      },
      {
        title: "Enhance Claims Processing",
        description:
          "Automated claims intake, assessment, and processing to reduce settlement time and improve customer satisfaction.",
      },
      {
        title: "Optimize Policy Renewals",
        description:
          "Automated renewal notifications, updates, and processing to increase retention rates and reduce administrative work.",
      },
      {
        title: "Improve Underwriting Efficiency",
        description: "AI-powered risk assessment and underwriting to improve accuracy and reduce processing time.",
      },
      {
        title: "Enhance Customer Communication",
        description: "Automated updates, policy information, and document delivery to improve customer experience.",
      },
      {
        title: "Streamline Compliance Management",
        description:
          "Automated compliance checks and documentation to ensure regulatory requirements are consistently met.",
      },
    ],
    useCases: [
      {
        title: "Insurance Agency Increases Quote Volume by 300%",
        description:
          "An insurance agency implemented our automated quoting system, enabling them to handle 3x more quote requests with the same staff while improving quote accuracy.",
      },
      {
        title: "Insurance Carrier Reduces Claims Processing Time by 60%",
        description:
          "By implementing our claims automation system, an insurance carrier reduced claims processing time from 10 days to 4 days, significantly improving customer satisfaction.",
      },
      {
        title: "Insurance Broker Improves Policy Renewal Rate by 25%",
        description:
          "An insurance broker implemented our automated renewal system, increasing their policy renewal rate from 68% to 85% through timely, personalized communications.",
      },
      {
        title: "Insurance Provider Enhances Underwriting Accuracy",
        description:
          "An insurance provider implemented our AI-powered underwriting system, reducing loss ratios by 15% while maintaining approval volumes.",
      },
    ],
    automations: [
      "Policy quoting and comparison",
      "Application intake and processing",
      "Underwriting and risk assessment",
      "Policy issuance and document delivery",
      "Claims intake and processing",
      "Policy renewal management",
      "Customer communication and updates",
      "Compliance checks and documentation",
      "Agent commission calculation and reporting",
      "Cross-selling and upselling recommendations",
      "Customer self-service portals",
      "Reporting and analytics",
    ],
    testimonials: [
      {
        quote:
          "The automated quoting system has transformed our insurance agency. We're providing quotes in minutes instead of hours, handling more volume than ever, and our conversion rates have increased significantly.",
        author: "Robert Chen",
        company: "Chen Insurance Group",
      },
      {
        quote:
          "As an insurance carrier, the claims automation system has been revolutionary. We're processing claims faster, with better accuracy, and our customer satisfaction scores have never been higher.",
        author: "Sarah Johnson",
        company: "Secure Coverage Insurance",
      },
      {
        quote:
          "The policy renewal automation has dramatically improved our retention rates. What used to be a manual, time-consuming process is now automated, personalized, and highly effective at keeping our clients.",
        author: "David Rodriguez",
        company: "Elite Insurance Brokers",
      },
    ],
  }

  return <IndustryPageLayout industry={industryData} />
}
