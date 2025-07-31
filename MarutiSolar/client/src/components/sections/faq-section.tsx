import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much can I save with solar panels?",
    answer: "Most customers save 70-90% on their electricity bills. The exact savings depend on your energy consumption, roof size, and local electricity rates. Our calculator can provide personalized estimates."
  },
  {
    question: "What is the lifespan of solar panels?",
    answer: "Our premium solar panels come with a 25-year performance warranty and typically last 30+ years. They maintain 80% efficiency even after 25 years of operation."
  },
  {
    question: "Do you provide financing options?",
    answer: "Yes! We offer flexible financing options including zero-down installation, EMI plans, and partnerships with leading banks. Our team will help you choose the best option for your budget."
  },
  {
    question: "How long does the installation process take?",
    answer: "Installation typically takes 1-3 days depending on system size and complexity. We handle all permits and inspections to ensure a smooth process from start to finish."
  },
  {
    question: "What maintenance is required for solar panels?",
    answer: "Solar panels require minimal maintenance. We recommend annual cleaning and inspection, which we provide as part of our maintenance packages. Most systems are self-cleaning in rainy conditions."
  }
];

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-solar-gray">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about solar installation, financing, and maintenance.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <ChevronDown 
                    className={`text-solar-blue transition-transform duration-300 ${
                      openFAQ === index ? 'transform rotate-180' : ''
                    }`} 
                  />
                </div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openFAQ === index ? 'auto' : 0,
                  opacity: openFAQ === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
