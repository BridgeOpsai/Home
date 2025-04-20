"use client"

import CaseStudyLayout from "@/components/case-study-layout"

export default function OnlineCourseCaseStudy() {
  const caseStudyData = {
    title: "How Digital Marketing Academy Increased Course Completion Rates by 60%",
    industry: "Education & Coaching - Online Course Creator",
    color: "from-indigo-600 to-indigo-700",
    companyName: "Digital Marketing Academy",
    companyDescription:
      "Digital Marketing Academy is an online education platform offering comprehensive courses in digital marketing, SEO, social media, and paid advertising. Founded by David Martinez, a former marketing agency executive, the academy serves professionals looking to enhance their skills and career prospects. Before automation, they had approximately 1,200 active students across 8 different courses, with a small team managing all aspects of the business.",
    problemTitle: "The Challenge: Low Completion Rates and Administrative Overload",
    problemDescription:
      "Digital Marketing Academy was facing several challenges that were affecting student success and business growth:\n\n" +
      "• Low course completion rates of only 25%, despite high-quality content\n" +
      "• Manual student onboarding creating inconsistent first impressions\n" +
      "• Limited ability to track student progress and provide timely support\n" +
      "• Administrative team overwhelmed with routine student inquiries\n" +
      "• Inconsistent follow-up for course graduates and potential upsells\n" +
      "• Difficulty scaling operations as student numbers increased\n\n" +
      "These challenges resulted in reduced student success, lower lifetime customer value, and operational inefficiencies. David knew that addressing these issues was crucial for the academy's reputation and growth.",
    solutionTitle: "The Solution: Comprehensive Learning Experience Automation",
    solutionDescription:
      "BridgeOps.ai implemented a tailored automation solution for Digital Marketing Academy that addressed their specific challenges:\n\n" +
      "• Sophisticated student onboarding sequence with personalized welcome and orientation\n\n" +
      "• Automated progress tracking with milestone celebrations and encouragement\n" +
      "• Intelligent engagement sequences triggered by student behavior patterns\n" +
      "• AI-powered support system for common student questions\n" +
      "• Automated certificate generation and distribution upon completion\n" +
      "• Graduate follow-up and course recommendation system\n\n" +
      "The solution was designed to integrate with their existing learning management system while adding powerful automation capabilities that enhanced the student experience and reduced administrative workload.",
    implementationSteps: [
      "Comprehensive analysis of the student journey and identification of key drop-off points",
      "Custom solution design focused on student engagement and progress tracking",
      "Integration with their learning management system for seamless data flow",
      "Implementation of automated communication sequences for different student scenarios",
      "Setup of progress tracking and milestone recognition system",
      "Training for team members on new workflows and engagement strategies",
      "Ongoing optimization based on completion metrics and student feedback",
    ],
    metrics: [
      {
        value: "60%",
        label: "Increase in Completion Rates",
      },
      {
        value: "45%",
        label: "Growth in Student Enrollment",
      },
      {
        value: "75%",
        label: "Reduction in Support Tickets",
      },
    ],
    results: [
      "Increased course completion rates from 25% to 40% through effective engagement",
      "Reduced administrative workload by 30 hours per week",
      "Automated responses handled 75% of common student inquiries",
      "Improved student satisfaction scores from 4.2 to 4.8 out of 5",
      "Increased cross-selling of additional courses by 65%",
      "Enhanced student testimonials and case studies due to better outcomes",
      "Enabled 45% growth in student enrollment without adding administrative staff",
    ],
    testimonial: {
      quote:
        "As an online course creator, managing students across multiple courses was becoming impossible. BridgeOps.ai automated everything from enrollment to completion certificates, allowing me to focus on creating better content. The impact on completion rates has been remarkable, and students consistently mention how supported they feel throughout their learning journey. This has transformed not only our operations but also our reputation in the industry.",
      author: "David Martinez",
      position: "Founder",
      company: "Digital Marketing Academy",
    },
    relatedCaseStudies: [
      {
        title: "Transformational Life Coaching Enhances Client Experience",
        industry: "Education & Coaching - Life Coach",
        slug: "education-coaching",
      },
      {
        title: "Excel Academic Tutoring Optimizes Tutor Scheduling",
        industry: "Education & Coaching - Tutoring Service",
        slug: "education-tutoring",
      },
      {
        title: "Business Growth Consultants Automates Client Onboarding",
        industry: "Education & Coaching - Business Consultant",
        slug: "education-consulting",
      },
    ],
  }

  return <CaseStudyLayout caseStudy={caseStudyData} />
}
