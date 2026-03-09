import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Leaf, Sparkles, Shield, Zap } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const features = [
  {
    icon: Leaf,
    title: "Premium Quality",
    description: "Carefully curated cannabis and mushroom products that meet the highest standards",
  },
  {
    icon: Sparkles,
    title: "Expert Selection",
    description: "Handpicked strains and varieties for optimal experience and benefits",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Age-verified platform ensuring responsible access to premium products",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick and discreet delivery straight to your door",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const Index = () => {
  return (
    <>
      <SEOHead
        title="Premium Cannabis & Mushroom Solutions"
        description="Cannabizlab - Your trusted source for premium cannabis and mushroom products in South Africa. Quality, discretion, and expertise you can count on."
        path="/"
      />

      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-space-stars smoke-effect">
        <div className="absolute inset-0 bg-gradient-hero" />

        <div className="container relative mx-auto px-4 md:px-8 py-20 z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <h1 className="text-6xl md:text-8xl font-display font-bold text-gradient-gold leading-tight mb-4" style={{ WebkitTextStroke: '1px rgba(255, 215, 0, 0.3)' }}>
                CANNABIZLAB
              </h1>
              <span className="inline-block text-lime-green text-lg md:text-2xl font-bold tracking-wider uppercase">
                High Maintenance
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              We are now delivering premium cannabis and mushroom products straight to your door.
              Fast, discreet, and delivered within 30 minutes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="https://shop.cannabizlab.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-lime-green px-10 py-4 font-bold text-space-dark text-lg transition-all hover:bg-lime-green/90 shadow-xl hover:shadow-2xl hover:scale-105 transform duration-300 uppercase"
              >
                Shop Now
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border-2 border-gold px-10 py-4 font-bold text-gold text-lg transition-all hover:bg-gold hover:text-space-dark transform hover:scale-105 duration-300 uppercase"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-lime-green opacity-50"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.div>
      </section>

      <section className="relative py-24 overflow-hidden bg-gradient-section smoke-effect">
        <div className="absolute inset-0 bg-space-stars opacity-50" />
        <div className="container relative mx-auto px-4 md:px-8 z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeUp}
              custom={0}
              className="text-xs font-bold text-lime-green tracking-widest uppercase"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-5xl font-display font-bold text-gold mt-3"
            >
              Your Trusted Partner
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                variants={fadeUp}
                className="group bg-card rounded-2xl p-8 shadow-organic transition-all hover:shadow-card-hover hover:-translate-y-2 duration-300 border border-lime-green/20"
              >
                <div className="w-14 h-14 rounded-xl bg-lime-green/20 flex items-center justify-center mb-6 group-hover:bg-lime-green/30 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-lime-green" />
                </div>
                <h3 className="font-display text-xl font-bold text-gold mb-3">
                  {feature.title}
                </h3>
                <p className="text-cream/80 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-space-stars relative overflow-hidden smoke-effect">
        <div className="absolute inset-0 bg-gradient-hero" />

        <div className="container relative mx-auto px-4 md:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-gold mb-6">
              Online Store Opening Soon!
            </h2>
            <p className="text-cream/90 max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
              Orders over R1000 get FREE delivery. Delivery within 30 minutes.
              Best Bud, Pre-Rolls, Vapes, and Edibles available now.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://shop.cannabizlab.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-lime-green px-10 py-4 font-bold text-space-dark text-lg transition-all hover:bg-lime-green/90 shadow-xl hover:shadow-2xl hover:scale-105 transform duration-300 uppercase"
              >
                Browse Products
              </a>
              <Link
                to="/about"
                className="inline-flex items-center rounded-full border-2 border-gold px-10 py-4 font-bold text-gold text-lg transition-all hover:bg-gold hover:text-space-dark transform hover:scale-105 duration-300 uppercase"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Cannabizlab",
            url: "https://cannabizlab.co.za",
            description: "Premium cannabis and mushroom products in South Africa.",
            sameAs: [],
          }),
        }}
      />
    </>
  );
};

export default Index;
