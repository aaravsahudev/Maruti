import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Mail, MapPin, Send, Check } from "lucide-react";
import type { InsertContact } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    propertyType: "",
    monthlyBill: "",
    requirements: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your inquiry has been submitted. We'll contact you within 24 hours.",
      });
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        propertyType: "",
        monthlyBill: "",
        requirements: "",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/contacts'] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit your inquiry. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submitData: InsertContact = {
      ...formData,
      monthlyBill: formData.monthlyBill ? parseInt(formData.monthlyBill) : null,
    };
    contactMutation.mutate(submitData);
  };

  const features = [
    "15+ Years Industry Experience",
    "5000+ Satisfied Customers", 
    "25-Year Performance Warranty",
    "Free Site Assessment & Design",
    "Comprehensive O&M Support"
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Get Your Free Solar Quote</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step towards energy independence. Our experts will design a custom solar solution for your needs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Request Free Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName" className="text-gray-700 font-semibold">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phoneNumber" className="text-gray-700 font-semibold">
                    Phone Number *
                  </Label>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="Enter phone number"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-700 font-semibold">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label className="text-gray-700 font-semibold">Property Type</Label>
                <Select value={formData.propertyType} onValueChange={(value) => setFormData({ ...formData, propertyType: value })}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential-house">Residential - House</SelectItem>
                    <SelectItem value="residential-apartment">Residential - Apartment</SelectItem>
                    <SelectItem value="commercial-office">Commercial - Office</SelectItem>
                    <SelectItem value="commercial-retail">Commercial - Retail</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="monthlyBill" className="text-gray-700 font-semibold">
                  Monthly Electricity Bill (₹)
                </Label>
                <Input
                  id="monthlyBill"
                  type="number"
                  placeholder="Enter monthly bill amount"
                  value={formData.monthlyBill}
                  onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="requirements" className="text-gray-700 font-semibold">
                  Additional Requirements
                </Label>
                <Textarea
                  id="requirements"
                  rows={4}
                  placeholder="Tell us about your specific needs..."
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="mt-2 resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-gradient-to-r from-solar-blue to-solar-blue-light hover:from-blue-700 hover:to-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {contactMutation.isPending ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Get Free Quote
                  </>
                )}
              </Button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-solar-blue to-solar-blue-light rounded-3xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="opacity-90">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="opacity-90">info@marutisolar.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p className="opacity-90">123 Solar Park, Mumbai - 400001</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-solar-gold rounded-3xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-3 h-5 w-5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
