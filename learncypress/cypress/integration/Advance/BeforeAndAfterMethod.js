describe('This is Before And After Method', function () {

   before(()=>{
       // runs once before all test in the block

   })

    it('Frist Test ', function () {

       cy.visit('https://rahulshettyacademy.com/angularpractice/');
       cy.get('input[name="name"]:nth-child(2)').type("Rashidul");
       cy.get('select').select('Female');

    });

});