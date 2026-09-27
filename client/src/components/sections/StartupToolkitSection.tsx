import { useState } from "react";
import { Wrench, CheckSquare, Square, ChevronDown, ChevronUp, Lightbulb } from "lucide-react";

const toolkitCategories = [
  {
    category: "Digital Presence",
    icon: "🌐",
    items: [
      { id: "d1", text: "Professional website with mobile-first design", tip: "First impressions happen in 3 seconds. ARCOLYTE TECHNOLOGIES builds conversion-optimised sites." },
      { id: "d2", text: "Google Business Profile verified & optimised", tip: "70% of customers check Google before visiting a business. Don't miss this free traffic." },
      { id: "d3", text: "Consistent branding across all touchpoints", tip: "Consistent branding increases revenue by 23%. Get a brand kit from ARCOLYTE TECHNOLOGIES." },
      { id: "d4", text: "SSL certificate & fast hosting (<2s load)", tip: "1-second delay in load time = 7% drop in conversions." },
    ],
  },
  {
    category: "Automation & AI",
    icon: "🤖",
    items: [
      { id: "a1", text: "Lead capture form with automated follow-up", tip: "Speed-to-lead within 5 minutes increases conversion by 9x." },
      { id: "a2", text: "WhatsApp/email auto-responder active", tip: "80% of customer queries can be automated with ARCOLYTE TECHNOLOGIES's AI responder." },
      { id: "a3", text: "CRM connected to all lead sources", tip: "Businesses using CRM see 29% increase in sales." },
      { id: "a4", text: "Weekly automated analytics report", tip: "What gets measured gets managed. Automate your KPI tracking." },
    ],
  },
  {
    category: "Content & Growth",
    icon: "📣",
    items: [
      { id: "c1", text: "Content calendar planned 4 weeks ahead", tip: "Consistent posting increases organic reach by 3x." },
      { id: "c2", text: "Email list with regular newsletter", tip: "Email ROI averages $42 for every $1 spent." },
      { id: "c3", text: "At least 1 lead magnet (guide, tool, quiz)", tip: "Lead magnets convert 3-5x better than generic sign-up forms." },
      { id: "c4", text: "Case studies / testimonials published", tip: "92% of customers read reviews before buying." },
    ],
  },
  {
    category: "Security & Compliance",
    icon: "🔒",
    items: [
      { id: "s1", text: "Two-factor authentication on all accounts", tip: "2FA blocks 99.9% of automated attacks." },
      { id: "s2", text: "Regular data backups (weekly minimum)", tip: "60% of businesses that lose data shut down within 6 months." },
      { id: "s3", text: "Privacy policy & cookie consent in place", tip: "GDPR non-compliance can cost up to €20M or 4% of global turnover." },
      { id: "s4", text: "Team cybersecurity training completed", tip: "95% of breaches are caused by human error." },
    ],
  },
];

export default function StartupToolkitSection() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [openCategory, setOpenCategory] = useState<string | null>("Digital Presence");
  const [activeTip, setActiveTip] = useState<string | null>(null);

  const totalItems = toolkitCategories.flatMap(c => c.items).length;
  const totalChecked = Object.values(checked).filter(Boolean).length;
  const progressPct = Math.round((totalChecked / totalItems) * 100);

  const toggle = (id: string) => setChecked(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <section id="startup-toolkit" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-border text-foreground text-sm uppercase tracking-widest font-semibold mb-6">
            <Wrench className="w-4 h-4" /> Feature 10 of 12
          </div>
          <h2 className="font-bold text-4xl md:text-5xl mb-6 text-foreground tracking-tight uppercase">
            Startup Digital Toolkit
          </h2>
          <p className="text-foreground text-lg leading-relaxed">
            The 16-point digital readiness checklist every growing business needs. Tick each box, click for expert tips.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress */}
          <div className="p-8 border border-border bg-card mb-8 rounded-none">
            <div className="flex items-center justify-between mb-4">
              <span className="font-bold text-sm uppercase tracking-wider text-foreground">Digital Readiness Score</span>
              <span className="font-black text-2xl text-foreground">{progressPct}%</span>
            </div>
            <div className="h-2 bg-muted w-full mb-4">
              <div
                className="h-full bg-foreground transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <p className="text-xs text-foreground font-semibold uppercase tracking-wider">
              {totalChecked}/{totalItems} items complete
              {progressPct === 100 && " — You're fully digital-ready!"}
              {progressPct >= 50 && progressPct < 100 && " — You're halfway there, keep going!"}
              {progressPct < 50 && " — ARCOLYTE TECHNOLOGIES can help you close every gap"}
            </p>
          </div>

          {/* Accordion categories */}
          <div className="space-y-6">
            {toolkitCategories.map(cat => {
              const catChecked = cat.items.filter(i => checked[i.id]).length;
              const isOpen = openCategory === cat.category;
              return (
                <div key={cat.category} className="border border-border bg-card rounded-none overflow-hidden">
                  <button
                    onClick={() => setOpenCategory(isOpen ? null : cat.category)}
                    className="w-full flex items-center justify-between p-6 hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{cat.icon}</span>
                      <div className="text-left">
                        <p className="font-bold text-lg uppercase tracking-wider text-foreground mb-1">{cat.category}</p>
                        <p className="text-foreground text-xs font-semibold uppercase tracking-widest">{catChecked}/{cat.items.length} complete</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-32 h-1 bg-muted hidden sm:block">
                        <div
                          className="h-full bg-foreground transition-all duration-300"
                          style={{ width: `${(catChecked / cat.items.length) * 100}%` }}
                        />
                      </div>
                      {isOpen ? <ChevronUp className="w-5 h-5 text-foreground" /> : <ChevronDown className="w-5 h-5 text-foreground" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="p-6 pt-2 space-y-4 border-t border-border">
                      {cat.items.map(item => (
                        <div key={item.id} className="p-4 border border-border hover:border-foreground transition-colors">
                          <div
                            className="flex items-start gap-4 cursor-pointer group"
                            onClick={() => toggle(item.id)}
                          >
                            {checked[item.id] ? (
                              <CheckSquare className="w-6 h-6 text-foreground flex-shrink-0 mt-0.5" />
                            ) : (
                              <Square className="w-6 h-6 text-foreground opacity-50 flex-shrink-0 mt-0.5 group-hover:opacity-100 transition-opacity" />
                            )}
                            <span className={`text-base font-medium leading-relaxed transition-colors ${checked[item.id] ? "text-foreground opacity-50 line-through" : "text-foreground"}`}>
                              {item.text}
                            </span>
                            <button
                              onClick={(e) => { e.stopPropagation(); setActiveTip(activeTip === item.id ? null : item.id); }}
                              className="ml-auto flex-shrink-0 p-1"
                            >
                              <Lightbulb className={`w-5 h-5 transition-colors ${activeTip === item.id ? "text-foreground" : "text-foreground opacity-30 hover:opacity-100"}`} />
                            </button>
                          </div>
                          {activeTip === item.id && (
                            <div className="ml-10 mt-4 p-4 bg-muted border border-border text-sm text-foreground leading-relaxed font-medium">
                              <strong>EXPERT TIP:</strong> {item.tip}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
