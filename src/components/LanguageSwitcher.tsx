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

// SVG flag components for consistent cross-browser rendering
const FlagIcon = ({ code }: { code: Language }) => {
  const flags: Record<Language, JSX.Element> = {
    en: (
      <svg className="w-5 h-4 rounded-sm" viewBox="0 0 60 30">
        <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
        <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
        <g clipPath="url(#s)">
          <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
          <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
        </g>
      </svg>
    ),
    ja: (
      <svg className="w-5 h-4 rounded-sm" viewBox="0 0 60 40">
        <rect width="60" height="40" fill="#fff"/>
        <circle cx="30" cy="20" r="12" fill="#BC002D"/>
      </svg>
    ),
    my: (
      <svg className="w-5 h-4 rounded-sm" viewBox="0 0 60 40">
        <rect width="60" height="13.33" fill="#FECB00"/>
        <rect y="13.33" width="60" height="13.34" fill="#34B233"/>
        <rect y="26.67" width="60" height="13.33" fill="#EA2839"/>
        <polygon points="30,7 33.5,18 45,18 35.75,25 39.25,36 30,29 20.75,36 24.25,25 15,18 26.5,18" fill="#fff"/>
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
