import Pages from "../../support/pages";

// https://tdlschool.atlassian.net/jira/software/c/projects/TSS22N/boards/274?selectedIssue=TSS22N-16
describe("get directed to sign up", () => {
  beforeEach(() => {
    cy.visit("/sign-in");
  });

  it('check "Join us" button takes to sign up', () => {
    cy.getByHref("/us/sign-up").click();
  });
});
