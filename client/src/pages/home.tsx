import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import CTASection from "@/components/CTASection";
import FounderSection from "@/components/sections/FounderSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import BackToTop from "@/components/BackToTop";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <title>ARCOLYTE TECHNOLOGIES - Solving Intelligence. Advancing Humanity.</title>
      
      <Navigation />

      <main>
        <Hero />
        <ServicesSection />
        <CTASection />
        <CaseStudiesSection />
        <FounderSection />
        <AboutSection />
        <ContactSection />

        {/* Features Hub CTA */}
        <section className="py-24 bg-muted border-t border-border">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-sans font-bold text-3xl md:text-4xl tracking-tight mb-6 text-foreground">
              Explore Our Central Hub
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
              View our complete interactive feature showcase built to demonstrate platform capabilities.
            </p>
            <Link href="/features">
              <Button size="lg" className="rounded-none bg-foreground text-background hover:bg-accent hover:text-white px-8 py-6 text-base transition-colors">
                Central Hub
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <BackToTop />

      <footer className="bg-background border-t border-border py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-6">
                <span className="font-sans font-bold text-2xl tracking-tight text-foreground">ARCOLYTE</span>
              </div>
              <p className="text-muted-foreground text-sm max-w-xs mb-6 leading-relaxed">
                Solving Intelligence. Advancing Humanity.<br />
                AI-Powered Infrastructure and Systems.
              </p>
            </div>
            
            <div className="md:col-span-4 lg:col-span-3">
              <h4 className="font-sans font-semibold text-foreground mb-6">Explore</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><Link href="/"><span className="hover:text-accent transition-colors cursor-pointer">Home</span></Link></li>
                <li><Link href="/services"><span className="hover:text-accent transition-colors cursor-pointer">Solutions</span></Link></li>
                <li><Link href="/case-studies"><span className="hover:text-accent transition-colors cursor-pointer">Research & Work</span></Link></li>
                <li><Link href="/about"><span className="hover:text-accent transition-colors cursor-pointer">About Us</span></Link></li>
                <li><Link href="/blog"><span className="hover:text-accent transition-colors cursor-pointer">Publications</span></Link></li>
              </ul>
            </div>

            <div className="md:col-span-4 lg:col-span-4">
              <h4 className="font-sans font-semibold text-foreground mb-6">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/oyebade-tobi/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-border rounded-full flex items-center justify-center hover:border-accent hover:text-accent transition-colors text-muted-foreground" aria-label="LinkedIn">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Arcolyte Technologies. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
