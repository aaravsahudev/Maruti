import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import ProjectsSection from "@/components/sections/projects-section";
import { MapPin, Zap, Calendar, TrendingUp } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import type { Project } from "@shared/schema";

export default function Projects() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ['/api/projects'],
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Our Project Portfolio</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Explore our diverse portfolio of successful solar installations across residential, commercial, and industrial sectors. 
              Each project represents our commitment to quality, innovation, and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      <ProjectsSection />

      {/* Detailed Projects */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Project Details</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Dive deeper into our featured projects and see the impact of our solar solutions.
            </p>
          </motion.div>

          <div className="space-y-16">
            {isLoading ? (
              [...Array(3)].map((_, i) => (
                <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <Skeleton className="w-full h-80 rounded-2xl" />
                  <div className="space-y-4">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-6 w-1/2" />
                    <Skeleton className="h-20 w-full" />
                    <div className="grid grid-cols-2 gap-4">
                      <Skeleton className="h-16 w-full" />
                      <Skeleton className="h-16 w-full" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              projects?.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <img
                      src={project.projectImage || "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"}
                      alt={project.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="inline-block bg-solar-gold text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      {project.projectType}
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-xl text-gray-700 mb-8 leading-relaxed">{project.description}</p>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-solar-gray rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <Zap className="text-solar-blue mr-2 h-5 w-5" />
                          <span className="text-gray-600 font-medium">System Capacity</span>
                        </div>
                        <span className="text-2xl font-bold text-gray-900">{project.capacity}</span>
                      </div>
                      
                      <div className="bg-solar-gray rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <MapPin className="text-solar-blue mr-2 h-5 w-5" />
                          <span className="text-gray-600 font-medium">Location</span>
                        </div>
                        <span className="text-2xl font-bold text-gray-900">{project.location}</span>
                      </div>
                      
                      <div className="bg-solar-gray rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <TrendingUp className="text-green-600 mr-2 h-5 w-5" />
                          <span className="text-gray-600 font-medium">Annual Savings</span>
                        </div>
                        <span className="text-2xl font-bold text-green-600">{project.yearlysSavings}</span>
                      </div>
                      
                      <div className="bg-solar-gray rounded-lg p-6">
                        <div className="flex items-center mb-3">
                          <Calendar className="text-solar-blue mr-2 h-5 w-5" />
                          <span className="text-gray-600 font-medium">Completed</span>
                        </div>
                        <span className="text-2xl font-bold text-gray-900">2023</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-solar-gray">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Project Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The cumulative impact of our solar installations across India.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: "50+", label: "MW Installed", description: "Total solar capacity deployed" },
              { metric: "5000+", label: "Happy Customers", description: "Satisfied clients across India" },
              { metric: "₹500Cr+", label: "Savings Generated", description: "Total electricity cost savings" },
              { metric: "60,000+", label: "Tons CO₂ Reduced", description: "Annual carbon footprint reduction" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="text-4xl font-bold text-solar-blue mb-2">{stat.metric}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
