import { Link } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import Navigation from "@/components/Navigation";
import SportaTab from "@/components/SportaTab";
import { Button } from "@/components/ui/button";
import { Loader2, Globe2, Zap } from "lucide-react";

export default function SportaPage() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-foreground" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="container mx-auto px-6 pt-36 text-center">
          <Globe2 className="w-16 h-16 text-foreground mx-auto mb-6" />
          <h1 className="text-4xl font-bold uppercase tracking-widest text-foreground mb-4">SPORTA</h1>
          <p className="text-foreground text-lg mb-8 max-w-md mx-auto">
            AI-powered social media aggregator &amp; publisher. Sign in to start automating your content.
          </p>
          <Link href="/auth">
            <Button className="bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-bold uppercase tracking-wider rounded-none px-8 py-6">
              <Zap className="w-4 h-4 mr-2" /> Sign In to Access SPORTA
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <div className="container mx-auto px-6 pt-28 pb-16">
        <div className="mb-12 border-b border-border pb-8">
          <div className="flex items-center gap-4 mb-3">
            <Globe2 className="w-10 h-10 text-foreground" />
            <h1 className="text-4xl font-bold uppercase tracking-widest text-foreground">SPORTA</h1>
          </div>
          <p className="text-foreground text-lg font-medium">AI-powered social media aggregator &amp; publisher, your personal content engine</p>
        </div>
        <SportaTab />
      </div>
    </div>
  );
}
