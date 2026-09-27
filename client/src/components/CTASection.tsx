import React from "react";

export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-foreground text-background text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
        Ready to Build Something That Works?
      </h2>
      <p className="text-lg opacity-80 mb-8 max-w-xl mx-auto">
        Let's automate your workflow and scale your business with practical, AI-powered solutions.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-black text-white hover:bg-zinc-800 dark:bg-black dark:text-white dark:border dark:border-zinc-800 dark:hover:bg-zinc-900 rounded-none font-semibold transition-colors text-base"
        >
          Book a Free Consultation
        </a>
        <a
          href="/services"
          className="inline-block px-8 py-4 border border-background/60 text-background rounded-none font-medium hover:bg-background hover:text-foreground transition-colors text-base"
        >
          View Our Services
        </a>
      </div>
    </section>
  );
}
