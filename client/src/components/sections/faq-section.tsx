@@ .. @@
               <button
                 onClick={() => toggleFAQ(index)}
-                className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
+                className="w-full text-left p-6 hover:bg-blue-50 transition-colors"
               >
                 <div className="flex justify-between items-center">
-                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
+                  <h3 className="text-lg font-semibold text-blue-800">{faq.question}</h3>
                   <ChevronDown 
-                    className={`text-solar-blue transition-transform duration-300 ${
+                    className={`text-blue-800 transition-transform duration-300 ${
                       openFAQ === index ? 'transform rotate-180' : ''
                     }`} 
                   />
@@ .. @@
                 className="overflow-hidden"
               >
                 <div className="px-6 pb-6">
-                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
+                  <p className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-lg">{faq.answer}</p>
                 </div>
               </motion.div>