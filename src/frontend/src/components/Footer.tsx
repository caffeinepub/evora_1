import { Separator } from "@/components/ui/separator";
import { Sparkles } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  return (
    <footer
      className="pt-16 pb-8 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, oklch(6 0.01 90) 0%, oklch(4 0.01 90) 100%)",
      }}
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-48 blur-3xl opacity-8"
        style={{ background: "oklch(72 0.14 75)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src="/assets/generated/evora-logo-transparent.dim_400x120.png"
              alt="EVORA"
              className="h-10 w-auto mb-4"
            />
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "oklch(45 0.02 90)" }}
            >
              Luxury skincare powered by science. EVORA Lumière Brightening
              Cream — your daily ritual for radiant, luminous skin.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              className="font-semibold text-sm tracking-widest uppercase mb-4"
              style={{ color: "oklch(var(--gold))" }}
            >
              Company
            </h4>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "FAQ", "About Us"].map(
                (link) => (
                  <li key={link}>
                    <button
                      type="button"
                      className="text-sm transition-colors duration-200 text-left"
                      style={{ color: "oklch(45 0.02 90)" }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.color =
                          "oklch(var(--gold))";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.color =
                          "oklch(45 0.02 90)";
                      }}
                    >
                      {link}
                    </button>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4
              className="font-semibold text-sm tracking-widest uppercase mb-4"
              style={{ color: "oklch(var(--gold))" }}
            >
              Support
            </h4>
            <ul className="space-y-2">
              {["Contact Us", "Shipping Info", "Returns", "Track Order"].map(
                (link) => (
                  <li key={link}>
                    <button
                      type="button"
                      className="text-sm transition-colors duration-200 text-left"
                      style={{ color: "oklch(45 0.02 90)" }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.color =
                          "oklch(var(--gold))";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.color =
                          "oklch(45 0.02 90)";
                      }}
                    >
                      {link}
                    </button>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <Separator style={{ background: "oklch(var(--gold) / 0.1)" }} />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs" style={{ color: "oklch(35 0.02 90)" }}>
            © {year} EVORA. All rights reserved. Luxury skincare, redefined.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs transition-opacity hover:opacity-80"
            style={{ color: "oklch(35 0.02 90)" }}
          >
            Built with{" "}
            <Sparkles
              className="h-3 w-3"
              style={{ color: "oklch(var(--gold))" }}
            />{" "}
            using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
