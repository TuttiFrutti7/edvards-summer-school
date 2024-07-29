import Home from '../pageElements/Home'

class Login {
  elements = {
    signInButton: () => cy.getByTestId("sign-in-button"),
    emailInput: () => cy.getByTestId("email-input"),
    passwordInput: () => cy.getByTestId("password-input"),
  };

  fillEmail(email) {
    this.elements.emailInput().clear().type(email);
  }

  fillPassword(password) {
    this.elements.passwordInput().clear().type(password);
  }
}

export default new Login();
