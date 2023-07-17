// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('login', (email, password) => { 
    cy.fixture('loginData').then((loginData) =>{
        cy.request('POST', `${loginData.loginRoute}`, {
            email: loginData.email,
            password: loginData.password,
          }).then((response) => {
            //cy.setCookie('sessionId', response.body.sessionId)
            window.localStorage.setItem('token', response.body.auth_token)
            cy.setCookie('userName', response.body.firstName +" "+ response.body.lastName)
          })
        
          cy.visit(`${loginData.url}/`);
          cy.wait(1000);
          cy.get('main > div:nth-child(1) > div > div.second-container-navbar > div > svg').should('be.visible');
          
    })
  });
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
