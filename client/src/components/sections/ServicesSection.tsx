import { Brain, Code, Bot, Palette, BarChart3 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const services = [
  {
    icon: Bot,
    title: "Automation Systems",
    description: "We set up smart systems that handle repetitive tasks for you, from responding to leads and sorting emails to running workflows while you sleep.",
    image: "https://zd-brightspot.s3.us-east-1.amazonaws.com/wp-content/uploads/2024/02/26091442/Shutterstock_1133982038.jpg",
    imageAlt: "Automation and robotics technology",
  },
  {
    icon: Code,
    title: "Web & App Development",
    description: "We build fast, professional websites and mobile apps that look great, work on any device, and are designed to turn visitors into customers.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
    imageAlt: "Web and app development on laptop",
  },
  {
    icon: Brain,
    title: "AI Integrations",
    description: "We connect AI tools to your existing systems: chatbots that answer customer questions, smart search, and recommendations that save your team hours every day.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    imageAlt: "Artificial intelligence and machine learning",
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    description: "Logo design, brand guidelines, and visual kits that give your business a consistent and professional look across every platform.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    imageAlt: "Brand identity and design",
  },
  {
    icon: BarChart3,
    title: "Strategic Consulting",
    description: "Clear product planning, process reviews, and go-to-market strategies to help you grow with less guesswork and more direction.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    imageAlt: "Strategic business consulting and analytics",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-6 tracking-tight text-foreground">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Strategy, design, and engineering under one roof. Practical solutions that move your business forward.
          </p>
        </div>
        <div className="relative px-4 sm:px-10">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {services.map(({ icon: Icon, title, description, image, imageAlt }) => (
                <CarouselItem key={title} className="sm:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="flex flex-col border border-border h-full bg-card hover:shadow-lg transition-shadow rounded-none overflow-hidden">
                    <div className="relative w-full aspect-video overflow-hidden">
                      <img
                        src={image}
                        alt={imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute bottom-4 left-4 w-10 h-10 flex items-center justify-center bg-background border border-border rounded-none">
                        <Icon className="w-5 h-5 text-foreground" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-3 text-foreground">{title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-border text-foreground hover:bg-muted bg-background rounded-none -left-4 sm:-left-6" />
            <CarouselNext className="border-border text-foreground hover:bg-muted bg-background rounded-none -right-4 sm:-right-6" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
