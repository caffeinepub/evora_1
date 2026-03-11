import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface HeroSectionProps {
  onShopNow: () => void;
}

const stats = [
  { stat: "4.9★", label: "2,400+ Reviews" },
  { stat: "98%", label: "Satisfaction Rate" },
  { stat: "4 Weeks", label: "Visible Results" },
];

export default function HeroSection({ onShopNow }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden noise-texture"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 70% 50%, oklch(72 0.14 75 / 0.12) 0%, transparent 60%),
          radial-gradient(ellipse 50% 80% at 20% 80%, oklch(72 0.14 75 / 0.06) 0%, transparent 50%),
          linear-gradient(160deg, oklch(6 0.01 90) 0%, oklch(10 0.01 90) 40%, oklch(6 0.01 90) 100%)
        `,
      }}
    >
      {/* Decorative orbs */}
      <div
        className="absolute top-20 right-[10%] w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse-glow"
        style={{ background: "oklch(72 0.14 75)" }}
      />
      <div
        className="absolute bottom-20 left-[5%] w-64 h-64 rounded-full blur-3xl opacity-10"
        style={{ background: "oklch(72 0.14 75)" }}
      />

      <div className="container mx-auto px-4 pt-16 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border text-xs tracking-widest uppercase"
            style={{
              borderColor: "oklch(var(--gold) / 0.4)",
              color: "oklch(var(--gold))",
              background: "oklch(var(--gold) / 0.08)",
            }}
          >
            <Sparkles className="h-3 w-3" />
            Clinically Tested Formula
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Reveal Your{" "}
            <span
              className="block shimmer-gold bg-clip-text"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Radiant Glow
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="text-lg leading-relaxed max-w-md"
            style={{ color: "oklch(72 0.02 90)" }}
          >
            EVORA Advanced Brightening Cream — clinically tested, luxury
            formulated. Transform your skin in just 4 weeks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <Button
              size="lg"
              onClick={onShopNow}
              data-ocid="hero.primary_button"
              className="px-8 py-6 text-base font-semibold tracking-wide shimmer-gold glow-gold border-0 transition-transform hover:scale-105 active:scale-100"
              style={{ color: "oklch(8 0.01 90)" }}
            >
              Shop Now — $49.99
            </Button>
            <span className="text-sm" style={{ color: "oklch(55 0.02 90)" }}>
              Free shipping on orders over $75
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex gap-8 pt-2"
          >
            {stats.map(({ stat, label }) => (
              <div key={label}>
                <div className="font-display text-xl font-bold text-gold">
                  {stat}
                </div>
                <div
                  className="text-xs tracking-wide"
                  style={{ color: "oklch(55 0.02 90)" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: product image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          <div
            className="absolute w-80 h-80 rounded-full blur-3xl"
            style={{ background: "oklch(72 0.14 75 / 0.15)" }}
          />
          <img
            src="/assets/generated/evora-product-hero.dim_800x800.png"
            alt="EVORA Lumière Brightening Cream"
            className="relative z-10 w-full max-w-sm lg:max-w-md animate-float drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "oklch(var(--gold) / 0.5)" }}
      >
        <span className="text-xs tracking-widest uppercase">Discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="w-0.5 h-8 rounded-full"
          style={{ background: "oklch(var(--gold) / 0.4)" }}
        />
      </motion.div>
    </section>
  );
}
