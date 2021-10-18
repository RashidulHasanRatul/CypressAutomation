describe('Radio Button Assert', function () {


    it('should Open URL', function () {
        cy.visit("https://codenboxautomationlab.com/practice/");

    });

    it('should Click Radio Button and Assert Them', function () {

        // Click option 1 and assert
        cy.get('[for="radio1"] > .radioButton').click().should('be.checked');

        // Click another Option
        cy.get('[for="radio2"] > .radioButton').click();

        // After clicking another option now check option 1 is uncheckd
        cy.get('[for="radio1"] > .radioButton').should('not.be.checked');


    });


});