import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$15",
    period: "/month",
    description: "Perfect for small restaurants just getting started.",
    features: [
      "QR menu ordering",
      "Kitchen order screen",
      "Basic analytics",
      "Email support",
      "1 location",
    ],
    cta: "Start Basic",
    popular: false,
  },
  {
    name: "Standard",
    price: "$25",
    period: "/month",
    description: "Best for growing restaurants with more needs.",
    features: [
      "Everything in Basic",
      "Cashier module",
      "Admin panel",
      "Advanced analytics",
      "Priority support",
      "Up to 3 locations",
    ],
    cta: "Start Standard",
    popular: true,
  },
  {
    name: "Pro",
    price: "$35",
    period: "/month",
    description: "For restaurant chains and high-volume operations.",
    features: [
      "Everything in Standard",
      "Unlimited locations",
      "Priority support 24/7",
      "Custom integrations",
      "Dedicated account manager",
      "White-label option",
    ],
    cta: "Start Pro",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent
            <span className="text-gradient"> Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            No hidden fees. No long-term contracts. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 border transition-all duration-500 hover:shadow-lg ${
                plan.popular
                  ? "border-primary shadow-lg scale-105 lg:scale-110"
                  : "border-border hover:border-primary/20"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-hero text-primary-foreground text-sm font-medium shadow-glow">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-3">
                  <span className="text-4xl lg:text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-mint/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-mint" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
