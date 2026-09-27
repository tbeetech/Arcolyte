import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-background text-foreground pt-20 pb-16 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 z-10">
        <div className="max-w-5xl">
          <div className="mb-6 flex items-center gap-4">
            <img src="/arcolytelogo.png" alt="Arcolyte Technologies" className="h-12 w-auto object-contain" />
            <div className="h-px bg-border flex-1 max-w-[100px]" />
          </div>

          <h1 className="font-sans font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-[1.05] mb-8 text-foreground">
            Solving Intelligence.<br />
            <span className="text-foreground">Advancing Humanity.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-foreground max-w-3xl mb-12 leading-relaxed">
            We are building safe, robust AI systems and scalable automation infrastructure to empower businesses worldwide. Our mission is to accelerate the transition to an intelligent future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/services">
              <Button
                size="lg"
                className="rounded-none bg-foreground text-background hover:bg-accent hover:text-white px-8 py-6 text-base transition-colors"
              >
                Explore our solutions
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="rounded-none border-border bg-transparent text-foreground hover:bg-muted px-8 py-6 text-base transition-colors"
              >
                Learn about our mission
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Abstract structural graphic element (minimalist) */}
      <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-foreground">
          <polygon points="100,0 100,100 0,100" />
        </svg>
      </div>
    </section>
  );
}
