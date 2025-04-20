"use client"

import IndustryPageLayout from "@/components/industry-page-layout"

export default function EducationCoachingPage() {
  const industryData = {
    name: "Education & Coaching",
    description: "Online course creators, tutors, consultants, coaches",
    color: "from-indigo-600 to-indigo-700",
    heroDescription: "AI automation solutions tailored for online course creators, tutors, consultants, and coaches.",
    benefits: [
      {
        title: "Streamline Student Onboarding",
        description:
          "Automate the enrollment process, welcome sequences, and initial assessments to start client relationships right.",
      },
      {
        title: "Simplify Scheduling",
        description: "Automated booking systems that sync with your calendar and send reminders to reduce no-shows.",
      },
      {
        title: "Deliver Consistent Learning Experiences",
        description:
          "Automated lesson delivery, resource distribution, and progress tracking for consistent client experiences.",
      },
      {
        title: "Improve Engagement and Completion",
        description:
          "Automated check-ins, encouragement messages, and milestone celebrations to keep students engaged.",
      },
      {
        title: "Gather Actionable Feedback",
        description:
          "Automated feedback collection after sessions or course modules to continuously improve your offerings.",
      },
      {
        title: "Scale Your Business",
        description:
          "Automated upsell and cross-sell sequences to increase client lifetime value and business revenue.",
      },
    ],
    useCases: [
      {
        title: "Online Course Creator Increases Completion Rates by 60%",
        description:
          "An online course creator implemented our engagement automation system with progress tracking and encouragement messages, increasing course completion rates from 25% to 40%.",
      },
      {
        title: "Business Coach Automates Client Onboarding",
        description:
          "A business coach automated their client onboarding process, including intake forms, initial assessments, and resource delivery, saving 5 hours per new client while improving the client experience.",
      },
      {
        title: "Tutoring Service Reduces Administrative Work by 80%",
        description:
          "A tutoring service automated their scheduling, reminders, session notes, and billing processes, allowing tutors to focus on teaching rather than administration.",
      },
      {
        title: "Consultant Implements Automated Follow-Up System",
        description:
          "A consultant implemented an automated follow-up system for prospects and past clients, resulting in a 35% increase in new business and a 25% increase in repeat engagements.",
      },
    ],
    automations: [
      "Client onboarding and intake processes",
      "Appointment scheduling and reminders",
      "Course content delivery and drip scheduling",
      "Progress tracking and milestone celebrations",
      "Feedback collection and analysis",
      "Resource distribution and access management",
      "Student engagement and retention sequences",
      "Billing and payment processing",
      "Certificate generation and distribution",
      "Upsell and cross-sell campaigns",
      "Alumni engagement and referral programs",
      "Performance analytics and business insights",
    ],
    testimonials: [
      {
        quote:
          "As an online course creator, managing students across multiple courses was becoming impossible. BridgeOps.ai automated everything from enrollment to completion certificates, allowing me to focus on creating better content.",
        author: "David Martinez",
        company: "Digital Marketing Academy",
      },
      {
        quote:
          "The automated engagement sequences have transformed my coaching practice. My clients are more engaged, complete more assignments, and achieve better results, which has led to more referrals.",
        author: "Sarah Johnson",
        company: "Transformational Life Coaching",
      },
      {
        quote:
          "Managing a team of tutors used to take 20+ hours of my week. Now with automated scheduling, session notes, and billing, I spend less than 5 hours on administration and can focus on growing the business.",
        author: "Michael Lee",
        company: "Excel Academic Tutoring",
      },
    ],
  }

  return <IndustryPageLayout industry={industryData} />
}
