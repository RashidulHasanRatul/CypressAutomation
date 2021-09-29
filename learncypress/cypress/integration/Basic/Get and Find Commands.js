describe("Find Command",function () {

    it('Find Command', function () {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type("ca");
        cy.get('.search-button').click();
        cy.wait(2000);
        // Parent child Chaining
        cy.get('.products').find('.product').should('have.length',4);

        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
    });




})