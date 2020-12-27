import { interopDefault } from "next/dist/next-server/server/load-components"

describe('Visit site', () => {
    it('Loads the home page', () => {
        cy.visit('http://localhost:3000');
    });

    it('Navigates to the home page', () => {
        cy.get('header').find('a:first').click();
    });

    it('Find the cart link', () => {
        cy.get('.desktop-nav-menu').find('a[href*="/cart"]');
    });

    it('Navigate to the cart page', () => {
        cy.get('.desktop-nav-menu').find('a[href*="/cart"]').click();
    });
});