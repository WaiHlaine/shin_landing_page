import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, MonitorPlay, CreditCard } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const icons = [Smartphone, MonitorPlay, CreditCard];
  const accents = ["coral", "mint", "navy"];

  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            {t.services.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.services.title}
            <span className="text-gradient">{t.services.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => {
            const Icon = icons[index];
            const accent = accents[index];

            return (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 border border-border hover:border-primary/20"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                    accent === "coral"
                      ? "bg-gradient-hero"
                      : accent === "mint"
                      ? "bg-mint"
                      : "bg-gradient-navy"
                  }`}
                >
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-mint/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-mint" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={accent === "coral" ? "default" : accent === "mint" ? "mint" : "navy"}
                  className="w-full group/btn"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
