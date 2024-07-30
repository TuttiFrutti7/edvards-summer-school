import Global from '../../pageElements/Global';
import Login from '../../pageElements/Login';
import Home from '../../pageElements/Home'
import Checkout from '../../pageElements/Checkout';
import Cart from '../../pageElements/Cart';
import Product from '../../pageElements/Product';

describe('End to end functionality', () => {

    const USERNAME = Cypress.env('username');
    const PASSWORD = Cypress.env('password');

    beforeEach(() => {
        cy.login(USERNAME, PASSWORD);
        cy.visit('/');
    });

    it('logs in', () => {});

    it('selects product', () => {
      Home.elements.productLink().first().click();
      Product.elements.description().should('be.visible');
    });

    it('adds product to a cart', () => {
      cy.visit('https://coe-webstore.tdlbox.com/products/t-shirt');
      Product.elements.addProductButton().should('not.be.enabled')
      Product.elements.productOptions('M').click();
      Product.elements.productOptions('White').click();
      Product.elements.addProductButton().should('be.enabled').click();
    });

    it('goes to checkout', () => {
      cy.visit('https://coe-webstore.tdlbox.com/cart');
      Cart.elements.checkoutButton().click();
    });

    it('fills in checkout', () => {
      cy.visit('https://coe-webstore.tdlbox.com/checkout?step=address');
      // Enter shipping address
      cy.getByTestId('shipping-first-name-input').clear().type('Bob');
      cy.getByTestId('shipping-last-name-input').clear().type('Bob');
      cy.getByTestId('shipping-address-input').clear().type('Traktoru iela 23423');
      cy.getByTestId('shipping-postal-code-input').clear().type('LV-2121');
      cy.getByTestId('shipping-city-input').clear().type('Riga');
      cy.getByTestId('shipping-country-select').select('lv').should('have.value', 'lv');
      cy.getByTestId('shipping-email-input').clear().type('bob@inbox.lv');
      // The rest of checkout
      Checkout.elements.continueToDeliveryButton().click();
      Checkout.elements.deliveryOption('FakeEx Express').click();
      Checkout.elements.continueToPaymentButton().click();
      Checkout.elements.continueToReview().click();
      Checkout.elements.placeOrder().click();
    });

    it('logs out', () => {
      Global.navigateSideBar.logout();
    });
})