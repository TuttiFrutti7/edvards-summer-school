class Home {
  elements = {
    headerLink: () => cy.getByTestId('nav-store-link'),
    productLink: () => cy.getByTestId('product-wrapper'),
    storeLink: () => cy.get('[href="/us/store"]'), // is 'a' really necessary?
  };
}

export default new Home();
