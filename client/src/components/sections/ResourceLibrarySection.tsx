import { useState } from "react";
import { BookOpen, Download, FileText, Video, BarChart2, Code2, Clock } from "lucide-react";

const resources = [
  {
    id: 1,
    icon: FileText,
    title: "The African Startup Automation Bible",
    description: "A 40-page guide on automating your first 5 business workflows with free and low-cost tools.",
    category: "E-Book",
    downloads: "2.1K",
    tag: "Most Downloaded",
    pdfUrl: "/african-startup-automation-bible.pdf",
    pdfName: "african-startup-automation-bible.pdf",
  },
  {
    id: 2,
    icon: BarChart2,
    title: "Digital Maturity Assessment Template",
    description: "A ready-to-use template to score your business's current digital capabilities.",
    category: "Template",
    downloads: "1.4K",
    tag: null,
    pdfUrl: "/digital-maturity-assessment-template.pdf",
    pdfName: "digital-maturity-assessment-template.pdf",
  },
  {
    id: 3,
    icon: Code2,
    title: "AI Prompt Playbook for SMEs",
    description: "50 battle-tested prompts for marketing, HR, sales, support, and operations, copy, paste, profit.",
    category: "Cheat Sheet",
    downloads: "3.7K",
    tag: "Free",
    pdfUrl: "/ai-prompt-playbook-smes.pdf",
    pdfName: "ai-prompt-playbook-smes.pdf",
  },
  {
    id: 4,
    icon: Video,
    title: "Crash Course: Build Your First Chatbot",
    description: "A 45-minute video walkthrough on building a WhatsApp AI responder using Manychat + GPT.",
    category: "Video",
    downloads: "980",
    tag: null,
    pdfUrl: null,
    pdfName: null,
    comingSoon: true,
  },
  {
    id: 5,
    icon: FileText,
    title: "Investor Pitch Deck Framework",
    description: "A 12-slide pitch deck structure used by funded African tech startups, editable Canva template.",
    category: "Template",
    downloads: "1.8K",
    tag: "Investor Ready",
    pdfUrl: "/investor-pitch-deck-framework.pdf",
    pdfName: "investor-pitch-deck-framework.pdf",
  },
  {
    id: 6,
    icon: BookOpen,
    title: "ARCOLYTE TECHNOLOGIES Platform Onboarding Guide",
    description: "Step-by-step guide to getting the maximum value from every feature on the platform.",
    category: "Guide",
    downloads: "760",
    tag: null,
    pdfUrl: "/arcolytetech-platform-onboarding-guide.pdf",
    pdfName: "arcolytetech-platform-onboarding-guide.pdf",
  },
];

const categories = ["All", "E-Book", "Template", "Cheat Sheet", "Video", "Guide"];

export default function ResourceLibrarySection() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? resources : resources.filter(r => r.category === filter);

  return (
    <section id="resources" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-border text-foreground text-sm uppercase tracking-widest font-semibold mb-6">
            <BookOpen className="w-4 h-4" /> Free Resources
          </div>
          <h2 className="font-bold text-4xl md:text-5xl mb-6 text-foreground tracking-tight uppercase">
            Free Resource Library
          </h2>
          <p className="text-foreground text-lg leading-relaxed">
            Practical guides, templates, and courses, completely free. Because education is the foundation of transformation.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 border text-sm font-semibold transition-colors uppercase tracking-wider rounded-none ${
                filter === cat
                  ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                  : "bg-background text-foreground border-border hover:bg-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filtered.map((resource) => {
            const Icon = resource.icon;
            return (
              <div
                key={resource.id}
                className="bg-card border border-border p-8 flex flex-col hover:shadow-lg transition-shadow rounded-none relative"
              >
                {resource.tag && (
                  <span className="absolute top-6 right-6 text-[10px] uppercase tracking-wider font-bold px-3 py-1 border border-border bg-muted text-foreground">
                    {resource.tag}
                  </span>
                )}
                <div className="w-12 h-12 flex items-center justify-center border border-border bg-muted mb-6">
                  <Icon className="w-6 h-6 text-foreground" />
                </div>
                
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs uppercase font-bold tracking-widest text-foreground border-b-2 border-foreground pb-0.5">
                    {resource.category}
                  </span>
                  <span className="text-xs text-foreground font-medium">{resource.downloads} downloads</span>
                </div>
                
                <h3 className="font-bold text-xl text-foreground mb-3 leading-tight">{resource.title}</h3>
                <p className="text-foreground text-sm leading-relaxed mb-8 flex-1">{resource.description}</p>

                {resource.comingSoon ? (
                  <div className="w-full flex items-center justify-center gap-2 py-4 border border-border bg-muted">
                    <Clock className="w-4 h-4 text-foreground" />
                    <span className="font-bold text-xs uppercase tracking-wider text-foreground">Coming Soon</span>
                  </div>
                ) : (
                  <a
                    href={resource.pdfUrl!}
                    download={resource.pdfName!}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-bold text-xs uppercase tracking-wider transition-colors rounded-none"
                  >
                    <Download className="w-4 h-4" /> Free Download
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
