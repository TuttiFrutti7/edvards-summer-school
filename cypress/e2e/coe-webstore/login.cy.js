import Pages from '../../support/pages';

// https://tdlschool.atlassian.net/browse/TSS22N-38
describe('log in with a created user', () => {
  const USERNAME = Cypress.env('username');
  const PASSWORD = Cypress.env('password');

  beforeEach(() => {
    cy.visit('/');
  });

  it('opens webstore page', () => {
    cy.contains('Welcome back');
    Pages.Login.elements.emailInput('should.be', 'visible');
    Pages.Login.elements.passwordInput('should.be', 'visible');
    Pages.Login.elements.signInButton('should.be', 'visible');
  });

  it('logins to webstore', () => {
    cy.login(USERNAME, PASSWORD);
  });
});
