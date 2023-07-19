
import  "../../support/commands";
describe("Test registration form",()=>{
  
    beforeEach(()=>{
        cy.visit(`/inregistrare`)
    })

    it("Verify registration API functionality",()=>{
        
        let firstName=cy.randomGen();
        let lastName=cy.randomGen();
        let password=cy.randomGen();
        let email= `vasile@${cy.randomGen()}`; 
        
            cy.request({
                method:"OPTIONS",
                url:`${Cypress.config().baseApiUrl}/api/v1/users/sign_up`,
             body:{"email":`${email}`,
                "first_name":`${firstName}`,
                "last_name": `${lastName}`,
                "password": `${password}`
            },
            failOnStatusCode: false,
        }).then(response=>{
            expect(response.status).to.equal(204);
            
        })
       
    })

    it("TC91 Verify if is register is possible with no input data",()=>{
        cy.fixture("loginData").then(data=>{
          

            cy.get("main > div > div > div > div.second-container > div > form > div.button-wrapper > button").click();
            // cy.get("main > div > div > div > div.second-container > div > form > div:nth-child(1) > div > p").should("be.visible");
            cy.contains("label", 'Nume și prenume').siblings('p').should('have.text','Acest camp este obligatoriu.').should("be.visible");
            cy.contains("label", 'Prenume').siblings('p').should('have.text','Acest camp este obligatoriu.').should("be.visible");
            cy.contains("label", 'Adresa de e-mail').siblings('p').should('have.text','Acest camp este obligatoriu.').should("be.visible");
            cy.contains("label", 'Parola').siblings('p').should('have.text','Acest camp este obligatoriu.').should("be.visible");

        })
    })

    it("TC90 	Verify if input fields recive an apropriate message for inserting special characters data",()=>{
        cy.fixture("loginData").then(data=>{
           
            cy.get("main > div > div > div > div.second-container > div > form > div.button-wrapper > button").click();
            
            cy.contains("label", 'Nume și prenume').nextAll('div').find('i').next('input').type("%");
            cy.contains("label", 'Nume și prenume').siblings('p').should('have.text','Trbuie sa contina doar litere din alfabet.').should("be.visible");
            
            cy.contains("label", 'Prenume').nextAll('div').find('i').next('input').type("%");
            cy.contains("label", 'Prenume').siblings('p').should('have.text','Trbuie sa contina doar litere din alfabet.').should("be.visible");

        })
    })

    it(" Verify if password input does not accept less than 8 characters ",()=>{
        cy.fixture("loginData").then(data=>{
            
            
            cy.contains("label", 'Parola').nextAll('div').find('i').next('input').type("1234567");
            cy.get("button[class='auth-register-button-try']").click();
            cy.contains("label", 'Parola').siblings('p').should('have.text','Parola trebuie sa contina minim 8 caractere')
            .should("be.visible")
           
        })
        })

    it("Verify if the email is in a valid format",()=>{
        cy.fixture("loginData").then(data=>{
            let random=cy.randomGen();
           
            cy.contains("label", 'Adresa de e-mail').nextAll('div').find('i').next('input').type(`${random}`);
            cy.get("button[class='auth-register-button-try']").click();
            cy.contains("label", 'Adresa de e-mail').siblings('p').should('have.text','Introdu o adresa de email corecta. E.g. example@email.com.')
            .should("be.visible")
            
        })
    })

    it("Verify the funcitonality of show password icon",()=>{
        cy.fixture("loginData").then(data=>{
            
            cy.get('form input.input-field[placeholder="************"]').should("have.attr","type","password")

          
           cy.get(" i[class='left-icon'] > svg").click();

             cy.wait(5000);
            cy.get('form input.input-field[placeholder="************"]').should("have.attr","type","text")
    
        })
    })

    it("Verify if the error has propper style",()=>{
        cy.fixture("loginData").then(data=>{
        
        cy.get("main > div > div > div > div.second-container > div > form > div.button-wrapper > button").click();

        cy.contains("label", "Nume și prenume").next("div").should("have.css","border","2px solid rgb(247, 142, 145)");
        cy.contains("label", "Prenume").next("div").should("have.css","border","2px solid rgb(247, 142, 145)");
        cy.contains("label", "Adresa de e-mail").next("div").should("have.css","border","2px solid rgb(247, 142, 145)");
        cy.contains("label", "Parola").next("div").should("have.css","border","2px solid rgb(247, 142, 145)");
        

        cy.contains("label", 'Nume și prenume').siblings('p').should("have.css","color","rgb(247, 142, 145)")
        cy.contains("label", 'Prenume').siblings('p').should("have.css","color","rgb(247, 142, 145)")
        cy.contains("label", 'Adresa de e-mail').siblings('p').should("have.css","color","rgb(247, 142, 145)")
        cy.contains("label", 'Parola').siblings('p').should("have.css","color","rgb(247, 142, 145)")
        })
        
    })
  
})
