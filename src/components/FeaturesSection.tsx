import { 
  QrCode, 
  ChefHat, 
  Wallet, 
  Building2, 
  Cloud, 
  Smartphone 
} from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "QR Menu & Table Ordering",
    description: "Customers scan and order directly from their phones. No app download required.",
  },
  {
    icon: ChefHat,
    title: "Kitchen Order Screen",
    description: "Real-time order display for kitchen staff with priority management.",
  },
  {
    icon: Wallet,
    title: "Cashier Payment Module",
    description: "Seamless payment processing with multiple payment methods support.",
  },
  {
    icon: Building2,
    title: "Multi-Shop Support",
    description: "Manage multiple locations from a single dashboard with ease.",
  },
  {
    icon: Cloud,
    title: "Cloud-Based",
    description: "Access your data anywhere, anytime. Automatic backups included.",
  },
  {
    icon: Smartphone,
    title: "Works on Any Device",
    description: "Compatible with tablets, phones, and desktop computers.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-coral/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-mint/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-mint/10 text-mint font-medium text-sm mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Powerful Features for
            <span className="text-gradient"> Modern Restaurants</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to run your restaurant efficiently in one platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 lg:p-8 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-500"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-coral/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-gradient-hero group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
