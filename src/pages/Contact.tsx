import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import SEOHead from "@/components/SEOHead";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  inquiryType: z.array(z.string()).min(1, "Please select at least one inquiry type"),
  products: z.array(z.string()),
  hairType: z.string().optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

const inquiryOptions = [
  "Product Information",
  "Wholesale / Bulk Orders",
  "Stockist Inquiry",
  "Feedback & Suggestions",
  "Returns & Exchanges",
  "General Question",
];

const productOptions = [
  "Anti-Breakage & Itch Spray",
  "2in1 Shampoo & Conditioner",
  "Hairfood",
  "Beard Gel",
];

const hairTypeOptions = [
  "Straight",
  "Wavy",
  "Curly",
  "Coily / Kinky",
  "Relaxed / Treated",
  "Natural",
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    inquiryType: [],
    products: [],
    hairType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleArray = (field: "inquiryType" | "products", value: string) => {
    setForm((prev) => {
      const arr = prev[field];
      return {
        ...prev,
        [field]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setForm({ name: "", email: "", phone: "", inquiryType: [], products: [], hairType: "", message: "" });
  };

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with Nokkie's Cosmetics. Whether you're a retailer, customer, or partner — we'd love to hear from you."
        path="/contact"
      />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Have questions about our products or want to stock Nokkie's Cosmetics? Fill out the form below.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-organic space-y-8"
          >
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Phone (optional)</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="+27 ..."
              />
            </div>

            {/* Inquiry Type - Multi Select */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">What can we help with? *</label>
              <div className="flex flex-wrap gap-2">
                {inquiryOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => toggleArray("inquiryType", option)}
                    className={`rounded-full px-4 py-2 text-sm font-medium border transition-all ${
                      form.inquiryType.includes(option)
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-muted-foreground border-input hover:border-primary hover:text-primary"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {errors.inquiryType && <p className="text-xs text-destructive mt-1">{errors.inquiryType}</p>}
            </div>

            {/* Products Interest - Multi Select */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">Products you're interested in</label>
              <div className="flex flex-wrap gap-2">
                {productOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => toggleArray("products", option)}
                    className={`rounded-full px-4 py-2 text-sm font-medium border transition-all ${
                      form.products.includes(option)
                        ? "bg-accent text-accent-foreground border-accent"
                        : "bg-background text-muted-foreground border-input hover:border-accent hover:text-accent"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Hair Type */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">Your hair type</label>
              <div className="flex flex-wrap gap-2">
                {hairTypeOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setForm({ ...form, hairType: form.hairType === option ? "" : option })}
                    className={`rounded-full px-4 py-2 text-sm font-medium border transition-all ${
                      form.hairType === option
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-muted-foreground border-input hover:border-primary hover:text-primary"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Message *</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Tell us more about your inquiry..."
              />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all hover:opacity-90 shadow-organic text-base"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default Contact;
