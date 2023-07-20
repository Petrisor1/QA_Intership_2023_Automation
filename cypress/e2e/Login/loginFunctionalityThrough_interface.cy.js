import "../../support/commands";

import Login from "../../integration/PageObject/login.js";

describe("Test login funtionality through interface", () => {
  const login = new Login;
  beforeEach(() => {
    // cy.visit('/conectare');

   
    login.navigate();
  
  })
  it("TC28 Verify if user is able to login with valid data", () => {
   
     cy.fixture('loginData').then((data)=>{

      login.email(`${data.email}`);
      login.password(`${data.password}`);
      login.submit();

      cy.get("div[class='auth-user']").should("be.visible");
     })
      
    
  });

  it("TC30 Verify if a user is able to login with valid email and invalid password", () => {
    let randomPass = cy.randomGen();
    cy.fixture('loginData').then((data)=>{
      login.email(`${data.email}`);
      login.password(`${randomPass}`);
      login.submit();

      cy.get(
        "main > div > div > div > div.second-container > div > div > span"
      ).should("be.visible");
      })
  });

  it("TC36 Verify if is abled to login with only correct password and invalid email", () => {
    let random = cy.randomGen();
    cy.fixture('loginData').then((data)=>{

       login.email(`${random}`);

      login.password(`${data.password}`);

      login.submit();
      cy.get(
        "main > div > div > div > div.second-container > div > div > span"
      ).should("be.visible");
      })
  });

  it("Verify if is able to login with both empty required fields", () => {
   
    login.email(` `);

    login.password(` `);

    login.submit();

      cy.get(
        "main > div > div > div > div.second-container > div > div > span"
      ).should("be.visible");
    
  });

  it("TC37 Check if the hide/show password button makes the password visible ", () => {
  
      cy.get('form input.input-field[placeholder="************"]').should(
        "have.attr",
        "type",
        "password"
      );

      // cy.get("main > div > div > div > div.second-container > div > form > div:nth-child(2) > div > div > i.left-icon > svg").click();
      cy.get(" i[class='left-icon'] > svg").click();

      cy.wait(5000);
      cy.get('form input.input-field[placeholder="************"]').should(
        "have.attr",
        "type",
        "text"
      );
    
  });

  it("TC55	Verify if 'Inregistrează-te' button functionality works", () => {
    
      cy.get(
        "main > div > div > div > div.second-container > div > form > div.auth-wrapper > a"
      ).click();
      cy.url().should(
        "eq",
        "https://amprenta.at.assistcloud.services/inregistrare"
      );
   
  });

  it("Verify if the error has propper style", () => {
   
            cy.get("button[class='auth-register-button-try']").click();

      cy.contains("label", "Adresa de e-mail")
        .next("div")
        .should("have.css", "border", "2px solid rgb(247, 142, 145)");
      cy.contains("label", "Parola")
        .next("div")
        .should("have.css", "border", "2px solid rgb(247, 142, 145)");
  
  });
});
