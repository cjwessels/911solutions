import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import productSpray from "@/assets/product-spray.jpg";
import productShampoo from "@/assets/product-shampoo.jpg";
import productHairfood from "@/assets/product-hairfood.jpg";
import productBeard from "@/assets/product-beard.jpg";

const products = [
  {
    name: "Anti-Breakage & Itch Spray",
    tagline: "New Arrival",
    size: "300ml",
    price: "R220",
    image: productSpray,
    description: "Nokkie's Anti Breakage and Itch Spray helps soothe itchy scalps while supporting stronger hair. The lightweight spray refreshes, hydrates, and reduces breakage without weighing hair down.",
    ingredients: "Aloe vera, caffeine, niacinamide, glycerin, panthenol",
  },
  {
    name: "2in1 Shampoo & Conditioner",
    tagline: "Best Seller",
    size: "300ml",
    price: "R220",
    image: productShampoo,
    description: "Cleans and conditions hair in one simple step. The sulphate-free formula gently removes dirt while helping retain moisture, leaving hair soft, manageable, and healthy after every wash.",
    ingredients: "Guar Hydroxypropyl Trimonium Chloride, Glycerol Cocoate",
  },
  {
    name: "Hairfood",
    tagline: "Nourishing",
    size: "125ml",
    price: "R220",
    image: productHairfood,
    description: "100% natural scalp and hair treatment made to nourish roots and support healthy hair growth. The oil-rich formula feeds the scalp, strengthens hair, and restores moisture and shine.",
    ingredients: "Coconut oil, rosemary oil, onion extract",
  },
  {
    name: "Beard Gel",
    tagline: "For Him",
    size: "125ml",
    price: "R220",
    image: productBeard,
    description: "A natural, non-greasy grooming solution designed for conscious men. The lightweight formula absorbs fast, leaving no oily residue while keeping facial hair neat, soft, and healthy.",
    ingredients: "Glycerin, panthenol, lightweight conditioners",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const Products = () => {
  return (
    <>
      <SEOHead
        title="Products"
        description="Browse Nokkie's Cosmetics organic hair care range — anti-breakage spray, 2in1 shampoo, hairfood, and beard gel. All natural, sulphate-free products."
        path="/products"
      />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">2026 Catalog</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mt-3 mb-4">
              Our Products
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every product is crafted with organic, natural ingredients to give your hair the nourishment it deserves.
            </p>
          </motion.div>

          <div className="space-y-20">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={i}
                variants={fadeUp}
                className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-organic aspect-[4/3]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 rounded-full bg-primary/90 px-4 py-1 text-xs font-bold text-primary-foreground uppercase tracking-wider">
                      {product.tagline}
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                    {product.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-foreground">Size:</span>
                      <span className="text-sm text-muted-foreground">{product.size}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-sm font-semibold text-foreground">Key Ingredients:</span>
                      <span className="text-sm text-muted-foreground">{product.ingredients}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-3xl font-display font-bold text-primary">{product.price}</span>
                    <a
                      href="https://shop.nokkiescosmetics.co.za"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:opacity-90 shadow-organic"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Nokkie's Cosmetics Products",
            itemListElement: products.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Product",
                name: p.name,
                description: p.description,
                offers: {
                  "@type": "Offer",
                  price: "220",
                  priceCurrency: "ZAR",
                },
              },
            })),
          }),
        }}
      />
    </>
  );
};

export default Products;
