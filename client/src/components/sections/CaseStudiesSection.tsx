import { ArrowRight, ExternalLink, Smartphone } from "lucide-react";

interface CaseStudyCard {
  title: string;
  category: string;
  impact: string;
  detail: string;
  metric: string;
  slug: string;
  link: string | null;
  linkType: "website" | "app";
}

const cases: CaseStudyCard[] = [
  {
    title: "FebLuxury for Fashion Sales",
    category: "E-Commerce & Fashion",
    impact: "Full online store for luxury fashion brand",
    detail: "Designed and built an elegant, conversion-optimised e-commerce website for FebLuxury, enabling seamless product browsing, order management, and online sales for a premium fashion brand.",
    metric: "Sales-ready online store",
    slug: "febluxury-fashion-sales",
    link: "https://feb-frontend-git-master-tobis-projects-280098ad.vercel.app/",
    linkType: "website",
  },
  {
    title: "Glow FM Radio Station Interactive Website",
    category: "Media & Broadcasting",
    impact: "Live streaming + listener engagement platform",
    detail: "Built a fully interactive website for Glow FM radio station featuring live stream integration, show schedules, presenters' profiles, and audience engagement tools, bringing the station online.",
    metric: "Full broadcast platform",
    slug: "glow-fm-website",
    link: "https://glowfmradio.com",
    linkType: "website",
  },
  {
    title: "Maktaris Herbals E-Commerce Store",
    category: "E-Commerce & Health",
    impact: "Online herbal products catalogue with ordering",
    detail: "Built an e-commerce website for Maktaris Herbals, featuring a product catalogue of chemical-free herbs, customer testimonials, easy payment flow, and fast delivery options for health-conscious buyers.",
    metric: "Full product storefront",
    slug: "maktaris-herbals",
    link: "https://maktaris.onrender.com",
    linkType: "website",
  },
  {
    title: "Compassionate Backers Financial Services Landing Page",
    category: "FinTech & Services",
    impact: "Professional financial services web presence",
    detail: "Designed and developed a professional landing page for Compassionate Backers, a financial services company offering loans, asset acquisition, and investment services, complete with service showcase and contact integration.",
    metric: "Service-ready landing page",
    slug: "compassionate-backers",
    link: "https://loan-landing-page.onrender.com",
    linkType: "website",
  },
  {
    title: "Cryptocurrency Simulation Profit & Trading Training Growth Website",
    category: "FinTech & Education",
    impact: "Real-time trading simulation for trainees",
    detail: "Developed an immersive crypto trading simulation and training website that lets users practise buying, selling, and portfolio management in a safe environment, tracking growth and profit metrics over time.",
    metric: "Hands-on trading training",
    slug: "crypto-trading-training",
    link: "https://invisphere.com",
    linkType: "website",
  },
  {
    title: "Glow FM Mobile Application",
    category: "Mobile Development",
    impact: "On-the-go listening for loyal audience",
    detail: "Created a dedicated mobile application for Glow FM, delivering live radio streaming, episode replays, news updates, and push notifications to thousands of listeners on Android and iOS.",
    metric: "Live mobile radio app",
    slug: "glow-fm-mobile-app",
    link: "https://play.google.com/store/apps/details?id=com.glowfmradio.app&pcampaignid=web_share",
    linkType: "app",
  },
  {
    title: "Social Media Management & Growth of Glow 99.1 FM",
    category: "Social Media & Growth",
    impact: "Consistent audience growth across platforms",
    detail: "Managed and grew Glow 99.1 FM's social media presence across Facebook, Instagram, and Twitter, developing content calendars, running engagement campaigns, and growing the station's digital audience significantly.",
    metric: "Multi-platform audience growth",
    slug: "glow-fm-social-media",
    link: null,
    linkType: "website",
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-6 tracking-tight text-foreground">
            Proof of Impact
          </h2>
          <p className="text-foreground max-w-2xl mx-auto text-lg">
            Real projects delivering measurable results across industries.
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cases.map(({ title, category, detail, metric, slug, link, linkType }) => (
            <div
              key={slug}
              className="flex flex-col border border-border p-6 bg-card transition-shadow hover:shadow-lg"
              data-testid={`case-study-${slug}`}
            >
              <span className="text-xs font-semibold uppercase tracking-widest mb-4 block text-foreground">
                {category}
              </span>
              <h3 className="font-bold text-xl mb-3 text-foreground leading-snug">
                {title}
              </h3>
              <p className="text-foreground text-sm mb-8 leading-relaxed flex-grow">
                {detail}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                <span className="text-xs font-medium text-foreground">
                  {metric}
                </span>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-foreground transition-colors"
                  >
                    {linkType === "app" ? (
                      <>Access <Smartphone className="w-3 h-3" /></>
                    ) : (
                      <>View <ExternalLink className="w-3 h-3" /></>
                    )}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-4 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors font-medium text-base rounded-none"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
