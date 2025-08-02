# AL Furniture - Supplier Furnitur Sekolah

## Overview

AL Furniture adalah aplikasi web full-stack yang menampilkan furnitur kayu berkualitas untuk kebutuhan sekolah. Aplikasi ini menampilkan frontend React modern dengan backend Node.js/Express, dirancang untuk menampilkan produk furnitur pendidikan dan menangani pertanyaan pelanggan. Dibangun dengan TypeScript secara menyeluruh, menekankan desain yang bersih, pengalaman pengguna, dan arsitektur kode yang dapat dipelihara.

## User Preferences

Preferred communication style: Simple, everyday language.
- Language: Indonesian (Bahasa Indonesia)
- Focus: School furniture supply and educational institutions
- Founded: 2025 by Agung and Kholis
- Location: Cilendek Timur, Kota Bogor
- Contact: +62 877-8241-4638, info@alfurniture.com

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS
- **Styling**: Tailwind CSS with custom design tokens for a warm, furniture-focused color palette
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for products and contact messages
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Request Logging**: Custom middleware for API request/response logging

### Data Storage Strategy
- **Development**: In-memory storage implementation for rapid development and testing
- **Production Ready**: Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- **Database Provider**: Neon Database (serverless PostgreSQL) integration ready
- **Schema Management**: Drizzle Kit for database migrations and schema changes

### Development Architecture
- **Monorepo Structure**: Client, server, and shared code in a single repository
- **Shared Types**: Common TypeScript interfaces and Zod schemas in `/shared` directory
- **Path Aliases**: Configured for clean imports (`@/` for client, `@shared/` for shared code)
- **Development Server**: Vite dev server with HMR, proxying API requests to Express backend

### Build and Deployment
- **Client Build**: Vite builds the React app to static files
- **Server Build**: ESBuild bundles the Express server for production
- **Static Serving**: Express serves the built client files in production
- **Environment Configuration**: Environment variables for database connections and deployment settings

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (serverless PostgreSQL) via `@neondatabase/serverless`
- **ORM**: Drizzle ORM for type-safe database operations with PostgreSQL dialect
- **Validation**: Zod for runtime type validation and schema definitions
- **Session Management**: Connect-pg-simple for PostgreSQL-backed session storage

### Frontend Libraries
- **UI Components**: Comprehensive Radix UI component library for accessibility
- **Styling**: Tailwind CSS with class-variance-authority for component variants
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation and formatting
- **Carousel**: Embla Carousel for image slideshows

### Development Tools
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **Error Overlay**: Runtime error modal for development debugging
- **Code Navigation**: Cartographer plugin for enhanced Replit code exploration