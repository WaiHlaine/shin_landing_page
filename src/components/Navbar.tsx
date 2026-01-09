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
            <div className="w-12 h-12 relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
                {/* Circle outline */}
                <circle
                  cx="32"
                  cy="32"
                  r="29"
                  stroke="hsl(200, 70%, 55%)"
                  strokeWidth="2"
                  fill="none"
                />
                {/* S letter - bold blue */}
                <text
                  x="32"
                  y="46"
                  textAnchor="middle"
                  fontSize="42"
                  fontWeight="bold"
                  fontFamily="Arial, sans-serif"
                  fill="hsl(200, 70%, 55%)"
                >
                  S
                </text>
                {/* Red dotted line connecting diamonds */}
                <line
                  x1="32"
                  y1="20"
                  x2="32"
                  y2="46"
                  stroke="hsl(0, 75%, 50%)"
                  strokeWidth="2.5"
                  strokeDasharray="4 3"
                />
                {/* Top diamond (Shop) */}
                <polygon
                  points="32,14 38,20 32,26 26,20"
                  fill="hsl(50, 100%, 50%)"
                  stroke="hsl(45, 90%, 45%)"
                  strokeWidth="1"
                />
                {/* Bottom diamond (System) */}
                <polygon
                  points="32,40 38,46 32,52 26,46"
                  fill="hsl(50, 100%, 50%)"
                  stroke="hsl(45, 90%, 45%)"
                  strokeWidth="1"
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
