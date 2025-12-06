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
