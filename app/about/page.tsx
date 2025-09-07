import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About BridgeOps.ai</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Transforming businesses through intelligent automation and AI-powered solutions
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At BridgeOps.ai, we believe that every business deserves to operate at peak efficiency. Our mission is
                to bridge the gap between traditional business processes and cutting-edge automation technology,
                empowering organizations to focus on what matters most - growth and innovation.
              </p>
              <p className="text-lg text-gray-600">
                We specialize in creating custom automation solutions that streamline workflows, reduce manual tasks,
                and unlock new levels of productivity across industries.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose BridgeOps.ai?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Custom automation solutions tailored to your business</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Expert team with proven track record</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Comprehensive support and training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>ROI-focused implementation approach</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Meet the visionary behind BridgeOps.ai</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">ME</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Maury Eldeiry</h3>
              <p className="text-blue-600 font-semibold mb-4">Founder & CEO</p>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Maury founded BridgeOps.ai with a vision to democratize business automation. With extensive experience
                in technology and business operations, he leads our team in delivering innovative solutions that drive
                real business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every project, delivering solutions that exceed expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Partnership</h3>
              <p className="text-gray-600">
                We work as true partners with our clients, understanding their unique challenges and goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace cutting-edge technology to create innovative solutions for complex business challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how BridgeOps.ai can help automate your processes and drive growth.
          </p>
          <Link href="/book-call">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Schedule Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
