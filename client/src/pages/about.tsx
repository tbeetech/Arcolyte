import Navigation from "@/components/Navigation";
import AboutSection from "@/components/sections/AboutSection";
import FounderSection from "@/components/sections/FounderSection";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-24">
        <div className="container mx-auto px-6 text-center mb-4 pt-12">
          <h1 className="font-bold text-4xl md:text-5xl uppercase tracking-tight mb-6">About ARCOLYTE TECHNOLOGIES</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A digital agency built on clarity, delivery, and founder-level attention. Here's who we are and how we work.
          </p>
        </div>
        <AboutSection />
        <FounderSection />
        <div className="py-24 text-center bg-muted border-t border-border">
          <h2 className="font-bold text-2xl mb-4 tracking-tight">Want to work with us?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Let's start with a conversation.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-black text-white hover:bg-zinc-800 dark:bg-black dark:text-white dark:border dark:border-zinc-800 dark:hover:bg-zinc-900 font-semibold px-8 py-6 rounded-none transition-colors">
              Contact Us
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
