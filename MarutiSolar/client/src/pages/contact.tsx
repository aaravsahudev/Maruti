import { motion } from "framer-motion";
import ContactSection from "@/components/sections/contact-section";
import { Phone, Mail, MapPin, Clock, Users, Award } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    primary: "+91 98765 43210",
    secondary: "+91 98765 43211",
    description: "Available 24/7 for emergency support",
    action: "Call Now"
  },
  {
    icon: Mail,
    title: "Email Us",
    primary: "info@marutisolar.com",
    secondary: "support@marutisolar.com",
    description: "We respond within 2 hours",
    action: "Send Email"
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    primary: "123 Solar Park, Andheri East",
    secondary: "Mumbai - 400001, Maharashtra",
    description: "Monday to Saturday, 9 AM - 6 PM",
    action: "Get Directions"
  }
];

const offices = [
  {
    city: "Mumbai",
    address: "123 Solar Park, Andheri East, Mumbai - 400001",
    phone: "+91 98765 43210",
    email: "mumbai@marutisolar.com"
  },
  {
    city: "Delhi",
    address: "456 Green Energy Hub, Connaught Place, Delhi - 110001",
    phone: "+91 98765 43220",
    email: "delhi@marutisolar.com"
  },
  {
    city: "Bangalore",
    address: "789 Tech Solar Center, Electronic City, Bangalore - 560100",
    phone: "+91 98765 43230",
    email: "bangalore@marutisolar.com"
  },
  {
    city: "Pune",
    address: "321 Solar Innovation Hub, Hinjewadi, Pune - 411057",
    phone: "+91 98765 43240",
    email: "pune@marutisolar.com"
  }
];

export default function Contact() {
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
            <h1 className="text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Ready to start your solar journey? Our experts are here to help you design the perfect solar solution 
              for your home or business. Get your free consultation today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the most convenient way to connect with our solar experts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl hover-lift p-8 border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-solar-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <method.icon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{method.title}</h3>
                <p className="text-lg font-semibold text-solar-blue mb-2">{method.primary}</p>
                <p className="text-gray-600 mb-3">{method.secondary}</p>
                <p className="text-sm text-gray-500 mb-6">{method.description}</p>
                <button className="bg-solar-gold hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300">
                  {method.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <ContactSection />

      {/* Office Locations */}
      <section className="py-20 bg-solar-gray">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Office Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at any of our offices across major cities in India for personalized consultation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 hover-lift"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{office.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="text-solar-blue mr-2 h-4 w-4 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 text-sm">{office.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-solar-blue mr-2 h-4 w-4" />
                    <p className="text-gray-600 text-sm">{office.phone}</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-solar-blue mr-2 h-4 w-4" />
                    <p className="text-gray-600 text-sm">{office.email}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours & Support */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-solar-blue to-solar-blue-light rounded-2xl p-8 text-white"
            >
              <Clock className="h-12 w-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong>Saturday:</strong> 9:00 AM - 4:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
                <p className="mt-4 text-sm opacity-90">
                  Emergency support available 24/7 for existing customers
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-solar-gold rounded-2xl p-8 text-white"
            >
              <Users className="h-12 w-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Customer Support</h3>
              <ul className="space-y-3">
                <li>• Free site assessment</li>
                <li>• 24/7 system monitoring</li>
                <li>• Comprehensive warranty</li>
                <li>• Annual maintenance</li>
                <li>• Technical support hotline</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl p-8 text-white"
            >
              <Award className="h-12 w-12 mb-6 text-solar-gold" />
              <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
              <ul className="space-y-3">
                <li>• 15+ years experience</li>
                <li>• 5000+ satisfied customers</li>
                <li>• Premium quality products</li>
                <li>• Competitive pricing</li>
                <li>• Expert installation team</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-solar-gray">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Quick Questions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find immediate answers to common questions about our solar solutions and services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How quickly can I get a quote?",
                answer: "We provide instant online quotes through our calculator, and detailed custom quotes within 24 hours of site assessment."
              },
              {
                question: "Do you handle all the paperwork?",
                answer: "Yes, we manage all permits, approvals, and grid connection paperwork. You don't need to worry about any documentation."
              },
              {
                question: "What financing options are available?",
                answer: "We offer zero-down installation, flexible EMI plans, and partnerships with leading banks for easy financing."
              },
              {
                question: "How long does installation take?",
                answer: "Most residential installations are completed in 1-3 days. Commercial projects may take longer depending on size and complexity."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
