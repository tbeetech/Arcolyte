import { useState } from "react";
import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const tiers = [
  {
    name: "Starter",
    price: "$500",
    period: "/project",
    highlight: false,
    features: [
      { text: "1 Service Vertical", included: true },
      { text: "Basic Automation Setup", included: true },
      { text: "Email Support", included: true },
      { text: "AI Integrations", included: false },
      { text: "Dedicated Strategist", included: false },
      { text: "Custom Analytics Dashboard", included: false },
      { text: "Monthly Strategy Calls", included: false },
      { text: "Priority Delivery", included: false },
    ],
  },
  {
    name: "Growth",
    price: "$1,500",
    period: "/month",
    highlight: true,
    tag: "Most Popular",
    features: [
      { text: "3 Service Verticals", included: true },
      { text: "Advanced Automation Suite", included: true },
      { text: "Priority Support", included: true },
      { text: "AI Integrations", included: true },
      { text: "Dedicated Strategist", included: true },
      { text: "Custom Analytics Dashboard", included: false },
      { text: "Monthly Strategy Calls", included: false },
      { text: "Priority Delivery", included: false },
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    highlight: false,
    features: [
      { text: "All Service Verticals", included: true },
      { text: "Full Automation Ecosystem", included: true },
      { text: "24/7 Dedicated Support", included: true },
      { text: "AI Integrations", included: true },
      { text: "Dedicated Strategist", included: true },
      { text: "Custom Analytics Dashboard", included: true },
      { text: "Monthly Strategy Calls", included: true },
      { text: "Priority Delivery", included: true },
    ],
  },
];

export default function ServiceComparisonSection() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="service-comparison" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-border text-foreground text-sm uppercase tracking-widest font-semibold mb-6">
            <ArrowRight className="w-4 h-4" /> Feature 9 of 12
          </div>
          <h2 className="font-bold text-4xl md:text-5xl mb-6 text-foreground tracking-tight uppercase">
            Service Comparison
          </h2>
          <p className="text-foreground text-lg leading-relaxed">
            Choose the package that fits your growth stage. Every tier is designed to deliver measurable ROI from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-8 border transition-all duration-300 cursor-pointer rounded-none relative flex flex-col ${
                tier.highlight
                  ? "border-foreground bg-foreground text-background shadow-xl scale-[1.02]"
                  : selected === tier.name
                  ? "border-foreground bg-card text-foreground ring-1 ring-foreground"
                  : "border-border bg-card text-foreground hover:border-foreground"
              }`}
              onClick={() => setSelected(selected === tier.name ? null : tier.name)}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-background border border-foreground text-foreground text-[10px] font-bold uppercase tracking-widest">
                    {tier.tag}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8 pt-4">
                <h3 className={`font-bold text-xl uppercase tracking-widest mb-4 ${tier.highlight ? "text-background" : "text-foreground"}`}>{tier.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`font-black text-4xl ${tier.highlight ? "text-background" : "text-foreground"}`}>{tier.price}</span>
                  {tier.period && <span className={`text-sm font-semibold uppercase tracking-widest ${tier.highlight ? "text-background" : "text-foreground"}`}>{tier.period}</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map(({ text, included }) => (
                  <li key={text} className="flex items-start gap-3 text-sm">
                    {included ? (
                      <Check className={`w-5 h-5 flex-shrink-0 ${tier.highlight ? "text-background" : "text-foreground"}`} />
                    ) : (
                      <X className={`w-5 h-5 flex-shrink-0 opacity-30 ${tier.highlight ? "text-background" : "text-foreground"}`} />
                    )}
                    <span className={`font-medium ${included ? (tier.highlight ? "text-background" : "text-foreground") : (tier.highlight ? "text-background opacity-50 line-through" : "text-foreground opacity-50 line-through")}`}>
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href={tier.name === "Enterprise" ? "/contact" : "/book-demo"}>
                <Button
                  className={`w-full font-bold text-xs uppercase tracking-wider rounded-none py-6 ${
                    tier.highlight
                      ? "bg-background text-foreground hover:bg-muted border border-foreground"
                      : "bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                  }`}
                >
                  {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
