import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Star, Send, MessageCircle, ThumbsUp } from "lucide-react";
import type { Review, InsertReview } from "@shared/schema";

function StarRating({ rating, onRatingChange, readonly = false }: { 
  rating: number; 
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
}) {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-6 w-6 cursor-pointer transition-colors ${
            star <= rating ? 'text-solar-gold fill-current' : 'text-gray-300'
          } ${readonly ? 'cursor-default' : 'hover:text-solar-gold'}`}
          onClick={() => !readonly && onRatingChange?.(star)}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl hover-lift p-8 border border-gray-100"
    >
      <div className="flex items-center justify-between mb-4">
        <StarRating rating={review.rating} readonly />
        <div className="flex items-center text-gray-500 text-sm">
          <ThumbsUp className="h-4 w-4 mr-1" />
          Verified Customer
        </div>
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed italic text-lg">
        "{review.reviewText}"
      </p>
      <div className="flex items-center">
        <img 
          src={review.customerImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"} 
          alt={review.customerName}
          className="w-14 h-14 rounded-full mr-4 object-cover" 
        />
        <div>
          <h4 className="font-semibold text-gray-900 text-lg">{review.customerName}</h4>
          <p className="text-gray-600">{review.customerTitle}</p>
        </div>
      </div>
    </motion.div>
  );
}

function ReviewForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    customerName: "",
    customerTitle: "",
    rating: 0,
    reviewText: "",
    customerImage: "",
  });

  const reviewMutation = useMutation({
    mutationFn: async (data: InsertReview) => {
      const response = await apiRequest("POST", "/api/reviews", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Review Submitted!",
        description: "Thank you for your feedback. Your review will be published after approval.",
      });
      setFormData({
        customerName: "",
        customerTitle: "",
        rating: 0,
        reviewText: "",
        customerImage: "",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/reviews'] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit your review. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.rating === 0) {
      toast({
        title: "Rating Required",
        description: "Please select a star rating before submitting.",
        variant: "destructive",
      });
      return;
    }
    reviewMutation.mutate(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
    >
      <div className="flex items-center mb-8">
        <MessageCircle className="text-solar-blue mr-3 h-8 w-8" />
        <h3 className="text-3xl font-bold text-gray-900">Share Your Experience</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="customerName" className="text-gray-700 font-semibold">
              Your Name *
            </Label>
            <Input
              id="customerName"
              placeholder="Enter your full name"
              value={formData.customerName}
              onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
              required
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="customerTitle" className="text-gray-700 font-semibold">
              Title/Position *
            </Label>
            <Input
              id="customerTitle"
              placeholder="e.g., Homeowner, Mumbai"
              value={formData.customerTitle}
              onChange={(e) => setFormData({ ...formData, customerTitle: e.target.value })}
              required
              className="mt-2"
            />
          </div>
        </div>
        
        <div>
          <Label className="text-gray-700 font-semibold mb-2 block">
            Your Rating *
          </Label>
          <StarRating 
            rating={formData.rating} 
            onRatingChange={(rating) => setFormData({ ...formData, rating })} 
          />
        </div>
        
        <div>
          <Label htmlFor="reviewText" className="text-gray-700 font-semibold">
            Your Review *
          </Label>
          <Textarea
            id="reviewText"
            rows={5}
            placeholder="Tell us about your experience with our solar solutions..."
            value={formData.reviewText}
            onChange={(e) => setFormData({ ...formData, reviewText: e.target.value })}
            required
            className="mt-2 resize-none"
          />
        </div>
        
        <div>
          <Label htmlFor="customerImage" className="text-gray-700 font-semibold">
            Profile Photo URL (Optional)
          </Label>
          <Input
            id="customerImage"
            type="url"
            placeholder="https://example.com/your-photo.jpg"
            value={formData.customerImage}
            onChange={(e) => setFormData({ ...formData, customerImage: e.target.value })}
            className="mt-2"
          />
        </div>
        
        <Button
          type="submit"
          disabled={reviewMutation.isPending}
          className="w-full bg-gradient-to-r from-solar-blue to-solar-blue-light hover:from-blue-700 hover:to-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {reviewMutation.isPending ? (
            "Submitting..."
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Submit Review
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
}

export default function Reviews() {
  const { data: reviews, isLoading } = useQuery<Review[]>({
    queryKey: ['/api/reviews'],
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
            <h1 className="text-6xl font-bold mb-6">Customer Reviews</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Discover why thousands of customers trust Maruti Solar Solution for their renewable energy needs. 
              Read authentic reviews from satisfied customers across India.
            </p>
            <div className="flex items-center justify-center mt-8">
              <div className="flex text-solar-gold text-3xl mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 fill-current" />
                ))}
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">4.9/5 Rating</div>
                <div className="text-lg opacity-90">Based on 2,847 reviews</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-white">
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
              Real experiences from real customers who've transformed their energy consumption with our solar solutions.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Skeleton key={j} className="h-6 w-6 mr-1" />
                    ))}
                  </div>
                  <Skeleton className="h-24 w-full mb-6" />
                  <div className="flex items-center">
                    <Skeleton className="w-14 h-14 rounded-full mr-4" />
                    <div>
                      <Skeleton className="h-5 w-32 mb-1" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews?.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Review Statistics */}
      <section className="py-20 bg-solar-gray">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-solar-blue mb-4">4.9</div>
                <div className="flex justify-center text-solar-gold text-2xl mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-current" />
                  ))}
                </div>
                <p className="text-xl text-gray-600">Overall Rating</p>
                <p className="text-lg text-gray-500">2,847 total reviews</p>
              </motion.div>
            </div>
            
            <div className="md:col-span-3 space-y-4">
              {[
                { stars: 5, count: 2420, percentage: 85 },
                { stars: 4, count: 341, percentage: 12 },
                { stars: 3, count: 57, percentage: 2 },
                { stars: 2, count: 17, percentage: 1 },
                { stars: 1, count: 12, percentage: 0 }
              ].map((rating) => (
                <motion.div
                  key={rating.stars}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="flex items-center">
                    <span className="text-gray-700 font-medium mr-2">{rating.stars}</span>
                    <Star className="h-4 w-4 text-solar-gold fill-current" />
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-solar-gold h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${rating.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-600 text-sm w-12">{rating.count}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Review Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ReviewForm />
          </div>
        </div>
      </section>
    </div>
  );
}
