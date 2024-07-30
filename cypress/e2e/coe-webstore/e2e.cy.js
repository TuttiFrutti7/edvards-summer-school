import Global from '../../pageElements/Global';
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

    it('selects product', () => {
      Home.elements.productLink().first().click();
      Product.elements.description().should('be.visible');
    });

    it('adds product to a cart', () => {
      cy.visit('/products/t-shirt');
      Product.elements.addProductButton().should('not.be.enabled')
      Product.elements.productOptions('XL').click();
      Product.elements.productOptions('White').click();
      Product.elements.addProductButton().should('be.enabled').click();
    });

    it('goes to checkout', () => {
      cy.visit('/cart');
      Cart.elements.checkoutButton().click();
      cy.contains('Shipping Address');
    });

    /* TODO:
      - add countdown for buttons to finish loading
    */
    it('fills in checkout', () => {
      cy.visit('/checkout?step=address');
      // enters shipping information
      //Checkout.elements.shippingFirstNameInput().clear().type('Bob');
      //Checkout.elements.shippingLastNameInput().clear().type('Dragon');
      //Checkout.elements.shippingAddressInput().clear().type('Traktoru iela 34');
      //Checkout.elements.shippingPostalCodeInput().clear().type('LV-4200')
      //Checkout.elements.shippingCityInput().clear().type('Riga');
      //Checkout.elements.shippingCountrySelect('lv').should('have.value', 'lv');
      //Checkout.elements.shippingEmailInput().clear().type('bob@inbox.lv');

      // Trying to automate the shipping form
      Checkout.fillShipping();
      Checkout.elements.continueToDeliveryButton().click();

      // the rest
      Checkout.elements.deliveryOption('FakeEx Express').click();
      Checkout.elements.continueToPaymentButton().click();
      Checkout.elements.continueToReview().click();
      Checkout.elements.placeOrder().click();
      cy.contains('Your order was placed successfully');
    });

    it('logs out', () => {
      Global.navigateSideBar.logout();
      cy.url().should('include', '/sign-in');
    });
})