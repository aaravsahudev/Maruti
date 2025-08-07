@@ .. @@
   const navLinks = [
     { href: "/", label: "Home" },
     { href: "/services", label: "Services" },
     { href: "/materials", label: "Materials" },
     { href: "/about", label: "About Us" },
     { href: "/projects", label: "Projects" },
     { href: "/reviews", label: "Reviews" },
   ];

+  // Scroll to top when navigating to home
+  const handleHomeClick = () => {
+    window.scrollTo({ top: 0, behavior: 'smooth' });
+  };
+
   // Handle scroll effects
   useEffect(() => {
@@ .. @@
         <div className="flex justify-between items-center">
-          <Link href="/" className="magnetic-hover flex items-center space-x-3">
+          <Link href="/" onClick={handleHomeClick} className="magnetic-hover flex items-center space-x-3">
             <AnimatedLogo size={isScrolled ? "sm" : "sm"} showText={!isScrolled} />
             {userName && (
@@ .. @@
                 <Link
                   href={link.href}
-                  className={`relative py-2 px-4 rounded-full transition-all duration-300 font-medium magnetic-hover ${
+                  onClick={link.href === "/" ? handleHomeClick : undefined}
+                  className={`relative py-2 px-3 rounded-full transition-all duration-300 font-medium magnetic-hover text-sm ${
                     isActive(link.href)
-                      ? "text-solar-blue dark:text-solar-blue-light bg-solar-blue/10 dark:bg-solar-blue/20"
-                      : "text-gray-700 dark:text-gray-300 hover:text-solar-blue dark:hover:text-solar-blue-light hover:bg-solar-blue/5 dark:hover:bg-solar-blue/10"
+                      ? "text-blue-800 dark:text-blue-600 bg-blue-800/10 dark:bg-blue-600/20"
+                      : "text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-600 hover:bg-blue-800/5 dark:hover:bg-blue-600/10"
                   }`}
                 >
                   {link.label}
                   {isActive(link.href) && (
                     <motion.div
                       layoutId="active-nav"
-                      className="absolute inset-0 bg-gradient-to-r from-solar-blue/20 to-solar-gold/20 rounded-full"
+                      className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-solar-gold/20 rounded-full"
                       transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                     />
                   )}
@@ .. @@
             <Sheet open={isOpen} onOpenChange={setIsOpen}>
               <SheetTrigger asChild>
                 <Button variant="ghost" size="icon" className="magnetic-hover">
-                  <Menu className="h-6 w-6 text-solar-blue dark:text-solar-blue-light" />
+                  <Menu className="h-6 w-6 text-blue-800 dark:text-blue-600" />
                 </Button>
               </SheetTrigger>
@@ .. @@
                       <Link
                         href={link.href}
                         onClick={() => setIsOpen(false)}
-                        className={`block text-lg transition-colors duration-300 p-3 rounded-lg magnetic-hover ${
+                        className={`block text-base transition-colors duration-300 p-3 rounded-lg magnetic-hover ${
                           isActive(link.href)
-                            ? "text-solar-blue dark:text-solar-blue-light font-semibold bg-solar-blue/10 dark:bg-solar-blue/20"
-                            : "text-gray-700 dark:text-gray-300 hover:text-solar-blue dark:hover:text-solar-blue-light hover:bg-solar-blue/5 dark:hover:bg-solar-blue/10"
+                            ? "text-blue-800 dark:text-blue-600 font-semibold bg-blue-800/10 dark:bg-blue-600/20"
+                            : "text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-blue-600 hover:bg-blue-800/5 dark:hover:bg-blue-600/10"
                         }`}
                       >
                         {link.label}