describe("Frist Test",function () {

    it('Visit Url', function () {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type("ca");
        cy.get('.search-button').click();
        cy.wait(2000);
        cy.get(':nth-child(3) > .product-action > button').click();
        cy.wait(2000);
        cy.get('.cart-icon > img').click();
        cy.wait(2000);
        cy.get('div.container div.container div.cart div.cart-preview.active:nth-child(6) div.action-block:nth-child(2) > button:nth-child(1)').click();

    });




})