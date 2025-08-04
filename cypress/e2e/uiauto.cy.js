describe('Store Brand Creation Test', () => {

    beforeEach(() => {
        cy.visit('https://dmsfrontenduat.z6.web.core.windows.net/')
        cy.get('#username').type('07035528282')
        cy.get('#password').type('07035528282')
        cy.get('.btn').click()
        cy.url().should('eq', 'https://dmsfrontenduat.z6.web.core.windows.net/buy/brand')
    });

    it('Confirm user can click the CREATE BUTTON', () => {
        cy.get('.btn').click()
        cy.get('.app-modal-body-content').should('be.visible')
        cy.get('.grid > .app-button > .btn').click()
        cy.url().should('eq', 'https://dmsfrontenduat.z6.web.core.windows.net/buy/add-supplier')

        cy.get(':nth-child(1) > [style="position: relative;"] > .select-wrapper > .select__input')
        .find('option').eq(5)
        .then(option => {
            const value = option.val();
            cy.get(':nth-child(1) > [style="position: relative;"] > .select-wrapper > .select__input').select(value);
        });

        cy.get(':nth-child(2) > [style="position: relative;"] > .select-wrapper > .select__input')
        .find('option').eq(2)
        .then(option => {
            const value = option.val();
            cy.get(':nth-child(2) > [style="position: relative;"] > .select-wrapper > .select__input').select(value);
            cy.get(':nth-child(3) > div > .form__input').type("10r1000")
cy.get('.mx-auto > :nth-child(4)').type("Felix")

cy.get(':nth-child(5) > div > .form__input').type("12987653")

        cy.get(':nth-child(7) > [style="position: relative;"] > .select-wrapper > .select__input')
        .find('option').eq(5)
        .then(option => {
            const value = option.val();
            cy.get(':nth-child(7) > [style="position: relative;"] > .select-wrapper > .select__input').select(value);
  });

    })















})