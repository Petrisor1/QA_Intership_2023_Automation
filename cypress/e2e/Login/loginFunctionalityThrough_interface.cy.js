import "../../support/commands";

describe("Test login funtionality through interface", () => {
  beforeEach(() => {
    cy.visit('/conectare');
  })
  it("TC28 Verify if user is able to login with valid data", () => {
   
     cy.fixture('loginData').then((data)=>{
      cy.get(
        'form input.input-field[placeholder="namesurname@domain.com"]'
      ).type(data.email);
      cy.get('form input.input-field[placeholder="************"]').type(
        `${data.password}`
      );
      cy.get(
        "main > div > div > div > div.second-container > div > form > div.button-wrapper > button"
      ).click();
      // cy.get('main > div:nth-child(1) > div > div.second-container-navbar > div > svg').should("be.visible");
      cy.get("div[class='auth-user']").should("be.visible");
     })
      
    
  });

  it("TC30 Verify if a user is able to login with valid email and invalid password", () => {
    let randomPass = cy.randomGen();
    cy.fixture('loginData').then((data)=>{
      cy.get(
        'form input.input-field[placeholder="namesurname@domain.com"]'
      ).type(`${data.email}`);
      cy.get('form input.input-field[placeholder="************"]').type(
        `${randomPass}`
      );
      cy.get(
        "main > div > div > div > div.second-container > div > form > div.button-wrapper > button"
      ).click();
      cy.get(
        "main > div > div > div > div.second-container > div > div > span"
      ).should("be.visible");
      })
  });

  it("TC36 Verify if is abled to login with only correct password and invalid email", () => {
    let random = cy.randomGen();
    cy.fixture('loginData').then((data)=>{
      cy.get(
        'form input.input-field[placeholder="namesurname@domain.com"]'
      ).type(`${random}`);
      cy.get('form input.input-field[placeholder="************"]').type(
        `${data.password}`
      );
      cy.get(
        "main > div > div > div > div.second-container > div > form > div.button-wrapper > button"
      ).click();
      cy.get(
        "main > div > div > div > div.second-container > div > div > span"
      ).should("be.visible");
      })
  });

  it("Verify if is able to login with both empty required fields", () => {
   
      cy.get(
        'form input.input-field[placeholder="namesurname@domain.com"]'
      ).type(" ");
      cy.get('form input.input-field[placeholder="************"]').type(" ");
      cy.get(
        "main > div > div > div > div.second-container > div > form > div.button-wrapper > button"
      ).click();
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
