"use client"

import IndustryPageLayout from "@/components/industry-page-layout"

export default function HospitalityFoodPage() {
  const industryData = {
    name: "Hospitality & Food",
    description: "Restaurants, food trucks, meal prep services, catering companies",
    color: "from-orange-600 to-orange-700",
    heroDescription:
      "AI automation solutions tailored for restaurants, food trucks, meal prep services, and catering companies.",
    benefits: [
      {
        title: "Streamline Inventory Management",
        description:
          "Automate inventory tracking, ordering, and waste reduction to optimize food costs and prevent stockouts.",
      },
      {
        title: "Simplify Staff Scheduling",
        description:
          "Create optimal staff schedules based on forecasted demand, employee availability, and labor costs.",
      },
      {
        title: "Enhance Customer Engagement",
        description:
          "Automated marketing campaigns, loyalty programs, and personalized offers to keep customers coming back.",
      },
      {
        title: "Optimize Online Ordering",
        description:
          "Seamless integration with delivery platforms and your own ordering system to maximize revenue streams.",
      },
      {
        title: "Improve Operational Efficiency",
        description:
          "Streamline kitchen operations, order fulfillment, and delivery coordination to reduce errors and delays.",
      },
      {
        title: "Gain Business Insights",
        description:
          "Access real-time analytics on sales, menu performance, customer preferences, and operational metrics.",
      },
    ],
    useCases: [
      {
        title: "Restaurant Reduces Food Waste by 35%",
        description:
          "A restaurant implemented our inventory management system with predictive ordering and reduced their food waste by 35%, resulting in significant cost savings and improved sustainability.",
      },
      {
        title: "Food Truck Optimizes Locations Based on Data",
        description:
          "A food truck business used our location analytics and automated scheduling system to optimize their daily locations, resulting in a 28% increase in average daily revenue.",
      },
      {
        title: "Meal Prep Service Automates Customer Communication",
        description:
          "A meal prep service implemented automated order confirmations, delivery updates, and reorder reminders, improving customer satisfaction and increasing repeat orders by 45%.",
      },
      {
        title: "Catering Company Streamlines Quote Process",
        description:
          "A catering company automated their quote generation and follow-up process, reducing response time from days to hours and increasing their conversion rate by 30%.",
      },
    ],
    automations: [
      "Inventory management and automated ordering",
      "Staff scheduling and time tracking",
      "Customer reservation and waitlist management",
      "Online ordering and delivery coordination",
      "Customer loyalty programs and marketing",
      "Menu performance analysis and optimization",
      "Supplier management and order tracking",
      "Recipe costing and menu pricing",
      "Customer feedback collection and analysis",
      "Sales forecasting and business planning",
      "Employee training and performance tracking",
      "Financial reporting and analysis",
    ],
    testimonials: [
      {
        quote:
          "The inventory management system has been a game-changer for our restaurant. We've reduced food costs by 4% while ensuring we never run out of key ingredients during service.",
        author: "Chef James Wilson",
        company: "Harvest Table Restaurant",
      },
      {
        quote:
          "As a meal prep service, coordinating hundreds of custom orders was a logistical nightmare. BridgeOps.ai has automated our entire workflow from order to delivery, allowing us to scale without adding administrative staff.",
        author: "Maria Rodriguez",
        company: "Fresh Prep Meals",
      },
      {
        quote:
          "The staff scheduling automation has eliminated the Sunday night headache of creating next week's schedule. It's saved me hours each week while creating better schedules that my team actually prefers.",
        author: "Thomas Lee",
        company: "Urban Street Tacos",
      },
    ],
  }

  return <IndustryPageLayout industry={industryData} />
}
