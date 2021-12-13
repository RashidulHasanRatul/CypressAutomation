/// <reference types="cypress"/>

describe("Test contact us form via Automation Test Score",()=>{

    it("Should be able to submit a successful submission via contact us form",()=>{

        cy.visit("https://automationteststore.com/index.php?rt=content/contact");
        cy.document().should('have.property',"charset").and('eq',"UTF-8");
        cy.title().should('include','Contact Us')
        cy.url().should('include','index.php?rt=content/contact')
    })
})