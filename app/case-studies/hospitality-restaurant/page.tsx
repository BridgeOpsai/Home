"use client"

import CaseStudyLayout from "@/components/case-study-layout"

export default function RestaurantCaseStudy() {
  const caseStudyData = {
    title: "How Harvest Table Restaurant Reduced Food Waste by 35% and Optimized Operations",
    industry: "Hospitality & Food - Restaurant",
    color: "from-orange-600 to-orange-700",
    companyName: "Harvest Table Restaurant",
    companyDescription:
      "Harvest Table is a farm-to-table restaurant located in Portland, Oregon, serving locally-sourced seasonal cuisine. With 80 seats, a full bar, and a staff of 25, they serve approximately 1,500 customers weekly across lunch and dinner service. The restaurant prides itself on sustainability and quality ingredients, but was struggling with operational inefficiencies that were affecting profitability.",
    problemTitle: "The Challenge: Inefficient Inventory and Labor Management",
    problemDescription:
      "Harvest Table was facing several operational challenges that were impacting their bottom line:\n\n" +
      "• High food waste due to imprecise ordering and inventory management\n" +
      "• Inefficient staff scheduling leading to overstaffing during slow periods\n" +
      "• Manual reservation management causing occasional double-bookings\n" +
      "• Inconsistent vendor ordering processes and delivery tracking\n" +
      "• Time-consuming end-of-day reporting and reconciliation\n" +
      "• Limited customer data collection for marketing purposes\n\n" +
      "These challenges resulted in unnecessary costs, reduced profit margins, and missed opportunities for growth. Chef James Wilson knew that addressing these operational inefficiencies was crucial for the restaurant's long-term success.",
    solutionTitle: "The Solution: Integrated Restaurant Management Automation",
    solutionDescription:
      "BridgeOps.ai developed a comprehensive automation solution tailored to Harvest Table's specific needs:\n\n" +
      "• AI-powered inventory management with predictive ordering based on sales forecasts\n" +
      "• Intelligent staff scheduling based on historical sales data and reservations\n" +
      "• Digital reservation system with automated confirmations and waitlist management\n" +
      "• Streamlined vendor ordering and delivery tracking\n" +
      "• Automated end-of-day reporting and financial reconciliation\n" +
      "• Customer relationship management with personalized marketing\n\n" +
      "The solution was designed to integrate with their existing POS system while adding powerful automation capabilities that streamlined operations across the restaurant.",
    implementationSteps: [
      "Comprehensive analysis of existing workflows and identification of key inefficiencies",
      "Custom solution design focused on inventory management and staff scheduling",
      "Integration with their POS system for seamless data flow",
      "Implementation of inventory tracking and vendor management systems",
      "Setup of staff scheduling algorithms based on historical data",
      "Training for management and staff on new systems and processes",
      "Ongoing optimization based on performance metrics and feedback",
    ],
    metrics: [
      {
        value: "35%",
        label: "Reduction in Food Waste",
      },
      {
        value: "22%",
        label: "Decrease in Labor Costs",
      },
      {
        value: "18%",
        label: "Increase in Profit Margin",
      },
    ],
    results: [
      "Reduced food waste from 12% to 7.8% of food costs through precise ordering",
      "Optimized staff scheduling reduced labor costs while maintaining service quality",
      "Eliminated reservation conflicts and improved table turnover rates",
      "Streamlined vendor management reduced order errors by 85%",
      "Automated reporting saved management 15 hours per week",
      "Personalized marketing increased repeat customer visits by 28%",
      "Overall profit margin improved from 8% to 18% despite rising food costs",
    ],
    testimonial: {
      quote:
        "The inventory management system has been a game-changer for our restaurant. We've reduced food waste dramatically while ensuring we never run out of key ingredients. The staff scheduling automation has eliminated the Sunday night headache of creating next week's schedule. It's saved me hours each week while creating better schedules that my team actually prefers. The entire system has transformed our operations and significantly improved our bottom line.",
      author: "Chef James Rivera",
      position: "Owner & Executive Chef",
      company: "Harvest Table Restaurant",
    },
    relatedCaseStudies: [
      {
        title: "Fresh Prep Meals Streamlines Order Fulfillment",
        industry: "Hospitality & Food - Meal Prep Service",
        slug: "hospitality-meal-prep",
      },
      {
        title: "Urban Street Tacos Optimizes Food Truck Operations",
        industry: "Hospitality & Food - Food Truck",
        slug: "hospitality-food-truck",
      },
      {
        title: "Elegant Eats Catering Automates Event Management",
        industry: "Hospitality & Food - Catering",
        slug: "hospitality-catering",
      },
    ],
  }

  return <CaseStudyLayout caseStudy={caseStudyData} />
}
