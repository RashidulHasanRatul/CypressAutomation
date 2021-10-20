describe('Working with Fixure', function () {

    before(()=>{
       cy.fixture('example').then(function (data) {

           this.name = data.name;
           this.gender = data.gender;
       })

    })

    it('Frist Test ', function () {

        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get('input[name="name"]:nth-child(2)').type(this.name);
        cy.get('select').select(this.gender);

    });

});