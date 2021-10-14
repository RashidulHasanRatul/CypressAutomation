
var chai = require('chai');
var assert = chai.assert;    // Using Assert style
var expect = chai.expect;    // Using Expect style
var should = chai.should();

describe('Static Dropdown', function () {

    it('should Visit the url ', function () {
        cy.visit("https://codenboxautomationlab.com/practice/");
        cy.wait(2000);
    });

    it('should check static dropdown valule ', function () {

        cy.get('#dropdown-class-example').select('API').should('have.value','option3');

    });
    it('it should be check static test', function () {

    });
});