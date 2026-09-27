import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import {
  Calculator, Rocket, Brain, Activity, GraduationCap,
  BookOpen, TrendingUp, ArrowRight, Wrench, Award,
  Play, Layers, Zap, Mail
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: Calculator,
    title: "ROI Calculator",
    description: "Interactive financial model that calculates your exact business ROI from ARCOLYTE TECHNOLOGIES services in real time.",
    tags: ["Interactive", "Finance", "Analytics"],
    anchor: "/feature/roi-calculator",
  },
  {
    number: "02",
    icon: Rocket,
    title: "Innovation Roadmap",
    description: "Animated milestone timeline showing ARCOLYTE TECHNOLOGIES's journey from startup to Series A and beyond.",
    tags: ["Visual", "Strategy"],
    anchor: "/feature/innovation-roadmap",
  },
  {
    number: "03",
    icon: Brain,
    title: "Digital Skills Assessment",
    description: "4-question quiz that benchmarks your business's digital maturity and delivers a personalised roadmap.",
    tags: ["Interactive", "Education", "Quiz"],
    anchor: "/feature/skills-quiz",
  },
  {
    number: "04",
    icon: Activity,
    title: "Tech Trends Radar",
    description: "Live technology adoption radar showing where AI, automation, cloud, and cybersecurity are heading.",
    tags: ["Visual", "Data", "Research"],
    anchor: "/feature/tech-trends",
  },
  {
    number: "05",
    icon: GraduationCap,
    title: "Learning Path Recommender",
    description: "3-step quiz that curates a personalised curriculum of courses and services based on your exact goals.",
    tags: ["Education", "Personalized", "AI"],
    anchor: "/learning-path",
  },
  {
    number: "06",
    icon: BookOpen,
    title: "Free Resource Library",
    description: "Curated e-books, templates, cheat sheets, and video guides, all free, all actionable.",
    tags: ["Education", "Free", "Resources"],
    anchor: "/feature/resources",
  },
  {
    number: "07",
    icon: TrendingUp,
    title: "Service Comparison",
    description: "Interactive 3-tier comparison table helping prospects choose the right service package instantly.",
    tags: ["Interactive", "Sales", "Pricing"],
    anchor: "/feature/service-comparison",
  },
  {
    number: "08",
    icon: Wrench,
    title: "Startup Digital Toolkit",
    description: "16-point interactive checklist every growing business needs, with expert tips for each item.",
    tags: ["Interactive", "Startup", "Education"],
    anchor: "/feature/startup-toolkit",
  },
  {
    number: "09",
    icon: Award,
    title: "Achievement Badges",
    description: "Gamification system rewarding community participation, from first post to platform mastery.",
    tags: ["Gamification", "Community", "Rewards"],
    anchor: "/profile",
  },
  {
    number: "10",
    icon: Play,
    title: "Career Intelligence Hub",
    description: "Live job listings, curated courses, industry expert recommender, and career strategy cheat codes, all in one place.",
    tags: ["Career", "Jobs", "Education", "AI"],
    anchor: "/career-hub",
  },
  {
    number: "11",
    icon: Layers,
    title: "Features Hub",
    description: "This page, a unified, filterable showcase of all platform features for investors and prospects.",
    tags: ["Showcase", "Overview"],
    anchor: "/features",
  },
  {
    number: "12",
    icon: Zap,
    title: "SPORTA",
    description: "Enterprise AI agentic social media aggregator, reshaper & mass publishing system. Aggregate 17+ platforms, reshape with AI, and auto-publish everywhere.",
    tags: ["AI", "Automation", "Social Media", "Publishing"],
    anchor: "/feature/sporta",
  },
  {
    number: "13",
    icon: Mail,
    title: "EmailOS",
    description: "Multi-tenant email marketing operating system. React-rendered campaigns, SES delivery, cron dispatch, open/click tracking, A/B testing, and 3-tier pricing.",
    tags: ["Email", "Multi-Tenant", "SaaS", "Automation"],
    anchor: "/feature/emailos",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <title>13 Interactive Features — ARCOLYTE TECHNOLOGIES</title>
      <Navigation />

      <main className="pt-24 pb-20">
        {/* Hero */}
        <div className="container mx-auto px-6 text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-border text-foreground text-sm mb-6 uppercase tracking-widest font-semibold">
            <Layers className="w-4 h-4" /> Real-Time Features
          </div>
          <h1 className="font-bold text-4xl md:text-6xl mb-6 tracking-tight">
            13 Investor-Ready Features
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed mb-8">
            ARCOLYTE TECHNOLOGIES isn't just a service agency, it's an interactive digital ecosystem. Every feature below is live, built, and designed to attract users, retain community, and demonstrate platform value to investors.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {[
              { label: "Interactive Features", value: "13" },
              { label: "Live Today", value: "13/13" },
              { label: "User-Facing", value: "✓" },
              { label: "Investor-Ready", value: "✓" },
            ].map(({ label, value }) => (
              <div key={label} className="px-5 py-3 bg-muted border border-border rounded-none">
                <div className="font-bold text-foreground text-xl mb-1">{value}</div>
                <div className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features grid */}
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.number}
                  className="bg-card p-6 border border-border transition-shadow hover:shadow-lg flex flex-col rounded-none"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 border border-border flex items-center justify-center bg-muted rounded-none">
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                    <span className="font-black text-2xl text-muted-foreground/30">{feature.number}</span>
                  </div>

                  <h3 className="font-bold text-lg text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{feature.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {feature.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-1 bg-muted border border-border text-foreground uppercase tracking-wider font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href={feature.anchor}>
                    <Button
                      size="sm"
                      className="w-full text-sm bg-black text-white hover:bg-zinc-800 dark:bg-black dark:text-white dark:border dark:border-zinc-800 dark:hover:bg-zinc-900 rounded-none transition-colors"
                    >
                      Open Feature <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="container mx-auto px-6 mt-20 text-center">
          <div className="max-w-3xl mx-auto p-12 bg-muted border border-border rounded-none">
            <h2 className="font-bold text-3xl mb-4 text-foreground tracking-tight">
              Ready to Invest or Partner?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-lg">
              ARCOLYTE TECHNOLOGIES is raising investment to scale these features globally. Book a call with the founder or request the full investor deck.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-black text-white hover:bg-zinc-800 dark:bg-black dark:text-white dark:border dark:border-zinc-800 dark:hover:bg-zinc-900 rounded-none font-semibold px-8 py-6">
                  Request Investor Deck
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted font-semibold px-8 py-6 rounded-none">
                  Book a Platform Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
