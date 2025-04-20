"use client"

import SEOPageLayout from "@/components/seo-page-layout"
import { Briefcase, TrendingUp, Clock, DollarSign, Shield, Users, Layers, Code, Repeat } from "lucide-react"

export default function BusinessAutomationPage() {
  const pageData = {
    title: "Business Automation",
    description: "Transform Your Enterprise with End-to-End Business Process Automation",
    heroDescription:
      "Streamline operations, reduce costs, and drive growth with comprehensive automation solutions tailored to your business needs.",
    overview:
      "Business Automation encompasses the end-to-end digitization and automation of core business processes across departments and functions. By implementing intelligent workflows, robotic process automation, and AI-driven decision-making, organizations can dramatically improve operational efficiency while enhancing quality and consistency. BridgeOps.ai delivers holistic business automation solutions that address your most critical processes, from customer-facing activities to back-office operations, creating a foundation for sustainable growth and competitive advantage.",
    benefits: [
      {
        title: "Operational Excellence",
        description:
          "Achieve unprecedented levels of efficiency, consistency, and quality across your business processes through intelligent automation.",
        icon: <Briefcase className="h-6 w-6" />,
      },
      {
        title: "Strategic Resource Allocation",
        description:
          "Redirect human talent from routine tasks to high-value activities that drive innovation, customer engagement, and business growth.",
        icon: <Users className="h-6 w-6" />,
      },
      {
        title: "Cost Optimization",
        description:
          "Reduce operational costs by 30-50% through automated processes that require fewer resources while delivering consistent results.",
        icon: <DollarSign className="h-6 w-6" />,
      },
      {
        title: "Accelerated Execution",
        description:
          "Compress process cycle times from days to minutes with automated workflows that eliminate delays, handoffs, and bottlenecks.",
        icon: <Clock className="h-6 w-6" />,
      },
      {
        title: "Enhanced Compliance and Risk Management",
        description:
          "Ensure consistent adherence to regulatory requirements and internal policies with automated controls and documentation.",
        icon: <Shield className="h-6 w-6" />,
      },
      {
        title: "Data-Driven Decision Making",
        description:
          "Leverage automated data collection and analysis to generate actionable insights that inform strategic and operational decisions.",
        icon: <TrendingUp className="h-6 w-6" />,
      },
    ],
    useCases: [
      {
        title: "Customer Onboarding and Management",
        description:
          "Automate the entire customer lifecycle from initial onboarding to ongoing service delivery, ensuring a seamless experience while reducing administrative overhead.",
      },
      {
        title: "Procure-to-Pay Automation",
        description:
          "Streamline procurement processes from requisition to payment with automated approval workflows, vendor management, and invoice processing.",
      },
      {
        title: "Order-to-Cash Optimization",
        description:
          "Accelerate revenue cycles with automated order processing, fulfillment, invoicing, payment collection, and reconciliation workflows.",
      },
      {
        title: "HR and Employee Lifecycle Management",
        description:
          "Automate recruitment, onboarding, performance management, benefits administration, and offboarding processes to improve efficiency and employee experience.",
      },
      {
        title: "Compliance and Reporting Automation",
        description:
          "Implement automated compliance monitoring, documentation, and reporting processes to ensure regulatory adherence while reducing manual effort.",
      },
      {
        title: "Supply Chain Optimization",
        description:
          "Automate inventory management, demand forecasting, supplier communications, and logistics coordination to improve supply chain efficiency and resilience.",
      },
    ],
    features: [
      {
        title: "Comprehensive Process Analysis",
        description:
          "We conduct a thorough assessment of your business processes to identify automation opportunities, dependencies, and potential challenges.",
        icon: <Layers className="h-6 w-6" />,
      },
      {
        title: "End-to-End Solution Design",
        description:
          "Our experts design integrated automation solutions that address your entire process landscape, not just isolated tasks or functions.",
        icon: <Repeat className="h-6 w-6" />,
      },
      {
        title: "Implementation and Change Management",
        description:
          "We implement your automation solutions with a focus on user adoption, providing training and support to ensure successful transformation.",
        icon: <Code className="h-6 w-6" />,
      },
    ],
    ctaTitle: "Ready to transform your business operations?",
    ctaDescription:
      "Schedule a consultation to discuss how comprehensive business automation can drive efficiency and growth.",
  }

  return <SEOPageLayout page={pageData} />
}
