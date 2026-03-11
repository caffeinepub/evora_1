import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { motion } from "motion/react";

interface NavigationProps {
  cartCount: number;
  onCartClick: () => void;
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Product", href: "#product" },
  { label: "Results", href: "#results" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation({
  cartCount,
  onCartClick,
}: NavigationProps) {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border/40"
      style={{ background: "oklch(8 0.01 90 / 0.92)" }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" data-ocid="nav.link">
          <img
            src="/assets/generated/evora-logo-transparent.dim_400x120.png"
            alt="EVORA"
            className="h-10 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid="nav.link"
              className="text-sm font-medium tracking-widest uppercase transition-colors duration-200"
              style={{ color: "oklch(70 0.02 90)" }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "oklch(var(--gold))";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "oklch(70 0.02 90)";
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          onClick={onCartClick}
          data-ocid="nav.cart_button"
          className="relative"
          style={{ color: "oklch(var(--gold))" }}
        >
          <ShoppingCart className="h-5 w-5" />
          {cartCount > 0 && (
            <Badge
              className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs shimmer-gold"
              style={{ color: "oklch(8 0.01 90)" }}
            >
              {cartCount}
            </Badge>
          )}
        </Button>
      </div>
    </motion.header>
  );
}
