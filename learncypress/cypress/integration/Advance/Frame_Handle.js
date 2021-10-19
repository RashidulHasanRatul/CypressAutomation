
/// <reference types ="cypress-iframe"/>

// Install NPM Packge for work i-frame in cypress
import 'cypress-iframe'

describe('I-Frame Handle', function () {


    it('should open URL ', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    });

    it('Handle I-Frame ', function () {
    cy.frameLoaded("#courses-iframe");
    cy.iframe().find("a[href*='mentorship']").eq(0).click();
    cy.iframe().find("h1[class*='pricing-title']").should('have.length',2);


    });



});