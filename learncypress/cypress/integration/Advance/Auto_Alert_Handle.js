describe('Auto Handle Alert ', function () {

    it('should Open URL', function () {
        cy.visit("https://codenboxautomationlab.com/practice/");

    });

    it('should Click popup  ', function () {
        cy.get('#alertbtn').click();

        // Window:alert
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello , share this practice page who love to learn automation')
        })
    });

});