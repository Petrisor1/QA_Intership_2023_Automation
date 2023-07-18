
describe("Test login funtionality through interface",()=>{

    it("TC28 Verify if user is able to login with valid data",()=>{
        cy.fixture("loginData").then(data=>{
            cy.visit(`${data.url}/conectare`)
            cy.get("#root > main > div > div > div > div.second-container > div > form > div:nth-child(1) > div > div > input").type(`${data.email}`);
            cy.get("#root > main > div > div > div > div.second-container > div > form > div:nth-child(2) > div > div > input").type(`${data.password}`);
            cy.get('#root > main > div > div > div > div.second-container > div > form > div.button-wrapper > button').click();
            cy.get('#root > main > div:nth-child(1) > div > div.second-container-navbar > div > svg').should("be.visible");
        })
    })

    it("TC30 Verify if a user is able to login with valid email and invalid password",()=>{
        cy.fixture("routesForPages").then(data=>{
            cy.visit(`${data.Conectare}`)
            cy.get("#root > main > div > div > div > div.second-container > div > form > div:nth-child(1) > div > div > input").type(`${data.email}`);
            cy.get("#root > main > div > div > div > div.second-container > div > form > div:nth-child(2) > div > div > input").type(`123`);
            cy.get('#root > main > div > div > div > div.second-container > div > form > div.button-wrapper > button').click();
            cy.get("#root > main > div > div > div > div.second-container > div > div > span").should("be.visible");
            
        })
    })

    it("TC36 Verify if is abled to login with only correct password and invalid email",()=>{
        cy.fixture("routesForPages").then(data=>{
            cy.visit(`${data.Conectare}`)
            cy.get("#root > main > div > div > div > div.second-container > div > form > div:nth-child(1) > div > div > input").type(`petrisorc65gmail.com`);
            cy.get("#root > main > div > div > div > div.second-container > div > form > div:nth-child(2) > div > div > input").type(`${data.password}`);
            cy.get('#root > main > div > div > div > div.second-container > div > form > div.button-wrapper > button').click();
            cy.get("#root > main > div > div > div > div.second-container > div > div > span").should("be.visible");
            
        })
    })

    it("Verify if is able to login with both empty required fields",()=>{
        cy.fixture("routesForPages").then(data=>{
            cy.visit(`${data.Conectare}`)
            cy.get("#root > main > div > div > div > div.second-container > div > form > div:nth-child(1) > div > div > input").type(' ');
            cy.get("#root > main > div > div > div > div.second-container > div > form > div:nth-child(2) > div > div > input").type(' ');
            cy.get('#root > main > div > div > div > div.second-container > div > form > div.button-wrapper > button').click();
            cy.get("#root > main > div > div > div > div.second-container > div > div > span").should("be.visible");
            
        })
    })

    it("TC37 Check if the hide/show password button makes the password visible ",()=>{
        cy.fixture("routesForPages").then(data=>{
            cy.visit(data.Conectare);
            cy.get("#root > main > div > div > div > div.second-container > div > form > div:nth-child(2) > div > div > input").should("have.attr","type","password")
            cy.get("#root > main > div > div > div > div.second-container > div > form > div:nth-child(2) > div > div > i.left-icon > svg").click();
            cy.wait(5000);
           cy.get("#root > main > div > div > div > div.second-container > div > form > div:nth-child(2) > div > div > input").should("have.attr","type","text")
    
        })
    })

    it("TC55	Verify if 'Inregistrează-te' button functionality works",()=>{
        cy.fixture("routesForPages").then(data=>{
            cy.visit(`${data.Conectare}`)
            cy.get("#root > main > div > div > div > div.second-container > div > form > div.auth-wrapper > a").click();
            cy.url().should("eq","https://amprenta.at.assistcloud.services/inregistrare");
        })
    })
})
