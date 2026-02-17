import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import heroBg from "@/assets/hero-bg.jpg";
import productSpray from "@/assets/product-spray.jpg";
import productShampoo from "@/assets/product-shampoo.jpg";
import productHairfood from "@/assets/product-hairfood.jpg";
import productBeard from "@/assets/product-beard.jpg";

const products = [
  {
    name: "Anti-Breakage & Itch Spray",
    description: "Soothes itchy scalps while supporting stronger, healthier hair growth.",
    price: "R220",
    image: productSpray,
  },
  {
    name: "2in1 Shampoo & Conditioner",
    description: "Sulphate-free cleansing that protects moisture and reduces breakage.",
    price: "R220",
    image: productShampoo,
  },
  {
    name: "Hairfood",
    description: "100% natural scalp treatment with coconut oil and rosemary for visible growth.",
    price: "R220",
    image: productHairfood,
  },
  {
    name: "Beard Gel",
    description: "Lightweight, non-greasy formula for neat, soft, and healthy facial hair.",
    price: "R220",
    image: productBeard,
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
        title="Organic Hair Care"
        description="Nokkie's Cosmetics offers organic, sulphate-free hair care products including anti-breakage spray, shampoo, hairfood and beard gel. Natural ingredients for healthy, beautiful hair."
        path="/"
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Nokkie's organic hair care products" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="container relative mx-auto px-4 md:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary tracking-widest uppercase mb-6">
              100% Natural &amp; Organic
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight mb-6">
              Nature's Gift for{" "}
              <span className="text-gradient-gold">Beautiful Hair</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Crafted with organic ingredients, our hair care range nourishes your scalp, reduces breakage, and supports healthy, visible growth — naturally.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-all hover:opacity-90 shadow-organic"
              >
                Explore Products
              </Link>
              <a
                href="https://shop.nokkiescosmetics.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border-2 border-primary px-8 py-3.5 font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Shop Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} custom={0} className="text-xs font-semibold text-primary tracking-widest uppercase">
              Our Range
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3">
              Best Sellers
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                variants={fadeUp}
                className="group bg-card rounded-2xl overflow-hidden shadow-organic transition-shadow hover:shadow-card-hover"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xl font-bold text-primary">{product.price}</span>
                    <a
                      href="https://shop.nokkiescosmetics.co.za"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-accent hover:text-primary transition-colors"
                    >
                      Buy Now →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gold mb-6">
              Ready for Healthier Hair?
            </h2>
            <p className="text-background/60 max-w-lg mx-auto mb-8 leading-relaxed">
              Join thousands who trust Nokkie's Cosmetics for their organic hair care routine. Natural ingredients, real results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://shop.nokkiescosmetics.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-gold px-8 py-3.5 font-semibold text-foreground transition-all hover:opacity-90"
              >
                Visit Our Shop
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border-2 border-gold px-8 py-3.5 font-semibold text-gold transition-all hover:bg-gold hover:text-foreground"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Nokkie's Cosmetics",
            url: "https://nokkiescosmetics.co.za",
            description: "Organic hair care products made with natural ingredients for healthy, beautiful hair.",
            sameAs: [],
          }),
        }}
      />
    </>
  );
};

export default Index;
