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
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#06491D] p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="relative max-w-md w-full bg-[#271413] rounded-3xl p-8 shadow-2xl border border-[#50C878]/20"
        >
          <div className="text-center space-y-6">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <h1 className="text-4xl font-bold text-[#50C878]">911solutions</h1>
              <p className="text-[#E5D1B1] text-sm tracking-wider">Premium Cannabis & Mushroom Solutions</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="h-px bg-gradient-to-r from-transparent via-[#50C878]/30 to-transparent"
            />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-semibold text-white">Age Verification Required</h2>
              <p className="text-[#E5D1B1] leading-relaxed">
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
                className="flex-1 bg-[#50C878] hover:bg-[#50C878]/90 text-white font-semibold py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#50C878]/20"
              >
                I am 18 or older
              </Button>
              <Button
                onClick={() => handleVerify(false)}
                variant="outline"
                className="flex-1 border-[#793C13] text-[#793C13] hover:bg-[#793C13]/10 font-semibold py-6 rounded-xl transition-all duration-300"
              >
                I am under 18
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xs text-[#E5D1B1]/60 pt-4"
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
