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
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type ContactForm = z.infer<typeof contactSchema>;

const inquiryOptions = [
  "Product Information",
  "Wholesale / Bulk Orders",
  "Partnership Inquiry",
  "General Question",
  "Support",
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    inquiryType: [],
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleArray = (field: "inquiryType", value: string) => {
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
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setForm({ name: "", email: "", phone: "", inquiryType: [], message: "" });
  };

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with Cannabizlab. Whether you're interested in our products, wholesale opportunities, or just have questions — we're here to help."
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
            <span className="text-xs font-semibold text-vibrant-green tracking-widest uppercase">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Have questions about our products or services? We're here to help. Fill out the form below and we'll get back to you shortly.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-organic space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-vibrant-green"
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
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-vibrant-green"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Phone (optional)</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-vibrant-green"
                placeholder="+27 ..."
              />
            </div>

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
                        ? "bg-vibrant-green text-white border-vibrant-green"
                        : "bg-background text-muted-foreground border-input hover:border-vibrant-green hover:text-vibrant-green"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {errors.inquiryType && <p className="text-xs text-destructive mt-1">{errors.inquiryType}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Message *</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-vibrant-green resize-none"
                placeholder="Tell us more about your inquiry..."
              />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-vibrant-green px-8 py-4 font-semibold text-white transition-all hover:bg-vibrant-green/90 shadow-xl hover:shadow-2xl text-base"
            >
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground">
              You can also reach us at{" "}
              <a href="mailto:info@cannabizlab.co.za" className="text-vibrant-green hover:underline font-medium">
                info@cannabizlab.co.za
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
