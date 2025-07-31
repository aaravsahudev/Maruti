import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, User, Sun } from "lucide-react";

interface NameInputModalProps {
  isOpen: boolean;
  onSubmit: (name: string) => void;
}

export default function NameInputModal({ isOpen, onSubmit }: NameInputModalProps) {
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setIsSubmitting(true);
      // Small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      onSubmit(name.trim());
      setIsSubmitting(false);
    }
  };

  const handleSkip = () => {
    onSubmit("Valued Customer");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 max-w-md w-full mx-4 border border-gray-200 dark:border-gray-700">
              {/* Skip button */}
              <button
                onClick={handleSkip}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-16 h-16 bg-gradient-to-br from-solar-blue to-solar-blue-light rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Sun className="text-white h-8 w-8" />
                </motion.div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Welcome to Maruti Solar
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  We'd love to personalize your experience! What should we call you?
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="userName" className="text-gray-700 dark:text-gray-300 font-medium">
                    Your Name
                  </Label>
                  <div className="mt-2 relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="userName"
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10 py-3 text-lg border-2 border-gray-200 dark:border-gray-600 focus:border-solar-blue dark:focus:border-solar-blue-light rounded-xl"
                      autoFocus
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <Button
                    type="submit"
                    disabled={!name.trim() || isSubmitting}
                    className="w-full bg-gradient-to-r from-solar-blue to-solar-blue-light hover:from-blue-600 hover:to-blue-700 text-white py-3 text-lg font-semibold rounded-xl transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      "Continue"
                    )}
                  </Button>
                  
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={handleSkip}
                    className="w-full text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 py-2"
                    disabled={isSubmitting}
                  >
                    Skip for now
                  </Button>
                </div>
              </form>

              {/* Footer */}
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-6">
                We respect your privacy. Your name is only stored locally on your device.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}