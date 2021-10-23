/// <reference types ="cypress"/>

import home from '../Pages/HomePage';

const homepage = new home();




describe('Test', function () {

    before(()=>{
        cy.fixture('example').then(function (data) {
            this.name = data.name;
            this.email=data.email;

        })

    })




    it('should test', function () {
       homepage.navigation();
       homepage.getName().type(this.name);
       homepage.getEmail().type(this.email);
       homepage.getPass().type('12345');
       homepage.getGender().select('male');

    });

});



