import { type Contact, type InsertContact, type Review, type InsertReview, type Project, type InsertProject, type Team, type InsertTeam } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Review methods
  getReviews(): Promise<Review[]>;
  createReview(review: InsertReview): Promise<Review>;
  
  // Project methods
  getProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  
  // Team methods
  getTeamMembers(): Promise<Team[]>;
}

export class MemStorage implements IStorage {
  private contacts: Map<string, Contact>;
  private reviews: Map<string, Review>;
  private projects: Map<string, Project>;
  private teamMembers: Map<string, Team>;

  constructor() {
    this.contacts = new Map();
    this.reviews = new Map();
    this.projects = new Map();
    this.teamMembers = new Map();
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample reviews
    const sampleReviews: Review[] = [
      {
        id: randomUUID(),
        customerName: "Rajesh Kumar",
        customerTitle: "Homeowner, Mumbai",
        rating: 5,
        reviewText: "Outstanding service from start to finish! The team was professional, and the installation was completed ahead of schedule. Our electricity bills have dropped by 85%. Highly recommended!",
        customerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
        isApproved: true,
        createdAt: new Date()
      },
      {
        id: randomUUID(),
        customerName: "Priya Sharma",
        customerTitle: "CEO, Tech Solutions Pvt Ltd",
        rating: 5,
        reviewText: "Maruti Solar Solution helped us achieve our sustainability goals while significantly reducing operational costs. The ROI has exceeded our expectations. Excellent work!",
        customerImage: "https://images.unsplash.com/photo-1494790108755-2616b332c3c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
        isApproved: true,
        createdAt: new Date()
      },
      {
        id: randomUUID(),
        customerName: "Amit Patel",
        customerTitle: "Homeowner, Ahmedabad",
        rating: 5,
        reviewText: "The quality of panels and installation is top-notch. The monitoring system helps us track performance daily. Best investment we've made for our home. Thank you, Maruti Solar!",
        customerImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
        isApproved: true,
        createdAt: new Date()
      }
    ];

    // Sample projects
    const sampleProjects: Project[] = [
      {
        id: randomUUID(),
        title: "Premium Villa Installation",
        description: "15kW rooftop solar system with battery backup for luxury residential property in Mumbai.",
        projectType: "Residential",
        capacity: "15kW",
        location: "Mumbai",
        yearlysSavings: "₹12,50,000",
        projectImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        createdAt: new Date()
      },
      {
        id: randomUUID(),
        title: "Corporate Office Complex",
        description: "500kW commercial solar installation for tech company headquarters in Pune.",
        projectType: "Commercial",
        capacity: "500kW",
        location: "Pune",
        yearlysSavings: "₹45,00,000",
        projectImage: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        createdAt: new Date()
      },
      {
        id: randomUUID(),
        title: "Manufacturing Plant",
        description: "2MW ground-mounted solar farm for textile manufacturing facility in Gujarat.",
        projectType: "Industrial",
        capacity: "2MW",
        location: "Gujarat",
        yearlysSavings: "₹1.8Cr",
        projectImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        createdAt: new Date()
      }
    ];

    // Sample team members
    const sampleTeam: Team[] = [
      {
        id: randomUUID(),
        name: "Dr. Vikash Maruti",
        position: "Founder & CEO",
        bio: "15+ years experience in renewable energy sector. Led the company to become one of India's top solar solution providers.",
        profileImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
        linkedinUrl: "#",
        createdAt: new Date()
      },
      {
        id: randomUUID(),
        name: "Sneha Gupta",
        position: "Chief Technology Officer",
        bio: "Expert in solar technology and system design. Ensures all installations meet the highest technical standards.",
        profileImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
        linkedinUrl: "#",
        createdAt: new Date()
      },
      {
        id: randomUUID(),
        name: "Rohit Singh",
        position: "Head of Operations",
        bio: "Manages nationwide installations and ensures timely project delivery. Over 10 years in solar project management.",
        profileImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300",
        linkedinUrl: "#",
        createdAt: new Date()
      }
    ];

    sampleReviews.forEach(review => this.reviews.set(review.id, review));
    sampleProjects.forEach(project => this.projects.set(project.id, project));
    sampleTeam.forEach(member => this.teamMembers.set(member.id, member));
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact,
      propertyType: insertContact.propertyType || null,
      monthlyBill: insertContact.monthlyBill || null,
      requirements: insertContact.requirements || null,
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async getReviews(): Promise<Review[]> {
    return Array.from(this.reviews.values()).filter(review => review.isApproved);
  }

  async createReview(insertReview: InsertReview): Promise<Review> {
    const id = randomUUID();
    const review: Review = { 
      ...insertReview,
      customerImage: insertReview.customerImage || null,
      id, 
      isApproved: false, // New reviews need approval
      createdAt: new Date() 
    };
    this.reviews.set(id, review);
    return review;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: string): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async getTeamMembers(): Promise<Team[]> {
    return Array.from(this.teamMembers.values());
  }
}

export const storage = new MemStorage();
