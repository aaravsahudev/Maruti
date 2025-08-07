@@ .. @@
   useEffect(() => {
     const interval = setInterval(() => {
       setProgress(prev => {
         if (prev >= 100) {
           clearInterval(interval);
-          setTimeout(() => setIsLoading(false), 500);
+          setTimeout(() => {
+            setIsLoading(false);
+            // Ensure we're at the top after loading
+            window.scrollTo(0, 0);
+          }, 500);
           return 100;
         }
         return prev + Math.random() * 15;