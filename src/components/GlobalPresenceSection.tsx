import { Store } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const countries = [
  { name: "Japan", flag: "🇯🇵", shops: 2, color: "from-red-500 to-pink-500" },
  { name: "Myanmar", flag: "🇲🇲", shops: 3, color: "from-yellow-500 to-green-500" },
  { name: "Thailand", flag: "🇹🇭", shops: 2, color: "from-blue-500 to-red-500" },
  { name: "Korea", flag: "🇰🇷", shops: 3, color: "from-blue-600 to-red-600" },
  { name: "Singapore", flag: "🇸🇬", shops: 4, color: "from-red-600 to-white" },
];

const GlobalPresenceSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Global Presence
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by restaurants across Asia Pacific
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
              {countries.map((country) => (
                <CarouselItem
                  key={country.name}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="group relative bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border h-full">
                    <div className="flex flex-col items-center text-center">
                      <span className="text-5xl mb-4">{country.flag}</span>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {country.name}
                      </h3>
                      <div className="flex items-center gap-2 text-primary">
                        <Store className="w-5 h-5" />
                        <span className="text-2xl font-bold">{country.shops}</span>
                        <span className="text-muted-foreground">
                          {country.shops === 1 ? "shop" : "shops"}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${country.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity`}
                    />
                  </div>
                </CarouselItem>
              ))}
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
            restaurants using Apollo
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
