import Login from '../pageElements/Login'
import Home from '../pageElements/Home'

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
// Cypress.Commands.add('login', (email, password) => { ... })
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

Cypress.Commands.add('getByTestId', (id) => {
  cy.get(`[data-testid=${id}]`);
});

Cypress.Commands.add('login', (username, password) => {
    //cy.visit('/');
    //cy.contains('h1', 'Welcome back');
    //Login.fillEmail(username);
    //Login.fillPassword(password);
    //Login.elements.signInButton().click();
    //Home.elements.headerLink().contains('Store of Excellence');
    //Home.elements.productLink().should('have.length', 4);

    cy.session(username, () => {
      cy.visit('/');
      cy.contains('h1', 'Welcome back');
      Login.fillEmail(username);
      Login.fillPassword(password);
      Login.elements.signInButton().click();
      Home.elements.headerLink().contains('Store of Excellence');
      Home.elements.productLink().should('have.length', 4);
    //},
    //{
      //validate() {
        //cy.request('')
      //}
    })
})