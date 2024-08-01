import Pages from '../../support/pages';

//https://tdlschool.atlassian.net/jira/software/c/projects/TSS22N/boards/274?selectedIssue=TSS22N-19
describe('Sign in with not registered email and password', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('fills login form with invalid credentials', () => {
    Pages.Login.fillEmail('mark.john@gmail.com');
    Pages.Login.fillPassword('abc135234');
    Pages.Login.elements.signInButton().click();
    cy.contains('Error: Wrong email or password');
  });
});
