
describe("Frist Test",function () {

    it('Visit Url', function () {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type("ca");
        cy.get('.search-button').click();
        cy.wait(2000);
        cy.get('.product:visible').should('have.length',4);

    });




})


