@@ .. @@
 export default function ThemeToggle() {
   const { theme, toggleTheme } = useTheme();

   return (
-    <Button
-      onClick={toggleTheme}
-      variant="ghost"
-      size="icon"
-      className="relative overflow-hidden rounded-full w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
-    >
-      <motion.div
-        animate={{
-          rotate: theme === "dark" ? 180 : 0,
-          scale: theme === "dark" ? 0 : 1,
-        }}
-        transition={{ duration: 0.3 }}
-        className="absolute inset-0 flex items-center justify-center"
+    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
+      <Button
+        onClick={toggleTheme}
+        variant="ghost"
+        size="icon"
+        className="relative overflow-hidden rounded-full w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-500"
       >
-        <Sun className="h-5 w-5 text-solar-gold" />
-      </motion.div>
-      <motion.div
-        animate={{
-          rotate: theme === "light" ? -180 : 0,
-          scale: theme === "light" ? 0 : 1,
-        }}
-        transition={{ duration: 0.3 }}
-        className="absolute inset-0 flex items-center justify-center"
-      >
-        <Moon className="h-5 w-5 text-blue-300" />
-      </motion.div>
-    </Button>
+        <motion.div
+          animate={{
+            rotate: theme === "dark" ? 180 : 0,
+            scale: theme === "dark" ? 0 : 1,
+          }}
+          transition={{ duration: 0.5, ease: "easeInOut" }}
+          className="absolute inset-0 flex items-center justify-center"
+        >
+          <Sun className="h-4 w-4 text-solar-gold" />
+        </motion.div>
+        <motion.div
+          animate={{
+            rotate: theme === "light" ? -180 : 0,
+            scale: theme === "light" ? 0 : 1,
+          }}
+          transition={{ duration: 0.5, ease: "easeInOut" }}
+          className="absolute inset-0 flex items-center justify-center"
+        >
+          <Moon className="h-4 w-4 text-blue-300" />
+        </motion.div>
+      </Button>
+    </motion.div>
   );
 }