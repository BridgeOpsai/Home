"use client"

import IndustryPageLayout from "@/components/industry-page-layout"

export default function EventsRentalsPage() {
  const industryData = {
    name: "Events & Rentals",
    description: "Party rentals, tent companies, catering, wedding planners, DJs",
    color: "from-purple-600 to-purple-700",
    heroDescription:
      "AI automation solutions tailored for party rentals, tent companies, catering, wedding planners, and DJs.",
    benefits: [
      {
        title: "Streamline Complex Booking Processes",
        description:
          "Simplify the management of multiple events, equipment, and staff with intelligent scheduling systems.",
      },
      {
        title: "Reduce Double-Bookings and Conflicts",
        description: "Eliminate scheduling errors with automated inventory tracking and availability management.",
      },
      {
        title: "Optimize Delivery Routes and Timing",
        description: "Maximize efficiency with AI-powered delivery scheduling and route optimization.",
      },
      {
        title: "Improve Client Communication",
        description: "Keep clients informed with automated updates, reminders, and post-event follow-ups.",
      },
      {
        title: "Simplify Complex Invoicing",
        description:
          "Automatically generate detailed invoices that account for all equipment, services, and special requests.",
      },
      {
        title: "Build Your Reputation",
        description:
          "Collect and showcase reviews with automated post-event feedback requests and testimonial collection.",
      },
    ],
    useCases: [
      {
        title: "Tent Rental Company Handles 40% More Events with Same Staff",
        description:
          "A tent rental company implemented our automation system to streamline bookings, delivery scheduling, and crew assignments. They were able to increase their event capacity by 40% without adding additional office staff.",
      },
      {
        title: "Catering Business Reduces Quote Generation Time by 75%",
        description:
          "By automating their quote generation process, a catering company reduced the time spent creating custom proposals from 2 hours to just 30 minutes, allowing them to respond to more inquiries and win more business.",
      },
      {
        title: "Party Rental Company Eliminates Inventory Conflicts",
        description:
          "A party rental business implemented our inventory management system and eliminated double-bookings of equipment, resulting in happier customers and saving thousands in rush replacement rentals.",
      },
      {
        title: "Wedding Planner Automates Client Communication",
        description:
          "A wedding planning business implemented automated communication sequences for their clients, ensuring consistent updates and reminders. This reduced client anxiety and saved the planner 15+ hours per week in email and phone time.",
      },
    ],
    automations: [
      "Event booking and scheduling management",
      "Inventory tracking and availability management",
      "Delivery and pickup scheduling",
      "Route optimization for delivery crews",
      "Automated quote generation and contracts",
      "Client communication and updates",
      "Vendor coordination and management",
      "Payment processing and invoicing",
      "Post-event feedback collection",
      "Review management and testimonial gathering",
      "Staff scheduling and assignment",
      "Event timeline creation and management",
    ],
    testimonials: [
      {
        quote:
          "Our rental business used to be chaos during peak season. Now with BridgeOps.ai, we can handle twice the volume with half the stress. The automated inventory management alone has been worth the investment.",
        author: "Jennifer Martinez",
        company: "Premiere Party Rentals",
      },
      {
        quote:
          "As a DJ service, keeping track of equipment, events, and client preferences was overwhelming. The automation system has transformed our business, allowing us to focus on performance rather than paperwork.",
        author: "Marcus Thompson",
        company: "Rhythm Masters Entertainment",
      },
      {
        quote:
          "The automated follow-up system has dramatically increased our review collection. We're now the highest-rated catering company in our area, which has brought in so much new business.",
        author: "Lisa Chen",
        company: "Elegant Eats Catering",
      },
    ],
  }

  return <IndustryPageLayout industry={industryData} />
}
