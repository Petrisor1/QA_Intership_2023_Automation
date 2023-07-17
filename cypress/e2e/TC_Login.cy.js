/// <reference types="cypress" />

import  "../support/commands";

describe("Test login functionality / a more structured way", ()=>{
    beforeEach(()=>{

        cy.login();
    })
    it("Login test",()=>{
        cy.fixture('loginData').then(data=>{
            cy.visit(data.url);
        })
        
    })
})