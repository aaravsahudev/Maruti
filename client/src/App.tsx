@@ .. @@
 function App() {
   const [showNameModal, setShowNameModal] = useState(false);
   const [userName, setUserName] = useState("");

   useEffect(() => {
+    // Scroll to top on page load
+    window.scrollTo(0, 0);
+    
     const savedName = localStorage.getItem("userName");
     if (!savedName) {
       // Show modal after page loader