import { motion } from "framer-motion";
import { Sun } from "lucide-react";

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export default function AnimatedLogo({ size = "md", showText = true }: AnimatedLogoProps) {
  const sizeClasses = {
    sm: { icon: "w-8 h-8", text: "text-lg", container: "space-x-2" },
    md: { icon: "w-12 h-12", text: "text-xl", container: "space-x-3" },
    lg: { icon: "w-16 h-16", text: "text-3xl", container: "space-x-4" }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center ${currentSize.container}`}>
      <motion.div
        className={`${currentSize.icon} bg-gradient-to-br from-solar-blue to-solar-blue-light rounded-full flex items-center justify-center relative overflow-hidden`}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Spinning background effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-solar-gold via-yellow-400 to-solar-gold opacity-20"
          animate={{ rotate: 360 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Main sun icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Sun className={`text-white ${size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-2xl'}`} />
        </motion.div>

        {/* Orbiting particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-solar-gold rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.5, 1],
            }}
            transition={{
              rotate: {
                duration: 3 + i,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5
              }
            }}
            style={{
              transformOrigin: `${20 + i * 5}px center`,
            }}
          />
        ))}
      </motion.div>
      
      {showText && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1 
            className={`${currentSize.text} font-bold bg-gradient-to-r from-solar-blue via-solar-blue-light to-solar-gold bg-clip-text text-transparent`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Maruti Solar Solution
          </motion.h1>
          <motion.p 
            className="text-xs text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Premium Solar Energy
          </motion.p>
        </motion.div>
      )}
    </div>
  );
}