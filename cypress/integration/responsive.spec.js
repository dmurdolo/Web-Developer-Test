/// <reference types="cypress" />

context('Viewport', () => {
    beforeEach(() => {
      cy.visit('/');
    })
  
    it('should show different nav menus based on size', () => {  
      cy.get('#desktop-nav-menu').should('be.visible');
      cy.viewport(320, 480);

      cy.get('#desktop-nav-menu').should('not.be.visible');
      cy.get('#mobile-nav').should('be.visible').find('img[alt*="Menu"]').click();
      cy.get('#mobile-nav-menu').find('a').should('be.visible');
    });
});
  