import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, LogIn, LogOut, User, MessageCircle, LayoutDashboard, Sun, Moon, Settings, ChevronDown } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { useTheme } from "@/hooks/use-theme";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/features", label: "Hub" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background border-b border-border ${isScrolled ? "shadow-sm" : ""}`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer" data-testid="nav-logo">
            <img src="/arcolytelogo.png" alt="ARCOLYTE Logo" className="h-8 w-auto object-contain" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <button className="text-sm font-medium text-foreground hover:text-foreground transition-colors">
                {link.label}
              </button>
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="text-foreground h-9 w-9 rounded-full"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>

          {user ? (
            <div className="flex items-center gap-2">
              <Link href="/dashboard">
                <Button variant="ghost" className="text-sm font-medium text-foreground">
                  Dashboard
                </Button>
              </Link>
              <Button
                variant="outline"
                size="sm"
                onClick={() => logout()}
                className="rounded-none border-border hover:bg-accent hover:text-white"
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <Link href="/auth">
              <Button className="rounded-none bg-foreground text-background hover:bg-accent hover:text-white transition-colors">
                Sign In
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-foreground"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              <button className="text-left w-full text-lg font-medium text-foreground py-2 border-b border-border/50">
                {link.label}
              </button>
            </Link>
          ))}
          {user ? (
            <>
              <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                <button className="text-left w-full text-lg font-medium text-foreground py-2 border-b border-border/50">
                  Dashboard
                </button>
              </Link>
              <button
                onClick={() => { logout(); setIsOpen(false); }}
                className="text-left w-full text-lg font-medium text-destructive py-2"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link href="/auth" onClick={() => setIsOpen(false)}>
              <button className="text-left w-full text-lg font-medium text-accent py-2">
                Sign In
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
