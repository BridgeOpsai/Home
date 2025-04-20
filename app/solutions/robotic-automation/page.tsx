"use client"

import SEOPageLayout from "@/components/seo-page-layout"
import { BotIcon as Robot, Zap, Clock, DollarSign, Shield, Layers, Code, Cpu } from "lucide-react"

export default function RoboticAutomationPage() {
  const pageData = {
    title: "Robotic Automation",
    description: "Streamline Operations with Intelligent Robotic Process Automation",
    heroDescription:
      "Deploy digital robots to handle repetitive tasks, interact with systems, and process data with speed and precision.",
    overview:
      "Robotic Automation, also known as Robotic Process Automation (RPA), uses software robots or 'bots' to automate rule-based, repetitive tasks by mimicking human interactions with digital systems. These digital workers can operate 24/7, performing tasks like data entry, file manipulation, and system interactions with perfect accuracy and consistency. BridgeOps.ai specializes in implementing robotic automation solutions that free your human workforce from mundane tasks while improving operational efficiency.",
    benefits: [
      {
        title: "Accelerate Process Execution",
        description:
          "Complete tasks up to 10x faster than manual processing with robots that work around the clock without breaks or fatigue.",
        icon: <Clock className="h-6 w-6" />,
      },
      {
        title: "Eliminate Human Error",
        description:
          "Achieve 100% accuracy in rule-based tasks by removing human error from processes that require precision and consistency.",
        icon: <Shield className="h-6 w-6" />,
      },
      {
        title: "Reduce Operational Costs",
        description:
          "Lower operational expenses by 25-50% by automating high-volume, repetitive tasks that previously required significant manual effort.",
        icon: <DollarSign className="h-6 w-6" />,
      },
      {
        title: "Enhance Scalability",
        description:
          "Easily scale operations up or down by deploying additional robots or reassigning existing ones to meet changing business needs.",
        icon: <Layers className="h-6 w-6" />,
      },
      {
        title: "Improve Employee Satisfaction",
        description:
          "Free your team from tedious, repetitive tasks, allowing them to focus on creative, strategic work that drives value and increases job satisfaction.",
        icon: <Zap className="h-6 w-6" />,
      },
      {
        title: "Non-Invasive Integration",
        description:
          "Implement automation without changing your existing systems, as robots interact with applications through the user interface just like humans do.",
        icon: <Robot className="h-6 w-6" />,
      },
    ],
    useCases: [
      {
        title: "Data Entry and Migration",
        description:
          "Automate the transfer of data between systems, forms, and databases with perfect accuracy, eliminating the need for manual copy-paste operations and reducing errors.",
      },
      {
        title: "Report Generation and Distribution",
        description:
          "Schedule robots to gather data from multiple sources, compile standardized reports, and distribute them to stakeholders automatically at predefined intervals.",
      },
      {
        title: "Invoice Processing and Accounts Payable",
        description:
          "Deploy robots to extract data from invoices, validate information against purchase orders, update accounting systems, and initiate payment workflows.",
      },
      {
        title: "Employee Onboarding and Offboarding",
        description:
          "Automate the creation and deactivation of user accounts across multiple systems, ensuring consistent execution of HR processes and security protocols.",
      },
      {
        title: "Customer Data Management",
        description:
          "Maintain data quality by having robots regularly verify, update, and enrich customer information across CRM systems and other databases.",
      },
      {
        title: "Legacy System Integration",
        description:
          "Bridge the gap between modern applications and legacy systems by using robots to transfer data and trigger processes across platforms that lack API connectivity.",
      },
    ],
    features: [
      {
        title: "Process Assessment and Selection",
        description:
          "We analyze your operations to identify processes that are ideal candidates for robotic automation based on volume, complexity, and ROI potential.",
        icon: <Layers className="h-6 w-6" />,
      },
      {
        title: "Robot Development and Configuration",
        description:
          "Our experts design, build, and configure software robots tailored to your specific processes and system environment.",
        icon: <Code className="h-6 w-6" />,
      },
      {
        title: "Orchestration and Management",
        description:
          "We implement robust systems to schedule, monitor, and manage your robot workforce, ensuring optimal performance and business continuity.",
        icon: <Cpu className="h-6 w-6" />,
      },
    ],
    ctaTitle: "Ready to build your digital workforce?",
    ctaDescription: "Schedule a consultation to discuss how robotic automation can transform your business operations.",
  }

  return <SEOPageLayout page={pageData} />
}
