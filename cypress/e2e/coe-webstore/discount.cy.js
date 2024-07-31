import Pages from '../../support/pages';

// https://tdlschool.atlassian.net/jira/software/c/projects/TSS22N/boards/274?selectedIssue=TSS22N-320
describe('Test applying discount code', () => {

    beforeEach(() => {
        cy.login(Cypress.env('username'), Cypress.env('password'));
    });

    it('add item to cart', () => {
        cy.visit('/products/shorts');
        Pages.Product.elements.productOptions('M').click();
        Pages.Product.elements.addProductButton().should('be.enabled').click();
        Pages.Product.elements.addProductButton()
          .should('have.text', 'Select variant');
    });

    it('open "Cart" page from the side menu', () => {
        cy.visit('/products/shorts');
        Pages.Global.navigateSideBar.openPage('Cart');
    });

    it('add discount code', () => {
        cy.visit('/cart');
        Pages.Cart.addDiscount('SUMMERSCHOOL');
        Pages.Cart.removeDiscount();
    });
})