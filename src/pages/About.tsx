import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import aboutImage from "@/assets/about-image.jpg";

const values = [
  { title: "100% Natural", description: "Every ingredient is sourced from nature — no sulphates, no parabens, no harsh chemicals." },
  { title: "Organic First", description: "We prioritise organic, sustainably sourced botanicals for every product we make." },
  { title: "Cruelty Free", description: "Our products are never tested on animals. Beautiful hair, with a clear conscience." },
  { title: "Made in South Africa", description: "Proudly crafted locally, supporting South African communities and suppliers." },
];

const About = () => {
  return (
    <>
      <SEOHead
        title="About Us"
        description="Learn about Nokkie's Cosmetics — a South African organic hair care brand committed to natural ingredients, sustainability, and healthy hair for everyone."
        path="/about"
      />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full md:w-1/2"
            >
              <div className="rounded-3xl overflow-hidden shadow-organic">
                <img src={aboutImage} alt="Nokkie's Cosmetics — organic hair care" className="w-full h-auto object-cover" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full md:w-1/2"
            >
              <span className="text-xs font-semibold text-primary tracking-widest uppercase">Our Story</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-6 leading-tight">
                Born from Nature, <br />Made with <span className="text-gradient-gold">Love</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nokkie's Cosmetics was founded with a simple belief: your hair deserves the purest care nature can offer. We create organic hair care products that nourish from the roots, using carefully selected botanical ingredients.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our range — from our best-selling Anti-Breakage Spray to our nourishing Hairfood — is designed to support healthy hair growth, reduce breakage, and restore your hair's natural shine and strength.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:opacity-90 shadow-organic"
              >
                View Our Products
              </Link>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">Our Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl p-8 shadow-organic text-center"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
