"use client"

import IndustryPageLayout from "@/components/industry-page-layout"

export default function LeadGenerationPage() {
  const industryData = {
    name: "Lead Generation",
    description: "Automated lead generation, qualification, and nurturing",
    color: "from-rose-600 to-rose-700",
    heroDescription:
      "AI automation solutions tailored for lead generation, qualification, and nurturing across various industries.",
    benefits: [
      {
        title: "Automate Lead Capture",
        description: "Implement intelligent lead capture systems across multiple channels to maximize lead volume.",
      },
      {
        title: "Enhance Lead Qualification",
        description:
          "AI-powered lead scoring and qualification to identify high-value prospects and prioritize follow-up.",
      },
      {
        title: "Optimize Lead Nurturing",
        description: "Automated, personalized nurturing sequences to move leads through the sales funnel efficiently.",
      },
      {
        title: "Improve Lead Distribution",
        description:
          "Intelligent lead routing to ensure leads are assigned to the right sales representatives at the right time.",
      },
      {
        title: "Enhance Analytics and Reporting",
        description:
          "Comprehensive tracking and analysis of lead sources, conversion rates, and ROI to optimize campaigns.",
      },
      {
        title: "Streamline CRM Integration",
        description: "Seamless integration with CRM systems to ensure consistent data flow and follow-up.",
      },
    ],
    useCases: [
      {
        title: "Marketing Agency Increases Lead Volume by 200%",
        description:
          "A marketing agency implemented our multi-channel lead capture automation, doubling their lead generation volume while maintaining lead quality.",
      },
      {
        title: "B2B Company Improves Lead Conversion Rate by 45%",
        description:
          "By implementing our AI lead scoring and nurturing system, a B2B company increased their lead-to-opportunity conversion rate from 10% to 14.5%.",
      },
      {
        title: "Real Estate Firm Optimizes Lead Distribution",
        description:
          "A real estate firm implemented our intelligent lead routing system, reducing response time by 75% and increasing conversion rates by 30%.",
      },
      {
        title: "Financial Services Company Enhances Lead Nurturing",
        description:
          "A financial services company implemented our automated nurturing sequences, increasing engagement rates by 60% and conversions by 35%.",
      },
    ],
    automations: [
      "Multi-channel lead capture",
      "Lead enrichment and verification",
      "AI-powered lead scoring and qualification",
      "Personalized nurturing sequences",
      "Intelligent lead routing and distribution",
      "Automated follow-up and reminders",
      "CRM integration and data synchronization",
      "Campaign performance tracking and optimization",
      "A/B testing for lead generation assets",
      "Lead source attribution and ROI analysis",
      "Automated reporting and analytics",
      "Lead reactivation campaigns",
    ],
    testimonials: [
      {
        quote:
          "The lead generation automation has transformed our marketing agency. We're generating more leads across more channels, with better qualification and nurturing, all with less manual effort.",
        author: "Jennifer Martinez",
        company: "Growth Marketing Partners",
      },
      {
        quote:
          "As a B2B company, the lead scoring and nurturing system has been a game-changer. Our sales team now focuses on the highest-value prospects, and our conversion rates have increased dramatically.",
        author: "Michael Thompson",
        company: "Enterprise Solutions Inc.",
      },
      {
        quote:
          "The automated lead distribution system has revolutionized our real estate business. Leads are now contacted within minutes instead of hours, and our agents are closing more deals than ever.",
        author: "Lisa Chen",
        company: "Premier Properties Group",
      },
    ],
  }

  return <IndustryPageLayout industry={industryData} />
}
