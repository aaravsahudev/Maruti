@@ .. @@
 import { useState } from "react";
 import { motion } from "framer-motion";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Label } from "@/components/ui/label";
 import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
-import { Calculator, Leaf } from "lucide-react";
+import { Calculator, Leaf, BarChart3 } from "lucide-react";
+import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

+const previousYearData = [
+  { month: 'Jan', bill: 3200 },
+  { month: 'Feb', bill: 2800 },
+  { month: 'Mar', bill: 3500 },
+  { month: 'Apr', bill: 4200 },
+  { month: 'May', bill: 5100 },
+  { month: 'Jun', bill: 5800 },
+  { month: 'Jul', bill: 6200 },
+  { month: 'Aug', bill: 5900 },
+  { month: 'Sep', bill: 4800 },
+  { month: 'Oct', bill: 3900 },
+  { month: 'Nov', bill: 3100 },
+  { month: 'Dec', bill: 2900 }
+];
+
 export default function SolarCalculator() {
@@ .. @@
                   <Select value={city} onValueChange={setCity}>
                     <SelectTrigger className="mt-2">
                       <SelectValue placeholder="Select your city" />
                     </SelectTrigger>
                     <SelectContent>
                       <SelectItem value="mumbai">Mumbai</SelectItem>
                       <SelectItem value="delhi">Delhi</SelectItem>
                       <SelectItem value="bangalore">Bangalore</SelectItem>
                       <SelectItem value="chennai">Chennai</SelectItem>
                       <SelectItem value="pune">Pune</SelectItem>
+                      <SelectItem value="indore">Indore</SelectItem>
+                      <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
+                      <SelectItem value="hyderabad">Hyderabad</SelectItem>
+                      <SelectItem value="kolkata">Kolkata</SelectItem>
+                      <SelectItem value="jaipur">Jaipur</SelectItem>
                     </SelectContent>
                   </Select>
                 </div>
@@ .. @@
                   </div>
                 </div>
               </div>
+              
+              {/* Previous Year Chart */}
+              <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-200">
+                <div className="flex items-center mb-4">
+                  <BarChart3 className="text-blue-800 mr-2 h-5 w-5" />
+                  <h4 className="text-lg font-semibold text-gray-900">Previous Year Electricity Bills</h4>
+                </div>
+                <ResponsiveContainer width="100%" height={200}>
+                  <BarChart data={previousYearData}>
+                    <CartesianGrid strokeDasharray="3 3" />
+                    <XAxis dataKey="month" />
+                    <YAxis />
+                    <Tooltip formatter={(value) => [`₹${value}`, 'Bill Amount']} />
+                    <Bar dataKey="bill" fill="#1e40af" />
+                  </BarChart>
+                </ResponsiveContainer>
+              </div>
             </div>
           </motion.div>