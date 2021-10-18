describe('Hide and Show Element With Assertion', function () {

    it('should Open URL', function () {
        cy.visit("https://codenboxautomationlab.com/practice/");

    });

    it('Assertion', function () {
        // Inetially Open
        cy.get('#displayed-text').should('be.visible');
        // Click Hide Button
        cy.get('#hide-textbox').click();
        // Assert text box is not visible
        cy.get('#displayed-text').should('not.be.visible');
        // Click Show Button
        cy.get('#show-textbox').click();
        // Box should be visible
        cy.get('#displayed-text').should('be.visible');

    });

});