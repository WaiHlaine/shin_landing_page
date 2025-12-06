import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-background to-cream-dark" />
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-coral/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-mint/10 rounded-full blur-3xl" />
      
      {/* Floating Elements */}
      <div className="absolute top-32 left-10 lg:left-32 animate-float">
        <div className="w-16 h-16 rounded-2xl bg-gradient-hero shadow-lg flex items-center justify-center">
          <Zap className="w-8 h-8 text-primary-foreground" />
        </div>
      </div>
      <div className="absolute top-48 right-10 lg:right-40 animate-float" style={{ animationDelay: "1s" }}>
        <div className="w-14 h-14 rounded-2xl bg-mint shadow-lg flex items-center justify-center">
          <Shield className="w-7 h-7 text-accent-foreground" />
        </div>
      </div>
      <div className="absolute bottom-32 left-20 lg:left-48 animate-float" style={{ animationDelay: "2s" }}>
        <div className="w-12 h-12 rounded-2xl bg-navy shadow-lg flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-primary-foreground" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4" />
            <span>Trusted by 1,000+ Restaurants Nationwide</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Smart Food
            <span className="block text-gradient">Ordering System</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Used by restaurants across the country. Simple, fast, and affordable. 
            Transform your restaurant operations with our cloud-based ordering platform.
          </p>

          {/* Device Mockups */}
          <div className="flex items-end justify-center gap-4 lg:gap-6 mb-10 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            {/* Tablet Mockup */}
            <div className="relative w-64 sm:w-80 lg:w-96 h-48 sm:h-56 lg:h-64 bg-foreground rounded-2xl p-2 shadow-2xl">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-muted-foreground/30 rounded-full" />
              <div className="w-full h-full bg-background rounded-xl overflow-hidden">
                {/* Mock UI */}
                <div className="h-full flex">
                  {/* Menu Side */}
                  <div className="flex-1 p-2 sm:p-3 border-r border-border">
                    <div className="text-[10px] sm:text-xs font-bold text-foreground mb-2">Menu</div>
                    <div className="space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-2 p-1.5 rounded-lg bg-muted/50">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-hero flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="h-2 w-16 bg-muted-foreground/20 rounded mb-1" />
                            <div className="h-1.5 w-10 bg-primary/40 rounded" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Cart Side */}
                  <div className="w-24 sm:w-28 lg:w-32 p-2 sm:p-3 bg-muted/30">
                    <div className="text-[10px] sm:text-xs font-bold text-foreground mb-2">Cart</div>
                    <div className="space-y-1.5 mb-3">
                      {[1, 2].map((i) => (
                        <div key={i} className="flex justify-between text-[8px] sm:text-[10px]">
                          <span className="text-muted-foreground">Item {i}</span>
                          <span className="text-foreground font-medium">$12</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-border pt-2">
                      <div className="flex justify-between text-[10px] sm:text-xs font-bold">
                        <span className="text-foreground">Total</span>
                        <span className="text-primary">$24</span>
                      </div>
                    </div>
                    <div className="mt-2 h-5 sm:h-6 bg-primary rounded-md flex items-center justify-center">
                      <span className="text-[8px] sm:text-[10px] text-primary-foreground font-medium">Order Now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative w-20 sm:w-24 lg:w-28 h-40 sm:h-48 lg:h-56 bg-foreground rounded-2xl p-1.5 shadow-2xl hidden sm:block">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-muted-foreground/30 rounded-full" />
              <div className="w-full h-full bg-background rounded-xl overflow-hidden">
                {/* Mock UI */}
                <div className="p-2">
                  <div className="text-[8px] font-bold text-foreground mb-2">Orders</div>
                  <div className="space-y-1.5">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="p-1.5 rounded-md bg-muted/50">
                        <div className="flex items-center justify-between mb-1">
                          <div className="h-1.5 w-8 bg-muted-foreground/30 rounded" />
                          <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-mint' : i === 2 ? 'bg-primary' : 'bg-muted-foreground/30'}`} />
                        </div>
                        <div className="h-1 w-12 bg-muted-foreground/20 rounded" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" className="w-full sm:w-auto group">
              Get Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="w-full sm:w-auto group">
              <Play className="w-5 h-5" />
              Watch Video
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 mt-16 lg:mt-24 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "1,000+", label: "Active Restaurants" },
              { value: "99.9%", label: "Uptime" },
              { value: "50K+", label: "Daily Orders" },
              { value: "4.9/5", label: "Customer Rating" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
