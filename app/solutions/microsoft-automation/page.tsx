"use client"

import SEOPageLayout from "@/components/seo-page-layout"
import { Zap, Shield, Layers, Code, Repeat, Users } from "lucide-react"

export default function MicrosoftAutomationPage() {
  const pageData = {
    title: "Microsoft Automation",
    description: "Maximize Your Microsoft Ecosystem with Intelligent Automation",
    heroDescription:
      "Unlock the full potential of your Microsoft tools and platforms with custom automation solutions that streamline workflows and boost productivity.",
    overview:
      "Microsoft Automation leverages Power Automate, Power Apps, Azure, and other Microsoft technologies to create seamless, automated workflows across your Microsoft ecosystem. By connecting applications like Office 365, Dynamics 365, SharePoint, and Teams, businesses can eliminate manual tasks, improve data consistency, and enhance collaboration. BridgeOps.ai specializes in designing and implementing Microsoft automation solutions that maximize your investment in Microsoft technologies while delivering significant operational improvements.",
    benefits: [
      {
        title: "Maximize Existing Investments",
        description:
          "Extract more value from your Microsoft licenses by automating processes across the platforms you already use.",
        icon: <Zap className="h-6 w-6" />,
      },
      {
        title: "Seamless Integration",
        description:
          "Create cohesive workflows across Microsoft applications with native integrations that ensure reliable data flow and process execution.",
        icon: <Repeat className="h-6 w-6" />,
      },
      {
        title: "Enhanced Security and Compliance",
        description:
          "Maintain robust security and compliance standards with automation that leverages Microsoft's enterprise-grade security infrastructure.",
        icon: <Shield className="h-6 w-6" />,
      },
      {
        title: "Improved Collaboration",
        description:
          "Streamline team coordination and information sharing with automated workflows that connect Teams, SharePoint, and other collaboration tools.",
        icon: <Users className="h-6 w-6" />,
      },
      {
        title: "Reduced Manual Effort",
        description:
          "Eliminate repetitive tasks across email, document management, data entry, and reporting processes within your Microsoft environment.",
        icon: <Layers className="h-6 w-6" />,
      },
      {
        title: "Accelerated Digital Transformation",
        description:
          "Fast-track your digital transformation initiatives by building on the familiar Microsoft platforms your team already uses.",
        icon: <Code className="h-6 w-6" />,
      },
    ],
    useCases: [
      {
        title: "Document Management Automation",
        description:
          "Automate document creation, approval workflows, metadata tagging, and lifecycle management in SharePoint and OneDrive with intelligent routing and processing.",
      },
      {
        title: "Email and Communication Workflows",
        description:
          "Implement automated email processing, response generation, and communication workflows in Outlook and Teams to reduce manual handling and ensure timely follow-up.",
      },
      {
        title: "Data Integration and Synchronization",
        description:
          "Create automated data flows between Microsoft applications and other systems to maintain consistent, up-to-date information across your organization.",
      },
      {
        title: "Approval and Review Processes",
        description:
          "Streamline approval workflows for documents, requests, and transactions with automated routing, notifications, and tracking across Microsoft platforms.",
      },
      {
        title: "Customer Relationship Management",
        description:
          "Automate lead nurturing, customer communication, and service delivery processes in Dynamics 365 to improve customer experience and sales efficiency.",
      },
      {
        title: "Reporting and Analytics Automation",
        description:
          "Schedule and automate data collection, report generation, and distribution using Power BI and Excel to deliver timely insights without manual effort.",
      },
    ],
    features: [
      {
        title: "Microsoft Environment Assessment",
        description:
          "We analyze your current Microsoft ecosystem to identify high-impact automation opportunities and optimization potential.",
        icon: <Layers className="h-6 w-6" />,
      },
      {
        title: "Custom Solution Design",
        description:
          "Our Microsoft-certified experts design tailored automation solutions that leverage Power Automate, Power Apps, and other Microsoft technologies.",
        icon: <Code className="h-6 w-6" />,
      },
      {
        title: "Implementation and Knowledge Transfer",
        description:
          "We implement your automation solutions and provide comprehensive training to ensure your team can manage and extend them independently.",
        icon: <Users className="h-6 w-6" />,
      },
    ],
    ctaTitle: "Ready to maximize your Microsoft investment?",
    ctaDescription: "Schedule a consultation to discuss how Microsoft automation can transform your operations.",
  }

  return <SEOPageLayout page={pageData} />
}
