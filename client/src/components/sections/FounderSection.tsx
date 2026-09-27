import { Twitter } from "lucide-react";

export default function FounderSection() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-6 tracking-tight text-foreground uppercase">
            Founder
          </h2>
          <p className="text-foreground max-w-2xl mx-auto text-lg">
            The person building the products and driving every client's success.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Founder card */}
          <div className="border border-border p-8 bg-card flex flex-col hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 bg-foreground flex items-center justify-center shrink-0 rounded-none">
                <span className="font-bold text-background text-2xl tracking-tighter">OT</span>
              </div>
              <div>
                <h3 className="font-bold text-xl text-foreground">Tobi Oyebade</h3>
                <p className="text-foreground text-sm font-medium">Founder & Lead Engineer</p>
              </div>
            </div>

            <p className="text-foreground leading-relaxed text-base flex-1">
              Tech entrepreneur and digital engineer with deep experience in AI, automation, and building
              web and mobile products. Tobi leads the team and takes founder-level ownership on
              every project ARCOLYTE TECHNOLOGIES handles.
            </p>

            <a
              href="https://www.linkedin.com/in/oyebade-tobi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors text-sm font-medium w-fit"
              data-testid="founder-linkedin-link"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
