import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Eye, Sparkles, Users } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const values = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "We source only the finest cannabis and mushroom products, ensuring exceptional quality standards."
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction and wellbeing are our top priorities. We're here to support your journey."
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Complete transparency in our sourcing, testing, and delivery processes."
  },
  {
    icon: Sparkles,
    title: "Expertise",
    description: "Years of knowledge and experience in premium cannabis and mushroom solutions."
  },
];

const About = () => {
  return (
    <>
      <SEOHead
        title="About Us"
        description="Learn about 911solutions — South Africa's trusted provider of premium cannabis and mushroom products. Quality, expertise, and discretion you can count on."
        path="/about"
      />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-16 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="text-xs font-semibold text-vibrant-green tracking-widest uppercase">Our Story</span>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mt-3 mb-6 leading-tight">
                Premium Solutions, <br />
                <span className="text-vibrant-green">Trusted Service</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                911solutions was founded with a clear mission: to provide South Africans with safe, reliable access to premium cannabis and mushroom products.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                We understand the importance of quality, discretion, and expertise. That's why we've built a platform you can trust, with carefully curated products, secure transactions, and knowledgeable support every step of the way.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-vibrant-green px-8 py-4 font-semibold text-white transition-all hover:bg-vibrant-green/90 shadow-xl hover:shadow-2xl hover:scale-105 transform duration-300"
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold text-vibrant-green tracking-widest uppercase">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">Our Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl p-8 shadow-organic text-center hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-vibrant-green/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-vibrant-green" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-24 text-center bg-forest-green rounded-3xl p-12 md:p-16 relative overflow-hidden"
          >
            <div className="absolute inset-0">
              <img
                src="https://images.pexels.com/photos/7667422/pexels-photo-7667422.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Cannabis plants"
                className="w-full h-full object-cover opacity-15 blur-md"
              />
              <div className="absolute inset-0 bg-forest-green/60" />
            </div>
            <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-vibrant-green mb-6">
              Why Choose 911solutions?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed text-lg">
              We're committed to providing you with the highest quality products, expert guidance, and a seamless shopping experience. Your satisfaction and safety are our top priorities.
            </p>
            <a
              href="https://shop.911solutions.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-vibrant-green px-10 py-4 font-semibold text-white text-lg transition-all hover:bg-vibrant-green/90 shadow-xl hover:shadow-2xl hover:scale-105 transform duration-300"
            >
              Browse Our Products
            </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
