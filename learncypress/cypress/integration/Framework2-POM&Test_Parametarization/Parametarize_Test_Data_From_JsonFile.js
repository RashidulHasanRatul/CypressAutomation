describe('Paramaterize Test Data', function () {

    before(()=>{
        cy.fixture('example').then(function (data) {

            this.name = data.name;
            this.gender = data.gender;
            this.product=data.productName;
        })

    })

    it('should Open URL', function () {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
    });

    it("Select Multiple Product From JSON FIle", function () {
        // Click on Shop form Nav
        cy.get(':nth-child(2) > .nav-link').click();
        cy.wait(2000);

        this.product.forEach((ele)=>{
            cy.SelectProduct(ele);
        })
        
    });


    // it('check Data Pass form JSON File', function () {
    //     cy.log( typeof this.product);
    //     cy.log( this.name);
    // });




});