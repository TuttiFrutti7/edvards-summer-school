class Dashboard {
  elements = {
    overviewLink: () => getByTestId('overview-link'),
    profileLink: () => getByTestId('profile-link'),
    addressesLink: () => getByTestId('addresses-link'),
    ordersLink: () => getByTestId('orders-link'),
    logOutButton: () => getByTestId('logout-button'),
  };
}

export default new Dashboard();
