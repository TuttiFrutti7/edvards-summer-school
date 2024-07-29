import Global from '../../pageElements/Global';
import Login from '../../pageElements/Login'
import Home from '../../pageElements/Home'

describe("login functionality", () => {
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
    Login.elements.fillEmail('bob@inbox.lv');
    Login.elements.passwordInput().should('be.visible').type("password");
    Login.elements.signInButton().click();
    Home.elements.headerLink().contains('Store of Excellence');
    Home.elements.productLink().should('have.length', 4);
    Global.navigateSideBar.openPage("Store");
  });

  it("invalid login", () => {
    Login.elements.emailInput().should('be.visible').type('fake@notreal.com');
    Login.elements.passwordInput().should('be.visible').type('fakepass');
    Login.elements.signInButton().click();
    cy.contains("Error: Wrong email or password");
  });
});
