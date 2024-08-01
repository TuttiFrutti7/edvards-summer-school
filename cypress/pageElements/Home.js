class Home {
  elements = {
    headerLink: () => cy.getByTestId('nav-store-link'),
    productLink: () => cy.getByTestId('product-wrapper'),
    storeLink: () => cy.get('[href="/us/store"]'),
  };
}

export default new Home();
