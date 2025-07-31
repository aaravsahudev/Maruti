import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import AnimatedLogo from "@/components/ui/animated-logo";
import ThemeToggle from "@/components/ui/theme-toggle";

interface NavbarProps {
  userName?: string;
}

export default function Navbar({ userName }: NavbarProps) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Cursor tracking for magnetic effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/materials", label: "Materials" },
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Projects" },
    { href: "/reviews", label: "Reviews" },
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse tracking for magnetic effects
  const handleMouseMove = (event: React.MouseEvent) => {
    if (!navRef.current) return;
    const rect = navRef.current.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      onMouseMove={handleMouseMove}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "glassmorphism shadow-2xl py-1" 
          : "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-lg py-3"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="magnetic-hover flex items-center space-x-3">
            <AnimatedLogo size={isScrolled ? "sm" : "sm"} showText={!isScrolled} />
            {userName && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="hidden md:block"
              >
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Welcome, <span className="font-semibold text-solar-blue dark:text-solar-blue-light">{userName}</span>
                </span>
              </motion.div>
            )}
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`relative py-2 px-4 rounded-full transition-all duration-300 font-medium magnetic-hover ${
                    isActive(link.href)
                      ? "text-solar-blue dark:text-solar-blue-light bg-solar-blue/10 dark:bg-solar-blue/20"
                      : "text-gray-700 dark:text-gray-300 hover:text-solar-blue dark:hover:text-solar-blue-light hover:bg-solar-blue/5 dark:hover:bg-solar-blue/10"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute inset-0 bg-gradient-to-r from-solar-blue/20 to-solar-gold/20 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-gradient-to-r from-solar-gold to-yellow-500 hover:from-yellow-500 hover:to-solar-gold text-white px-6 py-2 rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-xl animate-glow">
                    Get Quote
                  </Button>
                </motion.div>
              </Link>
            </div>
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="magnetic-hover">
                  <Menu className="h-6 w-6 text-solar-blue dark:text-solar-blue-light" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 glassmorphism">
                <div className="flex flex-col space-y-6 mt-8">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block text-lg transition-colors duration-300 p-3 rounded-lg magnetic-hover ${
                          isActive(link.href)
                            ? "text-solar-blue dark:text-solar-blue-light font-semibold bg-solar-blue/10 dark:bg-solar-blue/20"
                            : "text-gray-700 dark:text-gray-300 hover:text-solar-blue dark:hover:text-solar-blue-light hover:bg-solar-blue/5 dark:hover:bg-solar-blue/10"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-gradient-to-r from-solar-gold to-yellow-500 hover:from-yellow-500 hover:to-solar-gold text-white py-3 rounded-full font-semibold animate-glow">
                        Get Quote
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Floating cursor indicator */}
      <motion.div
        className="absolute pointer-events-none w-4 h-4 bg-solar-gold rounded-full opacity-30 blur-sm"
        style={{
          x: useTransform(mouseXSpring, (x) => x - 8),
          y: useTransform(mouseYSpring, (y) => y - 8),
        }}
      />
    </motion.nav>
  );
}
