import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Store, Cpu } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: "#services", label: t.nav.services },
    { href: "#features", label: t.nav.features },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-11 h-11 relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
                {/* Shop bag (top) */}
                <path
                  d="M14 16h12a2 2 0 012 2v10a3 3 0 01-3 3H15a3 3 0 01-3-3V18a2 2 0 012-2z"
                  fill="hsl(var(--primary))"
                  opacity="0.9"
                />
                {/* Bag handle */}
                <path
                  d="M17 16v-2a3 3 0 013-3h0a3 3 0 013 3v2"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Gear/cog (bottom, overlapping) */}
                <circle
                  cx="32"
                  cy="32"
                  r="8"
                  fill="hsl(var(--teal))"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="3"
                  fill="hsl(var(--background))"
                />
                {/* Gear teeth */}
                <g fill="hsl(var(--teal))">
                  <rect x="30.5" y="22" width="3" height="4" rx="1" />
                  <rect x="30.5" y="38" width="3" height="4" rx="1" />
                  <rect x="22" y="30.5" width="4" height="3" rx="1" />
                  <rect x="38" y="30.5" width="4" height="3" rx="1" />
                  <rect x="24" y="24" width="3" height="3" rx="1" transform="rotate(45 25.5 25.5)" />
                  <rect x="37" y="37" width="3" height="3" rx="1" transform="rotate(45 38.5 38.5)" />
                  <rect x="37" y="24" width="3" height="3" rx="1" transform="rotate(45 38.5 25.5)" />
                  <rect x="24" y="37" width="3" height="3" rx="1" transform="rotate(45 25.5 38.5)" />
                </g>
                {/* Connection line (S flow) */}
                <path
                  d="M20 28c0 4 8 4 12 8"
                  stroke="hsl(var(--coral))"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="3 2"
                  fill="none"
                />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold text-foreground">Shin</span>
              <div className="mt-0.5 flex items-center gap-1.5 text-muted-foreground">
                <Store className="w-3 h-3" aria-label="Shop" />
                <span className="h-px w-5 bg-border" aria-hidden />
                <Cpu className="w-3 h-3" aria-label="System" />
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <Button variant="ghost" size="sm">
              {t.nav.signIn}
            </Button>
            <Button variant="default" size="sm">
              {t.nav.getDemo}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg font-medium transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4 px-4">
                <Button variant="outline" className="w-full">
                  {t.nav.signIn}
                </Button>
                <Button variant="default" className="w-full">
                  {t.nav.getDemo}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
