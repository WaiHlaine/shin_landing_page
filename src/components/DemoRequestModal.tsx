import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";

interface DemoRequestModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DemoRequestModal = ({ open, onOpenChange }: DemoRequestModalProps) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    shopName: "",
    email: "",
    currency: "",
    menuLanguage: "",
  });

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
        title: t.demoModal.successTitle,
        description: t.demoModal.successMessage,
      });

      setFormData({ shopName: "", email: "", currency: "", menuLanguage: "" });
      onOpenChange(false);
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t.demoModal.title}</DialogTitle>
          <DialogDescription>{t.demoModal.description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="shopName">{t.demoModal.shopName}</Label>
            <Input
              id="shopName"
              value={formData.shopName}
              onChange={(e) =>
                setFormData({ ...formData, shopName: e.target.value })
              }
              placeholder={t.demoModal.shopNamePlaceholder}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">{t.demoModal.email}</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder={t.demoModal.emailPlaceholder}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="currency">{t.demoModal.currency}</Label>
            <Select
              value={formData.currency}
              onValueChange={(value) =>
                setFormData({ ...formData, currency: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder={t.demoModal.currencyPlaceholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="JPY">🇯🇵 JPY (¥)</SelectItem>
                <SelectItem value="USD">🇺🇸 USD ($)</SelectItem>
                <SelectItem value="MMK">🇲🇲 MMK (K)</SelectItem>
                <SelectItem value="THB">🇹🇭 THB (฿)</SelectItem>
                <SelectItem value="KRW">🇰🇷 KRW (₩)</SelectItem>
                <SelectItem value="SGD">🇸🇬 SGD ($)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="menuLanguage">{t.demoModal.menuLanguage}</Label>
            <Select
              value={formData.menuLanguage}
              onValueChange={(value) =>
                setFormData({ ...formData, menuLanguage: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder={t.demoModal.menuLanguagePlaceholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">🇬🇧 English</SelectItem>
                <SelectItem value="ja">🇯🇵 Japanese</SelectItem>
                <SelectItem value="my">🇲🇲 Myanmar</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? t.demoModal.submitting : t.demoModal.submit}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DemoRequestModal;
