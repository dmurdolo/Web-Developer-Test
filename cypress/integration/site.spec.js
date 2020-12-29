/// <reference types="cypress" />

context('Navigation', () => {
    describe('Visit site and navigate', () => {
        it('Loads the home page', () => {
            cy.visit('/');
        });

        it('Navigates to the home page', () => {
            cy.get('header').find('a:first').click();
        });

        it('Find the cart link', () => {
            cy.get('#nav-menu').find('a[href*="/cart"]');
        });

        it('Navigate to the cart page', () => {
            cy.get('#nav-menu').find('a[href*="/cart"]').click();
        });
    });
});