"use client"

import CaseStudyLayout from "@/components/case-study-layout"

export default function LeadGenerationAgencyCaseStudy() {
  const caseStudyData = {
    title: "How Growth Marketing Partners Doubled Lead Volume While Improving Quality",
    industry: "Lead Generation - Marketing Agency",
    color: "from-rose-600 to-rose-700",
    companyName: "Growth Marketing Partners",
    companyDescription:
      "Growth Marketing Partners is a digital marketing agency specializing in lead generation for B2B technology companies. With a team of 20 marketing specialists, they manage lead generation campaigns for approximately 30 clients. Before automation, they were generating around 5,000 leads per month across all clients and struggling with lead quality and campaign efficiency.",
    problemTitle: "The Challenge: Lead Quality and Campaign Management Inefficiencies",
    problemDescription:
      "Growth Marketing Partners was facing several operational challenges that were affecting their campaign performance and client satisfaction:\n\n" +
      "• Inconsistent lead quality across different channels and campaigns\n" +
      "• Manual lead qualification creating bottlenecks and delays\n" +
      "• Inefficient campaign management across multiple platforms\n" +
      "• Limited personalization in lead nurturing sequences\n" +
      "• Time-consuming reporting and analytics processes\n\n" +
      "These challenges resulted in lower conversion rates, inefficient use of marketing budget, and decreased client satisfaction. Jennifer Martinez, the agency's founder, knew they needed a more sophisticated system to improve lead quality while scaling volume.",
    solutionTitle: "The Solution: End-to-End Lead Generation Automation",
    solutionDescription:
      "BridgeOps.ai implemented a comprehensive automation solution for Growth Marketing Partners that addressed their specific challenges:\n\n" +
      "• Multi-channel lead capture with integrated tracking and attribution\n" +
      "• AI-powered lead scoring and qualification system\n" +
      "• Automated campaign management and optimization across platforms\n" +
      "• Personalized lead nurturing sequences based on behavior and demographics\n" +
      "• Real-time reporting and analytics dashboard\n" +
      "• Automated A/B testing and campaign optimization\n\n" +
      "The solution was designed to integrate with their existing marketing tools while adding powerful automation capabilities that streamlined operations across the entire lead generation process.",
    implementationSteps: [
      "Comprehensive analysis of existing campaigns and identification of key performance gaps",
      "Custom solution design focused on lead capture and qualification",
      "Integration with their marketing platforms and client CRM systems",
      "Implementation of lead scoring algorithms and nurturing sequences",
      "Setup of automated campaign management and optimization",
      "Training for marketing team on new workflows and analytics",
      "Phased rollout starting with top-performing clients",
    ],
    metrics: [
      {
        value: "100%",
        label: "Increase in Lead Volume",
      },
      {
        value: "35%",
        label: "Improvement in Lead Quality",
      },
      {
        value: "40%",
        label: "Reduction in Cost Per Lead",
      },
    ],
    results: [
      "Doubled monthly lead volume from 5,000 to 10,000 across all clients",
      "Increased qualified lead percentage from 25% to 34% through AI scoring",
      "Reduced cost per lead by 40% through automated campaign optimization",
      "Improved lead-to-opportunity conversion rate by 35% for clients",
      "Decreased campaign management time by 65% through automation",
      "Reduced reporting time from 2 days to 2 hours per month",
      "Enabled 50% growth in client base without adding marketing staff",
    ],
    testimonial: {
      quote:
        "The lead generation automation has transformed our marketing agency. We're generating more leads across more channels, with better qualification and nurturing, all with less manual effort. Our clients are seeing higher conversion rates and better ROI, which has led to increased retention and referrals. The system has paid for itself many times over in both efficiency gains and improved client results.",
      author: "Jennifer Wu",
      position: "Founder & CEO",
      company: "Growth Marketing Partners",
    },
    relatedCaseStudies: [
      {
        title: "Enterprise Solutions Inc. Optimizes B2B Lead Nurturing",
        industry: "Lead Generation - B2B Technology",
        slug: "lead-generation-b2b",
      },
      {
        title: "Premier Properties Group Enhances Real Estate Lead Conversion",
        industry: "Lead Generation - Real Estate",
        slug: "lead-generation-real-estate",
      },
      {
        title: "Financial Advisors Network Improves Lead Distribution",
        industry: "Lead Generation - Financial Services",
        slug: "lead-generation-financial",
      },
    ],
  }

  return <CaseStudyLayout caseStudy={caseStudyData} />
}
