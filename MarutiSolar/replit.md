# replit.md

## Overview

This is a full-stack React application built with Express.js backend for a solar energy company called "Maruti Solar Solution". The application serves as a company website with features for showcasing services, projects, customer reviews, and handling contact inquiries. It uses a modern tech stack with TypeScript, React, Express, and Drizzle ORM for database operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js with TypeScript for API endpoints
- **Database**: PostgreSQL with Drizzle ORM for database operations
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **Client Directory Structure**: 
  - `src/pages/` - Page components (Home, Services, About, Projects, Reviews, Contact, Terms)
  - `src/components/` - Reusable UI components organized by sections and UI primitives
  - `src/hooks/` - Custom React hooks for mobile detection and toast notifications
  - `src/lib/` - Utility functions and query client configuration

### Backend Architecture
- **Server Directory**: Contains Express.js server implementation
- **API Routes**: RESTful endpoints for contacts and reviews management
- **Storage Layer**: Abstract storage interface with in-memory implementation (designed for future database integration)

### Database Schema
The application defines four main entities using Drizzle ORM:
- **Contacts**: Customer inquiries with property details and requirements
- **Reviews**: Customer testimonials with ratings and approval status
- **Projects**: Portfolio of completed solar installations
- **Team**: Company team member information

### UI Component System
- **shadcn/ui**: Comprehensive component library with Radix UI primitives
- **Tailwind CSS**: Utility-first styling with custom solar-themed color palette
- **Framer Motion**: Animation library for enhanced user experience
- **Custom Components**: Solar calculator, loading bars, and specialized sections

## Data Flow

1. **Contact Form Submission**: Client submits form → API validates with Zod → Storage layer saves contact
2. **Reviews Display**: Client queries reviews → API returns approved reviews → Components render with star ratings
3. **Projects Showcase**: Client fetches projects → API returns project portfolio → Gallery components display
4. **Real-time Updates**: TanStack Query handles caching and automatic refetching

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: Database connectivity (configured for PostgreSQL)
- **drizzle-orm**: Type-safe database ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation and gesture library
- **wouter**: Lightweight React router

### UI Libraries
- **@radix-ui/***: Accessible, unstyled UI primitives for complex components
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating variant-based component APIs
- **lucide-react**: Icon library

### Development Tools
- **TypeScript**: Type safety across frontend and backend
- **Vite**: Fast development server and build tool
- **tsx**: TypeScript execution for Node.js development

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React application to `dist/public/`
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Development**: Concurrent development with Vite dev server and tsx for backend

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL connection
- **Development**: Uses Replit-specific plugins for enhanced development experience
- **Production**: Single Node.js process serving both API and static files

### Deployment Scripts
- `npm run dev`: Development mode with hot reloading
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server startup
- `npm run db:push`: Database schema synchronization

The application is designed to be easily deployable on platforms like Replit, with built-in support for development tooling and environment detection. The storage layer is abstracted to allow easy migration from in-memory storage to persistent database solutions.