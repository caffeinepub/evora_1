import type { CartItem } from "@/App";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ShoppingBag, X } from "lucide-react";
import { motion } from "motion/react";

interface CartSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: CartItem[];
  onCheckout: () => void;
}

export default function CartSheet({
  open,
  onOpenChange,
  items,
  onCheckout,
}: CartSheetProps) {
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        data-ocid="cart.sheet"
        className="w-full sm:max-w-md border-l flex flex-col"
        style={{
          background: "oklch(10 0.01 90)",
          borderColor: "oklch(var(--gold) / 0.2)",
        }}
      >
        <SheetHeader className="flex flex-row items-center justify-between pr-0">
          <SheetTitle
            className="font-display text-xl"
            style={{ color: "oklch(var(--gold))" }}
          >
            Your Cart
          </SheetTitle>
          <Button
            variant="ghost"
            size="icon"
            data-ocid="cart.close_button"
            onClick={() => onOpenChange(false)}
            style={{ color: "oklch(60 0.02 90)" }}
          >
            <X className="h-5 w-5" />
          </Button>
        </SheetHeader>

        <Separator style={{ background: "oklch(var(--gold) / 0.15)" }} />

        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <div
              data-ocid="cart.empty_state"
              className="flex flex-col items-center justify-center h-full gap-4 py-16"
            >
              <ShoppingBag
                className="h-12 w-12"
                style={{ color: "oklch(var(--gold) / 0.4)" }}
              />
              <p style={{ color: "oklch(50 0.02 90)" }}>Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-xl border"
                  style={{
                    background: "oklch(14 0.01 90)",
                    borderColor: "oklch(var(--gold) / 0.15)",
                  }}
                >
                  <img
                    src="/assets/generated/evora-product-hero.dim_800x800.png"
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground truncate">
                      {item.name}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "oklch(55 0.02 90)" }}
                    >
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <div
                    className="font-display font-bold"
                    style={{ color: "oklch(var(--gold))" }}
                  >
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div
            className="border-t pt-4 space-y-4"
            style={{ borderColor: "oklch(var(--gold) / 0.15)" }}
          >
            <div className="flex justify-between items-center">
              <span
                className="font-medium"
                style={{ color: "oklch(60 0.02 90)" }}
              >
                Subtotal
              </span>
              <span
                className="font-display text-xl font-bold"
                style={{ color: "oklch(var(--gold))" }}
              >
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <Button
              data-ocid="cart.primary_button"
              onClick={onCheckout}
              className="w-full py-6 font-semibold tracking-wide shimmer-gold border-0 hover:scale-[1.02] transition-transform active:scale-100"
              style={{ color: "oklch(8 0.01 90)" }}
            >
              Proceed to Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
