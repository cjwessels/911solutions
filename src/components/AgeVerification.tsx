import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const AgeVerification = ({ children }: { children: React.ReactNode }) => {
  const [isVerified, setIsVerified] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const verified = localStorage.getItem("age_verified");
    if (verified === "true") {
      setIsVerified(true);
    }
    setIsChecking(false);
  }, []);

  const handleVerify = (answer: boolean) => {
    if (answer) {
      localStorage.setItem("age_verified", "true");
      setIsVerified(true);
    } else {
      window.location.href = "https://www.google.com";
    }
  };

  if (isChecking) {
    return null;
  }

  if (isVerified) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-space-dark bg-space-stars p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="relative max-w-md w-full bg-card rounded-3xl p-8 shadow-2xl border-2 border-lime-green/30 smoke-effect"
        >
          <div className="text-center space-y-6">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <h1 className="text-4xl font-bold text-gradient-gold font-display" style={{ WebkitTextStroke: '1px rgba(255, 215, 0, 0.3)' }}>
                CANNABIZLAB
              </h1>
              <p className="text-lime-green text-sm tracking-wider font-bold uppercase">High Maintenance</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="h-px bg-gradient-to-r from-transparent via-lime-green/50 to-transparent"
            />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-bold text-gold">Age Verification Required</h2>
              <p className="text-cream/90 leading-relaxed">
                You must be 18 years or older to access this website. This site contains information about cannabis and mushroom products.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <Button
                onClick={() => handleVerify(true)}
                className="flex-1 bg-lime-green hover:bg-lime-green/90 text-space-dark font-bold py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-lime-green/30 uppercase z-50"
              >
                I am 18 or older
              </Button>
              <Button
                onClick={() => handleVerify(false)}
                variant="outline"
                className="flex-1 border-2 border-gold text-gold hover:bg-gold/10 font-bold py-6 rounded-xl transition-all duration-300 uppercase z-50"
              >
                I am under 18
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xs text-cream/60 pt-4"
            >
              By entering this site, you agree to our terms of service and confirm you are of legal age.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AgeVerification;
