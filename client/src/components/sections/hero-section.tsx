@@ .. @@
           <motion.h1
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.4 }}
-            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-gray-900 dark:text-white"
+            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900 dark:text-white leading-tight"
           >
             Power Your Future with{" "}
             <motion.span 
-              className="bg-gradient-to-r from-solar-blue via-solar-blue-light to-solar-gold bg-clip-text text-transparent animate-glow"
+              className="bg-gradient-to-r from-blue-800 via-blue-600 to-solar-gold bg-clip-text text-transparent animate-glow block"
               animate={{ 
                 backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
               }}
@@ .. @@
             <LoadingButton
               onClick={() => {
-                // Scroll to solar calculator section
                 const calculatorSection = document.getElementById('solar-calculator');
                 if (calculatorSection) {
                   calculatorSection.scrollIntoView({ behavior: 'smooth' });
                 }
               }}
               size="lg"
-              className="bg-gradient-to-r from-solar-gold to-yellow-500 hover:from-yellow-500 hover:to-solar-gold text-white px-10 py-4 rounded-full transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-3xl magnetic-hover animate-glow"
+              className="bg-gradient-to-r from-solar-gold to-yellow-500 hover:from-yellow-500 hover:to-solar-gold text-white px-8 py-3 rounded-full transition-all duration-300 font-bold text-base shadow-2xl hover:shadow-3xl magnetic-hover animate-glow"
             >
               <Calculator className="mr-3 h-6 w-6" />
               Calculate Your Savings
@@ .. @@
             <LoadingButton
               onClick={() => {
-                // Open demo video or navigate to projects
-                window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
+                window.open('tel:+919876543210', '_self');
               }}
               variant="outline"
               size="lg"
-              className="border-2 border-solar-blue text-solar-blue dark:text-solar-blue-light px-10 py-4 rounded-full hover:bg-solar-blue hover:text-white dark:hover:bg-solar-blue-light transition-all duration-300 font-bold text-lg magnetic-hover"
+              className="border-2 border-blue-800 text-blue-800 dark:text-blue-600 px-8 py-3 rounded-full hover:bg-blue-800 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 font-bold text-base magnetic-hover"
             >
               <Play className="mr-3 h-6 w-6" />
-              Watch Demo
+              Book Appointment
             </LoadingButton>
           </motion.div>