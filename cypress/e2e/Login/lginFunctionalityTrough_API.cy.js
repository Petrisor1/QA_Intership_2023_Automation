/// <reference types="cypress" />

import  "../../support/commands";

describe("Test API login functionality", ()=>{

    it("TC28 Verify if user is able to login with valid data",()=>{
        cy.login();
    })

    it("TC30 Verify if a user is able to login with valid email and invalid password",()=>{
        
       //Am creat inca o functie de logare (in commands) care returneaza...
       //raspunsul primit de la cerere (pentru a putea testa logarea invalida)
       
       cy.fixture("loginData").then((data)=>{
        let  randomPass= cy.randomGen();
            cy.loginInvalid(data.email,`${randomPass}`).then(resp=>{
           expect(resp.status).to.equal(401);
           expect(resp.body).to.have.property('error_msg',"Invalid Credentials")
           });
           
        })
    })

    it("TC36 Verify the login page for both, when the field is blank and 'Conecteaza-te' button is clicked",()=>{
        cy.loginInvalid("","").then(resp=>{
            expect(resp.status).to.equal(401);
           expect(resp.body).to.have.property('error_msg',"Invalid Credentials")
        })
    })

    it(" Verify if is abled to login with only correct password and invalid email",()=>{
        let  invalidEmail= cy.randomGen();
        cy.fixture("loginData").then(data=>{
        cy.loginInvalid(`${invalidEmail}`,data.password).then(resp=>{
            expect(resp.status).to.equal(401);
            expect(resp.body).to.have.property('error_msg',"Invalid Credentials")
        })
       })
        
    })
    
})

