import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap, Shield, Pizza, Coffee, Salad, Sandwich, CreditCard, ChefHat, BarChart3, Wifi, Globe, Check, Clock, Flame, DollarSign, Users, Receipt, TrendingUp } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import DemoRequestModal from "./DemoRequestModal";

type MockupView = "qr" | "cashier" | "kitchen" | "summary";

const HeroSection = () => {
  const { t } = useLanguage();
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [activeView, setActiveView] = useState<MockupView>("qr");

  const stats = [
    { value: "1,000+", label: t.hero.stats.restaurants },
    { value: "99.9%", label: t.hero.stats.uptime },
    { value: "50K+", label: t.hero.stats.orders },
    { value: "4.9/5", label: t.hero.stats.rating },
  ];

  const viewTabs = [
    { id: "qr" as const, label: "QR Order", icon: Pizza },
    { id: "cashier" as const, label: "Cashier", icon: CreditCard },
    { id: "kitchen" as const, label: "Kitchen", icon: ChefHat },
    { id: "summary" as const, label: "Realtime", icon: BarChart3 },
  ];

  // QR Order View (existing)
  const QROrderView = () => (
    <div className="h-full flex">
      <div className="flex-1 p-3 sm:p-4 border-r border-border">
        <div className="text-xs sm:text-sm font-bold text-foreground mb-3">{t.hero.mockup.menu}</div>
        <div className="space-y-3">
          {[
            { icon: Pizza, name: "Pizza", price: "$18", color: "bg-coral/20 text-coral" },
            { icon: Salad, name: "Salad", price: "$12", color: "bg-mint/20 text-mint" },
            { icon: Sandwich, name: "Sandwich", price: "$15", color: "bg-primary/20 text-primary" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-2 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs sm:text-sm font-medium text-foreground">{item.name}</div>
                <div className="text-xs text-primary font-semibold">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-28 sm:w-32 lg:w-40 p-3 sm:p-4 bg-muted/30">
        <div className="text-xs sm:text-sm font-bold text-foreground mb-3">{t.hero.mockup.cart}</div>
        <div className="space-y-2 mb-4">
          {["Pizza", "Salad"].map((item, i) => (
            <div key={i} className="flex justify-between text-[10px] sm:text-xs">
              <span className="text-muted-foreground">{item}</span>
              <span className="text-foreground font-medium">${i === 0 ? 18 : 12}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-3">
          <div className="flex justify-between text-xs sm:text-sm font-bold">
            <span className="text-foreground">{t.hero.mockup.total}</span>
            <span className="text-primary">$30</span>
          </div>
        </div>
        <div className="mt-3 h-7 sm:h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-[10px] sm:text-xs text-primary-foreground font-medium">{t.hero.mockup.orderNow}</span>
        </div>
      </div>
    </div>
  );

  // Cashier View
  const CashierView = () => (
    <div className="h-full flex">
      <div className="flex-1 p-3 sm:p-4 border-r border-border">
        <div className="text-xs sm:text-sm font-bold text-foreground mb-2">Active Orders</div>
        <div className="space-y-2">
          {[
            { id: "#201", items: 3, total: "$45.50", status: "Pending", statusColor: "bg-coral" },
            { id: "#200", items: 2, total: "$28.00", status: "Paid", statusColor: "bg-mint" },
            { id: "#199", items: 5, total: "$72.00", status: "Processing", statusColor: "bg-primary" },
          ].map((order, i) => (
            <div key={i} className="p-2 rounded-xl bg-muted/50 hover:bg-muted transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-foreground">{order.id}</span>
                <span className={`text-[8px] px-2 py-0.5 rounded-full text-white ${order.statusColor}`}>{order.status}</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-muted-foreground">{order.items} items</span>
                <span className="text-primary font-semibold">{order.total}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-28 sm:w-32 lg:w-40 p-3 sm:p-4 bg-muted/30">
        <div className="text-xs sm:text-sm font-bold text-foreground mb-2">Payment</div>
        <div className="space-y-2 mb-3">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <div className="text-[10px] text-muted-foreground">Order #201</div>
            <div className="text-sm font-bold text-primary">$45.50</div>
          </div>
        </div>
        <div className="space-y-2">
          <button className="w-full h-7 bg-mint rounded-lg flex items-center justify-center gap-1 hover:opacity-90 transition-opacity">
            <CreditCard className="w-3 h-3 text-white" />
            <span className="text-[10px] text-white font-medium">Card</span>
          </button>
          <button className="w-full h-7 bg-primary rounded-lg flex items-center justify-center gap-1 hover:opacity-90 transition-opacity">
            <DollarSign className="w-3 h-3 text-white" />
            <span className="text-[10px] text-white font-medium">Cash</span>
          </button>
          <button className="w-full h-7 bg-navy rounded-lg flex items-center justify-center gap-1 hover:opacity-90 transition-opacity">
            <Receipt className="w-3 h-3 text-white" />
            <span className="text-[10px] text-white font-medium">Print</span>
          </button>
        </div>
      </div>
    </div>
  );

  // Kitchen View
  const KitchenView = () => (
    <div className="h-full p-3 sm:p-4">
      <div className="text-xs sm:text-sm font-bold text-foreground mb-3">Kitchen Display</div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { id: "#201", items: ["Pizza", "Salad"], status: "start", statusLabel: "Start", color: "bg-coral", icon: Clock },
          { id: "#200", items: ["Burger", "Fries"], status: "doing", statusLabel: "Cooking", color: "bg-primary", icon: Flame },
          { id: "#199", items: ["Pasta"], status: "complete", statusLabel: "Done", color: "bg-mint", icon: Check },
        ].map((order, i) => (
          <div key={i} className={`p-2 rounded-xl border-2 ${order.status === 'doing' ? 'border-primary animate-pulse' : 'border-transparent'} bg-muted/50`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-foreground">{order.id}</span>
              <div className={`w-5 h-5 rounded-full ${order.color} flex items-center justify-center`}>
                <order.icon className="w-3 h-3 text-white" />
              </div>
            </div>
            <div className="space-y-1 mb-2">
              {order.items.map((item, j) => (
                <div key={j} className="text-[9px] text-muted-foreground truncate">• {item}</div>
              ))}
            </div>
            <button className={`w-full h-6 ${order.color} rounded-md flex items-center justify-center hover:opacity-90 transition-opacity`}>
              <span className="text-[9px] text-white font-medium">{order.statusLabel}</span>
            </button>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 text-[10px] text-muted-foreground">
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-coral" /> Queue</div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Cooking</div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-mint" /> Ready</div>
      </div>
    </div>
  );

  // Summary/Realtime View
  const SummaryView = () => (
    <div className="h-full p-3 sm:p-4">
      <div className="text-xs sm:text-sm font-bold text-foreground mb-2">Realtime Flow</div>
      
      {/* Connection indicators */}
      <div className="flex items-center gap-3 mb-3">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-mint/20">
          <Wifi className="w-3 h-3 text-mint animate-pulse" />
          <span className="text-[9px] text-mint font-medium">WebSocket</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-primary/20">
          <Globe className="w-3 h-3 text-primary" />
          <span className="text-[9px] text-primary font-medium">HTTPS</span>
        </div>
      </div>

      {/* Flow animation */}
      <div className="relative mb-3">
        <div className="flex items-center justify-between text-[8px] mb-1">
          <span className="text-muted-foreground">Client</span>
          <span className="text-muted-foreground">Server</span>
          <span className="text-muted-foreground">Kitchen</span>
        </div>
        <div className="h-8 relative">
          {/* Flow lines */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-muted" />
          {/* Animated dots */}
          <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary animate-flow-right" style={{ animationDuration: '2s' }} />
          <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-mint animate-flow-right" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
          <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-coral animate-flow-right" style={{ animationDuration: '2s', animationDelay: '1s' }} />
          {/* Nodes */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-foreground flex items-center justify-center">
            <Users className="w-2 h-2 text-background" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
            <Wifi className="w-2 h-2 text-white" />
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-coral flex items-center justify-center">
            <ChefHat className="w-2 h-2 text-white" />
          </div>
        </div>
      </div>

      {/* Live stats */}
      <div className="grid grid-cols-2 gap-2">
        <div className="p-2 rounded-lg bg-mint/10">
          <div className="flex items-center gap-1 mb-1">
            <TrendingUp className="w-3 h-3 text-mint" />
            <span className="text-[9px] text-mint font-medium">Live Orders</span>
          </div>
          <div className="text-sm font-bold text-foreground">24</div>
          <div className="text-[8px] text-muted-foreground">+3 in queue</div>
        </div>
        <div className="p-2 rounded-lg bg-primary/10">
          <div className="flex items-center gap-1 mb-1">
            <BarChart3 className="w-3 h-3 text-primary" />
            <span className="text-[9px] text-primary font-medium">Revenue</span>
          </div>
          <div className="text-sm font-bold text-foreground">$1,284</div>
          <div className="text-[8px] text-muted-foreground">Today</div>
        </div>
      </div>
    </div>
  );

  // Phone View based on active tab
  const PhoneView = () => {
    if (activeView === "cashier") {
      return (
        <div className="p-3">
          <div className="text-[10px] font-bold text-foreground mb-3">Quick Actions</div>
          <div className="space-y-2">
            {[
              { label: "New Order", icon: Receipt, color: "bg-primary" },
              { label: "Payment", icon: CreditCard, color: "bg-mint" },
              { label: "Refund", icon: DollarSign, color: "bg-coral" },
              { label: "Reports", icon: BarChart3, color: "bg-navy" },
            ].map((action, i) => (
              <div key={i} className="p-2 rounded-lg bg-muted/50 flex items-center gap-2">
                <div className={`w-6 h-6 rounded-lg ${action.color} flex items-center justify-center`}>
                  <action.icon className="w-3 h-3 text-white" />
                </div>
                <span className="text-[9px] font-medium text-foreground">{action.label}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    if (activeView === "kitchen") {
      return (
        <div className="p-3">
          <div className="text-[10px] font-bold text-foreground mb-3">Order Queue</div>
          <div className="space-y-2">
            {[
              { id: "#201", time: "2m", status: "Waiting", color: "bg-coral" },
              { id: "#200", time: "5m", status: "Cooking", color: "bg-primary" },
              { id: "#199", time: "8m", status: "Done", color: "bg-mint" },
              { id: "#198", time: "10m", status: "Served", color: "bg-muted-foreground/30" },
            ].map((order, i) => (
              <div key={i} className="p-2 rounded-lg bg-muted/50">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="text-[9px] font-medium text-foreground">{order.id}</div>
                  <div className={`w-2.5 h-2.5 rounded-full ${order.color} ${order.status === 'Cooking' ? 'animate-pulse' : ''}`} />
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-muted-foreground" />
                  <span className="text-[8px] text-muted-foreground">{order.time} • {order.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    if (activeView === "summary") {
      return (
        <div className="p-3">
          <div className="text-[10px] font-bold text-foreground mb-3">Live Stats</div>
          <div className="space-y-2">
            <div className="p-2 rounded-lg bg-mint/10">
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-mint">Active</span>
                <Wifi className="w-3 h-3 text-mint animate-pulse" />
              </div>
              <div className="text-sm font-bold text-foreground">12</div>
            </div>
            <div className="p-2 rounded-lg bg-primary/10">
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-primary">Pending</span>
                <Clock className="w-3 h-3 text-primary" />
              </div>
              <div className="text-sm font-bold text-foreground">5</div>
            </div>
            <div className="p-2 rounded-lg bg-coral/10">
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-coral">Completed</span>
                <Check className="w-3 h-3 text-coral" />
              </div>
              <div className="text-sm font-bold text-foreground">48</div>
            </div>
          </div>
        </div>
      );
    }

    // Default QR Order view
    return (
      <div className="p-3">
        <div className="text-[10px] font-bold text-foreground mb-3">{t.hero.mockup.orders}</div>
        <div className="space-y-2">
          {[
            { status: t.hero.mockup.ready, color: "bg-mint" },
            { status: t.hero.mockup.cooking, color: "bg-primary" },
            { status: t.hero.mockup.new, color: "bg-coral" },
            { status: t.hero.mockup.pending, color: "bg-muted-foreground/30" },
          ].map((order, i) => (
            <div key={i} className="p-2 rounded-lg bg-muted/50">
              <div className="flex items-center justify-between mb-1.5">
                <div className="text-[9px] font-medium text-foreground">Order #{i + 101}</div>
                <div className={`w-2.5 h-2.5 rounded-full ${order.color}`} />
              </div>
              <div className="flex items-center gap-1.5">
                <Coffee className="w-3 h-3 text-muted-foreground" />
                <span className="text-[8px] text-muted-foreground">{order.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderTabletView = () => {
    switch (activeView) {
      case "cashier": return <CashierView />;
      case "kitchen": return <KitchenView />;
      case "summary": return <SummaryView />;
      default: return <QROrderView />;
    }
  };

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
            <span>{t.hero.badge}</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {t.hero.heading}
            <span className="block text-gradient">{t.hero.headingHighlight}</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {t.hero.subheading}
          </p>

          {/* View Tabs */}
          <div className="flex items-center justify-center gap-2 mb-6 animate-fade-up" style={{ animationDelay: "0.22s" }}>
            {viewTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveView(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeView === tab.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted"
                }`}
              >
                <tab.icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Device Mockups */}
          <div className="flex items-end justify-center gap-4 lg:gap-8 mb-10 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            {/* Tablet Mockup */}
            <div className="relative w-72 sm:w-96 lg:w-[28rem] h-56 sm:h-72 lg:h-80 bg-foreground rounded-3xl p-3 shadow-2xl">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-2 bg-muted-foreground/30 rounded-full" />
              <div className="w-full h-full bg-background rounded-2xl overflow-hidden">
                {renderTabletView()}
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="relative w-28 sm:w-32 lg:w-36 h-56 sm:h-64 lg:h-72 bg-foreground rounded-3xl p-2 shadow-2xl hidden sm:block">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-muted-foreground/30 rounded-full" />
              <div className="w-full h-full bg-background rounded-2xl overflow-hidden">
                <PhoneView />
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" className="w-full sm:w-auto group" onClick={() => setDemoModalOpen(true)}>
              {t.hero.getDemo}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="w-full sm:w-auto group">
              <Play className="w-5 h-5" />
              {t.hero.watchVideo}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 mt-16 lg:mt-24 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {stats.map((stat, index) => (
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

      <DemoRequestModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </section>
  );
};

export default HeroSection;
