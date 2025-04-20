"use client"

import IndustryPageLayout from "@/components/industry-page-layout"

export default function HealthcareWellnessPage() {
  const industryData = {
    name: "Healthcare & Wellness",
    description: "Clinics, dentists, therapists, chiropractors, wellness coaches",
    color: "from-green-600 to-green-700",
    heroDescription:
      "AI automation solutions tailored for clinics, dentists, therapists, chiropractors, and wellness coaches.",
    benefits: [
      {
        title: "Reduce No-Shows and Cancellations",
        description:
          "Automated appointment reminders and easy rescheduling options significantly decrease missed appointments.",
      },
      {
        title: "Streamline Patient Intake",
        description: "Digital intake forms and automated information collection save staff time and improve accuracy.",
      },
      {
        title: "Simplify Insurance Verification",
        description: "Automate the process of verifying patient insurance coverage before appointments.",
      },
      {
        title: "Improve Patient Communication",
        description:
          "Keep patients informed with automated appointment confirmations, follow-ups, and care instructions.",
      },
      {
        title: "Optimize Scheduling",
        description: "Fill gaps in your schedule with intelligent booking systems that maximize practitioner time.",
      },
      {
        title: "Enhance Patient Retention",
        description:
          "Automated follow-up sequences ensure patients complete treatment plans and return for regular care.",
      },
    ],
    useCases: [
      {
        title: "Dental Practice Reduces No-Shows by 80%",
        description:
          "A dental practice implemented our automated reminder system with confirmation requirements and saw their no-show rate drop from 15% to just 3%, significantly improving productivity and revenue.",
      },
      {
        title: "Therapy Practice Automates 95% of Intake Paperwork",
        description:
          "A mental health practice digitized and automated their intake process, saving each therapist 5+ hours per week and improving the accuracy of patient information.",
      },
      {
        title: "Chiropractic Clinic Increases Patient Retention by 45%",
        description:
          "By implementing automated treatment plan reminders and follow-ups, a chiropractic clinic increased the percentage of patients who completed their full recommended treatment plan from 50% to 72%.",
      },
      {
        title: "Wellness Center Streamlines Class Booking and Reminders",
        description:
          "A wellness center automated their class booking, payment, and reminder system, increasing class attendance by 35% and freeing up staff to focus on client experience.",
      },
    ],
    automations: [
      "Appointment scheduling and management",
      "Automated appointment reminders and confirmations",
      "Digital intake forms and documentation",
      "Insurance verification and benefits checking",
      "Patient communication and follow-ups",
      "Treatment plan adherence reminders",
      "Prescription refill requests and tracking",
      "Medical records management and updates",
      "Billing and payment processing",
      "Review collection and reputation management",
      "Staff scheduling and resource allocation",
      "Reporting and analytics for practice management",
    ],
    testimonials: [
      {
        quote:
          "Our clinic has saved over 30 hours per week in administrative tasks since implementing BridgeOps.ai. Our staff is happier, our patients receive better communication, and our schedule is consistently full.",
        author: "Dr. Robert Chen",
        company: "Wellness Family Practice",
      },
      {
        quote:
          "As a solo practitioner therapist, I was drowning in paperwork. Now, my intake forms, notes, and follow-ups are all automated. I can focus on my patients instead of administration.",
        author: "Dr. Emily Johnson",
        company: "Mindful Therapy Services",
      },
      {
        quote:
          "The automated recall system has transformed our dental practice. We've seen a 40% increase in hygiene appointments because patients no longer fall through the cracks.",
        author: "Dr. Michael Patel",
        company: "Bright Smile Dental",
      },
    ],
  }

  return <IndustryPageLayout industry={industryData} />
}
