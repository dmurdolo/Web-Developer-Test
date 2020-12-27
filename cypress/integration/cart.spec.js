describe('Empties the cart', () => {
    it('Loads the cart page', () => {
        cy.visit('http://localhost:3000/cart');
    });

    it('Removes all items from the cart', () => {
        cy.get('button.bin').click({ multiple: true });
    });

    it('Buy button is disabled', () => {
        cy.get('button.buy').should('be.disabled');
    });
});

describe('Update cart', () => {
    it('Loads the cart page', () => {
        cy.visit('http://localhost:3000/cart');
    });

    it('Removes an item from the cart', () => {
        cy.get('button.bin:first').click();
    });

    it('Increases the quantity of an item via the button', () => {
        cy.get('button.increase:first').click();
        cy.get('button.increase:first').click();
    });

    it('Decreases the quantity of an item via the button', () => {
        cy.get('button.decrease:first').click();
    });

    it('Decreases an item to 0 and removes it', () => {
        cy.get('button.decrease:first').click();
        cy.get('button.decrease:first').click();
        cy.get('div.react-confirm-alert').find('button:first').click();
    });

    it('Increases an amount by typing', () => {
        cy.get('div.cart-quantity:first').find('input').type(4);
    });

    it('Types a value less than 0 and shows error', () => {
        cy.get('div.cart-quantity:first').find('input').type(-1);
    });

    it('Adds an amount large than the stock of the item', () => {
        cy.get('div.cart-quantity:first').find('input').type(100);
    });
});

describe('Completes the purchase', () => {
    it('Completes the purchase of the cart', () => {
        cy.get('button.buy').click();
    });
});