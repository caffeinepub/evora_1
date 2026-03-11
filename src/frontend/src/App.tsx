import CartSheet from "@/components/CartSheet";
import CheckoutDialog from "@/components/CheckoutDialog";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import ProductSection from "@/components/ProductSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

const queryClient = new QueryClient();

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const addToCart = (quantity: number) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (i) => i.name === "EVORA Lumière Brightening Cream",
      );
      if (existing) {
        return prev.map((i) =>
          i.name === "EVORA Lumière Brightening Cream"
            ? { ...i, quantity: i.quantity + quantity }
            : i,
        );
      }
      return [
        ...prev,
        { name: "EVORA Lumière Brightening Cream", price: 49.99, quantity },
      ];
    });
    setCartOpen(true);
  };

  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation
          cartCount={cartCount}
          onCartClick={() => setCartOpen(true)}
        />
        <main>
          <HeroSection
            onShopNow={() =>
              document
                .getElementById("product")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          />
          <ProductSection onAddToCart={addToCart} />
          <GallerySection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
        <CartSheet
          open={cartOpen}
          onOpenChange={setCartOpen}
          items={cartItems}
          onCheckout={() => {
            setCartOpen(false);
            setCheckoutOpen(true);
          }}
        />
        <CheckoutDialog
          open={checkoutOpen}
          onOpenChange={setCheckoutOpen}
          items={cartItems}
          onSuccess={() => {
            setCartItems([]);
          }}
        />
        <Toaster richColors position="top-right" />
      </div>
    </QueryClientProvider>
  );
}
