# E2E Testing Guide for Portfolio Deployment

This directory contains end-to-end tests to help debug deployment issues and ensure your portfolio works correctly in production.

## 🧪 Test Files

### `app.cy.ts` - Basic Functionality Tests
- Tests basic navigation and page content
- Verifies that all pages load correctly
- Checks that navigation links work

### `deployment.cy.ts` - Deployment Health Checks
- **Critical Page Functionality**: Tests that pages load without errors
- **Performance & Loading**: Checks load times and image loading
- **Responsive Design**: Tests on different screen sizes
- **SEO & Meta Tags**: Verifies proper meta tags and OpenGraph
- **Accessibility**: Checks alt text, heading structure, and link text
- **Error Handling**: Tests 404 pages and console errors

### `production.cy.ts` - Production-Specific Tests
- **Build & Static Assets**: Verifies all assets load correctly
- **API Endpoints**: Tests API route functionality
- **Client-Side Navigation**: Tests routing without page reloads
- **Performance Metrics**: Checks for memory leaks and performance
- **Cross-Browser Compatibility**: Tests different viewport sizes
- **Security & Headers**: Verifies security headers
- **Error Boundaries**: Tests JavaScript error handling

## 🚀 Running Tests

### Local Development Testing
```bash
# Run all E2E tests against local development server
npm run test:e2e

# Run tests in headless mode (for CI/CD)
npm run test:e2e:headless

# Run only deployment health checks
npm run test:e2e:deployment
```

### Production Testing
```bash
# Test against production deployment
npm run test:e2e:production

# Run production debugging tests
npm run test:e2e:production-debug
```

### Manual Testing
```bash
# Open Cypress UI for interactive testing
npx cypress open --config-file apps/r-lang-portfolio-e2e/cypress.config.ts

# Run specific test file
npx nx e2e r-lang-portfolio-e2e --spec="src/e2e/deployment.cy.ts"
```

## 🔧 Configuration

### Local Development (`cypress.config.ts`)
- Base URL: `http://127.0.0.1:3000`
- Starts local dev server automatically
- Good for testing during development

### Production Testing (`cypress.production.config.ts`)
- Base URL: `https://your-production-domain.com` (update this!)
- No web server commands (tests against live site)
- Increased timeouts for production environment
- Records videos and screenshots for debugging

## 🐛 Common Deployment Issues to Test

### 1. Build Issues
- **Static assets not loading**: Check if images, CSS, and fonts load
- **API routes broken**: Verify API endpoints return correct responses
- **Client-side routing**: Test navigation between pages

### 2. Performance Issues
- **Slow loading**: Check page load times
- **Memory leaks**: Navigate between pages to test for memory issues
- **Image optimization**: Verify images load efficiently

### 3. Responsive Design Issues
- **Mobile layout**: Test on different screen sizes
- **Navigation on mobile**: Check mobile navigation functionality
- **Touch interactions**: Test on touch devices

### 4. SEO & Meta Issues
- **Missing meta tags**: Check title, description, OpenGraph tags
- **Viewport issues**: Verify responsive meta tags
- **Social sharing**: Test OpenGraph functionality

### 5. Security Issues
- **Missing security headers**: Check for X-Frame-Options, etc.
- **Sensitive data exposure**: Look for passwords or API keys in HTML
- **CORS issues**: Test cross-origin requests

## 📊 Test Results

### What to Look For
- **Failed tests**: Indicate specific issues to fix
- **Console errors**: JavaScript errors that might break functionality
- **Performance metrics**: Slow loading times
- **Missing elements**: Broken navigation or content

### Debugging Tips
1. **Check test videos**: Cypress records videos of failed tests
2. **Review screenshots**: Screenshots show the state when tests failed
3. **Console logs**: Look for JavaScript errors in test output
4. **Network requests**: Check if API calls are failing

## 🔄 CI/CD Integration

### GitHub Actions Example
```yaml
name: E2E Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test:e2e:headless
```

### Render Integration
```json
{
  "scripts": {
    "render-build": "npm run build && npm run test:e2e:headless"
  }
}
```

## 🛠 Troubleshooting

### Tests Failing Locally
1. **Start dev server**: `npm run dev`
2. **Check port 3000**: Ensure nothing else is using it
3. **Clear cache**: `npx nx reset`

### Tests Failing in Production
1. **Update production URL**: Edit `cypress.production.config.ts`
2. **Check deployment**: Verify site is actually deployed
3. **Review logs**: Check deployment platform logs

### Common Test Failures
- **Timeout errors**: Increase timeouts in config
- **Element not found**: Check if selectors changed
- **Network errors**: Verify API endpoints exist
- **Image loading**: Check image paths and optimization

## 📝 Adding New Tests

### For New Pages
```typescript
it('should load new page correctly', () => {
  cy.visit('/new-page');
  cy.get('h1').should('contain', 'Expected Title');
  cy.get('body').should('be.visible');
});
```

### For New Features
```typescript
it('should handle new feature correctly', () => {
  cy.visit('/');
  // Test your new feature
  cy.get('[data-testid="new-feature"]').click();
  cy.get('.result').should('be.visible');
});
```

## 🎯 Quick Debugging Checklist

When deployment issues occur, run these tests in order:

1. **Basic functionality**: `npm run test:e2e:deployment`
2. **Production health**: `npm run test:e2e:production-debug`
3. **Specific issues**: Run individual test files
4. **Manual verification**: Use Cypress UI for interactive debugging

This testing setup will help you quickly identify and fix deployment issues!
