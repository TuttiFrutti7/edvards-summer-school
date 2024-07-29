import Global from '../../pageElements/Global';
import Login from '../../pageElements/Login'
import Home from '../../pageElements/Home'

describe("login functionality", () => {

  const username = Cypress.env('username');
  const password = Cypress.env('password');

  beforeEach(() => {
    cy.visit("/");
  });

  it("opens webstore page", () => {
    cy.contains("Welcome back");
    Login.elements.emailInput('should.be', 'visible');
    Login.elements.passwordInput('should.be', 'visible');
    Login.elements.signInButton('should.be', 'visible');
  });

  it("logins to webstore", () => {
    cy.login(username, password);
  });

  it("invalid login", () => {
    cy.login('fake@notreal.com', 'fakepass');
    cy.contains("Error: Wrong email or password");
  });
});
