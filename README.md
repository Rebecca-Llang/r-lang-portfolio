# Rebecca Lang - Portfolio

A modern, responsive portfolio showcasing my development skills and projects. Built with Next.js, TypeScript, and deployed on Render.

![Node 20](https://img.shields.io/badge/node-20.19.1-339933?logo=node.js&logoColor=white)
![Next.js 14](https://img.shields.io/badge/next.js-14.2.32-000000?logo=nextdotjs&logoColor=white)
![Nx 20](https://img.shields.io/badge/Nx-20.8.0-143055?logo=nx&logoColor=white)
![Cypress 14](https://img.shields.io/badge/Cypress-14.3.3-17202C?logo=cypress&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## 🚀 Live Demo

**[View Portfolio](https://r-lang-portfolio.onrender.com)**

## 📋 Table of Contents

- [Tech Stack](#-tech-stack)
- [Skills Demonstrated](#-skills-demonstrated)
- [Portfolio Content](#-portfolio-content)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)
- [Environment Setup](#-environment-setup)
- [Getting Started](#-getting-started)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Useful Links](#-useful-links)
- [License](#-license)

## 🛠 Tech Stack

- **Next.js 14.2.32** - React framework with App Router
- **React 18.2.0** - Modern UI library with hooks
- **TypeScript 5.3.3** - Type-safe development
- **Nx 20.8.0** - Monorepo management and build optimisation
- **TailwindCSS 3.4.17** - Utility-first CSS with responsive design
- **Cypress 14.3.3** - Comprehensive end-to-end testing
- **Render** - Cloud deployment with CI/CD

## 💼 Skills Demonstrated

This portfolio showcases my technical capabilities:

### Frontend Development
- **Modern React Patterns:** Hooks, context, custom components, and performance optimisation
- **Next.js:** App Router, SSR/SSG, API routes, middleware, and image optimisation
- **Responsive Design:** Mobile-first approach with TailwindCSS utility classes
- **Accessibility:** WCAG compliance with semantic HTML and ARIA attributes
- **Performance:** Code splitting, lazy loading, and Core Web Vitals optimization

### Backend & Integration
- **API Development:** RESTful endpoints with proper error handling and validation
- **Third-party Integrations:** Resend email service and GitHub API with rate limiting
- **TypeScript:** Strict typing, interfaces, generics, and advanced type patterns
- **Environment Management:** Secure configuration and environment variable handling

### DevOps & Quality Assurance
- **Monorepo Architecture:** Nx workspace with dependency management and build optimisation
- **Testing Strategy:** Comprehensive E2E testing with Cypress covering user journeys
- **CI/CD Pipeline:** Automated testing, building, and deployment with GitHub Actions
- **Code Quality:** ESLint, Prettier, and TypeScript strict mode enforcement
- **Cloud Deployment:** Render platform with build caching and environment management

## 📋 Portfolio Content

- **Home:** Personal introduction and navigation
- **About Me:** Project highlights and skills showcase
- **Projects:** Case studies including DonateMate, Kea Commerce, AI chatbots, and personal projects
- **CV:** Professional experience, education, and skills
- **Contact:** Interactive form with Resend email integration

## ✨ Features

- **Responsive Design:** Mobile-first approach optimised for all devices
- **Modern UI:** Clean design with TailwindCSS and custom colour palette
- **Performance:** Fast loading with Next.js optimisations
- **SEO Ready:** Meta tags and OpenGraph integration
- **Accessibility:** WCAG compliant with semantic HTML
- **Interactive Navigation:** Smooth transitions and CV anchor links
- **Project Showcases:** Live demos and repository links

## 📁 Project Structure

Nx monorepo containing:
- **Portfolio App** (`apps/portfolio/`) - Next.js application
- **E2E Tests** (`apps/r-lang-portfolio-e2e/`) - Cypress test suite
- **Shared Config** - TypeScript, ESLint, TailwindCSS, deployment

## 🔌 API Endpoints

- **`/api/contact`** - Contact form submissions via Resend
- **`/api/github`** - GitHub profile and repository data

## 🔧 Environment Setup

Create `.env.local` in `apps/portfolio/`:
```bash
RESEND_API_KEY=your_resend_api_key_here
GITHUB_TOKEN=your_github_token_here  # Optional
```

## 🚀 Getting Started

### Prerequisites
```sh
node -v  # v20.19.1 recommended (matches Render)
npm -v   # >= 9
```

### Installation
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

### Available Scripts

```bash
# Development
npm run dev              # Start development server (Nx dev server for `portfolio`)

# Build & Production
npm run build            # Production build (uses apps/portfolio/next.config.prod.js)
npm run start            # Serve the built app in production mode (after build)

# Nx alternative
npm run serve            # Nx serve target (dev server by default)

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

Comprehensive E2E testing with Cypress covering all pages, responsive design, accessibility, and functionality. See the [Available Scripts](#available-scripts) section above for testing commands.

## 🚀 Deployment

Deployed on **Render** with build caching, automatic deployments, and environment variable management.

**Live Portfolio:** [r-lang-portfolio.onrender.com](https://r-lang-portfolio.onrender.com)

### CI/CD Pipeline
- **GitHub Actions** - Automated testing and deployment
- **Quality Gates** - Linting, type checking, and E2E tests
- **Environment Parity** - Consistent dev to production environments

## 📚 Useful Links

- [Nx Documentation](https://nx.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Cypress Documentation](https://docs.cypress.io/)
- [Render Documentation](https://render.com/docs)
- [Resend Documentation](https://resend.com/docs)

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.


