import { ArrowRight, MessageSquare, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-6 tracking-tight text-foreground">
              Let's Build the Future Together
            </h2>
            <p className="text-foreground text-lg mb-10 leading-relaxed">
              Whether you need to scale your infrastructure, implement AI automation, or redesign your digital presence, our team is ready to deliver.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-background flex items-center justify-center shrink-0 border border-border rounded-none">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-lg">Email Us</h4>
                  <a href="mailto:arcolytetech@gmail.com" className="text-foreground hover:text-foreground transition-colors">
                    arcolytetech@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-background flex items-center justify-center shrink-0 border border-border rounded-none">
                  <MessageSquare className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-lg">Chat with Us</h4>
                  <a href="https://wa.me/2348122536647" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-foreground transition-colors">
                    WhatsApp (+234) 812 253 6647
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-background flex items-center justify-center shrink-0 border border-border rounded-none">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-lg">Location</h4>
                  <p className="text-foreground">Global Remote Operations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background border border-border p-8">
            <h3 className="font-bold text-2xl mb-8 text-foreground">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-muted border border-border px-4 py-3 text-foreground focus:outline-none focus:border-foreground transition-colors rounded-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-muted border border-border px-4 py-3 text-foreground focus:outline-none focus:border-foreground transition-colors rounded-none"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  className="w-full bg-muted border border-border px-4 py-3 text-foreground focus:outline-none focus:border-foreground transition-colors resize-none h-32 rounded-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                className="w-full bg-black text-white hover:bg-zinc-800 dark:bg-black dark:text-white dark:border dark:border-zinc-800 dark:hover:bg-zinc-900 font-medium py-4 transition-colors flex items-center justify-center gap-2 rounded-none"
              >
                Send Inquiry <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
