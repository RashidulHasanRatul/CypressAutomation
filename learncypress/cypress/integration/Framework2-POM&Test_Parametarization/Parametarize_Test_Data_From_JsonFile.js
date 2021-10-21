describe('Paramaterize Test Data', function () {

    before(()=>{
        cy.fixture('example').then(function (data) {
            this.product=data.productName;
        })

    })


    it('Select Multiple Product from JSON File', function () {

        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get(':nth-child(2) > .nav-link').click();
        cy.wait(2000);

        this.product.forEach((ele)=>{
            cy.log(ele)
            cy.SelectProduct(ele)
        })
    });


});