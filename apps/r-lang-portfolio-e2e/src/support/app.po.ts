export const getGreeting = () => cy.get('h1');

export const getProfileImage = () => cy.get('[data-testid="rebecca-photo"]');

export const getNavigationLink = (path: string) =>
  cy.get(`a[data-testid="${path}"]`);

export const getPageTitle = () => cy.get('title');

export const getMetaDescription = () => cy.get('meta[name="description"]');

export const getOpenGraphTitle = () => cy.get('meta[property="og:title"]');

export const getOpenGraphDescription = () =>
  cy.get('meta[property="og:description"]');

export const getOpenGraphType = () => cy.get('meta[property="og:type"]');

export const getViewportMeta = () => cy.get('meta[name="viewport"]');

export const getAllImages = () => cy.get('img');

export const getAllLinks = () => cy.get('a');

export const getBody = () => cy.get('body');

export const getHead = () => cy.get('head');

export const getMainContent = () => cy.get('main');

export const getFooter = () => cy.get('footer');

export const getNavigation = () => cy.get('nav');

// Helper methods for common actions
export const navigateToPage = (path: string) => {
  getNavigationLink(path).click();
  cy.url().should('include', path);
};

export const checkPageLoads = () => {
  getBody().should('be.visible');
  getGreeting().should('be.visible');
};

export const checkResponsiveDesign = (viewport: Cypress.ViewportPreset) => {
  cy.viewport(viewport);
  getBody().should('be.visible');
  getGreeting().should('be.visible');
  getProfileImage().should('be.visible');
};

export const checkImageLoading = () => {
  getAllImages().each(($img) => {
    cy.wrap($img).should('be.visible');
    cy.wrap($img).should('have.attr', 'src');
    cy.wrap($img).should('have.attr', 'alt');
  });
};

export const checkNavigationLinks = () => {
  const navLinks = ['/contact-me', '/cv', '/about-me', '/projects'];
  navLinks.forEach((link) => {
    getNavigationLink(link).should('be.visible');
  });
};

export const checkSEOElements = () => {
  getPageTitle().should('exist');
  getMetaDescription().should('exist');
  getViewportMeta().should('exist');
  getOpenGraphTitle().should('exist');
  getOpenGraphDescription().should('exist');
  getOpenGraphType().should('exist');
};
