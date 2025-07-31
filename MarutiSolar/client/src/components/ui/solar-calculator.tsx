import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Leaf } from "lucide-react";

export default function SolarCalculator() {
  const [monthlyBill, setMonthlyBill] = useState("");
  const [roofArea, setRoofArea] = useState("");
  const [city, setCity] = useState("");
  const [results, setResults] = useState({
    monthlySavings: 0,
    annualSavings: 0,
    lifetimeSavings: 0,
    systemSize: 0,
    co2Reduction: 0,
  });

  const calculateSavings = () => {
    if (monthlyBill && roofArea) {
      const monthlySavings = Math.round(parseInt(monthlyBill) * 0.8);
      const annualSavings = monthlySavings * 12;
      const lifetimeSavings = Math.round(annualSavings * 25 * 1.1); // With inflation
      const systemSize = Math.round((parseInt(monthlyBill) / 1000) * 1.2);
      const co2Reduction = Math.round(systemSize * 1.2);
      
      setResults({
        monthlySavings,
        annualSavings,
        lifetimeSavings,
        systemSize,
        co2Reduction,
      });
    }
  };

  return (
    <section id="solar-calculator" className="py-20 bg-gradient-to-br from-solar-blue to-solar-blue-light">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 text-white"
          >
            <h2 className="text-5xl font-bold mb-4">Solar Savings Calculator</h2>
            <p className="text-xl opacity-90">Discover how much you can save with solar energy</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <Label htmlFor="monthlyBill" className="text-gray-700 font-semibold">
                    Monthly Electricity Bill (₹)
                  </Label>
                  <Input
                    id="monthlyBill"
                    type="number"
                    placeholder="Enter your monthly bill"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div className="mb-6">
                  <Label htmlFor="roofArea" className="text-gray-700 font-semibold">
                    Roof Area (sq ft)
                  </Label>
                  <Input
                    id="roofArea"
                    type="number"
                    placeholder="Available roof space"
                    value={roofArea}
                    onChange={(e) => setRoofArea(e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div className="mb-6">
                  <Label className="text-gray-700 font-semibold">City</Label>
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
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  onClick={calculateSavings}
                  className="w-full bg-solar-gold hover:bg-yellow-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl"
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate My Savings
                </Button>
              </div>
              
              <div className="bg-solar-gray rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Potential Savings</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-700">Monthly Savings</span>
                    <span className="font-bold text-solar-blue text-lg">₹ {results.monthlySavings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-700">Annual Savings</span>
                    <span className="font-bold text-solar-gold text-lg">₹ {results.annualSavings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-700">25-Year Savings</span>
                    <span className="font-bold text-green-600 text-lg">₹ {results.lifetimeSavings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-gray-700">Recommended System</span>
                    <span className="font-bold text-gray-900">{results.systemSize} kW</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-100 rounded-lg">
                  <div className="flex items-center">
                    <Leaf className="text-green-600 mr-2 h-5 w-5" />
                    <span className="text-green-800 font-semibold">Environmental Impact</span>
                  </div>
                  <p className="text-green-700 text-sm mt-1">
                    Reduce {results.co2Reduction} tons of CO₂ annually
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
