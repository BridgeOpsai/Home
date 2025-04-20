"use client"

import SEOPageLayout from "@/components/seo-page-layout"
import { Workflow, Clock, DollarSign, LineChart, Users, Zap, Layers, Repeat, CheckCircle } from "lucide-react"

export default function WorkflowAutomationPage() {
  const pageData = {
    title: "Workflow Automation",
    description: "Streamline Your Business Processes with Intelligent Workflow Automation",
    heroDescription:
      "Transform manual, repetitive tasks into streamlined, automated workflows that save time, reduce errors, and boost productivity.",
    overview:
      "Workflow automation uses technology to automate sequential tasks, approvals, and processes that would otherwise require manual effort. By defining rules and triggers, businesses can create efficient, consistent workflows that reduce human intervention while improving accuracy and speed. BridgeOps.ai specializes in creating custom workflow automation solutions tailored to your specific business needs.",
    benefits: [
      {
        title: "Save Time and Resources",
        description:
          "Reduce manual effort by up to 80% by automating repetitive tasks, allowing your team to focus on high-value activities that drive business growth.",
        icon: <Clock className="h-6 w-6" />,
      },
      {
        title: "Minimize Errors",
        description:
          "Eliminate human error from your processes with consistent, rule-based automation that follows predefined steps every time.",
        icon: <CheckCircle className="h-6 w-6" />,
      },
      {
        title: "Reduce Operational Costs",
        description:
          "Cut operational expenses by 30-40% through increased efficiency, reduced manual labor, and optimized resource allocation.",
        icon: <DollarSign className="h-6 w-6" />,
      },
      {
        title: "Improve Visibility and Tracking",
        description:
          "Gain real-time insights into your business processes with automated tracking, reporting, and analytics.",
        icon: <LineChart className="h-6 w-6" />,
      },
      {
        title: "Enhance Collaboration",
        description:
          "Facilitate seamless teamwork with automated notifications, approvals, and handoffs between departments and team members.",
        icon: <Users className="h-6 w-6" />,
      },
      {
        title: "Scale Operations Efficiently",
        description:
          "Easily scale your business operations without proportionally increasing headcount or administrative overhead.",
        icon: <Zap className="h-6 w-6" />,
      },
    ],
    useCases: [
      {
        title: "Document Processing and Approval Workflows",
        description:
          "Automate the routing, review, and approval of documents such as contracts, invoices, and purchase orders. Reduce approval times from days to minutes while maintaining proper controls and audit trails.",
      },
      {
        title: "Customer Onboarding and Service Delivery",
        description:
          "Streamline the customer journey from initial signup to service activation with automated welcome sequences, information collection, and account setup processes.",
      },
      {
        title: "Employee Onboarding and HR Processes",
        description:
          "Simplify HR workflows including recruitment, onboarding, time-off requests, and performance reviews with automated sequences and approval processes.",
      },
      {
        title: "Order Processing and Fulfillment",
        description:
          "Automate order handling from receipt to delivery, including inventory checks, payment processing, shipping notifications, and follow-up communications.",
      },
      {
        title: "Financial Operations and Reporting",
        description:
          "Streamline accounting processes such as invoice processing, expense approvals, financial reconciliation, and automated report generation and distribution.",
      },
      {
        title: "Marketing Campaign Management",
        description:
          "Automate the planning, execution, and analysis of marketing campaigns across multiple channels with scheduled content delivery and performance tracking.",
      },
    ],
    features: [
      {
        title: "Process Analysis and Mapping",
        description:
          "We begin by thoroughly analyzing your existing workflows to identify bottlenecks, inefficiencies, and automation opportunities.",
        icon: <Layers className="h-6 w-6" />,
      },
      {
        title: "Custom Workflow Design",
        description:
          "Our experts design tailored automation solutions that align with your business processes, goals, and existing systems.",
        icon: <Workflow className="h-6 w-6" />,
      },
      {
        title: "Seamless Integration",
        description:
          "We integrate your workflow automation with existing tools and platforms, creating a cohesive ecosystem where information flows seamlessly.",
        icon: <Repeat className="h-6 w-6" />,
      },
    ],
    ctaTitle: "Ready to transform your business workflows?",
    ctaDescription:
      "Schedule a consultation to discuss how our workflow automation solutions can streamline your operations.",
  }

  return <SEOPageLayout page={pageData} />
}
