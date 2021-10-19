describe('Navigation in Cypress', function () {
    it('should Open URL', function () {
        cy.visit("https://codenboxautomationlab.com/practice/");

    });

    it('should select Specefic Element', function () {

        // This is not work for new Domain but work for subdomain
        cy.get("#opentab").then(function (el) {

            const url = el.prop('href')
            cy.visit(url)
        })

        )});


