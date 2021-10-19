describe('Navigation in Cypress', function () {
    it('should Open URL', function () {
        cy.visit("https://codenboxautomationlab.com/practice/");

    });



    it('should go Back', function () {

        cy.get(':nth-child(1) > .rpwe-title > a').click();
        cy.go('back');

    });

    it('should go Forward', function () {

        cy.get(':nth-child(1) > .rpwe-title > a').click();
        cy.go('forward');

    });

});