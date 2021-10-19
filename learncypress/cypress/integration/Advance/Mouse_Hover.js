describe('Mouse Hover in Cypress', function () {
    it('should Open URL', function () {
        cy.visit("https://codenboxautomationlab.com/practice/");

    });



    it('Mouse Hover', function () {

        // for Hide/Show Element opration alawys select Immediate Parent  or
        // Pass parameter to click({force:true})


        // cy.get('.mouse-hover-content').invoke('show');
        cy.contains('Top').click({force:true});
        cy.url().should('include','top');


    });



});