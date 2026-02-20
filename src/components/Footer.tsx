import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-brown text-white">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-vibrant-green flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="font-display text-lg font-semibold text-vibrant-green">911solutions</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              South Africa's trusted source for premium cannabis and mushroom products. Quality, discretion, expertise.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-vibrant-green mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-white/60 hover:text-vibrant-green transition-colors">Home</Link>
              <Link to="/about" className="text-sm text-white/60 hover:text-vibrant-green transition-colors">About</Link>
              <Link to="/contact" className="text-sm text-white/60 hover:text-vibrant-green transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-vibrant-green mb-4">Shop</h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://shop.911solutions.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-vibrant-green transition-colors"
              >
                Cannabis Products
              </a>
              <a
                href="https://shop.911solutions.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-vibrant-green transition-colors"
              >
                Mushroom Products
              </a>
              <a
                href="https://shop.911solutions.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-vibrant-green transition-colors"
              >
                Visit Shop
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-vibrant-green mb-4">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-white/60">
              <span>info@911solutions.co.za</span>
              <span>South Africa</span>
              <div className="mt-4">
                <p className="text-xs text-white/40">
                  For customers 18 years and older only.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} 911solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
