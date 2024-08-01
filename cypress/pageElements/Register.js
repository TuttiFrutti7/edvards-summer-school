class Register {
  elements = {
    firstNameInput: () => cy.getByTestId('first-name-input'),
    lastNameInput: () => cy.getByTestId('last-name-input'),
    emailInput: () => cy.getByTestId('email-input'),
    phoneInput: () => cy.getByTestId('phone-input'),
    passwordInput: () => cy.getByTestId('password-input'),
    joinButton: () => cy.getByTestId('register-button'),
    signInButton: () => cy.getByTestId('sign-in-button'),
  };

  fillFirstName(firstName) {
    this.elements.firstNameInput().clear().type(firstName);
  }

  fillLastName(lastName) {
    this.elements.lastNameInput().clear().type(lastName);
  }

  fillEmail(email) {
    this.elements.emailInput().clear().type(email);
  }

  fillPhone(phone) {
    this.elements.phoneInput().clear().type(phone);
  }

  fillPassword(password) {
    this.elements.passwordInput().clear().type(password);
  }
}

export default new Register();
