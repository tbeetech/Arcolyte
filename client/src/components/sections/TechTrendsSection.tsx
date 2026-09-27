import { useRef, useEffect, useState } from "react";
import { Radar } from "recharts";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { Activity } from "lucide-react";

const trendData = [
  { subject: "AI / LLMs", A: 95, fullMark: 100 },
  { subject: "Web3", A: 42, fullMark: 100 },
  { subject: "Edge Computing", A: 68, fullMark: 100 },
  { subject: "No-Code Tools", A: 80, fullMark: 100 },
  { subject: "Cybersecurity", A: 88, fullMark: 100 },
  { subject: "Cloud Native", A: 85, fullMark: 100 },
  { subject: "IoT", A: 55, fullMark: 100 },
  { subject: "AR / VR", A: 47, fullMark: 100 },
];

const trendCards = [
  { label: "AI / LLMs", score: 95, insight: "Generative AI is reshaping every industry. ARCOLYTE TECHNOLOGIES builds custom AI integrations on GPT-4, Claude & Gemini." },
  { label: "No-Code Tools", score: 80, insight: "No-code automation reduces time-to-market by 60%. We pair no-code with custom dev for optimal speed." },
  { label: "Cybersecurity", score: 88, insight: "Cyber threats grew 38% YoY. Every ARCOLYTE TECHNOLOGIES solution includes security-by-design principles." },
  { label: "Cloud Native", score: 85, insight: "Cloud-native architecture cuts infrastructure costs up to 40% while delivering infinite scalability." },
  { label: "Edge Computing", score: 68, insight: "Processing data closer to the source reduces latency, key for real-time AI decision-making." },
  { label: "IoT", score: 55, insight: "Connected devices generating actionable business data. We design IoT data pipelines for smart operations." },
];

export default function TechTrendsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tech-trends" className="py-24 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-border text-foreground text-sm uppercase tracking-widest font-semibold mb-6">
            <Activity className="w-4 h-4" /> Feature 4 of 12
          </div>
          <h2 className="font-bold text-4xl md:text-5xl mb-6 text-foreground tracking-tight uppercase">
            Tech Trends Radar
          </h2>
          <p className="text-foreground text-lg leading-relaxed">
            Stay ahead of the curve. Here's where the digital world is heading, and how ARCOLYTE TECHNOLOGIES helps you ride every wave.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Radar Chart */}
          <div className={`transition-all duration-1000 p-8 border border-border bg-card ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
            <ResponsiveContainer width="100%" height={350}>
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={trendData}>
                <PolarGrid stroke="currentColor" className="text-border" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: "currentColor", fontSize: 11, fontWeight: "bold" }}
                  className="text-foreground font-sans uppercase tracking-wider"
                />
                <Radar
                  name="Tech Adoption"
                  dataKey="A"
                  stroke="currentColor"
                  fill="currentColor"
                  fillOpacity={0.15}
                  strokeWidth={2}
                  className="text-foreground"
                />
              </RadarChart>
            </ResponsiveContainer>
            <p className="text-center text-xs text-foreground font-bold uppercase tracking-widest mt-4">Industry adoption score (0–100)</p>
          </div>

          {/* Cards */}
          <div className="space-y-4">
            {trendCards.map((card, i) => (
              <button
                key={card.label}
                onClick={() => setActiveCard(i)}
                className={`w-full text-left p-5 border transition-all duration-200 rounded-none block ${
                  activeCard === i
                    ? "border-foreground bg-foreground text-background shadow-lg"
                    : "border-border text-foreground hover:bg-muted"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-bold uppercase tracking-wider text-sm ${activeCard === i ? "text-background" : "text-foreground"}`}>{card.label}</span>
                  <span className={`font-black text-sm ${activeCard === i ? "text-background" : "text-foreground"}`}>{card.score}%</span>
                </div>
                <div className={`h-1.5 w-full bg-muted overflow-hidden ${activeCard === i ? "bg-background/30" : "bg-muted"}`}>
                  <div
                    className={`h-full transition-all duration-700 ${activeCard === i ? "bg-background" : "bg-foreground"}`}
                    style={{
                      width: visible ? `${card.score}%` : "0%",
                      transitionDelay: `${i * 100}ms`,
                    }}
                  />
                </div>
                {activeCard === i && (
                  <p className="text-background text-sm mt-4 leading-relaxed font-medium">{card.insight}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
