describe('Auto Handle Alert ', function () {

    it('should Open URL', function () {
        cy.visit("https://codenboxautomationlab.com/practice/");

    });

    it('should Click Alert   ', function () {
        cy.get('#alertbtn').click();

        // Window:alert
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello , share this practice page who love to learn automation')
        })
    });

    it('Confirm Alert', function () {
        // Window:confirm
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    });





});


