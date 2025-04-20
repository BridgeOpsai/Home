"use client"

import CaseStudyLayout from "@/components/case-study-layout"

export default function DentalCaseStudy() {
  const caseStudyData = {
    title: "How Bright Smile Dental Reduced No-Shows by 80% and Increased Hygiene Appointments",
    industry: "Healthcare & Wellness - Dental Practice",
    color: "from-green-600 to-green-700",
    companyName: "Bright Smile Dental",
    companyDescription:
      "Bright Smile Dental is a growing dental practice with three dentists and four hygienists serving patients in the Denver metropolitan area. The practice offers comprehensive dental services including preventive care, cosmetic dentistry, and restorative treatments. Before implementing automation, they were seeing approximately 80 patients per week and struggling to manage their growing patient base efficiently.",
    problemTitle: "The Challenge: High No-Show Rates and Inconsistent Follow-Up",
    problemDescription:
      "Bright Smile Dental was facing several operational challenges that were affecting patient care and practice profitability:\n\n" +
      "• High no-show rate of 15% was creating costly gaps in the schedule\n" +
      "• Manual appointment reminders were inconsistent and time-consuming\n" +
      "• Patient recall for hygiene appointments was falling through the cracks\n" +
      "• Insurance verification was delaying patient check-in\n" +
      "• Paper-based intake forms created data entry burden and errors\n" +
      "• Staff was spending excessive time on administrative tasks instead of patient care\n\n" +
      "These challenges resulted in lost revenue, inefficient use of provider time, and decreased patient satisfaction. Dr. Michael Patel, the practice owner, recognized that these issues would prevent the practice from scaling effectively.",
    solutionTitle: "The Solution: Comprehensive Practice Automation",
    solutionDescription:
      "BridgeOps.ai implemented a tailored automation solution for Bright Smile Dental that addressed their specific challenges:\n\n" +
      "• Multi-channel appointment reminder system with confirmation requirements\n" +
      "• Automated recall system for hygiene appointments and treatment follow-ups\n" +
      "• Digital intake forms with secure patient portal access\n" +
      "• Automated insurance verification process\n" +
      "• Treatment plan follow-up sequences\n" +
      "• Review collection and reputation management\n\n" +
      "The solution was designed to integrate with their existing practice management software while adding powerful automation capabilities that streamlined administrative workflows.",
    implementationSteps: [
      "Initial practice assessment to identify key workflow bottlenecks and opportunities",
      "Custom solution design based on practice needs and existing systems",
      "Integration with their practice management software for seamless data flow",
      "Implementation of digital forms and patient portal with secure data transfer",
      "Setup of automated communication sequences for appointments and recalls",
      "Staff training on new workflows and system management",
      "Ongoing optimization based on performance metrics and feedback",
    ],
    metrics: [
      {
        value: "80%",
        label: "Reduction in No-Shows",
      },
      {
        value: "40%",
        label: "Increase in Hygiene Appointments",
      },
      {
        value: "25%",
        label: "Growth in Practice Revenue",
      },
    ],
    results: [
      "Reduced no-show rate from 15% to just 3% through effective reminders",
      "Increased hygiene appointment compliance from 60% to 84%",
      "Decreased administrative work by 30 hours per week",
      "Reduced patient check-in time from 15 minutes to 5 minutes",
      "Improved treatment plan acceptance rate from 65% to 78%",
      "Increased online reviews from 2 per month to 15 per month",
      "Enabled the practice to see 25% more patients without adding administrative staff",
    ],
    testimonial: {
      quote:
        "The automation system has transformed our practice operations. Our schedule is consistently full, our patients receive timely reminders and follow-ups, and our team can focus on providing excellent care instead of paperwork. The ROI has been remarkable – we've grown our practice by 25% while actually reducing administrative hours.",
      author: "Dr. Michael Patel",
      position: "Owner",
      company: "Bright Smile Dental",
    },
    relatedCaseStudies: [
      {
        title: "Wellness Family Practice Streamlines Patient Communication",
        industry: "Healthcare & Wellness - Medical Practice",
        slug: "healthcare-medical",
      },
      {
        title: "Mindful Therapy Services Automates Intake Process",
        industry: "Healthcare & Wellness - Mental Health",
        slug: "healthcare-therapy",
      },
      {
        title: "Active Life Chiropractic Improves Patient Retention",
        industry: "Healthcare & Wellness - Chiropractic",
        slug: "healthcare-chiropractic",
      },
    ],
  }

  return <CaseStudyLayout caseStudy={caseStudyData} />
}
