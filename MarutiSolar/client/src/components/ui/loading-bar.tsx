import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingBar() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-solar-blue via-solar-blue-light to-solar-gold z-50"
      style={{
        backgroundSize: "200% 100%",
      }}
      animate={{
        backgroundPosition: ["200% 0", "-200% 0"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      exit={{
        opacity: 0,
        transition: { duration: 0.5 }
      }}
    />
  );
}
