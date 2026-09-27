import Navigation from "@/components/Navigation";
import { CheckCircle2, TrendingUp, ExternalLink, Smartphone } from "lucide-react";
import { Link } from "wouter";

interface CaseStudy {
  title: string;
  slug: string;
  category: string;
  client: string;
  duration: string;
  impact: string;
  metricValue: string;
  metricLabel: string;
  overview: string;
  solution: string;
  results: string[];
  tech: string[];
  link: string | null;
  linkType: "website" | "app";
}

const cases: CaseStudy[] = [
  {
    title: "FebLuxury E-Commerce for Fashion Sales",
    slug: "febluxury-fashion-sales",
    category: "E-Commerce & Fashion",
    client: "FebLuxury (Luxury Fashion Brand)",
    duration: "6 weeks",
    impact: "Full online store for luxury fashion brand",
    metricValue: "100%",
    metricLabel: "Sales-Ready",
    overview:
      "FebLuxury, a premium fashion brand, needed a modern, conversion-optimised e-commerce platform to showcase their luxury collections online and enable seamless purchasing for fashion-conscious customers.",
    solution:
      "Designed and built an elegant, fully responsive e-commerce website featuring product browsing with rich imagery, streamlined checkout flow, order management, and a brand-consistent UI that reflects the luxury positioning of the FebLuxury label.",
    results: [
      "Fully functional online store launched",
      "Conversion-optimised product pages with rich media",
      "Seamless order management and checkout flow",
      "Mobile-responsive design for on-the-go shoppers",
    ],
    tech: ["React", "TypeScript", "E-Commerce UI", "Responsive Design"],
    link: "https://feb-frontend-git-master-tobis-projects-280098ad.vercel.app/",
    linkType: "website",
  },
  {
    title: "Glow FM Content Repurposing Pipeline",
    slug: "glow-fm",
    category: "Media Automation",
    client: "Radio Station (Media House)",
    duration: "3 weeks",
    impact: "1 script → 10 posts in 30 seconds",
    metricValue: "95%",
    metricLabel: "Time Saved",
    overview:
      "A leading radio station needed to turn each broadcast script into platform-ready social-media posts across Twitter, Instagram, Facebook, LinkedIn, and WhatsApp, without hiring extra content staff.",
    solution:
      "Built a Python-based automation pipeline that ingests a broadcast script, uses an AI rewriting model to produce 10 distinct post formats tailored per platform, then pushes them to a content calendar and social scheduler automatically.",
    results: [
      "1 script → 10 posts in under 30 seconds",
      "95% reduction in content production time",
      "Zero additional headcount required",
      "Consistent brand voice across all channels",
    ],
    tech: ["Python", "OpenAI API", "Make (Integromat)", "Buffer API"],
    link: "https://glowfmradio.com",
    linkType: "website",
  },
  {
    title: "Maktaris Herbals E-Commerce Store",
    slug: "maktaris-herbals",
    category: "E-Commerce & Health",
    client: "Maktaris Herbals (Health & Wellness)",
    duration: "3 weeks",
    impact: "Full online herbal products store with customer testimonials",
    metricValue: "15+",
    metricLabel: "Products Listed",
    overview:
      "Maktaris Herbals needed a professional online presence to showcase and sell their chemical-free herbal products, including herbs for arthritis, high blood pressure, endometriosis, and more, while building trust through real customer testimonials.",
    solution:
      "Designed and developed a fully responsive e-commerce website featuring a product catalogue with pricing, featured product sections, detailed product modals, customer testimonial carousel, ambassador profiles, and a streamlined ordering flow with cheap shipping and easy payment options.",
    results: [
      "15+ herbal products listed with descriptions and pricing",
      "Customer testimonials section building buyer trust",
      "Featured product showcase driving conversions",
      "Mobile-friendly design for on-the-go shoppers",
    ],
    tech: ["HTML/CSS", "JavaScript", "Responsive Design", "E-Commerce UI"],
    link: "https://maktaris.onrender.com",
    linkType: "website",
  },
  {
    title: "Compassionate Backers Financial Services Landing Page",
    slug: "compassionate-backers",
    category: "FinTech & Services",
    client: "Compassionate Backers (Financial Services)",
    duration: "2 weeks",
    impact: "Professional web presence for loan & investment services",
    metricValue: "398+",
    metricLabel: "Success Reports",
    overview:
      "Compassionate Backers, a financial services company established in 2019, needed a professional landing page to showcase their loan, asset acquisition, and investment services, while building credibility with potential clients and streamlining enquiry submissions.",
    solution:
      "Built a clean, professional landing page featuring service showcases for loans, asset acquisition, and investment, an about section highlighting mission and vision, success metrics display (398+ success reports, 3K+ happy clients), and an integrated contact form for service requests.",
    results: [
      "3 core financial services showcased clearly",
      "Contact form integrated for direct enquiries",
      "Trust-building about section with mission and vision",
      "Success metrics displayed prominently (398+ reports, 3K+ clients)",
    ],
    tech: ["HTML/CSS", "JavaScript", "Responsive Design", "Contact Form"],
    link: "https://loan-landing-page.onrender.com",
    linkType: "website",
  },
  {
    title: "Lead Sorting Automation",
    slug: "lead-sorting",
    category: "CRM & Sales Ops",
    client: "B2B Services Company",
    duration: "1 week",
    impact: "500+ leads organized monthly without manual effort",
    metricValue: "500+",
    metricLabel: "Leads/Month",
    overview:
      "The sales team was manually copying leads from Facebook Ads, Google Forms, and website inquiries into a spreadsheet, a 3-hour-per-day bottleneck.",
    solution:
      "Built a Zapier-based multi-source lead capture pipeline that routes, deduplicates, scores, and tags leads from 4 sources directly into HubSpot CRM with automatic follow-up task creation.",
    results: [
      "500+ leads processed monthly, fully automated",
      "Eliminated 3 hours of daily data-entry work",
      "Lead response time reduced from 48h to 2h",
      "Pipeline visibility improved, no leads dropped",
    ],
    tech: ["Zapier", "HubSpot CRM", "Google Sheets", "Meta Ads API"],
    link: null,
    linkType: "website",
  },
  {
    title: "Invisphere: Crypto Accreditation & Portfolio Training Platform",
    slug: "invisphere",
    category: "FinTech & Blockchain",
    client: "Invisphere (invisphere.com)",
    duration: "8 weeks",
    impact: "Institutional-grade crypto training simulation with real-time market data",
    metricValue: "100%",
    metricLabel: "Real-Time Accuracy",
    overview:
      "Invisphere needed a professional cryptocurrency and digital assets accreditation platform. The goal was to combine real-time market intelligence with portfolio training simulation. Users should be able to practise trading, portfolio management, and investment strategy in a risk-free environment powered by live market data.",
    solution:
      "Designed and built a full-stack crypto investment and analytics platform featuring real-time market intelligence, automated analytics, and portfolio tracking. The platform includes institutional-grade trading simulation tools. Users can practise buying, selling, and managing portfolios of Bitcoin, Ethereum, and top crypto assets with live price feeds, performance dashboards, and accreditation-ready progress tracking.",
    results: [
      "Real-time market data integration with live price feeds",
      "Comprehensive portfolio tracking and performance analytics",
      "Risk-free trading simulation mirroring real market conditions",
      "Institutional-grade analytics dashboard for informed decision-making",
    ],
    tech: ["React", "TypeScript", "Node.js", "Crypto Market APIs", "Real-Time WebSockets", "PostgreSQL"],
    link: "https://invisphere.com",
    linkType: "website",
  },
  {
    title: "Digital Skills Training Cohort",
    slug: "skills-cohort",
    category: "Corporate Training",
    client: "Corporate Team (30+ employees)",
    duration: "4 weeks",
    impact: "30+ professionals upskilled in AI tools",
    metricValue: "30+",
    metricLabel: "Professionals Trained",
    overview:
      "A mid-sized company wanted to equip their team with practical AI and automation skills to improve departmental productivity without replacing existing staff.",
    solution:
      "Designed and delivered a 4-week blended learning program covering AI prompting, no-code automation, and data visualization, with live workshops, assignments, and a final capstone project.",
    results: [
      "30+ team members completed the program",
      "Measurable productivity improvements within 30 days",
      "5 internal automation tools built during the cohort",
      "NPS score of 9.1 / 10 from participants",
    ],
    tech: ["ChatGPT", "Make (Integromat)", "Notion", "Google Looker Studio"],
    link: null,
    linkType: "website",
  },
  {
    title: "Glow FM Mobile Application",
    slug: "glow-fm-mobile-app",
    category: "Mobile Development",
    client: "Glow FM (Radio Station)",
    duration: "6 weeks",
    impact: "On-the-go listening for loyal audience",
    metricValue: "1000+",
    metricLabel: "Downloads",
    overview:
      "Glow FM needed a dedicated mobile application to extend their reach beyond the website, allowing loyal listeners to tune in on the go with live streaming, episode replays, and real-time updates.",
    solution:
      "Created a feature-rich mobile application for Glow FM delivering live radio streaming, episode replays, news updates, and push notifications to thousands of listeners on Android, ensuring a seamless listening experience anywhere, anytime.",
    results: [
      "Live radio streaming directly from mobile devices",
      "Episode replay and on-demand content access",
      "Push notifications for breaking news and show schedules",
      "Smooth, intuitive user interface for all audiences",
    ],
    tech: ["Mobile Development", "Live Streaming", "Push Notifications", "Android"],
    link: "https://play.google.com/store/apps/details?id=com.glowfmradio.app&pcampaignid=web_share",
    linkType: "app",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="font-bold text-4xl md:text-5xl mb-6 tracking-tight uppercase">Case Studies</h1>
            <p className="text-foreground text-lg leading-relaxed">
              Real systems, real results, proof over promises.
            </p>
          </div>

          <div className="space-y-12">
            {cases.map(({ title, slug, category, client, duration, impact, metricValue, metricLabel, overview, solution, results, tech, link, linkType }) => (
              <div
                key={slug}
                id={slug}
                className="bg-card border border-border rounded-none overflow-hidden"
                data-testid={`case-study-detail-${slug}`}
              >
                {/* Header */}
                <div className="p-8 border-b border-border bg-muted/30">
                  <div className="flex flex-col md:flex-row items-start justify-between gap-6">
                    <div className="flex-1">
                      <span className="text-xs text-foreground uppercase tracking-widest font-semibold mb-3 block">
                        {category}
                      </span>
                      <h2 className="font-bold text-2xl md:text-3xl text-foreground mb-4">{title}</h2>
                      <div className="flex flex-wrap gap-6 text-sm text-foreground">
                        <span className="font-medium">Client: <span className="font-normal">{client}</span></span>
                        <span className="font-medium">Duration: <span className="font-normal">{duration}</span></span>
                      </div>
                      {link && (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-black text-white hover:bg-zinc-800 dark:bg-black dark:text-white dark:border dark:border-zinc-800 dark:hover:bg-zinc-900 font-semibold text-xs transition-colors rounded-none"
                        >
                          {linkType === "app" ? (
                            <>Access App <Smartphone className="w-4 h-4" /></>
                          ) : (
                            <>View Website <ExternalLink className="w-4 h-4" /></>
                          )}
                        </a>
                      )}
                    </div>
                    <div className="text-center bg-background border border-border p-6 min-w-[160px]">
                      <div className="font-bold text-4xl text-foreground mb-1">{metricValue}</div>
                      <div className="text-xs text-foreground uppercase font-semibold tracking-wider">{metricLabel}</div>
                    </div>
                  </div>
                  <p className="mt-6 text-foreground font-medium text-sm border-l-2 border-foreground pl-4">"{impact}"</p>
                </div>

                {/* Body */}
                <div className="p-8 grid md:grid-cols-2 gap-12 bg-background">
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-3 uppercase tracking-tight">Challenge</h3>
                      <p className="text-foreground text-sm leading-relaxed">{overview}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-3 uppercase tracking-tight">Solution</h3>
                      <p className="text-foreground text-sm leading-relaxed">{solution}</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-4 uppercase tracking-tight">Results</h3>
                      <ul className="space-y-3">
                        {results.map((r) => (
                          <li key={r} className="flex items-start gap-3 text-sm text-foreground">
                            <CheckCircle2 className="w-4 h-4 text-foreground shrink-0 mt-0.5" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-3 uppercase tracking-tight">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 bg-muted border border-border text-xs font-semibold text-foreground uppercase tracking-wider"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link href="/contact">
              <span className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-black text-white hover:bg-zinc-800 dark:bg-black dark:text-white dark:border dark:border-zinc-800 dark:hover:bg-zinc-900 font-bold text-base transition-colors cursor-pointer uppercase tracking-wider rounded-none">
                <TrendingUp className="w-5 h-5" />
                Start Your Project
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
