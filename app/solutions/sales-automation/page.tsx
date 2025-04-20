"use client"

import SEOPageLayout from "@/components/seo-page-layout"
import { TrendingUp, Users, Clock, Target, Mail, LineChart, Layers, Code, Repeat } from "lucide-react"

export default function SalesAutomationPage() {
  const pageData = {
    title: "Sales Automation",
    description: "Accelerate Revenue Growth with Intelligent Sales Automation",
    heroDescription:
      "Transform your sales process with automation that increases efficiency, improves conversion rates, and drives revenue growth.",
    overview:
      "Sales Automation leverages technology to streamline and enhance the sales process, from lead generation to deal closure and customer retention. By automating repetitive tasks, follow-ups, data entry, and analytics, sales teams can focus on building relationships and closing deals rather than administrative work. BridgeOps.ai delivers comprehensive sales automation solutions that integrate with your CRM and other tools to create a seamless, efficient sales ecosystem that drives measurable revenue growth.",
    benefits: [
      {
        title: "Increase Sales Productivity",
        description:
          "Boost sales rep productivity by 30-40% by automating administrative tasks and enabling them to focus on high-value selling activities.",
        icon: <TrendingUp className="h-6 w-6" />,
      },
      {
        title: "Improve Lead Management",
        description:
          "Ensure no lead falls through the cracks with automated lead scoring, routing, and follow-up sequences that nurture prospects effectively.",
        icon: <Target className="h-6 w-6" />,
      },
      {
        title: "Accelerate Sales Cycles",
        description:
          "Reduce sales cycle length by 20-30% with automated workflows that eliminate delays and keep deals moving forward efficiently.",
        icon: <Clock className="h-6 w-6" />,
      },
      {
        title: "Enhance Customer Engagement",
        description:
          "Deliver timely, personalized communications at scale with automated outreach that adapts to prospect behavior and preferences.",
        icon: <Mail className="h-6 w-6" />,
      },
      {
        title: "Optimize Sales Performance",
        description:
          "Leverage automated analytics and reporting to identify improvement opportunities and replicate successful sales strategies.",
        icon: <LineChart className="h-6 w-6" />,
      },
      {
        title: "Improve Team Collaboration",
        description:
          "Facilitate seamless handoffs and information sharing between sales, marketing, and customer success teams through automated workflows.",
        icon: <Users className="h-6 w-6" />,
      },
    ],
    useCases: [
      {
        title: "Lead Qualification and Routing",
        description:
          "Implement automated lead scoring and assignment to ensure leads are quickly routed to the right sales representatives based on criteria like territory, industry, or product interest.",
      },
      {
        title: "Sales Outreach and Follow-up",
        description:
          "Deploy automated email sequences, call reminders, and social touch points that maintain consistent prospect engagement without manual effort.",
      },
      {
        title: "Proposal and Quote Generation",
        description:
          "Automate the creation of professional proposals and quotes with accurate pricing, terms, and product configurations based on customer requirements.",
      },
      {
        title: "Sales Pipeline Management",
        description:
          "Implement automated stage progression, forecasting, and activity tracking to maintain an accurate view of your sales pipeline and expected revenue.",
      },
      {
        title: "Contract and Order Processing",
        description:
          "Streamline the final steps of the sales process with automated contract generation, approval workflows, and order processing integration.",
      },
      {
        title: "Customer Retention and Upsell",
        description:
          "Create automated renewal reminders, satisfaction checks, and upsell opportunity alerts to maximize customer lifetime value and reduce churn.",
      },
    ],
    features: [
      {
        title: "Sales Process Assessment",
        description:
          "We analyze your current sales process to identify bottlenecks, manual tasks, and high-impact automation opportunities.",
        icon: <Layers className="h-6 w-6" />,
      },
      {
        title: "Custom Automation Design",
        description:
          "Our experts design tailored sales automation solutions that integrate with your CRM and align with your sales methodology.",
        icon: <Code className="h-6 w-6" />,
      },
      {
        title: "CRM Integration and Optimization",
        description:
          "We ensure seamless integration with your CRM system while optimizing its configuration to support your automated sales processes.",
        icon: <Repeat className="h-6 w-6" />,
      },
    ],
    ctaTitle: "Ready to supercharge your sales team?",
    ctaDescription: "Schedule a consultation to discuss how sales automation can accelerate your revenue growth.",
  }

  return <SEOPageLayout page={pageData} />
}
