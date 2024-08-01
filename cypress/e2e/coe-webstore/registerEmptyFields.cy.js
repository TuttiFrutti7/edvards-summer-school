import Pages from '../../support/pages';

// https://tdlschool.atlassian.net/browse/TSS22N-40
describe('Check register user with empty mandatary field', () => {
  it('fills register form', () => {
    // Fill in sign up form
    cy.visit('/sign-up');
    Pages.Register.fillFirstName('Jusus');
    Pages.Register.fillLastName('Crust');
    Pages.Register.fillEmail('jesus@heaven.org');
    Pages.Register.fillPhone('77777777');
    Pages.Register.fillPassword('PraiseTheLord7!');

    // Form should be valid for submition
    cy.get('form').filter(':invalid').should('not.exist');

    // Clear an mandatary field
    Pages.Register.elements.emailInput().clear();

    // Attempt to sign up
    Pages.Register.elements.joinButton().click();

    // Sign up should fail
    cy.url().should('include', '/sign-up');
    Pages.Register.elements.emailInput().should('have.focus');
    cy.get('form').filter(':invalid').should('exist');
  });
});
