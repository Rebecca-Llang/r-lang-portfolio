# My Portfolio

# r-lang-portfolio
My personal portfolio, showcasing myself and my skills as a developer.

This monorepo is built with a modern web stack, including:
- **Next.js** (React framework for SSR and SSG)
- **React** (UI library)
- **Nx** (monorepo management and tooling)
- **TailwindCSS** (utility-first CSS framework)
- **Cypress** (end-to-end testing)
- **Jest** (unit testing)
- **TypeScript** (type safety)
- **Render** (deployment)

The portfolio highlights my projects, experience, and contact information, and serves as a demonstration of best practices in modern web development.

## Table of Contents

- [Project Overview](#r-lang-portfolio)
- [Skills Demonstrated](#skills-demonstrated)
- [Portfolio Content](#portfolio-content)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Run Tasks](#run-tasks)
- [Testing](#testing)
- [Linting & Formatting](#linting--formatting)
- [Deployment](#deployment)
- [Useful Links](#useful-links)
- [License](#license)

## Skills Demonstrated

This portfolio demonstrates my proficiency in:

- **Frontend Development:** Building responsive, accessible, and performant UIs with React and Next.js.
- **TypeScript:** Writing type-safe, maintainable code.
- **Styling:** Using TailwindCSS for rapid, consistent, and modern UI design.
- **Testing:** Ensuring code quality with unit tests (Jest) and end-to-end tests (Cypress).
- **Monorepo Management:** Organizing code and workflows efficiently with Nx.
- **API Integration:** Connecting to backend services and APIs.
- **CI/CD & Deployment:** Automated builds and deployments using Render and Nx Cloud.
- **Code Quality:** Enforcing standards with ESLint and Prettier.

## Portfolio Content

The portfolio includes:

- **About Me:** A brief introduction and background.
- **Projects:** Detailed case studies and links to my best work, with descriptions, tech stacks, and outcomes.
- **CV/Resume:** Viewable resume.
- **Contact:** A form to get in touch with me directly.


## Getting Started

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

## Project Structure

- `apps/portfolio/` - Main portfolio application (Next.js)
- `apps/r-lang-portfolio-e2e/` - End-to-end tests (Cypress)
- `libs/` - (if you add shared libraries in the future)

## Run Tasks

To run the dev server for your app, use:

```sh
npm run dev
# or
npx nx dev portfolio
```

To create a production bundle:

```sh
npm run build
# or
npx nx build portfolio
```

To serve the production build:

```sh
npm run serve
# or
npx nx serve portfolio
```

To see all available targets to run for a project, run:

```sh
npx nx show project portfolio
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Testing

### Unit Tests
Run unit tests with:
```sh
npx nx test portfolio
```

### End-to-End Tests
Run Cypress e2e tests with:
```sh
npm run test:e2e
# or
npx nx e2e r-lang-portfolio-e2e
```

Additional e2e test options:
```sh
# Run tests in headless mode
npm run test:e2e:headless

# Run specific test files
npm run test:e2e:deployment
npm run test:e2e:production-debug
```

## Linting & Formatting

To lint the codebase:
```sh
npm run lint
# or
npx nx lint portfolio
```

To format all files:
```sh
npx prettier --write .
```

## Deployment

This project is configured for deployment on Render. Configuration files:
- `render.yaml` - Render service configuration
- `.render-buildpacks` - Buildpack specification

### Deploy to Render
1. Connect your GitHub repository to Render
2. Create a new Web Service
3. Render will automatically detect the configuration
4. Your site will be available at `https://r-lang-portfolio.onrender.com`

### Alternative Deployment Options
- **Vercel**: Use `vercel.json` configuration
- **Netlify**: Use `netlify.toml` configuration
- **Docker**: Use `Dockerfile` and `docker-compose.yml`

## Environment Setup

Create a `.env.local` file in the `apps/portfolio` directory:

```bash
# Resend API Key for email functionality
RESEND_API_KEY=your_resend_api_key_here

# GitHub API Token (optional, for higher rate limits)
GITHUB_TOKEN=your_github_token_here

# Environment
NODE_ENV=development
```

## Useful Links

- [Nx Documentation](https://nx.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Cypress Documentation](https://docs.cypress.io/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.


## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/LbpNYs9x6Y)


