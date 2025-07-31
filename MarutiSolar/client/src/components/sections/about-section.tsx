import { motion } from "framer-motion";
import { Award, Users, Leaf } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Industry Leadership",
    description: "Recognized as one of India's top solar installation companies with numerous industry awards and certifications.",
    color: "bg-solar-gold"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our certified engineers and technicians ensure every installation meets the highest standards of quality and performance.",
    color: "bg-solar-blue"
  },
  {
    icon: Leaf,
    title: "Sustainability Mission",
    description: "Committed to reducing carbon footprint and promoting clean energy adoption across residential and commercial sectors.",
    color: "bg-solar-blue-light"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-solar-gray to-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              For over 15 years, Maruti Solar Solution has been at the forefront of India's renewable energy revolution. We're not just a solar company – we're your partners in building a sustainable future.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Solar Team Meeting"
              className="rounded-2xl shadow-lg hover-lift" 
            />
            <img 
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Solar Installation Work"
              className="rounded-2xl shadow-lg hover-lift mt-8" 
            />
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Solar Consultation"
              className="rounded-2xl shadow-lg hover-lift -mt-8" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
