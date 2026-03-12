import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import { CheckCircle2, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;
    setLoading(true);
    try {
      await actor.submitContactForm(name, email, message);
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message sent! We'll get back to you soon.");
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
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
            Reach Out
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ color: "oklch(1 0 0)" }}
          >
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3
                className="font-display text-2xl font-bold mb-4"
                style={{ color: "oklch(1 0 0)" }}
              >
                We'd Love to Hear From You
              </h3>
              <p className="leading-relaxed" style={{ color: "oklch(1 0 0)" }}>
                Have questions about EVORA? Want to share your results? Our
                beauty experts are here to help you achieve your skin goals.
              </p>
            </div>

            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: "hello@evoraskin.com" },
                { icon: Phone, label: "Phone", value: "+1 (888) 386-7234" },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Beverly Hills, CA 90210",
                },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="p-3 rounded-lg flex-shrink-0"
                    style={{ background: "oklch(var(--gold) / 0.12)" }}
                  >
                    <Icon
                      className="h-5 w-5"
                      style={{ color: "oklch(var(--gold))" }}
                    />
                  </div>
                  <div>
                    <div
                      className="text-xs tracking-wide uppercase"
                      style={{ color: "oklch(1 0 0)" }}
                    >
                      {label}
                    </div>
                    <div
                      className="font-medium text-sm"
                      style={{ color: "oklch(1 0 0)" }}
                    >
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {success ? (
              <div
                data-ocid="contact.success_state"
                className="flex flex-col items-center justify-center gap-4 h-full min-h-64 rounded-2xl border p-8 text-center"
                style={{
                  background: "oklch(12 0.01 90)",
                  borderColor: "oklch(var(--gold) / 0.3)",
                }}
              >
                <CheckCircle2
                  className="h-12 w-12"
                  style={{ color: "oklch(var(--gold))" }}
                />
                <h4
                  className="font-display text-xl font-bold"
                  style={{ color: "oklch(1 0 0)" }}
                >
                  Message Received!
                </h4>
                <p style={{ color: "oklch(1 0 0)" }}>
                  Thank you for reaching out. We'll be in touch within 24 hours.
                </p>
                <button
                  type="button"
                  className="text-sm underline"
                  style={{ color: "oklch(1 0 0)" }}
                  onClick={() => setSuccess(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border p-8"
                style={{
                  background: "oklch(12 0.01 90)",
                  borderColor: "oklch(var(--gold) / 0.2)",
                }}
              >
                <div className="space-y-1.5">
                  <Label
                    className="text-xs tracking-wide uppercase"
                    style={{ color: "oklch(1 0 0)" }}
                  >
                    Name
                  </Label>
                  <Input
                    data-ocid="contact.input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    required
                    style={{
                      background: "oklch(18 0.01 90)",
                      borderColor: "oklch(var(--gold) / 0.2)",
                      color: "oklch(1 0 0)",
                    }}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    className="text-xs tracking-wide uppercase"
                    style={{ color: "oklch(1 0 0)" }}
                  >
                    Email
                  </Label>
                  <Input
                    data-ocid="contact.input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    style={{
                      background: "oklch(18 0.01 90)",
                      borderColor: "oklch(var(--gold) / 0.2)",
                      color: "oklch(1 0 0)",
                    }}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    className="text-xs tracking-wide uppercase"
                    style={{ color: "oklch(1 0 0)" }}
                  >
                    Message
                  </Label>
                  <Textarea
                    data-ocid="contact.textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us how we can help..."
                    rows={5}
                    required
                    style={{
                      background: "oklch(18 0.01 90)",
                      borderColor: "oklch(var(--gold) / 0.2)",
                      color: "oklch(1 0 0)",
                    }}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  data-ocid="contact.submit_button"
                  className="w-full py-6 font-semibold tracking-wide shimmer-gold border-0 hover:scale-[1.02] transition-transform active:scale-100"
                  style={{ color: "oklch(1 0 0)" }}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
