import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface LoadingButtonProps {
  children: React.ReactNode;
  onClick?: () => void | Promise<void>;
  href?: string;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "lg" | "icon";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function LoadingButton({
  children,
  onClick,
  href,
  className = "",
  variant = "default",
  size = "lg",
  disabled = false,
  type = "button",
}: LoadingButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (onClick) {
      setIsLoading(true);
      try {
        await onClick();
        // Simulate minimum loading time for better UX
        await new Promise(resolve => setTimeout(resolve, 800));
      } catch (error) {
        console.error("Button action failed:", error);
      } finally {
        setIsLoading(false);
      }
    } else if (href) {
      setIsLoading(true);
      // Simulate loading for navigation
      await new Promise(resolve => setTimeout(resolve, 500));
      window.location.href = href;
    }
  };

  if (href && !onClick) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block"
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <Button
          className={`${className} ${isLoading ? 'animate-pulse' : ''}`}
          variant={variant}
          size={size}
          disabled={disabled || isLoading}
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Loading...</span>
            </div>
          ) : (
            children
          )}
        </Button>
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        onClick={handleClick}
        className={`${className} ${isLoading ? 'animate-pulse' : ''}`}
        variant={variant}
        size={size}
        disabled={disabled || isLoading}
        type={type}
      >
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Loading...</span>
          </div>
        ) : (
          children
        )}
      </Button>
    </motion.div>
  );
}