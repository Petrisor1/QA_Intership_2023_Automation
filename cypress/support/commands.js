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
          
            window.localStorage.setItem('token', response.body.auth_token)
           
          })
        
          cy.visit(`${loginData.url}/`);
          cy.wait(1000);
          cy.get('main > div:nth-child(1) > div > div.second-container-navbar > div > svg').should('be.visible');
          
    })
  });

  Cypress.Commands.add('loginInvalid', (email, password) => {
    let rasp;
    return cy.fixture('loginData').then((loginData) => {
      return cy.request({
        method: 'POST',
        url: loginData.loginRoute,
        body: {
          email: email,
          password: password,
        },
        failOnStatusCode: false,
      });
    });
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
