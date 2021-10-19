describe('Navigation in Cypress', function () {
    it('should Open URL', function () {
        cy.visit("https://codenboxautomationlab.com/practice/");

    });

    it('should select Specefic Element', function () {

        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

            // Store Text
                const text = $el.text();

                if (text.includes("Python")){
                cy.get("tr td:nth-child(2)").eq(index).next().then(function (price) {

                  const priceText = price.text();
                  expect(priceText).to.equal('45');
                })
                }
            }

        )});



});