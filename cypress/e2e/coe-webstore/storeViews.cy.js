import Pages from '../../support/pages';

// https://tdlschool.atlassian.net/jira/software/c/projects/TSS22N/boards/274?selectedIssue=TSS22N-171
describe('Test different views in the store page', () => {
  const USERNAME = Cypress.env('username');
  const PASSWORD = Cypress.env('password');

  beforeEach(() => {
    cy.login(USERNAME, PASSWORD);
    cy.visit('/store');
  });

  it('click on both view buttons', () => {
    Pages.Store.elements.tableView().should('be.visible').click();
    cy.getByTestId('table-page-title').should('exist');
    cy.getByTestId('store-page-title').should('not.exist');

    Pages.Store.elements.storeView().should('be.visible').click();
    cy.getByTestId('store-page-title').should('exist');
    cy.getByTestId('table-page-title').should('not.exist');
  });
});
