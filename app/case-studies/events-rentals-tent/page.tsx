"use client"

import CaseStudyLayout from "@/components/case-study-layout"

export default function TentRentalCaseStudy() {
  const caseStudyData = {
    title: "How Premier Party Rentals Increased Event Capacity by 40%",
    industry: "Events & Rentals - Tent Company",
    color: "from-purple-600 to-purple-700",
    companyName: "Premiere Party Rentals",
    companyDescription:
      "Premier Party Rentals is a full-service event rental company specializing in tents, tables, chairs, linens, and other event essentials. Based in Chicago, they serve weddings, corporate events, and private parties throughout the Midwest. Before automation, they managed approximately 200 events per year with a team of 15 staff members and seasonal workers.",
    problemTitle: "The Challenge: Complex Logistics and Inventory Management",
    problemDescription:
      "Premier Party Rentals was facing significant operational challenges that were limiting their growth and profitability:\n\n" +
      "• Manual booking and inventory management led to double-bookings and equipment conflicts\n" +
      "• Complex logistics for delivery, setup, and pickup were difficult to coordinate\n" +
      "• Staff was spending excessive time on phone calls and emails with clients\n" +
      "• Invoicing and payment collection was inconsistent and time-consuming\n" +
      "• Seasonal scaling was difficult due to training requirements for temporary staff\n\n" +
      "These challenges resulted in missed opportunities, customer disappointment, and operational inefficiencies during their busiest seasons. Owner Jennifer Martinez knew they needed a better system to scale their business.",
    solutionTitle: "The Solution: End-to-End Event Automation",
    solutionDescription:
      "BridgeOps.ai developed a comprehensive automation solution tailored to Premier Party Rentals' specific needs:\n\n" +
      "• Real-time inventory management system with conflict prevention\n" +
      "• Automated booking and confirmation process with digital contracts\n" +
      "• Intelligent delivery scheduling and crew assignment\n" +
      "• Automated client communications for all stages of the event process\n" +
      "• Digital payment processing and invoice management\n" +
      "• Post-event feedback collection and review management\n\n" +
      "The system was designed to be intuitive for both office staff and field crews, with mobile access for on-site updates and information.",
    implementationSteps: [
      "Comprehensive analysis of existing workflows and identification of key bottlenecks",
      "Custom solution design focused on inventory management and logistics coordination",
      "Data migration and setup of the inventory database with all equipment specifications",
      "Implementation of the booking and scheduling system with real-time availability",
      "Training for office staff and crew leaders on the new system",
      "Gradual rollout starting with smaller events before peak season",
      "Continuous refinement based on user feedback and performance metrics",
    ],
    metrics: [
      {
        value: "40%",
        label: "Increase in Event Capacity",
      },
      {
        value: "65%",
        label: "Reduction in Scheduling Errors",
      },
      {
        value: "28%",
        label: "Increase in Profit Margin",
      },
    ],
    results: [
      "Eliminated double-bookings and inventory conflicts completely",
      "Reduced delivery scheduling time from 2 hours to 15 minutes per event",
      "Decreased client communication time by 70% through automated updates",
      "Improved crew efficiency with clear instructions and optimized routes",
      "Reduced payment collection time from 45 days to 12 days on average",
      "Increased customer satisfaction scores from 4.3 to 4.9 out of 5",
      "Enabled 40% growth in event capacity without adding office staff",
    ],
    testimonial: {
      quote:
        "BridgeOps.ai completely reshaped our approach. We handle twice as many customers effortlessly, with dramatically reduced costs.",
      author: "Mike Elmasry",
      position: "Owner",
      company: "Suffolk Tent & Party Rentals",
    },
    relatedCaseStudies: [
      {
        title: "Elegant Eats Catering Streamlines Event Management",
        industry: "Events & Rentals - Catering",
        slug: "events-rentals-catering",
      },
      {
        title: "Dream Day Wedding Planners Automates Client Communication",
        industry: "Events & Rentals - Wedding Planning",
        slug: "events-rentals-wedding",
      },
      {
        title: "Rhythm Masters Entertainment Optimizes DJ Scheduling",
        industry: "Events & Rentals - Entertainment",
        slug: "events-rentals-entertainment",
      },
    ],
  }

  return <CaseStudyLayout caseStudy={caseStudyData} />
}
