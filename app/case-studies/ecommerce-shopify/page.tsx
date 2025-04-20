"use client"

import CaseStudyLayout from "@/components/case-study-layout"

export default function ShopifyCaseStudy() {
  const caseStudyData = {
    title: "How Modern Home Goods Recovered 15% of Abandoned Carts and Scaled Operations",
    industry: "E-Commerce & Retail - Shopify Store",
    color: "from-red-600 to-red-700",
    companyName: "Modern Home Goods",
    companyDescription:
      "Modern Home Goods is an e-commerce business selling contemporary furniture and home accessories through their Shopify store. Based in Austin, Texas, they offer a curated selection of mid-century modern and contemporary designs. Before automation, they were processing approximately 500 orders per month with a team of 4 people handling everything from customer service to order fulfillment.",
    problemTitle: "The Challenge: Manual Processes Limiting Growth",
    problemDescription:
      "Modern Home Goods was experiencing rapid growth but facing operational challenges that were limiting their ability to scale:\n\n" +
      "• High cart abandonment rate with no systematic recovery process\n" +
      "• Manual order processing and fulfillment creating bottlenecks\n" +
      "• Customer service team overwhelmed with routine inquiries\n" +
      "• Inventory management across multiple channels causing stockouts and overselling\n" +
      "• Inconsistent follow-up for reviews and repeat purchases\n" +
      "• Limited customer data utilization for marketing purposes\n\n" +
      "These challenges resulted in lost sales opportunities, inefficient operations, and customer service delays. Owner Jessica Kim knew they needed better systems to support their growth trajectory.",
    solutionTitle: "The Solution: End-to-End E-Commerce Automation",
    solutionDescription:
      "BridgeOps.ai implemented a comprehensive automation solution tailored to Modern Home Goods' specific needs:\n\n" +
      "• Sophisticated abandoned cart recovery sequences with personalized messaging\n" +
      "• Automated order processing and fulfillment workflow\n" +
      "• AI-powered customer service automation for common inquiries\n" +
      "• Real-time inventory synchronization across all sales channels\n" +
      "• Post-purchase follow-up sequences for reviews and cross-selling\n" +
      "• Customer segmentation and targeted marketing automation\n\n" +
      "The solution was designed to integrate seamlessly with their Shopify store and other systems while adding powerful automation capabilities that streamlined operations across the business.",
    implementationSteps: [
      "Comprehensive analysis of existing workflows and identification of key bottlenecks",
      "Custom solution design focused on order processing and customer communication",
      "Integration with Shopify and other existing systems",
      "Implementation of abandoned cart recovery and post-purchase sequences",
      "Setup of inventory synchronization across all sales channels",
      "Training for team members on new workflows and systems",
      "Ongoing optimization based on performance metrics and feedback",
    ],
    metrics: [
      {
        value: "15%",
        label: "Abandoned Cart Recovery",
      },
      {
        value: "65%",
        label: "Reduction in Customer Service Time",
      },
      {
        value: "40%",
        label: "Increase in Monthly Orders",
      },
    ],
    results: [
      "Recovered 15% of abandoned carts, adding $12,000 in monthly revenue",
      "Reduced order processing time from 25 minutes to 5 minutes per order",
      "Automated responses handled 65% of customer service inquiries",
      "Eliminated overselling issues through real-time inventory synchronization",
      "Increased review collection rate from 3% to 18% of orders",
      "Improved repeat purchase rate by 35% through targeted follow-up",
      "Enabled 40% growth in order volume without adding staff",
    ],
    testimonial: {
      quote:
        "Our Shopify store was growing faster than we could handle manually. BridgeOps.ai automated our order processing, inventory management, and customer communications, allowing us to scale without hiring additional staff. The abandoned cart recovery automation alone has paid for the entire system many times over. We're now able to focus on product development and growth strategy instead of getting bogged down in day-to-day operations.",
      author: "Jessica Park",
      position: "Founder & CEO",
      company: "Modern Home Goods",
    },
    relatedCaseStudies: [
      {
        title: "Athletic Lifestyle Brand Optimizes Multi-Channel Sales",
        industry: "E-Commerce & Retail - Apparel",
        slug: "ecommerce-apparel",
      },
      {
        title: "Wellness Essentials Co. Streamlines Subscription Management",
        industry: "E-Commerce & Retail - Subscription Box",
        slug: "ecommerce-subscription",
      },
      {
        title: "Vintage Finds Marketplace Automates Seller Management",
        industry: "E-Commerce & Retail - Marketplace",
        slug: "ecommerce-marketplace",
      },
    ],
  }

  return <CaseStudyLayout caseStudy={caseStudyData} />
}
