import Login from '../../pageElements/Login';

//
describe('login functionality', () => {
  const USERNAME = Cypress.env('username');
  const PASSWORD = Cypress.env('password');

  beforeEach(() => {
    cy.visit('/');
  });

  //
  it('opens webstore page', () => {
    cy.contains('Welcome back');
    Login.elements.emailInput('should.be', 'visible');
    Login.elements.passwordInput('should.be', 'visible');
    Login.elements.signInButton('should.be', 'visible');
  });

  // https://tdlschool.atlassian.net/browse/TSS22N-38
  it('logins to webstore', () => {
    cy.login(USERNAME, PASSWORD);
  });

  it('invalid login', () => {
    Login.fillEmail('notreal@gmail.com');
    Login.fillPassword('fakeprofile');
    Login.elements.signInButton().click();
    cy.contains('Error: Wrong email or password');
  });
});
