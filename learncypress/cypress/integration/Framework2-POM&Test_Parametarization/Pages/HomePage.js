export  default  class home {

    navigation(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
    }


getName(){
    return cy.get(':nth-child(1) > .form-control');
}

getEmail(){
  return cy.get(':nth-child(2) > .form-control');
}

getPass(){
  return   cy.get('#exampleInputPassword1')
}

getGender(){
    return cy.get('#exampleFormControlSelect1');
}


}

