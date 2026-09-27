import { useState } from "react";
import { Calculator, TrendingUp, DollarSign, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const serviceMultipliers: Record<string, { timeSaved: number; revenueBoost: number; costReduction: number }> = {
  automation: { timeSaved: 60, revenueBoost: 35, costReduction: 40 },
  ai: { timeSaved: 50, revenueBoost: 45, costReduction: 30 },
  web: { timeSaved: 20, revenueBoost: 55, costReduction: 15 },
  marketing: { timeSaved: 30, revenueBoost: 60, costReduction: 25 },
  consulting: { timeSaved: 25, revenueBoost: 40, costReduction: 20 },
};

export default function ROICalculatorSection() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(10000);
  const [teamSize, setTeamSize] = useState(5);
  const [service, setService] = useState("automation");
  const [calculated, setCalculated] = useState(false);

  const mult = serviceMultipliers[service];
  const annualRevenue = monthlyRevenue * 12;
  const revenueGain = Math.round(annualRevenue * (mult.revenueBoost / 100));
  const costSavings = Math.round(teamSize * 2000 * (mult.costReduction / 100) * 12);
  const timeSavedHrs = Math.round(teamSize * 8 * (mult.timeSaved / 100) * 250);
  const totalROI = revenueGain + costSavings;

  return (
    <section id="roi-calculator" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-border text-foreground text-sm uppercase tracking-widest font-semibold mb-6">
            <Calculator className="w-4 h-4" /> Feature 1 of 12
          </div>
          <h2 className="font-bold text-4xl md:text-5xl mb-6 text-foreground tracking-tight uppercase">
            ROI Calculator
          </h2>
          <p className="text-foreground text-lg leading-relaxed">
            See exactly how much value ARCOLYTE TECHNOLOGIES services add to your business. Adjust the sliders and watch your returns grow in real time.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="p-8 border border-border bg-card">
            <h3 className="font-bold text-xl text-foreground mb-8 uppercase tracking-wider">Your Business Inputs</h3>

            <div className="space-y-8">
              <div>
                <label className="text-foreground text-sm font-semibold uppercase tracking-wider mb-3 block">
                  Monthly Revenue: <span className="text-foreground ml-2">${monthlyRevenue.toLocaleString()}</span>
                </label>
                <input
                  type="range" min={1000} max={500000} step={1000}
                  value={monthlyRevenue}
                  onChange={(e) => { setMonthlyRevenue(Number(e.target.value)); setCalculated(false); }}
                  className="w-full accent-black dark:accent-white"
                />
                <div className="flex justify-between text-xs text-foreground font-semibold mt-2">
                  <span>$1K</span><span>$500K</span>
                </div>
              </div>

              <div>
                <label className="text-foreground text-sm font-semibold uppercase tracking-wider mb-3 block">
                  Team Size: <span className="text-foreground ml-2">{teamSize} people</span>
                </label>
                <input
                  type="range" min={1} max={100} step={1}
                  value={teamSize}
                  onChange={(e) => { setTeamSize(Number(e.target.value)); setCalculated(false); }}
                  className="w-full accent-black dark:accent-white"
                />
                <div className="flex justify-between text-xs text-foreground font-semibold mt-2">
                  <span>1</span><span>100</span>
                </div>
              </div>

              <div>
                <label className="text-foreground text-sm font-semibold uppercase tracking-wider mb-3 block">Primary Service</label>
                <select
                  value={service}
                  onChange={(e) => { setService(e.target.value); setCalculated(false); }}
                  className="w-full bg-background border border-border px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-foreground rounded-none"
                >
                  <option value="automation">Automation Systems</option>
                  <option value="ai">AI Integrations</option>
                  <option value="web">Web & App Development</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="consulting">Strategic Consulting</option>
                </select>
              </div>

              <Button
                onClick={() => setCalculated(true)}
                className="w-full bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-bold uppercase tracking-wider rounded-none py-6"
              >
                <Calculator className="w-5 h-5 mr-3" /> Calculate My ROI
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="p-8 border border-border bg-card">
            <h3 className="font-bold text-xl text-foreground mb-8 uppercase tracking-wider">Projected Annual Impact</h3>

            <div className="space-y-6">
              {[
                { icon: TrendingUp, label: "Revenue Growth", value: `+$${revenueGain.toLocaleString()}`, sub: `${mult.revenueBoost}% uplift from enhanced capabilities` },
                { icon: DollarSign, label: "Cost Savings", value: `+$${costSavings.toLocaleString()}`, sub: `${mult.costReduction}% reduction in operational costs` },
                { icon: Clock, label: "Hours Saved", value: `${timeSavedHrs.toLocaleString()} hrs`, sub: `${mult.timeSaved}% productivity boost per team member` },
              ].map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className={`p-5 border transition-all duration-500 ${calculated ? "border-foreground bg-foreground/5" : "border-border bg-muted/30"}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-foreground" />
                    <span className="text-foreground text-sm font-bold uppercase tracking-wider">{label}</span>
                  </div>
                  <div className={`font-black text-3xl text-foreground transition-all duration-500 ${calculated ? "opacity-100" : "opacity-30"}`}>
                    {calculated ? value : "---"}
                  </div>
                  <p className="text-foreground text-xs font-semibold mt-2 uppercase tracking-wide">{sub}</p>
                </div>
              ))}

              <div className={`p-6 border-2 transition-all duration-700 mt-8 ${calculated ? "border-foreground bg-foreground text-background" : "border-border bg-muted/30"}`}>
                <p className={`text-sm font-bold mb-2 uppercase tracking-wider ${calculated ? "text-background" : "text-foreground"}`}>Total Annual ROI</p>
                <div className={`font-black text-5xl transition-all duration-700 tracking-tight ${calculated ? "opacity-100 scale-100 text-background" : "opacity-30 scale-95 text-foreground"}`}>
                  {calculated ? `$${totalROI.toLocaleString()}` : "$0"}
                </div>
                {calculated && (
                  <p className="text-background text-sm mt-3 font-bold uppercase tracking-wider">
                    ↑ {Math.round((totalROI / annualRevenue) * 100)}% return on investment
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link href="/contact">
            <Button size="lg" className="bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-bold px-10 py-8 uppercase tracking-wider rounded-none text-base">
              Book a Demo & Unlock Your ROI
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
