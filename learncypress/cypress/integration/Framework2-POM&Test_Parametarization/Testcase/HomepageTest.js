/// <reference types ="cypress"/>

import home from '../Pages/HomePage';

const homepage = new home();




describe('Test', function () {
    it('should test', function () {
       homepage.navigation();
       homepage.getName().type("RH Ratul");
       homepage.getEmail().type("rhratul12#gmail.com");
       homepage.getPass().type('12345');
       homepage.getGender().select('male');

    });

});



