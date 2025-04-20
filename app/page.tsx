import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import CaseStudy from "@/components/case-study"
import Testimonial from "@/components/testimonial"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import DemoVideoSection from "@/components/demo-video-section"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <DemoVideoSection />
        <CaseStudy />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
