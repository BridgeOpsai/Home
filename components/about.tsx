import { AnimateOnScroll } from "./ui/animate-on-scroll"

export default function About() {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose BridgeOps.ai?
            </p>
            <div className="mt-6 max-w-3xl mx-auto text-xl text-gray-500 lg:mx-auto">
              <p>
                You've heard about ChatGPT, but have you used AI to revolutionize your business tasks? BridgeOps.ai
                crafts personalized AI-driven automation workflows designed specifically for small to medium-sized
                businesses. Enhance efficiency, lower costs, and amplify your sales potential with custom-built
                solutions.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
