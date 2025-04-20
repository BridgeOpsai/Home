"use client"

import IndustryPageLayout from "@/components/industry-page-layout"

export default function HomeServicesPage() {
  const industryData = {
    name: "Home Services & Trades",
    description: "HVAC, plumbing, electrical, landscaping, cleaning, pest control",
    color: "from-blue-600 to-blue-700",
    heroDescription:
      "AI automation solutions tailored for HVAC, plumbing, electrical, landscaping, cleaning, and pest control businesses.",
    benefits: [
      {
        title: "Reduce Administrative Overhead",
        description:
          "Cut down on paperwork and manual scheduling with automated systems that handle the busywork for you.",
      },
      {
        title: "Improve Customer Satisfaction",
        description:
          "Provide faster responses, accurate appointment times, and seamless follow-ups that keep customers coming back.",
      },
      {
        title: "Maximize Technician Productivity",
        description: "Optimize routes, schedules, and job assignments to get more done with the same team size.",
      },
      {
        title: "Never Miss a Follow-Up",
        description: "Automated follow-up sequences ensure you capture maintenance contracts and repeat business.",
      },
      {
        title: "Streamline Invoicing & Payments",
        description:
          "Generate and send invoices automatically after job completion and track payments without manual effort.",
      },
      {
        title: "Gain Business Insights",
        description:
          "Access real-time analytics on job profitability, technician performance, and customer satisfaction.",
      },
    ],
    useCases: [
      {
        title: "HVAC Company Reduces Scheduling Conflicts by 95%",
        description:
          "A 12-technician HVAC company implemented our AI scheduling system to eliminate double-bookings and optimize technician routes. The result was a 95% reduction in scheduling conflicts and a 30% increase in jobs completed per day.",
      },
      {
        title: "Plumbing Business Increases Annual Maintenance Contracts by 40%",
        description:
          "By implementing automated follow-up sequences after service calls, a plumbing business was able to convert 40% more one-time customers into annual maintenance contract subscribers.",
      },
      {
        title: "Cleaning Service Automates 90% of Administrative Tasks",
        description:
          "A residential cleaning service automated their scheduling, client communications, and invoicing processes, reducing administrative work by 90% and allowing the owner to focus on growing the business.",
      },
      {
        title: "Landscaping Company Improves Cash Flow with Automated Invoicing",
        description:
          "A landscaping company reduced their average payment time from 45 days to just 7 days by implementing automated invoicing and payment reminders, dramatically improving cash flow.",
      },
    ],
    automations: [
      "Appointment scheduling and confirmation",
      "Automated dispatch and technician routing",
      "Customer intake forms and information collection",
      "Automated quote generation and approval",
      "Job completion reports and photo documentation",
      "Invoicing and payment processing",
      "Follow-up communications and review requests",
      "Maintenance reminder sequences",
      "Inventory management and reordering",
      "Customer relationship management and communication",
      "Employee scheduling and time tracking",
      "Performance reporting and business analytics",
    ],
    testimonials: [
      {
        quote:
          "We've cut our office staff from three people to one, while growing our business by 35%. The automated scheduling and invoicing systems have completely transformed how we operate.",
        author: "Thomas Anderson",
        company: "Anderson Plumbing & Heating",
      },
      {
        quote:
          "Our technicians love the new system. They get clear instructions, optimized routes, and can easily document their work. Our customers are happier too because we're more responsive and professional.",
        author: "Sarah Williams",
        company: "Elite Electrical Services",
      },
      {
        quote:
          "The automated follow-up system has been a game-changer for our pest control business. We've seen a 50% increase in recurring service contracts since implementing BridgeOps.ai.",
        author: "David Rodriguez",
        company: "Guardian Pest Solutions",
      },
    ],
  }

  return <IndustryPageLayout industry={industryData} />
}
