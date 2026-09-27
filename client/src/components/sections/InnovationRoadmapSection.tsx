import { useRef, useEffect, useState } from "react";
import { CheckCircle, Zap, Globe, Users, Award, Rocket } from "lucide-react";

const milestones = [
  {
    year: "2022",
    title: "Foundation",
    description: "ARCOLYTE TECHNOLOGIES launched with a vision to democratize digital transformation for African businesses.",
    icon: Rocket,
    status: "done",
  },
  {
    year: "2023",
    title: "Platform Growth",
    description: "Expanded to 8 service verticals; automated 80% of client workflows; 500+ monthly leads organized.",
    icon: Zap,
    status: "done",
  },
  {
    year: "2024",
    title: "Community Launch",
    description: "Launched blog, user accounts, chat, and courses. Built a thriving tech-learning community.",
    icon: Users,
    status: "done",
  },
  {
    year: "2025 Q1",
    title: "Intelligence Layer",
    description: "Deploying AI-driven ROI tools, skills assessments, mentorship matching, and learning paths.",
    icon: Award,
    status: "current",
  },
  {
    year: "2025 Q3",
    title: "Investor Readiness",
    description: "Series A fundraise targeting $2M. 30+ enterprise clients, $1M ARR milestone, global expansion.",
    icon: Globe,
    status: "upcoming",
  },
  {
    year: "2026",
    title: "Global Scale",
    description: "10,000+ community members, presence in 5 continents, IPO-track revenue model.",
    icon: CheckCircle,
    status: "upcoming",
  },
];

function MilestoneCard({ milestone, index }: { milestone: (typeof milestones)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Icon = milestone.icon;
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex items-center gap-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 100}ms`, flexDirection: isLeft ? "row" : "row-reverse" }}
    >
      {/* Card */}
      <div className={`flex-1 p-6 border ${milestone.status === "current" ? "border-foreground bg-foreground text-background" : "border-border bg-card text-foreground"}`}>
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 border ${milestone.status === "current" ? "border-background/30 text-background" : "border-foreground text-foreground"}`}>
            {milestone.year}
          </span>
          {milestone.status === "current" && (
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-background text-foreground animate-pulse">
              NOW
            </span>
          )}
          {milestone.status === "upcoming" && (
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-muted text-foreground">
              UPCOMING
            </span>
          )}
        </div>
        <h3 className={`font-bold text-xl mb-2 ${milestone.status === "current" ? "text-background" : "text-foreground"}`}>{milestone.title}</h3>
        <p className={`text-sm leading-relaxed font-medium ${milestone.status === "current" ? "text-background" : "text-foreground"}`}>{milestone.description}</p>
      </div>

      {/* Center Icon */}
      <div className={`flex-shrink-0 w-16 h-16 rounded-none border-2 flex items-center justify-center z-10 ${milestone.status === "current" ? "bg-foreground border-foreground" : "bg-background border-foreground"}`}>
        <Icon className={`w-6 h-6 ${milestone.status === "current" ? "text-background" : "text-foreground"}`} />
      </div>

      {/* Spacer */}
      <div className="flex-1 hidden md:block" />
    </div>
  );
}

export default function InnovationRoadmapSection() {
  return (
    <section id="roadmap" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-border text-foreground text-sm uppercase tracking-widest font-semibold mb-6">
            <Rocket className="w-4 h-4" /> Feature 2 of 12
          </div>
          <h2 className="font-bold text-4xl md:text-5xl mb-6 text-foreground tracking-tight uppercase">
            Innovation Roadmap
          </h2>
          <p className="text-foreground text-lg leading-relaxed">
            From startup to scale-up, every milestone mapped, every stage funded by results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-foreground hidden md:block" style={{ transform: "translateX(-50%)" }} />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <MilestoneCard key={m.year} milestone={m} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
