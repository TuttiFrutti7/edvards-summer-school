class Product {
  elements = {
    productOptions: (option) =>
      cy.getByTestId("product-options").contains(option),
    addProductButton: () => cy.getByTestId("add-product-button"),
    description: () => cy.getByTestId("product-description"),
  };
}

export default new Product();
