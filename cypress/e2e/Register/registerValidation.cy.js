

describe("Test registration form",()=>{
  
    it("Verify registration API functionality",()=>{
        cy.fixture("routesForPages").then(data=>{
            cy.request({
                method:"OPTIONS",
                url:`${data.registration}`,
             body:{"email":"zitatuturor@gmail.com",
                "first_name":"venus",
                "last_name": "zeita",
                "password": "test123asdf"
            },
            failOnStatusCode: false,
        }).then(response=>{
            expect(response.status).to.equal(204);
            
        })
        })
    })

    it("TC91 Verify if is register is possible with no input data",()=>{
        cy.fixture("loginData").then(data=>{
            cy.visit(`${data.inregistrare}`)

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
            cy.visit(`${data.inregistrare}`)
            cy.get("main > div > div > div > div.second-container > div > form > div.button-wrapper > button").click();
            
            cy.contains("label", 'Nume și prenume').nextAll('div').find('i').next('input').type("%");
            cy.contains("label", 'Nume și prenume').siblings('p').should('have.text','Trbuie sa contina doar litere din alfabet.').should("be.visible");
            
            cy.contains("label", 'Prenume').nextAll('div').find('i').next('input').type("%");
            cy.contains("label", 'Prenume').siblings('p').should('have.text','Trbuie sa contina doar litere din alfabet.').should("be.visible");

        })
    })

    it(" Verify if password input does not accept less than 8 characters ",()=>{
        cy.fixture("loginData").then(data=>{
            cy.visit(`${data.inregistrare}`)
            cy.contains("label", 'Parola').nextAll('div').find('i').next('input').type("1234567");
            cy.get("button[class='auth-register-button-try']").click();
            cy.contains("label", 'Parola').siblings('p').should('have.text','Parola trebuie sa contina minim 8 caractere').should("be.visible");
        })
        })

    it("Verify if the email is in a valid format",()=>{
        cy.fixture("loginData").then(data=>{
            cy.visit(`${data.inregistrare}`)
            cy.contains("label", 'Adresa de e-mail').nextAll('div').find('i').next('input').type("petrisorc65.gmail.com");
            cy.get("button[class='auth-register-button-try']").click();
            cy.contains("label", 'Adresa de e-mail').siblings('p').should('have.text','Introdu o adresa de email corecta. E.g. example@email.com.').should("be.visible");
        })
    })

    it("Verify the funcitonality of show password icon",()=>{
        cy.fixture("loginData").then(data=>{
            cy.visit(data.inregistrare);
            cy.get('form input.input-field[placeholder="************"]').should("have.attr","type","password")

          
           cy.get(" i[class='left-icon'] > svg").click();

             cy.wait(5000);
            cy.get('form input.input-field[placeholder="************"]').should("have.attr","type","text")
    
        })
    })
})
