import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import PageLoader from "@/components/ui/page-loader";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Services from "@/pages/services";
import About from "@/pages/about";
import Projects from "@/pages/projects";
import Reviews from "@/pages/reviews";
import Contact from "@/pages/contact";
import Terms from "@/pages/terms";
import Materials from "@/pages/materials";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import LoadingBar from "@/components/ui/loading-bar";
import NameInputModal from "@/components/ui/name-input-modal";
import { useState, useEffect } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/contact" component={Contact} />
      <Route path="/terms" component={Terms} />
      <Route path="/materials" component={Materials} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showNameModal, setShowNameModal] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    if (!savedName) {
      // Show modal after page loader
      setTimeout(() => setShowNameModal(true), 3000);
    } else {
      setUserName(savedName);
    }
  }, []);

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    localStorage.setItem("userName", name);
    setShowNameModal(false);
  };

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="min-h-screen bg-background dark:bg-background text-foreground dark:text-foreground overflow-x-hidden transition-colors duration-300">
            <PageLoader />
            <LoadingBar />
            <Navbar userName={userName} />
            <main>
              <Router />
            </main>
            <Footer />
            <Toaster />
            <NameInputModal isOpen={showNameModal} onSubmit={handleNameSubmit} />
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
