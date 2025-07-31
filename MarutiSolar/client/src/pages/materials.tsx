import { motion } from "framer-motion";
import { Zap, Battery, Sun, Shield, Cpu, Wrench } from "lucide-react";
import LoadingButton from "@/components/ui/loading-button";

const solarMaterials = [
  {
    category: "Solar Panels",
    icon: Sun,
    description: "High-efficiency monocrystalline and polycrystalline solar panels",
    items: [
      { name: "Mono PERC 540W", efficiency: "21.5%", warranty: "25 Years", price: "₹18,500" },
      { name: "Poly 270W", efficiency: "16.8%", warranty: "25 Years", price: "₹12,800" },
      { name: "Bifacial 450W", efficiency: "20.9%", warranty: "30 Years", price: "₹22,000" },
      { name: "Flexible 100W", efficiency: "22.1%", warranty: "10 Years", price: "₹8,500" }
    ]
  },
  {
    category: "Inverters",
    icon: Zap,
    description: "Grid-tie and hybrid inverters for optimal power conversion",
    items: [
      { name: "String Inverter 10kW", efficiency: "97.5%", warranty: "10 Years", price: "₹85,000" },
      { name: "Micro Inverter 300W", efficiency: "96.8%", warranty: "25 Years", price: "₹4,200" },
      { name: "Hybrid Inverter 5kW", efficiency: "94.2%", warranty: "5 Years", price: "₹65,000" },
      { name: "Off-Grid Inverter 3kW", efficiency: "89.5%", warranty: "2 Years", price: "₹28,000" }
    ]
  },
  {
    category: "Batteries",
    icon: Battery,
    description: "Lithium-ion and lead-acid batteries for energy storage",
    items: [
      { name: "Lithium 100Ah", efficiency: "95%", warranty: "10 Years", price: "₹75,000" },
      { name: "Lead Acid 150Ah", efficiency: "85%", warranty: "3 Years", price: "₹18,500" },
      { name: "LiFePO4 200Ah", efficiency: "98%", warranty: "15 Years", price: "₹1,25,000" },
      { name: "Gel Battery 100Ah", efficiency: "87%", warranty: "5 Years", price: "₹22,000" }
    ]
  },
  {
    category: "Mounting Systems",
    icon: Shield,
    description: "Durable mounting solutions for various roof types",
    items: [
      { name: "Aluminum Rail System", efficiency: "N/A", warranty: "20 Years", price: "₹125/ft" },
      { name: "Tile Roof Hooks", efficiency: "N/A", warranty: "25 Years", price: "₹85/pc" },
      { name: "Ground Mount Kit", efficiency: "N/A", warranty: "15 Years", price: "₹8,500/kW" },
      { name: "Ballast Mount", efficiency: "N/A", warranty: "10 Years", price: "₹12,000/kW" }
    ]
  },
  {
    category: "Monitoring Systems",
    icon: Cpu,
    description: "Smart monitoring and optimization solutions",
    items: [
      { name: "WiFi Monitor", efficiency: "N/A", warranty: "5 Years", price: "₹3,500" },
      { name: "Power Optimizer", efficiency: "99.5%", warranty: "25 Years", price: "₹2,800" },
      { name: "Smart Gateway", efficiency: "N/A", warranty: "10 Years", price: "₹8,500" },
      { name: "Mobile App Access", efficiency: "N/A", warranty: "Lifetime", price: "Free" }
    ]
  },
  {
    category: "Installation Accessories",
    icon: Wrench,
    description: "Essential components for professional installation",
    items: [
      { name: "DC Combiner Box", efficiency: "N/A", warranty: "10 Years", price: "₹4,500" },
      { name: "AC/DC Cables", efficiency: "N/A", warranty: "25 Years", price: "₹45/meter" },
      { name: "Safety Switches", efficiency: "N/A", warranty: "15 Years", price: "₹1,200" },
      { name: "Earthing Kit", efficiency: "N/A", warranty: "20 Years", price: "₹2,800" }
    ]
  }
];

export default function Materials() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-solar-blue to-solar-blue-light text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Solar Materials & Components</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Premium quality solar equipment from world's leading manufacturers. 
              All materials come with comprehensive warranties and professional installation support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Solar Solution Components
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From high-efficiency panels to smart monitoring systems, we provide everything needed for your solar installation.
            </p>
          </motion.div>

          <div className="space-y-16">
            {solarMaterials.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8"
              >
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-solar-blue rounded-full flex items-center justify-center mr-4">
                    <category.icon className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.category}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
                  </div>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover-lift"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{item.name}</h4>
                      
                      <div className="space-y-2 mb-4">
                        {item.efficiency !== "N/A" && (
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Efficiency:</span>
                            <span className="font-semibold text-green-600">{item.efficiency}</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Warranty:</span>
                          <span className="font-semibold text-solar-blue">{item.warranty}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Price:</span>
                          <span className="font-bold text-solar-gold text-lg">{item.price}</span>
                        </div>
                      </div>

                      <LoadingButton
                        href="/contact"
                        size="sm"
                        className="w-full bg-solar-blue hover:bg-blue-600 text-white"
                      >
                        Get Quote
                      </LoadingButton>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-solar-gold to-yellow-500">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Need Help Choosing Materials?</h2>
            <p className="text-xl text-white opacity-90 mb-8">
              Our expert team can help you select the right components for your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LoadingButton
                href="/contact"
                size="lg"
                className="bg-white text-solar-gold hover:bg-gray-100 px-8 py-3 font-semibold"
              >
                Get Expert Consultation
              </LoadingButton>
              <LoadingButton
                onClick={() => {
                  window.open('https://wa.me/919876543210?text=Hi%20I%20need%20help%20selecting%20solar%20materials', '_blank');
                }}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-solar-gold px-8 py-3 font-semibold"
              >
                WhatsApp Us
              </LoadingButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}