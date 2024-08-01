class Checkout {
  elements = {
    continueToDeliveryButton: () => cy.getByTestId('submit-address-button'),
    continueToPaymentButton: () =>
      cy.getByTestId('submit-delivery-option-button'),
    continueToReview: () => cy.getByTestId('submit-payment-button'),
    placeOrder: () => cy.getByTestId('submit-order-button'),
    deliveryOption: (option) =>
      cy.getByTestId('delivery-option-radio').contains(option),
  };

  // function automates the checkout shipping form fill
  fillShippingForm() {
    // shipping form data is taken from 'shipping-form.json' fixture
    cy.fixture('shipping-form.json').then((data) => {
      // each form field is filled
      for (const [KEY, VALUE] of Object.entries(data)) {
        if (KEY == 'shipping-country-select') {
          cy.getByTestId(KEY).select(VALUE).should('have.value', VALUE);
        } else {
          cy.getByTestId(KEY).clear().type(VALUE);
        }
      }
    });
  }
}

export default new Checkout();
