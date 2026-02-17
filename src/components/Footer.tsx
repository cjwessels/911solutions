import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Nokkie's Cosmetics" className="h-10 w-10 rounded-full object-contain" />
              <span className="font-display text-lg font-semibold text-gold">Nokkie's Cosmetics</span>
            </div>
            <p className="text-sm text-background/60 leading-relaxed">
              Organic hair care crafted with nature's finest ingredients for healthy, beautiful hair.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-gold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-background/60 hover:text-gold transition-colors">Home</Link>
              <Link to="/products" className="text-sm text-background/60 hover:text-gold transition-colors">Products</Link>
              <Link to="/about" className="text-sm text-background/60 hover:text-gold transition-colors">About</Link>
              <Link to="/contact" className="text-sm text-background/60 hover:text-gold transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-gold mb-4">Products</h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-background/60">Anti-Breakage Spray</span>
              <span className="text-sm text-background/60">2in1 Shampoo</span>
              <span className="text-sm text-background/60">Hairfood</span>
              <span className="text-sm text-background/60">Beard Gel</span>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-gold mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-background/60">
              <span>info@nokkiescosmetics.co.za</span>
              <span>South Africa</span>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} Nokkie's Cosmetics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
