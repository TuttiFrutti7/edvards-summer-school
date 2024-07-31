import Pages from '../../support/pages';

// https://tdlschool.atlassian.net/browse/TSS22N-40
describe('Check register user with empty mandatary field', () => {
  it('fills register form', () => {
    cy.visit('/sign-up');
    Pages.Register.fillFirstName('Jusus');
    Pages.Register.fillLastName('Crust');
    Pages.Register.fillEmail('jesus@heaven.org'); // idk should I leave
    Pages.Register.fillPhone('77777777');
    Pages.Register.fillPassword('PraiseTheLord7!');

    cy.get('form').filter(':invalid').should('not.exist'); // idk should I leave

    Pages.Register.elements.emailInput().clear(); // idk should I leave
    Pages.Register.elements.joinButton().click();

    cy.url().should('include', '/sign-up');
    Pages.Register.elements.emailInput().should('have.focus');
    cy.get('form').filter(':invalid').should('exist'); // idk should i LEAVE (probably)
  });
});
