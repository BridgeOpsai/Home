"use client"

import SEOPageLayout from "@/components/seo-page-layout"
import { Settings, Zap, Layers, Shield, TrendingUp, Code, Cpu, Repeat } from "lucide-react"

export default function AutomationSystemsPage() {
  const pageData = {
    title: "Automation Systems",
    description: "Build Integrated, Enterprise-Grade Automation Ecosystems",
    heroDescription:
      "Develop comprehensive automation systems that connect processes, applications, and data across your organization for maximum operational efficiency.",
    overview:
      "Automation Systems represent the holistic approach to enterprise automation, creating interconnected ecosystems where multiple automation technologies work together to optimize end-to-end business processes. These systems combine RPA, AI, workflow automation, and integration platforms to create a cohesive automation infrastructure that spans departments and functions. BridgeOps.ai specializes in designing, implementing, and managing enterprise-grade automation systems that deliver transformative business outcomes while ensuring scalability, security, and governance.",
    benefits: [
      {
        title: "End-to-End Process Optimization",
        description:
          "Create seamless automation across entire value chains rather than isolated tasks, maximizing efficiency and eliminating process gaps.",
        icon: <Repeat className="h-6 w-6" />,
      },
      {
        title: "Technology Convergence",
        description:
          "Leverage the combined power of multiple automation technologies (RPA, AI, workflow, integration) in a unified, coordinated system.",
        icon: <Settings className="h-6 w-6" />,
      },
      {
        title: "Enterprise Scalability",
        description:
          "Build automation infrastructure that scales across your organization with consistent governance, security, and management.",
        icon: <Layers className="h-6 w-6" />,
      },
      {
        title: "Enhanced Security and Compliance",
        description:
          "Implement robust security controls, audit trails, and compliance mechanisms across your entire automation ecosystem.",
        icon: <Shield className="h-6 w-6" />,
      },
      {
        title: "Accelerated Digital Transformation",
        description:
          "Fast-track your digital transformation initiatives with comprehensive automation systems that drive rapid, measurable business impact.",
        icon: <Zap className="h-6 w-6" />,
      },
      {
        title: "Continuous Improvement",
        description:
          "Establish frameworks for ongoing optimization, expansion, and evolution of your automation capabilities as business needs change.",
        icon: <TrendingUp className="h-6 w-6" />,
      },
    ],
    useCases: [
      {
        title: "Integrated Customer Experience Automation",
        description:
          "Create seamless customer journeys by connecting marketing, sales, service, and operations automation into a unified system that delivers consistent experiences across touchpoints.",
      },
      {
        title: "Supply Chain Automation Ecosystem",
        description:
          "Implement end-to-end supply chain automation that connects procurement, inventory, manufacturing, logistics, and distribution processes into a cohesive system.",
      },
      {
        title: "Financial Operations Automation",
        description:
          "Build comprehensive automation systems that streamline the entire financial value chain from transaction processing to reporting and compliance.",
      },
      {
        title: "HR and Employee Experience Automation",
        description:
          "Create integrated systems that automate the complete employee lifecycle from recruitment to retirement, connecting HR, IT, facilities, and other supporting functions.",
      },
      {
        title: "IT Service Delivery Automation",
        description:
          "Implement automation systems that connect service desk, infrastructure management, application support, and security operations for efficient IT service delivery.",
      },
      {
        title: "Multi-Entity Business Process Automation",
        description:
          "Develop automation systems that standardize and streamline processes across multiple business units, subsidiaries, or geographic locations while accommodating necessary variations.",
      },
    ],
    features: [
      {
        title: "Enterprise Automation Assessment",
        description:
          "We conduct a comprehensive analysis of your organization's automation landscape, identifying opportunities for integration and optimization.",
        icon: <Layers className="h-6 w-6" />,
      },
      {
        title: "Automation Architecture Design",
        description:
          "Our experts design scalable, secure automation architectures that align with your business strategy and technical environment.",
        icon: <Code className="h-6 w-6" />,
      },
      {
        title: "Implementation and Governance",
        description:
          "We implement your automation systems with robust governance frameworks that ensure security, compliance, and sustainable management.",
        icon: <Cpu className="h-6 w-6" />,
      },
    ],
    ctaTitle: "Ready to build your enterprise automation ecosystem?",
    ctaDescription:
      "Schedule a consultation to discuss how comprehensive automation systems can transform your organization.",
  }

  return <SEOPageLayout page={pageData} />
}
