class Cart {
  elements = {
    checkoutButton: () => cy.getByTestId('checkout-button'),
    discount: () => cy.getByTestId('add-discount-button'),
    quantityOption: () => cy.getByTestId('product-select-button'),
  };
}

export default new Cart();
