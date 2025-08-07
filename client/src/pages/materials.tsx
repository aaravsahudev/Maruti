@@ .. @@
       {/* CTA Section */}
       <section className="py-20 bg-gradient-to-r from-solar-gold to-yellow-500">
+        {/* Company Logos Scrolling Section */}
+        <div className="mb-16">
+          <motion.div
+            initial={{ opacity: 0, y: 30 }}
+            whileInView={{ opacity: 1, y: 0 }}
+            transition={{ duration: 0.8 }}
+            viewport={{ once: true }}
+            className="text-center mb-8"
+          >
+            <h3 className="text-2xl font-bold text-white mb-4">Trusted by Leading Brands</h3>
+            <p className="text-white/90">We partner with world's top solar equipment manufacturers</p>
+          </motion.div>
+          
+          <div className="overflow-hidden">
+            <motion.div
+              animate={{ x: [0, -100] }}
+              transition={{
+                x: {
+                  repeat: Infinity,
+                  repeatType: "loop",
+                  duration: 20,
+                  ease: "linear",
+                },
+              }}
+              className="flex space-x-12 items-center"
+            >
+              {[
+                { name: "Tata Solar", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&w=200&h=100&fit=crop" },
+                { name: "Adani Solar", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&w=200&h=100&fit=crop" },
+                { name: "Vikram Solar", logo: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&w=200&h=100&fit=crop" },
+                { name: "Waaree Solar", logo: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&w=200&h=100&fit=crop" },
+                { name: "Luminous", logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&w=200&h=100&fit=crop" },
+                { name: "Microtek", logo: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&w=200&h=100&fit=crop" },
+              ].concat([
+                { name: "Tata Solar", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&w=200&h=100&fit=crop" },
+                { name: "Adani Solar", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&w=200&h=100&fit=crop" },
+                { name: "Vikram Solar", logo: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&w=200&h=100&fit=crop" },
+                { name: "Waaree Solar", logo: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&w=200&h=100&fit=crop" },
+                { name: "Luminous", logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&w=200&h=100&fit=crop" },
+                { name: "Microtek", logo: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&w=200&h=100&fit=crop" },
+              ]).map((company, index) => (
+                <div key={index} className="flex-shrink-0 bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[200px]">
+                  <img 
+                    src={company.logo} 
+                    alt={company.name}
+                    className="w-full h-16 object-contain filter brightness-0 invert opacity-80"
+                  />
+                  <p className="text-white text-center mt-2 font-medium">{company.name}</p>
+                </div>
+              ))}
+            </motion.div>
+          </div>
+        </div>
+        
         <div className="container mx-auto px-6">
           <motion.div
             initial={{ opacity: 0, y: 50 }}