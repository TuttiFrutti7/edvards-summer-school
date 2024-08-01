class Store {
  elements = {
    tableView: () => cy.getByHref('/us/store/table'),
    storeView: () => cy.getByHref('/us/store'),
    productLink: () => cy.getByTestId('product-wrapper'),
  };
}

export default new Store();
