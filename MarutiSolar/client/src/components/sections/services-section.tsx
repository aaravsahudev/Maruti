import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, Building, Battery, Check } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Solar",
    description: "Transform your home into an energy-efficient powerhouse with our premium residential solar solutions. Reduce electricity bills by up to 90%.",
    features: [
      "Premium Tier-1 Solar Panels",
      "25-Year Performance Warranty",
      "Smart Monitoring System"
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    buttonText: "Learn More",
    buttonVariant: "default" as const
  },
  {
    icon: Building,
    title: "Commercial Solar",
    description: "Maximize your business profitability with large-scale commercial solar installations. Reduce operational costs and boost your green credentials.",
    features: [
      "High-Efficiency Module Technology",
      "Comprehensive O&M Services",
      "ROI Analysis & Financing"
    ],
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    buttonText: "Get Quote",
    buttonVariant: "secondary" as const
  },
  {
    icon: Battery,
    title: "Solar + Storage",
    description: "Store excess solar energy for use during peak hours or power outages. Achieve complete energy independence with our advanced battery solutions.",
    features: [
      "Lithium-Ion Battery Technology",
      "Backup Power Protection",
      "Smart Energy Management"
    ],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    buttonText: "Explore Options",
    buttonVariant: "outline" as const
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Premium Solar Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solar energy services designed to meet your specific needs with cutting-edge technology and exceptional quality.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl hover-lift p-8 border border-gray-100"
            >
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-solar-blue rounded-full flex items-center justify-center mr-4">
                  <service.icon className="text-white h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <Check className="text-solar-gold mr-2 h-4 w-4" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={service.buttonVariant}
                className={`w-full py-3 rounded-xl font-semibold transition-colors duration-300 ${
                  service.buttonVariant === 'default' ? 'bg-solar-blue hover:bg-blue-700 text-white' :
                  service.buttonVariant === 'secondary' ? 'bg-solar-gold hover:bg-yellow-600 text-white' :
                  'border-solar-blue text-solar-blue hover:bg-solar-blue hover:text-white'
                }`}
              >
                {service.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
