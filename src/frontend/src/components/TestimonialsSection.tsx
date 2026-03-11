import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Verified Buyer",
    quote:
      "I've tried so many brightening creams and nothing worked until EVORA. After just 3 weeks my dark spots have faded and my skin looks luminous. Absolutely obsessed!",
    initials: "SM",
  },
  {
    name: "Jessica L.",
    role: "Skincare Enthusiast",
    quote:
      "The texture is incredibly luxurious and it absorbs beautifully. My complexion is so much more even and people keep asking what I'm doing differently. EVORA is the answer!",
    initials: "JL",
  },
  {
    name: "Amara K.",
    role: "Verified Buyer",
    quote:
      "As someone with hyperpigmentation, I was skeptical but EVORA truly delivered. Week 4 and my skin tone is noticeably more even. The glow is real and I feel so confident.",
    initials: "AK",
  },
  {
    name: "Priya R.",
    role: "Beauty Blogger",
    quote:
      "I've reviewed hundreds of products and EVORA stands apart. The Pearl Extract gives an unmatched luminosity. This is now a permanent fixture in my morning routine.",
    initials: "PR",
  },
];

const StarRating = () => (
  <div className="flex items-center gap-1 mb-4" aria-label="5 stars">
    <Star
      className="h-4 w-4 fill-current"
      style={{ color: "oklch(var(--gold))" }}
    />
    <Star
      className="h-4 w-4 fill-current"
      style={{ color: "oklch(var(--gold))" }}
    />
    <Star
      className="h-4 w-4 fill-current"
      style={{ color: "oklch(var(--gold))" }}
    />
    <Star
      className="h-4 w-4 fill-current"
      style={{ color: "oklch(var(--gold))" }}
    />
    <Star
      className="h-4 w-4 fill-current"
      style={{ color: "oklch(var(--gold))" }}
    />
  </div>
);

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(6 0.01 90) 0%, oklch(10 0.01 90) 50%, oklch(6 0.01 90) 100%)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-5"
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
            style={{ color: "oklch(var(--gold))" }}
          >
            Customer Stories
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            What Our Customers Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              data-ocid={`testimonials.item.${i + 1}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="p-8 rounded-2xl border relative overflow-hidden group"
              style={{
                background: "oklch(12 0.01 90)",
                borderColor: "oklch(var(--gold) / 0.2)",
              }}
            >
              {/* Quote mark */}
              <div
                className="absolute top-4 right-6 font-display text-7xl leading-none opacity-10 select-none"
                style={{ color: "oklch(var(--gold))" }}
              >
                &ldquo;
              </div>

              <StarRating />

              <p
                className="text-sm leading-relaxed mb-6 relative z-10"
                style={{ color: "oklch(72 0.02 90)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background: "oklch(var(--gold) / 0.15)",
                    color: "oklch(var(--gold))",
                    border: "1px solid oklch(var(--gold) / 0.3)",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">
                    {t.name}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "oklch(50 0.02 90)" }}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
