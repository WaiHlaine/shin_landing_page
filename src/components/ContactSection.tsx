import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    shopName: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:8080/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Server error");

      toast({
        title: t.contact.toast.title,
        description: t.contact.toast.description,
      });

      setFormData({ name: "", email: "", phone: "", shopName: "", message: "" });
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t.contact.info.visitUs,
      content: t.contact.info.address,
    },
    {
      icon: Mail,
      title: t.contact.info.emailUs,
      content: t.contact.info.email,
    },
    {
      icon: Phone,
      title: t.contact.info.callUs,
      content: t.contact.info.phone,
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-1/4 w-[500px] h-[500px] bg-coral/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Info */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              {t.contact.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t.contact.title}
              <span className="text-gradient">{t.contact.titleHighlight}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              {t.contact.subtitle}
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {info.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-lg border border-border">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">{t.contact.form.fullName}</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t.contact.form.namePlaceholder}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t.contact.form.email}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t.contact.form.emailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="phone">{t.contact.form.phone}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={t.contact.form.phonePlaceholder}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shopName">{t.contact.form.restaurantName}</Label>
                  <Input
                    id="shopName"
                    name="shopName"
                    placeholder={t.contact.form.restaurantPlaceholder}
                    value={formData.shopName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t.contact.form.message}</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t.contact.form.messagePlaceholder}
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  t.contact.form.sending
                ) : (
                  <>
                    {t.contact.form.submit}
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                {t.contact.form.disclaimer}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
