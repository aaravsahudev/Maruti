import { motion } from "framer-motion";
import { Calculator, Play, ChevronDown, Zap, Leaf, Award } from "lucide-react";
import AnimatedLogo from "@/components/ui/animated-logo";
import LoadingButton from "@/components/ui/loading-button";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-solar-blue/5 to-solar-gold/10 dark:from-transparent dark:via-solar-blue/10 dark:to-solar-gold/20"></div>
      
      {/* Floating geometric shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-solar-gold/30 rounded-full"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 200 - 100, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
        />
      ))}
      
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Animated Logo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <AnimatedLogo size="lg" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-gray-900 dark:text-white"
          >
            Power Your Future with{" "}
            <motion.span 
              className="bg-gradient-to-r from-solar-blue via-solar-blue-light to-solar-gold bg-clip-text text-transparent animate-glow"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Solar Energy
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl mb-12 text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Join thousands of families who've made the switch to clean, renewable energy 
            with India's most trusted solar solution provider.
          </motion.p>
          
          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {[
              { icon: Zap, text: "25+ Years Warranty" },
              { icon: Leaf, text: "100% Clean Energy" },
              { icon: Award, text: "Top Rated Service" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 magnetic-hover"
              >
                <feature.icon className="w-5 h-5 text-solar-gold" />
                <span className="font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
          >
            <LoadingButton
              onClick={() => {
                // Scroll to solar calculator section
                const calculatorSection = document.getElementById('solar-calculator');
                if (calculatorSection) {
                  calculatorSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              size="lg"
              className="bg-gradient-to-r from-solar-gold to-yellow-500 hover:from-yellow-500 hover:to-solar-gold text-white px-10 py-4 rounded-full transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-3xl magnetic-hover animate-glow"
            >
              <Calculator className="mr-3 h-6 w-6" />
              Calculate Your Savings
            </LoadingButton>
            
            <LoadingButton
              onClick={() => {
                // Open demo video or navigate to projects
                window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
              }}
              variant="outline"
              size="lg"
              className="border-2 border-solar-blue text-solar-blue dark:text-solar-blue-light px-10 py-4 rounded-full hover:bg-solar-blue hover:text-white dark:hover:bg-solar-blue-light transition-all duration-300 font-bold text-lg magnetic-hover"
            >
              <Play className="mr-3 h-6 w-6" />
              Watch Demo
            </LoadingButton>
          </motion.div>

          {/* Stats preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { number: "10,000+", label: "Happy Customers" },
              { number: "50MW+", label: "Solar Installed" },
              { number: "25+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center glassmorphism p-6 rounded-2xl magnetic-hover"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  className="text-3xl font-bold text-solar-blue dark:text-solar-blue-light mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="h-8 w-8 text-solar-blue dark:text-solar-blue-light opacity-70 animate-bounce-slow" />
      </motion.div>
    </section>
  );
}
