/// <reference types="cypress" />

context('Data', () => {
    describe('Send requests to and from API', () => {
        it('Get products from the API', () => {
            cy.request('/api/products')
                .should((response) => {
                    expect(response.status).to.eq(200);

                    expect(response.body).property('ok').to.be.true;
                    expect(response.body).property('products').to.have.length(4);
                    expect(response).to.have.property('headers');
                });
        });

        it('Should submit order to the API', () => {
            cy.request({
                url: '/api/checkout',
                method: 'post'
            })
                .should((response) => {
                    expect(response.status).to.eq(200);

                    expect(response.body).property('ok').to.be.true;
                    expect(response.body).property('orderId').length.to.be.at.least(5);
                });
        });
    });
});