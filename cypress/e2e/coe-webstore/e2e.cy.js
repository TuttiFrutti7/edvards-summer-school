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

    it('logs in', () => {});

    it('selects product', () => {
      Home.elements.productLink().first().click();
      cy.getByTestId('product-description').should('be.visible', 'visible');
    });

    it('adds product to a cart', () => {
      cy.visit('https://coe-webstore.tdlbox.com/products/t-shirt');
      cy.getByTestId('add-product-button').should('not.be.enabled');
      cy.getByTestId('product-options').contains('M').click();
      cy.getByTestId('product-options').contains('White').click();
      cy.getByTestId('add-product-button').should('be.enabled');
      cy.getByTestId('add-product-button').click();
    });

    it('checks out', () => {
      cy.getByTestId('nav-cart-link').click();
      cy.getByTestId('checkout-button').click();
      cy.getByTestId('shipping-first-name-input').type('Bob');
      cy.getByTestId('shipping-last-name-input').type('Bob');
      cy.getByTestId('shipping-address-input').type('Traktoru iela 23423');
      cy.getByTestId('shipping-postal-code-input').type('LV-2121');
      cy.getByTestId('shipping-city-input').type('Riga');
      cy.getByTestId('shipping-country-select').select('lv').should('have.value', 'lv');
      cy.getByTestId('shipping-email-input').clear().type('bob@inbox.lv');
      cy.getByTestId('submit-address-button').click();
      cy.getByTestId('delivery-option-radio').contains('FakeEx Express').click();
      cy.getByTestId('submit-delivery-option-button').click();
      cy.getByTestId('submit-payment-button').should('be.visible').click();
      cy.getByTestId('submit-order-button').should('be.visible').click();
    });

    it('logs out', () => {
      Global.navigateSideBar.logout();
    });
})