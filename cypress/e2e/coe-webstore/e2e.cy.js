import Pages from "../../support/pages";

// https://tdlschool.atlassian.net/jira/software/c/projects/TSS22N/boards/274?issueType=10015&selectedIssue=TSS22N-264
describe("End to end functionality", () => {
  const USERNAME = Cypress.env("username");
  const PASSWORD = Cypress.env("password");

  beforeEach(() => {
    cy.login(USERNAME, PASSWORD);
    cy.visit("/");
  });

  it("selects product", () => {
    Pages.Home.elements.productLink().first().click();
    Pages.Product.elements.description().should("be.visible");
  });

  it("adds product to a cart", () => {
    cy.visit("/products/t-shirt");
    Pages.Product.elements.addProductButton().should("not.be.enabled");
    Pages.Product.elements.productOptions("XL").click();
    Pages.Product.elements.productOptions("White").click();
    Pages.Product.elements.addProductButton().should("be.enabled").click();
    Pages.Product.elements
      .addProductButton()
      .should("have.text", "Select variant");
  });

  it("goes to checkout", () => {
    cy.visit("/cart");
    Pages.Cart.elements.checkoutButton().click();
    cy.contains("Shipping Address");
  });

  it("fills in checkout", () => {
    cy.visit("/checkout?step=address");
    Pages.Checkout.fillShippingForm();
    Pages.Checkout.elements
      .continueToDeliveryButton()
      .should("be.enabled")
      .click();
    Pages.Checkout.elements.deliveryOption("FakeEx Express").click();
    Pages.Checkout.elements
      .continueToPaymentButton()
      .should("be.enabled")
      .click();
    Pages.Checkout.elements.continueToReview().should("be.enabled").click();
    Pages.Checkout.elements.placeOrder().should("be.enabled").click();
    cy.contains("Your order was placed successfully");
  });

  it("logs out", () => {
    Pages.Global.navigateSideBar.logout();
    cy.url().should("include", "/sign-in");
  });
});
