import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-space-dark text-cream border-t border-lime-green/20">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-lime-green flex items-center justify-center">
                <Leaf className="w-6 h-6 text-space-dark" />
              </div>
              <span className="font-display text-lg font-bold text-gold">Cannabizlab</span>
            </div>
            <p className="text-sm text-cream/70 leading-relaxed">
              South Africa's trusted source for premium cannabis and mushroom products. Quality, discretion, expertise.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold text-lime-green mb-4 uppercase">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-cream/70 hover:text-lime-green transition-colors">Home</Link>
              <Link to="/about" className="text-sm text-cream/70 hover:text-lime-green transition-colors">About</Link>
              <Link to="/contact" className="text-sm text-cream/70 hover:text-lime-green transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold text-lime-green mb-4 uppercase">Shop</h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://shop.cannabizlab.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream/70 hover:text-lime-green transition-colors"
              >
                Best Bud
              </a>
              <a
                href="https://shop.cannabizlab.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream/70 hover:text-lime-green transition-colors"
              >
                Pre-Rolls
              </a>
              <a
                href="https://shop.cannabizlab.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream/70 hover:text-lime-green transition-colors"
              >
                Vapes
              </a>
              <a
                href="https://shop.cannabizlab.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cream/70 hover:text-lime-green transition-colors"
              >
                Edibles
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold text-lime-green mb-4 uppercase">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-cream/70">
              <span>info@cannabizlab.co.za</span>
              <span>South Africa</span>
              <div className="mt-4">
                <p className="text-xs text-cream/50">
                  For customers 18 years and older only.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-lime-green/20 mt-12 pt-8 text-center">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Cannabizlab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
