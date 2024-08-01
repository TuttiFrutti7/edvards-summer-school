import Pages from '../../support/pages'

describe('get directed to sign up', () => {

    beforeEach(() => {
        cy.visit('/sign-in');
    })

    it('check "Join us" button takes to sign up', () => {
        cy.getByHref('/us/sign-up').click();
    })
})