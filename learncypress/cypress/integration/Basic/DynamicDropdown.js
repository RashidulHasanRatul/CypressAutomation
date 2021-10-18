describe('Dynamic Dropdown Test', function () {

    it('should check Dynamic dropdown', function () {
        cy.visit("https://codenboxautomationlab.com/practice/");
        cy.get("#autocomplete").type("Bangladesh");
        // Dynamic Dropdown
        // cy.get('').each(($el,index,$list) => {
        //
        //     if ($el.text()==="Bangladesh"){
        //       cy.wrap($el).click()
        //     }

        });

        it('should select Specefic Element', function () {

            cy.get('.ui-menu-item div').each(($el, index, $list) => {
                // $el is a wrapped jQuery element
                if ($el.text() === 'Bangladesh') {
                    // wrap this element so we can
                    // use cypress commands on it
                    cy.wrap($el).click()
                }
        }

        )});


});