import Global from '../../pageElements/Global';
import Pages from '../../support/pages';

// https://tdlschool.atlassian.net/jira/software/c/projects/TSS22N/boards/274?selectedIssue=TSS22N-315
describe('check footer social icon links', () => {
  // footer links to check
  const links = {
    website: 'https://www.testdevlab.com/',
    linkedin: 'https://www.linkedin.com/company/testdevlab/',
    facebook: 'https://www.testdevlab.com/',
    twitter: 'https://twitter.com/testdevlab',
  };

  beforeEach(() => {
    cy.login(Cypress.env('username'), Cypress.env('password'));
    cy.visit('/');
  });

  // check if all the links are visible in the site
  Object.values(links).forEach((site) => {
    it(`test footer for ${site}`, () => {
      cy.getByHref(site);
    });
  });
});
