"use client"

import SEOPageLayout from "@/components/seo-page-layout"
import { PenTool, Layers, Zap, Users, Workflow, LineChart, Repeat } from "lucide-react"

export default function AutomationStudioPage() {
  const pageData = {
    title: "Automation Studio",
    description: "Design, Build, and Deploy Custom Automation Solutions",
    heroDescription:
      "Our comprehensive automation platform enables businesses to create, manage, and optimize automated workflows without extensive technical expertise.",
    overview:
      "Automation Studio is BridgeOps.ai's end-to-end platform for designing, implementing, and managing business automation solutions. It provides a visual, low-code environment where business users and technical teams can collaborate to create powerful automated workflows that connect systems, streamline processes, and drive efficiency. With pre-built connectors, customizable templates, and robust monitoring tools, Automation Studio makes it easy to transform your business operations.",
    benefits: [
      {
        title: "Visual Workflow Design",
        description:
          "Create complex automation workflows using an intuitive drag-and-drop interface that requires minimal technical knowledge.",
        icon: <PenTool className="h-6 w-6" />,
      },
      {
        title: "Rapid Implementation",
        description:
          "Accelerate your automation journey with pre-built templates and connectors that reduce development time by up to 70%.",
        icon: <Zap className="h-6 w-6" />,
      },
      {
        title: "Cross-Platform Integration",
        description:
          "Connect and orchestrate processes across multiple systems, applications, and data sources with our extensive integration capabilities.",
        icon: <Repeat className="h-6 w-6" />,
      },
      {
        title: "Business-IT Collaboration",
        description:
          "Bridge the gap between business users and IT teams with a platform that enables effective collaboration and shared ownership.",
        icon: <Users className="h-6 w-6" />,
      },
      {
        title: "Comprehensive Monitoring",
        description:
          "Gain full visibility into your automation performance with real-time monitoring, alerts, and detailed analytics dashboards.",
        icon: <LineChart className="h-6 w-6" />,
      },
      {
        title: "Scalable Architecture",
        description:
          "Build on a robust, enterprise-grade platform that scales seamlessly as your automation needs grow and evolve.",
        icon: <Layers className="h-6 w-6" />,
      },
    ],
    useCases: [
      {
        title: "End-to-End Process Automation",
        description:
          "Design comprehensive workflows that span multiple departments, systems, and steps, creating seamless processes from initiation to completion.",
      },
      {
        title: "Customer Journey Orchestration",
        description:
          "Create automated customer experiences that adapt to individual behaviors and needs across marketing, sales, and service interactions.",
      },
      {
        title: "Supply Chain Optimization",
        description:
          "Automate inventory management, order processing, supplier communications, and logistics coordination to improve efficiency and reduce costs.",
      },
      {
        title: "Financial Process Automation",
        description:
          "Streamline accounting workflows, approval processes, compliance checks, and financial reporting with customizable automation templates.",
      },
      {
        title: "HR and Employee Experience",
        description:
          "Automate recruitment, onboarding, benefits administration, and employee service requests to improve efficiency and employee satisfaction.",
      },
      {
        title: "IT Service Management",
        description:
          "Create automated workflows for incident management, service requests, change management, and system monitoring to improve IT operations.",
      },
    ],
    features: [
      {
        title: "Process Discovery Workshop",
        description:
          "We begin with a collaborative workshop to map your current processes, identify automation opportunities, and define success criteria.",
        icon: <Workflow className="h-6 w-6" />,
      },
      {
        title: "Custom Solution Design",
        description:
          "Our experts design tailored automation solutions using Automation Studio's powerful capabilities and your specific business requirements.",
        icon: <PenTool className="h-6 w-6" />,
      },
      {
        title: "Implementation and Training",
        description:
          "We implement your automation solutions and provide comprehensive training to ensure your team can manage and extend them independently.",
        icon: <Users className="h-6 w-6" />,
      },
    ],
    ctaTitle: "Ready to build your automation ecosystem?",
    ctaDescription: "Schedule a demo of Automation Studio to see how it can transform your business operations.",
  }

  return <SEOPageLayout page={pageData} />
}
