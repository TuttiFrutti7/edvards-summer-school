class Login {
  elements = {
    signInButton: () => cy.getByTestId("sign-in-button"),
    emailInput: () => cy.getByTestId("email-input"),
    passwordInput: () => cy.getByTestId("password-input"),
    fillEmail: (email) => this.elements.emailInput().type(email),
  };
}

export default new Login();
