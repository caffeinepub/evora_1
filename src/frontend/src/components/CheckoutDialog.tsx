import type { CartItem } from "@/App";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useActor } from "@/hooks/useActor";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: CartItem[];
  onSuccess: () => void;
}

export default function CheckoutDialog({
  open,
  onOpenChange,
  items,
  onSuccess,
}: CheckoutDialogProps) {
  const { actor } = useActor();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const totalQty = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;
    setLoading(true);
    try {
      await actor.placeOrder(fullName, email, phone, address, BigInt(totalQty));
      setSuccess(true);
      onSuccess();
      toast.success("Order placed successfully! 🎉");
    } catch {
      toast.error("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      onOpenChange(false);
      setTimeout(() => setSuccess(false), 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        data-ocid="checkout.dialog"
        className="sm:max-w-lg border"
        style={{
          background: "oklch(10 0.01 90)",
          borderColor: "oklch(var(--gold) / 0.25)",
        }}
      >
        <DialogHeader>
          <DialogTitle
            className="font-display text-2xl"
            style={{ color: "oklch(var(--gold))" }}
          >
            Complete Your Order
          </DialogTitle>
        </DialogHeader>

        <Separator style={{ background: "oklch(var(--gold) / 0.15)" }} />

        {success ? (
          <div
            data-ocid="checkout.success_state"
            className="flex flex-col items-center justify-center gap-4 py-10 text-center"
          >
            <CheckCircle2
              className="h-16 w-16"
              style={{ color: "oklch(var(--gold))" }}
            />
            <h3 className="font-display text-2xl font-bold text-foreground">
              Order Confirmed!
            </h3>
            <p style={{ color: "oklch(60 0.02 90)" }}>
              Thank you for your purchase. You will receive a confirmation email
              shortly.
            </p>
            <Button
              onClick={handleClose}
              className="mt-2 shimmer-gold border-0 px-8"
              style={{ color: "oklch(8 0.01 90)" }}
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 pt-2">
            {/* Order summary */}
            <div
              className="rounded-xl p-4 space-y-2"
              style={{ background: "oklch(14 0.01 90)" }}
            >
              <p
                className="text-xs tracking-wide uppercase"
                style={{ color: "oklch(50 0.02 90)" }}
              >
                Order Summary
              </p>
              {items.map((item) => (
                <div key={item.name} className="flex justify-between text-sm">
                  <span style={{ color: "oklch(72 0.02 90)" }}>
                    {item.name} × {item.quantity}
                  </span>
                  <span style={{ color: "oklch(var(--gold))" }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
              <Separator style={{ background: "oklch(var(--gold) / 0.1)" }} />
              <div className="flex justify-between font-semibold">
                <span style={{ color: "oklch(72 0.02 90)" }}>Total</span>
                <span style={{ color: "oklch(var(--gold))" }}>
                  ${subtotal.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 space-y-1.5">
                <Label
                  className="text-xs tracking-wide uppercase"
                  style={{ color: "oklch(55 0.02 90)" }}
                >
                  Full Name
                </Label>
                <Input
                  data-ocid="checkout.input"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jane Doe"
                  required
                  autoComplete="name"
                  style={{
                    background: "oklch(18 0.01 90)",
                    borderColor: "oklch(var(--gold) / 0.2)",
                  }}
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  className="text-xs tracking-wide uppercase"
                  style={{ color: "oklch(55 0.02 90)" }}
                >
                  Email
                </Label>
                <Input
                  data-ocid="checkout.input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  autoComplete="email"
                  style={{
                    background: "oklch(18 0.01 90)",
                    borderColor: "oklch(var(--gold) / 0.2)",
                  }}
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  className="text-xs tracking-wide uppercase"
                  style={{ color: "oklch(55 0.02 90)" }}
                >
                  Phone
                </Label>
                <Input
                  data-ocid="checkout.input"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  required
                  autoComplete="tel"
                  style={{
                    background: "oklch(18 0.01 90)",
                    borderColor: "oklch(var(--gold) / 0.2)",
                  }}
                />
              </div>
              <div className="col-span-2 space-y-1.5">
                <Label
                  className="text-xs tracking-wide uppercase"
                  style={{ color: "oklch(55 0.02 90)" }}
                >
                  Shipping Address
                </Label>
                <Input
                  data-ocid="checkout.input"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="123 Main St, City, State, ZIP"
                  required
                  autoComplete="street-address"
                  style={{
                    background: "oklch(18 0.01 90)",
                    borderColor: "oklch(var(--gold) / 0.2)",
                  }}
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              data-ocid="checkout.submit_button"
              className="w-full py-6 font-semibold tracking-wide shimmer-gold border-0 hover:scale-[1.02] transition-transform active:scale-100"
              style={{ color: "oklch(8 0.01 90)" }}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Place Order"
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
