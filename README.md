# 🚀 Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring a purple-themed design and smooth animations.

## ✨ Features

- **Modern Tech Stack**: React 18, TypeScript, Vite 6.x, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful gradients
- **Smooth Animations**: Framer Motion for enhanced user experience
- **Dark Theme**: Purple/violet gradient theme with glassmorphism effects
- **Contact Form**: Enhanced form with validation and error handling
- **Error Boundaries**: Graceful error handling throughout the app
- **SEO Optimized**: Meta tags and proper semantic HTML structure

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite 6.x** - Fast build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible components
- **Framer Motion** - Smooth animations and transitions
- **Wouter** - Minimal client-side routing

### Backend
- **Express.js** - Node.js web framework
- **TypeScript** - Server-side type safety
- **Custom Vite Integration** - HMR support in development

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PersonalPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5000](http://localhost:5000) in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
├── client/                    # Frontend React application
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── ui/          # shadcn/ui components
│   │   │   ├── hero-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── projects-section.tsx
│   │   │   ├── skills-section.tsx
│   │   │   ├── timeline-section.tsx
│   │   │   ├── contact-section.tsx
│   │   │   └── navigation.tsx
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom React hooks
│   │   └── lib/             # Utilities and configuration
│   └── index.html           # Entry HTML file
├── server/                   # Backend Express server
│   ├── index.ts            # Main server file
│   ├── routes.ts           # API routes
│   └── vite.ts             # Vite development integration
├── shared/                  # Shared types and schemas
├── dist/                    # Production build output
└── package.json            # Dependencies and scripts
```

## 🎨 Customization

### Updating Content

1. **Personal Information**: Edit `client/src/components/hero-section.tsx`
2. **About Section**: Modify `client/src/components/about-section.tsx`
3. **Projects**: Update project data in `client/src/components/projects-section.tsx`
4. **Skills**: Adjust skills in `client/src/components/skills-section.tsx`
5. **Timeline**: Edit career timeline in `client/src/components/timeline-section.tsx`

### Styling & Theme

- **Colors**: Modify `tailwind.config.ts` for custom color palette
- **Animations**: Adjust Framer Motion variants in component files
- **Layout**: Update component layouts and responsive breakpoints

### Contact Form

The contact form includes:
- Form validation with error messages
- Email format validation
- Toast notifications for user feedback
- Ready for backend integration

To connect to an email service:
1. Set up environment variables in `.env`
2. Implement backend endpoint in `server/routes.ts`
3. Update form submission in `contact-section.tsx`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run start` - Start production server

## 🔧 Configuration Files

- `vite.config.ts` - Vite build configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration
- `components.json` - shadcn/ui configuration

## 🚀 Deployment

This application can be deployed to:
- **Vercel** (recommended for frontend)
- **Netlify**
- **Railway** (for full-stack)
- **Digital Ocean**
- **Heroku**

For Vercel deployment:
1. Connect your repository
2. Set build command: `npm run build`
3. Set output directory: `dist/public`

## 🐛 Troubleshooting

### Common Issues

1. **Port 5000 in use**: Change port in `server/index.ts` or use `npx kill-port 5000`
2. **Build errors**: Ensure all dependencies are installed with `npm install`
3. **TypeScript errors**: Run `npx tsc --noEmit` to check for type issues

### Performance Optimization

- Images are optimized for web
- CSS is purged in production build
- Components are lazily loaded where appropriate
- Error boundaries prevent app crashes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

---

Built with ❤️ using modern web technologies
