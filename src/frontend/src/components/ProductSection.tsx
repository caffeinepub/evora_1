import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, Droplets, Leaf, Shield, Sun, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface ProductSectionProps {
  onAddToCart: (quantity: number) => void;
}

const ingredients = [
  { icon: Sun, name: "Vitamin C", desc: "Brightens & evens skin tone" },
  { icon: Shield, name: "Niacinamide", desc: "Reduces dark spots & pores" },
  { icon: Zap, name: "Pearl Extract", desc: "Adds luminosity & glow" },
  {
    icon: Droplets,
    name: "Hyaluronic Acid",
    desc: "Deep hydration & plumping",
  },
  { icon: Leaf, name: "SPF 20", desc: "Daily sun protection" },
];

const benefits = [
  "Visibly brighter skin in 4 weeks",
  "Clinically tested formula",
  "Dermatologist approved",
  "Cruelty-free & vegan",
];

export default function ProductSection({ onAddToCart }: ProductSectionProps) {
  const [quantity, setQuantity] = useState("1");

  const handleAddToCart = () => {
    onAddToCart(Number.parseInt(quantity));
  };

  return (
    <section id="product" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(6 0.01 90) 0%, oklch(10 0.01 90) 50%, oklch(6 0.01 90) 100%)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-1/2 h-full blur-3xl opacity-5"
        style={{ background: "oklch(72 0.14 75)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: "oklch(1 0 0)" }}
          >
            Luxury Formula
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ color: "oklch(1 0 0)" }}
          >
            The Science of Radiance
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Product card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border p-8 relative"
            style={{
              background: "oklch(12 0.01 90)",
              borderColor: "oklch(var(--gold) / 0.2)",
              boxShadow: "0 20px 60px oklch(4 0.01 90 / 0.6)",
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <Badge
                  className="mb-3 text-xs tracking-wide"
                  style={{
                    background: "oklch(var(--gold) / 0.15)",
                    color: "oklch(1 0 0)",
                    borderColor: "oklch(var(--gold) / 0.3)",
                  }}
                >
                  Best Seller
                </Badge>
                <h3
                  className="font-display text-2xl font-bold"
                  style={{ color: "oklch(1 0 0)" }}
                >
                  EVORA Lumière
                </h3>
                <p className="text-sm mt-1" style={{ color: "oklch(1 0 0)" }}>
                  Brightening Cream — 50ml
                </p>
              </div>
              <div className="text-right">
                <div
                  className="font-display text-3xl font-bold"
                  style={{ color: "oklch(1 0 0)" }}
                >
                  $49.99
                </div>
                <div
                  className="text-xs line-through"
                  style={{ color: "oklch(1 0 0)" }}
                >
                  $79.99
                </div>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "oklch(1 0 0)" }}
            >
              A luxurious blend of Vitamin C, Niacinamide, and Pearl Extract
              designed to visibly brighten, even skin tone, and restore
              luminosity in just 4 weeks.
            </p>

            <ul className="space-y-2 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm">
                  <Check
                    className="h-4 w-4 flex-shrink-0"
                    style={{ color: "oklch(var(--gold))" }}
                  />
                  <span style={{ color: "oklch(1 0 0)" }}>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-4 items-end">
              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="quantity-select"
                  className="text-xs tracking-wide uppercase"
                  style={{ color: "oklch(1 0 0)" }}
                >
                  Quantity
                </Label>
                <Select value={quantity} onValueChange={setQuantity}>
                  <SelectTrigger
                    id="quantity-select"
                    data-ocid="product.select"
                    className="w-24 border"
                    style={{
                      background: "oklch(18 0.01 90)",
                      borderColor: "oklch(var(--gold) / 0.3)",
                      color: "oklch(1 0 0)",
                    }}
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                      <SelectItem key={n} value={String(n)}>
                        {n}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                size="lg"
                onClick={handleAddToCart}
                data-ocid="product.primary_button"
                className="flex-1 py-6 font-semibold tracking-wide shimmer-gold border-0 transition-transform hover:scale-[1.02] active:scale-100"
                style={{ color: "oklch(1 0 0)" }}
              >
                Add to Cart
              </Button>
            </div>
          </motion.div>

          {/* Ingredients */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h3
              className="font-display text-2xl font-bold mb-8"
              style={{ color: "oklch(1 0 0)" }}
            >
              Key Ingredients
            </h3>
            <div className="space-y-4">
              {ingredients.map((ing, i) => (
                <motion.div
                  key={ing.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl border"
                  style={{
                    background: "oklch(12 0.01 90)",
                    borderColor: "oklch(var(--gold) / 0.15)",
                  }}
                >
                  <div
                    className="p-3 rounded-lg flex-shrink-0"
                    style={{ background: "oklch(var(--gold) / 0.12)" }}
                  >
                    <ing.icon
                      className="h-5 w-5"
                      style={{ color: "oklch(var(--gold))" }}
                    />
                  </div>
                  <div>
                    <div
                      className="font-semibold text-sm"
                      style={{ color: "oklch(1 0 0)" }}
                    >
                      {ing.name}
                    </div>
                    <div
                      className="text-xs mt-0.5"
                      style={{ color: "oklch(1 0 0)" }}
                    >
                      {ing.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
