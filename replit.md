# Portfolio Website Project

## Overview

This is a modern, dynamic portfolio website built to showcase the journey of Yash Sharma as a full-stack developer. The application is designed to tell the story of a versatile, product-first developer and explorer who has transitioned from Kotlin Android development to full-stack web development with React and Spring Boot.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety
- **Styling**: TailwindCSS with shadcn/ui component library for modern, consistent UI
- **Animations**: Framer Motion for smooth animations and transitions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database serverless PostgreSQL
- **Authentication**: Basic user schema prepared (users table with username/password)

### Build System
- **Frontend Build**: Vite for fast development and optimized production builds
- **Backend Build**: esbuild for Node.js server bundling
- **Development**: Hot module replacement with Vite dev server integration

### Styling System
- **Design System**: shadcn/ui with "new-york" style variant
- **CSS Framework**: TailwindCSS with custom CSS variables for theming
- **Dark Mode**: Built-in dark/light theme support with system preference detection
- **Typography**: Inter font family for body text, Fira Code for code snippets

## Key Components

### Portfolio Sections
1. **Hero Section**: Dynamic introduction with floating tech stack elements
2. **Timeline Section**: Interactive journey through different technologies
3. **About Section**: Narrative story of the developer's evolution
4. **Projects Section**: Case studies with problem-solution format
5. **Skills Section**: Filterable technology grid with proficiency levels
6. **Contact Section**: Contact form with social links
7. **Footer**: Simple footer with branding and social links

### UI Components
- Comprehensive component library using Radix UI primitives
- Reusable form components (Button, Input, Textarea, Select)
- Layout components (Card, Dialog, Sheet, Tabs)
- Feedback components (Toast, Progress, Skeleton)
- Navigation components (Accordion, Dropdown, Navigation Menu)

### Theme System
- CSS custom properties for consistent theming
- Dark/light mode toggle with localStorage persistence
- Responsive design with mobile-first approach

## Data Flow

### Client-Side Data Flow
1. React components consume data through TanStack Query
2. Theme preferences managed through React Context
3. Form state handled with React Hook Form
4. Smooth scroll navigation between sections

### Server-Side Data Flow
1. Express routes handle API requests (currently minimal backend)
2. Drizzle ORM provides type-safe database operations
3. In-memory storage implementation for development
4. PostgreSQL integration ready for production

### Storage Interface
- Abstracted storage interface (`IStorage`) for easy database switching
- Current implementation uses in-memory storage for development
- Database schema includes users table with proper typing

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Router (Wouter)
- **UI Library**: Radix UI primitives, shadcn/ui components
- **Styling**: TailwindCSS, class-variance-authority, clsx
- **Animations**: Framer Motion, Embla Carousel
- **Forms**: React Hook Form, Hookform Resolvers
- **State Management**: TanStack React Query
- **Utilities**: date-fns, Lucide React icons

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, Drizzle Kit, Neon Database client
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Validation**: Zod for schema validation, drizzle-zod for integration

### Development Dependencies
- **Build Tools**: Vite, esbuild, TypeScript
- **Development**: tsx for TypeScript execution, Replit integration tools

## Deployment Strategy

### Development Environment
- Vite dev server with HMR for frontend development
- Express server with tsx for backend development
- Integrated development setup with single command (`npm run dev`)
- Replit-specific plugins for development environment integration

### Production Build
1. **Frontend**: Vite builds optimized bundle to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations handle schema changes
4. **Static Assets**: Client build served by Express in production

### Database Setup
- Drizzle config points to PostgreSQL via `DATABASE_URL`
- Migration files generated in `./migrations` directory
- Schema defined in shared directory for type consistency

### Environment Configuration
- Environment-specific database connections
- Development vs production mode handling
- Replit-specific development features (cartographer plugin)

### Scalability Considerations
- Type-safe database operations prevent runtime errors
- Modular component architecture allows easy feature additions
- Abstracted storage interface enables database switching
- CSS custom properties make theming highly customizable
- Query client configuration optimized for performance