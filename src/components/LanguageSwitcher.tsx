import { useLanguage } from "@/i18n/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Language } from "@/i18n/translations";

// SVG flag components for consistent cross-browser rendering (circular)
const FlagIcon = ({ code }: { code: Language }) => {
  const flags: Record<Language, JSX.Element> = {
    en: (
      <svg className="w-5 h-5" viewBox="0 0 40 40">
        <defs>
          <clipPath id="circle-en"><circle cx="20" cy="20" r="20"/></clipPath>
        </defs>
        <g clipPath="url(#circle-en)">
          <rect width="40" height="40" fill="#012169"/>
          <path d="M0,0 L40,40 M40,0 L0,40" stroke="#fff" strokeWidth="8"/>
          <path d="M0,0 L40,40" stroke="#C8102E" strokeWidth="4" transform="translate(0,0)"/>
          <path d="M40,0 L0,40" stroke="#C8102E" strokeWidth="4"/>
          <path d="M20,0 v40 M0,20 h40" stroke="#fff" strokeWidth="12"/>
          <path d="M20,0 v40 M0,20 h40" stroke="#C8102E" strokeWidth="7"/>
        </g>
      </svg>
    ),
    ja: (
      <svg className="w-5 h-5" viewBox="0 0 40 40">
        <defs>
          <clipPath id="circle-ja"><circle cx="20" cy="20" r="20"/></clipPath>
        </defs>
        <g clipPath="url(#circle-ja)">
          <rect width="40" height="40" fill="#fff"/>
          <circle cx="20" cy="20" r="10" fill="#BC002D"/>
        </g>
      </svg>
    ),
    my: (
      <svg className="w-5 h-5" viewBox="0 0 40 40">
        <defs>
          <clipPath id="circle-my"><circle cx="20" cy="20" r="20"/></clipPath>
        </defs>
        <g clipPath="url(#circle-my)">
          <rect width="40" height="13.33" fill="#FECB00"/>
          <rect y="13.33" width="40" height="13.34" fill="#34B233"/>
          <rect y="26.67" width="40" height="13.33" fill="#EA2839"/>
          <polygon points="20,5 22.5,14 32,14 24.5,19 27,28 20,23 13,28 15.5,19 8,14 17.5,14" fill="#fff"/>
        </g>
      </svg>
    ),
  };
  return flags[code] || null;
};

const LanguageSwitcher = () => {
  const { language, setLanguage, languages } = useLanguage();

  const currentLanguage = languages.find((l) => l.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1.5">
          <FlagIcon code={language} />
          <span className="hidden sm:inline">{currentLanguage?.name}</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card border-border z-50">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`cursor-pointer gap-2 ${language === lang.code ? "bg-muted" : ""}`}
          >
            <FlagIcon code={lang.code} />
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
