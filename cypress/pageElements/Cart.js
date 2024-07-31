class Cart {
  elements = {
    checkoutButton: () => cy.getByTestId('checkout-button'),
    quantityOption: () => cy.getByTestId('product-select-button'),
    discountButton: () => cy.getByTestId('add-discount-button'),
    discountInput: () => cy.getByTestId('discount-input'),
    applyDiscountButton: () => cy.getByTestId('discount-apply-button'),
    removeDiscountButton: () => cy.getByTestId('remove-discount-button'),
  };

  addDiscount(code) {
    this.elements.discountButton().should('be.enabled').click();
    this.elements.discountInput().clear().type(code);
    this.elements.applyDiscountButton().should('be.enabled').click();
    cy.getByTestId('discount-amount').contains('(10%)');
  }

  removeDiscount() {
    this.elements.removeDiscountButton().click();
  }
}

export default new Cart();
