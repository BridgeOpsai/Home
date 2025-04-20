"use client"

import IndustryPageLayout from "@/components/industry-page-layout"

export default function EcommerceRetailPage() {
  const industryData = {
    name: "E-Commerce & Retail",
    description: "Online stores, boutique brands, Shopify sellers",
    color: "from-red-600 to-red-700",
    heroDescription: "AI automation solutions tailored for online stores, boutique brands, and Shopify sellers.",
    benefits: [
      {
        title: "Streamline Order Processing",
        description: "Automate order fulfillment, shipping, and tracking updates to reduce errors and save time.",
      },
      {
        title: "Recover Abandoned Carts",
        description: "Automated follow-up sequences to recover abandoned carts and increase conversion rates.",
      },
      {
        title: "Enhance Customer Support",
        description: "Automated responses to common questions and streamlined ticket management for faster resolution.",
      },
      {
        title: "Optimize Inventory Management",
        description:
          "Automated inventory tracking, reordering, and multi-channel synchronization to prevent stockouts.",
      },
      {
        title: "Personalize Customer Experience",
        description:
          "Tailored product recommendations and personalized marketing based on customer behavior and preferences.",
      },
      {
        title: "Boost Post-Purchase Engagement",
        description:
          "Automated review requests, cross-sell recommendations, and loyalty programs to increase customer lifetime value.",
      },
    ],
    useCases: [
      {
        title: "Boutique Brand Increases Review Collection by 300%",
        description:
          "A boutique clothing brand implemented our automated review request system and increased their product review collection from 5% of orders to 20%, significantly improving social proof and conversion rates.",
      },
      {
        title: "Shopify Store Recovers 15% of Abandoned Carts",
        description:
          "An online Shopify store implemented our abandoned cart recovery automation and successfully recovered 15% of abandoned carts, adding thousands in monthly revenue with zero additional effort.",
      },
      {
        title: "Multi-Channel Retailer Automates Inventory Syncing",
        description:
          "A retailer selling across multiple platforms implemented our inventory synchronization system, eliminating overselling issues and reducing manual inventory updates by 95%.",
      },
      {
        title: "Subscription Box Service Automates Customer Journey",
        description:
          "A subscription box company automated their entire customer journey from sign-up to renewal, reducing churn by 25% and increasing customer satisfaction scores.",
      },
    ],
    automations: [
      "Order processing and fulfillment",
      "Shipping label generation and tracking updates",
      "Inventory management across multiple channels",
      "Abandoned cart recovery sequences",
      "Customer support ticket management",
      "Product review collection and management",
      "Personalized email marketing campaigns",
      "Customer segmentation and targeting",
      "Loyalty program management",
      "Product recommendation engines",
      "Return and exchange processing",
      "Sales and inventory analytics",
    ],
    testimonials: [
      {
        quote:
          "Our Shopify store was growing faster than we could handle manually. BridgeOps.ai automated our order processing, inventory management, and customer communications, allowing us to scale without hiring additional staff.",
        author: "Jessica Kim",
        company: "Modern Home Goods",
      },
      {
        quote:
          "The abandoned cart recovery automation alone has paid for the entire system many times over. We're recovering sales that would have been completely lost otherwise.",
        author: "Ryan Thompson",
        company: "Athletic Lifestyle Brand",
      },
      {
        quote:
          "Managing inventory across our website, Amazon, and physical store was a constant headache. Now it's all synchronized automatically, saving us countless hours and preventing customer disappointment from out-of-stock items.",
        author: "Amanda Chen",
        company: "Wellness Essentials Co.",
      },
    ],
  }

  return <IndustryPageLayout industry={industryData} />
}
