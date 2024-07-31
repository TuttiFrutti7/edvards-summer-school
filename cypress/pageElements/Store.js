class Store {
  elements = {
    tableView: () => cy.get('[href="/us/store/table"]'),
    storeView: () => cy.get('[href="/us/store"]'),
    productLink: () => cy.getByTestId('product-wrapper'),
  };
}

export default new Store();
