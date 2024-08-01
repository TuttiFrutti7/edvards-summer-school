class Global {
  elements = {
    sideBarBurger: () => cy.getByTestId("nav-menu-button"),
    sideBarLinks: (pageName) =>
      cy.getByTestId("nav-menu-popup").contains("a", pageName),
    footerLinks: () => cy.get("footer a"),
  };

  navigateSideBar = {
    openPage: (pageName) => {
      this.elements.sideBarBurger().click();
      this.elements.sideBarLinks(pageName).click();
    },
    logout: () => {
      this.elements.sideBarBurger().click();
      cy.getByTestId("logout-button").click();
    },
  };
}

export default new Global();
