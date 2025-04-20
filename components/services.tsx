import { Workflow, Sparkles, LinkIcon, HeadphonesIcon } from "lucide-react"
import { AnimateOnScroll } from "./ui/animate-on-scroll"

export default function Services() {
  const services = [
    {
      name: "Effortless Workflow Automation",
      description: "Automate routine tasks and free your team to focus on growth and innovation.",
      icon: Workflow,
    },
    {
      name: "Tailored AI Integration",
      description: "AI tools uniquely designed for your business needs and processes.",
      icon: Sparkles,
    },
    {
      name: "Unified Tool Integration",
      description: "Seamlessly connect tools such as Stripe, Airtable, and more to supercharge your workflows.",
      icon: LinkIcon,
    },
    {
      name: "24/7 Dedicated Support",
      description: "Continuous, reliable support to help you adjust, improve, and scale your automations.",
      icon: HeadphonesIcon,
    },
  ]

  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our AI-Powered Solutions
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <AnimateOnScroll key={service.name} animation="fade-up" delay={0.1 * index}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-[220px]">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">{service.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{service.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
