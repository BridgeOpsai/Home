"use client"

import SEOPageLayout from "@/components/seo-page-layout"
import { FileText, Mail, Calendar, Users, Clock, DollarSign, Zap, Layers, Code } from "lucide-react"

export default function OfficeAutomationPage() {
  const pageData = {
    title: "Office Automation",
    description: "Streamline Administrative Tasks and Boost Office Productivity",
    heroDescription:
      "Transform your office operations with intelligent automation that reduces administrative burden and improves efficiency.",
    overview:
      "Office Automation focuses on streamlining administrative and clerical tasks that consume valuable time in business environments. By automating document management, communication, scheduling, and other routine office activities, organizations can significantly reduce manual effort while improving accuracy and consistency. BridgeOps.ai delivers comprehensive office automation solutions that transform how your team works, allowing them to focus on high-value activities instead of administrative busywork.",
    benefits: [
      {
        title: "Reclaim Productive Time",
        description:
          "Reduce time spent on administrative tasks by up to 70%, allowing your team to focus on strategic, creative, and revenue-generating activities.",
        icon: <Clock className="h-6 w-6" />,
      },
      {
        title: "Streamline Document Workflows",
        description:
          "Automate document creation, routing, approval, and storage processes to eliminate bottlenecks and ensure consistency.",
        icon: <FileText className="h-6 w-6" />,
      },
      {
        title: "Enhance Communication Efficiency",
        description:
          "Implement automated email responses, notifications, and updates to ensure timely, consistent communication without manual effort.",
        icon: <Mail className="h-6 w-6" />,
      },
      {
        title: "Optimize Scheduling and Coordination",
        description:
          "Automate meeting scheduling, resource booking, and calendar management to eliminate conflicts and reduce coordination overhead.",
        icon: <Calendar className="h-6 w-6" />,
      },
      {
        title: "Reduce Operational Costs",
        description:
          "Lower administrative expenses by automating routine tasks that previously required dedicated staff time or outsourcing.",
        icon: <DollarSign className="h-6 w-6" />,
      },
      {
        title: "Improve Employee Experience",
        description:
          "Boost job satisfaction by eliminating tedious administrative tasks and enabling staff to focus on more meaningful work.",
        icon: <Users className="h-6 w-6" />,
      },
    ],
    useCases: [
      {
        title: "Document Management Automation",
        description:
          "Implement automated systems for document creation, formatting, version control, approval routing, and secure storage with intelligent categorization and search capabilities.",
      },
      {
        title: "Email and Communication Management",
        description:
          "Automate email sorting, response generation, follow-up reminders, and internal notifications to streamline communication flows and reduce inbox overload.",
      },
      {
        title: "Meeting and Calendar Optimization",
        description:
          "Deploy intelligent scheduling assistants that coordinate meetings, book resources, send reminders, and even generate and distribute meeting notes and action items.",
      },
      {
        title: "Data Entry and Form Processing",
        description:
          "Eliminate manual data entry with automated form processing, data extraction, and system updates that maintain data accuracy across platforms.",
      },
      {
        title: "Expense Management and Reporting",
        description:
          "Streamline expense submission, approval, reimbursement, and reporting processes with automated workflows and validation checks.",
      },
      {
        title: "Office Supply and Resource Management",
        description:
          "Implement automated inventory tracking, reordering, and resource allocation systems to ensure optimal supply levels and resource utilization.",
      },
    ],
    features: [
      {
        title: "Office Workflow Assessment",
        description:
          "We analyze your current administrative processes to identify high-impact automation opportunities that deliver immediate value.",
        icon: <Layers className="h-6 w-6" />,
      },
      {
        title: "Custom Solution Design",
        description:
          "Our experts design tailored office automation solutions that integrate with your existing tools and align with your team's workflows.",
        icon: <Code className="h-6 w-6" />,
      },
      {
        title: "Implementation and Training",
        description:
          "We implement your automation solutions and provide comprehensive training to ensure your team can leverage them effectively.",
        icon: <Zap className="h-6 w-6" />,
      },
    ],
    ctaTitle: "Ready to transform your office operations?",
    ctaDescription: "Schedule a consultation to discuss how office automation can boost your team's productivity.",
  }

  return <SEOPageLayout page={pageData} />
}
