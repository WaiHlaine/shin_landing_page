import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = {
    [t.footer.product]: [
      { label: t.footer.links.features, href: "#features" },
      { label: t.footer.links.pricing, href: "#pricing" },
      { label: t.footer.links.demo, href: "#contact" },
      { label: t.footer.links.updates, href: "#" },
    ],
    [t.footer.company]: [
      { label: t.footer.links.about, href: "#" },
      { label: t.footer.links.careers, href: "#" },
      { label: t.footer.links.blog, href: "#" },
      { label: t.footer.links.press, href: "#" },
    ],
    [t.footer.support]: [
      { label: t.footer.links.helpCenter, href: "#" },
      { label: t.footer.links.contact, href: "#contact" },
      { label: t.footer.links.status, href: "#" },
      { label: t.footer.links.apiDocs, href: "#" },
    ],
    [t.footer.legal]: [
      { label: t.footer.links.privacy, href: "#" },
      { label: t.footer.links.terms, href: "#" },
      { label: t.footer.links.cookies, href: "#" },
      { label: t.footer.links.licenses, href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="relative w-12 h-12">
                {/* Rotating SHIN text */}
                <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 60 60">
                  <defs>
                    <path id="footerTextCircle" d="M 30,30 m -22,0 a 22,22 0 1,1 44,0 a 22,22 0 1,1 -44,0" fill="none" />
                  </defs>
                  <text className="fill-primary-foreground/70 text-[8px] font-bold tracking-[0.3em] uppercase">
                    <textPath href="#footerTextCircle" startOffset="0%">
                      SHIN • SHIN • SHIN • SHIN • SHIN •
                    </textPath>
                  </text>
                </svg>
                {/* S Logo */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 60 60" fill="none">
                  <circle cx="30" cy="30" r="18" stroke="currentColor" strokeWidth="1.8" opacity="0.9" className="text-primary-foreground" />
                  <path
                    d="M38 22C38 22 35 19 30 19C25 19 22 22 22 25C22 28 25 29.5 30 31C35 32.5 38 34 38 37C38 40 35 43 30 43C25 43 22 40 22 40"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    fill="none"
                    className="text-primary-foreground"
                  />
                </svg>
              </div>
            </a>
            <p className="text-primary-foreground/70 text-sm mb-6 max-w-xs">
              {t.footer.description}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-primary-foreground mb-4 capitalize">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Shin. {t.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              {t.footer.privacyPolicy}
            </a>
            <a
              href="#"
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              {t.footer.termsOfService}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
