import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import AboutSection from "@/components/sections/about-section";
import { Award, Users, Target, Lightbulb, Linkedin } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import type { Team } from "@shared/schema";

const companyValues = [
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from product selection to customer service."
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Our customers are at the heart of our business. We listen, understand, and deliver beyond expectations."
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We continuously embrace new technologies and methods to provide cutting-edge solar solutions."
  },
  {
    icon: Lightbulb,
    title: "Sustainability",
    description: "We're committed to creating a cleaner, greener future for generations to come."
  }
];

export default function About() {
  const { data: teamMembers, isLoading } = useQuery<Team[]>({
    queryKey: ['/api/team'],
  });

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
            <h1 className="text-6xl font-bold mb-6">Who We Are</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              For over 15 years, Maruti Solar Solution has been pioneering India's transition to renewable energy. 
              We're not just a solar company – we're your partners in building a sustainable future.
            </p>
          </motion.div>
        </div>
      </section>

      <AboutSection />

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
                <p className="text-xl mb-6">
                  Founded in 2009 with a vision to make clean energy accessible to every Indian household and business, 
                  Maruti Solar Solution started as a small team of passionate engineers who believed in the power of the sun.
                </p>
                <p className="text-lg mb-6">
                  What began as a local solar installation company has grown into one of India's most trusted names in 
                  renewable energy. We've installed over 50MW of solar capacity, helping more than 5,000 customers 
                  reduce their carbon footprint while saving millions in electricity costs.
                </p>
                <p className="text-lg">
                  Today, we continue to innovate and lead the industry with cutting-edge technology, comprehensive 
                  service offerings, and an unwavering commitment to customer satisfaction. Our mission remains the same: 
                  to accelerate India's transition to clean, sustainable energy.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-solar-gray">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and help us deliver exceptional solar solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover-lift text-center"
              >
                <div className="w-16 h-16 bg-solar-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-white h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team brings together decades of expertise in renewable energy, 
              engineering, and business development.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-xl p-8 text-center">
                  <Skeleton className="w-32 h-32 rounded-full mx-auto mb-6" />
                  <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
                  <Skeleton className="h-4 w-1/2 mx-auto mb-4" />
                  <Skeleton className="h-20 w-full" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers?.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl hover-lift p-8 text-center"
                >
                  <img
                    src={member.profileImage || "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-solar-blue font-semibold mb-4">{member.position}</p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  {member.linkedinUrl && (
                    <a
                      href={member.linkedinUrl}
                      className="inline-flex items-center justify-center w-10 h-10 bg-solar-blue rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin className="text-white h-5 w-5" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-solar-gray">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Certifications & Awards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition from industry bodies and government organizations for our commitment to quality and excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "ISO 9001:2015", description: "Quality Management System Certification" },
              { title: "MNRE Approved", description: "Ministry of New & Renewable Energy" },
              { title: "IEC 61215", description: "Solar Panel Quality Certification" },
              { title: "Best Solar Company 2023", description: "India Solar Awards" }
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center hover-lift border-2 border-transparent hover:border-solar-gold transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-solar-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 highlight-text">{cert.title}</h3>
                <p className="text-gray-600 font-medium">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
