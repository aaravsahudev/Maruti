import { Link } from "wouter";
import { Sun, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, MessageCircle } from "lucide-react";
import LoadingButton from "@/components/ui/loading-button";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-solar-blue to-solar-blue-light rounded-full flex items-center justify-center">
                <Sun className="text-white text-lg" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Maruti Solar Solution</h3>
                <p className="text-sm text-gray-400">Premium Solar Energy</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Leading the renewable energy revolution with premium solar solutions for homes and businesses across India.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/marutisolar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-solar-blue rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.twitter.com/marutisolar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-solar-blue rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/marutisolar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-solar-blue rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/marutisolar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-solar-blue rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/materials" className="text-gray-400 hover:text-white transition-colors">Materials</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Residential Solar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Commercial Solar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Solar + Storage</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Maintenance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Consultation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3">
              <a 
                href="tel:+919876543210" 
                className="text-gray-400 hover:text-white flex items-center transition-colors duration-300"
              >
                <Phone className="mr-2 h-4 w-4" />
                +91 98765 43210
              </a>
              <a 
                href="https://wa.me/919876543210?text=Hi%20I%20need%20a%20free%20solar%20consultation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 flex items-center transition-colors duration-300"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Consultation
              </a>
              <a 
                href="mailto:info@marutisolar.com" 
                className="text-gray-400 hover:text-white flex items-center transition-colors duration-300"
              >
                <Mail className="mr-2 h-4 w-4" />
                info@marutisolar.com
              </a>
              <p className="text-gray-400 flex items-start">
                <MapPin className="mr-2 h-4 w-4 mt-1" />
                123 Solar Park, Mumbai - 400001
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2024 Maruti Solar Solution. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
