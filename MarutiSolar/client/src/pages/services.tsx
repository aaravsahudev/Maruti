import { motion } from "framer-motion";
import ServicesSection from "@/components/sections/services-section";
import { Check, ArrowRight } from "lucide-react";
import LoadingButton from "@/components/ui/loading-button";

const serviceDetails = [
  {
    title: "Residential Solar Solutions",
    description: "Transform your home into an energy-efficient powerhouse with our comprehensive residential solar packages.",
    features: [
      "Premium Tier-1 solar panels with 25-year warranty",
      "Advanced micro-inverters for maximum efficiency",
      "Smart monitoring system with mobile app",
      "Professional installation and commissioning",
      "Complete paperwork and grid connection support",
      "Annual maintenance and cleaning services"
    ],
    benefits: [
      "Reduce electricity bills by up to 90%",
      "Increase property value by 15-20%",
      "Zero maintenance for first 5 years",
      "Government subsidy and tax benefits",
      "Complete energy independence",
      "25-year performance guarantee"
    ]
  }
];

export default function Services() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-solar-blue to-solar-blue-light text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl font-bold mb-6">Our Solar Solutions</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Comprehensive solar energy services designed to meet your specific needs with cutting-edge technology, 
              exceptional quality, and unmatched customer service.
            </p>
          </motion.div>
        </div>
      </section>

      <ServicesSection />

      {/* Detailed Service Information */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          {serviceDetails.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">{service.title}</h2>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">{service.description}</p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">What's Included:</h3>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="text-solar-gold mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <LoadingButton 
                    href="/contact"
                    className="bg-solar-blue hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold"
                  >
                    Get Detailed Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </LoadingButton>
                </div>

                <div className="bg-solar-gray rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Benefits:</h3>
                  <div className="space-y-4">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                        <Check className="text-green-600 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-solar-gray">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Installation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined 6-step process to get your solar system up and running with minimal hassle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Site Assessment", description: "Free site visit and energy audit by our certified engineers" },
              { step: "02", title: "Custom Design", description: "Personalized solar system design based on your energy needs" },
              { step: "03", title: "Permits & Approvals", description: "We handle all paperwork, permits, and utility approvals" },
              { step: "04", title: "Professional Installation", description: "Expert installation by certified technicians in 1-3 days" },
              { step: "05", title: "Grid Connection", description: "System commissioning and grid connection setup" },
              { step: "06", title: "Monitoring & Support", description: "24/7 monitoring and ongoing maintenance support" }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover-lift"
              >
                <div className="text-4xl font-bold text-solar-gold mb-4">{process.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
