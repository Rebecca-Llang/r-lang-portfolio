# Rebecca Lang - Portfolio

A modern, responsive portfolio showcasing my development skills and projects. Built with Next.js, TypeScript, and deployed on Render.

## 🚀 Live Demo

**[View Portfolio](https://r-lang-portfolio.onrender.com)**

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Skills Demonstrated](#-skills-demonstrated)
- [Portfolio Content](#-portfolio-content)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Environment Setup](#-environment-setup)
- [Useful Links](#-useful-links)
- [License](#-license)

## 🛠 Tech Stack

- **Next.js 14.2.32** - React framework with App Router
- **React 18.2.0** - Modern UI library with hooks
- **TypeScript 5.3.3** - Type-safe development
- **Nx 20.8.0** - Monorepo management and build optimization
- **TailwindCSS 3.4.17** - Utility-first CSS with responsive design
- **Cypress 14.3.3** - Comprehensive end-to-end testing
- **Render** - Cloud deployment with CI/CD
- **Resend** - Modern email API integration
- **GitHub API** - Dynamic content integration

## 💼 Skills Demonstrated

This portfolio showcases my technical capabilities:

### Frontend Development
- **Modern React Patterns:** Hooks, context, custom components, and performance optimization
- **Next.js Expertise:** App Router, SSR/SSG, API routes, middleware, and image optimization
- **Responsive Design:** Mobile-first approach with TailwindCSS utility classes
- **Accessibility:** WCAG compliance with semantic HTML and ARIA attributes
- **Performance:** Code splitting, lazy loading, and Core Web Vitals optimization

### Backend & Integration
- **API Development:** RESTful endpoints with proper error handling and validation
- **Third-party Integrations:** Resend email service and GitHub API with rate limiting
- **TypeScript:** Strict typing, interfaces, generics, and advanced type patterns
- **Environment Management:** Secure configuration and environment variable handling

### DevOps & Quality Assurance
- **Monorepo Architecture:** Nx workspace with dependency management and build optimization
- **Testing Strategy:** Comprehensive E2E testing with Cypress covering user journeys
- **CI/CD Pipeline:** Automated testing, building, and deployment with GitHub Actions
- **Code Quality:** ESLint, Prettier, and TypeScript strict mode enforcement
- **Cloud Deployment:** Render platform with build caching and environment management

## 📋 Portfolio Content

- **Home Page:** Welcome message with personal introduction and navigation
- **About Me:** Introduction featuring:
  - Project highlight (DonateMate) with live demo
  - Core skills showcase with CV navigation
- **Projects:** Case studies including:
  - DonateMate (group project as Product Owner)
  - Kea Commerce (e-commerce site with NX monorepo)
  - Nora AI & Kairos AI (AI chatbot projects)
  - This Portfolio (NX monorepo with GitHub integration)
  - My Karaoke Playlist (full-stack personal project)
- **CV/Resume:** 
- **Contact:** Interactive form powered by Resend email service

## ✨ Features

- **Responsive Design:** Mobile-first approach optimized for all devices
- **Modern UI:** Clean, professional design with custom color palette and TailwindCSS
- **Dynamic Content:** GitHub API integration for live repository data
- **Email Integration:** Contact form powered by Resend email service
- **Performance Optimized:** Fast loading with Next.js optimizations and image optimization
- **SEO Ready:** Proper meta tags and OpenGraph integration
- **Accessibility:** WCAG compliant with semantic HTML and proper contrast ratios
- **Interactive Navigation:** Smooth page transitions and anchor links to CV sections
- **Project Showcases:** Live demos and repository links for featured projects
- **Monorepo Architecture:** NX workspace with optimized build and testing

## 🔌 API Endpoints

- **`/api/contact`** - Handles contact form submissions using Resend email service
- **`/api/github`** - Fetches GitHub profile and repository data for dynamic content

## 🚀 Getting Started

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd my-portfolio-monorepo
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm run dev
   # or
   npx nx dev portfolio
   ```

## 📁 Project Structure

This is an Nx monorepo containing:
- **Portfolio App** (`apps/portfolio/`) - Next.js application with App Router
- **E2E Tests** (`apps/r-lang-portfolio-e2e/`) - Comprehensive Cypress test suite
- **Shared Configuration** - TypeScript, ESLint, TailwindCSS, and deployment configs

### Key Configuration Files
- `render.yaml` - Render deployment configuration
- `nx.json` - Nx workspace configuration
- `package.json` - Project dependencies and scripts
- `eslint.config.mjs` - ESLint configuration
- `tailwind.config.js` - TailwindCSS configuration
- `tsconfig.base.json` - TypeScript base configuration

## ⚡ Quick Start

### Local Development
```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test
```

### Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run serve            # Serve production build locally

# Testing
npm run test         # Run E2E tests in interactive mode
npm run test:ci      # Run E2E tests in CI/CD mode
npm run test:production # Test production deployment
npm run test:deployment # Test deployment-specific features

# Code Quality
npm run lint             # Run ESLint across the workspace

# Nx Commands
npx nx dev portfolio     # Start portfolio development server
npx nx build portfolio   # Build portfolio application
npx nx e2e r-lang-portfolio-e2e # Run E2E test suite
```

## 🧪 Testing

Comprehensive E2E testing with Cypress covering all pages, responsive design, accessibility, and functionality.

### Testing Commands
```bash
npm run test         # Run E2E tests in interactive mode
npm run test:ci      # Run E2E tests in CI/CD mode
npm run test:production # Test production deployment
npm run test:deployment # Test deployment-specific features
```

## 🚀 Deployment

Deployed on **Render** with:
- **Build caching** for faster deployments
- **Automatic deployments** from GitHub
- **Environment variables** for API keys

**Live Portfolio:** [r-lang-portfolio.onrender.com](https://r-lang-portfolio.onrender.com)

### CI/CD Pipeline
- **GitHub Actions** - Automated testing and deployment workflows
- **Quality Gates** - Linting, type checking, and E2E tests before deployment
- **Environment Parity** - Consistent environments from development to production

## 🔧 Environment Setup

Create `.env.local` in `apps/portfolio/`:
```bash
RESEND_API_KEY=your_resend_api_key_here
GITHUB_TOKEN=your_github_token_here  # Optional
```

## 📚 Useful Links

- [Nx Documentation](https://nx.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Cypress Documentation](https://docs.cypress.io/)
- [Render Documentation](https://render.com/docs)
- [Resend Documentation](https://resend.com/docs)

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.


