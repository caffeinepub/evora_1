import { motion } from "motion/react";

const results = [
  {
    week: "Week 2",
    label: "Initial Brightening",
    desc: "Visible reduction in dullness, improved texture and early brightening effects.",
    image: "/assets/generated/evora-before-after-week2.dim_600x400.jpg",
  },
  {
    week: "Week 4",
    label: "Even Skin Tone",
    desc: "Dark spots fading significantly, noticeably more even and radiant complexion.",
    image: "/assets/generated/evora-before-after-week4.dim_600x400.jpg",
  },
  {
    week: "Week 8",
    label: "Full Transformation",
    desc: "Luminous, glass-like skin with dramatically improved tone, texture, and clarity.",
    image: "/assets/generated/evora-before-after-week8.dim_600x400.jpg",
  },
];

export default function GallerySection() {
  return (
    <section id="results" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(6 0.01 90) 0%, oklch(10 0.01 90) 50%, oklch(6 0.01 90) 100%)",
        }}
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
            Before & After
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ color: "oklch(1 0 0)" }}
          >
            Real Results
          </h2>
          <p
            className="mt-4 text-base max-w-xl mx-auto"
            style={{ color: "oklch(1 0 0)" }}
          >
            Real customers, real transformations. No filters, no retouching.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((item, i) => (
            <motion.div
              key={item.week}
              data-ocid={`gallery.item.${i + 1}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-2xl overflow-hidden border group"
              style={{
                background: "oklch(12 0.01 90)",
                borderColor: "oklch(var(--gold) / 0.2)",
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.week} results`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
                  style={{
                    background: "oklch(var(--gold))",
                    color: "oklch(1 0 0)",
                  }}
                >
                  {item.week}
                </div>
              </div>
              <div className="p-6">
                <h4
                  className="font-display text-lg font-bold mb-2"
                  style={{ color: "oklch(1 0 0)" }}
                >
                  {item.label}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(1 0 0)" }}
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
