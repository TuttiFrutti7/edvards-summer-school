import Global from '../../pageElements/Global';
import Login from '../../pageElements/Login'
import Home from '../../pageElements/Home'

describe('End to end functionality', () => {

    const username = Cypress.env('username');
    const password = Cypress.env('password');

    beforeEach(() => {
        cy.login(username, password);
        cy.visit('/');
    });

    it('logs in', () => {
      Home.elements.headerLink().contains('Store of Excellence');
      Home.elements.productLink().should('have.length', 4);
    });

    it('selects product', () => {
      Home.elements.productLink().first().click();
      cy.getByTestId('product-description').should('be.visible', 'visible');
    });

    it('adds product to a cart', () => {
      cy.visit('https://coe-webstore.tdlbox.com/products/t-shirt');
      cy.getByTestId('product-options').first().first().click();
      cy.getByTestId('product-options').second().first().click();
    });

    it('checks out', () => {

    });

    it('logs out', () => {

    });
})