export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted border-y border-border">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-8 tracking-tight text-foreground uppercase">
          About Us
        </h2>
        <div className="space-y-6 text-lg sm:text-xl text-muted-foreground leading-relaxed font-serif">
          <p>
            At ARCOLYTE TECHNOLOGIES, we believe that the next era of business will be defined by intelligence and speed. We partner with bold founders and enterprises to build the infrastructure of tomorrow.
          </p>
          <p>
            Our expertise spans cutting-edge web development, mobile applications, AI systems, and robust backend architecture. We don't just write code; we design scalable solutions that solve real-world problems and drive measurable growth.
          </p>
          <p className="text-foreground font-medium pt-4">
            We are architects of the digital frontier.
          </p>
        </div>
      </div>
    </section>
  );
}
