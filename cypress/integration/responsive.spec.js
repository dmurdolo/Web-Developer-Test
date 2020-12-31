/// <reference types="cypress" />

context('Viewport', () => {
    beforeEach(() => {
      cy.visit('/');
    })
  
    it('should show different nav menus based on size', () => {  
      cy.get('#nav-menu').should('be.visible');

      cy.viewport(320, 480);
      cy.get('#nav-menu').should('not.be.visible');
      cy.get('#mobile-nav').should('be.visible').find('button').click();
      cy.get('#nav-menu').find('a').should('be.visible');
    });
});
  