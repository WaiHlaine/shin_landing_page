import { Store } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useLanguage } from "@/i18n/LanguageContext";

// SVG Flag Components
const JapanFlag = () => (
  <svg className="w-12 h-12 rounded-full shadow-md" viewBox="0 0 512 512">
    <rect fill="#fff" width="512" height="512"/>
    <circle fill="#bc002d" cx="256" cy="256" r="96"/>
  </svg>
);

const MyanmarFlag = () => (
  <svg className="w-12 h-12 rounded-full shadow-md" viewBox="0 0 512 512">
    <rect fill="#34b233" y="341.3" width="512" height="170.7"/>
    <rect fill="#fecb00" y="170.7" width="512" height="170.6"/>
    <rect fill="#ea2839" width="512" height="170.7"/>
    <polygon fill="#fff" points="256,96 293.5,211.6 414.5,211.6 315.5,282.4 353,398 256,327.2 159,398 196.5,282.4 97.5,211.6 218.5,211.6"/>
  </svg>
);

const ThailandFlag = () => (
  <svg className="w-12 h-12 rounded-full shadow-md" viewBox="0 0 512 512">
    <rect fill="#fff" width="512" height="512"/>
    <rect fill="#a51931" width="512" height="85.3"/>
    <rect fill="#a51931" y="426.7" width="512" height="85.3"/>
    <rect fill="#f4f5f8" y="85.3" width="512" height="85.3"/>
    <rect fill="#f4f5f8" y="341.4" width="512" height="85.3"/>
    <rect fill="#2d2a4a" y="170.6" width="512" height="170.8"/>
  </svg>
);

const KoreaFlag = () => (
  <svg className="w-12 h-12 rounded-full shadow-md" viewBox="0 0 512 512">
    <rect fill="#fff" width="512" height="512"/>
    <circle fill="#c60c30" cx="256" cy="256" r="96"/>
    <path fill="#003478" d="M256,256 A48,48 0 0,1 304,208 A48,48 0 0,0 256,160 A96,96 0 0,0 160,256 Z"/>
    <path fill="#c60c30" d="M256,256 A48,48 0 0,1 208,304 A48,48 0 0,0 256,352 A96,96 0 0,0 352,256 Z"/>
  </svg>
);

const SingaporeFlag = () => (
  <svg className="w-12 h-12 rounded-full shadow-md" viewBox="0 0 512 512">
    <rect fill="#ed2939" width="512" height="256"/>
    <rect fill="#fff" y="256" width="512" height="256"/>
    <g fill="#fff" transform="translate(80, 80)">
      <path d="M48,0 A48,48 0 1,0 48,96 A38,38 0 1,1 48,0"/>
      <polygon points="90,12 94,24 106,24 96,32 100,44 90,36 80,44 84,32 74,24 86,24"/>
      <polygon points="120,32 124,44 136,44 126,52 130,64 120,56 110,64 114,52 104,44 116,44"/>
      <polygon points="120,72 124,84 136,84 126,92 130,104 120,96 110,104 114,92 104,84 116,84"/>
      <polygon points="90,92 94,104 106,104 96,112 100,124 90,116 80,124 84,112 74,104 86,104"/>
      <polygon points="60,72 64,84 76,84 66,92 70,104 60,96 50,104 54,92 44,84 56,84"/>
    </g>
  </svg>
);

const flagComponents: Record<string, React.FC> = {
  japan: JapanFlag,
  myanmar: MyanmarFlag,
  thailand: ThailandFlag,
  korea: KoreaFlag,
  singapore: SingaporeFlag,
};

const GlobalPresenceSection = () => {
  const { t } = useLanguage();

  const countries = [
    { key: "japan", shops: 2, color: "from-red-500 to-pink-500" },
    { key: "myanmar", shops: 3, color: "from-yellow-500 to-green-500" },
    { key: "thailand", shops: 2, color: "from-blue-500 to-red-500" },
    { key: "korea", shops: 3, color: "from-blue-600 to-red-600" },
    { key: "singapore", shops: 4, color: "from-red-600 to-white" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.globalPresence.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.globalPresence.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {countries.map((country) => {
                const FlagComponent = flagComponents[country.key];
                return (
                  <CarouselItem
                    key={country.key}
                    className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="group relative bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border h-full">
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-4">
                          <FlagComponent />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {t.globalPresence.countries[country.key as keyof typeof t.globalPresence.countries]}
                        </h3>
                        <div className="flex items-center gap-2 text-primary">
                          <Store className="w-5 h-5" />
                          <span className="text-2xl font-bold">{country.shops}</span>
                          <span className="text-muted-foreground">
                            {country.shops === 1 ? t.globalPresence.shop : t.globalPresence.shops}
                          </span>
                        </div>
                      </div>
                      <div
                        className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${country.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity`}
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
        </div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground">
            Total:{" "}
            <span className="text-primary font-bold text-xl">
              {countries.reduce((acc, c) => acc + c.shops, 0)}
            </span>{" "}
            {t.globalPresence.total}
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
