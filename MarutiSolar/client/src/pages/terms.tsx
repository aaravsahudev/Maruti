import { motion } from "framer-motion";
import { FileText, Shield, CreditCard, Wrench, Phone, Scale } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "Services Agreement",
    content: [
      "Maruti Solar Solution provides comprehensive solar installation and maintenance services across residential, commercial, and industrial sectors.",
      "All services are subject to site assessment and technical feasibility studies conducted by our certified engineers.",
      "Service delivery timelines are estimates and may vary based on weather conditions, permit approvals, and equipment availability.",
      "Customers must provide accurate information about their property and energy requirements for optimal system design."
    ]
  },
  {
    icon: Shield,
    title: "Warranty Terms",
    content: [
      "Solar panels come with a 25-year performance warranty guaranteeing 80% efficiency after 25 years of operation.",
      "Inverters are covered under a 10-year manufacturer warranty with optional extended coverage available.",
      "Installation workmanship is warranted for 5 years from the date of system commissioning.",
      "Warranty claims must be reported within 30 days of issue discovery and are subject to inspection by our technical team.",
      "Warranties do not cover damage due to natural disasters, vandalism, or improper maintenance by third parties."
    ]
  },
  {
    icon: CreditCard,
    title: "Payment Terms",
    content: [
      "Payment schedules are agreed upon contract signing and vary based on system size and financing options selected.",
      "We accept payments via cash, bank transfer, credit cards, and financing through our approved banking partners.",
      "A 20% advance payment is required to commence project work and secure equipment allocation.",
      "Balance payments are collected as per milestone completion: 50% upon material delivery and 30% upon system commissioning.",
      "Late payments may incur additional charges as specified in the individual service agreement.",
      "All prices are inclusive of applicable taxes unless otherwise specified."
    ]
  },
  {
    icon: Wrench,
    title: "Installation Process",
    content: [
      "Installation timeline depends on system size, complexity, and local permit approval processes.",
      "We ensure minimal disruption to your daily activities and complete projects as per agreed schedules.",
      "All installations comply with local building codes, electrical standards, and safety regulations.",
      "Customers must provide safe access to installation areas and ensure structural adequacy of mounting surfaces.",
      "Any modifications to the original design due to site conditions will be communicated and approved before implementation."
    ]
  },
  {
    icon: Phone,
    title: "Maintenance & Support",
    content: [
      "Regular maintenance services are available through annual maintenance contracts to ensure optimal system performance.",
      "24/7 emergency support is provided for system failures affecting critical operations.",
      "Routine maintenance includes cleaning, inspection, and performance monitoring of solar components.",
      "Customers are responsible for keeping the installation area clean and reporting any visible damage promptly.",
      "Software updates and system monitoring services are provided free of charge during the warranty period."
    ]
  },
  {
    icon: Scale,
    title: "Legal Compliance",
    content: [
      "All installations comply with Central Electricity Regulatory Commission (CERC) and State Electricity Board regulations.",
      "Net metering arrangements are facilitated as per local utility guidelines and government policies.",
      "Customers must obtain necessary approvals from housing societies, local authorities, and utility companies as required.",
      "Maruti Solar Solution holds all necessary licenses and certifications for solar installation and electrical work.",
      "Disputes shall be resolved through arbitration in Mumbai jurisdiction under Indian Arbitration and Conciliation Act."
    ]
  }
];

export default function Terms() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Please read these terms and conditions carefully before engaging our solar installation and maintenance services. 
              These terms govern your relationship with Maruti Solar Solution.
            </p>
            <div className="mt-8 text-sm opacity-75">
              <p>Last updated: January 2024</p>
              <p>Effective from: January 1, 2024</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Agreement Overview</h2>
              <div className="bg-solar-gray rounded-2xl p-8 border-l-4 border-solar-blue">
                <p className="text-lg text-gray-700 leading-relaxed">
                  By engaging Maruti Solar Solution for solar installation, maintenance, or consulting services, 
                  you agree to be bound by these terms and conditions. These terms protect both parties and 
                  ensure a clear understanding of our service commitments and your obligations as a customer.
                </p>
              </div>
            </motion.div>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-solar-blue to-solar-blue-light p-6">
                    <div className="flex items-center text-white">
                      <section.icon className="h-8 w-8 mr-4" />
                      <h3 className="text-2xl font-bold">{section.title}</h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <ul className="space-y-4">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-solar-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                          <p className="text-gray-700 leading-relaxed">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Important Information */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 bg-gradient-to-r from-solar-gold to-yellow-500 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Important Notes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Customer Responsibilities:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Provide accurate property and energy consumption information</li>
                    <li>• Ensure structural adequacy of installation surfaces</li>
                    <li>• Maintain clear access to solar installations</li>
                    <li>• Report any damage or performance issues promptly</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3">Our Commitments:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Use only premium quality, certified solar components</li>
                    <li>• Provide comprehensive warranties and support</li>
                    <li>• Ensure compliance with all applicable regulations</li>
                    <li>• Maintain highest standards of safety and workmanship</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 bg-gray-900 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Questions About These Terms?</h3>
              <p className="text-lg mb-6 opacity-90">
                If you have any questions about these terms and conditions, please don't hesitate to contact us.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Phone className="h-8 w-8 mx-auto mb-2 text-solar-gold" />
                  <p className="font-semibold">Call Us</p>
                  <p className="text-sm opacity-75">+91 98765 43210</p>
                </div>
                <div className="text-center">
                  <FileText className="h-8 w-8 mx-auto mb-2 text-solar-gold" />
                  <p className="font-semibold">Email Us</p>
                  <p className="text-sm opacity-75">legal@marutisolar.com</p>
                </div>
                <div className="text-center">
                  <Shield className="h-8 w-8 mx-auto mb-2 text-solar-gold" />
                  <p className="font-semibold">Legal Department</p>
                  <p className="text-sm opacity-75">Monday - Friday, 9 AM - 6 PM</p>
                </div>
              </div>
            </motion.div>

            {/* Footer Notice */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 text-center text-gray-600"
            >
              <p className="text-sm">
                These terms and conditions constitute the entire agreement between you and Maruti Solar Solution. 
                Any modifications to these terms must be made in writing and signed by both parties.
              </p>
              <p className="text-xs mt-4 opacity-75">
                © 2024 Maruti Solar Solution. All rights reserved. 
                Registered Office: 123 Solar Park, Andheri East, Mumbai - 400001
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
