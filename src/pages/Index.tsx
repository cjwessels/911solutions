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
        description="911solutions.co.za - Your trusted source for premium cannabis and mushroom products in South Africa. Quality, discretion, and expertise you can count on."
        path="/"
      />

      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Cannabis background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-forest-green/90 via-forest-green/85 to-dark-brown/90 backdrop-blur-sm" />
        </div>

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
              <h1 className="text-6xl md:text-8xl font-display font-bold text-vibrant-green leading-tight mb-4">
                911solutions
              </h1>
              <span className="inline-block text-beige text-lg md:text-xl font-medium tracking-wider">
                Premium Cannabis & Mushroom Solutions
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Discover South Africa's finest selection of premium cannabis and mushroom products.
              Quality, expertise, and discretion - delivered right to your door.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="https://shop.911solutions.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-vibrant-green px-10 py-4 font-semibold text-white text-lg transition-all hover:bg-vibrant-green/90 shadow-xl hover:shadow-2xl hover:scale-105 transform duration-300"
              >
                Visit Our Shop
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border-2 border-vibrant-green px-10 py-4 font-semibold text-vibrant-green text-lg transition-all hover:bg-vibrant-green hover:text-white transform hover:scale-105 duration-300"
              >
                Get In Touch
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
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-vibrant-green opacity-50"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-section" />
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <img
            src="https://images.pexels.com/photos/6896379/pexels-photo-6896379.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Mushrooms"
            className="w-full h-full object-cover blur-xl"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full opacity-10">
          <img
            src="https://images.pexels.com/photos/7667443/pexels-photo-7667443.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Cannabis leaf"
            className="w-full h-full object-cover blur-xl"
          />
        </div>
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
              className="text-xs font-semibold text-vibrant-green tracking-widest uppercase"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3"
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
                className="group bg-card rounded-2xl p-8 shadow-organic transition-all hover:shadow-card-hover hover:-translate-y-2 duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-vibrant-green/10 flex items-center justify-center mb-6 group-hover:bg-vibrant-green/20 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-vibrant-green" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-forest-green relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8411369/pexels-photo-8411369.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Cannabis and mushrooms"
            className="w-full h-full object-cover opacity-20 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-forest-green/80 via-dark-brown/60 to-forest-green/80" />
        </div>

        <div className="container relative mx-auto px-4 md:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-vibrant-green mb-6">
              Ready to Experience Quality?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
              Join thousands of satisfied customers who trust 911solutions for their premium cannabis
              and mushroom needs. Quality products, expert service, total discretion.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://shop.911solutions.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-vibrant-green px-10 py-4 font-semibold text-white text-lg transition-all hover:bg-vibrant-green/90 shadow-xl hover:shadow-2xl hover:scale-105 transform duration-300"
              >
                Browse Products
              </a>
              <Link
                to="/about"
                className="inline-flex items-center rounded-full border-2 border-vibrant-green px-10 py-4 font-semibold text-vibrant-green text-lg transition-all hover:bg-vibrant-green hover:text-white transform hover:scale-105 duration-300"
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
            name: "911solutions",
            url: "https://911solutions.co.za",
            description: "Premium cannabis and mushroom products in South Africa.",
            sameAs: [],
          }),
        }}
      />
    </>
  );
};

export default Index;
