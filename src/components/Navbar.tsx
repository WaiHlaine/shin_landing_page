import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
            <div className="w-14 h-14 relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              {/* Rotating SHION text */}
              <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 56 56">
                <defs>
                  <path
                    id="textCircle"
                    d="M 28,28 m -22,0 a 22,22 0 1,1 44,0 a 22,22 0 1,1 -44,0"
                    fill="none"
                  />
                </defs>
                <text className="fill-primary text-[8px] font-bold tracking-[0.35em] uppercase">
                  <textPath href="#textCircle" startOffset="0%">
                    SHIN • SHIN • SHIN •
                  </textPath>
                </text>
              </svg>
              {/* Center logo */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="relative z-10">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" opacity="0.9" className="text-primary" />
                <path
                  d="M16 8C16 8 14.5 6.5 12 6.5C9.5 6.5 8 8 8 9.5C8 11 9.5 11.8 12 12.5C14.5 13.2 16 14 16 15.5C16 17 14.5 18.5 12 18.5C9.5 18.5 8 17 8 17"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  fill="none"
                  className="text-primary"
                />
              </svg>
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
            <Button variant="ghost" size="sm" asChild>
              <a href="http://localhost:8080/login" target="_blank" rel="noopener noreferrer">
                {t.nav.signIn}
              </a>
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
                <Button variant="outline" className="w-full" asChild>
                  <a href="http://localhost:8080/login" target="_blank" rel="noopener noreferrer">
                    {t.nav.signIn}
                  </a>
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
