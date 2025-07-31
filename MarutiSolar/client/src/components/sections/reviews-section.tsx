import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import type { Review } from "@shared/schema";

export default function ReviewsSection() {
  const { data: reviews, isLoading } = useQuery<Review[]>({
    queryKey: ['/api/reviews'],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied customers who've transformed their energy experience with Maruti Solar Solution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Skeleton key={j} className="h-5 w-5 mr-1" />
                  ))}
                </div>
                <Skeleton className="h-20 w-full mb-6" />
                <div className="flex items-center">
                  <Skeleton className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <Skeleton className="h-4 w-24 mb-1" />
                    <Skeleton className="h-3 w-32" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who've transformed their energy experience with Maruti Solar Solution.
          </p>
          <div className="flex items-center justify-center mt-6">
            <div className="flex text-solar-gold text-2xl mr-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
            <span className="text-xl font-semibold text-gray-900">4.9/5 Rating</span>
            <span className="text-gray-600 ml-2">(2,847 reviews)</span>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews?.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl hover-lift p-8 border border-gray-100"
            >
              <div className="flex text-solar-gold text-lg mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{review.reviewText}"</p>
              <div className="flex items-center">
                <img 
                  src={review.customerImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"} 
                  alt={review.customerName}
                  className="w-12 h-12 rounded-full mr-4" 
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{review.customerName}</h4>
                  <p className="text-gray-600 text-sm">{review.customerTitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
