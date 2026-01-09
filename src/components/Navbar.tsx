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
            <div className="w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-md group-hover:shadow-glow transition-shadow duration-300">
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                {/* S letter */}
                <path
                  d="M26 13C26 13 23.5 9 20 9C16 9 13 11.5 13 14.5C13 17.5 16 19 20 20.5C24 22 27 24 27 27.5C27 31 23.5 33 20 33C16 33 14 29 14 29"
                  stroke="hsl(var(--primary))"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Dotted line connecting diamonds */}
                <line
                  x1="20"
                  y1="14"
                  x2="20"
                  y2="28"
                  stroke="hsl(var(--destructive))"
                  strokeWidth="1.5"
                  strokeDasharray="2 2"
                />
                {/* Top diamond */}
                <rect
                  x="17"
                  y="11"
                  width="6"
                  height="6"
                  fill="hsl(45, 100%, 50%)"
                  transform="rotate(45 20 14)"
                />
                {/* Bottom diamond */}
                <rect
                  x="17"
                  y="25"
                  width="6"
                  height="6"
                  fill="hsl(45, 100%, 50%)"
                  transform="rotate(45 20 28)"
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
